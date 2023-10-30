export const CheckpointTest = {
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
      name: "test_checkpoint_failure_future_checkpoint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "test_checkpoint_failure_invalid_checkpoint_time",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "test_checkpoint_in_the_past",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "test_checkpoint_latest_checkpoint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "test_checkpoint_preset_checkpoint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "test_checkpoint_redemption",
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
      "0x6080604081905260078054600160ff199182168117909255600b8054909116909117905563f877cb1960e01b90526020608452600f60a4526e1350525393915517d49410d7d55493608a1b60c452737109709ecfa91a80626ff3989d68f67f5b1dd12d63f877cb1960e4600060405180830381865afa15801562000087573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620000b1919081019062000194565b602990620000c09082620002f8565b5060405163f877cb1960e01b815260206004820152600e60248201526d11d3d154931257d49410d7d5549360921b6044820152737109709ecfa91a80626ff3989d68f67f5b1dd12d9063f877cb1990606401600060405180830381865afa15801562000130573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200015a919081019062000194565b602a90620001699082620002f8565b503480156200017757600080fd5b50620003c4565b634e487b7160e01b600052604160045260246000fd5b60006020808385031215620001a857600080fd5b82516001600160401b0380821115620001c057600080fd5b818501915085601f830112620001d557600080fd5b815181811115620001ea57620001ea6200017e565b604051601f8201601f19908116603f011681019083821181831017156200021557620002156200017e565b8160405282815288868487010111156200022e57600080fd5b600093505b8284101562000252578484018601518185018701529285019262000233565b600086848301015280965050505050505092915050565b600181811c908216806200027e57607f821691505b6020821081036200029f57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002f357600081815260208120601f850160051c81016020861015620002ce5750805b601f850160051c820191505b81811015620002ef57828155600101620002da565b5050505b505050565b81516001600160401b038111156200031457620003146200017e565b6200032c8162000325845462000269565b84620002a5565b602080601f8311600181146200036457600084156200034b5750858301515b600019600386901b1c1916600185901b178555620002ef565b600085815260208120601f198616915b82811015620003955788860151825594840194600190910190840162000374565b5085821015620003b45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b61fccc80620003d46000396000f3fe60806040523480156200001157600080fd5b5060043610620001515760003560e01c806385226c8111620000c7578063b5508aa91162000086578063b5508aa9146200027b578063ba414fa61462000285578063bfa96f3f14620002a0578063e20c9f7114620002aa578063f126118014620002b4578063fa7626d414620002be57600080fd5b806385226c81146200022d5780638533530e1462000246578063916a17c6146200025057806396a5c8df146200025a578063ab75e7c3146200026457600080fd5b80633f7286f411620001145780633f7286f414620001c6578063507ffba514620001d057806366d9a9a014620002005780636861fc2a14620002195780637892faea146200022357600080fd5b80630a9254e414620001565780631071676014620001625780631ed7831c146200018c5780633e5e0d2614620001a55780633e5e3c2314620001bc575b600080fd5b62000160620002cc565b005b620001796200017336600462003fb8565b62000743565b6040519081526020015b60405180910390f35b62000196620007cb565b6040516200018391906200400a565b62000179620001b636600462004059565b6200082f565b6200019662000a8f565b6200019662000af1565b620001e7620001e13660046200411d565b62000b53565b6040516001600160a01b03909116815260200162000183565b6200020a62000c69565b604051620001839190620041d8565b6200016062000d5c565b62000160620010a7565b6200023762001350565b604051620001839190620042e3565b620001606200142a565b6200020a62001861565b620001606200194b565b620001606200027536600462004349565b62001a24565b6200023762001d5d565b6200028f62001e37565b604051901515815260200162000183565b6200016062001f64565b620001966200205f565b62000160620020c1565b6007546200028f9060ff1681565b620002d6620022c2565b601c546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200fb68833981519152906306447d5690602401600060405180830381600087803b1580156200032b57600080fd5b505af115801562000340573d6000803e3d6000fd5b505050506012600080604051620003579062003f78565b60a08082526004908201819052634261736560e01b60c083015260e060208301819052820152634241534560e01b61010082015260ff90931660408401526001600160a01b0390911660608301521515608082015261012001604051809103906000f080158015620003cd573d6000803e3d6000fd5b50602b60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060006040518060600160405280600081526020016000815260200160008152509050600066b1a2bc2ec5000090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e1338081526020016201518081526020016200049b84620025a2565b81526024546001600160a01b0390811660208301526023541660408083019190915260608201869052600560808301526103e860a090920191909152519091506000908290620004eb9062003f86565b620004f7919062004431565b604051809103906000f08015801562000514573d6000803e3d6000fd5b5090508181604051620005279062003f94565b6200053492919062004442565b604051809103906000f08015801562000551573d6000803e3d6000fd5b50602c60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000805160206200fc2183398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620005c657600080fd5b505af1158015620005db573d6000803e3d6000fd5b5050602480546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200fb6883398151915293506306447d56925001600060405180830381600087803b1580156200063357600080fd5b505af115801562000648573d6000803e3d6000fd5b5050602c546025546040516338c0646560e11b81526001600160a01b0391821660048201526001602482015291169250637180c8ca9150604401600060405180830381600087803b1580156200069d57600080fd5b505af1158015620006b2573d6000803e3d6000fd5b5050602b5460ff1691506200073d9050576000805160206200fb6883398151915263e5d6bf02620006e96301e13380600362004482565b6040518263ffffffff1660e01b81526004016200070891815260200190565b600060405180830381600087803b1580156200072357600080fd5b505af115801562000738573d6000803e3d6000fd5b505050505b50505050565b6040516370a0823160e01b81526001600160a01b038085166004830152600091620007c391869186918216906370a0823190602401602060405180830381865afa15801562000796573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007bc91906200449c565b856200082f565b949350505050565b606060148054806020026020016040519081016040528092919081815260200182805480156200082557602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831162000806575b5050505050905090565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa1580156200087b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620008a191906200449c565b905080841115620008c55760405163188c93a560e31b815260040160405180910390fd5b6000805160206200fc2183398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200091357600080fd5b505af115801562000928573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03891660048201526000805160206200fb6883398151915292506306447d569150602401600060405180830381600087803b1580156200097d57600080fd5b505af115801562000992573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a764000060248201526000805160206200fb68833981519152925063c88a5e6d9150604401600060405180830381600087803b158015620009f557600080fd5b505af115801562000a0a573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af115801562000a5e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a849190620044b6565b509295945050505050565b6060601680548060200260200160405190810160405280929190818152602001828054801562000825576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000806575050505050905090565b6060601580548060200260200160405190810160405280929190818152602001828054801562000825576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000806575050505050905090565b60008160405160200162000b689190620044da565b60408051601f198184030181529082905280516020909101206318caf8e360e31b825291506000805160206200fb688339815191529063c657c7189062000bb69084908690600401620044ef565b600060405180830381600087803b15801562000bd157600080fd5b505af115801562000be6573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab240000060248201526000805160206200fb68833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000c4b57600080fd5b505af115801562000c60573d6000803e3d6000fd5b50505050919050565b60606019805480602002602001604051908101604052809291908181526020016000905b8282101562000d535760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801562000d3a57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841162000cfb5790505b5050505050815250508152602001906001019062000c8d565b50505050905090565b601c5462000d88906001600160a01b031666b1a2bc2ec500006b019d971e4fe8401e74000000620025f6565b50601d5460009062000daf906001600160a01b03166a084595161401484a00000062002633565b601e54909250690a968163f0a57b400000915062000dd7906001600160a01b0316826200267a565b5050602c5460408051630c048d9160e31b815290516000926001600160a01b0316916360246c88916004808301926101a09291908290030181865afa15801562000e25573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000e4b919062004515565b60800151602c54604051636809623960e01b815262015180600482015267016345785d8a000060248201529192506001600160a01b031690636809623990604401600060405180830381600087803b15801562000ea757600080fd5b505af115801562000ebc573d6000803e3d6000fd5b5050602c546000925062000eda91506001600160a01b0316620026b5565b602c549091506001600160a01b031663ed64bab262000ef982620027bc565b6040518263ffffffff1660e01b815260040162000f1891815260200190565b600060405180830381600087803b15801562000f3357600080fd5b505af115801562000f48573d6000803e3d6000fd5b5050602c5462000f6f925062000f6891506001600160a01b0316620026b5565b8262002846565b602c546000906001600160a01b03166320fc488162000f8e82620027bc565b6040518263ffffffff1660e01b815260040162000fad91815260200190565b6040805180830381865afa15801562000fca573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000ff09190620045c3565b90506200100b81600001516001600160801b03168462002846565b602c5460408051630c048d9160e31b815290516000926001600160a01b0316916360246c88916004808301926101a09291908290030181865afa15801562001057573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200107d919062004515565b90506200108f8160a001518762002846565b6200109f8160e001518662002846565b505050505050565b601c54620010d3906001600160a01b031666b1a2bc2ec500006b019d971e4fe8401e74000000620025f6565b50601d54620010f7906001600160a01b03166a084595161401484a00000062002633565b5050601e54690a968163f0a57b400000906200111d906001600160a01b0316826200267a565b506000805160206200fb68833981519152905063e5d6bf02620011456301e13380426200463b565b6040518263ffffffff1660e01b81526004016200116491815260200190565b600060405180830381600087803b1580156200117f57600080fd5b505af115801562001194573d6000803e3d6000fd5b5050602c546001600160a01b0316915063ed64bab29050620011b682620027bc565b6040518263ffffffff1660e01b8152600401620011d591815260200190565b600060405180830381600087803b158015620011f057600080fd5b505af115801562001205573d6000803e3d6000fd5b5050602c54600092506001600160a01b031690506320fc48816200122982620027bc565b6040518263ffffffff1660e01b81526004016200124891815260200190565b6040805180830381865afa15801562001265573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200128b9190620045c3565b90506000602c60009054906101000a90046001600160a01b03166001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa158015620012e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200130a919062004515565b90506200132982600001516001600160801b0316826080015162002846565b6200133a8160a00151600062002846565b6200134b8160e00151600062002846565b505050565b60606018805480602002602001604051908101604052809291908181526020016000905b8282101562000d53578382906000526020600020018054620013969062004651565b80601f0160208091040260200160405190810160405280929190818152602001828054620013c49062004651565b8015620014155780601f10620013e95761010080835404028352916020019162001415565b820191906000526020600020905b815481529060010190602001808311620013f757829003601f168201915b50505050508152602001906001019062001374565b601c5462001456906001600160a01b031666b1a2bc2ec500006b019d971e4fe8401e74000000620025f6565b50601d546200147a906001600160a01b03166a084595161401484a00000062002633565b5050601e54690a968163f0a57b40000090620014a0906001600160a01b0316826200267a565b506000805160206200fb68833981519152905063e5d6bf02620014c86301e13380426200463b565b6040518263ffffffff1660e01b8152600401620014e791815260200190565b600060405180830381600087803b1580156200150257600080fd5b505af115801562001517573d6000803e3d6000fd5b5050602c546001600160a01b0316915063ed64bab290506200153982620027bc565b6040518263ffffffff1660e01b81526004016200155891815260200190565b600060405180830381600087803b1580156200157357600080fd5b505af115801562001588573d6000803e3d6000fd5b505050506000602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa158015620015e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620016099190620046fa565b60a00151602c5462001624906001600160a01b0316620027bc565b620016309190620047bc565b602c546040516376b25d5960e11b8152600481018390529192506001600160a01b03169063ed64bab290602401600060405180830381600087803b1580156200167857600080fd5b505af11580156200168d573d6000803e3d6000fd5b5050602c54600092506001600160a01b031690506320fc4881620016b182620027bc565b6040518263ffffffff1660e01b8152600401620016d091815260200190565b6040805180830381865afa158015620016ed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620017139190620045c3565b90506000602c60009054906101000a90046001600160a01b03166001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa1580156200176c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001792919062004515565b9050620017b182600001516001600160801b0316826080015162002846565b602c546040516320fc488160e01b8152600481018590526001600160a01b03909116906320fc4881906024016040805180830381865afa158015620017fa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620018209190620045c3565b91506200183f82600001516001600160801b0316826080015162002846565b620018508160a00151600062002846565b6200073d8160e00151600062002846565b6060601a805480602002602001604051908101604052809291908181526020016000905b8282101562000d535760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200193257602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620018f35790505b5050505050815250508152602001906001019062001885565b604051630618f58760e51b815263ecd29e8160e01b60048201526000805160206200fb688339815191529063c31eb0e090602401600060405180830381600087803b1580156200199a57600080fd5b505af1158015620019af573d6000803e3d6000fd5b5050602c546001600160a01b0316915063ed64bab29050620019d562015180426200463b565b6040518263ffffffff1660e01b8152600401620019f491815260200190565b600060405180830381600087803b15801562001a0f57600080fd5b505af11580156200073d573d6000803e3d6000fd5b6000821280159062001a5e5762001a58848310156040518060600160405280603681526020016200fc616036913962002947565b62001a85565b62001a858285116040518060600160405280602781526020016200fba86027913962002947565b60008162001a94578462001aa0565b62001aa084866200463b565b90506000821562001ab2578562001ac9565b62001abd85620047d2565b62001ac99087620047bc565b90508084108062001ad957508184115b1562001b4f5762001b17848260405180604001604052806013815260200172195e18d959591cc81b1bddd95c88189bdd5b99606a1b81525062002980565b6200109f848360405180604001604052806013815260200172195e18d959591cc81d5c1c195c88189bdd5b99606a1b815250620029bd565b821562001c4f57600062001b648786620047bc565b90508581101562001c225760408051808201909152601a81527f507265636973696f6e20696e637265617365642062793a202573000000000000602082015262001bba9062001bb48389620047bc565b620029fa565b62001beb6040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b8152508762002a43565b62001c1c6040518060400160405280600d81526020016c4e65772044656c74613a20257360981b81525082620029fa565b62001c48565b62001c4883866040518060600160405280602981526020016200fbcf6029913962002a8c565b506200109f565b600062001c5d8588620047bc565b905062001c6a86620047d2565b81101562001d2e5762001cc56040518060400160405280601a81526020017f507265636973696f6e20696e637265617365642062793a202573000000000000815250828862001cb990620047d2565b62001bb49190620047bc565b62001cf66040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b8152508762002a43565b62001d286040518060400160405280600e81526020016d4e65772044656c74613a202d257360901b81525082620029fa565b62001d54565b62001d5482866040518060600160405280602981526020016200fbf86029913962002a8c565b50505050505050565b60606017805480602002602001604051908101604052809291908181526020016000905b8282101562000d5357838290600052602060002001805462001da39062004651565b80601f016020809104026020016040519081016040528092919081815260200182805462001dd19062004651565b801562001e225780601f1062001df65761010080835404028352916020019162001e22565b820191906000526020600020905b81548152906001019060200180831162001e0457829003601f168201915b50505050508152602001906001019062001d81565b600754600090610100900460ff161562001e5a5750600754610100900460ff1690565b60006000805160206200fb688339815191523b1562001f5f57604080516000805160206200fb68833981519152602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909162001ee1917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001620047f1565b60408051601f198184030181529082905262001efd9162004824565b6000604051808303816000865af19150503d806000811462001f3c576040519150601f19603f3d011682016040523d82523d6000602084013e62001f41565b606091505b509150508080602001905181019062001f5b9190620044b6565b9150505b919050565b602c5460009062001f7e906001600160a01b0316620027bc565b604051630618f58760e51b815263ecd29e8160e01b60048201529091506000805160206200fb688339815191529063c31eb0e090602401600060405180830381600087803b15801562001fd057600080fd5b505af115801562001fe5573d6000803e3d6000fd5b5050602c546001600160a01b0316915063ed64bab29050620020098360016200463b565b6040518263ffffffff1660e01b81526004016200202891815260200190565b600060405180830381600087803b1580156200204357600080fd5b505af115801562002058573d6000803e3d6000fd5b5050505050565b6060601380548060200260200160405190810160405280929190818152602001828054801562000825576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000806575050505050905090565b601c54620020ed906001600160a01b031666b1a2bc2ec500006b019d971e4fe8401e74000000620025f6565b50620021056201518067016345785d8a000062002ac8565b602c5460408051630c048d9160e31b815290516000926001600160a01b0316916360246c88916004808301926101a09291908290030181865afa15801562002151573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002177919062004515565b60800151602c5490915060009062002198906001600160a01b0316620026b5565b602c549091506001600160a01b031663ed64bab2620021b782620027bc565b6040518263ffffffff1660e01b8152600401620021d691815260200190565b600060405180830381600087803b158015620021f157600080fd5b505af115801562002206573d6000803e3d6000fd5b5050602c5462002226925062000f6891506001600160a01b0316620026b5565b602c546000906001600160a01b03166320fc48816200224582620027bc565b6040518263ffffffff1660e01b81526004016200226491815260200190565b6040805180830381865afa15801562002281573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620022a79190620045c3565b90506200134b81600001516001600160801b03168462002846565b620022ea60405180604001604052806005815260200164616c69636560d81b81525062000b53565b601c80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b60208201526200232f9062000b53565b601d80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b6020820152620023779062000b53565b601e80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b6020820152620023bc9062000b53565b601f80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b6020820152620024019062000b53565b602060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555062002452604051806040016040528060088152602001673232b83637bcb2b960c11b81525062000b53565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b60208201526200249a9062000b53565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600c81526b3332b2a1b7b63632b1ba37b960a11b6020820152620024e89062000b53565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b6020820152620025349062000b53565b602480546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b60208201526200257c9062000b53565b602580546001600160a01b0319166001600160a01b039290921691909117905542602855565b600080620025d9620025c9620025ba85606462004482565b66a5bbed86c5a0009062002ba2565b6748cd4072281e00009062002bb9565b9050620025ef670de0b6b3a76400008262002bb9565b9392505050565b6000620007c38484846040518060a00160405280600115158152602001878152602001600081526020016000815260200160001981525062002bd0565b6000806200266f84846040518060a001604052806001151581526020018781526020016000815260200187815260200160001981525062002f5a565b915091509250929050565b6000806200266f84846040518060a00160405280600115158152602001878152602001600081526020016000815260200187815250620032df565b600080826001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa158015620026f8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200271e9190620046fa565b90506000836001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562002762573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002788919062004515565b9050620007c3620027a28260000151836020015162003720565b8260400151846020015185608001518660c0015162003740565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa158015620027fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620028249190620046fa565b60a0015162002834904262004858565b620028409042620047bc565b92915050565b80821462002943576000805160206200fb48833981519152604051620028a89060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b60608201526020810184905290516000805160206200fc418339815191529181900360800190a160408051818152600a91810191909152690808080808149a59da1d60b21b6060820152602081018290526000805160206200fc41833981519152906080015b60405180910390a1620029436200378e565b5050565b8162002943576000805160206200fb88833981519152816040516200296d91906200486f565b60405180910390a1620029438262003897565b818310156200134b576000805160206200fb8883398151915281604051620029a991906200486f565b60405180910390a16200134b838362003901565b818311156200134b576000805160206200fb8883398151915281604051620029e691906200486f565b60405180910390a16200134b8383620039f0565b62002943828260405160240162002a13929190620048a0565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b17905262003a53565b62002943828260405160240162002a5c929190620048a0565b60408051601f198184030181529190526020810180516001600160e01b0316631e53134760e11b17905262003a53565b8183146200134b576000805160206200fb888339815191528160405162002ab491906200486f565b60405180910390a16200134b838362002846565b602c54604051636809623960e01b815260048101849052602481018390526001600160a01b0390911690636809623990604401600060405180830381600087803b15801562002b1657600080fd5b505af115801562002b2b573d6000803e3d6000fd5b506000805160206200fb68833981519152925063e5d6bf02915062002b53905084426200463b565b6040518263ffffffff1660e01b815260040162002b7291815260200190565b600060405180830381600087803b15801562002b8d57600080fd5b505af11580156200109f573d6000803e3d6000fd5b6000620025ef8383670de0b6b3a764000062003a5e565b6000620025ef83670de0b6b3a76400008462003a5e565b60006000805160206200fc2183398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562002c2057600080fd5b505af115801562002c35573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200fb6883398151915292506306447d569150602401600060405180830381600087803b15801562002c8a57600080fd5b505af115801562002c9f573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562002d04573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002d2a9190620046fa565b516001600160a01b031614801562002d40575081515b1562002dde57602c5460208301518351604051632002b33360e01b815260048101879052602481018890526001600160a01b0389811660448301529115156064820152921691632002b333919060840160206040518083038185885af115801562002daf573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062002dd691906200449c565b9050620007c3565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562002e2f57600080fd5b505af115801562002e44573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562002ea9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002ecf9190620044b6565b50602c548251604051632002b33360e01b815260048101869052602481018790526001600160a01b0388811660448301529115156064820152911690632002b333906084016020604051808303816000875af115801562002f34573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002dd691906200449c565b6000806000805160206200fc2183398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562002fab57600080fd5b505af115801562002fc0573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200fb6883398151915292506306447d569150602401600060405180830381600087803b1580156200301557600080fd5b505af11580156200302a573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa1580156200308f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620030b59190620046fa565b516001600160a01b0316148015620030cb575082515b156200316957602c54602084015160608501516040808701518751915163036d741560e11b81526001600160a01b03909516946306dae82a94936200311a938b9391928d9190600401620048c4565b604080518083038185885af115801562003138573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906200315f9190620048f2565b91509150620032d7565b602b5460405163140e25ad60e31b8152600481018690526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b158015620031b457600080fd5b505af1158015620031c9573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810189905261010090920416925063095ea7b391506044016020604051808303816000875af115801562003228573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200324e9190620044b6565b50602c5460608401516040808601518651915163036d741560e11b81526001600160a01b03909416936306dae82a9362003292938a9391928c9190600401620048c4565b60408051808303816000875af1158015620032b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200315f9190620048f2565b935093915050565b6000806000805160206200fc2183398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200333057600080fd5b505af115801562003345573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200fb6883398151915292506306447d569150602401600060405180830381600087803b1580156200339a57600080fd5b505af1158015620033af573d6000803e3d6000fd5b5050602c54620033cb92506001600160a01b0316905062003a7d565b915073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003440573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620034669190620046fa565b516001600160a01b03161480156200347c575082515b156200351b57602c54602084015160808501516040808701518751915163a179403b60e01b81526001600160a01b039095169463a179403b9493620034cb938b9391928d9190600401620048c4565b604080518083038185885af1158015620034e9573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620035109190620048f2565b9092509050620032d7565b602b54602084015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200356c57600080fd5b505af115801562003581573d6000803e3d6000fd5b5050602b54602c54608087015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af1158015620035e6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200360c9190620044b6565b50602c5460808401516040808601518651915163a179403b60e01b81526001600160a01b039094169363a179403b9362003650938a9391928c9190600401620048c4565b60408051808303816000875af11580156200366f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620036959190620048f2565b602b54602086015192945090925061010090046001600160a01b0316906342966c6890620036c5908490620047bc565b6040518263ffffffff1660e01b8152600401620036e491815260200190565b600060405180830381600087803b158015620036ff57600080fd5b505af115801562003714573d6000803e3d6000fd5b50505050935093915050565b6000806200372f838562004917565b90506000811215620025ef57600080fd5b600080620037518787878662003b00565b9050620037836200376882866301e1338062003b24565b6200377c83670de0b6b3a7640000620047bc565b9062002bb9565b979650505050505050565b6000805160206200fb688339815191523b156200388657604080516000805160206200fb68833981519152602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f1981840301815290829052620038219291602001620047f1565b60408051601f19818403018152908290526200383d9162004824565b6000604051808303816000865af19150503d80600081146200387c576040519150601f19603f3d011682016040523d82523d6000602084013e62003881565b606091505b505050505b6007805461ff001916610100179055565b80620038fe576000805160206200fb48833981519152604051620038ec9060208082526017908201527f4572726f723a20417373657274696f6e204661696c6564000000000000000000604082015260600190565b60405180910390a1620038fe6200378e565b50565b8082101562002943576000805160206200fb48833981519152604051620039649060208082526022908201527f4572726f723a2061203e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16040805181815260098183015268202056616c7565206160b81b60608201526020810184905290516000805160206200fc418339815191529181900360800190a1604080518181526009918101919091526810102b30b63ab2903160b91b6060820152602081018290526000805160206200fc418339815191529060800162002931565b8082111562002943576000805160206200fb48833981519152604051620039649060208082526022908201527f4572726f723a2061203c3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b620038fe8162003b4b565b600082600019048411830215820262003a7657600080fd5b5091020490565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003abf573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003ae59190620046fa565b6080015162003af483620027bc565b6200284091906200463b565b600062003b1b8262003b1485888862003a5e565b9062003b6c565b95945050505050565b600082600019048411830215820262003b3c57600080fd5b50910281810615159190040190565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60008160000362003b875750670de0b6b3a764000062002840565b8260000362003b995750600062002840565b81600062003ba78562003bd7565b905081810262003bc0670de0b6b3a76400008262004941565b905062003bcd8162003deb565b9695505050505050565b600080821362003bfa57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821362003e0757506000919050565b680755bf798b4a1bf1e5821262003e315760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b611daa806200497683390190565b6125b1806200672083390190565b616e778062008cd183390190565b6001600160a01b0381168114620038fe57600080fd5b60008060006060848603121562003fce57600080fd5b833562003fdb8162003fa2565b9250602084013562003fed8162003fa2565b9150604084013562003fff8162003fa2565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b818110156200404d5783516001600160a01b03168352928401929184019160010162004026565b50909695505050505050565b600080600080608085870312156200407057600080fd5b84356200407d8162003fa2565b935060208501356200408f8162003fa2565b9250604085013591506060850135620040a88162003fa2565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715620040f057620040f0620040b3565b60405290565b604051610180810167ffffffffffffffff81118282101715620040f057620040f0620040b3565b6000602082840312156200413057600080fd5b813567ffffffffffffffff808211156200414957600080fd5b818401915084601f8301126200415e57600080fd5b813581811115620041735762004173620040b3565b604051601f8201601f19908116603f011681019083821181831017156200419e576200419e620040b3565b81604052828152876020848701011115620041b857600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156200428057898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b808310156200426a5783516001600160e01b0319168252928b019260019290920191908b01906200423e565b50978a0197955050509187019160010162004200565b50919998505050505050505050565b60005b83811015620042ac57818101518382015260200162004292565b50506000910152565b60008151808452620042cf8160208601602086016200428f565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156200433c57603f1988860301845262004329858351620042b5565b945092850192908501906001016200430a565b5092979650505050505050565b6000806000606084860312156200435f57600080fd5b505081359360208301359350604090920135919050565b80516001600160a01b031682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151620043da60e08401826001600160a01b03169052565b50610100818101516001600160a01b0381168483015250506101208181015180518483015260208101516101408501526040810151610160850152505061014081015161018083015261016001516101a090910152565b6101c0810162002840828462004376565b6101e0810162004453828562004376565b6001600160a01b03929092166101c09190910152919050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176200284057620028406200446c565b600060208284031215620044af57600080fd5b5051919050565b600060208284031215620044c957600080fd5b81518015158114620025ef57600080fd5b602081526000620025ef6020830184620042b5565b6001600160a01b0383168152604060208201819052600090620007c390830184620042b5565b60006101a082840312156200452957600080fd5b62004533620040c9565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152508091505092915050565b600060408284031215620045d657600080fd5b6040516040810181811067ffffffffffffffff82111715620045fc57620045fc620040b3565b60405282516001600160801b03811681146200461757600080fd5b81526020830151600f81900b81146200462f57600080fd5b60208201529392505050565b808201808211156200284057620028406200446c565b600181811c908216806200466657607f821691505b6020821081036200468757634e487b7160e01b600052602260045260246000fd5b50919050565b805162001f5f8162003fa2565b600060608284031215620046ad57600080fd5b6040516060810181811067ffffffffffffffff82111715620046d357620046d3620040b3565b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c082840312156200470e57600080fd5b62004718620040f6565b62004723836200468d565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200476f60e084016200468d565b60e0820152610100620047848185016200468d565b9082015261012062004799858583016200469a565b908201526101808301516101408201526101a09092015161016083015250919050565b818103818111156200284057620028406200446c565b6000600160ff1b8201620047ea57620047ea6200446c565b5060000390565b6001600160e01b0319831681528151600090620048168160048501602087016200428f565b919091016004019392505050565b60008251620048388184602087016200428f565b9190910192915050565b634e487b7160e01b600052601260045260246000fd5b6000826200486a576200486a62004842565b500690565b60408152600560408201526422b93937b960d91b6060820152608060208201526000620025ef6080830184620042b5565b604081526000620048b56040830185620042b5565b90508260208301529392505050565b948552602085019390935260408401919091526001600160a01b031660608301521515608082015260a00190565b600080604083850312156200490657600080fd5b505080516020909101519092909150565b81810360008312801583831316838312821617156200493a576200493a6200446c565b5092915050565b60008262004953576200495362004842565b600160ff1b8214600019841416156200497057620049706200446c565b50059056fe6101006040523480156200001257600080fd5b5060405162001daa38038062001daa833981016040819052620000359162000291565b8130818188888860006200004a8482620003d7565b506001620000598382620003d7565b5060ff81166080524660a0526200006f6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052506200052192505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200014e9190620004a3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001de57600080fd5b81516001600160401b0380821115620001fb57620001fb620001b6565b604051601f8301601f19908116603f01168101908282118183101715620002265762000226620001b6565b816040528381526020925086838588010111156200024357600080fd5b600091505b8382101562000267578582018301518183018401529082019062000248565b600093810190920192909252949350505050565b805180151581146200028c57600080fd5b919050565b600080600080600060a08688031215620002aa57600080fd5b85516001600160401b0380821115620002c257600080fd5b620002d089838a01620001cc565b96506020880151915080821115620002e757600080fd5b50620002f688828901620001cc565b945050604086015160ff811681146200030e57600080fd5b60608701519093506001600160a01b03811681146200032c57600080fd5b91506200033c608087016200027b565b90509295509295909350565b600181811c908216806200035d57607f821691505b6020821081036200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d257600081815260208120601f850160051c81016020861015620003ad5750805b601f850160051c820191505b81811015620003ce57828155600101620003b9565b5050505b505050565b81516001600160401b03811115620003f357620003f3620001b6565b6200040b8162000404845462000348565b8462000384565b602080601f8311600181146200044357600084156200042a5750858301515b600019600386901b1c1916600185901b178555620003ce565b600085815260208120601f198616915b82811015620004745788860151825594840194600190910190840162000453565b5085821015620004935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004b38162000348565b60018281168015620004ce5760018114620004e45762000515565b60ff198416875282151583028701945062000515565b8760005260208060002060005b858110156200050c5781548a820152908401908201620004f1565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161183a6200057060003960008181610850015281816108b601528181610bf50152610c570152600061082c015260006107f7015260006102ae015261183a6000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b14610495578063ea7ca276146104cb578063ed0d0efb14610502578063f2fde38b1461052257600080fd5b8063bf7e214f1461041b578063c53a39851461042e578063d505accf14610457578063dd62ed3e1461046a57600080fd5b80639dc29fac116100de5780639dc29fac146103cf578063a0712d68146103e2578063a9059cbb146103f5578063b70096131461040857600080fd5b80637a9e5e4b146103695780637ecebe001461037c5780638da5cb5b1461039c57806395d89b41146103c757600080fd5b8063313ce567116101875780634b5159da116101565780634b5159da1461031057806367aff4841461032357806370a0823114610336578063728b952b1461035657600080fd5b8063313ce567146102a95780633644e515146102e257806340c10f19146102ea57806342966c68146102fd57600080fd5b80630bade8a4116101c35780630bade8a4146102555780630ea9b75b1461027857806318160ddd1461028d57806323b872dd1461029657600080fd5b806306a36aee146101ea57806306fdde031461021d578063095ea7b314610232575b600080fd5b61020a6101f83660046112f2565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610225610535565b604051610214919061130f565b61024561024036600461135d565b6105c3565b6040519015158152602001610214565b6102456102633660046113a6565b600a6020526000908152604090205460ff1681565b61028b6102863660046113e0565b610630565b005b61020a60025481565b6102456102a4366004611427565b610711565b6102d07f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610214565b61020a6107f3565b61028b6102f836600461135d565b61084e565b61028b61030b366004611468565b6108b4565b61028b61031e366004611481565b610919565b61028b6103313660046114b8565b6109ab565b61020a6103443660046112f2565b60036020526000908152604090205481565b61028b6103643660046114e6565b610a73565b61028b6103773660046112f2565b610afc565b61020a61038a3660046112f2565b60056020526000908152604090205481565b6006546103af906001600160a01b031681565b6040516001600160a01b039091168152602001610214565b610225610be6565b61028b6103dd36600461135d565b610bf3565b61028b6103f0366004611468565b610c55565b61024561040336600461135d565b610cb7565b610245610416366004611514565b610d1d565b6007546103af906001600160a01b031681565b6103af61043c3660046112f2565b6008602052600090815260409020546001600160a01b031681565b61028b61046536600461155b565b610e1b565b61020a6104783660046114e6565b600460209081526000928352604080842090915290825290205481565b6102456104a33660046115c9565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b6102456104d93660046115fc565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b61020a6105103660046113a6565b600b6020526000908152604090205481565b61028b6105303660046112f2565b61105f565b6000805461054290611628565b80601f016020809104026020016040519081016040528092919081815260200182805461056e90611628565b80156105bb5780601f10610590576101008083540402835291602001916105bb565b820191906000526020600020905b81548152906001019060200180831161059e57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061061e9086815260200190565b60405180910390a35060015b92915050565b610646336000356001600160e01b0319166110dd565b61066b5760405162461bcd60e51b815260040161066290611662565b60405180910390fd5b801561069b576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106c2565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610704911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461076d57610748838261169e565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b0385166000908152600360205260408120805485929061079590849061169e565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716906000805160206117e5833981519152906107de9087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461082957610824611187565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108a65761088a336000356001600160e01b0319166110dd565b6108a65760405162461bcd60e51b8152600401610662906116b1565b6108b08282611221565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561090c576108f0336000356001600160e01b0319166110dd565b61090c5760405162461bcd60e51b8152600401610662906116b1565b610916338261127b565b50565b61092f336000356001600160e01b0319166110dd565b61094b5760405162461bcd60e51b815260040161066290611662565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109c1336000356001600160e01b0319166110dd565b6109dd5760405162461bcd60e51b815260040161066290611662565b8015610a0c576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a32565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610704911515815260200190565b610a89336000356001600160e01b0319166110dd565b610aa55760405162461bcd60e51b815260040161066290611662565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610b91575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b5090339030906001600160e01b031960003516906004016116e8565b602060405180830381865afa158015610b6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b919190611715565b610b9a57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001805461054290611628565b7f000000000000000000000000000000000000000000000000000000000000000015610c4b57610c2f336000356001600160e01b0319166110dd565b610c4b5760405162461bcd60e51b8152600401610662906116b1565b6108b0828261127b565b7f000000000000000000000000000000000000000000000000000000000000000015610cad57610c91336000356001600160e01b0319166110dd565b610cad5760405162461bcd60e51b8152600401610662906116b1565b6109163382611221565b33600090815260036020526040812080548391908390610cd890849061169e565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133906000805160206117e58339815191529061061e9086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610db95760405163b700961360e01b81526001600160a01b0382169063b700961390610d70908890889088906004016116e8565b602060405180830381865afa158015610d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db19190611715565b9150506107ec565b6001600160e01b031983166000908152600a602052604090205460ff1680610e1257506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e6b5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610662565b60006001610e776107f3565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610f83573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610fb95750876001600160a01b0316816001600160a01b0316145b610ff65760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610662565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611075336000356001600160e01b0319166110dd565b6110915760405162461bcd60e51b815260040161066290611662565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611167575060405163b700961360e01b81526001600160a01b0382169063b700961390611126908790309088906004016116e8565b602060405180830381865afa158015611143573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111679190611715565b8061117f57506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111b99190611732565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b806002600082825461123391906117d1565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481526000805160206117e583398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112a390849061169e565b90915550506002805482900390556040518181526000906001600160a01b038416906000805160206117e58339815191529060200161126f565b6001600160a01b038116811461091657600080fd5b60006020828403121561130457600080fd5b81356107ec816112dd565b600060208083528351808285015260005b8181101561133c57858101830151858201604001528201611320565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561137057600080fd5b823561137b816112dd565b946020939093013593505050565b80356001600160e01b0319811681146113a157600080fd5b919050565b6000602082840312156113b857600080fd5b6107ec82611389565b803560ff811681146113a157600080fd5b801515811461091657600080fd5b6000806000606084860312156113f557600080fd5b6113fe846113c1565b925061140c60208501611389565b9150604084013561141c816113d2565b809150509250925092565b60008060006060848603121561143c57600080fd5b8335611447816112dd565b92506020840135611457816112dd565b929592945050506040919091013590565b60006020828403121561147a57600080fd5b5035919050565b6000806040838503121561149457600080fd5b61149d83611389565b915060208301356114ad816113d2565b809150509250929050565b6000806000606084860312156114cd57600080fd5b83356114d8816112dd565b925061140c602085016113c1565b600080604083850312156114f957600080fd5b8235611504816112dd565b915060208301356114ad816112dd565b60008060006060848603121561152957600080fd5b8335611534816112dd565b92506020840135611544816112dd565b915061155260408501611389565b90509250925092565b600080600080600080600060e0888a03121561157657600080fd5b8735611581816112dd565b96506020880135611591816112dd565b955060408801359450606088013593506115ad608089016113c1565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156115dc57600080fd5b6115e5836113c1565b91506115f360208401611389565b90509250929050565b6000806040838503121561160f57600080fd5b823561161a816112dd565b91506115f3602084016113c1565b600181811c9082168061163c57607f821691505b60208210810361165c57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561062a5761062a611688565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561172757600080fd5b81516107ec816113d2565b600080835481600182811c91508083168061174e57607f831692505b6020808410820361176d57634e487b7160e01b86526022600452602486fd5b8180156117815760018114611796576117c3565b60ff19861689528415158502890196506117c3565b60008a81526020902060005b868110156117bb5781548b8201529085019083016117a2565b505084890196505b509498975050505050505050565b8082018082111561062a5761062a61168856feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220c46d60312a48a19e5824eea37262561692b6e9002d0794800a6d59118ed383ad64736f6c6343000813003361024060405260016000553480156200001757600080fd5b50604051620025b1380380620025b18339810160408190526200003a91620002ad565b6000608081905260a081905281516001600160a01b031660c0526040820151829190819083906103e8111562000083576040516349db44f560e01b815260040160405180910390fd5b60408101516101605260608101516101805260a0810151600003620000bb57604051635428734d60e01b815260040160405180910390fd5b60a08101805160e0525160808201511080620000eb57508060a001518160800151620000e891906200036f565b15155b156200010a5760405163253fffcf60e11b815260040160405180910390fd5b608081015161010090815260c082015161012090815260208301516101405260e0830151601180546001600160a01b0319166001600160a01b03928316179055918301519091166102005281015151670de0b6b3a764000010806200017f5750670de0b6b3a764000081610120015160200151115b806200019b5750670de0b6b3a764000081610120015160400151115b15620001ba576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101a0528051602001516101c05251604001516101e052610160015161022052506200039292505050565b60405161018081016001600160401b03811182821017156200021f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023d57600080fd5b919050565b6000606082840312156200025557600080fd5b604051606081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c08284031215620002c157600080fd5b620002cb620001ed565b620002d68362000225565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200032260e0840162000225565b60e08201526101006200033781850162000225565b908201526101206200034c8585830162000242565b908201526101808301516101408201526101a09092015161016083015250919050565b6000826200038d57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516121466200046b6000396000610a3b0152600061098b01526000610a04015260006109df015260006109bc015260006108e50152600081816108c00152610eaa0152600081816108960152610e8401526000818161095b0152610ed001526000818161090f0152611234015260008181610935015261148901526000818161087101528181610b9c0152610d5501526000610bd501526000610b5c01526121466000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0d96580116100ad578063c69e16ad11610071578063c69e16ad146101f7578063c905a4b514610282578063d81657431461028a578063e985e9c51461029f578063fba56008146102c257600080fd5b8063b0d9658014610212578063bd85b03914610227578063becee9c31461023a578063c45a01551461025a578063c55dae631461027a57600080fd5b80634e41a1fb116100f45780634e41a1fb146101bc57806360246c88146101cf5780637ecebe00146101e45780638e67f87e146101f7578063afdac68d146101ff57600080fd5b8062ad800c1461012557806320fc48811461014e57806321ff32a9146101885780633656eec2146101a9575b600080fd5b610138610133366004611a5a565b6102f1565b6040516101459190611ab9565b60405180910390f35b61016161015c366004611a5a565b610332565b6040805182516001600160801b03168152602092830151600f0b9281019290925201610145565b61019b610196366004611ae3565b610384565b604051908152602001610145565b61019b6101b7366004611b1f565b6103ca565b6101386101ca366004611a5a565b610403565b6101d761042b565b6040516101459190611b4b565b61019b6101f2366004611bd6565b610625565b61019b610651565b61019b61020d366004611a5a565b61066e565b61021a610854565b6040516101459190611bf1565b61019b610235366004611a5a565b610a71565b61024d610248366004611cb3565b610a93565b6040516101459190611d28565b610262610b4e565b6040516001600160a01b039091168152602001610145565b610262610b8e565b61019b610bce565b610292610c06565b6040516101459190611d6c565b6102b26102ad366004611e59565b610c6c565b6040519015158152602001610145565b6102ca610cb0565b6040805182516001600160801b039081168252602093840151169281019290925201610145565b606061032d600560008481526020019081526020016000206040516020016103199190611e83565b604051602081830303815290604052610d0f565b919050565b604080518082019091526000808252602082015261032d600e600084815260200190815260200160002060405160200161031991546001600160801b038116825260801d600f0b602082015260400190565b60008381526004602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526103c39101610319565b9392505050565b60008281526001602090815260408083206001600160a01b03851684528252808320548151928301526103fd9101610319565b92915050565b606061032d600660008481526020019081526020016000206040516020016103199190611e83565b610496604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006104a0610d33565b600d5460026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f5460008080527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54939450926001600160801b039092169161050b9190611f45565b6105159190611f58565b90506000808311610527576000610542565b6105428361053c61053786610de7565b610f4d565b906111bf565b604080516101a0810182526008546001600160801b038082168352600954600f0b6020840152600160801b918290048116938301939093526060820186905260808201879052600a5480841660a0840152600b5480851660c085015290829004841660e08401528190048316610100830152600d5480841661012084015204909116610140820152909150600090610160810184156105ea576105e584866111d4565b6105ed565b60005b8152600954600160801b90046001600160801b031660209182015260405191925061061e9161031991849101611b4b565b5050505090565b6001600160a01b03811660009081526007602090815260408083205481519283015261032d9101610319565b600061066b60105460405160200161031991815260200190565b90565b601354601280546000926001600160801b03600160801b8204811693911691849190839081106106a0576106a0611f6b565b600091825260208083206040805180820190915292015463ffffffff8116835264010000000090046001600160e01b03169082015291506106e18685611f58565b9050600083156106fb576106f6600185611f58565b61070a565b60125461070a90600190611f58565b60408051808201909152600080825260208201529091505b8482146107b95760006012838154811061073e5761073e611f6b565b6000918252602090912001805490915063ffffffff16841061078c5760408051808201909152905463ffffffff8116825264010000000090046001600160e01b0316602082015290506107b9565b82156107a25761079d600184611f58565b6107b1565b6012546107b190600190611f58565b925050610722565b805163ffffffff166000036107e157604051630a89817b60e41b815260040160405180910390fd5b600081602001516001600160e01b031685602001516001600160e01b03166108099190611f58565b825186519192506000916108269163ffffffff9081169116611f58565b90506108476108358284611f97565b60405160200161031991815260200190565b5050505050505050919050565b61085c6119bc565b60408051610180810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000006020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f000000000000000000000000000000000000000000000000000000000000000060808501527f000000000000000000000000000000000000000000000000000000000000000060a08501527f000000000000000000000000000000000000000000000000000000000000000060c0850152601154831660e08501527f0000000000000000000000000000000000000000000000000000000000000000909216610100840152835191820184527f000000000000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000828201527f0000000000000000000000000000000000000000000000000000000000000000828501526101208301919091526012546101408301527f0000000000000000000000000000000000000000000000000000000000000000610160830152915161066b92610319929101611bf1565b60008181526002602090815260408083205481519283015261032d9101610319565b606060008267ffffffffffffffff811115610ab057610ab0611fab565b604051908082528060200260200182016040528015610ad9578160200160208202803683370190505b50905060005b83811015610b32576000858583818110610afb57610afb611f6b565b90506020020135905060008154905080848481518110610b1d57610b1d611f6b565b60209081029190910101525050600101610adf565b50610b47816040516020016103199190611d28565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b600061066b7f000000000000000000000000000000000000000000000000000000000000000060405160200161031991815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915261066b60086040516020016103199190611fc1565b6001600160a01b038281166000908152600360209081526040808320938516835292815282822054835160ff90911615159181019190915290916103fd9101610319565b6040805180820190915260008082526020820152604080518082018252600d546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261066b90606001610319565b80604051636e64089360e11b8152600401610d2a9190611ab9565b60405180910390fd5b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610d9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc09190612042565b9050601454600003610dd3576000610de1565b601454610de19082906111d4565b91505090565b610e4460405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b549091610100830191610f1391166111e9565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192610f45929004166111e9565b905292915050565b600080610f6d8361014001518461012001516111bf90919063ffffffff16565b61010084015160e0850151610f81916111bf565b610f8b919061205b565b90506000610fa18460000151856020015161125f565b90506000821315611043576000610fe38286604001518760a001518860c00151670de0b6b3a7640000610fd49190611f58565b89606001518a6080015161127c565b9150610ff190508184611305565b9050801561103d5761102a828660400151838860c00151670de0b6b3a764000061101b9190611f58565b89606001518a6080015161131a565b85518690611039908390611f58565b9052505b50611101565b6000821215611101576110558261207b565b915060006110898286604001518760c00151670de0b6b3a764000061107a9190611f58565b88606001518960800151611359565b915061109790508184611305565b905080156110e3576110d0828660400151838860c00151670de0b6b3a76400006110c19190611f58565b89606001518a608001516113e3565b855186906110df908390611f45565b9052505b6110ed8184611f58565b855186906110fc908390611f45565b905250505b6000611130856101000151670de0b6b3a764000061111f9190611f58565b606087015160e08801519190611464565b61115e866101400151670de0b6b3a764000061114c9190611f58565b60608801516101208901519190611464565b611168919061205b565b9050600081866000015161117c9190612097565b90508560a001518112156111a35760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516111b59082611f58565b9695505050505050565b60006103c38383670de0b6b3a7640000611464565b60006103c383670de0b6b3a764000084611464565b600080670de0b6b3a76400006111fd611482565b61120791906120b7565b9050808311611217576000611221565b6112218184611f58565b91506103c3611258670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006120b7565b83906111d4565b60008061126c838561205b565b905060008112156103c357600080fd5b6000808061128a85856111d4565b9050600061129b82868c8a8d6114bd565b905060006112dc6112b4670de0b6b3a76400008a6111d4565b6112d26112cb8b6112c58b8f6111bf565b906114eb565b86906111bf565b6112c59085611f58565b90506112e8898c611f58565b6112f28b83611f58565b945094505050505b965096945050505050565b600081831161131457826103c3565b50919050565b60008061132b888888888888611542565b90925090508061134e57604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000808061136785856111d4565b9050600061137882868b8a8c6114bd565b905060006113ad611391670de0b6b3a76400008a6111d4565b6112c56113a6670de0b6b3a764000087611f45565b85906111d4565b905060006113bb82886111d4565b90506113c78b82611f58565b6113d1838c611f58565b95509550505050509550959350505050565b6000806113f084846111d4565b9050600061140182858b898c6114bd565b9050611411866112c5898b611f58565b9750600061143e61142a670de0b6b3a7640000896115e3565b6112c5856114388d87611f58565b906111d4565b905061144a81866111d4565b90506114568a82611f58565b9a9950505050505050505050565b600082600019048411830215820261147b57600080fd5b5091020490565b60006114ae7f0000000000000000000000000000000000000000000000000000000000000000426120ce565b6114b89042611f58565b905090565b60006114c982846114eb565b6114e16114da856112c589896111bf565b88906111bf565b6111b59190611f45565b6000816000036115045750670de0b6b3a76400006103fd565b82600003611514575060006103fd565b816000611520856115f8565b9050818102611537670de0b6b3a7640000826120e2565b90506111b58161180b565b6000808061155085856111d4565b9050600061156182868c8a8d6114bd565b9050611571876112c58a8c611f45565b985088811015611589576000809350935050506112fa565b60006115ae6115a0670de0b6b3a76400008a6115e3565b6112c5856114388e87611f58565b90506115ba81876111d4565b9050808b11156115d1576115ce818c611f58565b94505b60019350505050965096945050505050565b60006103c383670de0b6b3a764000084611996565b600080821361161a57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361182657506000919050565b680755bf798b4a1bf1e5821261184f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60008260001904841183021582026119ad57600080fd5b50910281810615159190040190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611a4660405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600060208284031215611a6c57600080fd5b5035919050565b6000815180845260005b81811015611a9957602081850181015186830182015201611a7d565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006103c36020830184611a73565b80356001600160a01b038116811461032d57600080fd5b600080600060608486031215611af857600080fd5b83359250611b0860208501611acc565b9150611b1660408501611acc565b90509250925092565b60008060408385031215611b3257600080fd5b82359150611b4260208401611acc565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b600060208284031215611be857600080fd5b6103c382611acc565b81516001600160a01b031681526101c081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611c5960e08401826001600160a01b03169052565b50610100838101516001600160a01b03811684830152505061012083810151805184830152602081015161014085015260408101516101608501525050610140830151610180830152610160909201516101a09091015290565b60008060208385031215611cc657600080fd5b823567ffffffffffffffff80821115611cde57600080fd5b818501915085601f830112611cf257600080fd5b813581811115611d0157600080fd5b8660208260051b8501011115611d1657600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015611d6057835183529284019291840191600101611d44565b50909695505050505050565b81516001600160801b0316815261014081016020830151611d9860208401826001600160801b03169052565b506040830151611dad6040840182600f0b9052565b506060830151611dc860608401826001600160801b03169052565b506080830151611de360808401826001600160801b03169052565b5060a0830151611dfe60a08401826001600160801b03169052565b5060c0830151611e1960c08401826001600160801b03169052565b5060e0830151611e3460e08401826001600160801b03169052565b506101008381015115159083015261012080840151801515828501525b505092915050565b60008060408385031215611e6c57600080fd5b611e7583611acc565b9150611b4260208401611acc565b600060208083526000845481600182811c915080831680611ea557607f831692505b8583108103611ec257634e487b7160e01b85526022600452602485fd5b878601838152602001818015611edf5760018114611ef557611f20565b60ff198616825284151560051b82019650611f20565b60008b81526020902060005b86811015611f1a57815484820152908501908901611f01565b83019750505b50949998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103fd576103fd611f2f565b818103818111156103fd576103fd611f2f565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600082611fa657611fa6611f81565b500490565b634e487b7160e01b600052604160045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610b47565b60006020828403121561205457600080fd5b5051919050565b8181036000831280158383131683831282161715610b4757610b47611f2f565b6000600160ff1b820161209057612090611f2f565b5060000390565b8082018281126000831280158216821582161715611e5157611e51611f2f565b80820281158282048414176103fd576103fd611f2f565b6000826120dd576120dd611f81565b500690565b6000826120f1576120f1611f81565b600160ff1b82146000198414161561210b5761210b611f2f565b50059056fea26469706673582212200288073ba6c2db15c4dfab8540e68376fb37083d7d44c5295e2a1fa53d64680564736f6c6343000813003361028060405260016000553480156200001757600080fd5b5060405162006e7738038062006e778339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516166ed6200078a6000396000613795015260008181610f8a0152610ff00152600081816141b10152818161422a015281816146220152818161469301528181614d51015261511b015260008181613b3a015281816141fe0152818161435f0152818161466701526150ef015260008181614185015281816145f60152614d0d015260008181610a02015281816114a101528181611a7101528181611d4501528181611f2b015261233d015260008181610d5301528181610d9e01528181610eb201528181613ff401528181614043015281816146f80152818161473401528181614974015281816150620152615281015260008181610adb01528181610e2101528181611f8c015281816127ac015281816127d901528181612acf01528181612b1701528181613a18015281816142a40152818161494e0152614dd9015260008181610e6401528181611fce01528181612aad01528181612b38015281816139f6015281816142820152818161499a0152614db7015260008181610b5d01528181610e43015281816115af01528181611afc01528181611fad015281816123fa015281816128e401528181612a090152818161399a01528181613ac001528181613d1301528181614cd40152614e7101526000818161221e015281816122c7015261284c0152600081816112df01528181611379015281816113ec01528181612520015281816125a90152818161266e01528181612706015281816131520152818161319b0152818161327501528181613321015281816133d3015261341c0152600081816104610152611840015260006136ca0152600061368d0152600061025201526166ed6000f3fe60806040526004361061023b5760003560e01c80639032c7261161012e578063b1b4b170116100ab578063d5002f2e1161006f578063d5002f2e146108be578063e44808bc146108d3578063ed64bab2146108f3578063f6e5544914610913578063fa3fcea7146109335761023b565b8063b1b4b17014610811578063b4f8da3914610831578063c23632a71461086b578063c326a9031461088b578063ca6d38f71461089e5761023b565b8063a179403b116100f2578063a179403b14610763578063a22cb46514610776578063a30b7e3d14610796578063a77384c1146107d1578063ab033ea9146107f15761023b565b80639032c726146106ae578063907c0f92146106ce57806395530b75146106e35780639bd33498146107235780639cd241af146107435761023b565b80634ed2d6ac116101bc578063702db0eb11610180578063702db0eb146105635780637180c8ca146105975780638120a3e2146105b757806388348397146105d75780638fca1f7b146106855761023b565b80634ed2d6ac146104c35780635a1a3e7c146104e3578063680962391461050357806368c2ecb8146105235780636f8c3a5b146105435761023b565b80632787d595116102035780632787d595146103fb57806330adf81f1461041b5780633644e5151461044f5780634536ee2f146104835780634daa8b8f146104a35761023b565b806302329a291461034b57806306dae82a1461036d57806317fad7fc1461039a5780631c0f12b6146103ba5780632002b333146103da575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a929190615d7a565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f982615d8a565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401615e32565b80519650602001945050505050f35b34801561035757600080fd5b5061036b610366366004615efc565b610953565b005b61038061037b366004615f30565b61099c565b604080519283526020830191909152015b60405180910390f35b3480156103a657600080fd5b5061036b6103b5366004615fc9565b610c21565b3480156103c657600080fd5b5061036b6103d536600461605a565b610cd5565b6103ed6103e836600461609e565b610ce8565b604051908152602001610391565b34801561040757600080fd5b506103ed610416366004615efc565b610f3d565b34801561042757600080fd5b506103ed7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561045b57600080fd5b506103ed7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048f57600080fd5b5061038061049e36600461609e565b611021565b3480156104af57600080fd5b506103806104be3660046160e6565b6111f1565b3480156104cf57600080fd5b5061036b6104de3660046160ff565b611261565b3480156104ef57600080fd5b5061036b6104fe3660046160e6565b6112af565b34801561050f57600080fd5b5061036b61051e366004616145565b6112bb565b34801561052f57600080fd5b506103ed61053e3660046160e6565b611466565b34801561054f57600080fd5b506103ed61055e366004615f30565b611477565b34801561056f57600080fd5b5061036b61057e36600461617e565b6001600160801b03908116600160801b02911617600855565b3480156105a357600080fd5b5061036b6105b23660046161b1565b6116e5565b3480156105c357600080fd5b5061036b6105d23660046160e6565b61175d565b3480156105e357600080fd5b5061036b6105f23660046161fa565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b34801561069157600080fd5b506013546001600160801b0380821691600160801b900416610380565b3480156106ba57600080fd5b5061036b6106c93660046162c2565b611766565b3480156106da57600080fd5b506103ed6119b5565b3480156106ef57600080fd5b506107036106fe36600461633e565b6119c4565b604080519485526020850193909352918301526060820152608001610391565b34801561072f57600080fd5b5061070361073e366004616145565b6119e8565b34801561074f57600080fd5b5061036b61075e366004616370565b611a08565b610380610771366004615f30565b611a14565b34801561078257600080fd5b5061036b6107913660046161b1565b611c0d565b3480156107a257600080fd5b506107b66107b136600461633e565b611c79565b60408051938452602084019290925290820152606001610391565b3480156107dd57600080fd5b5061036b6107ec3660046160e6565b601455565b3480156107fd57600080fd5b5061036b61080c3660046163a5565b611c9a565b34801561081d57600080fd5b506103ed61082c3660046160e6565b611d0e565b34801561083d57600080fd5b5061036b61084c3660046163c0565b600980546001600160801b03928316600160801b029216919091179055565b34801561087757600080fd5b5061038061088636600461609e565b611d19565b6103ed610899366004615f30565b611ed0565b3480156108aa57600080fd5b506103ed6108b93660046160e6565b612192565b3480156108ca57600080fd5b506014546103ed565b3480156108df57600080fd5b5061036b6108ee3660046163db565b61219d565b3480156108ff57600080fd5b5061036b61090e3660046160e6565b6121ed565b34801561091f57600080fd5b5061038061092e366004616432565b6122f7565b34801561093f57600080fd5b506103ed61094e366004615f30565b612313565b336000908152600f602052604090205460ff16610982576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146109ca5760405162461bcd60e51b81526004016109c19061645e565b60405180910390fd5b6002600055600c54610100900460ff16156109f8576040516313d0ff5960e31b815260040160405180910390fd5b610a0061251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015610a415760405163211ddda360e11b815260040160405180910390fd5b600080610a4e898661258b565b9150915086811015610a73576040516342af972b60e01b815260040160405180910390fd5b6000610a7d612845565b9050610a89818361287b565b506000806000610a998686612a86565b600854919a50929550909350909150610ac3908390600160801b90046001600160801b0316616498565b610b0084610acf612bb7565b610ad991906164ab565b7f000000000000000000000000000000000000000000000000000000000000000090612bd8565b1115610b1f5760405163512095c760e01b815260040160405180910390fd5b868c1115610b405760405163c972651760e01b815260040160405180910390fd5b8060106000828254610b5291906164ab565b90915550610b8290507f0000000000000000000000000000000000000000000000000000000000000000856164ab565b9750610b9283888488888d612bf4565b6000610b9f60018a612dee565b9050610bac818c8a612e23565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d604051610c00939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b0386161580610c3e57506001600160a01b038516155b15610c5c5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c7c5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610ccc57610cc4858583818110610c9c57610c9c6164be565b905060200201358888868686818110610cb757610cb76164be565b9050602002013533612ecc565b600101610c7f565b50505050505050565b610ce28484848433612ecc565b50505050565b60008054600114610d0b5760405162461bcd60e51b81526004016109c19061645e565b6002600055610d1861251e565b600c5460ff1615610d3c57604051637983c05160e01b815260040160405180910390fd5b600080610d49878561258b565b9092509050610d797f000000000000000000000000000000000000000000000000000000000000000060026164d4565b821015610d9957604051632afb507160e21b815260040160405180910390fd5b610dc47f000000000000000000000000000000000000000000000000000000000000000060026164d4565b610dce9083616498565b9250610de1610ddb612845565b8261287b565b50600c805460ff19166001179055610df88261308d565b600880546001600160801b0319166001600160801b0392909216919091179055610e8d610e88837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006130b7565b61308d565b600880546001600160801b03928316600160801b029216919091179055610ed66000807f0000000000000000000000000000000000000000000000000000000000000000612e23565b610ee260008685612e23565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610f605760405162461bcd60e51b81526004016109c19061645e565b60026000908155338152600f602052604090205460ff16158015610fad5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610fc457506011546001600160a01b03163314155b15610fe1576040516282b42960e81b815260040160405180910390fd5b601080546000909155611015817f000000000000000000000000000000000000000000000000000000000000000085613121565b60016000559392505050565b6000806000546001146110465760405162461bcd60e51b81526004016109c19061645e565b600260009081556110556133b8565b9050611062610ddb612845565b5061106c816134b7565b600d548792506001600160801b03168083111561109057806001600160801b031692505b826000036110a6576000809350935050506111e1565b6110b5600360f81b3385613591565b600d546001600160801b03600160801b9091048116906000906110dd90869084908616613631565b90506110e88561308d565b6110f290846164eb565b600d80546001600160801b0319166001600160801b039290921691909117905561111b8161308d565b600d805460109061113d908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116c818989613121565b9550856111798a87612bd8565b11156111985760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b60008060128381548110611207576112076164be565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b031660128481548110611244576112446164be565b600091825260209091200154909463ffffffff9091169350915050565b8361126b8161364f565b6001600160a01b0316336001600160a01b03161461129c57604051632aab8bd360e01b815260040160405180910390fd5b6112a88585858561370c565b5050505050565b6112b881613779565b50565b6040516370a0823160e01b8152306004820152600090611351906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134a9190616512565b83856138d3565b91505060008113156113d9576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156113c557600080fd5b505af1158015610ccc573d6000803e3d6000fd5b6000811215611461576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac3061141b8461652b565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b1580156113c557600080fd5b505050565b60006114718261396d565b92915050565b6000805460011461149a5760405162461bcd60e51b81526004016109c19061645e565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156114e05760405163211ddda360e11b815260040160405180910390fd5b60006114ea6133b8565b90506114f6878261287b565b5061150c611505600289612dee565b3388613591565b6000806000806000806115208c888f6139be565b600854959b5093995091975095509350915061154d908790600160801b90046001600160801b0316616498565b61155984610acf612bb7565b11156115785760405163512095c760e01b815260040160405180910390fd5b8b8d884282111561163a57836010600082825461159591906164ab565b909155506115a89050838a898886613b92565b60006115d47f000000000000000000000000000000000000000000000000000000000000000084616498565b6000818152600e6020526040812054919250600160801b909104600f0b906116079086908a908e908d9089908990613d0c565b6000828152600e602052604090205461162e90600f83810b91600160801b9004900b613eb4565b6116378c6134b7565b50505b6000611647898f8f613121565b90508e81101561166a5760405163c972651760e01b815260040160405180910390fd5b611675600284612dee565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f8584886040516116c3939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b0316331461170f576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6112b881613fdb565b834211156117875760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166117ae5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156118da573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461191857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061193e90616547565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b60006119bf612845565b905090565b6000806000806119d68888888861415d565b929b919a509850909650945050505050565b6000806000806119f88686612a86565b9299919850965090945092505050565b6114618383833361370c565b600080600054600114611a395760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611a67576040516313d0ff5960e31b815260040160405180910390fd5b611a6f61251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015611ab05760405163211ddda360e11b815260040160405180910390fd5b6000611aba6133b8565b905085811015611add576040516342af972b60e01b815260040160405180910390fd5b6000611ae7612845565b90506000611af5828461287b565b9050611b217f0000000000000000000000000000000000000000000000000000000000000000836164ab565b9450600080611b318c868561425c565b6010805493995091945092508291600090611b4d9084906164ab565b909155505050848a1015611b745760405163c972651760e01b815260040160405180910390fd5b611b7e858861258b565b5050611b8c8b828689614390565b6000611b99600288612dee565b9050611ba6818a8e612e23565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000806000611c8a878787876145ce565b9199909850909650945050505050565b6011546001600160a01b03163314611cc4576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611471826146cf565b600080600054600114611d3e5760405162461bcd60e51b81526004016109c19061645e565b60026000557f0000000000000000000000000000000000000000000000000000000000000000861015611d845760405163211ddda360e11b815260040160405180910390fd5b6000611d8e6133b8565b9050611d9b610ddb612845565b50611da5816134b7565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611e00916001600160801b0390911690616498565b90506000611e0e82846164ab565b9050611e1c6000338c613591565b6000611e2b8b86848787614778565b96509050611e3e600360f81b8a88612e23565b611e49818a8a613121565b9650868a1115611e6c5760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b60008054600114611ef35760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611f21576040516313d0ff5960e31b815260040160405180910390fd5b611f2961251e565b7f0000000000000000000000000000000000000000000000000000000000000000861015611f6a5760405163211ddda360e11b815260040160405180910390fd5b6000611ff2611f77612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614876565b90508581108061200157508481115b1561201f57604051633b61151160e11b815260040160405180910390fd5b60008061202c898661258b565b9150915061203b610ddb612845565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612087916001600160801b0390911690616498565b6000808052600260205260008051602061669883398151915254919250906120b09083906164ab565b90506000806120be856148b1565b905060006120cb82614a17565b90506120d687613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015261210882614a17565b925061212084826121198187616498565b9190613631565b9850505061213060008a89612e23565b612139846134b7565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b600061147182614c89565b846121a78161364f565b6001600160a01b0316336001600160a01b0316146121d857604051632aab8bd360e01b815260040160405180910390fd5b6121e58686868686612ecc565b505050505050565b6000818152600e60205260409020546001600160801b03161561220d5750565b6000612217612845565b90506122437f000000000000000000000000000000000000000000000000000000000000000083616576565b15158061224f57508181105b1561226d5760405163ecd29e8160e01b815260040160405180910390fd5b80820361228557611461816122806133b8565b61287b565b815b6000818152600e60205260409020546001600160801b03168282036122b1576122ae6133b8565b90505b80156122c1576112a8848261287b565b506122ec7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b9050612287565b5050565b600080612305858585614cff565b90925090505b935093915050565b600080546001146123365760405162461bcd60e51b81526004016109c19061645e565b60026000557f000000000000000000000000000000000000000000000000000000000000000085101561237c5760405163211ddda360e11b815260040160405180910390fd5b60006123866133b8565b9050612392878261287b565b506123a1611505600189612dee565b6000806000806000806123b58c888f614d7f565b95509550955095509550955060008d90508d42101561247e5781601060008282546123e091906164ab565b909155506123f390508d88878685614ef6565b600061241f7f000000000000000000000000000000000000000000000000000000000000000083616498565b6000818152600e6020526040902054909150600160801b9004600f0b61244b8f878b8a878f6001613d0c565b6000828152600e602052604090205461247290600f83810b91600160801b9004900b613eb4565b61247b8a6134b7565b50505b600061248b878d8d613121565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600184612dee565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061256b5750600034115b1561258957604051631574f9f360e01b815260040160405180910390fd5b565b60008080600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161265957479150853410156125fa576040516312171d8360e31b815260040160405180910390fd5b85341115612654573361260d8734616498565b604051600081818185875af1925050503d8060008114612649576040519150601f19603f3d011682016040523d82523d6000602084013e61264e565b606091505b50909150505b61277e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e19190616512565b6040516323b872dd60e01b8152336004820152306024820152604481018890529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061277b919061658a565b90505b8061279c576040516312171d8360e31b815260040160405180910390fd5b601454600003612802576127d0867f00000000000000000000000000000000000000000000000000000000000000006150c3565b601481905593507f0000000000000000000000000000000000000000000000000000000000000000925061283e915050565b601454600090612813908885613631565b9050806014600082825461282791906164ab565b909155508190506128366133b8565b945094505050505b9250929050565b60006128717f000000000000000000000000000000000000000000000000000000000000000042616576565b6119bf9042616498565b6000828152600e6020526040812080546001600160801b03161515806128a057504284115b156128b657546001600160801b03169050611471565b6128bf8361308d565b81546001600160801b0319166001600160801b03919091161781556000600e816129097f000000000000000000000000000000000000000000000000000000000000000088616498565b815260208101919091526040016000908120546001600160801b031691506002816129348289612dee565b81526020019081526020016000205490506000808211156129905760008061295f84898760006150d8565b91509150806010600082825461297591906164ab565b90915550612989905084600084808d613b92565b6001925050505b6000600260006129a160018b612dee565b815260200190815260200160002054905060008111156129fc576000806129cb838a8860016150d8565b9150915080601060008282546129e191906164ab565b909155506129f5905083600084808e614ef6565b6001935050505b8115612a7a576000612a2e7f00000000000000000000000000000000000000000000000000000000000000008a616498565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612a6e928492919004900b613eb4565b612a77896134b7565b50505b50949695505050505050565b600080600080612af3612a97612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006151a6565b92506000612b5c612b02612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006151d2565b9050612b6781613779565b600080612b7589848a614cff565b9092509050612b848287616498565b9450612b9081866164ab565b9550612b9d81848a613631565b9350612ba9848a616498565b965050505092959194509250565b6008546009546000916119bf916001600160801b0390911690600f0b6151e3565b6000612bed8383670de0b6b3a7640000613631565b9392505050565b600a546001600160801b0316612c2f610e8882612c1985670de0b6b3a76400006164d4565b600b546001600160801b031691908a6001615200565b600b80546001600160801b0319166001600160801b0392909216919091179055612c588761308d565b60088054600090612c739084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612ca08561308d565b60088054601090612cc2908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612cef8661308d565b612cf990826165a7565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90612d55612d408b89612bd8565b612d4b8b60026164d4565b610e889190616498565b835490915081908490601090612d76908490600160801b9004600f0b6165c7565b82546001600160801b039182166101009390930a9283029190920219909116179055508254612db390600f84810b91600160801b9004900b613eb4565b612dbc8761527a565b612dd9576040516318846de960e01b815260040160405180910390fd5b612de2876134b7565b50505050505050505050565b60006001600160f81b03821115612e185760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612e559084906164ab565b909155505060008381526002602052604081208054839290612e789084906164ab565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b0384161580612ee957506001600160a01b038316155b15612f075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612fcb576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff16612fcb5760008581526004602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114612fc95760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612fc3908490616498565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612ffd908490616498565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130349084906164ab565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b82106130b357604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806130c8846301e133806150c3565b90506131146131046130e2670de0b6b3a7640000866152ec565b6130ec8885612bd8565b6130fe90670de0b6b3a76400006164ab565b90615301565b61310e888a612bd8565b90612bd8565b9150505b95945050505050565b600060145484116131325783613136565b6014545b9350600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613186575047613211565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156131ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061320e9190616512565b90505b601454600003613222576000613241565b61324161323a601454836150c390919063ffffffff16565b8690612bd8565b915084601460008282546132559190616498565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016132fb576040516001600160a01b038616908490600081818185875af1925050503d80600081146132eb576040519150601f19603f3d011682016040523d82523d6000602084013e6132f0565b606091505b505080915050613391565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561336a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061338e919061658a565b90505b806133af576040516312171d8360e31b815260040160405180910390fd5b50509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613407575047613492565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561346b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061348f9190616512565b90505b6014546000036134a35760006134b1565b6014546134b19082906150c3565b91505090565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091613512916001600160801b0390911690616498565b9050600061352082846164ab565b90506000613535613530866148b1565b614a17565b90506000613544858385613631565b9050600080613552886146cf565b905082811115613569576135668382616498565b91505b6000821180613576575083155b156135875761358782858789615358565b5050505050505050565b60008381526001602090815260408083206001600160a01b0386168452909152812080548392906135c3908490616498565b9091555050600083815260026020526040812080548392906135e6908490616498565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612ebf565b600082600019048411830215820261364857600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b820481169116426137ba7f0000000000000000000000000000000000000000000000000000000000000000846164ab565b11156137c557505050565b6000601282815481106137da576137da6164be565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b03169061380e8342616498565b6012549091508782028301906000906138288860016164ab565b6138329190616576565b905060405180604001604052804263ffffffff168152602001836001600160e01b03168152506012828154811061386b5761386b6164be565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b600080806138e5846301e133806150c3565b9050600061390482600088126138fb578761310e565b61310e8861652b565b905060008613156139375761392261391b82615441565b8890612bd8565b935061392e8785616498565b9250505061230b565b600086121561395f5761395361394c82615441565b88906150c3565b935061392e87856165f4565b509495600095509350505050565b600080613978612845565b9050808311613988576000613992565b6139928184616498565b9150612bed827f00000000000000000000000000000000000000000000000000000000000000006150c3565b60008060008060008060006139d28861396d565b9050613a3c6139df612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006155cc565b909850955093506000613a50612b02612bb7565b9050613a5b81613779565b8a8a6000808080613a6e8689898861415d565b93509350935093508082613a8291906164ab565b9850613a8e8285616498565b613a98908c6164ab565b9a50613aa483856164ab565b613aae908d6164ab565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613aea9190616498565b815260208101919091526040016000908120546001600160801b03169150428911613b2c576000898152600e60205260409020546001600160801b0316613b2e565b895b9050613b5e8b8784848e7f000000000000000000000000000000000000000000000000000000000000000061563c565b9650613b6a8387616498565b9550613b7c878787868686600061568e565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613bdb610e8882613bbe85670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b031691908a6000615200565b600b80546001600160801b03928316600160801b029216919091179055613c018661308d565b613c0b90826164eb565b600a80546001600160801b03928316600160801b02921691909117905550613c328361308d565b60088054600090613c4d9084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c7a82615709565b60098054600090613c8f908490600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613cbf8461308d565b60088054601090613ce1908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b6000613d387f000000000000000000000000000000000000000000000000000000000000000085616498565b9050600060026000613d4b600188612dee565b8152602001908152602001600020549050600060026000613d6d600289612dee565b8152602001908152602001600020549050816000148015613d8c575080155b15613db1576000838152600e6020526040902080546001600160801b03169055612de2565b6000613df58b613dc18c89612bd8565b613dcc9060026164d4565b8b613dd78c8b612bd8565b613de191906164ab565b613deb9190616498565b610e8891906164ab565b90508415613e54576000848152600e602052604090208054829190601090613e28908490600160801b9004600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613ea7565b6000848152600e602052604090208054829190601090613e7f908490600160801b9004600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b8082138015613ec4575060008212155b15613f57576000613ed58282615747565b613edf90846165f4565b600954909150613f0c90613f07908390600160801b90046001600160801b0316600f0b61575d565b615709565b60098054601090613f2e908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156122f35760008212613fcd57613f7082615709565b613f7982615709565b613f839190616614565b60098054601090613fa5908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b613f83613f07826000615747565b80600003613fe65750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156140335760405163585fe6df60e11b815260040160405180910390fd5b600061403f8383616641565b90507f00000000000000000000000000000000000000000000000000000000000000008112156140825760405163585fe6df60e11b815260040160405180910390fd5b61408b8161308d565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126140cd576140c6838286613631565b91506140ed565b6140e16140d98261652b565b849086613631565b6140ea9061652b565b91505b6140f682615709565b600980546001600160801b0319166001600160801b0392831617905560085461413991610e8891600160801b90041661412f87856151e3565b61211987876151e3565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600080808061417486670de0b6b3a7640000616498565b93506141a987866121198b61310e897f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506141d5847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915060006141f66141ee89670de0b6b3a7640000616498565b8a9088613631565b9050614222817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b935061424e847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915050945094509450949050565b60008060006142c861426c612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061576c565b9150856142d58387612bd8565b11156142f45760405163512095c760e01b815260040160405180910390fd5b6000614301612b02612bb7565b905061430c81613779565b600061432288670de0b6b3a7640000848a6145ce565b945090915061433390508382616498565b61433d9085616498565b93506143838761310e8a6143518789616498565b8a61435c8d8261578d565b8d7f000000000000000000000000000000000000000000000000000000000000000061563c565b9450505093509350939050565b600a546143da90610e8890600160801b90046001600160801b03166143bd84670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b03169190886001615200565b600b80546001600160801b03928316600160801b02921691909117905560006144028461308d565b60085461441891906001600160801b03166164eb565b600880546001600160801b0319166001600160801b038316179055905061443e8561308d565b60088054601090614460908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061448d8561308d565b600a80546010906144af908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506144fe5760405163585fe6df60e11b815260040160405180910390fd5b6000614508612845565b6000818152600e6020526040902054909150600160801b9004600f0b61452d8761308d565b6000838152600e602052604090208054601090614555908490600160801b9004600f0b616614565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461459f90600f83810b91600160801b9004900b613eb4565b6145a88561527a565b6145c5576040516318846de960e01b815260040160405180910390fd5b610ccc856134b7565b60008080806145e586670de0b6b3a7640000616498565b905061461a87866121198b61310e867f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9350614646847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9150600061465f6141ee89670de0b6b3a7640000616498565b905061468b817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506146b7847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b6146c190846164ab565b925050509450945094915050565b60095460009081906146f190600160801b90046001600160801b0316846150c3565b905061471d7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b6008546001600160801b03161115614772576008547f0000000000000000000000000000000000000000000000000000000000000000906147689083906001600160801b0316616498565b612bed9190616498565b50919050565b6000806000614786876148b1565b9050600061479382614a17565b90506147a56147a06133b8565b6146cf565b93506147b2848a88613631565b93506147c56147c08561652b565b613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015260006147f983614a17565b90506000614808898385613631565b90506148148b8a6165f4565b61481e90826165f4565b9050600081121561486757600061483f6148378361652b565b85908c613631565b905061484b8188616498565b965061485681613fdb565b61486181898d61579c565b60009150505b93505050509550959350505050565b600080614885878787866151d2565b905061311461489982866301e133806157e1565b6148ab83670de0b6b3a7640000616498565b906150c3565b61490e60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916149dd9116614c89565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192614a0f92900416614c89565b905292915050565b600080614a37836101400151846101200151612bd890919063ffffffff16565b61010084015160e0850151614a4b91612bd8565b614a5591906165f4565b90506000614a6b846000015185602001516151e3565b90506000821315614b0d576000614aad8286604001518760a001518860c00151670de0b6b3a7640000614a9e9190616498565b89606001518a60800151615807565b9150614abb90508184615883565b90508015614b0757614af4828660400151838860c00151670de0b6b3a7640000614ae59190616498565b89606001518a60800151615892565b85518690614b03908390616498565b9052505b50614bcb565b6000821215614bcb57614b1f8261652b565b91506000614b538286604001518760c00151670de0b6b3a7640000614b449190616498565b886060015189608001516158c6565b9150614b6190508184615883565b90508015614bad57614b9a828660400151838860c00151670de0b6b3a7640000614b8b9190616498565b89606001518a60800151615950565b85518690614ba99083906164ab565b9052505b614bb78184616498565b85518690614bc69083906164ab565b905250505b6000614bfa856101000151670de0b6b3a7640000614be99190616498565b606087015160e08801519190613631565b614c28866101400151670de0b6b3a7640000614c169190616498565b60608801516101208901519190613631565b614c3291906165f4565b90506000818660000151614c469190616641565b90508560a00151811215614c6d5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151614c7f9082616498565b9695505050505050565b600080670de0b6b3a7640000614c9d612845565b614ca791906164d4565b9050808311614cb7576000614cc1565b614cc18184616498565b9150612bed614cf8670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006164d4565b83906150c3565b600080614d498561310e85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000614d3f818c6150c3565b61310e9190616498565b9150614d75827f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9050935093915050565b6000806000806000806000614d938861396d565b9050614dfd614da0612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006159cb565b909850965093506000614e11612b02612bb7565b9050614e1c81613779565b600080614e2b8d85858f6145ce565b96509092509050614e3c8288616498565b9650614e4881836164ab565b614e52908a616498565b9850614e5e858a6164ab565b975050505050614ee285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e614e9b9190616498565b81526020810191909152604001600020546001600160801b0316428d11614ed95760008d8152600e60205260409020546001600160801b0316614edb565b8d5b600161568e565b999d939c50919a5098509695509350505050565b600a546001600160801b0316614f31610e8882614f1b85670de0b6b3a76400006164d4565b600b546001600160801b031691908a6000615200565b600b80546001600160801b0319166001600160801b0392909216919091179055614f5a8661308d565b614f6490826164eb565b600a80546001600160801b0319166001600160801b039290921691909117905550614f8e8361308d565b60088054600090614fa99084906001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614fd682615709565b60098054600090614feb908490600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061501b8461308d565b6008805460109061503d908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806150a55750600954600854600f9190910b6001600160801b03909116125b156112a85760405163585fe6df60e11b815260040160405180910390fd5b6000612bed83670de0b6b3a764000084613631565b6000806150e586866150c3565b91506000615113837f0000000000000000000000000000000000000000000000000000000000000000612bd8565b905061513f817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b91508315615162576151518282616498565b61515b9084616498565b9250615179565b61516c8282616498565b61517690846164ab565b92505b8486101561519c5761518c838787613631565b9250615199828787613631565b91505b5094509492505050565b60006151c78787876151c088670de0b6b3a7640000616498565b8787615a17565b979650505050505050565b6000613118826130fe858888613631565b6000806151f083856165f4565b90506000811215612bed57600080fd5b600081156152405761523961521584876164ab565b61521f8587612bd8565b615229888a612bd8565b61523391906164ab565b906152ec565b9050613118565b82850361524f57506000613118565b614c7f61525c8487616498565b6152668587612bd8565b615270888a612bd8565b6152339190616498565b60006152a67f000000000000000000000000000000000000000000000000000000000000000083612bd8565b6009546008546152e4916000916001600160801b03600160801b9092048216600f0b916152d4911687612bd8565b6152de91906165f4565b90615747565b121592915050565b6000612bed83670de0b6b3a7640000846157e1565b60008160000361531a5750670de0b6b3a7640000611471565b8260000361532a57506000611471565b81600061533685615a8a565b905081810261534d670de0b6b3a764000082616669565b9050614c7f81615441565b60008084116153675782615372565b615372838686613631565b9050806000036153825750610ce2565b80858382111561539d5783915061539a878385613631565b90505b6153a68261308d565b600d80546000906153c19084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506153ee8161308d565b600d8054601090615410908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ccc816147c09061652b565b6000680248ce36a70cb26b3e19821361545c57506000919050565b680755bf798b4a1bf1e582126154855760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600080806155ed6155e588670de0b6b3a7640000616498565b899087613631565b90506155f98888612bd8565b9150811561562f576156208a8a846156198a670de0b6b3a7640000616498565b8989615950565b925061562c83826164ab565b90505b9750975097945050505050565b6000806156558561564d8887615c9d565b8a9190613631565b9050615662888486613631565b61566c90826164ab565b905086811115615683576156808782616498565b91505b509695505050505050565b600080600080600080888810156156eb5786156156b3576156b08d898b613631565b9c505b6156be8c898b613631565b9b506156ca8b8d6165f4565b90506156d78b898b613631565b9a506156e48a898b613631565b99506156f8565b6156f58b8d6165f4565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b0319821280159061572a575060016001607f1b038213155b6130b35760405163a5353be560e01b815260040160405180910390fd5b60008183136157565781612bed565b5090919050565b60008183136147725782612bed565b60006151c787878761578688670de0b6b3a7640000616498565b8787615892565b60008183116157565781612bed565b60006157aa613530836148b1565b6000808052600260205260008051602061669883398151915254919250906157d39085906164ab565b90506112a885838387615358565b60008260001904841183021582026157f857600080fd5b50910281810615159190040190565b6000808061581585856150c3565b9050600061582682868c8a8d615cb2565b9050600061585a61583f670de0b6b3a76400008a6150c3565b61585061323a8b6130fe8b8f612bd8565b6130fe9085616498565b9050615866898c616498565b6158708b83616498565b945094505050505b965096945050505050565b60008183116147725782612bed565b6000806158a3888888888888615cd9565b90925090508061568357604051637ac17d2560e01b815260040160405180910390fd5b600080806158d485856150c3565b905060006158e582868b8a8c615cb2565b9050600061591a6158fe670de0b6b3a76400008a6150c3565b6130fe615913670de0b6b3a7640000876164ab565b85906150c3565b9050600061592882886150c3565b90506159348b82616498565b61593e838c616498565b95509550505050509550959350505050565b60008061595d84846150c3565b9050600061596e82858b898c615cb2565b905061597e866130fe898b616498565b975060006159a5615997670de0b6b3a7640000896152ec565b6130fe856148ab8d87616498565b90506159b181866150c3565b90506159bd8a82616498565b9a9950505050505050505050565b600080806159e46155e588670de0b6b3a7640000616498565b9050861561562f576159f68888612bd8565b91506156208a8a84615a108a670de0b6b3a7640000616498565b8989615892565b600080615a2484846150c3565b90506000615a3582858b898c615cb2565b9050615a4f866130fe615a488a8d6164ab565b8790612bd8565b9850615a5b828a612bd8565b98506000615a7e615a74670de0b6b3a7640000896152ec565b6130fe8c85616498565b90506159bd818a616498565b6000808213615aac57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000612bed8383670de0b6b3a76400006157e1565b6000615cbe8284615301565b615ccf61391b856130fe8989612bd8565b614c7f91906164ab565b60008080615ce785856150c3565b90506000615cf882868c8a8d615cb2565b9050615d08876130fe8a8c6164ab565b985088811015615d2057600080935093505050615878565b6000615d45615d37670de0b6b3a76400008a6152ec565b6130fe856148ab8e87616498565b9050615d5181876150c3565b9050808b1115615d6857615d65818c616498565b94505b60019350505050965096945050505050565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015615db95780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715615dfb57615dfb615dc1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715615e2a57615e2a615dc1565b604052919050565b60006020808385031215615e4557600080fd5b825167ffffffffffffffff80821115615e5d57600080fd5b818501915085601f830112615e7157600080fd5b815181811115615e8357615e83615dc1565b615e95601f8201601f19168501615e01565b91508082528684828501011115615eab57600080fd5b60005b81811015615ec9578381018501518382018601528401615eae565b50600090820190930192909252509392505050565b80151581146112b857600080fd5b8035615ef781615ede565b919050565b600060208284031215615f0e57600080fd5b8135612bed81615ede565b80356001600160a01b0381168114615ef757600080fd5b600080600080600060a08688031215615f4857600080fd5b853594506020860135935060408601359250615f6660608701615f19565b91506080860135615f7681615ede565b809150509295509295909350565b60008083601f840112615f9657600080fd5b50813567ffffffffffffffff811115615fae57600080fd5b6020830191508360208260051b850101111561283e57600080fd5b60008060008060008060808789031215615fe257600080fd5b615feb87615f19565b9550615ff960208801615f19565b9450604087013567ffffffffffffffff8082111561601657600080fd5b6160228a838b01615f84565b9096509450606089013591508082111561603b57600080fd5b5061604889828a01615f84565b979a9699509497509295939492505050565b6000806000806080858703121561607057600080fd5b8435935061608060208601615f19565b925061608e60408601615f19565b9396929550929360600135925050565b600080600080608085870312156160b457600080fd5b84359350602085013592506160cb60408601615f19565b915060608501356160db81615ede565b939692955090935050565b6000602082840312156160f857600080fd5b5035919050565b6000806000806080858703121561611557600080fd5b8435935061612560208601615f19565b92506040850135915061613a60608601615f19565b905092959194509250565b6000806040838503121561615857600080fd5b50508035926020909101359150565b80356001600160801b0381168114615ef757600080fd5b6000806040838503121561619157600080fd5b61619a83616167565b91506161a860208401616167565b90509250929050565b600080604083850312156161c457600080fd5b6161cd83615f19565b915060208301356161dd81615ede565b809150509250929050565b8035600f81900b8114615ef757600080fd5b6000610140828403121561620d57600080fd5b616215615dd7565b61621e83616167565b815261622c60208401616167565b602082015261623d604084016161e8565b604082015261624e60608401616167565b606082015261625f60808401616167565b608082015261627060a08401616167565b60a082015261628160c08401616167565b60c082015261629260e08401616167565b60e08201526101006162a5818501615eec565b908201526101206162b7848201615eec565b908201529392505050565b600080600080600080600060e0888a0312156162dd57600080fd5b6162e688615f19565b96506162f460208901615f19565b9550604088013561630481615ede565b945060608801359350608088013560ff8116811461632157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000806080858703121561635457600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561638557600080fd5b8335925061639560208501615f19565b9150604084013590509250925092565b6000602082840312156163b757600080fd5b612bed82615f19565b6000602082840312156163d257600080fd5b612bed82616167565b600080600080600060a086880312156163f357600080fd5b8535945061640360208701615f19565b935061641160408701615f19565b92506060860135915061642660808701615f19565b90509295509295909350565b60008060006060848603121561644757600080fd5b505081359360208301359350604090920135919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561147157611471616482565b8082018082111561147157611471616482565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761147157611471616482565b6001600160801b0382811682821603908082111561650b5761650b616482565b5092915050565b60006020828403121561652457600080fd5b5051919050565b6000600160ff1b820161654057616540616482565b5060000390565b60006001820161655957616559616482565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261658557616585616560565b500690565b60006020828403121561659c57600080fd5b8151612bed81615ede565b6001600160801b0381811683821601908082111561650b5761650b616482565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561147157611471616482565b818103600083128015838313168383128216171561650b5761650b616482565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561147157611471616482565b808201828112600083128015821682158216171561666157616661616482565b505092915050565b60008261667857616678616560565b600160ff1b82146000198414161561669257616692616482565b50059056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba26469706673582212205c6935797a2bd1e3d6a854cb0b8641b88a38d76ff0333efa7578030e63b949dd64736f6c6343000813003341304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f500000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35835f74617267657456616c75652073686f756c64206265206c657373207468616e205f76616c75656578706563746564207570706572426f756e6420746f206d61746368205f74617267657456616c75656578706563746564206c6f776572426f756e6420746f206d61746368205f74617267657456616c7565885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12db2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a85f74617267657456616c75652073686f756c642062652067726561746572207468616e206f7220657175616c20746f205f76616c7565a2646970667358221220fd6d12cdaf52ee9bb670ab3f3a93139845d7dd2818d4c23c1a0a7f835e7f6dcc64736f6c63430008130033",
    sourceMap:
      "248:6688:140:-:0;;;;;1572:26:50;;;1594:4;-1:-1:-1;;1572:26:50;;;;;;;;3126:44:54;;;;;;;;;;;-1:-1:-1;;;1262:31:159;;216:2:165;1262:31:159;198:21:165;255:2;235:18;228:30;-1:-1:-1;;;274:18:165;267:45;1262:12:159;;329:18:165;1262:31:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1262:31:159;;;;;;;;;;;;:::i;:::-;1237:56;;;;;;:::i;:::-;-1:-1:-1;1323:30:159;;-1:-1:-1;;;1323:30:159;;4328:2:165;1323:30:159;;;4310:21:165;4367:2;4347:18;;;4340:30;-1:-1:-1;;;4386:18:165;;;4379:44;1323:12:159;;;;4440:18:165;;1323:30:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1323:30:159;;;;;;;;;;;;:::i;:::-;1299:54;;;;;;:::i;:::-;;248:6688:140;;;;;;;;;;;;358:127:165;419:10;414:3;410:20;407:1;400:31;450:4;447:1;440:15;474:4;471:1;464:15;490:1042;570:6;601:2;644;632:9;623:7;619:23;615:32;612:52;;;660:1;657;650:12;612:52;687:16;;-1:-1:-1;;;;;752:14:165;;;749:34;;;779:1;776;769:12;749:34;817:6;806:9;802:22;792:32;;862:7;855:4;851:2;847:13;843:27;833:55;;884:1;881;874:12;833:55;913:2;907:9;935:2;931;928:10;925:36;;;941:18;;:::i;:::-;1016:2;1010:9;984:2;1070:13;;-1:-1:-1;;1066:22:165;;;1090:2;1062:31;1058:40;1046:53;;;1114:18;;;1134:22;;;1111:46;1108:72;;;1160:18;;:::i;:::-;1200:10;1196:2;1189:22;1235:2;1227:6;1220:18;1275:7;1270:2;1265;1261;1257:11;1253:20;1250:33;1247:53;;;1296:1;1293;1286:12;1247:53;1318:1;1309:10;;1328:129;1342:2;1339:1;1336:9;1328:129;;;1430:10;;;1426:19;;1420:26;1399:14;;;1395:23;;1388:59;1353:10;;;;1328:129;;;1499:1;1494:2;1489;1481:6;1477:15;1473:24;1466:35;1520:6;1510:16;;;;;;;;490:1042;;;;:::o;1537:380::-;1616:1;1612:12;;;;1659;;;1680:61;;1734:4;1726:6;1722:17;1712:27;;1680:61;1787:2;1779:6;1776:14;1756:18;1753:38;1750:161;;1833:10;1828:3;1824:20;1821:1;1814:31;1868:4;1865:1;1858:15;1896:4;1893:1;1886:15;1750:161;;1537:380;;;:::o;2048:545::-;2150:2;2145:3;2142:11;2139:448;;;2186:1;2211:5;2207:2;2200:17;2256:4;2252:2;2242:19;2326:2;2314:10;2310:19;2307:1;2303:27;2297:4;2293:38;2362:4;2350:10;2347:20;2344:47;;;-1:-1:-1;2385:4:165;2344:47;2440:2;2435:3;2431:12;2428:1;2424:20;2418:4;2414:31;2404:41;;2495:82;2513:2;2506:5;2503:13;2495:82;;;2558:17;;;2539:1;2528:13;2495:82;;;2499:3;;;2139:448;2048:545;;;:::o;2769:1352::-;2889:10;;-1:-1:-1;;;;;2911:30:165;;2908:56;;;2944:18;;:::i;:::-;2973:97;3063:6;3023:38;3055:4;3049:11;3023:38;:::i;:::-;3017:4;2973:97;:::i;:::-;3125:4;;3189:2;3178:14;;3206:1;3201:663;;;;3908:1;3925:6;3922:89;;;-1:-1:-1;3977:19:165;;;3971:26;3922:89;-1:-1:-1;;2726:1:165;2722:11;;;2718:24;2714:29;2704:40;2750:1;2746:11;;;2701:57;4024:81;;3171:944;;3201:663;1995:1;1988:14;;;2032:4;2019:18;;-1:-1:-1;;3237:20:165;;;3355:236;3369:7;3366:1;3363:14;3355:236;;;3458:19;;;3452:26;3437:42;;3550:27;;;;3518:1;3506:14;;;;3385:19;;3355:236;;;3359:3;3619:6;3610:7;3607:19;3604:201;;;3680:19;;;3674:26;-1:-1:-1;;3763:1:165;3759:14;;;3775:3;3755:24;3751:37;3747:42;3732:58;3717:74;;3604:201;-1:-1:-1;;;;;3851:1:165;3835:14;;;3831:22;3818:36;;-1:-1:-1;2769:1352:165:o;4126:338::-;248:6688:140;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x60806040523480156200001157600080fd5b5060043610620001515760003560e01c806385226c8111620000c7578063b5508aa91162000086578063b5508aa9146200027b578063ba414fa61462000285578063bfa96f3f14620002a0578063e20c9f7114620002aa578063f126118014620002b4578063fa7626d414620002be57600080fd5b806385226c81146200022d5780638533530e1462000246578063916a17c6146200025057806396a5c8df146200025a578063ab75e7c3146200026457600080fd5b80633f7286f411620001145780633f7286f414620001c6578063507ffba514620001d057806366d9a9a014620002005780636861fc2a14620002195780637892faea146200022357600080fd5b80630a9254e414620001565780631071676014620001625780631ed7831c146200018c5780633e5e0d2614620001a55780633e5e3c2314620001bc575b600080fd5b62000160620002cc565b005b620001796200017336600462003fb8565b62000743565b6040519081526020015b60405180910390f35b62000196620007cb565b6040516200018391906200400a565b62000179620001b636600462004059565b6200082f565b6200019662000a8f565b6200019662000af1565b620001e7620001e13660046200411d565b62000b53565b6040516001600160a01b03909116815260200162000183565b6200020a62000c69565b604051620001839190620041d8565b6200016062000d5c565b62000160620010a7565b6200023762001350565b604051620001839190620042e3565b620001606200142a565b6200020a62001861565b620001606200194b565b620001606200027536600462004349565b62001a24565b6200023762001d5d565b6200028f62001e37565b604051901515815260200162000183565b6200016062001f64565b620001966200205f565b62000160620020c1565b6007546200028f9060ff1681565b620002d6620022c2565b601c546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200fb68833981519152906306447d5690602401600060405180830381600087803b1580156200032b57600080fd5b505af115801562000340573d6000803e3d6000fd5b505050506012600080604051620003579062003f78565b60a08082526004908201819052634261736560e01b60c083015260e060208301819052820152634241534560e01b61010082015260ff90931660408401526001600160a01b0390911660608301521515608082015261012001604051809103906000f080158015620003cd573d6000803e3d6000fd5b50602b60016101000a8154816001600160a01b0302191690836001600160a01b0316021790555060006040518060600160405280600081526020016000815260200160008152509050600066b1a2bc2ec5000090506000604051806101800160405280602b60019054906101000a90046001600160a01b03166001600160a01b03168152602001670de0b6b3a76400008152602001670de0b6b3a7640000815260200166038d7ea4c6800081526020016301e1338081526020016201518081526020016200049b84620025a2565b81526024546001600160a01b0390811660208301526023541660408083019190915260608201869052600560808301526103e860a090920191909152519091506000908290620004eb9062003f86565b620004f7919062004431565b604051809103906000f08015801562000514573d6000803e3d6000fd5b5090508181604051620005279062003f94565b6200053492919062004442565b604051809103906000f08015801562000551573d6000803e3d6000fd5b50602c60006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000805160206200fc2183398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b158015620005c657600080fd5b505af1158015620005db573d6000803e3d6000fd5b5050602480546040516303223eab60e11b81526001600160a01b0390911660048201526000805160206200fb6883398151915293506306447d56925001600060405180830381600087803b1580156200063357600080fd5b505af115801562000648573d6000803e3d6000fd5b5050602c546025546040516338c0646560e11b81526001600160a01b0391821660048201526001602482015291169250637180c8ca9150604401600060405180830381600087803b1580156200069d57600080fd5b505af1158015620006b2573d6000803e3d6000fd5b5050602b5460ff1691506200073d9050576000805160206200fb6883398151915263e5d6bf02620006e96301e13380600362004482565b6040518263ffffffff1660e01b81526004016200070891815260200190565b600060405180830381600087803b1580156200072357600080fd5b505af115801562000738573d6000803e3d6000fd5b505050505b50505050565b6040516370a0823160e01b81526001600160a01b038085166004830152600091620007c391869186918216906370a0823190602401602060405180830381865afa15801562000796573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007bc91906200449c565b856200082f565b949350505050565b606060148054806020026020016040519081016040528092919081815260200182805480156200082557602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831162000806575b5050505050905090565b6040516370a0823160e01b81526001600160a01b03858116600483015260009182918616906370a0823190602401602060405180830381865afa1580156200087b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620008a191906200449c565b905080841115620008c55760405163188c93a560e31b815260040160405180910390fd5b6000805160206200fc2183398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200091357600080fd5b505af115801562000928573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03891660048201526000805160206200fb6883398151915292506306447d569150602401600060405180830381600087803b1580156200097d57600080fd5b505af115801562000992573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b0389166004820152670de0b6b3a764000060248201526000805160206200fb68833981519152925063c88a5e6d9150604401600060405180830381600087803b158015620009f557600080fd5b505af115801562000a0a573d6000803e3d6000fd5b505060405163a9059cbb60e01b81526001600160a01b038681166004830152602482018890528816925063a9059cbb91506044016020604051808303816000875af115801562000a5e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000a849190620044b6565b509295945050505050565b6060601680548060200260200160405190810160405280929190818152602001828054801562000825576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000806575050505050905090565b6060601580548060200260200160405190810160405280929190818152602001828054801562000825576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000806575050505050905090565b60008160405160200162000b689190620044da565b60408051601f198184030181529082905280516020909101206318caf8e360e31b825291506000805160206200fb688339815191529063c657c7189062000bb69084908690600401620044ef565b600060405180830381600087803b15801562000bd157600080fd5b505af115801562000be6573d6000803e3d6000fd5b505060405163c88a5e6d60e01b81526001600160a01b038416600482015269021e19e0c9bab240000060248201526000805160206200fb68833981519152925063c88a5e6d9150604401600060405180830381600087803b15801562000c4b57600080fd5b505af115801562000c60573d6000803e3d6000fd5b50505050919050565b60606019805480602002602001604051908101604052809291908181526020016000905b8282101562000d535760008481526020908190206040805180820182526002860290920180546001600160a01b0316835260018101805483518187028101870190945280845293949193858301939283018282801562000d3a57602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b0319168152602001906004019060208260030104928301926001038202915080841162000cfb5790505b5050505050815250508152602001906001019062000c8d565b50505050905090565b601c5462000d88906001600160a01b031666b1a2bc2ec500006b019d971e4fe8401e74000000620025f6565b50601d5460009062000daf906001600160a01b03166a084595161401484a00000062002633565b601e54909250690a968163f0a57b400000915062000dd7906001600160a01b0316826200267a565b5050602c5460408051630c048d9160e31b815290516000926001600160a01b0316916360246c88916004808301926101a09291908290030181865afa15801562000e25573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000e4b919062004515565b60800151602c54604051636809623960e01b815262015180600482015267016345785d8a000060248201529192506001600160a01b031690636809623990604401600060405180830381600087803b15801562000ea757600080fd5b505af115801562000ebc573d6000803e3d6000fd5b5050602c546000925062000eda91506001600160a01b0316620026b5565b602c549091506001600160a01b031663ed64bab262000ef982620027bc565b6040518263ffffffff1660e01b815260040162000f1891815260200190565b600060405180830381600087803b15801562000f3357600080fd5b505af115801562000f48573d6000803e3d6000fd5b5050602c5462000f6f925062000f6891506001600160a01b0316620026b5565b8262002846565b602c546000906001600160a01b03166320fc488162000f8e82620027bc565b6040518263ffffffff1660e01b815260040162000fad91815260200190565b6040805180830381865afa15801562000fca573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000ff09190620045c3565b90506200100b81600001516001600160801b03168462002846565b602c5460408051630c048d9160e31b815290516000926001600160a01b0316916360246c88916004808301926101a09291908290030181865afa15801562001057573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200107d919062004515565b90506200108f8160a001518762002846565b6200109f8160e001518662002846565b505050505050565b601c54620010d3906001600160a01b031666b1a2bc2ec500006b019d971e4fe8401e74000000620025f6565b50601d54620010f7906001600160a01b03166a084595161401484a00000062002633565b5050601e54690a968163f0a57b400000906200111d906001600160a01b0316826200267a565b506000805160206200fb68833981519152905063e5d6bf02620011456301e13380426200463b565b6040518263ffffffff1660e01b81526004016200116491815260200190565b600060405180830381600087803b1580156200117f57600080fd5b505af115801562001194573d6000803e3d6000fd5b5050602c546001600160a01b0316915063ed64bab29050620011b682620027bc565b6040518263ffffffff1660e01b8152600401620011d591815260200190565b600060405180830381600087803b158015620011f057600080fd5b505af115801562001205573d6000803e3d6000fd5b5050602c54600092506001600160a01b031690506320fc48816200122982620027bc565b6040518263ffffffff1660e01b81526004016200124891815260200190565b6040805180830381865afa15801562001265573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200128b9190620045c3565b90506000602c60009054906101000a90046001600160a01b03166001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa158015620012e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200130a919062004515565b90506200132982600001516001600160801b0316826080015162002846565b6200133a8160a00151600062002846565b6200134b8160e00151600062002846565b505050565b60606018805480602002602001604051908101604052809291908181526020016000905b8282101562000d53578382906000526020600020018054620013969062004651565b80601f0160208091040260200160405190810160405280929190818152602001828054620013c49062004651565b8015620014155780601f10620013e95761010080835404028352916020019162001415565b820191906000526020600020905b815481529060010190602001808311620013f757829003601f168201915b50505050508152602001906001019062001374565b601c5462001456906001600160a01b031666b1a2bc2ec500006b019d971e4fe8401e74000000620025f6565b50601d546200147a906001600160a01b03166a084595161401484a00000062002633565b5050601e54690a968163f0a57b40000090620014a0906001600160a01b0316826200267a565b506000805160206200fb68833981519152905063e5d6bf02620014c86301e13380426200463b565b6040518263ffffffff1660e01b8152600401620014e791815260200190565b600060405180830381600087803b1580156200150257600080fd5b505af115801562001517573d6000803e3d6000fd5b5050602c546001600160a01b0316915063ed64bab290506200153982620027bc565b6040518263ffffffff1660e01b81526004016200155891815260200190565b600060405180830381600087803b1580156200157357600080fd5b505af115801562001588573d6000803e3d6000fd5b505050506000602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa158015620015e3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620016099190620046fa565b60a00151602c5462001624906001600160a01b0316620027bc565b620016309190620047bc565b602c546040516376b25d5960e11b8152600481018390529192506001600160a01b03169063ed64bab290602401600060405180830381600087803b1580156200167857600080fd5b505af11580156200168d573d6000803e3d6000fd5b5050602c54600092506001600160a01b031690506320fc4881620016b182620027bc565b6040518263ffffffff1660e01b8152600401620016d091815260200190565b6040805180830381865afa158015620016ed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620017139190620045c3565b90506000602c60009054906101000a90046001600160a01b03166001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa1580156200176c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062001792919062004515565b9050620017b182600001516001600160801b0316826080015162002846565b602c546040516320fc488160e01b8152600481018590526001600160a01b03909116906320fc4881906024016040805180830381865afa158015620017fa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620018209190620045c3565b91506200183f82600001516001600160801b0316826080015162002846565b620018508160a00151600062002846565b6200073d8160e00151600062002846565b6060601a805480602002602001604051908101604052809291908181526020016000905b8282101562000d535760008481526020908190206040805180820182526002860290920180546001600160a01b031683526001810180548351818702810187019094528084529394919385830193928301828280156200193257602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b03191681526020019060040190602082600301049283019260010382029150808411620018f35790505b5050505050815250508152602001906001019062001885565b604051630618f58760e51b815263ecd29e8160e01b60048201526000805160206200fb688339815191529063c31eb0e090602401600060405180830381600087803b1580156200199a57600080fd5b505af1158015620019af573d6000803e3d6000fd5b5050602c546001600160a01b0316915063ed64bab29050620019d562015180426200463b565b6040518263ffffffff1660e01b8152600401620019f491815260200190565b600060405180830381600087803b15801562001a0f57600080fd5b505af11580156200073d573d6000803e3d6000fd5b6000821280159062001a5e5762001a58848310156040518060600160405280603681526020016200fc616036913962002947565b62001a85565b62001a858285116040518060600160405280602781526020016200fba86027913962002947565b60008162001a94578462001aa0565b62001aa084866200463b565b90506000821562001ab2578562001ac9565b62001abd85620047d2565b62001ac99087620047bc565b90508084108062001ad957508184115b1562001b4f5762001b17848260405180604001604052806013815260200172195e18d959591cc81b1bddd95c88189bdd5b99606a1b81525062002980565b6200109f848360405180604001604052806013815260200172195e18d959591cc81d5c1c195c88189bdd5b99606a1b815250620029bd565b821562001c4f57600062001b648786620047bc565b90508581101562001c225760408051808201909152601a81527f507265636973696f6e20696e637265617365642062793a202573000000000000602082015262001bba9062001bb48389620047bc565b620029fa565b62001beb6040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b8152508762002a43565b62001c1c6040518060400160405280600d81526020016c4e65772044656c74613a20257360981b81525082620029fa565b62001c48565b62001c4883866040518060600160405280602981526020016200fbcf6029913962002a8c565b506200109f565b600062001c5d8588620047bc565b905062001c6a86620047d2565b81101562001d2e5762001cc56040518060400160405280601a81526020017f507265636973696f6e20696e637265617365642062793a202573000000000000815250828862001cb990620047d2565b62001bb49190620047bc565b62001cf66040518060400160405280600d81526020016c4f6c642044656c74613a20257360981b8152508762002a43565b62001d286040518060400160405280600e81526020016d4e65772044656c74613a202d257360901b81525082620029fa565b62001d54565b62001d5482866040518060600160405280602981526020016200fbf86029913962002a8c565b50505050505050565b60606017805480602002602001604051908101604052809291908181526020016000905b8282101562000d5357838290600052602060002001805462001da39062004651565b80601f016020809104026020016040519081016040528092919081815260200182805462001dd19062004651565b801562001e225780601f1062001df65761010080835404028352916020019162001e22565b820191906000526020600020905b81548152906001019060200180831162001e0457829003601f168201915b50505050508152602001906001019062001d81565b600754600090610100900460ff161562001e5a5750600754610100900460ff1690565b60006000805160206200fb688339815191523b1562001f5f57604080516000805160206200fb68833981519152602082018190526519985a5b195960d21b8284015282518083038401815260608301909352600092909162001ee1917f667f9d70ca411d70ead50d8d5c22070dafc36ad75f3dcf5e7237b22ade9aecc491608001620047f1565b60408051601f198184030181529082905262001efd9162004824565b6000604051808303816000865af19150503d806000811462001f3c576040519150601f19603f3d011682016040523d82523d6000602084013e62001f41565b606091505b509150508080602001905181019062001f5b9190620044b6565b9150505b919050565b602c5460009062001f7e906001600160a01b0316620027bc565b604051630618f58760e51b815263ecd29e8160e01b60048201529091506000805160206200fb688339815191529063c31eb0e090602401600060405180830381600087803b15801562001fd057600080fd5b505af115801562001fe5573d6000803e3d6000fd5b5050602c546001600160a01b0316915063ed64bab29050620020098360016200463b565b6040518263ffffffff1660e01b81526004016200202891815260200190565b600060405180830381600087803b1580156200204357600080fd5b505af115801562002058573d6000803e3d6000fd5b5050505050565b6060601380548060200260200160405190810160405280929190818152602001828054801562000825576020028201919060005260206000209081546001600160a01b0316815260019091019060200180831162000806575050505050905090565b601c54620020ed906001600160a01b031666b1a2bc2ec500006b019d971e4fe8401e74000000620025f6565b50620021056201518067016345785d8a000062002ac8565b602c5460408051630c048d9160e31b815290516000926001600160a01b0316916360246c88916004808301926101a09291908290030181865afa15801562002151573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002177919062004515565b60800151602c5490915060009062002198906001600160a01b0316620026b5565b602c549091506001600160a01b031663ed64bab2620021b782620027bc565b6040518263ffffffff1660e01b8152600401620021d691815260200190565b600060405180830381600087803b158015620021f157600080fd5b505af115801562002206573d6000803e3d6000fd5b5050602c5462002226925062000f6891506001600160a01b0316620026b5565b602c546000906001600160a01b03166320fc48816200224582620027bc565b6040518263ffffffff1660e01b81526004016200226491815260200190565b6040805180830381865afa15801562002281573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620022a79190620045c3565b90506200134b81600001516001600160801b03168462002846565b620022ea60405180604001604052806005815260200164616c69636560d81b81525062000b53565b601c80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623137b160e91b60208201526200232f9062000b53565b601d80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526563656c696e6560d01b6020820152620023779062000b53565b601e80546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260038152623230b760e91b6020820152620023bc9062000b53565b601f80546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600381526265766560e81b6020820152620024019062000b53565b602060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555062002452604051806040016040528060088152602001673232b83637bcb2b960c11b81525062000b53565b602280546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600681526536b4b73a32b960d11b60208201526200249a9062000b53565b602180546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600c81526b3332b2a1b7b63632b1ba37b960a11b6020820152620024e89062000b53565b602380546001600160a01b0319166001600160a01b039290921691909117905560408051808201909152600a815269676f7665726e616e636560b01b6020820152620025349062000b53565b602480546001600160a01b0319166001600160a01b03929092169190911790556040805180820190915260068152653830bab9b2b960d11b60208201526200257c9062000b53565b602580546001600160a01b0319166001600160a01b039290921691909117905542602855565b600080620025d9620025c9620025ba85606462004482565b66a5bbed86c5a0009062002ba2565b6748cd4072281e00009062002bb9565b9050620025ef670de0b6b3a76400008262002bb9565b9392505050565b6000620007c38484846040518060a00160405280600115158152602001878152602001600081526020016000815260200160001981525062002bd0565b6000806200266f84846040518060a001604052806001151581526020018781526020016000815260200187815260200160001981525062002f5a565b915091509250929050565b6000806200266f84846040518060a00160405280600115158152602001878152602001600081526020016000815260200187815250620032df565b600080826001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa158015620026f8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200271e9190620046fa565b90506000836001600160a01b03166360246c886040518163ffffffff1660e01b81526004016101a060405180830381865afa15801562002762573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002788919062004515565b9050620007c3620027a28260000151836020015162003720565b8260400151846020015185608001518660c0015162003740565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa158015620027fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620028249190620046fa565b60a0015162002834904262004858565b620028409042620047bc565b92915050565b80821462002943576000805160206200fb48833981519152604051620028a89060208082526022908201527f4572726f723a2061203d3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a160408051818152600a81830152690808080808081319599d60b21b60608201526020810184905290516000805160206200fc418339815191529181900360800190a160408051818152600a91810191909152690808080808149a59da1d60b21b6060820152602081018290526000805160206200fc41833981519152906080015b60405180910390a1620029436200378e565b5050565b8162002943576000805160206200fb88833981519152816040516200296d91906200486f565b60405180910390a1620029438262003897565b818310156200134b576000805160206200fb8883398151915281604051620029a991906200486f565b60405180910390a16200134b838362003901565b818311156200134b576000805160206200fb8883398151915281604051620029e691906200486f565b60405180910390a16200134b8383620039f0565b62002943828260405160240162002a13929190620048a0565b60408051601f198184030181529190526020810180516001600160e01b0316632d839cb360e21b17905262003a53565b62002943828260405160240162002a5c929190620048a0565b60408051601f198184030181529190526020810180516001600160e01b0316631e53134760e11b17905262003a53565b8183146200134b576000805160206200fb888339815191528160405162002ab491906200486f565b60405180910390a16200134b838362002846565b602c54604051636809623960e01b815260048101849052602481018390526001600160a01b0390911690636809623990604401600060405180830381600087803b15801562002b1657600080fd5b505af115801562002b2b573d6000803e3d6000fd5b506000805160206200fb68833981519152925063e5d6bf02915062002b53905084426200463b565b6040518263ffffffff1660e01b815260040162002b7291815260200190565b600060405180830381600087803b15801562002b8d57600080fd5b505af11580156200109f573d6000803e3d6000fd5b6000620025ef8383670de0b6b3a764000062003a5e565b6000620025ef83670de0b6b3a76400008462003a5e565b60006000805160206200fc2183398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562002c2057600080fd5b505af115801562002c35573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200fb6883398151915292506306447d569150602401600060405180830381600087803b15801562002c8a57600080fd5b505af115801562002c9f573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa15801562002d04573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002d2a9190620046fa565b516001600160a01b031614801562002d40575081515b1562002dde57602c5460208301518351604051632002b33360e01b815260048101879052602481018890526001600160a01b0389811660448301529115156064820152921691632002b333919060840160206040518083038185885af115801562002daf573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019062002dd691906200449c565b9050620007c3565b602b54602083015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b15801562002e2f57600080fd5b505af115801562002e44573d6000803e3d6000fd5b5050602b54602c54602086015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af115801562002ea9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002ecf9190620044b6565b50602c548251604051632002b33360e01b815260048101869052602481018790526001600160a01b0388811660448301529115156064820152911690632002b333906084016020604051808303816000875af115801562002f34573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062002dd691906200449c565b6000806000805160206200fc2183398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801562002fab57600080fd5b505af115801562002fc0573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200fb6883398151915292506306447d569150602401600060405180830381600087803b1580156200301557600080fd5b505af11580156200302a573d6000803e3d6000fd5b5050602c5460408051630161b2cb60e71b8152905173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee94506001600160a01b03909216925063b0d96580916004808301926101c09291908290030181865afa1580156200308f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620030b59190620046fa565b516001600160a01b0316148015620030cb575082515b156200316957602c54602084015160608501516040808701518751915163036d741560e11b81526001600160a01b03909516946306dae82a94936200311a938b9391928d9190600401620048c4565b604080518083038185885af115801562003138573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906200315f9190620048f2565b91509150620032d7565b602b5460405163140e25ad60e31b8152600481018690526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b158015620031b457600080fd5b505af1158015620031c9573d6000803e3d6000fd5b5050602b54602c5460405163095ea7b360e01b81526001600160a01b0391821660048201526024810189905261010090920416925063095ea7b391506044016020604051808303816000875af115801562003228573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200324e9190620044b6565b50602c5460608401516040808601518651915163036d741560e11b81526001600160a01b03909416936306dae82a9362003292938a9391928c9190600401620048c4565b60408051808303816000875af1158015620032b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200315f9190620048f2565b935093915050565b6000806000805160206200fc2183398151915260001c6001600160a01b03166390c5013b6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156200333057600080fd5b505af115801562003345573d6000803e3d6000fd5b50506040516303223eab60e11b81526001600160a01b03881660048201526000805160206200fb6883398151915292506306447d569150602401600060405180830381600087803b1580156200339a57600080fd5b505af1158015620033af573d6000803e3d6000fd5b5050602c54620033cb92506001600160a01b0316905062003a7d565b915073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0316602c60009054906101000a90046001600160a01b03166001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003440573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620034669190620046fa565b516001600160a01b03161480156200347c575082515b156200351b57602c54602084015160808501516040808701518751915163a179403b60e01b81526001600160a01b039095169463a179403b9493620034cb938b9391928d9190600401620048c4565b604080518083038185885af1158015620034e9573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190620035109190620048f2565b9092509050620032d7565b602b54602084015160405163140e25ad60e31b815260048101919091526101009091046001600160a01b03169063a0712d6890602401600060405180830381600087803b1580156200356c57600080fd5b505af115801562003581573d6000803e3d6000fd5b5050602b54602c54608087015160405163095ea7b360e01b81526001600160a01b039283166004820152602481019190915261010090920416925063095ea7b391506044016020604051808303816000875af1158015620035e6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200360c9190620044b6565b50602c5460808401516040808601518651915163a179403b60e01b81526001600160a01b039094169363a179403b9362003650938a9391928c9190600401620048c4565b60408051808303816000875af11580156200366f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620036959190620048f2565b602b54602086015192945090925061010090046001600160a01b0316906342966c6890620036c5908490620047bc565b6040518263ffffffff1660e01b8152600401620036e491815260200190565b600060405180830381600087803b158015620036ff57600080fd5b505af115801562003714573d6000803e3d6000fd5b50505050935093915050565b6000806200372f838562004917565b90506000811215620025ef57600080fd5b600080620037518787878662003b00565b9050620037836200376882866301e1338062003b24565b6200377c83670de0b6b3a7640000620047bc565b9062002bb9565b979650505050505050565b6000805160206200fb688339815191523b156200388657604080516000805160206200fb68833981519152602082018190526519985a5b195960d21b9282019290925260016060820152600091907f70ca10bbd0dbfd9020a9f4b13402c16cb120705e0d1c0aeab10fa353ae586fc49060800160408051601f1981840301815290829052620038219291602001620047f1565b60408051601f19818403018152908290526200383d9162004824565b6000604051808303816000865af19150503d80600081146200387c576040519150601f19603f3d011682016040523d82523d6000602084013e62003881565b606091505b505050505b6007805461ff001916610100179055565b80620038fe576000805160206200fb48833981519152604051620038ec9060208082526017908201527f4572726f723a20417373657274696f6e204661696c6564000000000000000000604082015260600190565b60405180910390a1620038fe6200378e565b50565b8082101562002943576000805160206200fb48833981519152604051620039649060208082526022908201527f4572726f723a2061203e3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b60405180910390a16040805181815260098183015268202056616c7565206160b81b60608201526020810184905290516000805160206200fc418339815191529181900360800190a1604080518181526009918101919091526810102b30b63ab2903160b91b6060820152602081018290526000805160206200fc418339815191529060800162002931565b8082111562002943576000805160206200fb48833981519152604051620039649060208082526022908201527f4572726f723a2061203c3d2062206e6f7420736174697366696564205b75696e604082015261745d60f01b606082015260800190565b620038fe8162003b4b565b600082600019048411830215820262003a7657600080fd5b5091020490565b6000816001600160a01b031663b0d965806040518163ffffffff1660e01b81526004016101c060405180830381865afa15801562003abf573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062003ae59190620046fa565b6080015162003af483620027bc565b6200284091906200463b565b600062003b1b8262003b1485888862003a5e565b9062003b6c565b95945050505050565b600082600019048411830215820262003b3c57600080fd5b50910281810615159190040190565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60008160000362003b875750670de0b6b3a764000062002840565b8260000362003b995750600062002840565b81600062003ba78562003bd7565b905081810262003bc0670de0b6b3a76400008262004941565b905062003bcd8162003deb565b9695505050505050565b600080821362003bfa57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821362003e0757506000919050565b680755bf798b4a1bf1e5821262003e315760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b611daa806200497683390190565b6125b1806200672083390190565b616e778062008cd183390190565b6001600160a01b0381168114620038fe57600080fd5b60008060006060848603121562003fce57600080fd5b833562003fdb8162003fa2565b9250602084013562003fed8162003fa2565b9150604084013562003fff8162003fa2565b809150509250925092565b6020808252825182820181905260009190848201906040850190845b818110156200404d5783516001600160a01b03168352928401929184019160010162004026565b50909695505050505050565b600080600080608085870312156200407057600080fd5b84356200407d8162003fa2565b935060208501356200408f8162003fa2565b9250604085013591506060850135620040a88162003fa2565b939692955090935050565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715620040f057620040f0620040b3565b60405290565b604051610180810167ffffffffffffffff81118282101715620040f057620040f0620040b3565b6000602082840312156200413057600080fd5b813567ffffffffffffffff808211156200414957600080fd5b818401915084601f8301126200415e57600080fd5b813581811115620041735762004173620040b3565b604051601f8201601f19908116603f011681019083821181831017156200419e576200419e620040b3565b81604052828152876020848701011115620041b857600080fd5b826020860160208301376000928101602001929092525095945050505050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b848110156200428057898403603f19018652825180516001600160a01b03168552880151888501889052805188860181905290890190839060608701905b808310156200426a5783516001600160e01b0319168252928b019260019290920191908b01906200423e565b50978a0197955050509187019160010162004200565b50919998505050505050505050565b60005b83811015620042ac57818101518382015260200162004292565b50506000910152565b60008151808452620042cf8160208601602086016200428f565b601f01601f19169290920160200192915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156200433c57603f1988860301845262004329858351620042b5565b945092850192908501906001016200430a565b5092979650505050505050565b6000806000606084860312156200435f57600080fd5b505081359360208301359350604090920135919050565b80516001600160a01b031682526020810151602083015260408101516040830152606081015160608301526080810151608083015260a081015160a083015260c081015160c083015260e0810151620043da60e08401826001600160a01b03169052565b50610100818101516001600160a01b0381168483015250506101208181015180518483015260208101516101408501526040810151610160850152505061014081015161018083015261016001516101a090910152565b6101c0810162002840828462004376565b6101e0810162004453828562004376565b6001600160a01b03929092166101c09190910152919050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176200284057620028406200446c565b600060208284031215620044af57600080fd5b5051919050565b600060208284031215620044c957600080fd5b81518015158114620025ef57600080fd5b602081526000620025ef6020830184620042b5565b6001600160a01b0383168152604060208201819052600090620007c390830184620042b5565b60006101a082840312156200452957600080fd5b62004533620040c9565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152506101408084015181830152506101608084015181830152506101808084015181830152508091505092915050565b600060408284031215620045d657600080fd5b6040516040810181811067ffffffffffffffff82111715620045fc57620045fc620040b3565b60405282516001600160801b03811681146200461757600080fd5b81526020830151600f81900b81146200462f57600080fd5b60208201529392505050565b808201808211156200284057620028406200446c565b600181811c908216806200466657607f821691505b6020821081036200468757634e487b7160e01b600052602260045260246000fd5b50919050565b805162001f5f8162003fa2565b600060608284031215620046ad57600080fd5b6040516060810181811067ffffffffffffffff82111715620046d357620046d3620040b3565b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c082840312156200470e57600080fd5b62004718620040f6565b62004723836200468d565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200476f60e084016200468d565b60e0820152610100620047848185016200468d565b9082015261012062004799858583016200469a565b908201526101808301516101408201526101a09092015161016083015250919050565b818103818111156200284057620028406200446c565b6000600160ff1b8201620047ea57620047ea6200446c565b5060000390565b6001600160e01b0319831681528151600090620048168160048501602087016200428f565b919091016004019392505050565b60008251620048388184602087016200428f565b9190910192915050565b634e487b7160e01b600052601260045260246000fd5b6000826200486a576200486a62004842565b500690565b60408152600560408201526422b93937b960d91b6060820152608060208201526000620025ef6080830184620042b5565b604081526000620048b56040830185620042b5565b90508260208301529392505050565b948552602085019390935260408401919091526001600160a01b031660608301521515608082015260a00190565b600080604083850312156200490657600080fd5b505080516020909101519092909150565b81810360008312801583831316838312821617156200493a576200493a6200446c565b5092915050565b60008262004953576200495362004842565b600160ff1b8214600019841416156200497057620049706200446c565b50059056fe6101006040523480156200001257600080fd5b5060405162001daa38038062001daa833981016040819052620000359162000291565b8130818188888860006200004a8482620003d7565b506001620000598382620003d7565b5060ff81166080524660a0526200006f6200011a565b60c0525050600680546001600160a01b038086166001600160a01b03199283168117909355600780549186169190921617905560405190915033907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a36040516001600160a01b0382169033907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350505050151560e052506200052192505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516200014e9190620004a3565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001de57600080fd5b81516001600160401b0380821115620001fb57620001fb620001b6565b604051601f8301601f19908116603f01168101908282118183101715620002265762000226620001b6565b816040528381526020925086838588010111156200024357600080fd5b600091505b8382101562000267578582018301518183018401529082019062000248565b600093810190920192909252949350505050565b805180151581146200028c57600080fd5b919050565b600080600080600060a08688031215620002aa57600080fd5b85516001600160401b0380821115620002c257600080fd5b620002d089838a01620001cc565b96506020880151915080821115620002e757600080fd5b50620002f688828901620001cc565b945050604086015160ff811681146200030e57600080fd5b60608701519093506001600160a01b03811681146200032c57600080fd5b91506200033c608087016200027b565b90509295509295909350565b600181811c908216806200035d57607f821691505b6020821081036200037e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620003d257600081815260208120601f850160051c81016020861015620003ad5750805b601f850160051c820191505b81811015620003ce57828155600101620003b9565b5050505b505050565b81516001600160401b03811115620003f357620003f3620001b6565b6200040b8162000404845462000348565b8462000384565b602080601f8311600181146200044357600084156200042a5750858301515b600019600386901b1c1916600185901b178555620003ce565b600085815260208120601f198616915b82811015620004745788860151825594840194600190910190840162000453565b5085821015620004935787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620004b38162000348565b60018281168015620004ce5760018114620004e45762000515565b60ff198416875282151583028701945062000515565b8760005260208060002060005b858110156200050c5781548a820152908401908201620004f1565b50505082870194505b50929695505050505050565b60805160a05160c05160e05161183a6200057060003960008181610850015281816108b601528181610bf50152610c570152600061082c015260006107f7015260006102ae015261183a6000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637a9e5e4b1161010f578063bf7e214f116100a2578063e688747b11610071578063e688747b14610495578063ea7ca276146104cb578063ed0d0efb14610502578063f2fde38b1461052257600080fd5b8063bf7e214f1461041b578063c53a39851461042e578063d505accf14610457578063dd62ed3e1461046a57600080fd5b80639dc29fac116100de5780639dc29fac146103cf578063a0712d68146103e2578063a9059cbb146103f5578063b70096131461040857600080fd5b80637a9e5e4b146103695780637ecebe001461037c5780638da5cb5b1461039c57806395d89b41146103c757600080fd5b8063313ce567116101875780634b5159da116101565780634b5159da1461031057806367aff4841461032357806370a0823114610336578063728b952b1461035657600080fd5b8063313ce567146102a95780633644e515146102e257806340c10f19146102ea57806342966c68146102fd57600080fd5b80630bade8a4116101c35780630bade8a4146102555780630ea9b75b1461027857806318160ddd1461028d57806323b872dd1461029657600080fd5b806306a36aee146101ea57806306fdde031461021d578063095ea7b314610232575b600080fd5b61020a6101f83660046112f2565b60096020526000908152604090205481565b6040519081526020015b60405180910390f35b610225610535565b604051610214919061130f565b61024561024036600461135d565b6105c3565b6040519015158152602001610214565b6102456102633660046113a6565b600a6020526000908152604090205460ff1681565b61028b6102863660046113e0565b610630565b005b61020a60025481565b6102456102a4366004611427565b610711565b6102d07f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610214565b61020a6107f3565b61028b6102f836600461135d565b61084e565b61028b61030b366004611468565b6108b4565b61028b61031e366004611481565b610919565b61028b6103313660046114b8565b6109ab565b61020a6103443660046112f2565b60036020526000908152604090205481565b61028b6103643660046114e6565b610a73565b61028b6103773660046112f2565b610afc565b61020a61038a3660046112f2565b60056020526000908152604090205481565b6006546103af906001600160a01b031681565b6040516001600160a01b039091168152602001610214565b610225610be6565b61028b6103dd36600461135d565b610bf3565b61028b6103f0366004611468565b610c55565b61024561040336600461135d565b610cb7565b610245610416366004611514565b610d1d565b6007546103af906001600160a01b031681565b6103af61043c3660046112f2565b6008602052600090815260409020546001600160a01b031681565b61028b61046536600461155b565b610e1b565b61020a6104783660046114e6565b600460209081526000928352604080842090915290825290205481565b6102456104a33660046115c9565b6001600160e01b0319166000908152600b602052604090205460ff919091161c600116151590565b6102456104d93660046115fc565b6001600160a01b0391909116600090815260096020526040902054600160ff9092161c16151590565b61020a6105103660046113a6565b600b6020526000908152604090205481565b61028b6105303660046112f2565b61105f565b6000805461054290611628565b80601f016020809104026020016040519081016040528092919081815260200182805461056e90611628565b80156105bb5780601f10610590576101008083540402835291602001916105bb565b820191906000526020600020905b81548152906001019060200180831161059e57829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259061061e9086815260200190565b60405180910390a35060015b92915050565b610646336000356001600160e01b0319166110dd565b61066b5760405162461bcd60e51b815260040161066290611662565b60405180910390fd5b801561069b576001600160e01b031982166000908152600b602052604090208054600160ff86161b1790556106c2565b6001600160e01b031982166000908152600b602052604090208054600160ff86161b191690555b816001600160e01b0319168360ff167fbfe16b2c35ce23dfd1ab0e7b5d086a10060c9b52d1574e1680c881b3b3a2b15183604051610704911515815260200190565b60405180910390a3505050565b6001600160a01b0383166000908152600460209081526040808320338452909152812054600019811461076d57610748838261169e565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b0385166000908152600360205260408120805485929061079590849061169e565b90915550506001600160a01b03808516600081815260036020526040908190208054870190555190918716906000805160206117e5833981519152906107de9087815260200190565b60405180910390a360019150505b9392505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461082957610824611187565b905090565b507f000000000000000000000000000000000000000000000000000000000000000090565b7f0000000000000000000000000000000000000000000000000000000000000000156108a65761088a336000356001600160e01b0319166110dd565b6108a65760405162461bcd60e51b8152600401610662906116b1565b6108b08282611221565b5050565b7f00000000000000000000000000000000000000000000000000000000000000001561090c576108f0336000356001600160e01b0319166110dd565b61090c5760405162461bcd60e51b8152600401610662906116b1565b610916338261127b565b50565b61092f336000356001600160e01b0319166110dd565b61094b5760405162461bcd60e51b815260040161066290611662565b6001600160e01b031982166000818152600a6020908152604091829020805460ff191685151590811790915591519182527f36d28126bef21a4f3765d7fcb7c45cead463ae4c41094ef3b771ede598544103910160405180910390a25050565b6109c1336000356001600160e01b0319166110dd565b6109dd5760405162461bcd60e51b815260040161066290611662565b8015610a0c576001600160a01b03831660009081526009602052604090208054600160ff85161b179055610a32565b6001600160a01b03831660009081526009602052604090208054600160ff85161b191690555b8160ff16836001600160a01b03167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf283604051610704911515815260200190565b610a89336000356001600160e01b0319166110dd565b610aa55760405162461bcd60e51b815260040161066290611662565b6001600160a01b0382811660008181526008602052604080822080546001600160a01b0319169486169485179055517fa4908e11a5f895b13d51526c331ac93cdd30e59772361c5d07874eb36bff20659190a35050565b6006546001600160a01b0316331480610b91575060075460405163b700961360e01b81526001600160a01b039091169063b700961390610b5090339030906001600160e01b031960003516906004016116e8565b602060405180830381865afa158015610b6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b919190611715565b610b9a57600080fd5b600780546001600160a01b0319166001600160a01b03831690811790915560405133907fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019890600090a350565b6001805461054290611628565b7f000000000000000000000000000000000000000000000000000000000000000015610c4b57610c2f336000356001600160e01b0319166110dd565b610c4b5760405162461bcd60e51b8152600401610662906116b1565b6108b0828261127b565b7f000000000000000000000000000000000000000000000000000000000000000015610cad57610c91336000356001600160e01b0319166110dd565b610cad5760405162461bcd60e51b8152600401610662906116b1565b6109163382611221565b33600090815260036020526040812080548391908390610cd890849061169e565b90915550506001600160a01b038316600081815260036020526040908190208054850190555133906000805160206117e58339815191529061061e9086815260200190565b6001600160a01b038083166000908152600860205260408120549091168015610db95760405163b700961360e01b81526001600160a01b0382169063b700961390610d70908890889088906004016116e8565b602060405180830381865afa158015610d8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db19190611715565b9150506107ec565b6001600160e01b031983166000908152600a602052604090205460ff1680610e1257506001600160e01b031983166000908152600b60209081526040808320546001600160a01b03891684526009909252909120541615155b95945050505050565b42841015610e6b5760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610662565b60006001610e776107f3565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610f83573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610fb95750876001600160a01b0316816001600160a01b0316145b610ff65760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610662565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b611075336000356001600160e01b0319166110dd565b6110915760405162461bcd60e51b815260040161066290611662565b600680546001600160a01b0319166001600160a01b03831690811790915560405133907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a350565b6007546000906001600160a01b03168015801590611167575060405163b700961360e01b81526001600160a01b0382169063b700961390611126908790309088906004016116e8565b602060405180830381865afa158015611143573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111679190611715565b8061117f57506006546001600160a01b038581169116145b949350505050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516111b99190611732565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b806002600082825461123391906117d1565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481526000805160206117e583398151915291015b60405180910390a35050565b6001600160a01b038216600090815260036020526040812080548392906112a390849061169e565b90915550506002805482900390556040518181526000906001600160a01b038416906000805160206117e58339815191529060200161126f565b6001600160a01b038116811461091657600080fd5b60006020828403121561130457600080fd5b81356107ec816112dd565b600060208083528351808285015260005b8181101561133c57858101830151858201604001528201611320565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561137057600080fd5b823561137b816112dd565b946020939093013593505050565b80356001600160e01b0319811681146113a157600080fd5b919050565b6000602082840312156113b857600080fd5b6107ec82611389565b803560ff811681146113a157600080fd5b801515811461091657600080fd5b6000806000606084860312156113f557600080fd5b6113fe846113c1565b925061140c60208501611389565b9150604084013561141c816113d2565b809150509250925092565b60008060006060848603121561143c57600080fd5b8335611447816112dd565b92506020840135611457816112dd565b929592945050506040919091013590565b60006020828403121561147a57600080fd5b5035919050565b6000806040838503121561149457600080fd5b61149d83611389565b915060208301356114ad816113d2565b809150509250929050565b6000806000606084860312156114cd57600080fd5b83356114d8816112dd565b925061140c602085016113c1565b600080604083850312156114f957600080fd5b8235611504816112dd565b915060208301356114ad816112dd565b60008060006060848603121561152957600080fd5b8335611534816112dd565b92506020840135611544816112dd565b915061155260408501611389565b90509250925092565b600080600080600080600060e0888a03121561157657600080fd5b8735611581816112dd565b96506020880135611591816112dd565b955060408801359450606088013593506115ad608089016113c1565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156115dc57600080fd5b6115e5836113c1565b91506115f360208401611389565b90509250929050565b6000806040838503121561160f57600080fd5b823561161a816112dd565b91506115f3602084016113c1565b600181811c9082168061163c57607f821691505b60208210810361165c57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600c908201526b15539055551213d49256915160a21b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561062a5761062a611688565b6020808252601d908201527f45524332304d696e7461626c653a206e6f7420617574686f72697a6564000000604082015260600190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561172757600080fd5b81516107ec816113d2565b600080835481600182811c91508083168061174e57607f831692505b6020808410820361176d57634e487b7160e01b86526022600452602486fd5b8180156117815760018114611796576117c3565b60ff19861689528415158502890196506117c3565b60008a81526020902060005b868110156117bb5781548b8201529085019083016117a2565b505084890196505b509498975050505050505050565b8082018082111561062a5761062a61168856feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220c46d60312a48a19e5824eea37262561692b6e9002d0794800a6d59118ed383ad64736f6c6343000813003361024060405260016000553480156200001757600080fd5b50604051620025b1380380620025b18339810160408190526200003a91620002ad565b6000608081905260a081905281516001600160a01b031660c0526040820151829190819083906103e8111562000083576040516349db44f560e01b815260040160405180910390fd5b60408101516101605260608101516101805260a0810151600003620000bb57604051635428734d60e01b815260040160405180910390fd5b60a08101805160e0525160808201511080620000eb57508060a001518160800151620000e891906200036f565b15155b156200010a5760405163253fffcf60e11b815260040160405180910390fd5b608081015161010090815260c082015161012090815260208301516101405260e0830151601180546001600160a01b0319166001600160a01b03928316179055918301519091166102005281015151670de0b6b3a764000010806200017f5750670de0b6b3a764000081610120015160200151115b806200019b5750670de0b6b3a764000081610120015160400151115b15620001ba576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101a0528051602001516101c05251604001516101e052610160015161022052506200039292505050565b60405161018081016001600160401b03811182821017156200021f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200023d57600080fd5b919050565b6000606082840312156200025557600080fd5b604051606081016001600160401b03811182821017156200028657634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60006101c08284031215620002c157600080fd5b620002cb620001ed565b620002d68362000225565b81526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c08201526200032260e0840162000225565b60e08201526101006200033781850162000225565b908201526101206200034c8585830162000242565b908201526101808301516101408201526101a09092015161016083015250919050565b6000826200038d57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e05161020051610220516121466200046b6000396000610a3b0152600061098b01526000610a04015260006109df015260006109bc015260006108e50152600081816108c00152610eaa0152600081816108960152610e8401526000818161095b0152610ed001526000818161090f0152611234015260008181610935015261148901526000818161087101528181610b9c0152610d5501526000610bd501526000610b5c01526121466000f3fe608060405234801561001057600080fd5b50600436106101205760003560e01c8063b0d96580116100ad578063c69e16ad11610071578063c69e16ad146101f7578063c905a4b514610282578063d81657431461028a578063e985e9c51461029f578063fba56008146102c257600080fd5b8063b0d9658014610212578063bd85b03914610227578063becee9c31461023a578063c45a01551461025a578063c55dae631461027a57600080fd5b80634e41a1fb116100f45780634e41a1fb146101bc57806360246c88146101cf5780637ecebe00146101e45780638e67f87e146101f7578063afdac68d146101ff57600080fd5b8062ad800c1461012557806320fc48811461014e57806321ff32a9146101885780633656eec2146101a9575b600080fd5b610138610133366004611a5a565b6102f1565b6040516101459190611ab9565b60405180910390f35b61016161015c366004611a5a565b610332565b6040805182516001600160801b03168152602092830151600f0b9281019290925201610145565b61019b610196366004611ae3565b610384565b604051908152602001610145565b61019b6101b7366004611b1f565b6103ca565b6101386101ca366004611a5a565b610403565b6101d761042b565b6040516101459190611b4b565b61019b6101f2366004611bd6565b610625565b61019b610651565b61019b61020d366004611a5a565b61066e565b61021a610854565b6040516101459190611bf1565b61019b610235366004611a5a565b610a71565b61024d610248366004611cb3565b610a93565b6040516101459190611d28565b610262610b4e565b6040516001600160a01b039091168152602001610145565b610262610b8e565b61019b610bce565b610292610c06565b6040516101459190611d6c565b6102b26102ad366004611e59565b610c6c565b6040519015158152602001610145565b6102ca610cb0565b6040805182516001600160801b039081168252602093840151169281019290925201610145565b606061032d600560008481526020019081526020016000206040516020016103199190611e83565b604051602081830303815290604052610d0f565b919050565b604080518082019091526000808252602082015261032d600e600084815260200190815260200160002060405160200161031991546001600160801b038116825260801d600f0b602082015260400190565b60008381526004602090815260408083206001600160a01b03868116855290835281842090851684528252808320548151928301526103c39101610319565b9392505050565b60008281526001602090815260408083206001600160a01b03851684528252808320548151928301526103fd9101610319565b92915050565b606061032d600660008481526020019081526020016000206040516020016103199190611e83565b610496604051806101a00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60006104a0610d33565b600d5460026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f5460008080527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b54939450926001600160801b039092169161050b9190611f45565b6105159190611f58565b90506000808311610527576000610542565b6105428361053c61053786610de7565b610f4d565b906111bf565b604080516101a0810182526008546001600160801b038082168352600954600f0b6020840152600160801b918290048116938301939093526060820186905260808201879052600a5480841660a0840152600b5480851660c085015290829004841660e08401528190048316610100830152600d5480841661012084015204909116610140820152909150600090610160810184156105ea576105e584866111d4565b6105ed565b60005b8152600954600160801b90046001600160801b031660209182015260405191925061061e9161031991849101611b4b565b5050505090565b6001600160a01b03811660009081526007602090815260408083205481519283015261032d9101610319565b600061066b60105460405160200161031991815260200190565b90565b601354601280546000926001600160801b03600160801b8204811693911691849190839081106106a0576106a0611f6b565b600091825260208083206040805180820190915292015463ffffffff8116835264010000000090046001600160e01b03169082015291506106e18685611f58565b9050600083156106fb576106f6600185611f58565b61070a565b60125461070a90600190611f58565b60408051808201909152600080825260208201529091505b8482146107b95760006012838154811061073e5761073e611f6b565b6000918252602090912001805490915063ffffffff16841061078c5760408051808201909152905463ffffffff8116825264010000000090046001600160e01b0316602082015290506107b9565b82156107a25761079d600184611f58565b6107b1565b6012546107b190600190611f58565b925050610722565b805163ffffffff166000036107e157604051630a89817b60e41b815260040160405180910390fd5b600081602001516001600160e01b031685602001516001600160e01b03166108099190611f58565b825186519192506000916108269163ffffffff9081169116611f58565b90506108476108358284611f97565b60405160200161031991815260200190565b5050505050505050919050565b61085c6119bc565b60408051610180810182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682527f00000000000000000000000000000000000000000000000000000000000000006020808401919091527f0000000000000000000000000000000000000000000000000000000000000000838501527f00000000000000000000000000000000000000000000000000000000000000006060808501919091527f000000000000000000000000000000000000000000000000000000000000000060808501527f000000000000000000000000000000000000000000000000000000000000000060a08501527f000000000000000000000000000000000000000000000000000000000000000060c0850152601154831660e08501527f0000000000000000000000000000000000000000000000000000000000000000909216610100840152835191820184527f000000000000000000000000000000000000000000000000000000000000000082527f0000000000000000000000000000000000000000000000000000000000000000828201527f0000000000000000000000000000000000000000000000000000000000000000828501526101208301919091526012546101408301527f0000000000000000000000000000000000000000000000000000000000000000610160830152915161066b92610319929101611bf1565b60008181526002602090815260408083205481519283015261032d9101610319565b606060008267ffffffffffffffff811115610ab057610ab0611fab565b604051908082528060200260200182016040528015610ad9578160200160208202803683370190505b50905060005b83811015610b32576000858583818110610afb57610afb611f6b565b90506020020135905060008154905080848481518110610b1d57610b1d611f6b565b60209081029190910101525050600101610adf565b50610b47816040516020016103199190611d28565b5092915050565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b604080516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602082015260009161066b9101610319565b600061066b7f000000000000000000000000000000000000000000000000000000000000000060405160200161031991815260200190565b6040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915261066b60086040516020016103199190611fc1565b6001600160a01b038281166000908152600360209081526040808320938516835292815282822054835160ff90911615159181019190915290916103fd9101610319565b6040805180820190915260008082526020820152604080518082018252600d546001600160801b03808216808452600160801b909204811660209384019081528451938401929092529051169181019190915261066b90606001610319565b80604051636e64089360e11b8152600401610d2a9190611ab9565b60405180910390fd5b6040516370a0823160e01b815230600482015260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015610d9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc09190612042565b9050601454600003610dd3576000610de1565b601454610de19082906111d4565b91505090565b610e4460405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b549091610100830191610f1391166111e9565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192610f45929004166111e9565b905292915050565b600080610f6d8361014001518461012001516111bf90919063ffffffff16565b61010084015160e0850151610f81916111bf565b610f8b919061205b565b90506000610fa18460000151856020015161125f565b90506000821315611043576000610fe38286604001518760a001518860c00151670de0b6b3a7640000610fd49190611f58565b89606001518a6080015161127c565b9150610ff190508184611305565b9050801561103d5761102a828660400151838860c00151670de0b6b3a764000061101b9190611f58565b89606001518a6080015161131a565b85518690611039908390611f58565b9052505b50611101565b6000821215611101576110558261207b565b915060006110898286604001518760c00151670de0b6b3a764000061107a9190611f58565b88606001518960800151611359565b915061109790508184611305565b905080156110e3576110d0828660400151838860c00151670de0b6b3a76400006110c19190611f58565b89606001518a608001516113e3565b855186906110df908390611f45565b9052505b6110ed8184611f58565b855186906110fc908390611f45565b905250505b6000611130856101000151670de0b6b3a764000061111f9190611f58565b606087015160e08801519190611464565b61115e866101400151670de0b6b3a764000061114c9190611f58565b60608801516101208901519190611464565b611168919061205b565b9050600081866000015161117c9190612097565b90508560a001518112156111a35760405163aeeb825d60e01b815260040160405180910390fd5b80865260a08601516111b59082611f58565b9695505050505050565b60006103c38383670de0b6b3a7640000611464565b60006103c383670de0b6b3a764000084611464565b600080670de0b6b3a76400006111fd611482565b61120791906120b7565b9050808311611217576000611221565b6112218184611f58565b91506103c3611258670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006120b7565b83906111d4565b60008061126c838561205b565b905060008112156103c357600080fd5b6000808061128a85856111d4565b9050600061129b82868c8a8d6114bd565b905060006112dc6112b4670de0b6b3a76400008a6111d4565b6112d26112cb8b6112c58b8f6111bf565b906114eb565b86906111bf565b6112c59085611f58565b90506112e8898c611f58565b6112f28b83611f58565b945094505050505b965096945050505050565b600081831161131457826103c3565b50919050565b60008061132b888888888888611542565b90925090508061134e57604051637ac17d2560e01b815260040160405180910390fd5b509695505050505050565b6000808061136785856111d4565b9050600061137882868b8a8c6114bd565b905060006113ad611391670de0b6b3a76400008a6111d4565b6112c56113a6670de0b6b3a764000087611f45565b85906111d4565b905060006113bb82886111d4565b90506113c78b82611f58565b6113d1838c611f58565b95509550505050509550959350505050565b6000806113f084846111d4565b9050600061140182858b898c6114bd565b9050611411866112c5898b611f58565b9750600061143e61142a670de0b6b3a7640000896115e3565b6112c5856114388d87611f58565b906111d4565b905061144a81866111d4565b90506114568a82611f58565b9a9950505050505050505050565b600082600019048411830215820261147b57600080fd5b5091020490565b60006114ae7f0000000000000000000000000000000000000000000000000000000000000000426120ce565b6114b89042611f58565b905090565b60006114c982846114eb565b6114e16114da856112c589896111bf565b88906111bf565b6111b59190611f45565b6000816000036115045750670de0b6b3a76400006103fd565b82600003611514575060006103fd565b816000611520856115f8565b9050818102611537670de0b6b3a7640000826120e2565b90506111b58161180b565b6000808061155085856111d4565b9050600061156182868c8a8d6114bd565b9050611571876112c58a8c611f45565b985088811015611589576000809350935050506112fa565b60006115ae6115a0670de0b6b3a76400008a6115e3565b6112c5856114388e87611f58565b90506115ba81876111d4565b9050808b11156115d1576115ce818c611f58565b94505b60019350505050965096945050505050565b60006103c383670de0b6b3a764000084611996565b600080821361161a57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361182657506000919050565b680755bf798b4a1bf1e5821261184f5760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60008260001904841183021582026119ad57600080fd5b50910281810615159190040190565b60405180610180016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b03168152602001611a4660405180606001604052806000815260200160008152602001600081525090565b815260200160008152602001600081525090565b600060208284031215611a6c57600080fd5b5035919050565b6000815180845260005b81811015611a9957602081850181015186830182015201611a7d565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006103c36020830184611a73565b80356001600160a01b038116811461032d57600080fd5b600080600060608486031215611af857600080fd5b83359250611b0860208501611acc565b9150611b1660408501611acc565b90509250925092565b60008060408385031215611b3257600080fd5b82359150611b4260208401611acc565b90509250929050565b815181526020808301519082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0808301519082015260e08083015190820152610100808301519082015261012080830151908201526101408083015190820152610160808301519082015261018091820151918101919091526101a00190565b600060208284031215611be857600080fd5b6103c382611acc565b81516001600160a01b031681526101c081016020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015260c083015160c083015260e0830151611c5960e08401826001600160a01b03169052565b50610100838101516001600160a01b03811684830152505061012083810151805184830152602081015161014085015260408101516101608501525050610140830151610180830152610160909201516101a09091015290565b60008060208385031215611cc657600080fd5b823567ffffffffffffffff80821115611cde57600080fd5b818501915085601f830112611cf257600080fd5b813581811115611d0157600080fd5b8660208260051b8501011115611d1657600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b81811015611d6057835183529284019291840191600101611d44565b50909695505050505050565b81516001600160801b0316815261014081016020830151611d9860208401826001600160801b03169052565b506040830151611dad6040840182600f0b9052565b506060830151611dc860608401826001600160801b03169052565b506080830151611de360808401826001600160801b03169052565b5060a0830151611dfe60a08401826001600160801b03169052565b5060c0830151611e1960c08401826001600160801b03169052565b5060e0830151611e3460e08401826001600160801b03169052565b506101008381015115159083015261012080840151801515828501525b505092915050565b60008060408385031215611e6c57600080fd5b611e7583611acc565b9150611b4260208401611acc565b600060208083526000845481600182811c915080831680611ea557607f831692505b8583108103611ec257634e487b7160e01b85526022600452602485fd5b878601838152602001818015611edf5760018114611ef557611f20565b60ff198616825284151560051b82019650611f20565b60008b81526020902060005b86811015611f1a57815484820152908501908901611f01565b83019750505b50949998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b808201808211156103fd576103fd611f2f565b818103818111156103fd576103fd611f2f565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600082611fa657611fa6611f81565b500490565b634e487b7160e01b600052604160045260246000fd5b81546001600160801b038082168352608091821c60208401526001840154600f81900b6040850152821c6060840152600284015480821683850152821c60a0840152600384015490811660c0840152901c60e0820152600482015460ff8082161515610100840152600882901c161515610120830152610140820190610b47565b60006020828403121561205457600080fd5b5051919050565b8181036000831280158383131683831282161715610b4757610b47611f2f565b6000600160ff1b820161209057612090611f2f565b5060000390565b8082018281126000831280158216821582161715611e5157611e51611f2f565b80820281158282048414176103fd576103fd611f2f565b6000826120dd576120dd611f81565b500690565b6000826120f1576120f1611f81565b600160ff1b82146000198414161561210b5761210b611f2f565b50059056fea26469706673582212200288073ba6c2db15c4dfab8540e68376fb37083d7d44c5295e2a1fa53d64680564736f6c6343000813003361028060405260016000553480156200001757600080fd5b5060405162006e7738038062006e778339810160408190526200003a91620003d3565b6001600160a01b038181166080908152600060a081815260c082905260408051808201825260018152603160f81b60209182015281517f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc68184015246606082015230818701528251808203909601865290920181528351939091019290922060e052845190921661010052830151839183918190849084908390819084906103e8111562000120576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200015857604051635428734d60e01b815260040160405180910390fd5b60a0810180516101205251608082015110806200018957508060a001518160800151620001869190620004bf565b15155b15620001a85760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a764000010806200021c5750670de0b6b3a764000081610120015160200151115b80620002385750670de0b6b3a764000081610120015160400151115b1562000257576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b84610140015181101562000302576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec3444909101550162000282565b5050505050505050505050620004e2565b60405161018081016001600160401b03811182821017156200034557634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200036357600080fd5b919050565b6000606082840312156200037b57600080fd5b604051606081016001600160401b0381118282101715620003ac57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b6000808284036101e0811215620003e957600080fd5b6101c080821215620003fa57600080fd5b6200040462000313565b915062000411856200034b565b82526020850151602083015260408501516040830152606085015160608301526080850151608083015260a085015160a083015260c085015160c08301526200045d60e086016200034b565b60e0830152610100620004728187016200034b565b90830152610120620004878787830162000368565b81840152506101808501516101408301526101a0850151610160830152819350620004b48186016200034b565b925050509250929050565b600082620004dd57634e487b7160e01b600052601260045260246000fd5b500690565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516166ed6200078a6000396000613795015260008181610f8a0152610ff00152600081816141b10152818161422a015281816146220152818161469301528181614d51015261511b015260008181613b3a015281816141fe0152818161435f0152818161466701526150ef015260008181614185015281816145f60152614d0d015260008181610a02015281816114a101528181611a7101528181611d4501528181611f2b015261233d015260008181610d5301528181610d9e01528181610eb201528181613ff401528181614043015281816146f80152818161473401528181614974015281816150620152615281015260008181610adb01528181610e2101528181611f8c015281816127ac015281816127d901528181612acf01528181612b1701528181613a18015281816142a40152818161494e0152614dd9015260008181610e6401528181611fce01528181612aad01528181612b38015281816139f6015281816142820152818161499a0152614db7015260008181610b5d01528181610e43015281816115af01528181611afc01528181611fad015281816123fa015281816128e401528181612a090152818161399a01528181613ac001528181613d1301528181614cd40152614e7101526000818161221e015281816122c7015261284c0152600081816112df01528181611379015281816113ec01528181612520015281816125a90152818161266e01528181612706015281816131520152818161319b0152818161327501528181613321015281816133d3015261341c0152600081816104610152611840015260006136ca0152600061368d0152600061025201526166ed6000f3fe60806040526004361061023b5760003560e01c80639032c7261161012e578063b1b4b170116100ab578063d5002f2e1161006f578063d5002f2e146108be578063e44808bc146108d3578063ed64bab2146108f3578063f6e5544914610913578063fa3fcea7146109335761023b565b8063b1b4b17014610811578063b4f8da3914610831578063c23632a71461086b578063c326a9031461088b578063ca6d38f71461089e5761023b565b8063a179403b116100f2578063a179403b14610763578063a22cb46514610776578063a30b7e3d14610796578063a77384c1146107d1578063ab033ea9146107f15761023b565b80639032c726146106ae578063907c0f92146106ce57806395530b75146106e35780639bd33498146107235780639cd241af146107435761023b565b80634ed2d6ac116101bc578063702db0eb11610180578063702db0eb146105635780637180c8ca146105975780638120a3e2146105b757806388348397146105d75780638fca1f7b146106855761023b565b80634ed2d6ac146104c35780635a1a3e7c146104e3578063680962391461050357806368c2ecb8146105235780636f8c3a5b146105435761023b565b80632787d595116102035780632787d595146103fb57806330adf81f1461041b5780633644e5151461044f5780634536ee2f146104835780634daa8b8f146104a35761023b565b806302329a291461034b57806306dae82a1461036d57806317fad7fc1461039a5780631c0f12b6146103ba5780632002b333146103da575b34801561024757600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316858560405161028a929190615d7a565b600060405180830381855af49150503d80600081146102c5576040519150601f19603f3d011682016040523d82523d6000602084013e6102ca565b606091505b509150915081156102ee57604051638bb0a34b60e01b815260040160405180910390fd5b60006102f982615d8a565b90506001600160e01b03198116636e64089360e11b1461031b57815160208301fd5b81516003198101600484019081529261033c91810160200190602401615e32565b80519650602001945050505050f35b34801561035757600080fd5b5061036b610366366004615efc565b610953565b005b61038061037b366004615f30565b61099c565b604080519283526020830191909152015b60405180910390f35b3480156103a657600080fd5b5061036b6103b5366004615fc9565b610c21565b3480156103c657600080fd5b5061036b6103d536600461605a565b610cd5565b6103ed6103e836600461609e565b610ce8565b604051908152602001610391565b34801561040757600080fd5b506103ed610416366004615efc565b610f3d565b34801561042757600080fd5b506103ed7f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b34801561045b57600080fd5b506103ed7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048f57600080fd5b5061038061049e36600461609e565b611021565b3480156104af57600080fd5b506103806104be3660046160e6565b6111f1565b3480156104cf57600080fd5b5061036b6104de3660046160ff565b611261565b3480156104ef57600080fd5b5061036b6104fe3660046160e6565b6112af565b34801561050f57600080fd5b5061036b61051e366004616145565b6112bb565b34801561052f57600080fd5b506103ed61053e3660046160e6565b611466565b34801561054f57600080fd5b506103ed61055e366004615f30565b611477565b34801561056f57600080fd5b5061036b61057e36600461617e565b6001600160801b03908116600160801b02911617600855565b3480156105a357600080fd5b5061036b6105b23660046161b1565b6116e5565b3480156105c357600080fd5b5061036b6105d23660046160e6565b61175d565b3480156105e357600080fd5b5061036b6105f23660046161fa565b805160208201516001600160801b03918216600160801b91831682021760085560408301516060840151908316908316820217600955608083015160a0840151908316908316820217600a5560c083015160e084015190831692160217600b5561010080820151600c80546101209094015161ffff1990941691151561ff00191691909117921515909102919091179055565b34801561069157600080fd5b506013546001600160801b0380821691600160801b900416610380565b3480156106ba57600080fd5b5061036b6106c93660046162c2565b611766565b3480156106da57600080fd5b506103ed6119b5565b3480156106ef57600080fd5b506107036106fe36600461633e565b6119c4565b604080519485526020850193909352918301526060820152608001610391565b34801561072f57600080fd5b5061070361073e366004616145565b6119e8565b34801561074f57600080fd5b5061036b61075e366004616370565b611a08565b610380610771366004615f30565b611a14565b34801561078257600080fd5b5061036b6107913660046161b1565b611c0d565b3480156107a257600080fd5b506107b66107b136600461633e565b611c79565b60408051938452602084019290925290820152606001610391565b3480156107dd57600080fd5b5061036b6107ec3660046160e6565b601455565b3480156107fd57600080fd5b5061036b61080c3660046163a5565b611c9a565b34801561081d57600080fd5b506103ed61082c3660046160e6565b611d0e565b34801561083d57600080fd5b5061036b61084c3660046163c0565b600980546001600160801b03928316600160801b029216919091179055565b34801561087757600080fd5b5061038061088636600461609e565b611d19565b6103ed610899366004615f30565b611ed0565b3480156108aa57600080fd5b506103ed6108b93660046160e6565b612192565b3480156108ca57600080fd5b506014546103ed565b3480156108df57600080fd5b5061036b6108ee3660046163db565b61219d565b3480156108ff57600080fd5b5061036b61090e3660046160e6565b6121ed565b34801561091f57600080fd5b5061038061092e366004616432565b6122f7565b34801561093f57600080fd5b506103ed61094e366004615f30565b612313565b336000908152600f602052604090205460ff16610982576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146109ca5760405162461bcd60e51b81526004016109c19061645e565b60405180910390fd5b6002600055600c54610100900460ff16156109f8576040516313d0ff5960e31b815260040160405180910390fd5b610a0061251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015610a415760405163211ddda360e11b815260040160405180910390fd5b600080610a4e898661258b565b9150915086811015610a73576040516342af972b60e01b815260040160405180910390fd5b6000610a7d612845565b9050610a89818361287b565b506000806000610a998686612a86565b600854919a50929550909350909150610ac3908390600160801b90046001600160801b0316616498565b610b0084610acf612bb7565b610ad991906164ab565b7f000000000000000000000000000000000000000000000000000000000000000090612bd8565b1115610b1f5760405163512095c760e01b815260040160405180910390fd5b868c1115610b405760405163c972651760e01b815260040160405180910390fd5b8060106000828254610b5291906164ab565b90915550610b8290507f0000000000000000000000000000000000000000000000000000000000000000856164ab565b9750610b9283888488888d612bf4565b6000610b9f60018a612dee565b9050610bac818c8a612e23565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d604051610c00939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b0386161580610c3e57506001600160a01b038516155b15610c5c5760405163f0dd15fd60e01b815260040160405180910390fd5b828114610c7c5760405163174861a760e31b815260040160405180910390fd5b60005b83811015610ccc57610cc4858583818110610c9c57610c9c6164be565b905060200201358888868686818110610cb757610cb76164be565b9050602002013533612ecc565b600101610c7f565b50505050505050565b610ce28484848433612ecc565b50505050565b60008054600114610d0b5760405162461bcd60e51b81526004016109c19061645e565b6002600055610d1861251e565b600c5460ff1615610d3c57604051637983c05160e01b815260040160405180910390fd5b600080610d49878561258b565b9092509050610d797f000000000000000000000000000000000000000000000000000000000000000060026164d4565b821015610d9957604051632afb507160e21b815260040160405180910390fd5b610dc47f000000000000000000000000000000000000000000000000000000000000000060026164d4565b610dce9083616498565b9250610de1610ddb612845565b8261287b565b50600c805460ff19166001179055610df88261308d565b600880546001600160801b0319166001600160801b0392909216919091179055610e8d610e88837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006130b7565b61308d565b600880546001600160801b03928316600160801b029216919091179055610ed66000807f0000000000000000000000000000000000000000000000000000000000000000612e23565b610ee260008685612e23565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610f605760405162461bcd60e51b81526004016109c19061645e565b60026000908155338152600f602052604090205460ff16158015610fad5750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610fc457506011546001600160a01b03163314155b15610fe1576040516282b42960e81b815260040160405180910390fd5b601080546000909155611015817f000000000000000000000000000000000000000000000000000000000000000085613121565b60016000559392505050565b6000806000546001146110465760405162461bcd60e51b81526004016109c19061645e565b600260009081556110556133b8565b9050611062610ddb612845565b5061106c816134b7565b600d548792506001600160801b03168083111561109057806001600160801b031692505b826000036110a6576000809350935050506111e1565b6110b5600360f81b3385613591565b600d546001600160801b03600160801b9091048116906000906110dd90869084908616613631565b90506110e88561308d565b6110f290846164eb565b600d80546001600160801b0319166001600160801b039290921691909117905561111b8161308d565b600d805460109061113d908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061116c818989613121565b9550856111798a87612bd8565b11156111985760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b60008060128381548110611207576112076164be565b9060005260206000200160000160049054906101000a90046001600160e01b03166001600160e01b031660128481548110611244576112446164be565b600091825260209091200154909463ffffffff9091169350915050565b8361126b8161364f565b6001600160a01b0316336001600160a01b03161461129c57604051632aab8bd360e01b815260040160405180910390fd5b6112a88585858561370c565b5050505050565b6112b881613779565b50565b6040516370a0823160e01b8152306004820152600090611351906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa158015611326573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061134a9190616512565b83856138d3565b91505060008113156113d9576040516340c10f1960e01b8152306004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906340c10f1990604401600060405180830381600087803b1580156113c557600080fd5b505af1158015610ccc573d6000803e3d6000fd5b6000811215611461576001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016639dc29fac3061141b8461652b565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b1580156113c557600080fd5b505050565b60006114718261396d565b92915050565b6000805460011461149a5760405162461bcd60e51b81526004016109c19061645e565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156114e05760405163211ddda360e11b815260040160405180910390fd5b60006114ea6133b8565b90506114f6878261287b565b5061150c611505600289612dee565b3388613591565b6000806000806000806115208c888f6139be565b600854959b5093995091975095509350915061154d908790600160801b90046001600160801b0316616498565b61155984610acf612bb7565b11156115785760405163512095c760e01b815260040160405180910390fd5b8b8d884282111561163a57836010600082825461159591906164ab565b909155506115a89050838a898886613b92565b60006115d47f000000000000000000000000000000000000000000000000000000000000000084616498565b6000818152600e6020526040812054919250600160801b909104600f0b906116079086908a908e908d9089908990613d0c565b6000828152600e602052604090205461162e90600f83810b91600160801b9004900b613eb4565b6116378c6134b7565b50505b6000611647898f8f613121565b90508e81101561166a5760405163c972651760e01b815260040160405180910390fd5b611675600284612dee565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f8584886040516116c3939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b0316331461170f576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b6112b881613fdb565b834211156117875760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166117ae5760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa1580156118da573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b03161461191857604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b0389166000908152600760205260408120805490919061193e90616547565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b60006119bf612845565b905090565b6000806000806119d68888888861415d565b929b919a509850909650945050505050565b6000806000806119f88686612a86565b9299919850965090945092505050565b6114618383833361370c565b600080600054600114611a395760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611a67576040516313d0ff5960e31b815260040160405180910390fd5b611a6f61251e565b7f0000000000000000000000000000000000000000000000000000000000000000871015611ab05760405163211ddda360e11b815260040160405180910390fd5b6000611aba6133b8565b905085811015611add576040516342af972b60e01b815260040160405180910390fd5b6000611ae7612845565b90506000611af5828461287b565b9050611b217f0000000000000000000000000000000000000000000000000000000000000000836164ab565b9450600080611b318c868561425c565b6010805493995091945092508291600090611b4d9084906164ab565b909155505050848a1015611b745760405163c972651760e01b815260040160405180910390fd5b611b7e858861258b565b5050611b8c8b828689614390565b6000611b99600288612dee565b9050611ba6818a8e612e23565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000806000611c8a878787876145ce565b9199909850909650945050505050565b6011546001600160a01b03163314611cc4576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000611471826146cf565b600080600054600114611d3e5760405162461bcd60e51b81526004016109c19061645e565b60026000557f0000000000000000000000000000000000000000000000000000000000000000861015611d845760405163211ddda360e11b815260040160405180910390fd5b6000611d8e6133b8565b9050611d9b610ddb612845565b50611da5816134b7565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611e00916001600160801b0390911690616498565b90506000611e0e82846164ab565b9050611e1c6000338c613591565b6000611e2b8b86848787614778565b96509050611e3e600360f81b8a88612e23565b611e49818a8a613121565b9650868a1115611e6c5760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b60008054600114611ef35760405162461bcd60e51b81526004016109c19061645e565b6002600055600c54610100900460ff1615611f21576040516313d0ff5960e31b815260040160405180910390fd5b611f2961251e565b7f0000000000000000000000000000000000000000000000000000000000000000861015611f6a5760405163211ddda360e11b815260040160405180910390fd5b6000611ff2611f77612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614876565b90508581108061200157508481115b1561201f57604051633b61151160e11b815260040160405180910390fd5b60008061202c898661258b565b9150915061203b610ddb612845565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612087916001600160801b0390911690616498565b6000808052600260205260008051602061669883398151915254919250906120b09083906164ab565b90506000806120be856148b1565b905060006120cb82614a17565b90506120d687613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015261210882614a17565b925061212084826121198187616498565b9190613631565b9850505061213060008a89612e23565b612139846134b7565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b600061147182614c89565b846121a78161364f565b6001600160a01b0316336001600160a01b0316146121d857604051632aab8bd360e01b815260040160405180910390fd5b6121e58686868686612ecc565b505050505050565b6000818152600e60205260409020546001600160801b03161561220d5750565b6000612217612845565b90506122437f000000000000000000000000000000000000000000000000000000000000000083616576565b15158061224f57508181105b1561226d5760405163ecd29e8160e01b815260040160405180910390fd5b80820361228557611461816122806133b8565b61287b565b815b6000818152600e60205260409020546001600160801b03168282036122b1576122ae6133b8565b90505b80156122c1576112a8848261287b565b506122ec7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b9050612287565b5050565b600080612305858585614cff565b90925090505b935093915050565b600080546001146123365760405162461bcd60e51b81526004016109c19061645e565b60026000557f000000000000000000000000000000000000000000000000000000000000000085101561237c5760405163211ddda360e11b815260040160405180910390fd5b60006123866133b8565b9050612392878261287b565b506123a1611505600189612dee565b6000806000806000806123b58c888f614d7f565b95509550955095509550955060008d90508d42101561247e5781601060008282546123e091906164ab565b909155506123f390508d88878685614ef6565b600061241f7f000000000000000000000000000000000000000000000000000000000000000083616498565b6000818152600e6020526040902054909150600160801b9004600f0b61244b8f878b8a878f6001613d0c565b6000828152600e602052604090205461247290600f83810b91600160801b9004900b613eb4565b61247b8a6134b7565b50505b600061248b878d8d613121565b9050808d11156124ae5760405163c972651760e01b815260040160405180910390fd5b8d6124ba600184612dee565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1480159061256b5750600034115b1561258957604051631574f9f360e01b815260040160405180910390fd5b565b60008080600173eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03160161265957479150853410156125fa576040516312171d8360e31b815260040160405180910390fd5b85341115612654573361260d8734616498565b604051600081818185875af1925050503d8060008114612649576040519150601f19603f3d011682016040523d82523d6000602084013e61264e565b606091505b50909150505b61277e565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156126bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126e19190616512565b6040516323b872dd60e01b8152336004820152306024820152604481018890529092507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd906064016020604051808303816000875af1158015612757573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061277b919061658a565b90505b8061279c576040516312171d8360e31b815260040160405180910390fd5b601454600003612802576127d0867f00000000000000000000000000000000000000000000000000000000000000006150c3565b601481905593507f0000000000000000000000000000000000000000000000000000000000000000925061283e915050565b601454600090612813908885613631565b9050806014600082825461282791906164ab565b909155508190506128366133b8565b945094505050505b9250929050565b60006128717f000000000000000000000000000000000000000000000000000000000000000042616576565b6119bf9042616498565b6000828152600e6020526040812080546001600160801b03161515806128a057504284115b156128b657546001600160801b03169050611471565b6128bf8361308d565b81546001600160801b0319166001600160801b03919091161781556000600e816129097f000000000000000000000000000000000000000000000000000000000000000088616498565b815260208101919091526040016000908120546001600160801b031691506002816129348289612dee565b81526020019081526020016000205490506000808211156129905760008061295f84898760006150d8565b91509150806010600082825461297591906164ab565b90915550612989905084600084808d613b92565b6001925050505b6000600260006129a160018b612dee565b815260200190815260200160002054905060008111156129fc576000806129cb838a8860016150d8565b9150915080601060008282546129e191906164ab565b909155506129f5905083600084808e614ef6565b6001935050505b8115612a7a576000612a2e7f00000000000000000000000000000000000000000000000000000000000000008a616498565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612a6e928492919004900b613eb4565b612a77896134b7565b50505b50949695505050505050565b600080600080612af3612a97612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000006151a6565b92506000612b5c612b02612bb7565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000006151d2565b9050612b6781613779565b600080612b7589848a614cff565b9092509050612b848287616498565b9450612b9081866164ab565b9550612b9d81848a613631565b9350612ba9848a616498565b965050505092959194509250565b6008546009546000916119bf916001600160801b0390911690600f0b6151e3565b6000612bed8383670de0b6b3a7640000613631565b9392505050565b600a546001600160801b0316612c2f610e8882612c1985670de0b6b3a76400006164d4565b600b546001600160801b031691908a6001615200565b600b80546001600160801b0319166001600160801b0392909216919091179055612c588761308d565b60088054600090612c739084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612ca08561308d565b60088054601090612cc2908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550612cef8661308d565b612cf990826165a7565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b90612d55612d408b89612bd8565b612d4b8b60026164d4565b610e889190616498565b835490915081908490601090612d76908490600160801b9004600f0b6165c7565b82546001600160801b039182166101009390930a9283029190920219909116179055508254612db390600f84810b91600160801b9004900b613eb4565b612dbc8761527a565b612dd9576040516318846de960e01b815260040160405180910390fd5b612de2876134b7565b50505050505050505050565b60006001600160f81b03821115612e185760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612e559084906164ab565b909155505060008381526002602052604081208054839290612e789084906164ab565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b0384161580612ee957506001600160a01b038316155b15612f075760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612fcb576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff16612fcb5760008581526004602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114612fc95760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612fc3908490616498565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612ffd908490616498565b909155505060008581526001602090815260408083206001600160a01b0387168452909152812080548492906130349084906164ab565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b82106130b357604051630f0af95160e11b815260040160405180910390fd5b5090565b6000806130c8846301e133806150c3565b90506131146131046130e2670de0b6b3a7640000866152ec565b6130ec8885612bd8565b6130fe90670de0b6b3a76400006164ab565b90615301565b61310e888a612bd8565b90612bd8565b9150505b95945050505050565b600060145484116131325783613136565b6014545b9350600073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613186575047613211565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa1580156131ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061320e9190616512565b90505b601454600003613222576000613241565b61324161323a601454836150c390919063ffffffff16565b8690612bd8565b915084601460008282546132559190616498565b909155506000905073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316016132fb576040516001600160a01b038616908490600081818185875af1925050503d80600081146132eb576040519150601f19603f3d011682016040523d82523d6000602084013e6132f0565b606091505b505080915050613391565b60405163a9059cbb60e01b81526001600160a01b038681166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af115801561336a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061338e919061658a565b90505b806133af576040516312171d8360e31b815260040160405180910390fd5b50509392505050565b60008073eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed197f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031601613407575047613492565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa15801561346b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061348f9190616512565b90505b6014546000036134a35760006134b1565b6014546134b19082906150c3565b91505090565b600260205260008051602061669883398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091613512916001600160801b0390911690616498565b9050600061352082846164ab565b90506000613535613530866148b1565b614a17565b90506000613544858385613631565b9050600080613552886146cf565b905082811115613569576135668382616498565b91505b6000821180613576575083155b156135875761358782858789615358565b5050505050505050565b60008381526001602090815260408083206001600160a01b0386168452909152812080548392906135c3908490616498565b9091555050600083815260026020526040812080548392906135e6908490616498565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612ebf565b600082600019048411830215820261364857600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b6013546001600160801b03600160801b820481169116426137ba7f0000000000000000000000000000000000000000000000000000000000000000846164ab565b11156137c557505050565b6000601282815481106137da576137da6164be565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b03169061380e8342616498565b6012549091508782028301906000906138288860016164ab565b6138329190616576565b905060405180604001604052804263ffffffff168152602001836001600160e01b03168152506012828154811061386b5761386b6164be565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b600080806138e5846301e133806150c3565b9050600061390482600088126138fb578761310e565b61310e8861652b565b905060008613156139375761392261391b82615441565b8890612bd8565b935061392e8785616498565b9250505061230b565b600086121561395f5761395361394c82615441565b88906150c3565b935061392e87856165f4565b509495600095509350505050565b600080613978612845565b9050808311613988576000613992565b6139928184616498565b9150612bed827f00000000000000000000000000000000000000000000000000000000000000006150c3565b60008060008060008060006139d28861396d565b9050613a3c6139df612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006155cc565b909850955093506000613a50612b02612bb7565b9050613a5b81613779565b8a8a6000808080613a6e8689898861415d565b93509350935093508082613a8291906164ab565b9850613a8e8285616498565b613a98908c6164ab565b9a50613aa483856164ab565b613aae908d6164ab565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a613aea9190616498565b815260208101919091526040016000908120546001600160801b03169150428911613b2c576000898152600e60205260409020546001600160801b0316613b2e565b895b9050613b5e8b8784848e7f000000000000000000000000000000000000000000000000000000000000000061563c565b9650613b6a8387616498565b9550613b7c878787868686600061568e565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613bdb610e8882613bbe85670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b031691908a6000615200565b600b80546001600160801b03928316600160801b029216919091179055613c018661308d565b613c0b90826164eb565b600a80546001600160801b03928316600160801b02921691909117905550613c328361308d565b60088054600090613c4d9084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550613c7a82615709565b60098054600090613c8f908490600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613cbf8461308d565b60088054601090613ce1908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b6000613d387f000000000000000000000000000000000000000000000000000000000000000085616498565b9050600060026000613d4b600188612dee565b8152602001908152602001600020549050600060026000613d6d600289612dee565b8152602001908152602001600020549050816000148015613d8c575080155b15613db1576000838152600e6020526040902080546001600160801b03169055612de2565b6000613df58b613dc18c89612bd8565b613dcc9060026164d4565b8b613dd78c8b612bd8565b613de191906164ab565b613deb9190616498565b610e8891906164ab565b90508415613e54576000848152600e602052604090208054829190601090613e28908490600160801b9004600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550613ea7565b6000848152600e602052604090208054829190601090613e7f908490600160801b9004600f0b6165c7565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b8082138015613ec4575060008212155b15613f57576000613ed58282615747565b613edf90846165f4565b600954909150613f0c90613f07908390600160801b90046001600160801b0316600f0b61575d565b615709565b60098054601090613f2e908490600160801b90046001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b818113156122f35760008212613fcd57613f7082615709565b613f7982615709565b613f839190616614565b60098054601090613fa5908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b613f83613f07826000615747565b80600003613fe65750565b6008546001600160801b03167f00000000000000000000000000000000000000000000000000000000000000008110156140335760405163585fe6df60e11b815260040160405180910390fd5b600061403f8383616641565b90507f00000000000000000000000000000000000000000000000000000000000000008112156140825760405163585fe6df60e11b815260040160405180910390fd5b61408b8161308d565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b8181126140cd576140c6838286613631565b91506140ed565b6140e16140d98261652b565b849086613631565b6140ea9061652b565b91505b6140f682615709565b600980546001600160801b0319166001600160801b0392831617905560085461413991610e8891600160801b90041661412f87856151e3565b61211987876151e3565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600080808061417486670de0b6b3a7640000616498565b93506141a987866121198b61310e897f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506141d5847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915060006141f66141ee89670de0b6b3a7640000616498565b8a9088613631565b9050614222817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b935061424e847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b915050945094509450949050565b60008060006142c861426c612bb7565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f000000000000000000000000000000000000000000000000000000000000000061576c565b9150856142d58387612bd8565b11156142f45760405163512095c760e01b815260040160405180910390fd5b6000614301612b02612bb7565b905061430c81613779565b600061432288670de0b6b3a7640000848a6145ce565b945090915061433390508382616498565b61433d9085616498565b93506143838761310e8a6143518789616498565b8a61435c8d8261578d565b8d7f000000000000000000000000000000000000000000000000000000000000000061563c565b9450505093509350939050565b600a546143da90610e8890600160801b90046001600160801b03166143bd84670de0b6b3a76400006164d4565b600b54600160801b90046001600160801b03169190886001615200565b600b80546001600160801b03928316600160801b02921691909117905560006144028461308d565b60085461441891906001600160801b03166164eb565b600880546001600160801b0319166001600160801b038316179055905061443e8561308d565b60088054601090614460908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061448d8561308d565b600a80546010906144af908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506144fe5760405163585fe6df60e11b815260040160405180910390fd5b6000614508612845565b6000818152600e6020526040902054909150600160801b9004600f0b61452d8761308d565b6000838152600e602052604090208054601090614555908490600160801b9004600f0b616614565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461459f90600f83810b91600160801b9004900b613eb4565b6145a88561527a565b6145c5576040516318846de960e01b815260040160405180910390fd5b610ccc856134b7565b60008080806145e586670de0b6b3a7640000616498565b905061461a87866121198b61310e867f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9350614646847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9150600061465f6141ee89670de0b6b3a7640000616498565b905061468b817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b93506146b7847f0000000000000000000000000000000000000000000000000000000000000000612bd8565b6146c190846164ab565b925050509450945094915050565b60095460009081906146f190600160801b90046001600160801b0316846150c3565b905061471d7f0000000000000000000000000000000000000000000000000000000000000000826164ab565b6008546001600160801b03161115614772576008547f0000000000000000000000000000000000000000000000000000000000000000906147689083906001600160801b0316616498565b612bed9190616498565b50919050565b6000806000614786876148b1565b9050600061479382614a17565b90506147a56147a06133b8565b6146cf565b93506147b2848a88613631565b93506147c56147c08561652b565b613fdb565b6008546001600160801b038082168452600954600f0b6020850152600160801b90910416604083015260006147f983614a17565b90506000614808898385613631565b90506148148b8a6165f4565b61481e90826165f4565b9050600081121561486757600061483f6148378361652b565b85908c613631565b905061484b8188616498565b965061485681613fdb565b61486181898d61579c565b60009150505b93505050509550959350505050565b600080614885878787866151d2565b905061311461489982866301e133806157e1565b6148ab83670de0b6b3a7640000616498565b906150c3565b61490e60405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b5490916101008301916149dd9116614c89565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192614a0f92900416614c89565b905292915050565b600080614a37836101400151846101200151612bd890919063ffffffff16565b61010084015160e0850151614a4b91612bd8565b614a5591906165f4565b90506000614a6b846000015185602001516151e3565b90506000821315614b0d576000614aad8286604001518760a001518860c00151670de0b6b3a7640000614a9e9190616498565b89606001518a60800151615807565b9150614abb90508184615883565b90508015614b0757614af4828660400151838860c00151670de0b6b3a7640000614ae59190616498565b89606001518a60800151615892565b85518690614b03908390616498565b9052505b50614bcb565b6000821215614bcb57614b1f8261652b565b91506000614b538286604001518760c00151670de0b6b3a7640000614b449190616498565b886060015189608001516158c6565b9150614b6190508184615883565b90508015614bad57614b9a828660400151838860c00151670de0b6b3a7640000614b8b9190616498565b89606001518a60800151615950565b85518690614ba99083906164ab565b9052505b614bb78184616498565b85518690614bc69083906164ab565b905250505b6000614bfa856101000151670de0b6b3a7640000614be99190616498565b606087015160e08801519190613631565b614c28866101400151670de0b6b3a7640000614c169190616498565b60608801516101208901519190613631565b614c3291906165f4565b90506000818660000151614c469190616641565b90508560a00151811215614c6d5760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151614c7f9082616498565b9695505050505050565b600080670de0b6b3a7640000614c9d612845565b614ca791906164d4565b9050808311614cb7576000614cc1565b614cc18184616498565b9150612bed614cf8670de0b6b3a76400007f00000000000000000000000000000000000000000000000000000000000000006164d4565b83906150c3565b600080614d498561310e85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000614d3f818c6150c3565b61310e9190616498565b9150614d75827f0000000000000000000000000000000000000000000000000000000000000000612bd8565b9050935093915050565b6000806000806000806000614d938861396d565b9050614dfd614da0612bb7565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f00000000000000000000000000000000000000000000000000000000000000006159cb565b909850965093506000614e11612b02612bb7565b9050614e1c81613779565b600080614e2b8d85858f6145ce565b96509092509050614e3c8288616498565b9650614e4881836164ab565b614e52908a616498565b9850614e5e858a6164ab565b975050505050614ee285858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e614e9b9190616498565b81526020810191909152604001600020546001600160801b0316428d11614ed95760008d8152600e60205260409020546001600160801b0316614edb565b8d5b600161568e565b999d939c50919a5098509695509350505050565b600a546001600160801b0316614f31610e8882614f1b85670de0b6b3a76400006164d4565b600b546001600160801b031691908a6000615200565b600b80546001600160801b0319166001600160801b0392909216919091179055614f5a8661308d565b614f6490826164eb565b600a80546001600160801b0319166001600160801b039290921691909117905550614f8e8361308d565b60088054600090614fa99084906001600160801b03166164eb565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614fd682615709565b60098054600090614feb908490600f0b616614565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061501b8461308d565b6008805460109061503d908490600160801b90046001600160801b03166165a7565b82546101009290920a6001600160801b038181021990931691831602179091556008547f00000000000000000000000000000000000000000000000000000000000000009116109050806150a55750600954600854600f9190910b6001600160801b03909116125b156112a85760405163585fe6df60e11b815260040160405180910390fd5b6000612bed83670de0b6b3a764000084613631565b6000806150e586866150c3565b91506000615113837f0000000000000000000000000000000000000000000000000000000000000000612bd8565b905061513f817f0000000000000000000000000000000000000000000000000000000000000000612bd8565b91508315615162576151518282616498565b61515b9084616498565b9250615179565b61516c8282616498565b61517690846164ab565b92505b8486101561519c5761518c838787613631565b9250615199828787613631565b91505b5094509492505050565b60006151c78787876151c088670de0b6b3a7640000616498565b8787615a17565b979650505050505050565b6000613118826130fe858888613631565b6000806151f083856165f4565b90506000811215612bed57600080fd5b600081156152405761523961521584876164ab565b61521f8587612bd8565b615229888a612bd8565b61523391906164ab565b906152ec565b9050613118565b82850361524f57506000613118565b614c7f61525c8487616498565b6152668587612bd8565b615270888a612bd8565b6152339190616498565b60006152a67f000000000000000000000000000000000000000000000000000000000000000083612bd8565b6009546008546152e4916000916001600160801b03600160801b9092048216600f0b916152d4911687612bd8565b6152de91906165f4565b90615747565b121592915050565b6000612bed83670de0b6b3a7640000846157e1565b60008160000361531a5750670de0b6b3a7640000611471565b8260000361532a57506000611471565b81600061533685615a8a565b905081810261534d670de0b6b3a764000082616669565b9050614c7f81615441565b60008084116153675782615372565b615372838686613631565b9050806000036153825750610ce2565b80858382111561539d5783915061539a878385613631565b90505b6153a68261308d565b600d80546000906153c19084906001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506153ee8161308d565b600d8054601090615410908490600160801b90046001600160801b03166165a7565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ccc816147c09061652b565b6000680248ce36a70cb26b3e19821361545c57506000919050565b680755bf798b4a1bf1e582126154855760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b600080806155ed6155e588670de0b6b3a7640000616498565b899087613631565b90506155f98888612bd8565b9150811561562f576156208a8a846156198a670de0b6b3a7640000616498565b8989615950565b925061562c83826164ab565b90505b9750975097945050505050565b6000806156558561564d8887615c9d565b8a9190613631565b9050615662888486613631565b61566c90826164ab565b905086811115615683576156808782616498565b91505b509695505050505050565b600080600080600080888810156156eb5786156156b3576156b08d898b613631565b9c505b6156be8c898b613631565b9b506156ca8b8d6165f4565b90506156d78b898b613631565b9a506156e48a898b613631565b99506156f8565b6156f58b8d6165f4565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b0319821280159061572a575060016001607f1b038213155b6130b35760405163a5353be560e01b815260040160405180910390fd5b60008183136157565781612bed565b5090919050565b60008183136147725782612bed565b60006151c787878761578688670de0b6b3a7640000616498565b8787615892565b60008183116157565781612bed565b60006157aa613530836148b1565b6000808052600260205260008051602061669883398151915254919250906157d39085906164ab565b90506112a885838387615358565b60008260001904841183021582026157f857600080fd5b50910281810615159190040190565b6000808061581585856150c3565b9050600061582682868c8a8d615cb2565b9050600061585a61583f670de0b6b3a76400008a6150c3565b61585061323a8b6130fe8b8f612bd8565b6130fe9085616498565b9050615866898c616498565b6158708b83616498565b945094505050505b965096945050505050565b60008183116147725782612bed565b6000806158a3888888888888615cd9565b90925090508061568357604051637ac17d2560e01b815260040160405180910390fd5b600080806158d485856150c3565b905060006158e582868b8a8c615cb2565b9050600061591a6158fe670de0b6b3a76400008a6150c3565b6130fe615913670de0b6b3a7640000876164ab565b85906150c3565b9050600061592882886150c3565b90506159348b82616498565b61593e838c616498565b95509550505050509550959350505050565b60008061595d84846150c3565b9050600061596e82858b898c615cb2565b905061597e866130fe898b616498565b975060006159a5615997670de0b6b3a7640000896152ec565b6130fe856148ab8d87616498565b90506159b181866150c3565b90506159bd8a82616498565b9a9950505050505050505050565b600080806159e46155e588670de0b6b3a7640000616498565b9050861561562f576159f68888612bd8565b91506156208a8a84615a108a670de0b6b3a7640000616498565b8989615892565b600080615a2484846150c3565b90506000615a3582858b898c615cb2565b9050615a4f866130fe615a488a8d6164ab565b8790612bd8565b9850615a5b828a612bd8565b98506000615a7e615a74670de0b6b3a7640000896152ec565b6130fe8c85616498565b90506159bd818a616498565b6000808213615aac57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000612bed8383670de0b6b3a76400006157e1565b6000615cbe8284615301565b615ccf61391b856130fe8989612bd8565b614c7f91906164ab565b60008080615ce785856150c3565b90506000615cf882868c8a8d615cb2565b9050615d08876130fe8a8c6164ab565b985088811015615d2057600080935093505050615878565b6000615d45615d37670de0b6b3a76400008a6152ec565b6130fe856148ab8e87616498565b9050615d5181876150c3565b9050808b1115615d6857615d65818c616498565b94505b60019350505050965096945050505050565b8183823760009101908152919050565b805160208201516001600160e01b03198082169291906004831015615db95780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715615dfb57615dfb615dc1565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715615e2a57615e2a615dc1565b604052919050565b60006020808385031215615e4557600080fd5b825167ffffffffffffffff80821115615e5d57600080fd5b818501915085601f830112615e7157600080fd5b815181811115615e8357615e83615dc1565b615e95601f8201601f19168501615e01565b91508082528684828501011115615eab57600080fd5b60005b81811015615ec9578381018501518382018601528401615eae565b50600090820190930192909252509392505050565b80151581146112b857600080fd5b8035615ef781615ede565b919050565b600060208284031215615f0e57600080fd5b8135612bed81615ede565b80356001600160a01b0381168114615ef757600080fd5b600080600080600060a08688031215615f4857600080fd5b853594506020860135935060408601359250615f6660608701615f19565b91506080860135615f7681615ede565b809150509295509295909350565b60008083601f840112615f9657600080fd5b50813567ffffffffffffffff811115615fae57600080fd5b6020830191508360208260051b850101111561283e57600080fd5b60008060008060008060808789031215615fe257600080fd5b615feb87615f19565b9550615ff960208801615f19565b9450604087013567ffffffffffffffff8082111561601657600080fd5b6160228a838b01615f84565b9096509450606089013591508082111561603b57600080fd5b5061604889828a01615f84565b979a9699509497509295939492505050565b6000806000806080858703121561607057600080fd5b8435935061608060208601615f19565b925061608e60408601615f19565b9396929550929360600135925050565b600080600080608085870312156160b457600080fd5b84359350602085013592506160cb60408601615f19565b915060608501356160db81615ede565b939692955090935050565b6000602082840312156160f857600080fd5b5035919050565b6000806000806080858703121561611557600080fd5b8435935061612560208601615f19565b92506040850135915061613a60608601615f19565b905092959194509250565b6000806040838503121561615857600080fd5b50508035926020909101359150565b80356001600160801b0381168114615ef757600080fd5b6000806040838503121561619157600080fd5b61619a83616167565b91506161a860208401616167565b90509250929050565b600080604083850312156161c457600080fd5b6161cd83615f19565b915060208301356161dd81615ede565b809150509250929050565b8035600f81900b8114615ef757600080fd5b6000610140828403121561620d57600080fd5b616215615dd7565b61621e83616167565b815261622c60208401616167565b602082015261623d604084016161e8565b604082015261624e60608401616167565b606082015261625f60808401616167565b608082015261627060a08401616167565b60a082015261628160c08401616167565b60c082015261629260e08401616167565b60e08201526101006162a5818501615eec565b908201526101206162b7848201615eec565b908201529392505050565b600080600080600080600060e0888a0312156162dd57600080fd5b6162e688615f19565b96506162f460208901615f19565b9550604088013561630481615ede565b945060608801359350608088013560ff8116811461632157600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806000806080858703121561635457600080fd5b5050823594602084013594506040840135936060013592509050565b60008060006060848603121561638557600080fd5b8335925061639560208501615f19565b9150604084013590509250925092565b6000602082840312156163b757600080fd5b612bed82615f19565b6000602082840312156163d257600080fd5b612bed82616167565b600080600080600060a086880312156163f357600080fd5b8535945061640360208701615f19565b935061641160408701615f19565b92506060860135915061642660808701615f19565b90509295509295909350565b60008060006060848603121561644757600080fd5b505081359360208301359350604090920135919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561147157611471616482565b8082018082111561147157611471616482565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761147157611471616482565b6001600160801b0382811682821603908082111561650b5761650b616482565b5092915050565b60006020828403121561652457600080fd5b5051919050565b6000600160ff1b820161654057616540616482565b5060000390565b60006001820161655957616559616482565b5060010190565b634e487b7160e01b600052601260045260246000fd5b60008261658557616585616560565b500690565b60006020828403121561659c57600080fd5b8151612bed81615ede565b6001600160801b0381811683821601908082111561650b5761650b616482565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561147157611471616482565b818103600083128015838313168383128216171561650b5761650b616482565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561147157611471616482565b808201828112600083128015821682158216171561666157616661616482565b505092915050565b60008261667857616678616560565b600160ff1b82146000198414161561669257616692616482565b50059056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba26469706673582212205c6935797a2bd1e3d6a854cb0b8641b88a38d76ff0333efa7578030e63b949dd64736f6c6343000813003341304facd9323d75b11bcdd609cb38effffdb05710f7caf0e9b16c6d9d709f500000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d280f4446b28a1372417dda658d30b95b2992b12ac9c7f378535f29a97acf35835f74617267657456616c75652073686f756c64206265206c657373207468616e205f76616c75656578706563746564207570706572426f756e6420746f206d61746368205f74617267657456616c75656578706563746564206c6f776572426f756e6420746f206d61746368205f74617267657456616c7565885cb69240a935d632d79c317109709ecfa91a80626ff3989d68f67f5b1dd12db2de2fbe801a0df6c0cbddfd448ba3c41d48a040ca35c56c8196ef0fcae721a85f74617267657456616c75652073686f756c642062652067726561746572207468616e206f7220657175616c20746f205f76616c7565a2646970667358221220fd6d12cdaf52ee9bb670ab3f3a93139845d7dd2818d4c23c1a0a7f835e7f6dcc64736f6c63430008130033",
    sourceMap:
      "248:6688:140:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1767:1696:162;;;:::i;:::-;;2545:198:159;;;;;;:::i;:::-;;:::i;:::-;;;845:25:165;;;833:2;818:18;2545:198:159;;;;;;;;2170:134:57;;;:::i;:::-;;;;;;;:::i;2749:417:159:-;;;;;;:::i;:::-;;:::i;2939:133:57:-;;;:::i;2640:141::-;;;:::i;2321:218:159:-;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;4006:32:165;;;3988:51;;3976:2;3961:18;2321:218:159;3842:203:165;2456:178:57;;;:::i;:::-;;;;;;;:::i;790:1680:140:-;;;:::i;3621:1445::-;;;:::i;2310:140:57:-;;;:::i;:::-;;;;;;;:::i;5072:1862:140:-;;;:::i;2787:146:57:-;;;:::i;296:208:140:-;;;:::i;3830:2306:159:-;;;;;;:::i;:::-;;:::i;1875:141:57:-;;;:::i;1819:584:50:-;;;:::i;:::-;;;7448:14:165;;7441:22;7423:41;;7411:2;7396:18;1819:584:50;7283:187:165;510:274:140;;;:::i;2022:142:57:-;;;:::i;2476:1139:140:-;;;:::i;1572:26:50:-;;;;;;;;;1767:1696:162;1818:13;:11;:13::i;:::-;1855:5;;1841:20;;-1:-1:-1;;;1841:20:162;;-1:-1:-1;;;;;1855:5:162;;;1841:20;;;3988:51:165;-1:-1:-1;;;;;;;;;;;1841:13:162;;;3961:18:165;;1841:20:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1957:2;1969:1;1973:5;1923:56;;;;;:::i;:::-;7863:3:165;7845:22;;;7904:1;7883:19;;;7876:30;;;-1:-1:-1;;;7937:3:165;7922:19;;7915:35;7988:3;7981:4;7966:20;;7959:33;;;8008:19;;8001:30;-1:-1:-1;;;8062:3:165;8047:19;;8040:35;8159:4;8147:17;;;8142:2;8127:18;;8120:45;-1:-1:-1;;;;;8201:32:165;;;-1:-1:-1;8181:18:165;;8174:60;8278:14;8271:22;-1:-1:-1;8250:19:165;;8243:51;8107:3;8092:19;1923:56:162;;;;;;;;;;;;;;;;;;;;;;;1911:9;;:68;;;;;-1:-1:-1;;;;;1911:68:162;;;;;-1:-1:-1;;;;;1911:68:162;;;;;;1989:28;2020:98;;;;;;;;2058:1;2020:98;;;;2079:1;2020:98;;;;2106:1;2020:98;;;1989:129;;2163:11;2177:7;2163:21;;2194:36;2233:603;;;;;;;;2296:9;;;;;;;;;-1:-1:-1;;;;;2296:9:162;-1:-1:-1;;;;;2233:603:162;;;;;565:4:32;2233:603:162;;;;565:4:32;2233:603:162;;;;1536:8;2233:603;;;;1656:8;2233:603;;;;1598:6;2233:603;;;;2612:41;2649:3;2612:36;:41::i;:::-;2233:603;;2679:10;;-1:-1:-1;;;;;2679:10:162;;;2233:603;;;;2717:12;;;2233:603;;;;;;;;;;;;;;1710:1;2233:603;;;;1756:4;2233:603;;;;;;;;2877:38;2194:642;;-1:-1:-1;2679:10:162;;2194:642;;2877:38;;;:::i;:::-;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;2846:70;;2991:6;2999:12;2972:40;;;;;:::i;:::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;2926:10;;:97;;;;;-1:-1:-1;;;;;2926:97:162;;;;;-1:-1:-1;;;;;2926:97:162;;;;;;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;3033:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3071:10:162;;;3057:25;;-1:-1:-1;;;3057:25:162;;-1:-1:-1;;;;;3071:10:162;;;3057:25;;;3988:51:165;-1:-1:-1;;;;;;;;;;;3057:13:162;-1:-1:-1;3057:13:162;;-1:-1:-1;3961:18:165;3057:25:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3092:10:162;;3113:6;;3092:34;;-1:-1:-1;;;3092:34:162;;-1:-1:-1;;;;;3113:6:162;;;3092:34;;;10248:51:165;3092:10:162;10315:18:165;;;10308:50;3092:10:162;;;-1:-1:-1;3092:20:162;;-1:-1:-1;10221:18:165;;3092:34:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3392:8:162;;;;;-1:-1:-1;3387:70:162;;-1:-1:-1;3387:70:162;-1:-1:-1;;;;;;;;;;;3416:7:162;3424:21;1656:8;3444:1;3424:21;:::i;:::-;3416:30;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;3416:30:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3387:70;1808:1655;;;;1767:1696::o;2545:198:159:-;2709:22;;-1:-1:-1;;;2709:22:159;;-1:-1:-1;;;;;4006:32:165;;;2709:22:159;;;3988:51:165;2655:7:159;;2681:55;;2695:5;;2702;;2709:15;;;;;3961:18:165;;2709:22:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2733:2;2681:13;:55::i;:::-;2674:62;2545:198;-1:-1:-1;;;;2545:198:159:o;2170:134:57:-;2217:33;2281:16;2262:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2262:35:57;;;;;;;;;;;;;;;;;;;;;;;2170:134;:::o;2749:417:159:-;2925:22;;-1:-1:-1;;;2925:22:159;;-1:-1:-1;;;;;4006:32:165;;;2925:22:159;;;3988:51:165;2883:7:159;;;;2925:15;;;;;3961:18:165;;2925:22:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2902:45;;2970:12;2961:6;:21;2957:56;;;2991:22;;-1:-1:-1;;;2991:22:159;;;;;;;;;;;2957:56;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;3023:12:159;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3047:20:159;;-1:-1:-1;;;3047:20:159;;-1:-1:-1;;;;;4006:32:165;;3047:20:159;;;3988:51:165;-1:-1:-1;;;;;;;;;;;3047:13:159;-1:-1:-1;3047:13:159;;-1:-1:-1;3961:18:165;;3047:20:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3077:23:159;;-1:-1:-1;;;3077:23:159;;-1:-1:-1;;;;;11081:32:165;;3077:23:159;;;11063:51:165;3092:7:159;11130:18:165;;;11123:34;-1:-1:-1;;;;;;;;;;;3077:7:159;-1:-1:-1;3077:7:159;;-1:-1:-1;11036:18:165;;3077:23:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3110:26:159;;-1:-1:-1;;;3110:26:159;;-1:-1:-1;;;;;11081:32:165;;;3110:26:159;;;11063:51:165;11130:18;;;11123:34;;;3110:14:159;;;-1:-1:-1;3110:14:159;;-1:-1:-1;11036:18:165;;3110:26:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;3153:6:159;;2749:417;-1:-1:-1;;;;;2749:417:159:o;2939:133:57:-;2985:33;3049:16;3030:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;3030:35:57;;;;;;;;;;;;;;;;;;;;;;2939:133;:::o;2640:141::-;2688:35;2756:18;2735:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2735:39:57;;;;;;;;;;;;;;;;;;;;;;2640:141;:::o;2321:218:159:-;2377:13;2455:4;2444:16;;;;;;;;:::i;:::-;;;;-1:-1:-1;;2444:16:159;;;;;;;;;;2434:27;;2444:16;2434:27;;;;-1:-1:-1;;;2474:21:159;;2434:27;-1:-1:-1;;;;;;;;;;;;2474:8:159;;;:21;;2434:27;;2490:4;;2474:21;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;2505:27:159;;-1:-1:-1;;;2505:27:159;;-1:-1:-1;;;;;11081:32:165;;2505:27:159;;;11063:51:165;2520:11:159;11130:18:165;;;11123:34;-1:-1:-1;;;;;;;;;;;2505:7:159;-1:-1:-1;2505:7:159;;-1:-1:-1;11036:18:165;;2505:27:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2321:218;;;:::o;2456:178:57:-;2512:48;2601:26;2572:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2572:55:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2572:55:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2456:178;:::o;790:1680:140:-;908:5;;897:42;;-1:-1:-1;;;;;908:5:140;915:7;924:14;897:10;:42::i;:::-;-1:-1:-1;1020:3:140;;989:18;;1011:28;;-1:-1:-1;;;;;1020:3:140;1025:13;1011:8;:28::i;:::-;1100:6;;986:53;;-1:-1:-1;1071:9:140;;-1:-1:-1;1090:30:140;;-1:-1:-1;;;;;1100:6:140;1071:9;1090;:30::i;:::-;-1:-1:-1;;1309:10:140;;:24;;;-1:-1:-1;;;1309:24:140;;;;1288:18;;-1:-1:-1;;;;;1309:10:140;;:22;;:24;;;;;;;;;;;;;;:10;:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:35;;;1377:10;;1354:71;;-1:-1:-1;;;1354:71:140;;1598:6:162;1354:71:140;;;13886:25:165;1418:6:140;13927:18:165;;;13920:34;1309:35:140;;-1:-1:-1;;;;;;1377:10:140;;1354:42;;13859:18:165;;1354:71:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1542:10:140;;1468:17;;-1:-1:-1;1488:74:140;;-1:-1:-1;;;;;;1542:10:140;1488:40;:74::i;:::-;1572:10;;1468:94;;-1:-1:-1;;;;;;1572:10:140;:21;1594:44;1572:10;1594:32;:44::i;:::-;1572:67;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;1572:67:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;1785:10:140;;1722:107;;-1:-1:-1;1744:52:140;;-1:-1:-1;;;;;;1785:10:140;1744:40;:52::i;:::-;1810:9;1722:8;:107::i;:::-;1990:10;;1947:40;;-1:-1:-1;;;;;1990:10:140;:24;2028:44;1990:10;2028:32;:44::i;:::-;1990:92;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;1990:92:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1947:135;;2092:43;2101:10;:21;;;-1:-1:-1;;;;;2092:43:140;2124:10;2092:8;:43::i;:::-;2322:10;;:24;;;-1:-1:-1;;;2322:24:140;;;;2283:36;;-1:-1:-1;;;;;2322:10:140;;:22;;:24;;;;;;;;;;;;;;:10;:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2283:63;;2357:47;2366:8;:25;;;2393:10;2357:8;:47::i;:::-;2414:49;2423:8;:26;;;2451:11;2414:8;:49::i;:::-;844:1626;;;;;;790:1680::o;3621:1445::-;3732:5;;3721:42;;-1:-1:-1;;;;;3732:5:140;3739:7;3748:14;3721:10;:42::i;:::-;-1:-1:-1;3819:3:140;;3810:28;;-1:-1:-1;;;;;3819:3:140;3824:13;3810:8;:28::i;:::-;-1:-1:-1;;3899:6:140;;3870:9;;3889:30;;-1:-1:-1;;;;;3899:6:140;3870:9;3889;:30::i;:::-;-1:-1:-1;;;;;;;;;;;;3957:7:140;-1:-1:-1;3957:7:140;3965:35;1656:8:162;3965:15:140;:35;:::i;:::-;3957:44;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;3957:44:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4044:10:140;;-1:-1:-1;;;;;4044:10:140;;-1:-1:-1;4044:21:140;;-1:-1:-1;4066:44:140;4044:10;4066:32;:44::i;:::-;4044:67;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;4044:67:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;4607:10:140;;4564:40;;-1:-1:-1;;;;;;4607:10:140;;-1:-1:-1;4607:24:140;4645:44;4607:10;4645:32;:44::i;:::-;4607:92;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;4607:92:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4564:135;;4709:36;4748:10;;;;;;;;;-1:-1:-1;;;;;4748:10:140;-1:-1:-1;;;;;4748:22:140;;:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4709:63;;4782:52;4791:10;:21;;;-1:-1:-1;;;;;4782:52:140;4814:8;:19;;;4782:8;:52::i;:::-;4972:38;4981:8;:25;;;5008:1;4972:8;:38::i;:::-;5020:39;5029:8;:26;;;5057:1;5020:8;:39::i;:::-;3668:1398;;;3621:1445::o;2310:140:57:-;2358:34;2425:18;2404:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5072:1862:140;5184:5;;5173:42;;-1:-1:-1;;;;;5184:5:140;5191:7;5200:14;5173:10;:42::i;:::-;-1:-1:-1;5271:3:140;;5262:28;;-1:-1:-1;;;;;5271:3:140;5276:13;5262:8;:28::i;:::-;-1:-1:-1;;5351:6:140;;5322:9;;5341:30;;-1:-1:-1;;;;;5351:6:140;5322:9;5341;:30::i;:::-;-1:-1:-1;;;;;;;;;;;;5409:7:140;-1:-1:-1;5409:7:140;5417:35;1656:8:162;5417:15:140;:35;:::i;:::-;5409:44;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;5409:44:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5496:10:140;;-1:-1:-1;;;;;5496:10:140;;-1:-1:-1;5496:21:140;;-1:-1:-1;5518:44:140;5496:10;5518:32;:44::i;:::-;5496:67;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;5496:67:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5574:26;5672:10;;;;;;;;;-1:-1:-1;;;;;5672:10:140;-1:-1:-1;;;;;5672:24:140;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:45;;;5649:10;;5603:66;;-1:-1:-1;;;;;5649:10:140;5603:32;:66::i;:::-;:114;;;;:::i;:::-;5727:10;;:41;;-1:-1:-1;;;5727:41:140;;;;;845:25:165;;;5574:143:140;;-1:-1:-1;;;;;;5727:10:140;;:21;;818:18:165;;5727:41:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;6264:10:140;;6221:40;;-1:-1:-1;;;;;;6264:10:140;;-1:-1:-1;6264:24:140;6302:44;6264:10;6302:32;:44::i;:::-;6264:92;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;6264:92:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6221:135;;6366:36;6405:10;;;;;;;;;-1:-1:-1;;;;;6405:10:140;-1:-1:-1;;;;;6405:22:140;;:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6366:63;;6439:52;6448:10;:21;;;-1:-1:-1;;;;;6439:52:140;6471:8;:19;;;6439:8;:52::i;:::-;6596:10;;:44;;-1:-1:-1;;;6596:44:140;;;;;845:25:165;;;-1:-1:-1;;;;;6596:10:140;;;;:24;;818:18:165;;6596:44:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6583:57;;6650:52;6659:10;:21;;;-1:-1:-1;;;;;6650:52:140;6682:8;:19;;;6650:8;:52::i;:::-;6840:38;6849:8;:25;;;6876:1;6840:8;:38::i;:::-;6888:39;6897:8;:26;;;6925:1;6888:8;:39::i;2787:146:57:-;2835:40;2908:18;2887:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2887:39:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2887:39:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;296:208:140;368:59;;-1:-1:-1;;;368:59:140;;-1:-1:-1;;;368:59:140;;;17294:52:165;-1:-1:-1;;;;;;;;;;;368:15:140;;;17267:18:165;;368:59:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;437:10:140;;-1:-1:-1;;;;;437:10:140;;-1:-1:-1;437:21:140;;-1:-1:-1;459:37:140;1598:6:162;459:15:140;:37;:::i;:::-;437:60;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;437:60:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3830:2306:159;3955:18;3976:11;;;;;3998:335;;4031:138;4075:6;4059:12;:22;;4031:138;;;;;;;;;;;;;;;;;:10;:138::i;:::-;3998:335;;;4200:122;4237:12;4228:6;:21;4200:122;;;;;;;;;;;;;;;;;:10;:122::i;:::-;4343:18;4364:13;:49;;4407:6;4364:49;;;4380:24;4397:6;4380;:24;:::i;:::-;4343:70;;4423:18;4445:13;4444:14;:75;;4513:6;4444:75;;;4490:7;4491:6;4490:7;:::i;:::-;4473:25;;:6;:25;:::i;:::-;4423:96;;4597:10;4582:12;:25;:54;;;;4626:10;4611:12;:25;4582:54;4578:233;;;4652:57;4661:12;4675:10;4652:57;;;;;;;;;;;;;-1:-1:-1;;;4652:57:159;;;:8;:57::i;:::-;4723;4732:12;4746:10;4723:57;;;;;;;;;;;;;-1:-1:-1;;;4723:57:159;;;:8;:57::i;4578:233::-;4908:13;4904:1226;;;4937:21;4961;4976:6;4961:12;:21;:::i;:::-;4937:45;;5024:6;5000:13;:31;4996:516;;;5051:133;;;;;;;;;;;;;;;;;;;5135:31;5153:13;5143:6;5135:31;:::i;:::-;5051:12;:133::i;:::-;5202:37;;;;;;;;;;;;;;-1:-1:-1;;;5202:37:159;;;5232:6;5202:12;:37::i;:::-;5257:44;;;;;;;;;;;;;;-1:-1:-1;;;5257:44:159;;;5287:13;5257:12;:44::i;:::-;4996:516;;;5340:157;5370:10;5402:12;5340:157;;;;;;;;;;;;;;;;;:8;:157::i;:::-;4923:599;4904:1226;;;5542:21;5566;5575:12;5566:6;:21;:::i;:::-;5542:45;-1:-1:-1;5629:7:159;5630:6;5629:7;:::i;:::-;5605:13;:32;5601:519;;;5657:134;;;;;;;;;;;;;;;;;;5760:13;5750:6;5749:7;;;:::i;:::-;5741:32;;;;:::i;5657:134::-;5809:37;;;;;;;;;;;;;;-1:-1:-1;;;5809:37:159;;;5839:6;5809:12;:37::i;:::-;5864:45;;;;;;;;;;;;;;-1:-1:-1;;;5864:45:159;;;5895:13;5864:12;:45::i;:::-;5601:519;;;5948:157;5978:10;6010:12;5948:157;;;;;;;;;;;;;;;;;:8;:157::i;:::-;5528:602;3945:2191;;;3830:2306;;;:::o;1875:141:57:-;1924:34;1991:18;1970:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1819:584:50;1873:7;;1853:4;;1873:7;;;;;1869:528;;;-1:-1:-1;1903:7:50;;;;;;;;1819:584::o;1869:528::-;1941:17;-1:-1:-1;;;;;;;;;;;2985:55:50;3066:16;1980:374;;2196:43;;;-1:-1:-1;;;;;;;;;;;2196:43:50;;;11063:51:165;;;-1:-1:-1;;;11130:18:165;;;11123:34;2196:43:50;;;;;;;;;11036:18:165;;;2196:43:50;;;-1:-1:-1;;1671:64:50;;2086:175;;2135:34;;2086:175;;;:::i;:::-;;;;-1:-1:-1;;2086:175:50;;;;;;;;;;2047:232;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2020:259;;;2323:7;2312:27;;;;;;;;;;;;:::i;:::-;2297:42;;2002:352;1980:374;2374:12;1819:584;-1:-1:-1;1819:584:50:o;510:274:140:-;646:10;;588:22;;613:44;;-1:-1:-1;;;;;646:10:140;613:32;:44::i;:::-;667:59;;-1:-1:-1;;;667:59:140;;-1:-1:-1;;;667:59:140;;;17294:52:165;588:69:140;;-1:-1:-1;;;;;;;;;;;;667:15:140;;;17267:18:165;;667:59:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;736:10:140;;-1:-1:-1;;;;;736:10:140;;-1:-1:-1;736:21:140;;-1:-1:-1;758:18:140;:14;736:10;758:18;:::i;:::-;736:41;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;736:41:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;578:206;510:274::o;2022:142:57:-;2071:35;2139:18;2118:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2118:39:57;;;;;;;;;;;;;;;;;;;;;;2022:142;:::o;2476:1139:140:-;2594:5;;2583:42;;-1:-1:-1;;;;;2594:5:140;2601:7;2610:14;2583:10;:42::i;:::-;;2828:40;1598:6:162;2861::140;2828:11;:40::i;:::-;2899:10;;:24;;;-1:-1:-1;;;2899:24:140;;;;2878:18;;-1:-1:-1;;;;;2899:10:140;;:22;;:24;;;;;;;;;;;;;;:10;:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:35;;;3051:10;;2899:35;;-1:-1:-1;2977:17:140;;2997:74;;-1:-1:-1;;;;;3051:10:140;2997:40;:74::i;:::-;3081:10;;2977:94;;-1:-1:-1;;;;;;3081:10:140;:21;3103:44;3081:10;3103:32;:44::i;:::-;3081:67;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;3081:67:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3294:10:140;;3231:107;;-1:-1:-1;3253:52:140;;-1:-1:-1;;;;;;3294:10:140;3253:40;:52::i;3231:107::-;3463:10;;3420:40;;-1:-1:-1;;;;;3463:10:140;:24;3501:44;3463:10;3501:32;:44::i;:::-;3463:92;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;3463:92:140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3420:135;;3565:43;3574:10;:21;;;-1:-1:-1;;;;;3565:43:140;3597:10;3565:8;:43::i;1380:471:159:-;1430:19;;;;;;;;;;;;;;-1:-1:-1;;;1430:19:159;;;:10;:19::i;:::-;1422:5;:27;;-1:-1:-1;;;;;;1422:27:159;-1:-1:-1;;;;;1422:27:159;;;;;;;;;;1465:17;;;;;;;;;;;;-1:-1:-1;;;1465:17:159;;;;;;:10;:17::i;:::-;1459:3;:23;;-1:-1:-1;;;;;;1459:23:159;-1:-1:-1;;;;;1459:23:159;;;;;;;;;;1501:20;;;;;;;;;;;;-1:-1:-1;;;1501:20:159;;;;;;:10;:20::i;:::-;1492:6;:29;;-1:-1:-1;;;;;;1492:29:159;-1:-1:-1;;;;;1492:29:159;;;;;;;;;;1537:17;;;;;;;;;;;;-1:-1:-1;;;1537:17:159;;;;;;:10;:17::i;:::-;1531:3;:23;;-1:-1:-1;;;;;;1531:23:159;-1:-1:-1;;;;;1531:23:159;;;;;;;;;;1570:17;;;;;;;;;;;;-1:-1:-1;;;1570:17:159;;;;;;:10;:17::i;:::-;1564:3;;:23;;;;;-1:-1:-1;;;;;1564:23:159;;;;;-1:-1:-1;;;;;1564:23:159;;;;;;1609:22;;;;;;;;;;;;;;-1:-1:-1;;;1609:22:159;;;:10;:22::i;:::-;1598:8;:33;;-1:-1:-1;;;;;;1598:33:159;-1:-1:-1;;;;;1598:33:159;;;;;;;;;;1650:20;;;;;;;;;;;;-1:-1:-1;;;1650:20:159;;;;;;:10;:20::i;:::-;1641:6;:29;;-1:-1:-1;;;;;;1641:29:159;-1:-1:-1;;;;;1641:29:159;;;;;;;;;;1695:26;;;;;;;;;;;;-1:-1:-1;;;1695:26:159;;;;;;:10;:26::i;:::-;1680:12;:41;;-1:-1:-1;;;;;;1680:41:159;-1:-1:-1;;;;;1680:41:159;;;;;;;;;;1744:24;;;;;;;;;;;;-1:-1:-1;;;1744:24:159;;;;;;:10;:24::i;:::-;1731:10;:37;;-1:-1:-1;;;;;;1731:37:159;-1:-1:-1;;;;;1731:37:159;;;;;;;;;;1787:20;;;;;;;;;;;;-1:-1:-1;;;1787:20:159;;;;;;:10;:20::i;:::-;1778:6;:29;;-1:-1:-1;;;;;;1778:29:159;-1:-1:-1;;;;;1778:29:159;;;;;;;;;;1829:15;1818:8;:26;1380:471::o;9725:262:163:-;9791:7;;9832:89;9873:38;9901:9;:3;9907;9901:9;:::i;:::-;9881:10;;9873:27;:38::i;:::-;9840:10;;9832:27;:89::i;:::-;9810:111;-1:-1:-1;9938:42:163;565:4:32;9810:111:163;9938:29;:42::i;:::-;9931:49;9725:262;-1:-1:-1;;;9725:262:163:o;8686:563:162:-;8801:16;8848:394;8876:2;8896:3;8917:12;8947:281;;;;;;;;9000:4;8947:281;;;;;;9041:12;8947:281;;;;9090:1;8947:281;;;;9136:1;8947:281;;;;-1:-1:-1;;8947:281:162;;;8848:10;:394::i;16153:591::-;16247:20;16269:18;16318:419;16344:6;16368:10;16396:327;;;;;;;;16449:4;16396:327;;;;;;16490:10;16396:327;;;;16537:1;16396:327;;;;16597:10;16396:327;;;;-1:-1:-1;;16396:327:162;;;16318:8;:419::i;:::-;16299:438;;;;16153:591;;;;;:::o;20236:576::-;20331:20;20353:18;20402:403;20429:6;20453:10;20481:310;;;;;;;;20534:4;20481:310;;;;;;20575:10;20481:310;;;;20622:1;20481:310;;;;20682:1;20481:310;;;;20728:10;20481:310;;;20402:9;:403::i;2108:690:163:-;2204:7;2223:40;2266:11;-1:-1:-1;;;;;2266:25:163;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2223:70;;2303:36;2342:11;-1:-1:-1;;;;;2342:23:163;;:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;2303:64;;2396:395;2453:154;2521:8;:22;;;2565:8;:24;;;2453:46;:154::i;:::-;2625:8;:21;;;2664:10;:28;;;2710:10;:27;;;2755:10;:22;;;2396:39;:395::i;538:227::-;625:7;712:10;-1:-1:-1;;;;;712:24:163;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:45;;;694:63;;:15;:63;:::i;:::-;663:95;;:15;:95;:::i;:::-;644:114;538:227;-1:-1:-1;;538:227:163:o;5209:262:50:-;5271:1;5266;:6;5262:203;;-1:-1:-1;;;;;;;;;;;5293:41:50;;;;18909:2:165;18891:21;;;18948:2;18928:18;;;18921:30;18987:34;18982:2;18967:18;;18960:62;-1:-1:-1;;;19053:2:165;19038:18;;19031:32;19095:3;19080:19;;18707:398;5293:41:50;;;;;;;;5353:31;;;19322:21:165;;;19379:2;19359:18;;;19352:30;-1:-1:-1;;;19413:2:165;19398:18;;19391:40;19498:4;19483:20;;19476:36;;;5353:31:50;;-1:-1:-1;;;;;;;;;;;5353:31:50;;;;19463:3:165;5353:31:50;;;5403;;;19735:21:165;;;19792:2;19772:18;;;19765:30;;;;-1:-1:-1;;;19826:2:165;19811:18;;19804:40;19911:4;19896:20;;19889:36;;;-1:-1:-1;;;;;;;;;;;5403:31:50;19876:3:165;19861:19;5403:31:50;;;;;;;;5448:6;:4;:6::i;:::-;5209:262;;:::o;3425:191::-;3504:9;3499:111;;-1:-1:-1;;;;;;;;;;;3560:3:50;3534:30;;;;;;:::i;:::-;;;;;;;;3578:21;3589:9;3578:10;:21::i;12219:177::-;12299:1;12295;:5;12291:99;;;-1:-1:-1;;;;;;;;;;;12347:3:50;12321:30;;;;;;:::i;:::-;;;;;;;;12365:14;12374:1;12377;12365:8;:14::i;16185:177::-;16265:1;16261;:5;16257:99;;;-1:-1:-1;;;;;;;;;;;16313:3:50;16287:30;;;;;;:::i;:::-;;;;;;;;16331:14;16340:1;16343;16331:8;:14::i;7546:145:66:-;7613:71;7676:2;7680;7629:54;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;7629:54:66;;;;;;;;;;;;;;-1:-1:-1;;;;;7629:54:66;-1:-1:-1;;;7629:54:66;;;7613:15;:71::i;7697:143::-;7763:70;7825:2;7829;7779:53;;;;;;;;;:::i;:::-;;;;-1:-1:-1;;7779:53:66;;;;;;;;;;;;;;-1:-1:-1;;;;;7779:53:66;-1:-1:-1;;;7779:53:66;;;7763:15;:70::i;5476:178:50:-;5557:1;5552;:6;5548:100;;-1:-1:-1;;;;;;;;;;;5605:3:50;5579:30;;;;;;:::i;:::-;;;;;;;;5623:14;5632:1;5635;5623:8;:14::i;22930:175:162:-;23027:10;;23004:53;;-1:-1:-1;;;23004:53:162;;;;;13886:25:165;;;13927:18;;;13920:34;;;-1:-1:-1;;;;;23027:10:162;;;;23004:42;;13859:18:165;;23004:53:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;23067:7:162;-1:-1:-1;23067:7:162;;-1:-1:-1;23075:22:162;;-1:-1:-1;23093:4:162;23075:15;:22;:::i;:::-;23067:31;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;23067:31:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1814:119:32;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;2207:165::-;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;7679:1001:162:-;7837:16;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;7865:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7889:17:162;;-1:-1:-1;;;7889:17:162;;-1:-1:-1;;;;;4006:32:165;;7889:17:162;;;3988:51:165;-1:-1:-1;;;;;;;;;;;7889:13:162;-1:-1:-1;7889:13:162;;-1:-1:-1;3961:18:165;;7889:17:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;7974:10:162;;:26;;;-1:-1:-1;;;7974:26:162;;;;87:42:161;;-1:-1:-1;;;;;;7974:10:162;;;;-1:-1:-1;7974:24:162;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;7966:61:162;;:99;;;;-1:-1:-1;8043:22:162;;7966:99;7949:725;;;8113:10;;8143:23;;;;8273:22;;8113:200;;-1:-1:-1;;;8113:200:162;;;;;21453:25:165;;;21494:18;;;21487:34;;;-1:-1:-1;;;;;21557:32:165;;;21537:18;;;21530:60;21633:14;;21626:22;21606:18;;;21599:50;8113:10:162;;;:21;;8143:23;21425:19:165;;8113:200:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8090:223;;;;7949:725;8344:9;;8359:23;;;;8344:39;;-1:-1:-1;;;8344:39:162;;;;;845:25:165;;;;8344:9:162;;;;-1:-1:-1;;;;;8344:9:162;;:14;;818:18:165;;8344:39:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;8397:9:162;;8423:10;;8436:23;;;;8397:63;;-1:-1:-1;;;8397:63:162;;-1:-1:-1;;;;;8423:10:162;;;8397:63;;;11063:51:165;11130:18;;;11123:34;;;;8397:9:162;;;;;;-1:-1:-1;8397:17:162;;-1:-1:-1;11036:18:165;;8397:63:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;8497:10:162;;8623:22;;8497:166;;-1:-1:-1;;;8497:166:162;;;;;21453:25:165;;;21494:18;;;21487:34;;;-1:-1:-1;;;;;21557:32:165;;;21537:18;;;21530:60;21633:14;;21626:22;21606:18;;;21599:50;8497:10:162;;;:21;;21425:19:165;;8497:166:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;15001:1146::-;15138:20;15160;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;15192:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;15216:21:162;;-1:-1:-1;;;15216:21:162;;-1:-1:-1;;;;;4006:32:165;;15216:21:162;;;3988:51:165;-1:-1:-1;;;;;;;;;;;15216:13:162;-1:-1:-1;15216:13:162;;-1:-1:-1;3961:18:165;;15216:21:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;15299:10:162;;:26;;;-1:-1:-1;;;15299:26:162;;;;87:42:161;;-1:-1:-1;;;;;;15299:10:162;;;;-1:-1:-1;15299:24:162;;:26;;;;;;;;;;;;;;:10;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;15291:61:162;;:99;;;;-1:-1:-1;15368:22:162;;15291:99;15274:867;;;15438:10;;15466:23;;;;15545:21;;;;15609:23;;;;;15682:22;;15438:284;;-1:-1:-1;;;15438:284:162;;-1:-1:-1;;;;;15438:10:162;;;;:19;;15466:23;15438:284;;15513:10;;15545:21;;15654:6;;15682:22;15438:284;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;15415:307;;;;;;15274:867;15753:9;;:26;;-1:-1:-1;;;15753:26:162;;;;;845:25:165;;;15753:9:162;;;;-1:-1:-1;;;;;15753:9:162;;:14;;818:18:165;;15753:26:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;15793:9:162;;15819:10;;15793:50;;-1:-1:-1;;;15793:50:162;;-1:-1:-1;;;;;15819:10:162;;;15793:50;;;11063:51:165;11130:18;;;11123:34;;;15793:9:162;;;;;;-1:-1:-1;15793:17:162;;-1:-1:-1;11036:18:165;;15793:50:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;15880:10:162;;15953:21;;;;16017:23;;;;;16090:22;;15880:250;;-1:-1:-1;;;15880:250:162;;-1:-1:-1;;;;;15880:10:162;;;;:19;;:250;;15921:10;;15953:21;;16062:6;;16090:22;15880:250;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;15274:867::-;15001:1146;;;;;;:::o;18851:1379::-;18989:20;19011:18;-1:-1:-1;;;;;;;;;;;309:37:51;;-1:-1:-1;;;;;19041:12:162;;:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19065:21:162;;-1:-1:-1;;;19065:21:162;;-1:-1:-1;;;;;4006:32:165;;19065:21:162;;;3988:51:165;-1:-1:-1;;;;;;;;;;;19065:13:162;-1:-1:-1;19065:13:162;;-1:-1:-1;3961:18:165;;19065:21:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19201:10:162;;19139:82;;-1:-1:-1;;;;;;19201:10:162;;-1:-1:-1;19139:48:162;:82::i;:::-;19124:97;;87:42:161;-1:-1:-1;;;;;19248:61:162;19256:10;;;;;;;;;-1:-1:-1;;;;;19256:10:162;-1:-1:-1;;;;;19256:24:162;;:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:36;-1:-1:-1;;;;;19248:61:162;;:99;;;;-1:-1:-1;19325:22:162;;19248:99;19231:949;;;19401:10;;19446:23;;;;19529:21;;;;19588:23;;;;;19653:22;;19401:288;;-1:-1:-1;;;19401:288:162;;-1:-1:-1;;;;;19401:10:162;;;;:20;;19446:23;19401:288;;19501:10;;19529:21;;19629:6;;19653:22;19401:288;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;19372:317;;-1:-1:-1;19372:317:162;-1:-1:-1;19231:949:162;;;19720:9;;19735:23;;;;19720:39;;-1:-1:-1;;;19720:39:162;;;;;845:25:165;;;;19720:9:162;;;;-1:-1:-1;;;;;19720:9:162;;:14;;818:18:165;;19720:39:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;19773:9:162;;19799:10;;19812:21;;;;19773:61;;-1:-1:-1;;;19773:61:162;;-1:-1:-1;;;;;19799:10:162;;;19773:61;;;11063:51:165;11130:18;;;11123:34;;;;19773:9:162;;;;;;-1:-1:-1;19773:17:162;;-1:-1:-1;11036:18:165;;19773:61:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;19877:10:162;;19943:21;;;;20002:23;;;;;20067:22;;19877:226;;-1:-1:-1;;;19877:226:162;;-1:-1:-1;;;;;19877:10:162;;;;:20;;:226;;19915:10;;19943:21;;20043:6;;20067:22;19877:226;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;20117:9;;20132:23;;;;19848:255;;-1:-1:-1;19848:255:162;;-1:-1:-1;20117:9:162;;;-1:-1:-1;;;;;20117:9:162;;:14;;20132:36;;19848:255;;20132:36;:::i;:::-;20117:52;;;;;;;;;;;;;845:25:165;;833:2;818:18;;699:177;20117:52:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;18851:1379;;;;;;:::o;68721:340:33:-;68856:7;;68907:53;68944:16;68914:14;68907:53;:::i;:::-;68875:85;;69004:1;68978:22;:27;;68970:36;;;;;2312:782;2548:11;2784:17;2804:150;2836:23;2873:13;2900:18;2932:12;2804:18;:150::i;:::-;2784:170;-1:-1:-1;2983:104:33;3026:47;2784:170;3045:17;3064:8;3026:18;:47::i;:::-;2984:15;2990:9;150:4:32;2984:15:33;:::i;:::-;2983:25;;:104::i;:::-;2964:123;2312:782;-1:-1:-1;;;;;;;2312:782:33:o;2409:432:50:-;-1:-1:-1;;;;;;;;;;;2985:55:50;3066:16;2452:359;;2652:67;;;-1:-1:-1;;;;;;;;;;;2652:67:50;;;22821:51:165;;;-1:-1:-1;;;22888:18:165;;;22881:34;;;;2712:4:50;22931:18:165;;;22924:34;2489:11:50;;1671:64;2586:43;;22794:18:165;;2652:67:50;;;-1:-1:-1;;2652:67:50;;;;;;;;;;2541:196;;;2652:67;2541:196;;:::i;:::-;;;;-1:-1:-1;;2541:196:50;;;;;;;;;;2506:245;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;2452:359:50;2820:7;:14;;-1:-1:-1;;2820:14:50;;;;;2409:432::o;3262:157::-;3322:9;3317:96;;-1:-1:-1;;;;;;;;;;;3352:30:50;;;;23171:2:165;23153:21;;;23210:2;23190:18;;;23183:30;23249:25;23244:2;23229:18;;23222:53;23307:2;23292:18;;22969:347;3352:30:50;;;;;;;;3396:6;:4;:6::i;:::-;3262:157;:::o;11955:259::-;12016:1;12012;:5;12008:200;;;-1:-1:-1;;;;;;;;;;;12038:41:50;;;;23523:2:165;23505:21;;;23562:2;23542:18;;;23535:30;23601:34;23596:2;23581:18;;23574:62;-1:-1:-1;;;23667:2:165;23652:18;;23645:32;23709:3;23694:19;;23321:398;12038:41:50;;;;;;;;12098:30;;;23936:21:165;;;23993:1;23973:18;;;23966:29;-1:-1:-1;;;24026:2:165;24011:18;;24004:39;24110:4;24095:20;;24088:36;;;12098:30:50;;-1:-1:-1;;;;;;;;;;;12098:30:50;;;;24075:3:165;12098:30:50;;;12147;;;24347:21:165;;;24404:1;24384:18;;;24377:29;;;;-1:-1:-1;;;24437:2:165;24422:18;;24415:39;24521:4;24506:20;;24499:36;;;-1:-1:-1;;;;;;;;;;;12147:30:50;24486:3:165;24471:19;12147:30:50;24135:406:165;15921:259:50;15982:1;15978;:5;15974:200;;;-1:-1:-1;;;;;;;;;;;16004:41:50;;;;24748:2:165;24730:21;;;24787:2;24767:18;;;24760:30;24826:34;24821:2;24806:18;;24799:62;-1:-1:-1;;;24892:2:165;24877:18;;24870:32;24934:3;24919:19;;24546:398;868:133:66;939:55;986:7;965:19;939:55::i;984:556:32:-;1100:9;1365:1;-1:-1:-1;;1348:19:32;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:32;;1497:27;;984:556::o;1226:237:163:-;1330:7;1412:11;-1:-1:-1;;;;;1412:25:163;;:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:44;;;1368:29;1385:11;1368:16;:29::i;:::-;:88;;;;:::i;1246:449:33:-;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;:::-;:99;;:113::i;:::-;1563:125;1246:449;-1:-1:-1;;;;;1246:449:33:o;2726:748:32:-;2840:9;3105:1;-1:-1:-1;;3088:19:32;3085:1;3082:26;3079:1;3075:34;3068:42;3055:11;3051:60;3024:146;;3154:1;3151;3144:12;3024:146;-1:-1:-1;3421:9:32;;3368:27;;;3365:34;;3417:27;;;3344:114;;2726:748::o;1007:380:66:-;1105:14;;591:42;1278:2;1265:16;;1081:21;;1105:14;1265:16;591:42;1314:5;1303:68;1294:77;;1231:150;;1007:380;:::o;4671:846:32:-;4729:7;4795:1;4800;4795:6;4791:50;;-1:-1:-1;565:4:32;4817:13;;4791:50;4894:1;4899;4894:6;4890:45;;-1:-1:-1;4923:1:32;4916:8;;4890:45;5098:1;5073:15;5276:14;5287:1;5276:3;:14::i;:::-;5263:27;-1:-1:-1;5368:18:32;;;5405:22;565:4;5368:18;5405:22;:::i;:::-;;;5500:9;5504:4;5500:3;:9::i;:::-;5485:25;4671:846;-1:-1:-1;;;;;;4671:846:32:o;9632:3592::-;9677:8;9730:1;9725;:6;9721:60;;9740:41;;-1:-1:-1;;;9740:41:32;;;;;;;;;;;9721:60;-1:-1:-1;10747:2:32;-1:-1:-1;;;;;;;10158:1:32;10154:49;10261:9;;;10241:18;10238:33;10235:1;10231:41;10225:48;10323:9;;;10311:10;10308:25;10305:1;10301:33;10295:40;10381:9;;;10373:6;10370:21;10367:1;10363:29;10357:36;10437:9;;;10431:4;10428:19;10425:1;10421:27;;;10415:34;;;10492:9;;;10487:3;10484:18;10481:1;10477:26;10471:33;10547:9;;;10539:18;;;10536:1;10532:26;;;10526:33;;;10595:9;;;10587:18;;;10581:25;10777:3;:7;;;;;10763:22;;;;10810:17;;;11603:31;11599:35;;11654:5;;11653:13;;11670:32;11652:50;11722:5;;11721:13;;11738:33;11720:51;11791:5;;11790:13;;11807:33;11789:51;11860:5;;11859:13;;11876:33;11858:51;11929:5;;11928:13;;11945:32;11927:50;11997:5;;11996:13;;12013:30;11995:48;11000:31;10996:35;;11051:5;;11050:13;;11067:32;11049:50;11119:5;;11118:13;;11135:32;11117:50;11187:5;;11186:13;;-1:-1:-1;;11185:50:32;11255:5;;11254:13;;-1:-1:-1;;11253:50:32;11323:5;;11322:13;;;-1:-1:-1;;11321:50:32;11389:5;-1:-1:-1;;11389:46:32;12384:10;12774:43;12769:48;-1:-1:-1;;10743:6:32;;;;12897:71;:91;12876:112;13061:72;13056:77;13204:3;13198:9;;9632:3592::o;5773:3347::-;5819:8;-1:-1:-1;;5996:1:32;:26;5992:40;;-1:-1:-1;6031:1:32;;5773:3347;-1:-1:-1;5773:3347:32:o;5992:40::-;6231:21;6226:1;:26;6222:99;;6277:44;;-1:-1:-1;;;6277:44:32;;;;;;;;;;;6222:99;6594:7;6588:2;6583:7;;;6582:19;;-1:-1:-1;6930:8:32;7014:2;6954:29;6943:7;;;6942:41;-1:-1:-1;;;6942:51:32;6941:75;;7042:29;7038:33;;7034:37;;;-1:-1:-1;;7713:35:32;;7768:5;;7348:2;7767:13;;;7784:32;7766:50;7836:5;;7835:13;;-1:-1:-1;;7834:51:32;7905:5;;7904:13;;7921:34;7903:52;7975:5;;7974:13;;-1:-1:-1;;7973:53:32;8046:5;;8045:13;;8062:35;8044:53;7354:32;7287:31;7283:35;;7338:5;;7337:13;;7336:50;;;7411:5;;;-1:-1:-1;;7411:40:32;7471:5;7470:13;;;7487:35;7469:53;7540:5;;;-1:-1:-1;;;7540:50:32;8462:10;8999:49;8966:82;9081:3;:7;;;;8965:124;;;;;;-1:-1:-1;;5773:3347:32:o;-1:-1:-1:-;;;;;;;;:::o;:::-;;;;;;;;:::o;:::-;;;;;;;;:::o;14:131:165:-;-1:-1:-1;;;;;89:31:165;;79:42;;69:70;;135:1;132;125:12;150:544;242:6;250;258;311:2;299:9;290:7;286:23;282:32;279:52;;;327:1;324;317:12;279:52;366:9;353:23;385:31;410:5;385:31;:::i;:::-;435:5;-1:-1:-1;492:2:165;477:18;;464:32;505:33;464:32;505:33;:::i;:::-;557:7;-1:-1:-1;616:2:165;601:18;;588:32;629:33;588:32;629:33;:::i;:::-;681:7;671:17;;;150:544;;;;;:::o;990:658::-;1161:2;1213:21;;;1283:13;;1186:18;;;1305:22;;;1132:4;;1161:2;1384:15;;;;1358:2;1343:18;;;1132:4;1427:195;1441:6;1438:1;1435:13;1427:195;;;1506:13;;-1:-1:-1;;;;;1502:39:165;1490:52;;1597:15;;;;1562:12;;;;1538:1;1456:9;1427:195;;;-1:-1:-1;1639:3:165;;990:658;-1:-1:-1;;;;;;990:658:165:o;1653:613::-;1754:6;1762;1770;1778;1831:3;1819:9;1810:7;1806:23;1802:33;1799:53;;;1848:1;1845;1838:12;1799:53;1887:9;1874:23;1906:31;1931:5;1906:31;:::i;:::-;1956:5;-1:-1:-1;2013:2:165;1998:18;;1985:32;2026:33;1985:32;2026:33;:::i;:::-;2078:7;-1:-1:-1;2132:2:165;2117:18;;2104:32;;-1:-1:-1;2188:2:165;2173:18;;2160:32;2201:33;2160:32;2201:33;:::i;:::-;1653:613;;;;-1:-1:-1;1653:613:165;;-1:-1:-1;;1653:613:165:o;2271:127::-;2332:10;2327:3;2323:20;2320:1;2313:31;2363:4;2360:1;2353:15;2387:4;2384:1;2377:15;2403:252;2475:2;2469:9;2517:3;2505:16;;2551:18;2536:34;;2572:22;;;2533:62;2530:88;;;2598:18;;:::i;:::-;2634:2;2627:22;2403:252;:::o;2660:250::-;2727:2;2721:9;2769:6;2757:19;;2806:18;2791:34;;2827:22;;;2788:62;2785:88;;;2853:18;;:::i;2915:922::-;2984:6;3037:2;3025:9;3016:7;3012:23;3008:32;3005:52;;;3053:1;3050;3043:12;3005:52;3093:9;3080:23;3122:18;3163:2;3155:6;3152:14;3149:34;;;3179:1;3176;3169:12;3149:34;3217:6;3206:9;3202:22;3192:32;;3262:7;3255:4;3251:2;3247:13;3243:27;3233:55;;3284:1;3281;3274:12;3233:55;3320:2;3307:16;3342:2;3338;3335:10;3332:36;;;3348:18;;:::i;:::-;3423:2;3417:9;3391:2;3477:13;;-1:-1:-1;;3473:22:165;;;3497:2;3469:31;3465:40;3453:53;;;3521:18;;;3541:22;;;3518:46;3515:72;;;3567:18;;:::i;:::-;3607:10;3603:2;3596:22;3642:2;3634:6;3627:18;3682:7;3677:2;3672;3668;3664:11;3660:20;3657:33;3654:53;;;3703:1;3700;3693:12;3654:53;3759:2;3754;3750;3746:11;3741:2;3733:6;3729:15;3716:46;3804:1;3782:15;;;3799:2;3778:24;3771:35;;;;-1:-1:-1;3786:6:165;2915:922;-1:-1:-1;;;;;2915:922:165:o;4050:1569::-;4254:4;4283:2;4323;4312:9;4308:18;4353:2;4342:9;4335:21;4376:6;4411;4405:13;4442:6;4434;4427:22;4468:2;4458:12;;4501:2;4490:9;4486:18;4479:25;;4563:2;4553:6;4550:1;4546:14;4535:9;4531:30;4527:39;4601:2;4593:6;4589:15;4622:1;4643;4653:937;4669:6;4664:3;4661:15;4653:937;;;4738:22;;;-1:-1:-1;;4734:36:165;4722:49;;4794:13;;4881:9;;-1:-1:-1;;;;;4877:35:165;4862:51;;4952:11;;4946:18;4984:15;;;4977:27;;;5065:19;;4834:15;;;5097:24;;;5187:21;;;;5232:1;;5155:2;5143:15;;;5246:236;5262:8;5257:3;5254:17;5246:236;;;5343:15;;-1:-1:-1;;;;;;5339:42:165;5325:57;;5451:17;;;;5290:1;5281:11;;;;;5408:14;;;;5246:236;;;-1:-1:-1;5568:12:165;;;;5505:5;-1:-1:-1;;;5533:15:165;;;;4695:1;4686:11;4653:937;;;-1:-1:-1;5607:6:165;;4050:1569;-1:-1:-1;;;;;;;;;4050:1569:165:o;5624:250::-;5709:1;5719:113;5733:6;5730:1;5727:13;5719:113;;;5809:11;;;5803:18;5790:11;;;5783:39;5755:2;5748:10;5719:113;;;-1:-1:-1;;5866:1:165;5848:16;;5841:27;5624:250::o;5879:271::-;5921:3;5959:5;5953:12;5986:6;5981:3;5974:19;6002:76;6071:6;6064:4;6059:3;6055:14;6048:4;6041:5;6037:16;6002:76;:::i;:::-;6132:2;6111:15;-1:-1:-1;;6107:29:165;6098:39;;;;6139:4;6094:50;;5879:271;-1:-1:-1;;5879:271:165:o;6155:803::-;6317:4;6346:2;6386;6375:9;6371:18;6416:2;6405:9;6398:21;6439:6;6474;6468:13;6505:6;6497;6490:22;6543:2;6532:9;6528:18;6521:25;;6605:2;6595:6;6592:1;6588:14;6577:9;6573:30;6569:39;6555:53;;6643:2;6635:6;6631:15;6664:1;6674:255;6688:6;6685:1;6682:13;6674:255;;;6781:2;6777:7;6765:9;6757:6;6753:22;6749:36;6744:3;6737:49;6809:40;6842:6;6833;6827:13;6809:40;:::i;:::-;6799:50;-1:-1:-1;6907:12:165;;;;6872:15;;;;6710:1;6703:9;6674:255;;;-1:-1:-1;6946:6:165;;6155:803;-1:-1:-1;;;;;;;6155:803:165:o;6963:315::-;7039:6;7047;7055;7108:2;7096:9;7087:7;7083:23;7079:32;7076:52;;;7124:1;7121;7114:12;7076:52;-1:-1:-1;;7147:23:165;;;7217:2;7202:18;;7189:32;;-1:-1:-1;7268:2:165;7253:18;;;7240:32;;6963:315;-1:-1:-1;6963:315:165:o;8511:944::-;8594:12;;-1:-1:-1;;;;;947:31:165;935:44;;8661:4;8654:5;8650:16;8644:23;8637:4;8632:3;8628:14;8621:47;8717:4;8710:5;8706:16;8700:23;8693:4;8688:3;8684:14;8677:47;8773:4;8766:5;8762:16;8756:23;8749:4;8744:3;8740:14;8733:47;8829:4;8822:5;8818:16;8812:23;8805:4;8800:3;8796:14;8789:47;8885:4;8878:5;8874:16;8868:23;8861:4;8856:3;8852:14;8845:47;8941:4;8934:5;8930:16;8924:23;8917:4;8912:3;8908:14;8901:47;8994:4;8987:5;8983:16;8977:23;9009:48;9051:4;9046:3;9042:14;9028:12;-1:-1:-1;;;;;947:31:165;935:44;;881:104;9009:48;-1:-1:-1;9076:6:165;9119:14;;;9113:21;-1:-1:-1;;;;;947:31:165;;9178:12;;;935:44;-1:-1:-1;;9210:6:165;9253:14;;;9247:21;8375:12;;9316;;;8363:25;8437:4;8426:16;;8420:23;8404:14;;;8397:47;8493:4;8482:16;;8476:23;8460:14;;;8453:47;-1:-1:-1;;9380:6:165;9369:18;;9363:25;9354:6;9345:16;;9338:51;9440:6;9429:18;9423:25;9414:6;9405:16;;;9398:51;8511:944::o;9460:256::-;9650:3;9635:19;;9663:47;9639:9;9692:6;9663:47;:::i;9721:354::-;9939:3;9924:19;;9952:47;9928:9;9981:6;9952:47;:::i;:::-;-1:-1:-1;;;;;10036:32:165;;;;10030:3;10015:19;;;;10008:61;9721:354;;-1:-1:-1;9721:354:165:o;10369:127::-;10430:10;10425:3;10421:20;10418:1;10411:31;10461:4;10458:1;10451:15;10485:4;10482:1;10475:15;10501:168;10574:9;;;10605;;10622:15;;;10616:22;;10602:37;10592:71;;10643:18;;:::i;10674:184::-;10744:6;10797:2;10785:9;10776:7;10772:23;10768:32;10765:52;;;10813:1;10810;10803:12;10765:52;-1:-1:-1;10836:16:165;;10674:184;-1:-1:-1;10674:184:165:o;11447:277::-;11514:6;11567:2;11555:9;11546:7;11542:23;11538:32;11535:52;;;11583:1;11580;11573:12;11535:52;11615:9;11609:16;11668:5;11661:13;11654:21;11647:5;11644:32;11634:60;;11690:1;11687;11680:12;11729:220;11878:2;11867:9;11860:21;11841:4;11898:45;11939:2;11928:9;11924:18;11916:6;11898:45;:::i;11954:317::-;-1:-1:-1;;;;;12131:32:165;;12113:51;;12200:2;12195;12180:18;;12173:30;;;-1:-1:-1;;12220:45:165;;12246:18;;12238:6;12220:45;:::i;12585:1098::-;12681:6;12734:3;12722:9;12713:7;12709:23;12705:33;12702:53;;;12751:1;12748;12741:12;12702:53;12777:22;;:::i;:::-;12828:9;12822:16;12815:5;12808:31;12892:2;12881:9;12877:18;12871:25;12866:2;12859:5;12855:14;12848:49;12950:2;12939:9;12935:18;12929:25;12924:2;12917:5;12913:14;12906:49;13008:2;12997:9;12993:18;12987:25;12982:2;12975:5;12971:14;12964:49;13067:3;13056:9;13052:19;13046:26;13040:3;13033:5;13029:15;13022:51;13127:3;13116:9;13112:19;13106:26;13100:3;13093:5;13089:15;13082:51;13187:3;13176:9;13172:19;13166:26;13160:3;13153:5;13149:15;13142:51;13247:3;13236:9;13232:19;13226:26;13220:3;13213:5;13209:15;13202:51;13272:3;13328:2;13317:9;13313:18;13307:25;13302:2;13295:5;13291:14;13284:49;;13352:3;13408:2;13397:9;13393:18;13387:25;13382:2;13375:5;13371:14;13364:49;;13432:3;13488:2;13477:9;13473:18;13467:25;13462:2;13455:5;13451:14;13444:49;;13512:3;13568:2;13557:9;13553:18;13547:25;13542:2;13535:5;13531:14;13524:49;;13592:3;13648:2;13637:9;13633:18;13627:25;13622:2;13615:5;13611:14;13604:49;;13672:5;13662:15;;;12585:1098;;;;:::o;13965:729::-;14063:6;14116:2;14104:9;14095:7;14091:23;14087:32;14084:52;;;14132:1;14129;14122:12;14084:52;14165:2;14159:9;14207:2;14199:6;14195:15;14276:6;14264:10;14261:22;14240:18;14228:10;14225:34;14222:62;14219:88;;;14287:18;;:::i;:::-;14323:2;14316:22;14360:16;;-1:-1:-1;;;;;14405:46:165;;14395:57;;14385:85;;14466:1;14463;14456:12;14385:85;14479:21;;14545:2;14530:18;;14524:25;14591:2;14580:23;;;14568:36;;14558:64;;14618:1;14615;14608:12;14558:64;14650:2;14638:15;;14631:32;14642:6;13965:729;-1:-1:-1;;;13965:729:165:o;14699:125::-;14764:9;;;14785:10;;;14782:36;;;14798:18;;:::i;14829:380::-;14908:1;14904:12;;;;14951;;;14972:61;;15026:4;15018:6;15014:17;15004:27;;14972:61;15079:2;15071:6;15068:14;15048:18;15045:38;15042:161;;15125:10;15120:3;15116:20;15113:1;15106:31;15160:4;15157:1;15150:15;15188:4;15185:1;15178:15;15042:161;;14829:380;;;:::o;15214:146::-;15301:13;;15323:31;15301:13;15323:31;:::i;15365:525::-;15427:5;15475:4;15463:9;15458:3;15454:19;15450:30;15447:50;;;15493:1;15490;15483:12;15447:50;15526:2;15520:9;15568:4;15560:6;15556:17;15639:6;15627:10;15624:22;15603:18;15591:10;15588:34;15585:62;15582:88;;;15650:18;;:::i;:::-;15690:10;15686:2;15679:22;;15719:6;15710:15;;15755:9;15749:16;15741:6;15734:32;15820:2;15809:9;15805:18;15799:25;15794:2;15786:6;15782:15;15775:50;15879:2;15868:9;15864:18;15858:25;15853:2;15845:6;15841:15;15834:50;;15365:525;;;;:::o;15895:1117::-;15993:6;16046:3;16034:9;16025:7;16021:23;16017:33;16014:53;;;16063:1;16060;16053:12;16014:53;16089:17;;:::i;:::-;16129:48;16167:9;16129:48;:::i;:::-;16122:5;16115:63;16231:2;16220:9;16216:18;16210:25;16205:2;16198:5;16194:14;16187:49;16289:2;16278:9;16274:18;16268:25;16263:2;16256:5;16252:14;16245:49;16347:2;16336:9;16332:18;16326:25;16321:2;16314:5;16310:14;16303:49;16406:3;16395:9;16391:19;16385:26;16379:3;16372:5;16368:15;16361:51;16466:3;16455:9;16451:19;16445:26;16439:3;16432:5;16428:15;16421:51;16526:3;16515:9;16511:19;16505:26;16499:3;16492:5;16488:15;16481:51;16565:58;16618:3;16607:9;16603:19;16565:58;:::i;:::-;16559:3;16552:5;16548:15;16541:83;16643:3;16678:57;16731:2;16720:9;16716:18;16678:57;:::i;:::-;16662:14;;;16655:81;16755:3;16790:62;16844:7;16824:18;;;16790:62;:::i;:::-;16774:14;;;16767:86;16910:6;16895:22;;16889:29;16880:6;16869:18;;16862:57;16976:3;16961:19;;;16955:26;16946:6;16935:18;;16928:54;-1:-1:-1;16778:5:165;15895:1117;-1:-1:-1;15895:1117:165:o;17017:128::-;17084:9;;;17105:11;;;17102:37;;;17119:18;;:::i;17357:136::-;17392:3;-1:-1:-1;;;17413:22:165;;17410:48;;17438:18;;:::i;:::-;-1:-1:-1;17478:1:165;17474:13;;17357:136::o;17777:384::-;-1:-1:-1;;;;;;17962:33:165;;17950:46;;18019:13;;17932:3;;18041:74;18019:13;18104:1;18095:11;;18088:4;18076:17;;18041:74;:::i;:::-;18135:16;;;;18153:1;18131:24;;17777:384;-1:-1:-1;;;17777:384:165:o;18166:287::-;18295:3;18333:6;18327:13;18349:66;18408:6;18403:3;18396:4;18388:6;18384:17;18349:66;:::i;:::-;18431:16;;;;;18166:287;-1:-1:-1;;18166:287:165:o;18458:127::-;18519:10;18514:3;18510:20;18507:1;18500:31;18550:4;18547:1;18540:15;18574:4;18571:1;18564:15;18590:112;18622:1;18648;18638:35;;18653:18;;:::i;:::-;-1:-1:-1;18687:9:165;;18590:112::o;19936:446::-;20186:2;20175:9;20168:21;20225:1;20220:2;20209:9;20205:18;20198:29;-1:-1:-1;;;20258:2:165;20247:9;20243:18;20236:35;20309:3;20302:4;20291:9;20287:20;20280:33;20149:4;20330:46;20371:3;20360:9;20356:19;20348:6;20330:46;:::i;20387:291::-;20564:2;20553:9;20546:21;20527:4;20584:45;20625:2;20614:9;20610:18;20602:6;20584:45;:::i;:::-;20576:53;;20665:6;20660:2;20649:9;20645:18;20638:34;20387:291;;;;;:::o;21660:499::-;21913:25;;;21969:2;21954:18;;21947:34;;;;22012:2;21997:18;;21990:34;;;;-1:-1:-1;;;;;22060:32:165;22055:2;22040:18;;22033:60;22137:14;22130:22;22124:3;22109:19;;22102:51;21900:3;21885:19;;21660:499::o;22164:245::-;22243:6;22251;22304:2;22292:9;22283:7;22279:23;22275:32;22272:52;;;22320:1;22317;22310:12;22272:52;-1:-1:-1;;22343:16:165;;22399:2;22384:18;;;22378:25;22343:16;;22378:25;;-1:-1:-1;22164:245:165:o;22414:200::-;22480:9;;;22453:4;22508:9;;22536:10;;22548:12;;;22532:29;22571:12;;;22563:21;;22529:56;22526:82;;;22588:18;;:::i;:::-;22526:82;22414:200;;;;:::o;24949:193::-;24988:1;25014;25004:35;;25019:18;;:::i;:::-;-1:-1:-1;;;25055:18:165;;-1:-1:-1;;25075:13:165;;25051:38;25048:64;;;25092:18;;:::i;:::-;-1:-1:-1;25126:10:165;;24949:193::o",
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
    "test_checkpoint_failure_future_checkpoint()": "96a5c8df",
    "test_checkpoint_failure_invalid_checkpoint_time()": "bfa96f3f",
    "test_checkpoint_in_the_past()": "8533530e",
    "test_checkpoint_latest_checkpoint()": "f1261180",
    "test_checkpoint_preset_checkpoint()": "6861fc2a",
    "test_checkpoint_redemption()": "7892faea",
    "whaleTransfer(address,address,address)": "10716760",
    "whaleTransfer(address,address,uint256,address)": "3e5e0d26",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[],"name":"FixedPointMath_InvalidExponent","type":"error"},{"inputs":[],"name":"FixedPointMath_InvalidInput","type":"error"},{"inputs":[],"name":"WhaleBalanceExceeded","type":"error"},{"inputs":[],"name":"WhaleIsContract","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"CloseLong","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"CloseShort","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"version","type":"uint256"},{"indexed":false,"internalType":"address","name":"hyperdrive","type":"address"},{"components":[{"internalType":"contract IERC20","name":"baseToken","type":"address"},{"internalType":"uint256","name":"initialSharePrice","type":"uint256"},{"internalType":"uint256","name":"minimumShareReserves","type":"uint256"},{"internalType":"uint256","name":"minimumTransactionAmount","type":"uint256"},{"internalType":"uint256","name":"positionDuration","type":"uint256"},{"internalType":"uint256","name":"checkpointDuration","type":"uint256"},{"internalType":"uint256","name":"timeStretch","type":"uint256"},{"internalType":"address","name":"governance","type":"address"},{"internalType":"address","name":"feeCollector","type":"address"},{"components":[{"internalType":"uint256","name":"curve","type":"uint256"},{"internalType":"uint256","name":"flat","type":"uint256"},{"internalType":"uint256","name":"governance","type":"uint256"}],"internalType":"struct IHyperdrive.Fees","name":"fees","type":"tuple"},{"internalType":"uint256","name":"oracleSize","type":"uint256"},{"internalType":"uint256","name":"updateGap","type":"uint256"}],"indexed":false,"internalType":"struct IHyperdrive.PoolConfig","name":"config","type":"tuple"},{"indexed":false,"internalType":"address","name":"linkerFactory","type":"address"},{"indexed":false,"internalType":"bytes32","name":"linkerCodeHash","type":"bytes32"},{"indexed":false,"internalType":"bytes32[]","name":"extraData","type":"bytes32[]"}],"name":"Deployed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"apr","type":"uint256"}],"name":"Initialize","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"OpenLong","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"OpenShort","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawalShareAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"}],"name":"RedeemWithdrawalShares","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"withdrawalShareAmount","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"}],"name":"log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"","type":"address"}],"name":"log_address","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[]","name":"val","type":"uint256[]"}],"name":"log_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"int256[]","name":"val","type":"int256[]"}],"name":"log_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"val","type":"address[]"}],"name":"log_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"","type":"bytes"}],"name":"log_bytes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"","type":"bytes32"}],"name":"log_bytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"int256","name":"","type":"int256"}],"name":"log_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"address","name":"val","type":"address"}],"name":"log_named_address","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"uint256[]","name":"val","type":"uint256[]"}],"name":"log_named_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"int256[]","name":"val","type":"int256[]"}],"name":"log_named_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"address[]","name":"val","type":"address[]"}],"name":"log_named_array","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"bytes","name":"val","type":"bytes"}],"name":"log_named_bytes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"bytes32","name":"val","type":"bytes32"}],"name":"log_named_bytes32","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"int256","name":"val","type":"int256"},{"indexed":false,"internalType":"uint256","name":"decimals","type":"uint256"}],"name":"log_named_decimal_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"uint256","name":"val","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"decimals","type":"uint256"}],"name":"log_named_decimal_uint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"int256","name":"val","type":"int256"}],"name":"log_named_int","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"string","name":"val","type":"string"}],"name":"log_named_string","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"key","type":"string"},{"indexed":false,"internalType":"uint256","name":"val","type":"uint256"}],"name":"log_named_uint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"","type":"string"}],"name":"log_string","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"log_uint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes","name":"","type":"bytes"}],"name":"logs","type":"event"},{"inputs":[],"name":"IS_TEST","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"int256","name":"_delta","type":"int256"},{"internalType":"uint256","name":"_targetValue","type":"uint256"}],"name":"assertWithDelta","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"createUser","outputs":[{"internalType":"address","name":"_user","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"excludeArtifacts","outputs":[{"internalType":"string[]","name":"excludedArtifacts_","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"excludeContracts","outputs":[{"internalType":"address[]","name":"excludedContracts_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"excludeSenders","outputs":[{"internalType":"address[]","name":"excludedSenders_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"failed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"targetArtifactSelectors","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bytes4[]","name":"selectors","type":"bytes4[]"}],"internalType":"struct StdInvariant.FuzzSelector[]","name":"targetedArtifactSelectors_","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetArtifacts","outputs":[{"internalType":"string[]","name":"targetedArtifacts_","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetContracts","outputs":[{"internalType":"address[]","name":"targetedContracts_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetSelectors","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bytes4[]","name":"selectors","type":"bytes4[]"}],"internalType":"struct StdInvariant.FuzzSelector[]","name":"targetedSelectors_","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"targetSenders","outputs":[{"internalType":"address[]","name":"targetedSenders_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"test_checkpoint_failure_future_checkpoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"test_checkpoint_failure_invalid_checkpoint_time","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"test_checkpoint_in_the_past","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"test_checkpoint_latest_checkpoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"test_checkpoint_preset_checkpoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"test_checkpoint_redemption","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"whale","type":"address"},{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"}],"name":"whaleTransfer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"whale","type":"address"},{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"whaleTransfer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"errors":{"FixedPointMath_InvalidExponent()":[{"notice":"###################### ### FixedPointMath ### ######################"}]},"events":{"Deployed(uint256,address,(address,uint256,uint256,uint256,uint256,uint256,uint256,address,address,(uint256,uint256,uint256),uint256,uint256),address,bytes32,bytes32[])":{"notice":"Event Utils ///"}},"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"test/units/hyperdrive/CheckpointTest.t.sol":"CheckpointTest"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@aave/=lib/aave-v3-core/contracts/",":aave-v3-core/=lib/aave-v3-core/",":create3-factory/=lib/yield-daddy/lib/create3-factory/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/",":yield-daddy/=lib/yield-daddy/","lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"]},"sources":{"contracts/src/DataProvider.sol":{"keccak256":"0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30","license":"Apache-2.0","urls":["bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212","dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7"]},"contracts/src/Hyperdrive.sol":{"keccak256":"0xd2e2e47f45dab0447497a20b8ef54960190d3c01ce2f53dbfae6abe2d095f1f5","license":"Apache-2.0","urls":["bzz-raw://c8d8f034071cf69e922975cddb6123fe125862688ecbe2c3fc01c1f235a4a72e","dweb:/ipfs/QmQraAs5iFKtRYQTqFmpRLh6NSyYxbqrBMFgkGJL2E2ZCN"]},"contracts/src/HyperdriveBase.sol":{"keccak256":"0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95","license":"Apache-2.0","urls":["bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e","dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn"]},"contracts/src/HyperdriveDataProvider.sol":{"keccak256":"0x548a0d3b7b46f4e7f99745aa1b83ac1d264e6e82af61e6580a05335bd94bc39d","license":"Apache-2.0","urls":["bzz-raw://6505d7514910ff3a44932a42376f323f739204d6154bc4b997c60e5cbee050e5","dweb:/ipfs/QmdKke5nXGZDxAcGDXFenJ6emxSUhE2QT8rdBZ8JhNpFaA"]},"contracts/src/HyperdriveLP.sol":{"keccak256":"0xe2f37ecc51c9eba59c4b5c13549ed4cdc0415d8af1902442d52ed012e4b9c22a","license":"Apache-2.0","urls":["bzz-raw://53efc435c55fa29822d5ae3271cc42bf4ae096e4dfc9fb150a410f39cd43651e","dweb:/ipfs/QmQgRowy4YqCsxV9A9mFyxzGF7FigC4Huc66Cxy8YfeYAv"]},"contracts/src/HyperdriveLong.sol":{"keccak256":"0x004b7cadd3e9090ca6f5a59510696e3b844839e6305c9076cd3fd31d9b0a3188","license":"Apache-2.0","urls":["bzz-raw://da04266d0c817b69cde906770f047e9add9f8983a12553413c67b2c60ff15c2f","dweb:/ipfs/QmNmKcdUVGLmjxMvUq8kyETZrkfW43JDXfcPHJfP4GrF6V"]},"contracts/src/HyperdriveShort.sol":{"keccak256":"0x3bdfd1e33a2498c6183dfb1684b0db7e6775e9ae2e1097800aeccc869b9e2baa","license":"Apache-2.0","urls":["bzz-raw://e5c9337dfb069d806644ea7ceabe425222f1bc5766248648ba7a9a420715bee8","dweb:/ipfs/QmaL1ZHX4zyAXxMqNmJB4mZ5o54JUTWLnTrKGMBJmbnRDa"]},"contracts/src/HyperdriveStorage.sol":{"keccak256":"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc","license":"Apache-2.0","urls":["bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a","dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY"]},"contracts/src/HyperdriveTWAP.sol":{"keccak256":"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b","license":"Apache-2.0","urls":["bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc","dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac"]},"contracts/src/factory/HyperdriveFactory.sol":{"keccak256":"0x92862278de3e329a32c6f200088a183ecd257f1071eef6e8499a9ca86f93bdde","license":"Apache-2.0","urls":["bzz-raw://9476f0cd7dc221cbc1373c59a3a0bd264784cf3985014ae560422e465c9142a1","dweb:/ipfs/QmXEZf6YynAAvN2iodwNifooWSo2fRfFTRXnBwYS3pb5q2"]},"contracts/src/interfaces/IERC20.sol":{"keccak256":"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c","license":"MIT","urls":["bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672","dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"]},"contracts/src/interfaces/IForwarderFactory.sol":{"keccak256":"0x939624fbf6490ff4e9309638d1ed36ba68cfd6a147763810dcbb2bb1efd326af","license":"Apache-2.0","urls":["bzz-raw://aba4213925b95149b6524719699e6f1642a99e7e13070cc9348b11f704a23ba3","dweb:/ipfs/QmPjwGGY3UDYzw56ccvxz7cq6oSTphKqEDPvVdrX7qAPaF"]},"contracts/src/interfaces/IHyperdrive.sol":{"keccak256":"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5","license":"Apache-2.0","urls":["bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e","dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"]},"contracts/src/interfaces/IHyperdriveDeployer.sol":{"keccak256":"0x7f6184ad6c3b28650b6644e74d7fdf4af5854c6e80f813da468a496aeb8c6da0","license":"Apache-2.0","urls":["bzz-raw://ce31b67fc912729ee56d8b53abf699882ea44ddd4c62052dc1685c9694685587","dweb:/ipfs/QmbUBE3V1ahsVKrKzHs8Ho5H4U1XVB182BsRDFgt4ZjLZB"]},"contracts/src/interfaces/IHyperdriveRead.sol":{"keccak256":"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3","license":"Apache-2.0","urls":["bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993","dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"]},"contracts/src/interfaces/IHyperdriveWrite.sol":{"keccak256":"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8","license":"Apache-2.0","urls":["bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467","dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"]},"contracts/src/interfaces/IMultiToken.sol":{"keccak256":"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a","license":"Apache-2.0","urls":["bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0","dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"]},"contracts/src/interfaces/IMultiTokenMetadata.sol":{"keccak256":"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc","license":"Apache-2.0","urls":["bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87","dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"]},"contracts/src/interfaces/IMultiTokenRead.sol":{"keccak256":"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05","license":"Apache-2.0","urls":["bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939","dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"]},"contracts/src/interfaces/IMultiTokenWrite.sol":{"keccak256":"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8","license":"Apache-2.0","urls":["bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a","dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"]},"contracts/src/libraries/AssetId.sol":{"keccak256":"0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384","license":"Apache-2.0","urls":["bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806","dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT"]},"contracts/src/libraries/FixedPointMath.sol":{"keccak256":"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd","license":"Apache-2.0","urls":["bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b","dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"]},"contracts/src/libraries/HyperdriveMath.sol":{"keccak256":"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2","license":"Apache-2.0","urls":["bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75","dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb"]},"contracts/src/libraries/SafeCast.sol":{"keccak256":"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f","license":"Apache-2.0","urls":["bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5","dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"]},"contracts/src/libraries/YieldSpaceMath.sol":{"keccak256":"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04","license":"Apache-2.0","urls":["bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef","dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr"]},"contracts/src/token/ERC20Forwarder.sol":{"keccak256":"0x50120439e5ae2657b37afa8133f4fb35ebdcce204b4a1a2fd3fcd9ba65dbe158","license":"Apache-2.0","urls":["bzz-raw://7d6dc4d9a8949c0351386b3a03410223cfa482783d28db1489911e6ab9eb1034","dweb:/ipfs/QmRRVLeeRsgsL9kXxxd754dv3me7FXfeME8937VzhAZS6p"]},"contracts/src/token/ForwarderFactory.sol":{"keccak256":"0x96127d3ac11ff1b96bc816735913365618adf73ba6e9304b81ec59d32813106b","license":"Apache-2.0","urls":["bzz-raw://f2a4c35ad20e307720ed4c643abd739084ae5fabd71112bc2ac9cb576045842e","dweb:/ipfs/QmcoXSNSn4sVSxXFneGFFuR7W1ykbX7Pk79vNW37s7fDQZ"]},"contracts/src/token/MultiToken.sol":{"keccak256":"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19","license":"Apache-2.0","urls":["bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98","dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy"]},"contracts/src/token/MultiTokenDataProvider.sol":{"keccak256":"0x1b2f98b9d6feaf0fc13ac4010dee2d2f49ecd33bf75d0c5be7e3318a6df2620f","license":"Apache-2.0","urls":["bzz-raw://4230f69efbb31e8194a78fb3ef5e2a69d349fe6f8b8aa4cf6b280484f3653cef","dweb:/ipfs/QmScBP66WMXxXh28ScmU6SgSCWYhsRQHpZ755NyxTfCJoV"]},"contracts/src/token/MultiTokenStorage.sol":{"keccak256":"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8","license":"Apache-2.0","urls":["bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6","dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"]},"contracts/test/ERC20Mintable.sol":{"keccak256":"0x43aae73d059561cab83b67044a3602c1899f584fda312edc1640c575a6a04389","license":"Apache-2.0","urls":["bzz-raw://8eac46f31959bc5111826cc457473b1b3f0257588607c98c7adbe376f9365f65","dweb:/ipfs/QmQjWWRgve9Cc8Fs96QPekK1gVJNwSdqEjmMaYxy8mw7ui"]},"lib/forge-std/lib/ds-test/src/test.sol":{"keccak256":"0x8758531bbac3972efcf1fa46383dbe1d276406fe527bc7abb2f236486278e83b","license":"GPL-3.0-or-later","urls":["bzz-raw://1f64264d61506847acf8761e84aff690cebe830958eac00bac7924d8be569240","dweb:/ipfs/QmSekDJvJ82MZAmr63n7YvfLzQ7gS4NLSHPmHL3GN3rw8k"]},"lib/forge-std/src/Base.sol":{"keccak256":"0x4ff1a785311017d1eedb1b4737956fa383067ad34eb439abfec1d989754dde1c","license":"MIT","urls":["bzz-raw://f553622969b9fdb930246704a4c10dfaee6b1a4468c142fa7eb9dc292a438224","dweb:/ipfs/QmcxqHnqdQsMVtgsfH9VNLmZ3g7GhgNagfq7yvNCDcCHFK"]},"lib/forge-std/src/StdAssertions.sol":{"keccak256":"0x1a0dee4d8b2c81e9318e87dd85ef009467ebf7dba6575530d1fce94d34dbae60","license":"MIT","urls":["bzz-raw://ddd790c86ddde1013d1f7a552a80168eacf2e9244077f96799180644ad523a5b","dweb:/ipfs/QmYinBFt9uEVFXP9ytT9CDoNpzWieQVgLWRFRNiypMzJaL"]},"lib/forge-std/src/StdChains.sol":{"keccak256":"0xc576f8b81bf19c853baa1fdc23ddc3b9fa1856d5749b01a4f99bed73db7d847d","license":"MIT","urls":["bzz-raw://fad0b975990e50941e255397925be1695b1ec06c3649decdbf759f42e49638d4","dweb:/ipfs/QmeeRsbdgzUoPj1GWZZaoTsiEEuSGfjx7MpykgfxcMa1r1"]},"lib/forge-std/src/StdCheats.sol":{"keccak256":"0x2e1b4b99283c16efaf155f7e55ea357943cf6e61fc02aad060534349f63b6cd5","license":"MIT","urls":["bzz-raw://d471a35903e8a367a145ca5b5955caf691c723fe1117c6dcffd928d9f8d7c95a","dweb:/ipfs/QmXGnFUGiX9APL8xit7NZQEYBoEL3wWyW1YyFoJQd2pGPe"]},"lib/forge-std/src/StdError.sol":{"keccak256":"0xbf477b11a42d7611696956546bcfaa29317d1166bf65e402344599c05943fc77","license":"MIT","urls":["bzz-raw://bc2e117d1135e030862b96a6526a43feb38d396cc79857f1fb696d4eff0e5fd6","dweb:/ipfs/QmdSuQ5RrQudTLsNmWXGEeVJX8gR5U9XPm6m4dwwuQnJrj"]},"lib/forge-std/src/StdInvariant.sol":{"keccak256":"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1","license":"MIT","urls":["bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c","dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss"]},"lib/forge-std/src/StdJson.sol":{"keccak256":"0x9e2a7521190c462a0667706385f1c52a816220a9813ca8ac520fba7ba45d660b","license":"MIT","urls":["bzz-raw://7d23017fe6570b28130a731b86179352b93a5fb5af32f11559837afc1186293c","dweb:/ipfs/QmR3p6zG5Kmcr8gKocFCSopLHfXv1AziPJbH17nKyMxwxV"]},"lib/forge-std/src/StdMath.sol":{"keccak256":"0xd90ad4fd8aeaeb8929964e686e769fdedd5eded3fc3815df194a0ab9f91a3fb2","license":"MIT","urls":["bzz-raw://7919b70f636c7b805223992f28ad1ad0145d6c1385b5931a3589aface5fe6c92","dweb:/ipfs/QmY7FRaULwoGgFteF8GawjQJRfasNgpWnU2aiMsFrYpuTC"]},"lib/forge-std/src/StdStorage.sol":{"keccak256":"0x391a28a2e54aea51a6fb03a3a48035304ca4d24bc669ddf3d4c152c7162e514d","license":"MIT","urls":["bzz-raw://475fd0d87ccb0fdc4418dea2babffb4adb4aafb817e61f7ef31c2303f10c6c26","dweb:/ipfs/QmQgcgtZxpkW6DRmbJszN1F8mU6zhaTZGdWWsj77yCuWN9"]},"lib/forge-std/src/StdStyle.sol":{"keccak256":"0x43e2a8a9b9c2574dabe74f11adf6f782df218f463540e3b5b563609fe108597d","license":"MIT","urls":["bzz-raw://51363ca97404cf4128e1141428949768c31929e75e014b02c85e887fbbb4f1b8","dweb:/ipfs/QmVhtbQc2fU4rRmbcfBtz34mAgG4BAZBsbna1Ca4SkoPsK"]},"lib/forge-std/src/StdUtils.sol":{"keccak256":"0x8758c42ba9d9e46868b796e2330ac239006ede07bd438a4b36dd6f2c47d27dc1","license":"MIT","urls":["bzz-raw://11f5752e0187b1e3631b875efdbe05d45929d05f1c1717105a9115d0a6628140","dweb:/ipfs/QmUKkx9jfsUvjyYBw45RvrW1hTFXDXi2Jv5tbHP86mnzpi"]},"lib/forge-std/src/Test.sol":{"keccak256":"0x39b1729d5868c8e94ab8af16751eb500a17fe3870dc627d2b7ddcd5df18d7ad0","license":"MIT","urls":["bzz-raw://1568c82aff125cc4b0fc168be9d67ac313f469a3c7405c5493caecaaaecfb765","dweb:/ipfs/QmXByuZReJsdu1jDcxj1FcmpcUnzoBcqybn9kWgDAECWri"]},"lib/forge-std/src/Vm.sol":{"keccak256":"0xc37bdacd465b44feb78cdf9a86f62255884be84acd5a4b175f48f004386ce8f4","license":"MIT","urls":["bzz-raw://8109a9cb6c5b2f6c137e4bc119ce468d88eaf926ed60558e997a5505827c9241","dweb:/ipfs/QmR1H3wWXwhYD4bXgFFxNubnEZYB28WvvUUHkL9oZx14cx"]},"lib/forge-std/src/console.sol":{"keccak256":"0x91d5413c2434ca58fd278b6e1e79fd98d10c83931cc2596a6038eee4daeb34ba","license":"MIT","urls":["bzz-raw://91ccea707361e48b9b7a161fe81f496b9932bc471e9c4e4e1e9c283f2453cc70","dweb:/ipfs/QmcB66sZhQ6Kz7MUHcLE78YXRUZxoZnnxZjN6yATsbB2ec"]},"lib/forge-std/src/console2.sol":{"keccak256":"0x954646445d1014c3cd85c7918f5e7adeeca5ee44b68c00bafa237e597a4e35ea","license":"MIT","urls":["bzz-raw://516fa3be52da4763147175bfba4be0aa011fadbb0c1afb01f97265bd4cee7973","dweb:/ipfs/QmdixAyMJefx7qePChgdxcBH5MxhmN7vsqPuPLx3CgrVmF"]},"lib/forge-std/src/interfaces/IMulticall3.sol":{"keccak256":"0x7aac1389150499a922d1f9ef5749c908cef127cb2075b92fa17e9cb611263d0a","license":"MIT","urls":["bzz-raw://d95ebb7c7c463e08ebc12dab639945752fb2480acfc6e86da32f72732a7fd0c0","dweb:/ipfs/QmNXK8P8oPWwajsQHvAHw3JPyQidPLCGQN3hWu1Lk6PBL2"]},"lib/forge-std/src/safeconsole.sol":{"keccak256":"0xbaf41fdc6c54297e7cd8250e48b0f20eaac918e342a1028cef3f9a52ac086381","license":"MIT","urls":["bzz-raw://a500ad81dea226f9910e6b50f99a9ff930105e393a692cbfb2185e4cdb4424ae","dweb:/ipfs/QmVbUQpXNMmMWRiy4FvBNczzq46BMGfUoBikvSHNiCxVTq"]},"lib/openzeppelin-contracts/contracts/access/AccessControl.sol":{"keccak256":"0xbc7fc49ba05b312e318d3d7b517ed0254489320bedef2e91f80c3bd4e904fc0c","license":"MIT","urls":["bzz-raw://e411d112f89fcadbff89da0579d61eafdf76272aaa91fb18728a86337440bb88","dweb:/ipfs/QmfKJqMJ2CF1mw4UwDajoFdrrfKWSZwetkAByUP56EeqSQ"]},"lib/openzeppelin-contracts/contracts/access/AccessControlEnumerable.sol":{"keccak256":"0x13f5e15f2a0650c0b6aaee2ef19e89eaf4870d6e79662d572a393334c1397247","license":"MIT","urls":["bzz-raw://7ee05f28f549a5d6515e152580716b87636ed4bfab9812499a6e3803df88288b","dweb:/ipfs/QmeEnhdwY1t5Y3YU5a4ffzgXuToydH2PNdNxV9W7dEPRQJ"]},"lib/openzeppelin-contracts/contracts/access/IAccessControl.sol":{"keccak256":"0x59ce320a585d7e1f163cd70390a0ef2ff9cec832e2aa544293a00692465a7a57","license":"MIT","urls":["bzz-raw://bb2c137c343ef0c4c7ce7b18c1d108afdc9d315a04e48307288d2d05adcbde3a","dweb:/ipfs/QmUxhrAQM3MM3FF5j7AtcXLXguWCJBHJ14BRdVtuoQc8Fh"]},"lib/openzeppelin-contracts/contracts/access/IAccessControlEnumerable.sol":{"keccak256":"0xba4459ab871dfa300f5212c6c30178b63898c03533a1ede28436f11546626676","license":"MIT","urls":["bzz-raw://3dcc7b09bfa6e18aab262ca372f4a9b1fc82e294b430706a4e1378cf58e6a276","dweb:/ipfs/QmT8oSAcesdctR15HMLhr2a1HRpXymxdjTfdtfTYJcj2N2"]},"lib/openzeppelin-contracts/contracts/security/Pausable.sol":{"keccak256":"0x0849d93b16c9940beb286a7864ed02724b248b93e0d80ef6355af5ef15c64773","license":"MIT","urls":["bzz-raw://4ddabb16009cd17eaca3143feadf450ac13e72919ebe2ca50e00f61cb78bc004","dweb:/ipfs/QmSPwPxX7d6TTWakN5jy5wsaGkS1y9TW8fuhGSraMkLk2B"]},"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol":{"keccak256":"0xb62681ccbf84aef125665cfdfc0bf13b532925b1a520d6c935913560f539a31b","license":"MIT","urls":["bzz-raw://21dbc5b8aede7dee8f0e3bf296a58270f376f8e40d6f8becccde5b3cf34bc8df","dweb:/ipfs/QmfHPWrtGiMNhTtLDYtqSd1eVd35Zqgd4PW9bR3i23oJgg"]},"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0","license":"MIT","urls":["bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1","dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Burnable.sol":{"keccak256":"0x0d19410453cda55960a818e02bd7c18952a5c8fe7a3036e81f0d599f34487a7b","license":"MIT","urls":["bzz-raw://4c0f62d3d5bef22b5ca00cc3903e7de6152cb68d2d22401a463f373cda54c00f","dweb:/ipfs/QmSfzjZux7LC7NW2f7rjCXTHeFMUCWERqDkhpCTBy7kxTe"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/ERC20Pausable.sol":{"keccak256":"0xbced39fde26b27a8db47f4c705ea3f81fad997052afefc957fe3436aa06c3d5a","license":"MIT","urls":["bzz-raw://3b6c5e06e1bd9222b57c1855b2e18646357efe961f629a8ce69ac0de6bd07790","dweb:/ipfs/QmcYQWqN1222Dmrq1uwAQq6wvU5RRBtFGjQM6h4Fopigu9"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol":{"keccak256":"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca","license":"MIT","urls":["bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd","dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":{"keccak256":"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb","license":"MIT","urls":["bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0","dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"]},"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol":{"keccak256":"0xec819d9f89eef128f291b9bfc054b9c3ce0cc11a35b5a1b52aca3620b69bafec","license":"MIT","urls":["bzz-raw://cbc9b07856f18e498852142293d8e1d98416748998be1916a4d653b1702fd0f3","dweb:/ipfs/Qmd8HNLSuqNvpqh3pZBw3ZEmDeggaog9Amt1L7RqCe4RBL"]},"lib/openzeppelin-contracts/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol":{"keccak256":"0x2cd54808b851c4db22f459065af0b7a952262741a85a73923e7a660767cd7baa","license":"MIT","urls":["bzz-raw://750c4a78e953fe92317bba7166afd0a4b7725723e5822ea1b92ffd4e72d2d36b","dweb:/ipfs/QmZNyCSrdYXGQfmB6LkbX8R6y4gGZRNh1d2pJobYBpkaRF"]},"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol":{"keccak256":"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a","license":"MIT","urls":["bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577","dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"]},"lib/openzeppelin-contracts/contracts/utils/Address.sol":{"keccak256":"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26","license":"MIT","urls":["bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f","dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]},"lib/openzeppelin-contracts/contracts/utils/Strings.sol":{"keccak256":"0x2626d8ab3dfdad0fad630c212ad146d59473d0f48b771784c61a7c1dbbea1f3f","license":"MIT","urls":["bzz-raw://d7c144532f1e7c76ac95fb6a8f617c1f740d7a73442a907eb60910e99dfa1fbf","dweb:/ipfs/QmZsGyooD6emxB8JCuugRjnRYS2MPZEL586uuV7dgC8Jng"]},"lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol":{"keccak256":"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b","license":"MIT","urls":["bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d","dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43"]},"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol":{"keccak256":"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1","license":"MIT","urls":["bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f","dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"]},"lib/openzeppelin-contracts/contracts/utils/math/Math.sol":{"keccak256":"0xbaf3bd8c64ac943fafde717797ee797c96360586b9448ea25e9872490a6e6858","license":"MIT","urls":["bzz-raw://bab65b9b5ea0c68e96e1a73460db616042f639d144a6a75595434cfa2a483ed4","dweb:/ipfs/QmUgwEcWXaEu4VSpymiVq8tZYKgA44HPMWZowpg2L8Kiij"]},"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol":{"keccak256":"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc","license":"MIT","urls":["bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7","dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6"]},"lib/openzeppelin-contracts/contracts/utils/structs/EnumerableSet.sol":{"keccak256":"0xacbaaa9be521944f83d2852379e1f40b28ada61a256493474f6cdc9b59620598","license":"MIT","urls":["bzz-raw://15aa625baf68ba948a074361f38f7cf0e6198ba67d1d808c43865409296f1e72","dweb:/ipfs/Qmbcae8x18H5Uzp2DsQcfZH3PMxokhhVCcwks22CDqVsPQ"]},"lib/solmate/src/auth/Auth.sol":{"keccak256":"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c","license":"AGPL-3.0-only","urls":["bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac","dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"]},"lib/solmate/src/auth/authorities/MultiRolesAuthority.sol":{"keccak256":"0x5544e61f98c0e80a8c4b9b691952122d3547ade0c0ad830ae6d5fd65f2d0dbe3","license":"AGPL-3.0-only","urls":["bzz-raw://232d9054e5c087e0f416d995753051d352b9f24c5bd823be69a6061757fd1fef","dweb:/ipfs/QmZTwcv8YycBRUWX3NLrxNyKud2SCGtfZJiCasTXpjKM4B"]},"lib/solmate/src/tokens/ERC20.sol":{"keccak256":"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10","license":"AGPL-3.0-only","urls":["bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35","dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"]},"lib/solmate/src/utils/ReentrancyGuard.sol":{"keccak256":"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01","license":"AGPL-3.0-only","urls":["bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800","dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"]},"test/mocks/MockHyperdrive.sol":{"keccak256":"0x1b6b377dd429b195da1bd51223a6db4a26b0580db82217e26278a5ecd13ae465","license":"Apache-2.0","urls":["bzz-raw://b933615c0b1455400c66f3be95db8dc576efff91cfb9c805cc642549d3177378","dweb:/ipfs/QmQDaiWtH81BeMFHjkkNU2NA1x5bLUJsSZfufG6UKtCDAn"]},"test/units/hyperdrive/CheckpointTest.t.sol":{"keccak256":"0x172ccbc9fa5c47b55bdf7960549b03808ed282f899dd03fae8843bd96b133d53","license":"Apache-2.0","urls":["bzz-raw://5c6d352263a962267a5e0f23ecfdef2dc9dc038fe505bfe23afc807fde0b017c","dweb:/ipfs/QmdV5DCiQfLGsB33ZBfomCSx8Gqp6uvYMFU37LjopYvD9b"]},"test/utils/BaseTest.sol":{"keccak256":"0xe0bcf96bc6f6e483054204b1b888eebc08b15e39a550d9496efff6f5eb108ae6","license":"Apache-2.0","urls":["bzz-raw://6f77f4697e7cbb2a7c88939d6095784b18cb6dba9910aaf35723ba44c1598dbd","dweb:/ipfs/QmQayrq4hkUJqeQUS661YpCM2hC3T5o7UbSfeWxE5X2RvD"]},"test/utils/Constants.sol":{"keccak256":"0xd7e0611edda0191fb3a6bf14a723975601dc64b1271584468a3b309ddf1b9e5b","license":"Apache-2.0","urls":["bzz-raw://e7e7f38a2b927f3c3e53e2c119537d8112c1ba61dfd56aeead7494b38a5277b0","dweb:/ipfs/QmbaBBZKEJ857m3NDUcsTmemb93ajfuQjsjVNJVY2tRHs1"]},"test/utils/HyperdriveTest.sol":{"keccak256":"0xde25a9cec06c81a10e282e3b2a0e11f8c6a191608c62e7dbc154e1c224d01f16","license":"Apache-2.0","urls":["bzz-raw://2ec31f6c95c9f383d3d966ba5b2693c216b4f6aeb3f48681d1e067b46f325c9b","dweb:/ipfs/QmbzjSnbyNpsz9tLX22sQKYKak6ynMtEY2LdwYvy8mwnAd"]},"test/utils/HyperdriveUtils.sol":{"keccak256":"0xc411e7547bd25ef39ae919350a801ddd87293b921906cae01a1f77457de68c9c","license":"Apache-2.0","urls":["bzz-raw://370cbaee430cce8a4a118b31efdcc4039134b67b3f7c66f1747c767a10714d82","dweb:/ipfs/QmcmLB393VxCbi8kDK4TDLXrTGD29yZKsEAcBP68BybdsN"]},"test/utils/Lib.sol":{"keccak256":"0x9af3ecc1e463f1c4fb29db82cc9039eeea604aabb322995af8937a035ebc21d2","license":"Apache-2.0","urls":["bzz-raw://62dc43b010453470063484f12d7ccec532ffde6885fdc5d6de8f9bdc4723c171","dweb:/ipfs/QmTiFUfFk2ZB1fvcqHBT1i65SxoWWorufPp7FsxczwqAQu"]}},"version":1}',
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
          name: "test_checkpoint_failure_future_checkpoint",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "test_checkpoint_failure_invalid_checkpoint_time",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "test_checkpoint_in_the_past",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "test_checkpoint_latest_checkpoint",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "test_checkpoint_preset_checkpoint",
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "function",
          name: "test_checkpoint_redemption",
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
        "test/units/hyperdrive/CheckpointTest.t.sol": "CheckpointTest",
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
      "test/units/hyperdrive/CheckpointTest.t.sol": {
        keccak256:
          "0x172ccbc9fa5c47b55bdf7960549b03808ed282f899dd03fae8843bd96b133d53",
        urls: [
          "bzz-raw://5c6d352263a962267a5e0f23ecfdef2dc9dc038fe505bfe23afc807fde0b017c",
          "dweb:/ipfs/QmdV5DCiQfLGsB33ZBfomCSx8Gqp6uvYMFU37LjopYvD9b",
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
    absolutePath: "test/units/hyperdrive/CheckpointTest.t.sol",
    id: 97150,
    exportedSymbols: {
      CheckpointTest: [97149],
      HyperdriveTest: [120941],
      HyperdriveUtils: [122442],
      IHyperdrive: [7103],
      MockHyperdrive: [92554],
    },
    nodeType: "SourceUnit",
    src: "39:6898:140",
    nodes: [
      {
        id: 96720,
        nodeType: "PragmaDirective",
        src: "39:23:140",
        nodes: [],
        literals: ["solidity", "0.8", ".19"],
      },
      {
        id: 96722,
        nodeType: "ImportDirective",
        src: "64:71:140",
        nodes: [],
        absolutePath: "contracts/src/interfaces/IHyperdrive.sol",
        file: "contracts/src/interfaces/IHyperdrive.sol",
        nameLocation: "-1:-1:-1",
        scope: 97150,
        sourceUnit: 7104,
        symbolAliases: [
          {
            foreign: {
              id: 96721,
              name: "IHyperdrive",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 7103,
              src: "73:11:140",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 96727,
        nodeType: "ImportDirective",
        src: "136:110:140",
        nodes: [],
        absolutePath: "test/utils/HyperdriveTest.sol",
        file: "../../utils/HyperdriveTest.sol",
        nameLocation: "-1:-1:-1",
        scope: 97150,
        sourceUnit: 120942,
        symbolAliases: [
          {
            foreign: {
              id: 96723,
              name: "HyperdriveTest",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 120941,
              src: "145:14:140",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
          {
            foreign: {
              id: 96724,
              name: "HyperdriveUtils",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 122442,
              src: "161:15:140",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
          {
            foreign: {
              id: 96725,
              name: "MockHyperdrive",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 92554,
              src: "178:14:140",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
          {
            foreign: {
              id: 96726,
              name: "IHyperdrive",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 7103,
              src: "194:11:140",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 97149,
        nodeType: "ContractDefinition",
        src: "248:6688:140",
        nodes: [
          {
            id: 96750,
            nodeType: "FunctionDefinition",
            src: "296:208:140",
            nodes: [],
            body: {
              id: 96749,
              nodeType: "Block",
              src: "358:146:140",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          expression: {
                            id: 96735,
                            name: "IHyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 7103,
                            src: "384:11:140",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_IHyperdrive_$7103_$",
                              typeString: "type(contract IHyperdrive)",
                            },
                          },
                          id: 96736,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "396:21:140",
                          memberName: "InvalidCheckpointTime",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 6986,
                          src: "384:33:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_error_pure$__$returns$__$",
                            typeString: "function () pure",
                          },
                        },
                        id: 96737,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "418:8:140",
                        memberName: "selector",
                        nodeType: "MemberAccess",
                        src: "384:42:140",
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
                        id: 96732,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "368:2:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 96734,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "371:12:140",
                      memberName: "expectRevert",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27900,
                      src: "368:15:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_bytes4_$returns$__$",
                        typeString: "function (bytes4) external",
                      },
                    },
                    id: 96738,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "368:59:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96739,
                  nodeType: "ExpressionStatement",
                  src: "368:59:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 96746,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            id: 96743,
                            name: "block",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -4,
                            src: "459:5:140",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_block",
                              typeString: "block",
                            },
                          },
                          id: 96744,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "465:9:140",
                          memberName: "timestamp",
                          nodeType: "MemberAccess",
                          src: "459:15:140",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "+",
                        rightExpression: {
                          id: 96745,
                          name: "CHECKPOINT_DURATION",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 118908,
                          src: "477:19:140",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "459:37:140",
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
                        id: 96740,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "437:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 96742,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "448:10:140",
                      memberName: "checkpoint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7198,
                      src: "437:21:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        typeString: "function (uint256) external",
                      },
                    },
                    id: 96747,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "437:60:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96748,
                  nodeType: "ExpressionStatement",
                  src: "437:60:140",
                },
              ],
            },
            functionSelector: "96a5c8df",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "test_checkpoint_failure_future_checkpoint",
            nameLocation: "305:41:140",
            parameters: {
              id: 96730,
              nodeType: "ParameterList",
              parameters: [],
              src: "346:2:140",
            },
            returnParameters: {
              id: 96731,
              nodeType: "ParameterList",
              parameters: [],
              src: "358:0:140",
            },
            scope: 97149,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            id: 96777,
            nodeType: "FunctionDefinition",
            src: "510:274:140",
            nodes: [],
            body: {
              id: 96776,
              nodeType: "Block",
              src: "578:206:140",
              nodes: [],
              statements: [
                {
                  assignments: [96754],
                  declarations: [
                    {
                      constant: false,
                      id: 96754,
                      mutability: "mutable",
                      name: "checkpointTime",
                      nameLocation: "596:14:140",
                      nodeType: "VariableDeclaration",
                      scope: 96776,
                      src: "588:22:140",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 96753,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "588:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 96759,
                  initialValue: {
                    arguments: [
                      {
                        id: 96757,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "646:10:140",
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
                      expression: {
                        id: 96755,
                        name: "HyperdriveUtils",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 122442,
                        src: "613:15:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                          typeString: "type(library HyperdriveUtils)",
                        },
                      },
                      id: 96756,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "629:16:140",
                      memberName: "latestCheckpoint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 120980,
                      src: "613:32:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                        typeString:
                          "function (contract IHyperdrive) view returns (uint256)",
                      },
                    },
                    id: 96758,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "613:44:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "588:69:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          expression: {
                            id: 96763,
                            name: "IHyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 7103,
                            src: "683:11:140",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_IHyperdrive_$7103_$",
                              typeString: "type(contract IHyperdrive)",
                            },
                          },
                          id: 96764,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "695:21:140",
                          memberName: "InvalidCheckpointTime",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 6986,
                          src: "683:33:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_error_pure$__$returns$__$",
                            typeString: "function () pure",
                          },
                        },
                        id: 96765,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "717:8:140",
                        memberName: "selector",
                        nodeType: "MemberAccess",
                        src: "683:42:140",
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
                        id: 96760,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "667:2:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 96762,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "670:12:140",
                      memberName: "expectRevert",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27900,
                      src: "667:15:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_bytes4_$returns$__$",
                        typeString: "function (bytes4) external",
                      },
                    },
                    id: 96766,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "667:59:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96767,
                  nodeType: "ExpressionStatement",
                  src: "667:59:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 96773,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          id: 96771,
                          name: "checkpointTime",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 96754,
                          src: "758:14:140",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "+",
                        rightExpression: {
                          hexValue: "31",
                          id: 96772,
                          isConstant: false,
                          isLValue: false,
                          isPure: true,
                          kind: "number",
                          lValueRequested: false,
                          nodeType: "Literal",
                          src: "775:1:140",
                          typeDescriptions: {
                            typeIdentifier: "t_rational_1_by_1",
                            typeString: "int_const 1",
                          },
                          value: "1",
                        },
                        src: "758:18:140",
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
                        id: 96768,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "736:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 96770,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "747:10:140",
                      memberName: "checkpoint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7198,
                      src: "736:21:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        typeString: "function (uint256) external",
                      },
                    },
                    id: 96774,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "736:41:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96775,
                  nodeType: "ExpressionStatement",
                  src: "736:41:140",
                },
              ],
            },
            functionSelector: "bfa96f3f",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "test_checkpoint_failure_invalid_checkpoint_time",
            nameLocation: "519:47:140",
            parameters: {
              id: 96751,
              nodeType: "ParameterList",
              parameters: [],
              src: "566:2:140",
            },
            returnParameters: {
              id: 96752,
              nodeType: "ParameterList",
              parameters: [],
              src: "578:0:140",
            },
            scope: 97149,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            id: 96885,
            nodeType: "FunctionDefinition",
            src: "790:1680:140",
            nodes: [],
            body: {
              id: 96884,
              nodeType: "Block",
              src: "844:1626:140",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 96781,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "908:5:140",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        hexValue: "302e3035653138",
                        id: 96782,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "915:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_50000000000000000_by_1",
                          typeString: "int_const 50000000000000000",
                        },
                        value: "0.05e18",
                      },
                      {
                        hexValue: "3530305f3030305f303030653138",
                        id: 96783,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "924:14:140",
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
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_rational_50000000000000000_by_1",
                          typeString: "int_const 50000000000000000",
                        },
                        {
                          typeIdentifier:
                            "t_rational_500000000000000000000000000_by_1",
                          typeString: "int_const 500000000000000000000000000",
                        },
                      ],
                      id: 96780,
                      name: "initialize",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119323, 119352, 119383],
                      referencedDeclaration: 119352,
                      src: "897:10:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 96784,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "897:42:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 96785,
                  nodeType: "ExpressionStatement",
                  src: "897:42:140",
                },
                {
                  assignments: [null, 96787],
                  declarations: [
                    null,
                    {
                      constant: false,
                      id: 96787,
                      mutability: "mutable",
                      name: "longAmount",
                      nameLocation: "997:10:140",
                      nodeType: "VariableDeclaration",
                      scope: 96884,
                      src: "989:18:140",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 96786,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "989:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 96792,
                  initialValue: {
                    arguments: [
                      {
                        id: 96789,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "1020:3:140",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        hexValue: "31305f3030305f303030653138",
                        id: 96790,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "1025:13:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_rational_10000000000000000000000000_by_1",
                          typeString: "int_const 10000000000000000000000000",
                        },
                        value: "10_000_000e18",
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
                            "t_rational_10000000000000000000000000_by_1",
                          typeString: "int_const 10000000000000000000000000",
                        },
                      ],
                      id: 96788,
                      name: "openLong",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119771, 119799, 119829],
                      referencedDeclaration: 119799,
                      src: "1011:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 96791,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1011:28:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "986:53:140",
                },
                {
                  assignments: [96794],
                  declarations: [
                    {
                      constant: false,
                      id: 96794,
                      mutability: "mutable",
                      name: "shortAmount",
                      nameLocation: "1057:11:140",
                      nodeType: "VariableDeclaration",
                      scope: 96884,
                      src: "1049:19:140",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 96793,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1049:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 96796,
                  initialValue: {
                    hexValue: "35305f303030653138",
                    id: 96795,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "1071:9:140",
                    typeDescriptions: {
                      typeIdentifier: "t_rational_50000000000000000000000_by_1",
                      typeString: "int_const 50000000000000000000000",
                    },
                    value: "50_000e18",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1049:31:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 96798,
                        name: "celine",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116799,
                        src: "1100:6:140",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 96799,
                        name: "shortAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 96794,
                        src: "1108:11:140",
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
                      id: 96797,
                      name: "openShort",
                      nodeType: "Identifier",
                      overloadedDeclarations: [120029, 120053, 120079],
                      referencedDeclaration: 120053,
                      src: "1090:9:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 96800,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1090:30:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  id: 96801,
                  nodeType: "ExpressionStatement",
                  src: "1090:30:140",
                },
                {
                  assignments: [96803],
                  declarations: [
                    {
                      constant: false,
                      id: 96803,
                      mutability: "mutable",
                      name: "sharePrice",
                      nameLocation: "1296:10:140",
                      nodeType: "VariableDeclaration",
                      scope: 96884,
                      src: "1288:18:140",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 96802,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1288:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 96808,
                  initialValue: {
                    expression: {
                      arguments: [],
                      expression: {
                        argumentTypes: [],
                        expression: {
                          id: 96804,
                          name: "hyperdrive",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 118894,
                          src: "1309:10:140",
                          typeDescriptions: {
                            typeIdentifier: "t_contract$_IHyperdrive_$7103",
                            typeString: "contract IHyperdrive",
                          },
                        },
                        id: 96805,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "1320:11:140",
                        memberName: "getPoolInfo",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 7177,
                        src: "1309:22:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                          typeString:
                            "function () view external returns (struct IHyperdrive.PoolInfo memory)",
                        },
                      },
                      id: 96806,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1309:24:140",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_PoolInfo_$6964_memory_ptr",
                        typeString: "struct IHyperdrive.PoolInfo memory",
                      },
                    },
                    id: 96807,
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: "1334:10:140",
                    memberName: "sharePrice",
                    nodeType: "MemberAccess",
                    referencedDeclaration: 6939,
                    src: "1309:35:140",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1288:56:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 96816,
                        name: "CHECKPOINT_DURATION",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118908,
                        src: "1397:19:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        hexValue: "302e31653138",
                        id: 96817,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "1418:6:140",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_100000000000000000_by_1",
                          typeString: "int_const 100000000000000000",
                        },
                        value: "0.1e18",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_rational_100000000000000000_by_1",
                          typeString: "int_const 100000000000000000",
                        },
                      ],
                      expression: {
                        arguments: [
                          {
                            arguments: [
                              {
                                id: 96812,
                                name: "hyperdrive",
                                nodeType: "Identifier",
                                overloadedDeclarations: [],
                                referencedDeclaration: 118894,
                                src: "1377:10:140",
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
                              id: 96811,
                              isConstant: false,
                              isLValue: false,
                              isPure: true,
                              lValueRequested: false,
                              nodeType: "ElementaryTypeNameExpression",
                              src: "1369:7:140",
                              typeDescriptions: {
                                typeIdentifier: "t_type$_t_address_$",
                                typeString: "type(address)",
                              },
                              typeName: {
                                id: 96810,
                                name: "address",
                                nodeType: "ElementaryTypeName",
                                src: "1369:7:140",
                                typeDescriptions: {},
                              },
                            },
                            id: 96813,
                            isConstant: false,
                            isLValue: false,
                            isPure: false,
                            kind: "typeConversion",
                            lValueRequested: false,
                            nameLocations: [],
                            names: [],
                            nodeType: "FunctionCall",
                            src: "1369:19:140",
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
                          id: 96809,
                          name: "MockHyperdrive",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 92554,
                          src: "1354:14:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_contract$_MockHyperdrive_$92554_$",
                            typeString: "type(contract MockHyperdrive)",
                          },
                        },
                        id: 96814,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "typeConversion",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "1354:35:140",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_MockHyperdrive_$92554",
                          typeString: "contract MockHyperdrive",
                        },
                      },
                      id: 96815,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1390:6:140",
                      memberName: "accrue",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 91954,
                      src: "1354:42:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        typeString: "function (uint256,int256) external",
                      },
                    },
                    id: 96818,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1354:71:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96819,
                  nodeType: "ExpressionStatement",
                  src: "1354:71:140",
                },
                {
                  assignments: [96821],
                  declarations: [
                    {
                      constant: false,
                      id: 96821,
                      mutability: "mutable",
                      name: "aprBefore",
                      nameLocation: "1476:9:140",
                      nodeType: "VariableDeclaration",
                      scope: 96884,
                      src: "1468:17:140",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 96820,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "1468:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 96826,
                  initialValue: {
                    arguments: [
                      {
                        id: 96824,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "1542:10:140",
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
                      expression: {
                        id: 96822,
                        name: "HyperdriveUtils",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 122442,
                        src: "1488:15:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                          typeString: "type(library HyperdriveUtils)",
                        },
                      },
                      id: 96823,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1504:24:140",
                      memberName: "calculateAPRFromReserves",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 121127,
                      src: "1488:40:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                        typeString:
                          "function (contract IHyperdrive) view returns (uint256)",
                      },
                    },
                    id: 96825,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1488:74:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1468:94:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 96832,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "1627:10:140",
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
                          expression: {
                            id: 96830,
                            name: "HyperdriveUtils",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 122442,
                            src: "1594:15:140",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                              typeString: "type(library HyperdriveUtils)",
                            },
                          },
                          id: 96831,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "1610:16:140",
                          memberName: "latestCheckpoint",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 120980,
                          src: "1594:32:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                            typeString:
                              "function (contract IHyperdrive) view returns (uint256)",
                          },
                        },
                        id: 96833,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "1594:44:140",
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
                      expression: {
                        id: 96827,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "1572:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 96829,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "1583:10:140",
                      memberName: "checkpoint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7198,
                      src: "1572:21:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        typeString: "function (uint256) external",
                      },
                    },
                    id: 96834,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1572:67:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96835,
                  nodeType: "ExpressionStatement",
                  src: "1572:67:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 96839,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "1785:10:140",
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
                          expression: {
                            id: 96837,
                            name: "HyperdriveUtils",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 122442,
                            src: "1744:15:140",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                              typeString: "type(library HyperdriveUtils)",
                            },
                          },
                          id: 96838,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "1760:24:140",
                          memberName: "calculateAPRFromReserves",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 121127,
                          src: "1744:40:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                            typeString:
                              "function (contract IHyperdrive) view returns (uint256)",
                          },
                        },
                        id: 96840,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "1744:52:140",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 96841,
                        name: "aprBefore",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 96821,
                        src: "1810:9:140",
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
                      id: 96836,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "1722:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 96842,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1722:107:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96843,
                  nodeType: "ExpressionStatement",
                  src: "1722:107:140",
                },
                {
                  assignments: [96848],
                  declarations: [
                    {
                      constant: false,
                      id: 96848,
                      mutability: "mutable",
                      name: "checkpoint",
                      nameLocation: "1977:10:140",
                      nodeType: "VariableDeclaration",
                      scope: 96884,
                      src: "1947:40:140",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Checkpoint_$6868_memory_ptr",
                        typeString: "struct IHyperdrive.Checkpoint",
                      },
                      typeName: {
                        id: 96847,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 96846,
                          name: "IHyperdrive.Checkpoint",
                          nameLocations: ["1947:11:140", "1959:10:140"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 6868,
                          src: "1947:22:140",
                        },
                        referencedDeclaration: 6868,
                        src: "1947:22:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_Checkpoint_$6868_storage_ptr",
                          typeString: "struct IHyperdrive.Checkpoint",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 96856,
                  initialValue: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 96853,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "2061:10:140",
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
                          expression: {
                            id: 96851,
                            name: "HyperdriveUtils",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 122442,
                            src: "2028:15:140",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                              typeString: "type(library HyperdriveUtils)",
                            },
                          },
                          id: 96852,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "2044:16:140",
                          memberName: "latestCheckpoint",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 120980,
                          src: "2028:32:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                            typeString:
                              "function (contract IHyperdrive) view returns (uint256)",
                          },
                        },
                        id: 96854,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "2028:44:140",
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
                      expression: {
                        id: 96849,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "1990:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 96850,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "2001:13:140",
                      memberName: "getCheckpoint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7148,
                      src: "1990:24:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_view$_t_uint256_$returns$_t_struct$_Checkpoint_$6868_memory_ptr_$",
                        typeString:
                          "function (uint256) view external returns (struct IHyperdrive.Checkpoint memory)",
                      },
                    },
                    id: 96855,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1990:92:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Checkpoint_$6868_memory_ptr",
                      typeString: "struct IHyperdrive.Checkpoint memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "1947:135:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 96858,
                          name: "checkpoint",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 96848,
                          src: "2101:10:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_Checkpoint_$6868_memory_ptr",
                            typeString: "struct IHyperdrive.Checkpoint memory",
                          },
                        },
                        id: 96859,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "2112:10:140",
                        memberName: "sharePrice",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6864,
                        src: "2101:21:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                      },
                      {
                        id: 96860,
                        name: "sharePrice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 96803,
                        src: "2124:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 96857,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "2092:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 96861,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2092:43:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96862,
                  nodeType: "ExpressionStatement",
                  src: "2092:43:140",
                },
                {
                  assignments: [96867],
                  declarations: [
                    {
                      constant: false,
                      id: 96867,
                      mutability: "mutable",
                      name: "poolInfo",
                      nameLocation: "2311:8:140",
                      nodeType: "VariableDeclaration",
                      scope: 96884,
                      src: "2283:36:140",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_PoolInfo_$6964_memory_ptr",
                        typeString: "struct IHyperdrive.PoolInfo",
                      },
                      typeName: {
                        id: 96866,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 96865,
                          name: "IHyperdrive.PoolInfo",
                          nameLocations: ["2283:11:140", "2295:8:140"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 6964,
                          src: "2283:20:140",
                        },
                        referencedDeclaration: 6964,
                        src: "2283:20:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_PoolInfo_$6964_storage_ptr",
                          typeString: "struct IHyperdrive.PoolInfo",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 96871,
                  initialValue: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      expression: {
                        id: 96868,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "2322:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 96869,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "2333:11:140",
                      memberName: "getPoolInfo",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7177,
                      src: "2322:22:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                        typeString:
                          "function () view external returns (struct IHyperdrive.PoolInfo memory)",
                      },
                    },
                    id: 96870,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2322:24:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_PoolInfo_$6964_memory_ptr",
                      typeString: "struct IHyperdrive.PoolInfo memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "2283:63:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 96873,
                          name: "poolInfo",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 96867,
                          src: "2366:8:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_PoolInfo_$6964_memory_ptr",
                            typeString: "struct IHyperdrive.PoolInfo memory",
                          },
                        },
                        id: 96874,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "2375:16:140",
                        memberName: "longsOutstanding",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6942,
                        src: "2366:25:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 96875,
                        name: "longAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 96787,
                        src: "2393:10:140",
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
                      id: 96872,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "2357:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 96876,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2357:47:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96877,
                  nodeType: "ExpressionStatement",
                  src: "2357:47:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 96879,
                          name: "poolInfo",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 96867,
                          src: "2423:8:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_PoolInfo_$6964_memory_ptr",
                            typeString: "struct IHyperdrive.PoolInfo memory",
                          },
                        },
                        id: 96880,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "2432:17:140",
                        memberName: "shortsOutstanding",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6948,
                        src: "2423:26:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 96881,
                        name: "shortAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 96794,
                        src: "2451:11:140",
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
                      id: 96878,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "2414:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 96882,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2414:49:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96883,
                  nodeType: "ExpressionStatement",
                  src: "2414:49:140",
                },
              ],
            },
            functionSelector: "6861fc2a",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "test_checkpoint_preset_checkpoint",
            nameLocation: "799:33:140",
            parameters: {
              id: 96778,
              nodeType: "ParameterList",
              parameters: [],
              src: "832:2:140",
            },
            returnParameters: {
              id: 96779,
              nodeType: "ParameterList",
              parameters: [],
              src: "844:0:140",
            },
            scope: 97149,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            id: 96950,
            nodeType: "FunctionDefinition",
            src: "2476:1139:140",
            nodes: [],
            body: {
              id: 96949,
              nodeType: "Block",
              src: "2530:1085:140",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 96889,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "2594:5:140",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        hexValue: "302e3035653138",
                        id: 96890,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "2601:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_50000000000000000_by_1",
                          typeString: "int_const 50000000000000000",
                        },
                        value: "0.05e18",
                      },
                      {
                        hexValue: "3530305f3030305f303030653138",
                        id: 96891,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "2610:14:140",
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
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_rational_50000000000000000_by_1",
                          typeString: "int_const 50000000000000000",
                        },
                        {
                          typeIdentifier:
                            "t_rational_500000000000000000000000000_by_1",
                          typeString: "int_const 500000000000000000000000000",
                        },
                      ],
                      id: 96888,
                      name: "initialize",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119323, 119352, 119383],
                      referencedDeclaration: 119352,
                      src: "2583:10:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 96892,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2583:42:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 96893,
                  nodeType: "ExpressionStatement",
                  src: "2583:42:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 96895,
                        name: "CHECKPOINT_DURATION",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118908,
                        src: "2840:19:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        hexValue: "302e31653138",
                        id: 96896,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "2861:6:140",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_100000000000000000_by_1",
                          typeString: "int_const 100000000000000000",
                        },
                        value: "0.1e18",
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_rational_100000000000000000_by_1",
                          typeString: "int_const 100000000000000000",
                        },
                      ],
                      id: 96894,
                      name: "advanceTime",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 120191,
                      src: "2828:11:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_int256_$returns$__$",
                        typeString: "function (uint256,int256)",
                      },
                    },
                    id: 96897,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2828:40:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96898,
                  nodeType: "ExpressionStatement",
                  src: "2828:40:140",
                },
                {
                  assignments: [96900],
                  declarations: [
                    {
                      constant: false,
                      id: 96900,
                      mutability: "mutable",
                      name: "sharePrice",
                      nameLocation: "2886:10:140",
                      nodeType: "VariableDeclaration",
                      scope: 96949,
                      src: "2878:18:140",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 96899,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "2878:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 96905,
                  initialValue: {
                    expression: {
                      arguments: [],
                      expression: {
                        argumentTypes: [],
                        expression: {
                          id: 96901,
                          name: "hyperdrive",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 118894,
                          src: "2899:10:140",
                          typeDescriptions: {
                            typeIdentifier: "t_contract$_IHyperdrive_$7103",
                            typeString: "contract IHyperdrive",
                          },
                        },
                        id: 96902,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "2910:11:140",
                        memberName: "getPoolInfo",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 7177,
                        src: "2899:22:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                          typeString:
                            "function () view external returns (struct IHyperdrive.PoolInfo memory)",
                        },
                      },
                      id: 96903,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "2899:24:140",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_PoolInfo_$6964_memory_ptr",
                        typeString: "struct IHyperdrive.PoolInfo memory",
                      },
                    },
                    id: 96904,
                    isConstant: false,
                    isLValue: true,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: "2924:10:140",
                    memberName: "sharePrice",
                    nodeType: "MemberAccess",
                    referencedDeclaration: 6939,
                    src: "2899:35:140",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "2878:56:140",
                },
                {
                  assignments: [96907],
                  declarations: [
                    {
                      constant: false,
                      id: 96907,
                      mutability: "mutable",
                      name: "aprBefore",
                      nameLocation: "2985:9:140",
                      nodeType: "VariableDeclaration",
                      scope: 96949,
                      src: "2977:17:140",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 96906,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "2977:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 96912,
                  initialValue: {
                    arguments: [
                      {
                        id: 96910,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "3051:10:140",
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
                      expression: {
                        id: 96908,
                        name: "HyperdriveUtils",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 122442,
                        src: "2997:15:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                          typeString: "type(library HyperdriveUtils)",
                        },
                      },
                      id: 96909,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "3013:24:140",
                      memberName: "calculateAPRFromReserves",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 121127,
                      src: "2997:40:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                        typeString:
                          "function (contract IHyperdrive) view returns (uint256)",
                      },
                    },
                    id: 96911,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "2997:74:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "2977:94:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 96918,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "3136:10:140",
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
                          expression: {
                            id: 96916,
                            name: "HyperdriveUtils",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 122442,
                            src: "3103:15:140",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                              typeString: "type(library HyperdriveUtils)",
                            },
                          },
                          id: 96917,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "3119:16:140",
                          memberName: "latestCheckpoint",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 120980,
                          src: "3103:32:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                            typeString:
                              "function (contract IHyperdrive) view returns (uint256)",
                          },
                        },
                        id: 96919,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "3103:44:140",
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
                      expression: {
                        id: 96913,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "3081:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 96915,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "3092:10:140",
                      memberName: "checkpoint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7198,
                      src: "3081:21:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        typeString: "function (uint256) external",
                      },
                    },
                    id: 96920,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3081:67:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96921,
                  nodeType: "ExpressionStatement",
                  src: "3081:67:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 96925,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "3294:10:140",
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
                          expression: {
                            id: 96923,
                            name: "HyperdriveUtils",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 122442,
                            src: "3253:15:140",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                              typeString: "type(library HyperdriveUtils)",
                            },
                          },
                          id: 96924,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "3269:24:140",
                          memberName: "calculateAPRFromReserves",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 121127,
                          src: "3253:40:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                            typeString:
                              "function (contract IHyperdrive) view returns (uint256)",
                          },
                        },
                        id: 96926,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "3253:52:140",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 96927,
                        name: "aprBefore",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 96907,
                        src: "3319:9:140",
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
                      id: 96922,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "3231:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 96928,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3231:107:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96929,
                  nodeType: "ExpressionStatement",
                  src: "3231:107:140",
                },
                {
                  assignments: [96934],
                  declarations: [
                    {
                      constant: false,
                      id: 96934,
                      mutability: "mutable",
                      name: "checkpoint",
                      nameLocation: "3450:10:140",
                      nodeType: "VariableDeclaration",
                      scope: 96949,
                      src: "3420:40:140",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Checkpoint_$6868_memory_ptr",
                        typeString: "struct IHyperdrive.Checkpoint",
                      },
                      typeName: {
                        id: 96933,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 96932,
                          name: "IHyperdrive.Checkpoint",
                          nameLocations: ["3420:11:140", "3432:10:140"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 6868,
                          src: "3420:22:140",
                        },
                        referencedDeclaration: 6868,
                        src: "3420:22:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_Checkpoint_$6868_storage_ptr",
                          typeString: "struct IHyperdrive.Checkpoint",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 96942,
                  initialValue: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 96939,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "3534:10:140",
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
                          expression: {
                            id: 96937,
                            name: "HyperdriveUtils",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 122442,
                            src: "3501:15:140",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                              typeString: "type(library HyperdriveUtils)",
                            },
                          },
                          id: 96938,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "3517:16:140",
                          memberName: "latestCheckpoint",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 120980,
                          src: "3501:32:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                            typeString:
                              "function (contract IHyperdrive) view returns (uint256)",
                          },
                        },
                        id: 96940,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "3501:44:140",
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
                      expression: {
                        id: 96935,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "3463:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 96936,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "3474:13:140",
                      memberName: "getCheckpoint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7148,
                      src: "3463:24:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_view$_t_uint256_$returns$_t_struct$_Checkpoint_$6868_memory_ptr_$",
                        typeString:
                          "function (uint256) view external returns (struct IHyperdrive.Checkpoint memory)",
                      },
                    },
                    id: 96941,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3463:92:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Checkpoint_$6868_memory_ptr",
                      typeString: "struct IHyperdrive.Checkpoint memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "3420:135:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 96944,
                          name: "checkpoint",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 96934,
                          src: "3574:10:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_Checkpoint_$6868_memory_ptr",
                            typeString: "struct IHyperdrive.Checkpoint memory",
                          },
                        },
                        id: 96945,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "3585:10:140",
                        memberName: "sharePrice",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6864,
                        src: "3574:21:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                      },
                      {
                        id: 96946,
                        name: "sharePrice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 96900,
                        src: "3597:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 96943,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "3565:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 96947,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3565:43:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96948,
                  nodeType: "ExpressionStatement",
                  src: "3565:43:140",
                },
              ],
            },
            functionSelector: "f1261180",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "test_checkpoint_latest_checkpoint",
            nameLocation: "2485:33:140",
            parameters: {
              id: 96886,
              nodeType: "ParameterList",
              parameters: [],
              src: "2518:2:140",
            },
            returnParameters: {
              id: 96887,
              nodeType: "ParameterList",
              parameters: [],
              src: "2530:0:140",
            },
            scope: 97149,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            id: 97033,
            nodeType: "FunctionDefinition",
            src: "3621:1445:140",
            nodes: [],
            body: {
              id: 97032,
              nodeType: "Block",
              src: "3668:1398:140",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 96954,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "3732:5:140",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        hexValue: "302e3035653138",
                        id: 96955,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "3739:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_50000000000000000_by_1",
                          typeString: "int_const 50000000000000000",
                        },
                        value: "0.05e18",
                      },
                      {
                        hexValue: "3530305f3030305f303030653138",
                        id: 96956,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "3748:14:140",
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
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_rational_50000000000000000_by_1",
                          typeString: "int_const 50000000000000000",
                        },
                        {
                          typeIdentifier:
                            "t_rational_500000000000000000000000000_by_1",
                          typeString: "int_const 500000000000000000000000000",
                        },
                      ],
                      id: 96953,
                      name: "initialize",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119323, 119352, 119383],
                      referencedDeclaration: 119352,
                      src: "3721:10:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 96957,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3721:42:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 96958,
                  nodeType: "ExpressionStatement",
                  src: "3721:42:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 96960,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "3819:3:140",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        hexValue: "31305f3030305f303030653138",
                        id: 96961,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "3824:13:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_rational_10000000000000000000000000_by_1",
                          typeString: "int_const 10000000000000000000000000",
                        },
                        value: "10_000_000e18",
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
                            "t_rational_10000000000000000000000000_by_1",
                          typeString: "int_const 10000000000000000000000000",
                        },
                      ],
                      id: 96959,
                      name: "openLong",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119771, 119799, 119829],
                      referencedDeclaration: 119799,
                      src: "3810:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 96962,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3810:28:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  id: 96963,
                  nodeType: "ExpressionStatement",
                  src: "3810:28:140",
                },
                {
                  assignments: [96965],
                  declarations: [
                    {
                      constant: false,
                      id: 96965,
                      mutability: "mutable",
                      name: "shortAmount",
                      nameLocation: "3856:11:140",
                      nodeType: "VariableDeclaration",
                      scope: 97032,
                      src: "3848:19:140",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 96964,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "3848:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 96967,
                  initialValue: {
                    hexValue: "35305f303030653138",
                    id: 96966,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "3870:9:140",
                    typeDescriptions: {
                      typeIdentifier: "t_rational_50000000000000000000000_by_1",
                      typeString: "int_const 50000000000000000000000",
                    },
                    value: "50_000e18",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "3848:31:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 96969,
                        name: "celine",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116799,
                        src: "3899:6:140",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 96970,
                        name: "shortAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 96965,
                        src: "3907:11:140",
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
                      id: 96968,
                      name: "openShort",
                      nodeType: "Identifier",
                      overloadedDeclarations: [120029, 120053, 120079],
                      referencedDeclaration: 120053,
                      src: "3889:9:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 96971,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3889:30:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  id: 96972,
                  nodeType: "ExpressionStatement",
                  src: "3889:30:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 96979,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            id: 96976,
                            name: "block",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -4,
                            src: "3965:5:140",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_block",
                              typeString: "block",
                            },
                          },
                          id: 96977,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "3971:9:140",
                          memberName: "timestamp",
                          nodeType: "MemberAccess",
                          src: "3965:15:140",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "+",
                        rightExpression: {
                          id: 96978,
                          name: "POSITION_DURATION",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 118911,
                          src: "3983:17:140",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "3965:35:140",
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
                        id: 96973,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "3957:2:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 96975,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "3960:4:140",
                      memberName: "warp",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27776,
                      src: "3957:7:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        typeString: "function (uint256) external",
                      },
                    },
                    id: 96980,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "3957:44:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96981,
                  nodeType: "ExpressionStatement",
                  src: "3957:44:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 96987,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "4099:10:140",
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
                          expression: {
                            id: 96985,
                            name: "HyperdriveUtils",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 122442,
                            src: "4066:15:140",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                              typeString: "type(library HyperdriveUtils)",
                            },
                          },
                          id: 96986,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "4082:16:140",
                          memberName: "latestCheckpoint",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 120980,
                          src: "4066:32:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                            typeString:
                              "function (contract IHyperdrive) view returns (uint256)",
                          },
                        },
                        id: 96988,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "4066:44:140",
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
                      expression: {
                        id: 96982,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "4044:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 96984,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "4055:10:140",
                      memberName: "checkpoint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7198,
                      src: "4044:21:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        typeString: "function (uint256) external",
                      },
                    },
                    id: 96989,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4044:67:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 96990,
                  nodeType: "ExpressionStatement",
                  src: "4044:67:140",
                },
                {
                  assignments: [96995],
                  declarations: [
                    {
                      constant: false,
                      id: 96995,
                      mutability: "mutable",
                      name: "checkpoint",
                      nameLocation: "4594:10:140",
                      nodeType: "VariableDeclaration",
                      scope: 97032,
                      src: "4564:40:140",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Checkpoint_$6868_memory_ptr",
                        typeString: "struct IHyperdrive.Checkpoint",
                      },
                      typeName: {
                        id: 96994,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 96993,
                          name: "IHyperdrive.Checkpoint",
                          nameLocations: ["4564:11:140", "4576:10:140"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 6868,
                          src: "4564:22:140",
                        },
                        referencedDeclaration: 6868,
                        src: "4564:22:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_Checkpoint_$6868_storage_ptr",
                          typeString: "struct IHyperdrive.Checkpoint",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 97003,
                  initialValue: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 97000,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "4678:10:140",
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
                          expression: {
                            id: 96998,
                            name: "HyperdriveUtils",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 122442,
                            src: "4645:15:140",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                              typeString: "type(library HyperdriveUtils)",
                            },
                          },
                          id: 96999,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "4661:16:140",
                          memberName: "latestCheckpoint",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 120980,
                          src: "4645:32:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                            typeString:
                              "function (contract IHyperdrive) view returns (uint256)",
                          },
                        },
                        id: 97001,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "4645:44:140",
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
                      expression: {
                        id: 96996,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "4607:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 96997,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "4618:13:140",
                      memberName: "getCheckpoint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7148,
                      src: "4607:24:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_view$_t_uint256_$returns$_t_struct$_Checkpoint_$6868_memory_ptr_$",
                        typeString:
                          "function (uint256) view external returns (struct IHyperdrive.Checkpoint memory)",
                      },
                    },
                    id: 97002,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4607:92:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Checkpoint_$6868_memory_ptr",
                      typeString: "struct IHyperdrive.Checkpoint memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "4564:135:140",
                },
                {
                  assignments: [97008],
                  declarations: [
                    {
                      constant: false,
                      id: 97008,
                      mutability: "mutable",
                      name: "poolInfo",
                      nameLocation: "4737:8:140",
                      nodeType: "VariableDeclaration",
                      scope: 97032,
                      src: "4709:36:140",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_PoolInfo_$6964_memory_ptr",
                        typeString: "struct IHyperdrive.PoolInfo",
                      },
                      typeName: {
                        id: 97007,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 97006,
                          name: "IHyperdrive.PoolInfo",
                          nameLocations: ["4709:11:140", "4721:8:140"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 6964,
                          src: "4709:20:140",
                        },
                        referencedDeclaration: 6964,
                        src: "4709:20:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_PoolInfo_$6964_storage_ptr",
                          typeString: "struct IHyperdrive.PoolInfo",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 97012,
                  initialValue: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      expression: {
                        id: 97009,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "4748:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 97010,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "4759:11:140",
                      memberName: "getPoolInfo",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7177,
                      src: "4748:22:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                        typeString:
                          "function () view external returns (struct IHyperdrive.PoolInfo memory)",
                      },
                    },
                    id: 97011,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4748:24:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_PoolInfo_$6964_memory_ptr",
                      typeString: "struct IHyperdrive.PoolInfo memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "4709:63:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 97014,
                          name: "checkpoint",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 96995,
                          src: "4791:10:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_Checkpoint_$6868_memory_ptr",
                            typeString: "struct IHyperdrive.Checkpoint memory",
                          },
                        },
                        id: 97015,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "4802:10:140",
                        memberName: "sharePrice",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6864,
                        src: "4791:21:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                      },
                      {
                        expression: {
                          id: 97016,
                          name: "poolInfo",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 97008,
                          src: "4814:8:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_PoolInfo_$6964_memory_ptr",
                            typeString: "struct IHyperdrive.PoolInfo memory",
                          },
                        },
                        id: 97017,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "4823:10:140",
                        memberName: "sharePrice",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6939,
                        src: "4814:19:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 97013,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "4782:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 97018,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4782:52:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 97019,
                  nodeType: "ExpressionStatement",
                  src: "4782:52:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 97021,
                          name: "poolInfo",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 97008,
                          src: "4981:8:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_PoolInfo_$6964_memory_ptr",
                            typeString: "struct IHyperdrive.PoolInfo memory",
                          },
                        },
                        id: 97022,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "4990:16:140",
                        memberName: "longsOutstanding",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6942,
                        src: "4981:25:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        hexValue: "30",
                        id: 97023,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "5008:1:140",
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
                      id: 97020,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "4972:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 97024,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "4972:38:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 97025,
                  nodeType: "ExpressionStatement",
                  src: "4972:38:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 97027,
                          name: "poolInfo",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 97008,
                          src: "5029:8:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_PoolInfo_$6964_memory_ptr",
                            typeString: "struct IHyperdrive.PoolInfo memory",
                          },
                        },
                        id: 97028,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "5038:17:140",
                        memberName: "shortsOutstanding",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6948,
                        src: "5029:26:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        hexValue: "30",
                        id: 97029,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "5057:1:140",
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
                      id: 97026,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "5020:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 97030,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5020:39:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 97031,
                  nodeType: "ExpressionStatement",
                  src: "5020:39:140",
                },
              ],
            },
            functionSelector: "7892faea",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "test_checkpoint_redemption",
            nameLocation: "3630:26:140",
            parameters: {
              id: 96951,
              nodeType: "ParameterList",
              parameters: [],
              src: "3656:2:140",
            },
            returnParameters: {
              id: 96952,
              nodeType: "ParameterList",
              parameters: [],
              src: "3668:0:140",
            },
            scope: 97149,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
          {
            id: 97148,
            nodeType: "FunctionDefinition",
            src: "5072:1862:140",
            nodes: [],
            body: {
              id: 97147,
              nodeType: "Block",
              src: "5120:1814:140",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 97037,
                        name: "alice",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116795,
                        src: "5184:5:140",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        hexValue: "302e3035653138",
                        id: 97038,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "5191:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_rational_50000000000000000_by_1",
                          typeString: "int_const 50000000000000000",
                        },
                        value: "0.05e18",
                      },
                      {
                        hexValue: "3530305f3030305f303030653138",
                        id: 97039,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "5200:14:140",
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
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_rational_50000000000000000_by_1",
                          typeString: "int_const 50000000000000000",
                        },
                        {
                          typeIdentifier:
                            "t_rational_500000000000000000000000000_by_1",
                          typeString: "int_const 500000000000000000000000000",
                        },
                      ],
                      id: 97036,
                      name: "initialize",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119323, 119352, 119383],
                      referencedDeclaration: 119352,
                      src: "5173:10:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        typeString:
                          "function (address,uint256,uint256) returns (uint256)",
                      },
                    },
                    id: 97040,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5173:42:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 97041,
                  nodeType: "ExpressionStatement",
                  src: "5173:42:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 97043,
                        name: "bob",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116797,
                        src: "5271:3:140",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        hexValue: "31305f3030305f303030653138",
                        id: 97044,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "5276:13:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_rational_10000000000000000000000000_by_1",
                          typeString: "int_const 10000000000000000000000000",
                        },
                        value: "10_000_000e18",
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
                            "t_rational_10000000000000000000000000_by_1",
                          typeString: "int_const 10000000000000000000000000",
                        },
                      ],
                      id: 97042,
                      name: "openLong",
                      nodeType: "Identifier",
                      overloadedDeclarations: [119771, 119799, 119829],
                      referencedDeclaration: 119799,
                      src: "5262:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 97045,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5262:28:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  id: 97046,
                  nodeType: "ExpressionStatement",
                  src: "5262:28:140",
                },
                {
                  assignments: [97048],
                  declarations: [
                    {
                      constant: false,
                      id: 97048,
                      mutability: "mutable",
                      name: "shortAmount",
                      nameLocation: "5308:11:140",
                      nodeType: "VariableDeclaration",
                      scope: 97147,
                      src: "5300:19:140",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 97047,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "5300:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 97050,
                  initialValue: {
                    hexValue: "35305f303030653138",
                    id: 97049,
                    isConstant: false,
                    isLValue: false,
                    isPure: true,
                    kind: "number",
                    lValueRequested: false,
                    nodeType: "Literal",
                    src: "5322:9:140",
                    typeDescriptions: {
                      typeIdentifier: "t_rational_50000000000000000000000_by_1",
                      typeString: "int_const 50000000000000000000000",
                    },
                    value: "50_000e18",
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "5300:31:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 97052,
                        name: "celine",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 116799,
                        src: "5351:6:140",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 97053,
                        name: "shortAmount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 97048,
                        src: "5359:11:140",
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
                      id: 97051,
                      name: "openShort",
                      nodeType: "Identifier",
                      overloadedDeclarations: [120029, 120053, 120079],
                      referencedDeclaration: 120053,
                      src: "5341:9:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (address,uint256) returns (uint256,uint256)",
                      },
                    },
                    id: 97054,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5341:30:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  id: 97055,
                  nodeType: "ExpressionStatement",
                  src: "5341:30:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        commonType: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        id: 97062,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        leftExpression: {
                          expression: {
                            id: 97059,
                            name: "block",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: -4,
                            src: "5417:5:140",
                            typeDescriptions: {
                              typeIdentifier: "t_magic_block",
                              typeString: "block",
                            },
                          },
                          id: 97060,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "5423:9:140",
                          memberName: "timestamp",
                          nodeType: "MemberAccess",
                          src: "5417:15:140",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        nodeType: "BinaryOperation",
                        operator: "+",
                        rightExpression: {
                          id: 97061,
                          name: "POSITION_DURATION",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 118911,
                          src: "5435:17:140",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        src: "5417:35:140",
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
                        id: 97056,
                        name: "vm",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 17090,
                        src: "5409:2:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_Vm_$28241",
                          typeString: "contract Vm",
                        },
                      },
                      id: 97058,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "5412:4:140",
                      memberName: "warp",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 27776,
                      src: "5409:7:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        typeString: "function (uint256) external",
                      },
                    },
                    id: 97063,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5409:44:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 97064,
                  nodeType: "ExpressionStatement",
                  src: "5409:44:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 97070,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "5551:10:140",
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
                          expression: {
                            id: 97068,
                            name: "HyperdriveUtils",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 122442,
                            src: "5518:15:140",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                              typeString: "type(library HyperdriveUtils)",
                            },
                          },
                          id: 97069,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "5534:16:140",
                          memberName: "latestCheckpoint",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 120980,
                          src: "5518:32:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                            typeString:
                              "function (contract IHyperdrive) view returns (uint256)",
                          },
                        },
                        id: 97071,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "5518:44:140",
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
                      expression: {
                        id: 97065,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "5496:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 97067,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "5507:10:140",
                      memberName: "checkpoint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7198,
                      src: "5496:21:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        typeString: "function (uint256) external",
                      },
                    },
                    id: 97072,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5496:67:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 97073,
                  nodeType: "ExpressionStatement",
                  src: "5496:67:140",
                },
                {
                  assignments: [97075],
                  declarations: [
                    {
                      constant: false,
                      id: 97075,
                      mutability: "mutable",
                      name: "previousCheckpoint",
                      nameLocation: "5582:18:140",
                      nodeType: "VariableDeclaration",
                      scope: 97147,
                      src: "5574:26:140",
                      stateVariable: false,
                      storageLocation: "default",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                      typeName: {
                        id: 97074,
                        name: "uint256",
                        nodeType: "ElementaryTypeName",
                        src: "5574:7:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 97085,
                  initialValue: {
                    commonType: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                    id: 97084,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftExpression: {
                      arguments: [
                        {
                          id: 97078,
                          name: "hyperdrive",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 118894,
                          src: "5649:10:140",
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
                        expression: {
                          id: 97076,
                          name: "HyperdriveUtils",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 122442,
                          src: "5603:15:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                            typeString: "type(library HyperdriveUtils)",
                          },
                        },
                        id: 97077,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "5619:16:140",
                        memberName: "latestCheckpoint",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 120980,
                        src: "5603:32:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                          typeString:
                            "function (contract IHyperdrive) view returns (uint256)",
                        },
                      },
                      id: 97079,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "5603:66:140",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    nodeType: "BinaryOperation",
                    operator: "-",
                    rightExpression: {
                      expression: {
                        arguments: [],
                        expression: {
                          argumentTypes: [],
                          expression: {
                            id: 97080,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "5672:10:140",
                            typeDescriptions: {
                              typeIdentifier: "t_contract$_IHyperdrive_$7103",
                              typeString: "contract IHyperdrive",
                            },
                          },
                          id: 97081,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "5683:13:140",
                          memberName: "getPoolConfig",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 7160,
                          src: "5672:24:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_external_view$__$returns$_t_struct$_PoolConfig_$6924_memory_ptr_$",
                            typeString:
                              "function () view external returns (struct IHyperdrive.PoolConfig memory)",
                          },
                        },
                        id: 97082,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "5672:26:140",
                        tryCall: false,
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_PoolConfig_$6924_memory_ptr",
                          typeString: "struct IHyperdrive.PoolConfig memory",
                        },
                      },
                      id: 97083,
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "5699:18:140",
                      memberName: "checkpointDuration",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 6904,
                      src: "5672:45:140",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    src: "5603:114:140",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "5574:143:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        id: 97089,
                        name: "previousCheckpoint",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 97075,
                        src: "5749:18:140",
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
                        id: 97086,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "5727:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 97088,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "5738:10:140",
                      memberName: "checkpoint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7198,
                      src: "5727:21:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_nonpayable$_t_uint256_$returns$__$",
                        typeString: "function (uint256) external",
                      },
                    },
                    id: 97090,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "5727:41:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 97091,
                  nodeType: "ExpressionStatement",
                  src: "5727:41:140",
                },
                {
                  assignments: [97096],
                  declarations: [
                    {
                      constant: false,
                      id: 97096,
                      mutability: "mutable",
                      name: "checkpoint",
                      nameLocation: "6251:10:140",
                      nodeType: "VariableDeclaration",
                      scope: 97147,
                      src: "6221:40:140",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Checkpoint_$6868_memory_ptr",
                        typeString: "struct IHyperdrive.Checkpoint",
                      },
                      typeName: {
                        id: 97095,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 97094,
                          name: "IHyperdrive.Checkpoint",
                          nameLocations: ["6221:11:140", "6233:10:140"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 6868,
                          src: "6221:22:140",
                        },
                        referencedDeclaration: 6868,
                        src: "6221:22:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_Checkpoint_$6868_storage_ptr",
                          typeString: "struct IHyperdrive.Checkpoint",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 97104,
                  initialValue: {
                    arguments: [
                      {
                        arguments: [
                          {
                            id: 97101,
                            name: "hyperdrive",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 118894,
                            src: "6335:10:140",
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
                          expression: {
                            id: 97099,
                            name: "HyperdriveUtils",
                            nodeType: "Identifier",
                            overloadedDeclarations: [],
                            referencedDeclaration: 122442,
                            src: "6302:15:140",
                            typeDescriptions: {
                              typeIdentifier:
                                "t_type$_t_contract$_HyperdriveUtils_$122442_$",
                              typeString: "type(library HyperdriveUtils)",
                            },
                          },
                          id: 97100,
                          isConstant: false,
                          isLValue: false,
                          isPure: false,
                          lValueRequested: false,
                          memberLocation: "6318:16:140",
                          memberName: "latestCheckpoint",
                          nodeType: "MemberAccess",
                          referencedDeclaration: 120980,
                          src: "6302:32:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_function_internal_view$_t_contract$_IHyperdrive_$7103_$returns$_t_uint256_$",
                            typeString:
                              "function (contract IHyperdrive) view returns (uint256)",
                          },
                        },
                        id: 97102,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        kind: "functionCall",
                        lValueRequested: false,
                        nameLocations: [],
                        names: [],
                        nodeType: "FunctionCall",
                        src: "6302:44:140",
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
                      expression: {
                        id: 97097,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "6264:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 97098,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "6275:13:140",
                      memberName: "getCheckpoint",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7148,
                      src: "6264:24:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_view$_t_uint256_$returns$_t_struct$_Checkpoint_$6868_memory_ptr_$",
                        typeString:
                          "function (uint256) view external returns (struct IHyperdrive.Checkpoint memory)",
                      },
                    },
                    id: 97103,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6264:92:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Checkpoint_$6868_memory_ptr",
                      typeString: "struct IHyperdrive.Checkpoint memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "6221:135:140",
                },
                {
                  assignments: [97109],
                  declarations: [
                    {
                      constant: false,
                      id: 97109,
                      mutability: "mutable",
                      name: "poolInfo",
                      nameLocation: "6394:8:140",
                      nodeType: "VariableDeclaration",
                      scope: 97147,
                      src: "6366:36:140",
                      stateVariable: false,
                      storageLocation: "memory",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_PoolInfo_$6964_memory_ptr",
                        typeString: "struct IHyperdrive.PoolInfo",
                      },
                      typeName: {
                        id: 97108,
                        nodeType: "UserDefinedTypeName",
                        pathNode: {
                          id: 97107,
                          name: "IHyperdrive.PoolInfo",
                          nameLocations: ["6366:11:140", "6378:8:140"],
                          nodeType: "IdentifierPath",
                          referencedDeclaration: 6964,
                          src: "6366:20:140",
                        },
                        referencedDeclaration: 6964,
                        src: "6366:20:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_struct$_PoolInfo_$6964_storage_ptr",
                          typeString: "struct IHyperdrive.PoolInfo",
                        },
                      },
                      visibility: "internal",
                    },
                  ],
                  id: 97113,
                  initialValue: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      expression: {
                        id: 97110,
                        name: "hyperdrive",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 118894,
                        src: "6405:10:140",
                        typeDescriptions: {
                          typeIdentifier: "t_contract$_IHyperdrive_$7103",
                          typeString: "contract IHyperdrive",
                        },
                      },
                      id: 97111,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "6416:11:140",
                      memberName: "getPoolInfo",
                      nodeType: "MemberAccess",
                      referencedDeclaration: 7177,
                      src: "6405:22:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_external_view$__$returns$_t_struct$_PoolInfo_$6964_memory_ptr_$",
                        typeString:
                          "function () view external returns (struct IHyperdrive.PoolInfo memory)",
                      },
                    },
                    id: 97112,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6405:24:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_PoolInfo_$6964_memory_ptr",
                      typeString: "struct IHyperdrive.PoolInfo memory",
                    },
                  },
                  nodeType: "VariableDeclarationStatement",
                  src: "6366:63:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 97115,
                          name: "checkpoint",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 97096,
                          src: "6448:10:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_Checkpoint_$6868_memory_ptr",
                            typeString: "struct IHyperdrive.Checkpoint memory",
                          },
                        },
                        id: 97116,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "6459:10:140",
                        memberName: "sharePrice",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6864,
                        src: "6448:21:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                      },
                      {
                        expression: {
                          id: 97117,
                          name: "poolInfo",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 97109,
                          src: "6471:8:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_PoolInfo_$6964_memory_ptr",
                            typeString: "struct IHyperdrive.PoolInfo memory",
                          },
                        },
                        id: 97118,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "6480:10:140",
                        memberName: "sharePrice",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6939,
                        src: "6471:19:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 97114,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "6439:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 97119,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6439:52:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 97120,
                  nodeType: "ExpressionStatement",
                  src: "6439:52:140",
                },
                {
                  expression: {
                    id: 97126,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 97121,
                      name: "checkpoint",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 97096,
                      src: "6583:10:140",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Checkpoint_$6868_memory_ptr",
                        typeString: "struct IHyperdrive.Checkpoint memory",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          id: 97124,
                          name: "previousCheckpoint",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 97075,
                          src: "6621:18:140",
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
                          id: 97122,
                          name: "hyperdrive",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 118894,
                          src: "6596:10:140",
                          typeDescriptions: {
                            typeIdentifier: "t_contract$_IHyperdrive_$7103",
                            typeString: "contract IHyperdrive",
                          },
                        },
                        id: 97123,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "6607:13:140",
                        memberName: "getCheckpoint",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 7148,
                        src: "6596:24:140",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_function_external_view$_t_uint256_$returns$_t_struct$_Checkpoint_$6868_memory_ptr_$",
                          typeString:
                            "function (uint256) view external returns (struct IHyperdrive.Checkpoint memory)",
                        },
                      },
                      id: 97125,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "functionCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "6596:44:140",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Checkpoint_$6868_memory_ptr",
                        typeString: "struct IHyperdrive.Checkpoint memory",
                      },
                    },
                    src: "6583:57:140",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Checkpoint_$6868_memory_ptr",
                      typeString: "struct IHyperdrive.Checkpoint memory",
                    },
                  },
                  id: 97127,
                  nodeType: "ExpressionStatement",
                  src: "6583:57:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 97129,
                          name: "checkpoint",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 97096,
                          src: "6659:10:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_Checkpoint_$6868_memory_ptr",
                            typeString: "struct IHyperdrive.Checkpoint memory",
                          },
                        },
                        id: 97130,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "6670:10:140",
                        memberName: "sharePrice",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6864,
                        src: "6659:21:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                      },
                      {
                        expression: {
                          id: 97131,
                          name: "poolInfo",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 97109,
                          src: "6682:8:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_PoolInfo_$6964_memory_ptr",
                            typeString: "struct IHyperdrive.PoolInfo memory",
                          },
                        },
                        id: 97132,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "6691:10:140",
                        memberName: "sharePrice",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6939,
                        src: "6682:19:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_uint128",
                          typeString: "uint128",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 97128,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "6650:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 97133,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6650:52:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 97134,
                  nodeType: "ExpressionStatement",
                  src: "6650:52:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 97136,
                          name: "poolInfo",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 97109,
                          src: "6849:8:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_PoolInfo_$6964_memory_ptr",
                            typeString: "struct IHyperdrive.PoolInfo memory",
                          },
                        },
                        id: 97137,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "6858:16:140",
                        memberName: "longsOutstanding",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6942,
                        src: "6849:25:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        hexValue: "30",
                        id: 97138,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "6876:1:140",
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
                      id: 97135,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "6840:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 97139,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6840:38:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 97140,
                  nodeType: "ExpressionStatement",
                  src: "6840:38:140",
                },
                {
                  expression: {
                    arguments: [
                      {
                        expression: {
                          id: 97142,
                          name: "poolInfo",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 97109,
                          src: "6897:8:140",
                          typeDescriptions: {
                            typeIdentifier:
                              "t_struct$_PoolInfo_$6964_memory_ptr",
                            typeString: "struct IHyperdrive.PoolInfo memory",
                          },
                        },
                        id: 97143,
                        isConstant: false,
                        isLValue: true,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "6906:17:140",
                        memberName: "shortsOutstanding",
                        nodeType: "MemberAccess",
                        referencedDeclaration: 6948,
                        src: "6897:26:140",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        hexValue: "30",
                        id: 97144,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        kind: "number",
                        lValueRequested: false,
                        nodeType: "Literal",
                        src: "6925:1:140",
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
                      id: 97141,
                      name: "assertEq",
                      nodeType: "Identifier",
                      overloadedDeclarations: [
                        17264, 17289, 17302, 17318, 17360, 17402, 17444, 17481,
                        17518, 17555, 15060, 15085, 15115, 15140, 15199, 15224,
                        15254, 15279, 16752, 16787,
                      ],
                      referencedDeclaration: 15254,
                      src: "6888:8:140",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (uint256,uint256)",
                      },
                    },
                    id: 97145,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "6888:39:140",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 97146,
                  nodeType: "ExpressionStatement",
                  src: "6888:39:140",
                },
              ],
            },
            functionSelector: "8533530e",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "test_checkpoint_in_the_past",
            nameLocation: "5081:27:140",
            parameters: {
              id: 97034,
              nodeType: "ParameterList",
              parameters: [],
              src: "5108:2:140",
            },
            returnParameters: {
              id: 97035,
              nodeType: "ParameterList",
              parameters: [],
              src: "5120:0:140",
            },
            scope: 97149,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "external",
          },
        ],
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 96728,
              name: "HyperdriveTest",
              nameLocations: ["275:14:140"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 120941,
              src: "275:14:140",
            },
            id: 96729,
            nodeType: "InheritanceSpecifier",
            src: "275:14:140",
          },
        ],
        canonicalName: "CheckpointTest",
        contractDependencies: [13321, 92554, 92630],
        contractKind: "contract",
        fullyImplemented: true,
        linearizedBaseContracts: [
          97149, 120941, 117331, 26704, 26653, 22391, 22101, 21337, 19283,
          18563, 17031, 17097, 17094,
        ],
        name: "CheckpointTest",
        nameLocation: "257:14:140",
        scope: 97150,
        usedErrors: [7088, 7090, 116815, 116817],
      },
    ],
    license: "Apache-2.0",
  },
  id: 140,
} as const;
