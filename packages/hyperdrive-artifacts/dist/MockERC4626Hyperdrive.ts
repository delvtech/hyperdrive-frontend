export const MockERC4626Hyperdrive = {
  abi: [
    {
      inputs: [
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
          internalType: "struct IHyperdrive.PoolConfig",
          name: "_config",
          type: "tuple",
        },
        {
          internalType: "address",
          name: "_dataProvider",
          type: "address",
        },
        {
          internalType: "bytes32",
          name: "_linkerCodeHash",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "_linkerFactory",
          type: "address",
        },
        {
          internalType: "contract IERC4626",
          name: "_pool",
          type: "address",
        },
        {
          internalType: "address[]",
          name: "_sweepTargets",
          type: "address[]",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "ApprovalFailed",
      type: "error",
    },
    {
      inputs: [],
      name: "BaseBufferExceedsShareReserves",
      type: "error",
    },
    {
      inputs: [],
      name: "BatchInputLengthMismatch",
      type: "error",
    },
    {
      inputs: [],
      name: "BelowMinimumContribution",
      type: "error",
    },
    {
      inputs: [],
      name: "ExpiredDeadline",
      type: "error",
    },
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
      name: "InvalidApr",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidBaseToken",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidCheckpointDuration",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidCheckpointTime",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidERC20Bridge",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidFeeAmounts",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidInitialSharePrice",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidMinimumShareReserves",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidPositionDuration",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidShareReserves",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidSignature",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidTimestamp",
      type: "error",
    },
    {
      inputs: [],
      name: "InvalidTradeSize",
      type: "error",
    },
    {
      inputs: [],
      name: "MinimumSharePrice",
      type: "error",
    },
    {
      inputs: [],
      name: "MinimumTransactionAmount",
      type: "error",
    },
    {
      inputs: [],
      name: "NegativeInterest",
      type: "error",
    },
    {
      inputs: [],
      name: "NegativePresentValue",
      type: "error",
    },
    {
      inputs: [],
      name: "NotPayable",
      type: "error",
    },
    {
      inputs: [],
      name: "OutputLimit",
      type: "error",
    },
    {
      inputs: [],
      name: "Paused",
      type: "error",
    },
    {
      inputs: [],
      name: "PoolAlreadyInitialized",
      type: "error",
    },
    {
      inputs: [],
      name: "RestrictedZeroAddress",
      type: "error",
    },
    {
      inputs: [],
      name: "Unauthorized",
      type: "error",
    },
    {
      inputs: [],
      name: "UnexpectedSuccess",
      type: "error",
    },
    {
      inputs: [],
      name: "UnsafeCastToInt128",
      type: "error",
    },
    {
      inputs: [],
      name: "UnsafeCastToUint128",
      type: "error",
    },
    {
      inputs: [],
      name: "UnsupportedToken",
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
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
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
          internalType: "address",
          name: "newGovernance",
          type: "address",
        },
      ],
      name: "GovernanceUpdated",
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
          name: "newPauser",
          type: "address",
        },
      ],
      name: "PauserUpdated",
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
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "value",
          type: "uint256",
        },
      ],
      name: "TransferSingle",
      type: "event",
    },
    {
      stateMutability: "nonpayable",
      type: "fallback",
    },
    {
      inputs: [],
      name: "DOMAIN_SEPARATOR",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "PERMIT_TYPEHASH",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_contribution",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_minApr",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_maxApr",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_destination",
          type: "address",
        },
        {
          internalType: "bool",
          name: "_asUnderlying",
          type: "bool",
        },
      ],
      name: "addLiquidity",
      outputs: [
        {
          internalType: "uint256",
          name: "lpShares",
          type: "uint256",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256[]",
          name: "ids",
          type: "uint256[]",
        },
        {
          internalType: "uint256[]",
          name: "values",
          type: "uint256[]",
        },
      ],
      name: "batchTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_checkpointTime",
          type: "uint256",
        },
      ],
      name: "checkpoint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_maturityTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_bondAmount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_minOutput",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_destination",
          type: "address",
        },
        {
          internalType: "bool",
          name: "_asUnderlying",
          type: "bool",
        },
      ],
      name: "closeLong",
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
          internalType: "uint256",
          name: "_maturityTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_bondAmount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_minOutput",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_destination",
          type: "address",
        },
        {
          internalType: "bool",
          name: "_asUnderlying",
          type: "bool",
        },
      ],
      name: "closeShort",
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
          internalType: "bool",
          name: "asUnderlying",
          type: "bool",
        },
      ],
      name: "collectGovernanceFee",
      outputs: [
        {
          internalType: "uint256",
          name: "proceeds",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "asUnderlying",
          type: "bool",
        },
      ],
      name: "deposit",
      outputs: [
        {
          internalType: "uint256",
          name: "sharesMinted",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "sharePrice",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_contribution",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_apr",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_destination",
          type: "address",
        },
        {
          internalType: "bool",
          name: "_asUnderlying",
          type: "bool",
        },
      ],
      name: "initialize",
      outputs: [
        {
          internalType: "uint256",
          name: "lpShares",
          type: "uint256",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_baseAmount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_minOutput",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_minSharePrice",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_destination",
          type: "address",
        },
        {
          internalType: "bool",
          name: "_asUnderlying",
          type: "bool",
        },
      ],
      name: "openLong",
      outputs: [
        {
          internalType: "uint256",
          name: "maturityTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "bondProceeds",
          type: "uint256",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_bondAmount",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_maxDeposit",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_minSharePrice",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_destination",
          type: "address",
        },
        {
          internalType: "bool",
          name: "_asUnderlying",
          type: "bool",
        },
      ],
      name: "openShort",
      outputs: [
        {
          internalType: "uint256",
          name: "maturityTime",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "traderDeposit",
          type: "uint256",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bool",
          name: "status",
          type: "bool",
        },
      ],
      name: "pause",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "spender",
          type: "address",
        },
        {
          internalType: "bool",
          name: "_approved",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "deadline",
          type: "uint256",
        },
        {
          internalType: "uint8",
          name: "v",
          type: "uint8",
        },
        {
          internalType: "bytes32",
          name: "r",
          type: "bytes32",
        },
        {
          internalType: "bytes32",
          name: "s",
          type: "bytes32",
        },
      ],
      name: "permitForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "pricePerShare",
      outputs: [
        {
          internalType: "uint256",
          name: "sharePrice",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_shares",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_minOutputPerShare",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_destination",
          type: "address",
        },
        {
          internalType: "bool",
          name: "_asUnderlying",
          type: "bool",
        },
      ],
      name: "redeemWithdrawalShares",
      outputs: [
        {
          internalType: "uint256",
          name: "baseProceeds",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "sharesRedeemed",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_shares",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_minOutput",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_destination",
          type: "address",
        },
        {
          internalType: "bool",
          name: "_asUnderlying",
          type: "bool",
        },
      ],
      name: "removeLiquidity",
      outputs: [
        {
          internalType: "uint256",
          name: "baseProceeds",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "withdrawalShares",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenID",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "setApproval",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenID",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "caller",
          type: "address",
        },
      ],
      name: "setApprovalBridge",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "who",
          type: "address",
        },
      ],
      name: "setGovernance",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "who",
          type: "address",
        },
        {
          internalType: "bool",
          name: "status",
          type: "bool",
        },
      ],
      name: "setPauser",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "contract IERC20",
          name: "_target",
          type: "address",
        },
      ],
      name: "sweep",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenID",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenID",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "caller",
          type: "address",
        },
      ],
      name: "transferFromBridge",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "shares",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "destination",
          type: "address",
        },
        {
          internalType: "bool",
          name: "asUnderlying",
          type: "bool",
        },
      ],
      name: "withdraw",
      outputs: [
        {
          internalType: "uint256",
          name: "amountWithdrawn",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode: {
    object:
      "0x6102a060405260016000553480156200001757600080fd5b5060405162006c6738038062006c678339810160408190526200003a9162000781565b6001600160a01b03808616608052831660a05260c084905260408051808201825260018152603160f81b602091820152905187918791879187918791879187918791879187918591859185918591859185918591859162000102917f2aef22f9d7df5f9d21c56d14029233f3fdaa91917727e1eb68e504d27072d6cd917fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6914691309101938452602084019290925260408301526001600160a01b0316606082015260800190565b60408051601f19818403018152918152815160209092019190912060e05284516001600160a01b0316610100528401516103e8111592506200015a915050576040516349db44f560e01b815260040160405180910390fd5b60408101516101a05260608101516101c05260a08101516000036200019257604051635428734d60e01b815260040160405180910390fd5b60a081018051610120525160808201511080620001c357508060a001518160800151620001c09190620008cd565b15155b15620001e25760405163253fffcf60e11b815260040160405180910390fd5b60808101516101405260c08101516101605260208101516101805260e0810151601180546001600160a01b0319166001600160a01b03928316179055610100820151166102405261012081015151670de0b6b3a76400001080620002565750670de0b6b3a764000081610120015160200151115b80620002725750670de0b6b3a764000081610120015160400151115b1562000291576040516322f72cc360e11b815260040160405180910390fd5b61012081018051516101e0528051602001516102005251604001516102205261016001516102605260005b8461014001518110156200033c576040805180820190915263ffffffff4281168252600060208301818152601280546001818101835591909352935190516001600160e01b0316640100000000029216919091177fbb8a6a4669ba250d26cd7a459eca9d215f8307e33aebe50379bc5a3617ec34449091015501620002bc565b5050506001600160a01b03881661028052506200035f9450506200058892505050565b86602001511462000383576040516355f2a42f60e01b815260040160405180910390fd5b816001600160a01b03166338d52e0f6040518163ffffffff1660e01b8152600401602060405180830381865afa158015620003c2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620003e89190620008f0565b6001600160a01b031686600001516001600160a01b0316146200041e57604051630722152560e11b815260040160405180910390fd5b85516102805160405163095ea7b360e01b81526001600160a01b039182166004820152600019602482015291169063095ea7b3906044016020604051808303816000875af115801562000475573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200049b919062000917565b620004b9576040516340b27c2160e11b815260040160405180910390fd5b60005b815181101562000575576000828281518110620004dd57620004dd6200093b565b60200260200101519050610280516001600160a01b0316816001600160a01b031614806200051f5750610100516001600160a01b0316816001600160a01b0316145b156200053e5760405163350b944160e11b815260040160405180910390fd5b6001600160a01b03166000908152601460205260409020805460ff19166001179055806200056c8162000951565b915050620004bc565b5050505050505050505050505062000993565b610280516040516303d1689d60e11b8152670de0b6b3a764000060048201526000916001600160a01b0316906307a2d13a90602401602060405180830381865afa158015620005db573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000601919062000979565b905090565b634e487b7160e01b600052604160045260246000fd5b60405161018081016001600160401b038111828210171562000642576200064262000606565b60405290565b6001600160a01b03811681146200065e57600080fd5b50565b80516200066e8162000648565b919050565b6000606082840312156200068657600080fd5b604051606081016001600160401b0381118282101715620006ab57620006ab62000606565b80604052508091508251815260208301516020820152604083015160408201525092915050565b600082601f830112620006e457600080fd5b815160206001600160401b038083111562000703576200070362000606565b8260051b604051601f19603f830116810181811084821117156200072b576200072b62000606565b6040529384528581018301938381019250878511156200074a57600080fd5b83870191505b8482101562000776578151620007668162000648565b8352918301919083019062000750565b979650505050505050565b6000806000806000808688036102608112156200079d57600080fd5b6101c080821215620007ae57600080fd5b620007b86200061c565b9150620007c58962000661565b82526020890151602083015260408901516040830152606089015160608301526080890151608083015260a089015160a083015260c089015160c08301526200081160e08a0162000661565b60e083015261010062000826818b0162000661565b908301526101206200083b8b8b830162000673565b81840152506101808901516101408301526101a089015161016083015281975062000868818a0162000661565b965050506101e0870151935062000883610200880162000661565b925062000894610220880162000661565b6102408801519092506001600160401b03811115620008b257600080fd5b620008c089828a01620006d2565b9150509295509295509295565b600082620008eb57634e487b7160e01b600052601260045260246000fd5b500690565b6000602082840312156200090357600080fd5b8151620009108162000648565b9392505050565b6000602082840312156200092a57600080fd5b815180151581146200091057600080fd5b634e487b7160e01b600052603260045260246000fd5b6000600182016200097257634e487b7160e01b600052601160045260246000fd5b5060010190565b6000602082840312156200098c57600080fd5b5051919050565b60805160a05160c05160e05161010051610120516101405161016051610180516101a0516101c0516101e051610200516102205161024051610260516102805161604b62000c1c6000396000818161207f01528181612100015281816121400152818161229a01528181612339015281816123bb0152612cee015260006145b20152600081816106050152818161071501528181610d750152610ddb0152600081816144d90152818161474201528181614ba401528181614c1d01528181614df40152614e6501526000818161319f01528181613743015281816144ad01528181614bf10152614e390152600081816146fe01528181614b780152614dc80152600081816107ed01528181611054015281816115f50152818161189d01528181611a830152611e6a015260008181610b3e01528181610b8901528181610c9d01528181613bae01528181613edc01528181613f2b015281816143280152818161480e01528181614923015261495f0152600081816108c601528181610c0c01528181611ae401528181612685015281816126cd0152818161307d0152818161368801528181613b88015261409f015260008181610c4f01528181611b2601528181612663015281816126ee0152818161305b0152818161366601528181613bd4015261407d01526000818161094801528181610c2e015281816111620152818161168001528181611b0501528181611f2701528181612497015281816125bc01528181613125015281816133780152818161413701528181614abc0152614f66015260008181611d6b01528181611e1401526123ff015260006122560152600081816103e601526113ea01526000612f7401526000612f3701526000610197015261604b6000f3fe6080604052600436106101805760003560e01c80637180c8ca116100d1578063a22cb4651161008a578063c326a90311610064578063c326a90314610570578063e44808bc14610583578063ed64bab2146105a3578063fa3fcea7146105c357610180565b8063a22cb46514610510578063ab033ea914610530578063c23632a71461055057610180565b80637180c8ca146104685780639032c7261461048857806399530b06146104a85780639a408321146104bd5780639cd241af146104dd578063a179403b146104fd57610180565b80632002b3331161013e5780633644e515116101185780633644e515146103d45780634536ee2f146104085780634ed2d6ac146104285780636f8c3a5b1461044857610180565b80632002b3331461036d5780632787d5951461038057806330adf81f146103a057610180565b8062ebf5dd1461029057806301681a62146102c357806302329a29146102e557806306dae82a1461030557806317fad7fc1461032d5780631c0f12b61461034d575b34801561018c57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516101cf929190615827565b600060405180830381855af49150503d806000811461020a576040519150601f19603f3d011682016040523d82523d6000602084013e61020f565b606091505b5091509150811561023357604051638bb0a34b60e01b815260040160405180910390fd5b600061023e82615837565b90506001600160e01b03198116636e64089360e11b1461026057815160208301fd5b815160031981016004840190815292610281918101602001906024016158a8565b80519650602001945050505050f35b34801561029c57600080fd5b506102b06102ab366004615970565b6105e3565b6040519081526020015b60405180910390f35b3480156102cf57600080fd5b506102e36102de3660046159b2565b6105fa565b005b3480156102f157600080fd5b506102e36103003660046159cf565b61073e565b6103186103133660046159ec565b610787565b604080519283526020830191909152016102ba565b34801561033957600080fd5b506102e3610348366004615a87565b610a0c565b34801561035957600080fd5b506102e3610368366004615b1c565b610ac0565b6102b061037b366004615b64565b610ad3565b34801561038c57600080fd5b506102b061039b3660046159cf565b610d28565b3480156103ac57600080fd5b506102b07f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b3480156103e057600080fd5b506102b07f000000000000000000000000000000000000000000000000000000000000000081565b34801561041457600080fd5b50610318610423366004615b64565b610e0c565b34801561043457600080fd5b506102e3610443366004615bae565b610fdc565b34801561045457600080fd5b506102b06104633660046159ec565b61102a565b34801561047457600080fd5b506102e3610483366004615bed565b611298565b34801561049457600080fd5b506102e36104a3366004615c26565b611310565b3480156104b457600080fd5b506102b061155f565b3480156104c957600080fd5b506103186104d8366004615ca6565b61156e565b3480156104e957600080fd5b506102e36104f8366004615ccb565b611587565b61031861050b3660046159ec565b611598565b34801561051c57600080fd5b506102e361052b366004615bed565b611791565b34801561053c57600080fd5b506102e361054b3660046159b2565b6117fd565b34801561055c57600080fd5b5061031861056b366004615b64565b611871565b6102b061057e3660046159ec565b611a28565b34801561058f57600080fd5b506102e361059e366004615d03565b611cea565b3480156105af57600080fd5b506102e36105be366004615d54565b611d3a565b3480156105cf57600080fd5b506102b06105de3660046159ec565b611e40565b60006105f084848461204b565b90505b9392505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906106435750336000908152600f602052604090205460ff16155b15610660576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03811660009081526014602052604090205460ff166106995760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156106e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107049190615d6d565b905061073a6001600160a01b0383167f0000000000000000000000000000000000000000000000000000000000000000836121bc565b5050565b336000908152600f602052604090205460ff1661076d576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146107b55760405162461bcd60e51b81526004016107ac90615d86565b60405180910390fd5b6002600055600c54610100900460ff16156107e3576040516313d0ff5960e31b815260040160405180910390fd5b6107eb61221f565b7f000000000000000000000000000000000000000000000000000000000000000087101561082c5760405163211ddda360e11b815260040160405180910390fd5b6000806108398986612240565b915091508681101561085e576040516342af972b60e01b815260040160405180910390fd5b60006108686123f8565b9050610874818361242e565b506000806000610884868661263c565b600854919a509295509093509091506108ae908390600160801b90046001600160801b0316615dc0565b6108eb846108ba61276d565b6108c49190615dd3565b7f00000000000000000000000000000000000000000000000000000000000000009061278e565b111561090a5760405163512095c760e01b815260040160405180910390fd5b868c111561092b5760405163c972651760e01b815260040160405180910390fd5b806010600082825461093d9190615dd3565b9091555061096d90507f000000000000000000000000000000000000000000000000000000000000000085615dd3565b975061097d83888488888d6127a3565b600061098a60018a61299d565b9050610997818c8a6129d2565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d6040516109eb939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b0386161580610a2957506001600160a01b038516155b15610a475760405163f0dd15fd60e01b815260040160405180910390fd5b828114610a675760405163174861a760e31b815260040160405180910390fd5b60005b83811015610ab757610aaf858583818110610a8757610a87615de6565b905060200201358888868686818110610aa257610aa2615de6565b9050602002013533612a7b565b600101610a6a565b50505050505050565b610acd8484848433612a7b565b50505050565b60008054600114610af65760405162461bcd60e51b81526004016107ac90615d86565b6002600055610b0361221f565b600c5460ff1615610b2757604051637983c05160e01b815260040160405180910390fd5b600080610b348785612240565b9092509050610b647f00000000000000000000000000000000000000000000000000000000000000006002615dfc565b821015610b8457604051632afb507160e21b815260040160405180910390fd5b610baf7f00000000000000000000000000000000000000000000000000000000000000006002615dfc565b610bb99083615dc0565b9250610bcc610bc66123f8565b8261242e565b50600c805460ff19166001179055610be382612c3c565b600880546001600160801b0319166001600160801b0392909216919091179055610c78610c73837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612c66565b612c3c565b600880546001600160801b03928316600160801b029216919091179055610cc16000807f00000000000000000000000000000000000000000000000000000000000000006129d2565b610ccd600086856129d2565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610d4b5760405162461bcd60e51b81526004016107ac90615d86565b60026000908155338152600f602052604090205460ff16158015610d985750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610daf57506011546001600160a01b03163314155b15610dcc576040516282b42960e81b815260040160405180910390fd5b601080546000909155610e00817f00000000000000000000000000000000000000000000000000000000000000008561204b565b60016000559392505050565b600080600054600114610e315760405162461bcd60e51b81526004016107ac90615d86565b60026000908155610e40612cce565b9050610e4d610bc66123f8565b50610e5781612d61565b600d548792506001600160801b031680831115610e7b57806001600160801b031692505b82600003610e9157600080935093505050610fcc565b610ea0600360f81b3385612e3b565b600d546001600160801b03600160801b909104811690600090610ec890869084908616612edb565b9050610ed385612c3c565b610edd9084615e13565b600d80546001600160801b0319166001600160801b0392909216919091179055610f0681612c3c565b600d8054601090610f28908490600160801b90046001600160801b0316615e13565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610f5781898961204b565b955085610f648a8761278e565b1115610f835760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b83610fe681612ef9565b6001600160a01b0316336001600160a01b03161461101757604051632aab8bd360e01b815260040160405180910390fd5b61102385858585612fb6565b5050505050565b6000805460011461104d5760405162461bcd60e51b81526004016107ac90615d86565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156110935760405163211ddda360e11b815260040160405180910390fd5b600061109d612cce565b90506110a9878261242e565b506110bf6110b860028961299d565b3388612e3b565b6000806000806000806110d38c888f613023565b600854959b50939950919750955093509150611100908790600160801b90046001600160801b0316615dc0565b61110c846108ba61276d565b111561112b5760405163512095c760e01b815260040160405180910390fd5b8b8d88428211156111ed5783601060008282546111489190615dd3565b9091555061115b9050838a8988866131f7565b60006111877f000000000000000000000000000000000000000000000000000000000000000084615dc0565b6000818152600e6020526040812054919250600160801b909104600f0b906111ba9086908a908e908d9089908990613371565b6000828152600e60205260409020546111e190600f83810b91600160801b9004900b613519565b6111ea8c612d61565b50505b60006111fa898f8f61204b565b90508e81101561121d5760405163c972651760e01b815260040160405180910390fd5b61122860028461299d565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f858488604051611276939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b031633146112c2576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b834211156113315760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166113585760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611484573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146114c257604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038916600090815260076020526040812080549091906114e890615e3a565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b6000611569612cce565b905090565b60008061157b8484612240565b915091505b9250929050565b61159383838333612fb6565b505050565b6000806000546001146115bd5760405162461bcd60e51b81526004016107ac90615d86565b6002600055600c54610100900460ff16156115eb576040516313d0ff5960e31b815260040160405180910390fd5b6115f361221f565b7f00000000000000000000000000000000000000000000000000000000000000008710156116345760405163211ddda360e11b815260040160405180910390fd5b600061163e612cce565b905085811015611661576040516342af972b60e01b815260040160405180910390fd5b600061166b6123f8565b90506000611679828461242e565b90506116a57f000000000000000000000000000000000000000000000000000000000000000083615dd3565b94506000806116b58c8685613640565b60108054939950919450925082916000906116d1908490615dd3565b909155505050848a10156116f85760405163c972651760e01b815260040160405180910390fd5b6117028588612240565b50506117108b828689613774565b600061171d60028861299d565b905061172a818a8e6129d2565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6011546001600160a01b03163314611827576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000806000546001146118965760405162461bcd60e51b81526004016107ac90615d86565b60026000557f00000000000000000000000000000000000000000000000000000000000000008610156118dc5760405163211ddda360e11b815260040160405180910390fd5b60006118e6612cce565b90506118f3610bc66123f8565b506118fd81612d61565b6002602052600080516020615ff683398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611958916001600160801b0390911690615dc0565b905060006119668284615dd3565b90506119746000338c612e3b565b60006119838b868487876139b2565b96509050611996600360f81b8a886129d2565b6119a1818a8a61204b565b9650868a11156119c45760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b60008054600114611a4b5760405162461bcd60e51b81526004016107ac90615d86565b6002600055600c54610100900460ff1615611a79576040516313d0ff5960e31b815260040160405180910390fd5b611a8161221f565b7f0000000000000000000000000000000000000000000000000000000000000000861015611ac25760405163211ddda360e11b815260040160405180910390fd5b6000611b4a611acf61276d565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000613ab0565b905085811080611b5957508481115b15611b7757604051633b61151160e11b815260040160405180910390fd5b600080611b848986612240565b91509150611b93610bc66123f8565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611bdf916001600160801b0390911690615dc0565b60008080526002602052600080516020615ff68339815191525491925090611c08908390615dd3565b9050600080611c1685613aeb565b90506000611c2382613c51565b9050611c2e87613ec3565b6008546001600160801b038082168452600954600f0b6020850152600160801b909104166040830152611c6082613c51565b9250611c788482611c718187615dc0565b9190612edb565b98505050611c8860008a896129d2565b611c9184612d61565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b84611cf481612ef9565b6001600160a01b0316336001600160a01b031614611d2557604051632aab8bd360e01b815260040160405180910390fd5b611d328686868686612a7b565b505050505050565b6000818152600e60205260409020546001600160801b031615611d5a5750565b6000611d646123f8565b9050611d907f000000000000000000000000000000000000000000000000000000000000000083615e69565b151580611d9c57508181105b15611dba5760405163ecd29e8160e01b815260040160405180910390fd5b808203611dd25761159381611dcd612cce565b61242e565b815b6000818152600e60205260409020546001600160801b0316828203611dfe57611dfb612cce565b90505b8015611e0e57611023848261242e565b50611e397f000000000000000000000000000000000000000000000000000000000000000082615dd3565b9050611dd4565b60008054600114611e635760405162461bcd60e51b81526004016107ac90615d86565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015611ea95760405163211ddda360e11b815260040160405180910390fd5b6000611eb3612cce565b9050611ebf878261242e565b50611ece6110b860018961299d565b600080600080600080611ee28c888f614045565b95509550955095509550955060008d90508d421015611fab578160106000828254611f0d9190615dd3565b90915550611f2090508d888786856141bc565b6000611f4c7f000000000000000000000000000000000000000000000000000000000000000083615dc0565b6000818152600e6020526040902054909150600160801b9004600f0b611f788f878b8a878f6001613371565b6000828152600e6020526040902054611f9f90600f83810b91600160801b9004900b613519565b611fa88a612d61565b50505b6000611fb8878d8d61204b565b9050808d1115611fdb5760405163c972651760e01b815260040160405180910390fd5b8d611fe760018461299d565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b600081156120f357604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301527f0000000000000000000000000000000000000000000000000000000000000000169063ba087652906064016020604051808303816000875af11580156120c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120ec9190615d6d565b90506105f3565b6121276001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866121bc565b6040516303d1689d60e11b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa15801561218f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121b39190615d6d565b95945050505050565b6040516001600160a01b03831660248201526044810182905261159390849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152614389565b341561223e57604051631574f9f360e01b815260040160405180910390fd5b565b60008082156123205761227e6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308761445e565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156122eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061230f9190615d6d565b9150612319612cce565b9050611580565b6040516363737ac960e11b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa158015612388573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123ac9190615d6d565b90506123e36001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308461445e565b8092506123ee612cce565b9150509250929050565b60006124247f000000000000000000000000000000000000000000000000000000000000000042615e69565b6115699042615dc0565b6000828152600e6020526040812080546001600160801b031615158061245357504284115b1561246957546001600160801b03169050612636565b61247283612c3c565b81546001600160801b0319166001600160801b03919091161781556000600e816124bc7f000000000000000000000000000000000000000000000000000000000000000088615dc0565b815260208101919091526040016000908120546001600160801b031691506002816124e7828961299d565b8152602001908152602001600020549050600080821115612543576000806125128489876000614496565b9150915080601060008282546125289190615dd3565b9091555061253c905084600084808d6131f7565b6001925050505b60006002600061255460018b61299d565b815260200190815260200160002054905060008111156125af5760008061257e838a886001614496565b9150915080601060008282546125949190615dd3565b909155506125a8905083600084808e6141bc565b6001935050505b811561262d5760006125e17f00000000000000000000000000000000000000000000000000000000000000008a615dc0565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612621928492919004900b613519565b61262a89612d61565b50505b86955050505050505b92915050565b6000806000806126a961264d61276d565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000614564565b925060006127126126b861276d565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614585565b905061271d81614596565b60008061272b89848a6146f0565b909250905061273a8287615dc0565b94506127468186615dd3565b955061275381848a612edb565b935061275f848a615dc0565b965050505092959194509250565b600854600954600091611569916001600160801b0390911690600f0b614770565b60006105f38383670de0b6b3a7640000612edb565b600a546001600160801b03166127de610c73826127c885670de0b6b3a7640000615dfc565b600b546001600160801b031691908a600161478d565b600b80546001600160801b0319166001600160801b039290921691909117905561280787612c3c565b600880546000906128229084906001600160801b0316615e7d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061284f85612c3c565b60088054601090612871908490600160801b90046001600160801b0316615e13565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061289e86612c3c565b6128a89082615e7d565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b906129046128ef8b8961278e565b6128fa8b6002615dfc565b610c739190615dc0565b835490915081908490601090612925908490600160801b9004600f0b615e9d565b82546001600160801b039182166101009390930a928302919092021990911617905550825461296290600f84810b91600160801b9004900b613519565b61296b87614807565b612988576040516318846de960e01b815260040160405180910390fd5b61299187612d61565b50505050505050505050565b60006001600160f81b038211156129c75760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612a04908490615dd3565b909155505060008381526002602052604081208054839290612a27908490615dd3565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b0384161580612a9857506001600160a01b038316155b15612ab65760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612b7a576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff16612b7a5760008581526004602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114612b785760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612b72908490615dc0565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612bac908490615dc0565b909155505060008581526001602090815260408083206001600160a01b038716845290915281208054849290612be3908490615dd3565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b8210612c6257604051630f0af95160e11b815260040160405180910390fd5b5090565b600080612c77846301e13380614879565b9050612cc3612cb3612c91670de0b6b3a76400008661488e565b612c9b888561278e565b612cad90670de0b6b3a7640000615dd3565b906148a3565b612cbd888a61278e565b9061278e565b979650505050505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015612d3d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115699190615d6d565b6002602052600080516020615ff683398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612dbc916001600160801b0390911690615dc0565b90506000612dca8284615dd3565b90506000612ddf612dda86613aeb565b613c51565b90506000612dee858385612edb565b9050600080612dfc886148fa565b905082811115612e1357612e108382615dc0565b91505b6000821180612e20575083155b15612e3157612e31828587896149a6565b5050505050505050565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612e6d908490615dc0565b909155505060008381526002602052604081208054839290612e90908490615dc0565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612a6e565b6000826000190484118302158202612ef257600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b600080600080600080600061303788614a8f565b90506130a161304461276d565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000614ae0565b9098509550935060006130b56126b861276d565b90506130c081614596565b8a8a60008080806130d386898988614b50565b935093509350935080826130e79190615dd3565b98506130f38285615dc0565b6130fd908c615dd3565b9a506131098385615dd3565b613113908d615dd3565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a61314f9190615dc0565b815260208101919091526040016000908120546001600160801b03169150428911613191576000898152600e60205260409020546001600160801b0316613193565b895b90506131c38b8784848e7f0000000000000000000000000000000000000000000000000000000000000000614c4f565b96506131cf8387615dc0565b95506131e18787878686866000614ca1565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613240610c738261322385670de0b6b3a7640000615dfc565b600b54600160801b90046001600160801b031691908a600061478d565b600b80546001600160801b03928316600160801b02921691909117905561326686612c3c565b6132709082615e13565b600a80546001600160801b03928316600160801b0292169190911790555061329783612c3c565b600880546000906132b29084906001600160801b0316615e7d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506132df82614d1c565b600980546000906132f4908490600f0b615e9d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061332484612c3c565b60088054601090613346908490600160801b90046001600160801b0316615e13565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b600061339d7f000000000000000000000000000000000000000000000000000000000000000085615dc0565b90506000600260006133b060018861299d565b81526020019081526020016000205490506000600260006133d260028961299d565b81526020019081526020016000205490508160001480156133f1575080155b15613416576000838152600e6020526040902080546001600160801b03169055612991565b600061345a8b6134268c8961278e565b613431906002615dfc565b8b61343c8c8b61278e565b6134469190615dd3565b6134509190615dc0565b610c739190615dd3565b905084156134b9576000848152600e60205260409020805482919060109061348d908490600160801b9004600f0b615eca565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061350c565b6000848152600e6020526040902080548291906010906134e4908490600160801b9004600f0b615e9d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b8082138015613529575060008212155b156135bc57600061353a8282614d5a565b6135449084615ef7565b6009549091506135719061356c908390600160801b90046001600160801b0316600f0b614d70565b614d1c565b60098054601090613593908490600160801b90046001600160801b0316615e13565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b8181131561073a5760008212613632576135d582614d1c565b6135de82614d1c565b6135e89190615eca565b6009805460109061360a908490600160801b90046001600160801b0316615e7d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b6135e861356c826000614d5a565b60008060006136ac61365061276d565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000614d7f565b9150856136b9838761278e565b11156136d85760405163512095c760e01b815260040160405180910390fd5b60006136e56126b861276d565b90506136f081614596565b600061370688670de0b6b3a7640000848a614da0565b945090915061371790508382615dc0565b6137219085615dc0565b935061376787612cbd8a6137358789615dc0565b8a6137408d82614ea1565b8d7f0000000000000000000000000000000000000000000000000000000000000000614c4f565b9450505093509350939050565b600a546137be90610c7390600160801b90046001600160801b03166137a184670de0b6b3a7640000615dfc565b600b54600160801b90046001600160801b0316919088600161478d565b600b80546001600160801b03928316600160801b02921691909117905560006137e684612c3c565b6008546137fc91906001600160801b0316615e13565b600880546001600160801b0319166001600160801b038316179055905061382285612c3c565b60088054601090613844908490600160801b90046001600160801b0316615e7d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061387185612c3c565b600a8054601090613893908490600160801b90046001600160801b0316615e7d565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506138e25760405163585fe6df60e11b815260040160405180910390fd5b60006138ec6123f8565b6000818152600e6020526040902054909150600160801b9004600f0b61391187612c3c565b6000838152600e602052604090208054601090613939908490600160801b9004600f0b615eca565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461398390600f83810b91600160801b9004900b613519565b61398c85614807565b6139a9576040516318846de960e01b815260040160405180910390fd5b610ab785612d61565b60008060006139c087613aeb565b905060006139cd82613c51565b90506139df6139da612cce565b6148fa565b93506139ec848a88612edb565b93506139ff6139fa85615f17565b613ec3565b6008546001600160801b038082168452600954600f0b6020850152600160801b9091041660408301526000613a3383613c51565b90506000613a42898385612edb565b9050613a4e8b8a615ef7565b613a589082615ef7565b90506000811215613aa1576000613a79613a7183615f17565b85908c612edb565b9050613a858188615dc0565b9650613a9081613ec3565b613a9b81898d614eb0565b60009150505b93505050509550959350505050565b600080613abf87878786614585565b9050612cc3613ad382866301e13380614ef5565b613ae583670de0b6b3a7640000615dc0565b90614879565b613b4860405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b549091610100830191613c179116614f1b565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192613c4992900416614f1b565b905292915050565b600080613c7183610140015184610120015161278e90919063ffffffff16565b61010084015160e0850151613c859161278e565b613c8f9190615ef7565b90506000613ca584600001518560200151614770565b90506000821315613d47576000613ce78286604001518760a001518860c00151670de0b6b3a7640000613cd89190615dc0565b89606001518a60800151614f91565b9150613cf590508184615014565b90508015613d4157613d2e828660400151838860c00151670de0b6b3a7640000613d1f9190615dc0565b89606001518a60800151615023565b85518690613d3d908390615dc0565b9052505b50613e05565b6000821215613e0557613d5982615f17565b91506000613d8d8286604001518760c00151670de0b6b3a7640000613d7e9190615dc0565b88606001518960800151615057565b9150613d9b90508184615014565b90508015613de757613dd4828660400151838860c00151670de0b6b3a7640000613dc59190615dc0565b89606001518a608001516150e1565b85518690613de3908390615dd3565b9052505b613df18184615dc0565b85518690613e00908390615dd3565b905250505b6000613e34856101000151670de0b6b3a7640000613e239190615dc0565b606087015160e08801519190612edb565b613e62866101400151670de0b6b3a7640000613e509190615dc0565b60608801516101208901519190612edb565b613e6c9190615ef7565b90506000818660000151613e809190615f33565b90508560a00151811215613ea75760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151613eb99082615dc0565b9695505050505050565b80600003613ece5750565b6008546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000811015613f1b5760405163585fe6df60e11b815260040160405180910390fd5b6000613f278383615f33565b90507f0000000000000000000000000000000000000000000000000000000000000000811215613f6a5760405163585fe6df60e11b815260040160405180910390fd5b613f7381612c3c565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b818112613fb557613fae838286612edb565b9150613fd5565b613fc9613fc182615f17565b849086612edb565b613fd290615f17565b91505b613fde82614d1c565b600980546001600160801b0319166001600160801b0392831617905560085461402191610c7391600160801b9004166140178785614770565b611c718787614770565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600080600080600080600061405988614a8f565b90506140c361406661276d565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f000000000000000000000000000000000000000000000000000000000000000061515c565b9098509650935060006140d76126b861276d565b90506140e281614596565b6000806140f18d85858f614da0565b965090925090506141028288615dc0565b965061410e8183615dd3565b614118908a615dc0565b9850614124858a615dd3565b9750505050506141a885858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e6141619190615dc0565b81526020810191909152604001600020546001600160801b0316428d1161419f5760008d8152600e60205260409020546001600160801b03166141a1565b8d5b6001614ca1565b999d939c50919a5098509695509350505050565b600a546001600160801b03166141f7610c73826141e185670de0b6b3a7640000615dfc565b600b546001600160801b031691908a600061478d565b600b80546001600160801b0319166001600160801b039290921691909117905561422086612c3c565b61422a9082615e13565b600a80546001600160801b0319166001600160801b03929092169190911790555061425483612c3c565b6008805460009061426f9084906001600160801b0316615e13565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061429c82614d1c565b600980546000906142b1908490600f0b615eca565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506142e184612c3c565b60088054601090614303908490600160801b90046001600160801b0316615e7d565b82546101009290920a6001600160801b038181021990931691831602179091556008547f000000000000000000000000000000000000000000000000000000000000000091161090508061436b5750600954600854600f9190910b6001600160801b03909116125b156110235760405163585fe6df60e11b815260040160405180910390fd5b60006143de826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166151a89092919063ffffffff16565b90508051600014806143ff5750808060200190518101906143ff9190615f5b565b6115935760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016107ac565b6040516001600160a01b0380851660248301528316604482015260648101829052610acd9085906323b872dd60e01b906084016121e8565b6000806144a38686614879565b915060006144d1837f000000000000000000000000000000000000000000000000000000000000000061278e565b90506144fd817f000000000000000000000000000000000000000000000000000000000000000061278e565b915083156145205761450f8282615dc0565b6145199084615dc0565b9250614537565b61452a8282615dc0565b6145349084615dd3565b92505b8486101561455a5761454a838787612edb565b9250614557828787612edb565b91505b5094509492505050565b6000612cc387878761457e88670de0b6b3a7640000615dc0565b87876151b7565b60006121b382612cad858888612edb565b6013546001600160801b03600160801b820481169116426145d77f000000000000000000000000000000000000000000000000000000000000000084615dd3565b11156145e257505050565b6000601282815481106145f7576145f7615de6565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b03169061462b8342615dc0565b601254909150878202830190600090614645886001615dd3565b61464f9190615e69565b905060405180604001604052804263ffffffff168152602001836001600160e01b03168152506012828154811061468857614688615de6565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b60008061473a85612cbd85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000614730818c614879565b612cbd9190615dc0565b9150614766827f000000000000000000000000000000000000000000000000000000000000000061278e565b9050935093915050565b60008061477d8385615ef7565b905060008112156105f357600080fd5b600081156147cd576147c66147a28487615dd3565b6147ac858761278e565b6147b6888a61278e565b6147c09190615dd3565b9061488e565b90506121b3565b8285036147dc575060006121b3565b613eb96147e98487615dc0565b6147f3858761278e565b6147fd888a61278e565b6147c09190615dc0565b60006148337f00000000000000000000000000000000000000000000000000000000000000008361278e565b600954600854614871916000916001600160801b03600160801b9092048216600f0b9161486191168761278e565b61486b9190615ef7565b90614d5a565b121592915050565b60006105f383670de0b6b3a764000084612edb565b60006105f383670de0b6b3a764000084614ef5565b6000816000036148bc5750670de0b6b3a7640000612636565b826000036148cc57506000612636565b8160006148d88561522a565b90508181026148ef670de0b6b3a764000082615f78565b9050613eb98161543d565b600954600090819061491c90600160801b90046001600160801b031684614879565b90506149487f000000000000000000000000000000000000000000000000000000000000000082615dd3565b6008546001600160801b031611156149a0576008547f0000000000000000000000000000000000000000000000000000000000000000906149939083906001600160801b0316615dc0565b61499d9190615dc0565b91505b50919050565b60008084116149b557826149c0565b6149c0838686612edb565b9050806000036149d05750610acd565b8085838211156149eb578391506149e8878385612edb565b90505b6149f482612c3c565b600d8054600090614a0f9084906001600160801b0316615e7d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614a3c81612c3c565b600d8054601090614a5e908490600160801b90046001600160801b0316615e7d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ab7816139fa90615f17565b600080614a9a6123f8565b9050808311614aaa576000614ab4565b614ab48184615dc0565b915061499d827f0000000000000000000000000000000000000000000000000000000000000000614879565b60008080614b01614af988670de0b6b3a7640000615dc0565b899087612edb565b9050614b0d888861278e565b91508115614b4357614b348a8a84614b2d8a670de0b6b3a7640000615dc0565b89896150e1565b9250614b408382615dd3565b90505b9750975097945050505050565b6000808080614b6786670de0b6b3a7640000615dc0565b9350614b9c8786611c718b612cbd897f000000000000000000000000000000000000000000000000000000000000000061278e565b9350614bc8847f000000000000000000000000000000000000000000000000000000000000000061278e565b91506000614be9614be189670de0b6b3a7640000615dc0565b8a9088612edb565b9050614c15817f000000000000000000000000000000000000000000000000000000000000000061278e565b9350614c41847f000000000000000000000000000000000000000000000000000000000000000061278e565b915050945094509450949050565b600080614c6885614c6088876155c8565b8a9190612edb565b9050614c75888486612edb565b614c7f9082615dd3565b905086811115614c9657614c938782615dc0565b91505b509695505050505050565b60008060008060008088881015614cfe578615614cc657614cc38d898b612edb565b9c505b614cd18c898b612edb565b9b50614cdd8b8d615ef7565b9050614cea8b898b612edb565b9a50614cf78a898b612edb565b9950614d0b565b614d088b8d615ef7565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b03198212801590614d3d575060016001607f1b038213155b612c625760405163a5353be560e01b815260040160405180910390fd5b6000818313614d6957816105f3565b5090919050565b60008183136149a057826105f3565b6000612cc3878787614d9988670de0b6b3a7640000615dc0565b8787615023565b6000808080614db786670de0b6b3a7640000615dc0565b9050614dec8786611c718b612cbd867f000000000000000000000000000000000000000000000000000000000000000061278e565b9350614e18847f000000000000000000000000000000000000000000000000000000000000000061278e565b91506000614e31614be189670de0b6b3a7640000615dc0565b9050614e5d817f000000000000000000000000000000000000000000000000000000000000000061278e565b9350614e89847f000000000000000000000000000000000000000000000000000000000000000061278e565b614e939084615dd3565b925050509450945094915050565b6000818311614d6957816105f3565b6000614ebe612dda83613aeb565b60008080526002602052600080516020615ff68339815191525491925090614ee7908590615dd3565b9050611023858383876149a6565b6000826000190484118302158202614f0c57600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000614f2f6123f8565b614f399190615dfc565b9050808311614f49576000614f53565b614f538184615dc0565b915061499d614f8a670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000615dfc565b8390614879565b60008080614f9f8585614879565b90506000614fb082868c8a8d6155dd565b90506000614feb614fc9670de0b6b3a76400008a614879565b614fe1614fda8b612cad8b8f61278e565b869061278e565b612cad9085615dc0565b9050614ff7898c615dc0565b6150018b83615dc0565b945094505050505b965096945050505050565b60008183116149a057826105f3565b60008061503488888888888861560b565b909250905080614c9657604051637ac17d2560e01b815260040160405180910390fd5b600080806150658585614879565b9050600061507682868b8a8c6155dd565b905060006150ab61508f670de0b6b3a76400008a614879565b612cad6150a4670de0b6b3a764000087615dd3565b8590614879565b905060006150b98288614879565b90506150c58b82615dc0565b6150cf838c615dc0565b95509550505050509550959350505050565b6000806150ee8484614879565b905060006150ff82858b898c6155dd565b905061510f86612cad898b615dc0565b97506000615136615128670de0b6b3a76400008961488e565b612cad85613ae58d87615dc0565b90506151428186614879565b905061514e8a82615dc0565b9a9950505050505050505050565b60008080615175614af988670de0b6b3a7640000615dc0565b90508615614b4357615187888861278e565b9150614b348a8a846151a18a670de0b6b3a7640000615dc0565b8989615023565b60606105f084846000856156ac565b6000806151c48484614879565b905060006151d582858b898c6155dd565b90506151ef86612cad6151e88a8d615dd3565b879061278e565b98506151fb828a61278e565b9850600061521e615214670de0b6b3a76400008961488e565b612cad8c85615dc0565b905061514e818a615dc0565b600080821361524c57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361545857506000919050565b680755bf798b4a1bf1e582126154815760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60006105f38383670de0b6b3a7640000614ef5565b60006155e982846148a3565b6156016155fa85612cad898961278e565b889061278e565b613eb99190615dd3565b600080806156198585614879565b9050600061562a82868c8a8d6155dd565b905061563a87612cad8a8c615dd3565b98508881101561565257600080935093505050615009565b6000615677615669670de0b6b3a76400008a61488e565b612cad85613ae58e87615dc0565b90506156838187614879565b9050808b111561569a57615697818c615dc0565b94505b60019350505050965096945050505050565b60608247101561570d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016107ac565b600080866001600160a01b031685876040516157299190615fa6565b60006040518083038185875af1925050503d8060008114615766576040519150601f19603f3d011682016040523d82523d6000602084013e61576b565b606091505b509150915061577c87838387615789565b925050505b949350505050565b606083156157f85782516000036157f1576001600160a01b0385163b6157f15760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016107ac565b5081615781565b615781838381511561580d5781518083602001fd5b8060405162461bcd60e51b81526004016107ac9190615fc2565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156158665780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561589f578181015183820152602001615887565b50506000910152565b6000602082840312156158ba57600080fd5b815167ffffffffffffffff808211156158d257600080fd5b818401915084601f8301126158e657600080fd5b8151818111156158f8576158f861586e565b604051601f8201601f19908116603f011681019083821181831017156159205761592061586e565b8160405282815287602084870101111561593957600080fd5b612cc3836020830160208801615884565b6001600160a01b038116811461595f57600080fd5b50565b801515811461595f57600080fd5b60008060006060848603121561598557600080fd5b8335925060208401356159978161594a565b915060408401356159a781615962565b809150509250925092565b6000602082840312156159c457600080fd5b81356105f38161594a565b6000602082840312156159e157600080fd5b81356105f381615962565b600080600080600060a08688031215615a0457600080fd5b8535945060208601359350604086013592506060860135615a248161594a565b91506080860135615a3481615962565b809150509295509295909350565b60008083601f840112615a5457600080fd5b50813567ffffffffffffffff811115615a6c57600080fd5b6020830191508360208260051b850101111561158057600080fd5b60008060008060008060808789031215615aa057600080fd5b8635615aab8161594a565b95506020870135615abb8161594a565b9450604087013567ffffffffffffffff80821115615ad857600080fd5b615ae48a838b01615a42565b90965094506060890135915080821115615afd57600080fd5b50615b0a89828a01615a42565b979a9699509497509295939492505050565b60008060008060808587031215615b3257600080fd5b843593506020850135615b448161594a565b92506040850135615b548161594a565b9396929550929360600135925050565b60008060008060808587031215615b7a57600080fd5b84359350602085013592506040850135615b938161594a565b91506060850135615ba381615962565b939692955090935050565b60008060008060808587031215615bc457600080fd5b843593506020850135615bd68161594a565b9250604085013591506060850135615ba38161594a565b60008060408385031215615c0057600080fd5b8235615c0b8161594a565b91506020830135615c1b81615962565b809150509250929050565b600080600080600080600060e0888a031215615c4157600080fd5b8735615c4c8161594a565b96506020880135615c5c8161594a565b95506040880135615c6c81615962565b945060608801359350608088013560ff81168114615c8957600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215615cb957600080fd5b823591506020830135615c1b81615962565b600080600060608486031215615ce057600080fd5b833592506020840135615cf28161594a565b929592945050506040919091013590565b600080600080600060a08688031215615d1b57600080fd5b853594506020860135615d2d8161594a565b93506040860135615d3d8161594a565b9250606086013591506080860135615a348161594a565b600060208284031215615d6657600080fd5b5035919050565b600060208284031215615d7f57600080fd5b5051919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561263657612636615daa565b8082018082111561263657612636615daa565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761263657612636615daa565b6001600160801b03828116828216039080821115615e3357615e33615daa565b5092915050565b600060018201615e4c57615e4c615daa565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082615e7857615e78615e53565b500690565b6001600160801b03818116838216019080821115615e3357615e33615daa565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561263657612636615daa565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561263657612636615daa565b8181036000831280158383131683831282161715615e3357615e33615daa565b6000600160ff1b8201615f2c57615f2c615daa565b5060000390565b8082018281126000831280158216821582161715615f5357615f53615daa565b505092915050565b600060208284031215615f6d57600080fd5b81516105f381615962565b600082615f8757615f87615e53565b600160ff1b821460001984141615615fa157615fa1615daa565b500590565b60008251615fb8818460208701615884565b9190910192915050565b6020815260008251806020840152615fe1816040850160208701615884565b601f01601f1916919091016040019291505056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba26469706673582212208039995a18e2fd5898de9ac29fd84a6b06692271ca35e1d5838383de62c3cd2664736f6c63430008130033",
    sourceMap:
      "294:1113:131:-:0;;;454:1:97;429:26;;352:418:131;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;764:28:0;;;;;1944:20:41;;;;1974:34;;;;2254:10:39::2;::::0;;;;::::2;::::0;;::::2;::::0;;-1:-1:-1;;;2254:10:39::2;::::0;;::::2;::::0;2077:264;;616:7:131;;637:13;;664:15;;693:14;;721:5;;740:13;;616:7;;637:13;;664:15;;693:14;;616:7;;637:13;;664:15;;693:14;;616:7;;637:13;;664:15;;693:14;;2077:264:39::2;::::0;2105:121:::2;::::0;2244:21;;2283:13:::2;::::0;2322:4:::2;::::0;2077:264:::2;4261:25:165::0;;;4317:2;4302:18;;4295:34;;;;4360:2;4345:18;;4338:34;-1:-1:-1;;;;;4408:32:165;4403:2;4388:18;;4381:60;4248:3;4233:19;;4030:417;2077:264:39::2;;::::0;;-1:-1:-1;;2077:264:39;;::::2;::::0;;;;;;2054:297;;2077:264:::2;2054:297:::0;;::::2;::::0;;;;2035:316:::2;::::0;4466:17:7;;-1:-1:-1;;;;;4453:30:7;;;5012:28;;;5043:3;-1:-1:-1;5008:113:7;;-1:-1:-1;5008:113:7;;-1:-1:-1;;5008:113:7;5069:41;;-1:-1:-1;;;5069:41:7;;;;;;;;;;;5008:113;5154:28;;;;5130:52;;5221:32;;;;5193:60;;5418:26;;;;5448:1;5418:31;5414:108;;5472:39;;-1:-1:-1;;;5472:39:7;;;;;;;;;;;5414:108;5553:26;;;;;5531:48;;5633:26;5606:24;;;;:53;;:127;;;5702:7;:26;;;5675:7;:24;;;:53;;;;:::i;:::-;:58;;5606:127;5589:224;;;5765:37;;-1:-1:-1;;;5765:37:7;;;;;;;;;;;5589:224;5842:24;;;;5822:44;;5891:19;;;;5876:34;;5941:25;;;;5920:46;;5990:18;;;;5976:11;:32;;-1:-1:-1;;;;;;5976:32:7;-1:-1:-1;;;;;5976:32:7;;;;;;;6034:20;;;6018:36;;;6082:12;;;;:18;6103:4;-1:-1:-1;;6082:65:7;;;6143:4;6123:7;:12;;;:17;;;:24;6082:65;:111;;;;6189:4;6163:7;:12;;;:23;;;:30;6082:111;6065:202;;;6225:31;;-1:-1:-1;;;6225:31:7;;;;;;;;;;;6065:202;6288:12;;;;;:18;6276:30;;6327:12;;:17;;;6316:28;;6371:12;:23;;;6354:40;;6452:17;;;6439:30;;6288:18;3062:182:2::2;3086:7;:18;;;3082:1;:22;3062:182;;;3135:38;::::0;;;;::::2;::::0;;;::::2;3153:15;3135:38:::0;::::2;::::0;;-1:-1:-1;3135:38:2::2;::::0;::::2;::::0;;;3122:7:::2;:52:::0;;::::2;::::0;;::::2;::::0;;;;;;;;;;-1:-1:-1;;;;;3122:52:2::2;::::0;::::2;::::0;::::2;::::0;;;::::2;::::0;;;::::2;::::0;3216:3:::2;3062:182;;;-1:-1:-1::0;;;;;;;;2280:12:13;::::1;;::::0;-1:-1:-1;2825:16:13::1;::::0;-1:-1:-1;;2825:14:13::1;:16:::0;-1:-1:-1;;;2825:16:13:i:1;:::-;2796:7;:25;;;:45;2792:121;;2864:38;;-1:-1:-1::0;;;2864:38:13::1;;;;;;;;;;;2792:121;2956:5;-1:-1:-1::0;;;;;2956:11:13::1;;:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;2926:43:13::1;2934:7;:17;;;-1:-1:-1::0;;;;;2926:43:13::1;;2922:111;;2992:30;;-1:-1:-1::0;;;2992:30:13::1;;;;;;;;;;;2922:111;3121:17:::0;;3155:4:::1;::::0;3121:59:::1;::::0;-1:-1:-1;;;3121:59:13;;-1:-1:-1;;;;;5122:32:165;;;3121:59:13::1;::::0;::::1;5104:51:165::0;-1:-1:-1;;5171:18:165;;;5164:34;3121:25:13;::::1;::::0;::::1;::::0;5077:18:165;;3121:59:13::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3116:126;;3203:28;;-1:-1:-1::0;;;3203:28:13::1;;;;;;;;;;;3116:126;3402:9;3397:348;3421:8;:15;3417:1;:19;3397:348;;;3457:14;3474:8;3483:1;3474:11;;;;;;;;:::i;:::-;;;;;;;3457:28;;3547:4;;-1:-1:-1::0;;;;;3520:32:13::1;3528:6;-1:-1:-1::0;;;;;3520:32:13::1;;:90;;;;3599:10;;-1:-1:-1::0;;;;;3572:38:13::1;3580:6;-1:-1:-1::0;;;;;3572:38:13::1;;3520:90;3499:196;;;3650:30;;-1:-1:-1::0;;;3650:30:13::1;;;;;;;;;;;3499:196;-1:-1:-1::0;;;;;3708:19:13::1;;::::0;;;:11:::1;:19;::::0;;;;:26;;-1:-1:-1;;3708:26:13::1;3730:4;3708:26;::::0;;3438:3;::::1;::::0;::::1;:::i;:::-;;;;3397:348;;;;1940:1811:::0;;;;;;352:418:131;;;;;;294:1113;;6602:134:13;6686:4;;:43;;-1:-1:-1;;;6686:43:13;;565:4:32;6686:43:13;;;6006:25:165;6660:7:13;;-1:-1:-1;;;;;6686:20:13;;;;5979:18:165;;6686:43:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6679:50;;6602:134;:::o;14:127:165:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:250;213:2;207:9;255:6;243:19;;-1:-1:-1;;;;;277:34:165;;313:22;;;274:62;271:88;;;339:18;;:::i;:::-;375:2;368:22;146:250;:::o;401:139::-;-1:-1:-1;;;;;484:31:165;;474:42;;464:70;;530:1;527;520:12;464:70;401:139;:::o;545:154::-;632:13;;654:39;632:13;654:39;:::i;:::-;545:154;;;:::o;704:525::-;766:5;814:4;802:9;797:3;793:19;789:30;786:50;;;832:1;829;822:12;786:50;865:2;859:9;907:4;895:17;;-1:-1:-1;;;;;927:34:165;;963:22;;;924:62;921:88;;;989:18;;:::i;:::-;1029:10;1025:2;1018:22;;1058:6;1049:15;;1094:9;1088:16;1080:6;1073:32;1159:2;1148:9;1144:18;1138:25;1133:2;1125:6;1121:15;1114:50;1218:2;1207:9;1203:18;1197:25;1192:2;1184:6;1180:15;1173:50;;704:525;;;;:::o;1234:982::-;1299:5;1352:3;1345:4;1337:6;1333:17;1329:27;1319:55;;1370:1;1367;1360:12;1319:55;1393:13;;1425:4;-1:-1:-1;;;;;1478:10:165;;;1475:36;;;1491:18;;:::i;:::-;1537:2;1534:1;1530:10;1569:2;1563:9;1632:2;1628:7;1623:2;1619;1615:11;1611:25;1603:6;1599:38;1687:6;1675:10;1672:22;1667:2;1655:10;1652:18;1649:46;1646:72;;;1698:18;;:::i;:::-;1734:2;1727:22;1784:18;;;1860:15;;;1856:24;;;1818:15;;;;-1:-1:-1;1892:15:165;;;1889:35;;;1920:1;1917;1910:12;1889:35;1956:2;1948:6;1944:15;1933:26;;1968:218;1984:6;1979:3;1976:15;1968:218;;;2057:3;2051:10;2074:39;2107:5;2074:39;:::i;:::-;2126:18;;2164:12;;;;2001;;;;1968:218;;;2204:6;1234:982;-1:-1:-1;;;;;;;1234:982:165:o;2221:1804::-;2406:6;2414;2422;2430;2438;2446;2490:9;2481:7;2477:23;2520:3;2516:2;2512:12;2509:32;;;2537:1;2534;2527:12;2509:32;2560:6;2586:2;2582;2578:11;2575:31;;;2602:1;2599;2592:12;2575:31;2628:17;;:::i;:::-;2615:30;;2668:48;2706:9;2668:48;:::i;:::-;2661:5;2654:63;2770:2;2759:9;2755:18;2749:25;2744:2;2737:5;2733:14;2726:49;2828:2;2817:9;2813:18;2807:25;2802:2;2795:5;2791:14;2784:49;2886:2;2875:9;2871:18;2865:25;2860:2;2853:5;2849:14;2842:49;2945:3;2934:9;2930:19;2924:26;2918:3;2911:5;2907:15;2900:51;3005:3;2994:9;2990:19;2984:26;2978:3;2971:5;2967:15;2960:51;3065:3;3054:9;3050:19;3044:26;3038:3;3031:5;3027:15;3020:51;3104:58;3157:3;3146:9;3142:19;3104:58;:::i;:::-;3098:3;3091:5;3087:15;3080:83;3182:3;3217:57;3270:2;3259:9;3255:18;3217:57;:::i;:::-;3201:14;;;3194:81;3294:3;3329:62;3383:7;3363:18;;;3329:62;:::i;:::-;3324:2;3317:5;3313:14;3306:86;;3449:6;3438:9;3434:22;3428:29;3419:6;3412:5;3408:18;3401:57;3515:3;3504:9;3500:19;3494:26;3485:6;3478:5;3474:18;3467:54;3540:5;3530:15;;3564:57;3617:2;3606:9;3602:18;3564:57;:::i;:::-;3554:67;;;;3661:3;3650:9;3646:19;3640:26;3630:36;;3685:58;3738:3;3727:9;3723:19;3685:58;:::i;:::-;3675:68;;3762:58;3815:3;3804:9;3800:19;3762:58;:::i;:::-;3864:3;3849:19;;3843:26;3752:68;;-1:-1:-1;;;;;;3881:30:165;;3878:50;;;3924:1;3921;3914:12;3878:50;3947:72;4011:7;4002:6;3991:9;3987:22;3947:72;:::i;:::-;3937:82;;;2221:1804;;;;;;;;:::o;4452:209::-;4484:1;4510;4500:132;;4554:10;4549:3;4545:20;4542:1;4535:31;4589:4;4586:1;4579:15;4617:4;4614:1;4607:15;4500:132;-1:-1:-1;4646:9:165;;4452:209::o;4666:259::-;4736:6;4789:2;4777:9;4768:7;4764:23;4760:32;4757:52;;;4805:1;4802;4795:12;4757:52;4837:9;4831:16;4856:39;4889:5;4856:39;:::i;:::-;4914:5;4666:259;-1:-1:-1;;;4666:259:165:o;5209:277::-;5276:6;5329:2;5317:9;5308:7;5304:23;5300:32;5297:52;;;5345:1;5342;5335:12;5297:52;5377:9;5371:16;5430:5;5423:13;5416:21;5409:5;5406:32;5396:60;;5452:1;5449;5442:12;5491:127;5552:10;5547:3;5543:20;5540:1;5533:31;5583:4;5580:1;5573:15;5607:4;5604:1;5597:15;5623:232;5662:3;5683:17;;;5680:140;;5742:10;5737:3;5733:20;5730:1;5723:31;5777:4;5774:1;5767:15;5805:4;5802:1;5795:15;5680:140;-1:-1:-1;5847:1:165;5836:13;;5623:232::o;6042:184::-;6112:6;6165:2;6153:9;6144:7;6140:23;6136:32;6133:52;;;6181:1;6178;6171:12;6133:52;-1:-1:-1;6204:16:165;;6042:184;-1:-1:-1;6042:184:165:o;:::-;294:1113:131;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
    linkReferences: {},
  },
  deployedBytecode: {
    object:
      "0x6080604052600436106101805760003560e01c80637180c8ca116100d1578063a22cb4651161008a578063c326a90311610064578063c326a90314610570578063e44808bc14610583578063ed64bab2146105a3578063fa3fcea7146105c357610180565b8063a22cb46514610510578063ab033ea914610530578063c23632a71461055057610180565b80637180c8ca146104685780639032c7261461048857806399530b06146104a85780639a408321146104bd5780639cd241af146104dd578063a179403b146104fd57610180565b80632002b3331161013e5780633644e515116101185780633644e515146103d45780634536ee2f146104085780634ed2d6ac146104285780636f8c3a5b1461044857610180565b80632002b3331461036d5780632787d5951461038057806330adf81f146103a057610180565b8062ebf5dd1461029057806301681a62146102c357806302329a29146102e557806306dae82a1461030557806317fad7fc1461032d5780631c0f12b61461034d575b34801561018c57600080fd5b5060003660606000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031685856040516101cf929190615827565b600060405180830381855af49150503d806000811461020a576040519150601f19603f3d011682016040523d82523d6000602084013e61020f565b606091505b5091509150811561023357604051638bb0a34b60e01b815260040160405180910390fd5b600061023e82615837565b90506001600160e01b03198116636e64089360e11b1461026057815160208301fd5b815160031981016004840190815292610281918101602001906024016158a8565b80519650602001945050505050f35b34801561029c57600080fd5b506102b06102ab366004615970565b6105e3565b6040519081526020015b60405180910390f35b3480156102cf57600080fd5b506102e36102de3660046159b2565b6105fa565b005b3480156102f157600080fd5b506102e36103003660046159cf565b61073e565b6103186103133660046159ec565b610787565b604080519283526020830191909152016102ba565b34801561033957600080fd5b506102e3610348366004615a87565b610a0c565b34801561035957600080fd5b506102e3610368366004615b1c565b610ac0565b6102b061037b366004615b64565b610ad3565b34801561038c57600080fd5b506102b061039b3660046159cf565b610d28565b3480156103ac57600080fd5b506102b07f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e97367381565b3480156103e057600080fd5b506102b07f000000000000000000000000000000000000000000000000000000000000000081565b34801561041457600080fd5b50610318610423366004615b64565b610e0c565b34801561043457600080fd5b506102e3610443366004615bae565b610fdc565b34801561045457600080fd5b506102b06104633660046159ec565b61102a565b34801561047457600080fd5b506102e3610483366004615bed565b611298565b34801561049457600080fd5b506102e36104a3366004615c26565b611310565b3480156104b457600080fd5b506102b061155f565b3480156104c957600080fd5b506103186104d8366004615ca6565b61156e565b3480156104e957600080fd5b506102e36104f8366004615ccb565b611587565b61031861050b3660046159ec565b611598565b34801561051c57600080fd5b506102e361052b366004615bed565b611791565b34801561053c57600080fd5b506102e361054b3660046159b2565b6117fd565b34801561055c57600080fd5b5061031861056b366004615b64565b611871565b6102b061057e3660046159ec565b611a28565b34801561058f57600080fd5b506102e361059e366004615d03565b611cea565b3480156105af57600080fd5b506102e36105be366004615d54565b611d3a565b3480156105cf57600080fd5b506102b06105de3660046159ec565b611e40565b60006105f084848461204b565b90505b9392505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015906106435750336000908152600f602052604090205460ff16155b15610660576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03811660009081526014602052604090205460ff166106995760405163350b944160e11b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa1580156106e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107049190615d6d565b905061073a6001600160a01b0383167f0000000000000000000000000000000000000000000000000000000000000000836121bc565b5050565b336000908152600f602052604090205460ff1661076d576040516282b42960e81b815260040160405180910390fd5b600c80549115156101000261ff0019909216919091179055565b6000806000546001146107b55760405162461bcd60e51b81526004016107ac90615d86565b60405180910390fd5b6002600055600c54610100900460ff16156107e3576040516313d0ff5960e31b815260040160405180910390fd5b6107eb61221f565b7f000000000000000000000000000000000000000000000000000000000000000087101561082c5760405163211ddda360e11b815260040160405180910390fd5b6000806108398986612240565b915091508681101561085e576040516342af972b60e01b815260040160405180910390fd5b60006108686123f8565b9050610874818361242e565b506000806000610884868661263c565b600854919a509295509093509091506108ae908390600160801b90046001600160801b0316615dc0565b6108eb846108ba61276d565b6108c49190615dd3565b7f00000000000000000000000000000000000000000000000000000000000000009061278e565b111561090a5760405163512095c760e01b815260040160405180910390fd5b868c111561092b5760405163c972651760e01b815260040160405180910390fd5b806010600082825461093d9190615dd3565b9091555061096d90507f000000000000000000000000000000000000000000000000000000000000000085615dd3565b975061097d83888488888d6127a3565b600061098a60018a61299d565b9050610997818c8a6129d2565b60008e9050818c6001600160a01b03167f7b7d51ee23746cf6ef2078de2a5b53073226b516a1c892a1e882c581026bf4b38c848d6040516109eb939291909283526020830191909152604082015260600190565b60405180910390a35050505050505050600160005590969095509350505050565b6001600160a01b0386161580610a2957506001600160a01b038516155b15610a475760405163f0dd15fd60e01b815260040160405180910390fd5b828114610a675760405163174861a760e31b815260040160405180910390fd5b60005b83811015610ab757610aaf858583818110610a8757610a87615de6565b905060200201358888868686818110610aa257610aa2615de6565b9050602002013533612a7b565b600101610a6a565b50505050505050565b610acd8484848433612a7b565b50505050565b60008054600114610af65760405162461bcd60e51b81526004016107ac90615d86565b6002600055610b0361221f565b600c5460ff1615610b2757604051637983c05160e01b815260040160405180910390fd5b600080610b348785612240565b9092509050610b647f00000000000000000000000000000000000000000000000000000000000000006002615dfc565b821015610b8457604051632afb507160e21b815260040160405180910390fd5b610baf7f00000000000000000000000000000000000000000000000000000000000000006002615dfc565b610bb99083615dc0565b9250610bcc610bc66123f8565b8261242e565b50600c805460ff19166001179055610be382612c3c565b600880546001600160801b0319166001600160801b0392909216919091179055610c78610c73837f0000000000000000000000000000000000000000000000000000000000000000897f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612c66565b612c3c565b600880546001600160801b03928316600160801b029216919091179055610cc16000807f00000000000000000000000000000000000000000000000000000000000000006129d2565b610ccd600086856129d2565b60408051848152602081018990529081018790526001600160a01b038616907f60c26087830ee0ee6d86bdb3a10e19f3fd49af366c77421d7fe4596811d6274e9060600160405180910390a250506001600055949350505050565b60008054600114610d4b5760405162461bcd60e51b81526004016107ac90615d86565b60026000908155338152600f602052604090205460ff16158015610d985750336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614155b8015610daf57506011546001600160a01b03163314155b15610dcc576040516282b42960e81b815260040160405180910390fd5b601080546000909155610e00817f00000000000000000000000000000000000000000000000000000000000000008561204b565b60016000559392505050565b600080600054600114610e315760405162461bcd60e51b81526004016107ac90615d86565b60026000908155610e40612cce565b9050610e4d610bc66123f8565b50610e5781612d61565b600d548792506001600160801b031680831115610e7b57806001600160801b031692505b82600003610e9157600080935093505050610fcc565b610ea0600360f81b3385612e3b565b600d546001600160801b03600160801b909104811690600090610ec890869084908616612edb565b9050610ed385612c3c565b610edd9084615e13565b600d80546001600160801b0319166001600160801b0392909216919091179055610f0681612c3c565b600d8054601090610f28908490600160801b90046001600160801b0316615e13565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610f5781898961204b565b955085610f648a8761278e565b1115610f835760405163c972651760e01b815260040160405180910390fd5b60408051868152602081018890526001600160a01b038a16917f07cd0949bbc0d60ad35053a0459db413c148f758b7781aaf6b258018d18ad0ac910160405180910390a2505050505b6001600055909590945092505050565b83610fe681612ef9565b6001600160a01b0316336001600160a01b03161461101757604051632aab8bd360e01b815260040160405180910390fd5b61102385858585612fb6565b5050505050565b6000805460011461104d5760405162461bcd60e51b81526004016107ac90615d86565b60026000557f00000000000000000000000000000000000000000000000000000000000000008510156110935760405163211ddda360e11b815260040160405180910390fd5b600061109d612cce565b90506110a9878261242e565b506110bf6110b860028961299d565b3388612e3b565b6000806000806000806110d38c888f613023565b600854959b50939950919750955093509150611100908790600160801b90046001600160801b0316615dc0565b61110c846108ba61276d565b111561112b5760405163512095c760e01b815260040160405180910390fd5b8b8d88428211156111ed5783601060008282546111489190615dd3565b9091555061115b9050838a8988866131f7565b60006111877f000000000000000000000000000000000000000000000000000000000000000084615dc0565b6000818152600e6020526040812054919250600160801b909104600f0b906111ba9086908a908e908d9089908990613371565b6000828152600e60205260409020546111e190600f83810b91600160801b9004900b613519565b6111ea8c612d61565b50505b60006111fa898f8f61204b565b90508e81101561121d5760405163c972651760e01b815260040160405180910390fd5b61122860028461299d565b8e6001600160a01b03167f39d1403e56c69205ef368007a55ee1304b0f388631dca237a1710d04e3e8950f858488604051611276939291909283526020830191909152604082015260600190565b60405180910390a39a5050505050505050505050600160005595945050505050565b6011546001600160a01b031633146112c2576040516282b42960e81b815260040160405180910390fd5b6001600160a01b0382166000818152600f6020526040808220805460ff1916851515179055517fa4336c0cb1e245b95ad204faed7e940d6dc999684fd8b5e1ff597a0c4efca8ab9190a25050565b834211156113315760405163f87d927160e01b815260040160405180910390fd5b6001600160a01b0387166113585760405163f0dd15fd60e01b815260040160405180910390fd5b6001600160a01b0387811660008181526007602090815260408083205481517f65619c8664d6db8aae8c236ad19598696159942a4245b23b45565cc18e9736738185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e08401909452835193019290922061190160f01b6101008301527f00000000000000000000000000000000000000000000000000000000000000006101028301526101228201526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa158015611484573d6000803e3d6000fd5b505050602060405103519050886001600160a01b0316816001600160a01b0316146114c257604051638baa579f60e01b815260040160405180910390fd5b6001600160a01b038916600090815260076020526040812080549091906114e890615e3a565b909155506001600160a01b038981166000818152600360209081526040808320948d1680845294825291829020805460ff19168c151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050505050505050565b6000611569612cce565b905090565b60008061157b8484612240565b915091505b9250929050565b61159383838333612fb6565b505050565b6000806000546001146115bd5760405162461bcd60e51b81526004016107ac90615d86565b6002600055600c54610100900460ff16156115eb576040516313d0ff5960e31b815260040160405180910390fd5b6115f361221f565b7f00000000000000000000000000000000000000000000000000000000000000008710156116345760405163211ddda360e11b815260040160405180910390fd5b600061163e612cce565b905085811015611661576040516342af972b60e01b815260040160405180910390fd5b600061166b6123f8565b90506000611679828461242e565b90506116a57f000000000000000000000000000000000000000000000000000000000000000083615dd3565b94506000806116b58c8685613640565b60108054939950919450925082916000906116d1908490615dd3565b909155505050848a10156116f85760405163c972651760e01b815260040160405180910390fd5b6117028588612240565b50506117108b828689613774565b600061171d60028861299d565b905061172a818a8e6129d2565b60408051888152602081018890529081018d90528c9082906001600160a01b038c16907f851bac68873b7adb346bcf4bff36324c6f322b58f9f0f50c1d3a8568242ca66b9060600160405180910390a3505050505050600160005590969095509350505050565b3360008181526003602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6011546001600160a01b03163314611827576040516282b42960e81b815260040160405180910390fd5b601180546001600160a01b0319166001600160a01b0383169081179091556040517f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab90600090a250565b6000806000546001146118965760405162461bcd60e51b81526004016107ac90615d86565b60026000557f00000000000000000000000000000000000000000000000000000000000000008610156118dc5760405163211ddda360e11b815260040160405180910390fd5b60006118e6612cce565b90506118f3610bc66123f8565b506118fd81612d61565b6002602052600080516020615ff683398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611958916001600160801b0390911690615dc0565b905060006119668284615dd3565b90506119746000338c612e3b565b60006119838b868487876139b2565b96509050611996600360f81b8a886129d2565b6119a1818a8a61204b565b9650868a11156119c45760405163c972651760e01b815260040160405180910390fd5b604080518c8152602081018990529081018790528b906001600160a01b038b16907f59c3a0b60c6ab7deb62e1440c9e72441db6db7dfe514dba8cb18e60c0d896efa9060600160405180910390a25050505050506001600055909590945092505050565b60008054600114611a4b5760405162461bcd60e51b81526004016107ac90615d86565b6002600055600c54610100900460ff1615611a79576040516313d0ff5960e31b815260040160405180910390fd5b611a8161221f565b7f0000000000000000000000000000000000000000000000000000000000000000861015611ac25760405163211ddda360e11b815260040160405180910390fd5b6000611b4a611acf61276d565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000613ab0565b905085811080611b5957508481115b15611b7757604051633b61151160e11b815260040160405180910390fd5b600080611b848986612240565b91509150611b93610bc66123f8565b50600d54600360f81b600090815260026020527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091611bdf916001600160801b0390911690615dc0565b60008080526002602052600080516020615ff68339815191525491925090611c08908390615dd3565b9050600080611c1685613aeb565b90506000611c2382613c51565b9050611c2e87613ec3565b6008546001600160801b038082168452600954600f0b6020850152600160801b909104166040830152611c6082613c51565b9250611c788482611c718187615dc0565b9190612edb565b98505050611c8860008a896129d2565b611c9184612d61565b60408051888152602081018e90526001600160a01b038b16917f06239653922ac7bea6aa2b19dc486b9361821d37712eb796adfd38d81de278ca910160405180910390a250506001600055509298975050505050505050565b84611cf481612ef9565b6001600160a01b0316336001600160a01b031614611d2557604051632aab8bd360e01b815260040160405180910390fd5b611d328686868686612a7b565b505050505050565b6000818152600e60205260409020546001600160801b031615611d5a5750565b6000611d646123f8565b9050611d907f000000000000000000000000000000000000000000000000000000000000000083615e69565b151580611d9c57508181105b15611dba5760405163ecd29e8160e01b815260040160405180910390fd5b808203611dd25761159381611dcd612cce565b61242e565b815b6000818152600e60205260409020546001600160801b0316828203611dfe57611dfb612cce565b90505b8015611e0e57611023848261242e565b50611e397f000000000000000000000000000000000000000000000000000000000000000082615dd3565b9050611dd4565b60008054600114611e635760405162461bcd60e51b81526004016107ac90615d86565b60026000557f0000000000000000000000000000000000000000000000000000000000000000851015611ea95760405163211ddda360e11b815260040160405180910390fd5b6000611eb3612cce565b9050611ebf878261242e565b50611ece6110b860018961299d565b600080600080600080611ee28c888f614045565b95509550955095509550955060008d90508d421015611fab578160106000828254611f0d9190615dd3565b90915550611f2090508d888786856141bc565b6000611f4c7f000000000000000000000000000000000000000000000000000000000000000083615dc0565b6000818152600e6020526040902054909150600160801b9004600f0b611f788f878b8a878f6001613371565b6000828152600e6020526040902054611f9f90600f83810b91600160801b9004900b613519565b611fa88a612d61565b50505b6000611fb8878d8d61204b565b9050808d1115611fdb5760405163c972651760e01b815260040160405180910390fd5b8d611fe760018461299d565b60408051858152602081018590529081018390526001600160a01b038f16907fe8c2c201cc00307ad7ec0d92d7ee5f89a796b4b1134d1672b08939eaf504d68c9060600160405180910390a35060016000559e9d5050505050505050505050505050565b600081156120f357604051635d043b2960e11b8152600481018590526001600160a01b0384811660248301523060448301527f0000000000000000000000000000000000000000000000000000000000000000169063ba087652906064016020604051808303816000875af11580156120c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120ec9190615d6d565b90506105f3565b6121276001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684866121bc565b6040516303d1689d60e11b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa15801561218f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121b39190615d6d565b95945050505050565b6040516001600160a01b03831660248201526044810182905261159390849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152614389565b341561223e57604051631574f9f360e01b815260040160405180910390fd5b565b60008082156123205761227e6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308761445e565b604051636e553f6560e01b8152600481018590523060248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636e553f65906044016020604051808303816000875af11580156122eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061230f9190615d6d565b9150612319612cce565b9050611580565b6040516363737ac960e11b8152600481018590526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c6e6f59290602401602060405180830381865afa158015612388573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123ac9190615d6d565b90506123e36001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633308461445e565b8092506123ee612cce565b9150509250929050565b60006124247f000000000000000000000000000000000000000000000000000000000000000042615e69565b6115699042615dc0565b6000828152600e6020526040812080546001600160801b031615158061245357504284115b1561246957546001600160801b03169050612636565b61247283612c3c565b81546001600160801b0319166001600160801b03919091161781556000600e816124bc7f000000000000000000000000000000000000000000000000000000000000000088615dc0565b815260208101919091526040016000908120546001600160801b031691506002816124e7828961299d565b8152602001908152602001600020549050600080821115612543576000806125128489876000614496565b9150915080601060008282546125289190615dd3565b9091555061253c905084600084808d6131f7565b6001925050505b60006002600061255460018b61299d565b815260200190815260200160002054905060008111156125af5760008061257e838a886001614496565b9150915080601060008282546125949190615dd3565b909155506125a8905083600084808e6141bc565b6001935050505b811561262d5760006125e17f00000000000000000000000000000000000000000000000000000000000000008a615dc0565b6000818152600e6020526040902080546001600160801b03811691829055919250600160801b91829004600f90810b92612621928492919004900b613519565b61262a89612d61565b50505b86955050505050505b92915050565b6000806000806126a961264d61276d565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000614564565b925060006127126126b861276d565b600854600160801b90046001600160801b03167f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000614585565b905061271d81614596565b60008061272b89848a6146f0565b909250905061273a8287615dc0565b94506127468186615dd3565b955061275381848a612edb565b935061275f848a615dc0565b965050505092959194509250565b600854600954600091611569916001600160801b0390911690600f0b614770565b60006105f38383670de0b6b3a7640000612edb565b600a546001600160801b03166127de610c73826127c885670de0b6b3a7640000615dfc565b600b546001600160801b031691908a600161478d565b600b80546001600160801b0319166001600160801b039290921691909117905561280787612c3c565b600880546000906128229084906001600160801b0316615e7d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061284f85612c3c565b60088054601090612871908490600160801b90046001600160801b0316615e13565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061289e86612c3c565b6128a89082615e7d565b600a80546001600160801b0319166001600160801b0383161790556000848152600e60205260408120805492935091600160801b9004600f0b906129046128ef8b8961278e565b6128fa8b6002615dfc565b610c739190615dc0565b835490915081908490601090612925908490600160801b9004600f0b615e9d565b82546001600160801b039182166101009390930a928302919092021990911617905550825461296290600f84810b91600160801b9004900b613519565b61296b87614807565b612988576040516318846de960e01b815260040160405180910390fd5b61299187612d61565b50505050505050505050565b60006001600160f81b038211156129c75760405163b7d0949760e01b815260040160405180910390fd5b5060f89190911b1790565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612a04908490615dd3565b909155505060008381526002602052604081208054839290612a27908490615dd3565b909155505060408051848152602081018390526001600160a01b0384169160009133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a4505050565b6001600160a01b0384161580612a9857506001600160a01b038316155b15612ab65760405163f0dd15fd60e01b815260040160405180910390fd5b836001600160a01b0316816001600160a01b031614612b7a576001600160a01b0380851660009081526003602090815260408083209385168352929052205460ff16612b7a5760008581526004602090815260408083206001600160a01b03808916855290835281842090851684529091529020546000198114612b785760008681526004602090815260408083206001600160a01b03808a168552908352818420908616845290915281208054859290612b72908490615dc0565b90915550505b505b60008581526001602090815260408083206001600160a01b038816845290915281208054849290612bac908490615dc0565b909155505060008581526001602090815260408083206001600160a01b038716845290915281208054849290612be3908490615dd3565b909155505060408051868152602081018490526001600160a01b038086169287821692918516917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a45050505050565b6000600160801b8210612c6257604051630f0af95160e11b815260040160405180910390fd5b5090565b600080612c77846301e13380614879565b9050612cc3612cb3612c91670de0b6b3a76400008661488e565b612c9b888561278e565b612cad90670de0b6b3a7640000615dd3565b906148a3565b612cbd888a61278e565b9061278e565b979650505050505050565b6040516303d1689d60e11b8152670de0b6b3a764000060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906307a2d13a90602401602060405180830381865afa158015612d3d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115699190615d6d565b6002602052600080516020615ff683398151915254600d54600360f81b60009081527f3ccfbaf375b4885450e3887dab0704e32e03acfeaf0442976372f6750e322c1f549091612dbc916001600160801b0390911690615dc0565b90506000612dca8284615dd3565b90506000612ddf612dda86613aeb565b613c51565b90506000612dee858385612edb565b9050600080612dfc886148fa565b905082811115612e1357612e108382615dc0565b91505b6000821180612e20575083155b15612e3157612e31828587896149a6565b5050505050505050565b60008381526001602090815260408083206001600160a01b038616845290915281208054839290612e6d908490615dc0565b909155505060008381526002602052604081208054839290612e90908490615dc0565b909155505060408051848152602081018390526000916001600160a01b0385169133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101612a6e565b6000826000190484118302158202612ef257600080fd5b5091020490565b604080513060208083019190915281830193909352815180820383018152606080830184528151918501919091206001600160f81b031960808401527f000000000000000000000000000000000000000000000000000000000000000090911b6bffffffffffffffffffffffff1916608183015260958201527f000000000000000000000000000000000000000000000000000000000000000060b5808301919091528251808303909101815260d5909101909152805191012090565b60008481526004602090815260408083206001600160a01b0385811680865291845282852090881680865290845293829020869055905185815290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050565b600080600080600080600061303788614a8f565b90506130a161304461276d565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f0000000000000000000000000000000000000000000000000000000000000000614ae0565b9098509550935060006130b56126b861276d565b90506130c081614596565b8a8a60008080806130d386898988614b50565b935093509350935080826130e79190615dd3565b98506130f38285615dc0565b6130fd908c615dd3565b9a506131098385615dd3565b613113908d615dd3565b9b5050505050505050506000600e60007f00000000000000000000000000000000000000000000000000000000000000008a61314f9190615dc0565b815260208101919091526040016000908120546001600160801b03169150428911613191576000898152600e60205260409020546001600160801b0316613193565b895b90506131c38b8784848e7f0000000000000000000000000000000000000000000000000000000000000000614c4f565b96506131cf8387615dc0565b95506131e18787878686866000614ca1565b9b9f939e50919c509a5098975095505050505050565b600a54600160801b90046001600160801b0316613240610c738261322385670de0b6b3a7640000615dfc565b600b54600160801b90046001600160801b031691908a600061478d565b600b80546001600160801b03928316600160801b02921691909117905561326686612c3c565b6132709082615e13565b600a80546001600160801b03928316600160801b0292169190911790555061329783612c3c565b600880546000906132b29084906001600160801b0316615e7d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055506132df82614d1c565b600980546000906132f4908490600f0b615e9d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061332484612c3c565b60088054601090613346908490600160801b90046001600160801b0316615e13565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050505050565b600061339d7f000000000000000000000000000000000000000000000000000000000000000085615dc0565b90506000600260006133b060018861299d565b81526020019081526020016000205490506000600260006133d260028961299d565b81526020019081526020016000205490508160001480156133f1575080155b15613416576000838152600e6020526040902080546001600160801b03169055612991565b600061345a8b6134268c8961278e565b613431906002615dfc565b8b61343c8c8b61278e565b6134469190615dd3565b6134509190615dc0565b610c739190615dd3565b905084156134b9576000848152600e60205260409020805482919060109061348d908490600160801b9004600f0b615eca565b92506101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555061350c565b6000848152600e6020526040902080548291906010906134e4908490600160801b9004600f0b615e9d565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055505b5050505050505050505050565b8082138015613529575060008212155b156135bc57600061353a8282614d5a565b6135449084615ef7565b6009549091506135719061356c908390600160801b90046001600160801b0316600f0b614d70565b614d1c565b60098054601090613593908490600160801b90046001600160801b0316615e13565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550505050565b8181131561073a5760008212613632576135d582614d1c565b6135de82614d1c565b6135e89190615eca565b6009805460109061360a908490600160801b90046001600160801b0316615e7d565b92506101000a8154816001600160801b0302191690836001600160801b031602179055505050565b6135e861356c826000614d5a565b60008060006136ac61365061276d565b600854600160801b90046001600160801b0316887f0000000000000000000000000000000000000000000000000000000000000000897f0000000000000000000000000000000000000000000000000000000000000000614d7f565b9150856136b9838761278e565b11156136d85760405163512095c760e01b815260040160405180910390fd5b60006136e56126b861276d565b90506136f081614596565b600061370688670de0b6b3a7640000848a614da0565b945090915061371790508382615dc0565b6137219085615dc0565b935061376787612cbd8a6137358789615dc0565b8a6137408d82614ea1565b8d7f0000000000000000000000000000000000000000000000000000000000000000614c4f565b9450505093509350939050565b600a546137be90610c7390600160801b90046001600160801b03166137a184670de0b6b3a7640000615dfc565b600b54600160801b90046001600160801b0316919088600161478d565b600b80546001600160801b03928316600160801b02921691909117905560006137e684612c3c565b6008546137fc91906001600160801b0316615e13565b600880546001600160801b0319166001600160801b038316179055905061382285612c3c565b60088054601090613844908490600160801b90046001600160801b0316615e7d565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061387185612c3c565b600a8054601090613893908490600160801b90046001600160801b0316615e7d565b82546101009290920a6001600160801b03818102199093169183160217909155600954600854600f9190910b9116121590506138e25760405163585fe6df60e11b815260040160405180910390fd5b60006138ec6123f8565b6000818152600e6020526040902054909150600160801b9004600f0b61391187612c3c565b6000838152600e602052604090208054601090613939908490600160801b9004600f0b615eca565b82546001600160801b039182166101009390930a9283029190920219909116179055506000828152600e602052604090205461398390600f83810b91600160801b9004900b613519565b61398c85614807565b6139a9576040516318846de960e01b815260040160405180910390fd5b610ab785612d61565b60008060006139c087613aeb565b905060006139cd82613c51565b90506139df6139da612cce565b6148fa565b93506139ec848a88612edb565b93506139ff6139fa85615f17565b613ec3565b6008546001600160801b038082168452600954600f0b6020850152600160801b9091041660408301526000613a3383613c51565b90506000613a42898385612edb565b9050613a4e8b8a615ef7565b613a589082615ef7565b90506000811215613aa1576000613a79613a7183615f17565b85908c612edb565b9050613a858188615dc0565b9650613a9081613ec3565b613a9b81898d614eb0565b60009150505b93505050509550959350505050565b600080613abf87878786614585565b9050612cc3613ad382866301e13380614ef5565b613ae583670de0b6b3a7640000615dc0565b90614879565b613b4860405180610160016040528060008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b60408051610160810182526008546001600160801b038082168352600954600f0b6020840152600160801b909104811692820192909252606081018490527f000000000000000000000000000000000000000000000000000000000000000060808201527f000000000000000000000000000000000000000000000000000000000000000060a08201527f000000000000000000000000000000000000000000000000000000000000000060c0820152600a54821660e0820152600b549091610100830191613c179116614f1b565b8152600a546001600160801b03600160801b9182900481166020840152600b54604090930192613c4992900416614f1b565b905292915050565b600080613c7183610140015184610120015161278e90919063ffffffff16565b61010084015160e0850151613c859161278e565b613c8f9190615ef7565b90506000613ca584600001518560200151614770565b90506000821315613d47576000613ce78286604001518760a001518860c00151670de0b6b3a7640000613cd89190615dc0565b89606001518a60800151614f91565b9150613cf590508184615014565b90508015613d4157613d2e828660400151838860c00151670de0b6b3a7640000613d1f9190615dc0565b89606001518a60800151615023565b85518690613d3d908390615dc0565b9052505b50613e05565b6000821215613e0557613d5982615f17565b91506000613d8d8286604001518760c00151670de0b6b3a7640000613d7e9190615dc0565b88606001518960800151615057565b9150613d9b90508184615014565b90508015613de757613dd4828660400151838860c00151670de0b6b3a7640000613dc59190615dc0565b89606001518a608001516150e1565b85518690613de3908390615dd3565b9052505b613df18184615dc0565b85518690613e00908390615dd3565b905250505b6000613e34856101000151670de0b6b3a7640000613e239190615dc0565b606087015160e08801519190612edb565b613e62866101400151670de0b6b3a7640000613e509190615dc0565b60608801516101208901519190612edb565b613e6c9190615ef7565b90506000818660000151613e809190615f33565b90508560a00151811215613ea75760405163aeeb825d60e01b815260040160405180910390fd5b80865260a0860151613eb99082615dc0565b9695505050505050565b80600003613ece5750565b6008546001600160801b03167f0000000000000000000000000000000000000000000000000000000000000000811015613f1b5760405163585fe6df60e11b815260040160405180910390fd5b6000613f278383615f33565b90507f0000000000000000000000000000000000000000000000000000000000000000811215613f6a5760405163585fe6df60e11b815260040160405180910390fd5b613f7381612c3c565b600880546001600160801b0319166001600160801b0392909216919091179055600954600090600f0b818112613fb557613fae838286612edb565b9150613fd5565b613fc9613fc182615f17565b849086612edb565b613fd290615f17565b91505b613fde82614d1c565b600980546001600160801b0319166001600160801b0392831617905560085461402191610c7391600160801b9004166140178785614770565b611c718787614770565b600880546001600160801b03928316600160801b0292169190911790555050505050565b600080600080600080600061405988614a8f565b90506140c361406661276d565b600854600160801b90046001600160801b03168c847f00000000000000000000000000000000000000000000000000000000000000008e7f000000000000000000000000000000000000000000000000000000000000000061515c565b9098509650935060006140d76126b861276d565b90506140e281614596565b6000806140f18d85858f614da0565b965090925090506141028288615dc0565b965061410e8183615dd3565b614118908a615dc0565b9850614124858a615dd3565b9750505050506141a885858584600e60007f00000000000000000000000000000000000000000000000000000000000000008e6141619190615dc0565b81526020810191909152604001600020546001600160801b0316428d1161419f5760008d8152600e60205260409020546001600160801b03166141a1565b8d5b6001614ca1565b999d939c50919a5098509695509350505050565b600a546001600160801b03166141f7610c73826141e185670de0b6b3a7640000615dfc565b600b546001600160801b031691908a600061478d565b600b80546001600160801b0319166001600160801b039290921691909117905561422086612c3c565b61422a9082615e13565b600a80546001600160801b0319166001600160801b03929092169190911790555061425483612c3c565b6008805460009061426f9084906001600160801b0316615e13565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555061429c82614d1c565b600980546000906142b1908490600f0b615eca565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506142e184612c3c565b60088054601090614303908490600160801b90046001600160801b0316615e7d565b82546101009290920a6001600160801b038181021990931691831602179091556008547f000000000000000000000000000000000000000000000000000000000000000091161090508061436b5750600954600854600f9190910b6001600160801b03909116125b156110235760405163585fe6df60e11b815260040160405180910390fd5b60006143de826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166151a89092919063ffffffff16565b90508051600014806143ff5750808060200190518101906143ff9190615f5b565b6115935760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016107ac565b6040516001600160a01b0380851660248301528316604482015260648101829052610acd9085906323b872dd60e01b906084016121e8565b6000806144a38686614879565b915060006144d1837f000000000000000000000000000000000000000000000000000000000000000061278e565b90506144fd817f000000000000000000000000000000000000000000000000000000000000000061278e565b915083156145205761450f8282615dc0565b6145199084615dc0565b9250614537565b61452a8282615dc0565b6145349084615dd3565b92505b8486101561455a5761454a838787612edb565b9250614557828787612edb565b91505b5094509492505050565b6000612cc387878761457e88670de0b6b3a7640000615dc0565b87876151b7565b60006121b382612cad858888612edb565b6013546001600160801b03600160801b820481169116426145d77f000000000000000000000000000000000000000000000000000000000000000084615dd3565b11156145e257505050565b6000601282815481106145f7576145f7615de6565b60009182526020822001805490925063ffffffff8116916401000000009091046001600160e01b03169061462b8342615dc0565b601254909150878202830190600090614645886001615dd3565b61464f9190615e69565b905060405180604001604052804263ffffffff168152602001836001600160e01b03168152506012828154811061468857614688615de6565b60009182526020918290208351938301516001600160e01b03166401000000000263ffffffff90941693909317920191909155604080518082019091526001600160801b03928316808252429093169101819052600160801b02176013555050505050505050565b60008061473a85612cbd85817f0000000000000000000000000000000000000000000000000000000000000000670de0b6b3a7640000614730818c614879565b612cbd9190615dc0565b9150614766827f000000000000000000000000000000000000000000000000000000000000000061278e565b9050935093915050565b60008061477d8385615ef7565b905060008112156105f357600080fd5b600081156147cd576147c66147a28487615dd3565b6147ac858761278e565b6147b6888a61278e565b6147c09190615dd3565b9061488e565b90506121b3565b8285036147dc575060006121b3565b613eb96147e98487615dc0565b6147f3858761278e565b6147fd888a61278e565b6147c09190615dc0565b60006148337f00000000000000000000000000000000000000000000000000000000000000008361278e565b600954600854614871916000916001600160801b03600160801b9092048216600f0b9161486191168761278e565b61486b9190615ef7565b90614d5a565b121592915050565b60006105f383670de0b6b3a764000084612edb565b60006105f383670de0b6b3a764000084614ef5565b6000816000036148bc5750670de0b6b3a7640000612636565b826000036148cc57506000612636565b8160006148d88561522a565b90508181026148ef670de0b6b3a764000082615f78565b9050613eb98161543d565b600954600090819061491c90600160801b90046001600160801b031684614879565b90506149487f000000000000000000000000000000000000000000000000000000000000000082615dd3565b6008546001600160801b031611156149a0576008547f0000000000000000000000000000000000000000000000000000000000000000906149939083906001600160801b0316615dc0565b61499d9190615dc0565b91505b50919050565b60008084116149b557826149c0565b6149c0838686612edb565b9050806000036149d05750610acd565b8085838211156149eb578391506149e8878385612edb565b90505b6149f482612c3c565b600d8054600090614a0f9084906001600160801b0316615e7d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550614a3c81612c3c565b600d8054601090614a5e908490600160801b90046001600160801b0316615e7d565b92506101000a8154816001600160801b0302191690836001600160801b03160217905550610ab7816139fa90615f17565b600080614a9a6123f8565b9050808311614aaa576000614ab4565b614ab48184615dc0565b915061499d827f0000000000000000000000000000000000000000000000000000000000000000614879565b60008080614b01614af988670de0b6b3a7640000615dc0565b899087612edb565b9050614b0d888861278e565b91508115614b4357614b348a8a84614b2d8a670de0b6b3a7640000615dc0565b89896150e1565b9250614b408382615dd3565b90505b9750975097945050505050565b6000808080614b6786670de0b6b3a7640000615dc0565b9350614b9c8786611c718b612cbd897f000000000000000000000000000000000000000000000000000000000000000061278e565b9350614bc8847f000000000000000000000000000000000000000000000000000000000000000061278e565b91506000614be9614be189670de0b6b3a7640000615dc0565b8a9088612edb565b9050614c15817f000000000000000000000000000000000000000000000000000000000000000061278e565b9350614c41847f000000000000000000000000000000000000000000000000000000000000000061278e565b915050945094509450949050565b600080614c6885614c6088876155c8565b8a9190612edb565b9050614c75888486612edb565b614c7f9082615dd3565b905086811115614c9657614c938782615dc0565b91505b509695505050505050565b60008060008060008088881015614cfe578615614cc657614cc38d898b612edb565b9c505b614cd18c898b612edb565b9b50614cdd8b8d615ef7565b9050614cea8b898b612edb565b9a50614cf78a898b612edb565b9950614d0b565b614d088b8d615ef7565b90505b9b9c9a9b999a975050505050505050565b600060016001607f1b03198212801590614d3d575060016001607f1b038213155b612c625760405163a5353be560e01b815260040160405180910390fd5b6000818313614d6957816105f3565b5090919050565b60008183136149a057826105f3565b6000612cc3878787614d9988670de0b6b3a7640000615dc0565b8787615023565b6000808080614db786670de0b6b3a7640000615dc0565b9050614dec8786611c718b612cbd867f000000000000000000000000000000000000000000000000000000000000000061278e565b9350614e18847f000000000000000000000000000000000000000000000000000000000000000061278e565b91506000614e31614be189670de0b6b3a7640000615dc0565b9050614e5d817f000000000000000000000000000000000000000000000000000000000000000061278e565b9350614e89847f000000000000000000000000000000000000000000000000000000000000000061278e565b614e939084615dd3565b925050509450945094915050565b6000818311614d6957816105f3565b6000614ebe612dda83613aeb565b60008080526002602052600080516020615ff68339815191525491925090614ee7908590615dd3565b9050611023858383876149a6565b6000826000190484118302158202614f0c57600080fd5b50910281810615159190040190565b600080670de0b6b3a7640000614f2f6123f8565b614f399190615dfc565b9050808311614f49576000614f53565b614f538184615dc0565b915061499d614f8a670de0b6b3a76400007f0000000000000000000000000000000000000000000000000000000000000000615dfc565b8390614879565b60008080614f9f8585614879565b90506000614fb082868c8a8d6155dd565b90506000614feb614fc9670de0b6b3a76400008a614879565b614fe1614fda8b612cad8b8f61278e565b869061278e565b612cad9085615dc0565b9050614ff7898c615dc0565b6150018b83615dc0565b945094505050505b965096945050505050565b60008183116149a057826105f3565b60008061503488888888888861560b565b909250905080614c9657604051637ac17d2560e01b815260040160405180910390fd5b600080806150658585614879565b9050600061507682868b8a8c6155dd565b905060006150ab61508f670de0b6b3a76400008a614879565b612cad6150a4670de0b6b3a764000087615dd3565b8590614879565b905060006150b98288614879565b90506150c58b82615dc0565b6150cf838c615dc0565b95509550505050509550959350505050565b6000806150ee8484614879565b905060006150ff82858b898c6155dd565b905061510f86612cad898b615dc0565b97506000615136615128670de0b6b3a76400008961488e565b612cad85613ae58d87615dc0565b90506151428186614879565b905061514e8a82615dc0565b9a9950505050505050505050565b60008080615175614af988670de0b6b3a7640000615dc0565b90508615614b4357615187888861278e565b9150614b348a8a846151a18a670de0b6b3a7640000615dc0565b8989615023565b60606105f084846000856156ac565b6000806151c48484614879565b905060006151d582858b898c6155dd565b90506151ef86612cad6151e88a8d615dd3565b879061278e565b98506151fb828a61278e565b9850600061521e615214670de0b6b3a76400008961488e565b612cad8c85615dc0565b905061514e818a615dc0565b600080821361524c57604051636838feed60e11b815260040160405180910390fd5b5060606001600160801b03821160071b82811c67ffffffffffffffff1060061b1782811c63ffffffff1060051b1782811c61ffff1060041b1782811c60ff10600390811b90911783811c600f1060021b1783811c909110600190811b90911783811c90911017609f81810383019390931b90921c6c465772b2bbbb5f824b15207a3081018102821d6d0388eaa27412d5aca026815d636e018102821d6d0df99ac502031bf953eff472fdcc018102821d6d13cdffb29d51d99322bdff5f2211018102821d6d0a0f742023def783a307a986912e018102821d6d01920d8043ca89b5239253284e42018102821d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7882018202831d6d0139601a2efabe717e604cbb4894018202831d6d02247f7a7b6594320649aa03aba1018202831d6c8c3f38e95a6b1ff2ab1c3b343619018202831d6d02384773bdf1ac5676facced60901901820290921d6cb9a025d814b29c212b8b1a07cd190102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a550602605f19919091017d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b302017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d90565b6000680248ce36a70cb26b3e19821361545857506000919050565b680755bf798b4a1bf1e582126154815760405163df92cc9d60e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b056001605f1b01901d6bb17217f7d1cf79abc9e3b39881029093036c240c330e9fb2d9cbaf0fd5aafb1981018102606090811d6d0277594991cfc85f6e2461837cd9018202811d6d1a521255e34f6a5061b25ef1c9c319018202811d6db1bbb201f443cf962f1a1d3db4a5018202811d6e02c72388d9f74f51a9331fed693f1419018202811d6e05180bb14799ab47a8a8cb2a527d57016d02d16720577bd19bf614176fe9ea6c10fe68e7fd37d0007b713f765084018402831d9081019084016d01d3967ed30fc4f89c02bab5708119010290911d6e0587f503bb6ea29d25fcb740196450019091026d360d7aeea093263ecc6e0ecb291760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60006105f38383670de0b6b3a7640000614ef5565b60006155e982846148a3565b6156016155fa85612cad898961278e565b889061278e565b613eb99190615dd3565b600080806156198585614879565b9050600061562a82868c8a8d6155dd565b905061563a87612cad8a8c615dd3565b98508881101561565257600080935093505050615009565b6000615677615669670de0b6b3a76400008a61488e565b612cad85613ae58e87615dc0565b90506156838187614879565b9050808b111561569a57615697818c615dc0565b94505b60019350505050965096945050505050565b60608247101561570d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016107ac565b600080866001600160a01b031685876040516157299190615fa6565b60006040518083038185875af1925050503d8060008114615766576040519150601f19603f3d011682016040523d82523d6000602084013e61576b565b606091505b509150915061577c87838387615789565b925050505b949350505050565b606083156157f85782516000036157f1576001600160a01b0385163b6157f15760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016107ac565b5081615781565b615781838381511561580d5781518083602001fd5b8060405162461bcd60e51b81526004016107ac9190615fc2565b8183823760009101908152919050565b805160208201516001600160e01b031980821692919060048310156158665780818460040360031b1b83161693505b505050919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561589f578181015183820152602001615887565b50506000910152565b6000602082840312156158ba57600080fd5b815167ffffffffffffffff808211156158d257600080fd5b818401915084601f8301126158e657600080fd5b8151818111156158f8576158f861586e565b604051601f8201601f19908116603f011681019083821181831017156159205761592061586e565b8160405282815287602084870101111561593957600080fd5b612cc3836020830160208801615884565b6001600160a01b038116811461595f57600080fd5b50565b801515811461595f57600080fd5b60008060006060848603121561598557600080fd5b8335925060208401356159978161594a565b915060408401356159a781615962565b809150509250925092565b6000602082840312156159c457600080fd5b81356105f38161594a565b6000602082840312156159e157600080fd5b81356105f381615962565b600080600080600060a08688031215615a0457600080fd5b8535945060208601359350604086013592506060860135615a248161594a565b91506080860135615a3481615962565b809150509295509295909350565b60008083601f840112615a5457600080fd5b50813567ffffffffffffffff811115615a6c57600080fd5b6020830191508360208260051b850101111561158057600080fd5b60008060008060008060808789031215615aa057600080fd5b8635615aab8161594a565b95506020870135615abb8161594a565b9450604087013567ffffffffffffffff80821115615ad857600080fd5b615ae48a838b01615a42565b90965094506060890135915080821115615afd57600080fd5b50615b0a89828a01615a42565b979a9699509497509295939492505050565b60008060008060808587031215615b3257600080fd5b843593506020850135615b448161594a565b92506040850135615b548161594a565b9396929550929360600135925050565b60008060008060808587031215615b7a57600080fd5b84359350602085013592506040850135615b938161594a565b91506060850135615ba381615962565b939692955090935050565b60008060008060808587031215615bc457600080fd5b843593506020850135615bd68161594a565b9250604085013591506060850135615ba38161594a565b60008060408385031215615c0057600080fd5b8235615c0b8161594a565b91506020830135615c1b81615962565b809150509250929050565b600080600080600080600060e0888a031215615c4157600080fd5b8735615c4c8161594a565b96506020880135615c5c8161594a565b95506040880135615c6c81615962565b945060608801359350608088013560ff81168114615c8957600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215615cb957600080fd5b823591506020830135615c1b81615962565b600080600060608486031215615ce057600080fd5b833592506020840135615cf28161594a565b929592945050506040919091013590565b600080600080600060a08688031215615d1b57600080fd5b853594506020860135615d2d8161594a565b93506040860135615d3d8161594a565b9250606086013591506080860135615a348161594a565b600060208284031215615d6657600080fd5b5035919050565b600060208284031215615d7f57600080fd5b5051919050565b6020808252600a90820152695245454e5452414e435960b01b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8181038181111561263657612636615daa565b8082018082111561263657612636615daa565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761263657612636615daa565b6001600160801b03828116828216039080821115615e3357615e33615daa565b5092915050565b600060018201615e4c57615e4c615daa565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082615e7857615e78615e53565b500690565b6001600160801b03818116838216019080821115615e3357615e33615daa565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561263657612636615daa565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561263657612636615daa565b8181036000831280158383131683831282161715615e3357615e33615daa565b6000600160ff1b8201615f2c57615f2c615daa565b5060000390565b8082018281126000831280158216821582161715615f5357615f53615daa565b505092915050565b600060208284031215615f6d57600080fd5b81516105f381615962565b600082615f8757615f87615e53565b600160ff1b821460001984141615615fa157615fa1615daa565b500590565b60008251615fb8818460208701615884565b9190910192915050565b6020815260008251806020840152615fe1816040850160208701615884565b601f01601f1916919091016040019291505056feac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077ba26469706673582212208039995a18e2fd5898de9ac29fd84a6b06692271ca35e1d5838383de62c3cd2664736f6c63430008130033",
    sourceMap:
      "294:1113:131:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1135:12:0;1402;1416:23;1443:12;-1:-1:-1;;;;;1443:25:0;1482:5;;1443:54;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1401:96;;;;1511:7;1507:76;;;1541:31;;-1:-1:-1;;;1541:31:0;;;;;;;;;;;1507:76;1592:15;1610:18;1617:10;1610:18;:::i;:::-;1592:36;-1:-1:-1;;;;;;;1642:43:0;;-1:-1:-1;;;1642:43:0;1638:160;;1762:10;1756:17;1751:2;1739:10;1735:19;1728:46;1638:160;2020:17;;-1:-1:-1;;2016:25:0;;2039:1;1994:20;;1987:55;;;1994:20;2122:31;;;;;;;;;;:::i;:::-;294:1113:131;;;-1:-1:-1;294:1113:131;;;-1:-1:-1;;;;;294:1113:131;968:213;;;;;;;;;;-1:-1:-1;968:213:131;;;;;:::i;:::-;;:::i;:::-;;;2804:25:165;;;2792:2;2777:18;968:213:131;;;;;;;;7515:595:13;;;;;;;;;;-1:-1:-1;7515:595:13;;;;;:::i;:::-;;:::i;:::-;;5984:154:2;;;;;;;;;;-1:-1:-1;5984:154:2;;;;;:::i;:::-;;:::i;1716:3078:5:-;;;;;;:::i;:::-;;:::i;:::-;;;;4120:25:165;;;4176:2;4161:18;;4154:34;;;;4093:18;1716:3078:5;3946:248:165;11164:688:39;;;;;;;;;;-1:-1:-1;11164:688:39;;;;;:::i;:::-;;:::i;4263:249::-;;;;;;;;;;-1:-1:-1;4263:249:39;;;;;:::i;:::-;;:::i;1499:3200:4:-;;;;;;:::i;:::-;;:::i;7172:567:2:-;;;;;;;;;;-1:-1:-1;7172:567:2;;;;;:::i;:::-;;:::i;1190:174:39:-;;;;;;;;;;;;1240:124;1190:174;;1044:41;;;;;;;;;;;;;;;13214:2087:4;;;;;;;;;;-1:-1:-1;13214:2087:4;;;;;:::i;:::-;;:::i;8739:234:39:-;;;;;;;;;;-1:-1:-1;8739:234:39;;;;;:::i;:::-;;:::i;5326:4188:6:-;;;;;;;;;;-1:-1:-1;5326:4188:6;;;;;:::i;:::-;;:::i;5280:200:2:-;;;;;;;;;;-1:-1:-1;5280:200:2;;;;;:::i;:::-;;:::i;12957:1339:39:-;;;;;;;;;;-1:-1:-1;12957:1339:39;;;;;:::i;:::-;;:::i;1299:106:131:-;;;;;;;;;;;;;:::i;776:186::-;;;;;;;;;;-1:-1:-1;776:186:131;;;;;:::i;:::-;;:::i;8073:188:39:-;;;;;;;;;;-1:-1:-1;8073:188:39;;;;;:::i;:::-;;:::i;1742:2987:6:-;;;;;;:::i;:::-;;:::i;7362:308:39:-;;;;;;;;;;-1:-1:-1;7362:308:39;;;;;:::i;:::-;;:::i;5646:191:2:-;;;;;;;;;;-1:-1:-1;5646:191:2;;;;;:::i;:::-;;:::i;10070:2176:4:-;;;;;;;;;;-1:-1:-1;10070:2176:4;;;;;:::i;:::-;;:::i;5355:3470::-;;;;;;:::i;:::-;;:::i;4912:294:39:-;;;;;;;;;;-1:-1:-1;4912:294:39;;;;;:::i;:::-;;:::i;1927:1533:1:-;;;;;;;;;;-1:-1:-1;1927:1533:1;;;;;:::i;:::-;;:::i;5410:3338:5:-;;;;;;;;;;-1:-1:-1;5410:3338:5;;;;;:::i;:::-;;:::i;968:213:131:-;1088:23;1130:44;1140:6;1148:11;1161:12;1130:9;:44::i;:::-;1123:51;;968:213;;;;;;:::o;7515:595:13:-;7637:10;-1:-1:-1;;;;;7651:13:13;7637:27;;;;;:52;;-1:-1:-1;7678:10:13;7669:20;;;;:8;:20;;;;;;;;7668:21;7637:52;7633:103;;;7710:26;;-1:-1:-1;;;7710:26:13;;;;;;;;;;;7633:103;-1:-1:-1;;;;;7815:29:13;;;;;;:11;:29;;;;;;;;7810:98;;7867:30;;-1:-1:-1;;;7867:30:13;;;;;;;;;;;7810:98;8017:32;;-1:-1:-1;;;8017:32:13;;8043:4;8017:32;;;10637:51:165;7999:15:13;;-1:-1:-1;;;;;8017:17:13;;;;;10610:18:165;;8017:32:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;7999:50;-1:-1:-1;8059:44:13;-1:-1:-1;;;;;8059:20:13;;8080:13;7999:50;8059:20;:44::i;:::-;7555:555;7515:595;:::o;5984:154:2:-;6045:10;6036:20;;;;:8;:20;;;;;;;;6031:60;;6065:26;;-1:-1:-1;;;6065:26:2;;;;;;;;;;;6031:60;6101:21;:30;;;;;;;-1:-1:-1;;6101:30:2;;;;;;;;;5984:154::o;1716:3078:5:-;1978:20;2000;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;;;;;;;;;558:1;549:6;:10;6250:21:2;;::::1;::::0;::::1;;;6246:54;;;6280:20;;-1:-1:-1::0;;;6280:20:2::1;;;;;;;;;;;6246:54;2103:20:5::2;:18;:20::i;:::-;2151:25;2137:11;:39;2133:115;;;2199:38;;-1:-1:-1::0;;;2199:38:5::2;;;;;;;;;;;2133:115;2295:14;2311:18:::0;2333:70:::2;2355:11;2380:13;2333:8;:70::i;:::-;2294:109;;;;2430:14;2417:10;:27;2413:96;;;2467:31;;-1:-1:-1::0;;;2467:31:5::2;;;;;;;;;;;2413:96;2552:24;2579:19;:17;:19::i;:::-;2552:46;;2608;2625:16;2643:10;2608:16;:46::i;:::-;;2818:26;2854:25:::0;2889:26:::2;3059:38;3078:6;3086:10;3059:18;:38::i;:::-;3592:12;:25:::0;2925:172;;-1:-1:-1;2925:172:5;;-1:-1:-1;2925:172:5;;-1:-1:-1;2925:172:5;;-1:-1:-1;3592:45:5::2;::::0;2925:172;;-1:-1:-1;;;3592:25:5;::::2;-1:-1:-1::0;;;;;3592:25:5::2;:45;:::i;:::-;3485:104;3557:18;3529:25;:23;:25::i;:::-;:46;;;;:::i;:::-;3485:18;::::0;:26:::2;:104::i;:::-;:152;3468:242;;;3669:30;;-1:-1:-1::0;;;3669:30:5::2;;;;;;;;;;;3468:242;3773:12;3760:10;:25;3756:63;;;3794:25;;-1:-1:-1::0;;;3794:25:5::2;;;;;;;;;;;3756:63;3897:18;3871:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;3986:36:5::2;::::0;-1:-1:-1;4005:17:5::2;3986:16:::0;:36:::2;:::i;:::-;3971:51;;4032:193;4060:18;4092:12;4118:17;4149:10;4173:16;4203:12;4032:14;:193::i;:::-;4309:15;4327:97;4362:26;4402:12;4327:21;:97::i;:::-;4309:115;;4434:42;4440:7;4449:12;4463;4434:5;:42::i;:::-;4522:18;4543:11;4522:32;;4648:7;4622:12;-1:-1:-1::0;;;;;4600:141:5::2;;4669:12;4695:10;4719:12;4600:141;;;;;;;11824:25:165::0;;;11880:2;11865:18;;11858:34;;;;11923:2;11908:18;;11901:34;11812:2;11797:18;;11622:319;4600:141:5::2;;;;;;;;4752:35;;;;;;;;591:1:97::0;582:6;:10;1716:3078:5;;;;-1:-1:-1;1716:3078:5;-1:-1:-1;;;;1716:3078:5:o;11164:688:39:-;-1:-1:-1;;;;;11374:18:39;;;;:38;;-1:-1:-1;;;;;;11396:16:39;;;11374:38;11370:98;;;11433:35;;-1:-1:-1;;;11433:35:39;;;;;;;;;;;11370:98;11524:27;;;11520:90;;11572:38;;-1:-1:-1;;;11572:38:39;;;;;;;;;;;11520:90;11675:9;11670:176;11690:14;;;11670:176;;;11722:54;11736:3;;11740:1;11736:6;;;;;;;:::i;:::-;;;;;;;11744:4;11750:2;11754:6;;11761:1;11754:9;;;;;;;:::i;:::-;;;;;;;11765:10;11722:13;:54::i;:::-;11818:3;;11670:176;;;;11164:688;;;;;;:::o;4263:249::-;4453:52;4467:7;4476:4;4482:2;4486:6;4494:10;4453:13;:52::i;:::-;4263:249;;;;:::o;1499:3200:4:-;1675:16;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;1770:20:4::1;:18;:20::i;:::-;1866:26:::0;;::::1;;1862:100;;;1915:36;;-1:-1:-1::0;;;1915:36:4::1;;;;;;;;;;;1862:100;2090:14;2106:18:::0;2128:72:::1;2150:13;2177;2128:8;:72::i;:::-;2089:111:::0;;-1:-1:-1;2089:111:4;-1:-1:-1;3121:25:4::1;3125:21;3121:1;:25;:::i;:::-;3112:6;:34;3108:110;;;3169:38;;-1:-1:-1::0;;;3169:38:4::1;;;;;;;;;;;3108:110;3247:25;3251:21;3247:1;:25;:::i;:::-;3238:34;::::0;:6;:34:::1;:::i;:::-;3227:45;;3324:49;3341:19;:17;:19::i;:::-;3362:10;3324:16;:49::i;:::-;-1:-1:-1::0;3430:26:4;:33;;-1:-1:-1;;3430:33:4::1;3459:4;3430:33;::::0;;3632:18:::1;:6:::0;:16:::1;:18::i;:::-;3603:12;:47:::0;;-1:-1:-1;;;;;;3603:47:4::1;-1:-1:-1::0;;;;;3603:47:4;;;::::1;::::0;;;::::1;::::0;;3688:242:::1;:217;3762:6:::0;3786:18:::1;3822:4:::0;3844:17:::1;3879:12;3688:56;:217::i;:::-;:240;:242::i;:::-;3660:12;:270:::0;;-1:-1:-1;;;;;3660:270:4;;::::1;-1:-1:-1::0;;;3660:270:4::1;::::0;::::1;::::0;;;::::1;::::0;;4435:62:::1;3660:25;::::0;4475:21:::1;4435:5;:62::i;:::-;4507:51;554:1:31;4535:12:4;4549:8;4507:5;:51::i;:::-;4611:55;::::0;;11824:25:165;;;11880:2;11865:18;;11858:34;;;11908:18;;;11901:34;;;-1:-1:-1;;;;;4611:55:4;::::1;::::0;::::1;::::0;11812:2:165;11797:18;4611:55:4::1;;;;;;;4677:15;;591:1:97::0;582:6;:10;1499:3200:4;;-1:-1:-1;;;;1499:3200:4:o;7172:567:2:-;7266:16;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;;;7362::2::1;7353:20:::0;;:8:::1;:20;::::0;;;;;::::1;;7352:21;:64:::0;::::1;;;-1:-1:-1::0;7389:10:2::1;-1:-1:-1::0;;;;;7403:13:2::1;7389:27;;;7352:64;:105;;;;-1:-1:-1::0;7446:11:2::1;::::0;-1:-1:-1;;;;;7446:11:2::1;7432:10;:25;;7352:105;7335:166;;;7475:26;;-1:-1:-1::0;;;7475:26:2::1;;;;;;;;;;;7335:166;7543:22;::::0;;7511:29:::1;7575::::0;;;7625:107:::1;7543:22:::0;7683:13:::1;7710:12:::0;7625:9:::1;:107::i;:::-;591:1:97::0;582:6;:10;7614:118:2;7172:567;-1:-1:-1;;;7172:567:2:o;13214:2087:4:-;13426:20;13448:22;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;;;13540:16:4::1;:14;:16::i;:::-;13519:37;;13566:49;13583:19;:17;:19::i;13566:49::-;;13740:33;13762:10;13740:21;:33::i;:::-;14037:13;:29:::0;13993:7;;-1:-1:-1;;;;;;14037:29:4::1;14080:33:::0;;::::1;14076:97;;;14146:16;-1:-1:-1::0;;;;;14129:33:4::1;;;14076:97;14186:14;14204:1;14186:19:::0;14182:38:::1;;14215:1;14218::::0;14207:13:::1;;;;;;;;14182:38;14275:69;-1:-1:-1::0;;;14317:10:4::1;14329:14:::0;14275:5:::1;:69::i;:::-;14445:13;:22:::0;-1:-1:-1;;;;;;;;14445:22:4;;::::1;::::0;::::1;::::0;14425:17:::1;::::0;14501:106:::1;::::0;:14;;14445:22;;14501:106;::::1;:25;:106::i;:::-;14477:130;;14745:26;:14;:24;:26::i;:::-;14714:57;::::0;:16;:57:::1;:::i;:::-;14670:13;:101:::0;;-1:-1:-1;;;;;;14670:101:4::1;-1:-1:-1::0;;;;;14670:101:4;;;::::1;::::0;;;::::1;::::0;;14807:25:::1;:13:::0;:23:::1;:25::i;:::-;14781:13;:51:::0;;:22:::1;::::0;:51:::1;::::0;;;-1:-1:-1;;;14781:51:4;::::1;-1:-1:-1::0;;;;;14781:51:4::1;;:::i;:::-;;;;;;;;-1:-1:-1::0;;;;;14781:51:4::1;;;;;-1:-1:-1::0;;;;;14781:51:4::1;;;;;;14891:53;14901:13;14916:12;14930:13;14891:9;:53::i;:::-;14876:68:::0;-1:-1:-1;14876:68:4;15013:42:::1;:18:::0;15040:14;15013:26:::1;:42::i;:::-;:57;15009:107;;;15091:25;;-1:-1:-1::0;;;15091:25:4::1;;;;;;;;;;;15009:107;15180:66;::::0;;4120:25:165;;;4176:2;4161:18;;4154:34;;;-1:-1:-1;;;;;15180:66:4;::::1;::::0;::::1;::::0;4093:18:165;15180:66:4::1;;;;;;;15257:37;;;;570:1:97;591::::0;582:6;:10;13214:2087:4;;;;-1:-1:-1;13214:2087:4;-1:-1:-1;;;13214:2087:4:o;8739:234:39:-;8900:7;3063:32;3087:7;3063:23;:32::i;:::-;-1:-1:-1;;;;;3049:46:39;:10;-1:-1:-1;;;;;3049:46:39;;3045:116;;3118:32;;-1:-1:-1;;;3118:32:39;;;;;;;;;;;3045:116;8919:47:::1;8932:7;8941:8;8951:6;8959;8919:12;:47::i;:::-;8739:234:::0;;;;;:::o;5326:4188:6:-;5529:7;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;5566:25:6::1;5552:39:::0;::::1;5548:115;;;5614:38;;-1:-1:-1::0;;;5614:38:6::1;;;;;;;;;;;5548:115;5706:18;5727:16;:14;:16::i;:::-;5706:37;;5753:43;5770:13;5785:10;5753:16;:43::i;:::-;;5857:143;5876:65;5898:27;5927:13;5876:21;:65::i;:::-;5955:10;5979:11;5857:5;:143::i;:::-;6208:25;6247:21:::0;6282:26:::1;6322:23:::0;6359:27:::1;6400:26:::0;6439:60:::1;6460:11;6473:10;6485:13;6439:20;:60::i;:::-;6991:12;:25:::0;6194:305;;-1:-1:-1;6194:305:6;;-1:-1:-1;6194:305:6;;-1:-1:-1;6194:305:6;-1:-1:-1;6194:305:6;-1:-1:-1;6194:305:6;-1:-1:-1;6991:45:6::1;::::0;6194:305;;-1:-1:-1;;;6991:25:6;::::1;-1:-1:-1::0;;;;;6991:25:6::1;:45;:::i;:::-;6887:101;6959:15;6931:25;:23;:25::i;6887:101::-;:149;6870:239;;;7068:30;;-1:-1:-1::0;;;7068:30:6::1;;;;;;;;;;;6870:239;7331:11:::0;7406:13;7482:10;7537:15:::1;:30:::0;-1:-1:-1;7533:1241:6::1;;;7655:18;7629:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;7766:197:6::1;::::0;-1:-1:-1;7800:10:6;7828:17;7863:18;7899:20;7937:12;7766:16:::1;:197::i;:::-;8039:22;8064:32;8079:17;8064:12:::0;:32:::1;:::i;:::-;8110:31;8168:28:::0;;;:12:::1;:28;::::0;;;;:41;8039:57;;-1:-1:-1;;;;8168:41:6;;::::1;;;::::0;8237:264:::1;::::0;8291:10;;8319:15;;8352:17;;8387:18;;8423:12;;8453:11;;8237:36:::1;:264::i;:::-;8594:28;::::0;;;:12:::1;:28;::::0;;;;:41;8515:134:::1;::::0;::::1;::::0;;::::1;::::0;-1:-1:-1;;;8594:41:6;::::1;::::0;::::1;8515:19;:134::i;:::-;8730:33;8752:10;8730:21;:33::i;:::-;7569:1205;;7533:1241;8983:20;9006:99;9029:13;9056:12;9082:13;9006:9;:99::i;:::-;8983:122;;9181:10;9166:12;:25;9162:63;;;9200:25;;-1:-1:-1::0;;;9200:25:6::1;;;;;;;;;;;9162:63;9327:64;9349:27;9378:12;9327:21;:64::i;:::-;9301:12;-1:-1:-1::0;;;;;9277:200:6::1;;9405:12;9431;9457:10;9277:200;;;;;;;11824:25:165::0;;;11880:2;11865:18;;11858:34;;;;11923:2;11908:18;;11901:34;11812:2;11797:18;;11622:319;9277:200:6::1;;;;;;;;9495:12:::0;-1:-1:-1;;;;;;;;;;;591:1:97;582:6;:10;5326:4188:6;;-1:-1:-1;;;;;5326:4188:6:o;5280:200:2:-;5362:11;;-1:-1:-1;;;;;5362:11:2;5348:10;:25;5344:64;;5382:26;;-1:-1:-1;;;5382:26:2;;;;;;;;;;;5344:64;-1:-1:-1;;;;;5418:13:2;;;;;;:8;:13;;;;;;:22;;-1:-1:-1;;5418:22:2;;;;;;;5455:18;;;5418:13;5455:18;5280:200;;:::o;12957:1339:39:-;13232:8;13214:15;:26;13210:68;;;13249:29;;-1:-1:-1;;;13249:29:39;;;;;;;;;;;13210:68;-1:-1:-1;;;;;13338:19:39;;13334:67;;13366:35;;-1:-1:-1;;;13366:35:39;;;;;;;;;;;13334:67;-1:-1:-1;;;;;13759:14:39;;;13412:18;13759:14;;;:7;:14;;;;;;;;;13583:246;;1240:124;13583:246;;;12869:25:165;12948:18;;;12941:43;;;;13020:15;;;13000:18;;;12993:43;13079:14;;13072:22;13052:18;;;13045:50;13111:19;;;13104:35;;;;13155:19;;;;13148:35;;;13583:246:39;;;;;;;;;;12841:19:165;;;13583:246:39;;;13552:295;;;;;;;;-1:-1:-1;;;13456:405:39;;;13452:27:165;13518:16:39;13495:11:165;;;13488:27;13531:12;;;13524:28;13568:12;;13456:405:39;;;-1:-1:-1;;13456:405:39;;;;;;;;;13433:438;;13456:405;13433:438;;;;13927:14;13944:30;;;;;;;;;13818:25:165;;;13891:4;13879:17;;13859:18;;;13852:45;;;;13913:18;;;13906:34;;;13956:18;;;13949:34;;;13433:438:39;;-1:-1:-1;13927:14:39;13944:30;;13790:19:165;;13944:30:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13927:47;;13998:5;-1:-1:-1;;;;;13988:15:39;:6;-1:-1:-1;;;;;13988:15:39;;13984:58;;14012:30;;-1:-1:-1;;;14012:30:39;;;;;;;;;;;13984:58;-1:-1:-1;;;;;14096:14:39;;;;;;:7;:14;;;;;14094:16;;14096:14;;;14094:16;;;:::i;:::-;;;;-1:-1:-1;;;;;;14145:24:39;;;;;;;:17;:24;;;;;;;;:33;;;;;;;;;;;;;:45;;-1:-1:-1;;14145:45:39;;;;;;;;;;14248:41;;14274::165;;;14248::39;;14247:18:165;14248:41:39;;;;;;;13147:1149;;12957:1339;;;;;;;:::o;1299:106:131:-;1345:18;1382:16;:14;:16::i;:::-;1375:23;;1299:106;:::o;776:186::-;866:20;888:18;925:30;934:6;942:12;925:8;:30::i;:::-;918:37;;;;776:186;;;;;;:::o;8073:188:39:-;8203:51;8216:7;8225:8;8235:6;8243:10;8203:12;:51::i;:::-;8073:188;;;:::o;1742:2987:6:-;2006:20;2028:21;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;6250:21:2;;::::1;::::0;::::1;;;6246:54;;;6280:20;;-1:-1:-1::0;;;6280:20:2::1;;;;;;;;;;;6246:54;2132:20:6::2;:18;:20::i;:::-;2180:25;2166:11;:39;2162:115;;;2228:38;;-1:-1:-1::0;;;2228:38:6::2;;;;;;;;;;;2162:115;2603:18;2624:16;:14;:16::i;:::-;2603:37;;2667:14;2654:10;:27;2650:96;;;2704:31;;-1:-1:-1::0;;;2704:31:6::2;;;;;;;;;;;2650:96;2755:24;2782:19;:17;:19::i;:::-;2755:46;;2811:22;2836:46;2853:16;2871:10;2836:16;:46::i;:::-;2811:71:::0;-1:-1:-1;3056:36:6::2;3075:17;3056:16:::0;:36:::2;:::i;:::-;3041:51;;3102:26;3152::::0;3312:60:::2;3332:11;3345:10;3357:14;3312:19;:60::i;:::-;3433:22;:44:::0;;3192:180;;-1:-1:-1;3192:180:6;;-1:-1:-1;3192:180:6;-1:-1:-1;3192:180:6;;3433:22:::2;::::0;:44:::2;::::0;3192:180;;3433:44:::2;:::i;:::-;::::0;;;-1:-1:-1;;;3764:27:6;;::::2;3760:65;;;3800:25;;-1:-1:-1::0;;;3800:25:6::2;;;;;;;;;;;3760:65;3835:38;3844:13;3859;3835:8;:38::i;:::-;;;3948:132;3977:11;4002:18;4034:10;4058:12;3948:15;:132::i;:::-;4240:15;4258:98;4293:27;4334:12;4258:21;:98::i;:::-;4240:116;;4366:41;4372:7;4381:12;4395:11;4366:5;:41::i;:::-;4532:143;::::0;;11824:25:165;;;11880:2;11865:18;;11858:34;;;11908:18;;;11901:34;;;4475:11:6;;4581:7;;-1:-1:-1;;;;;4532:143:6;::::2;::::0;::::2;::::0;11812:2:165;11797:18;4532:143:6::2;;;;;;;4686:36;;;;;;591:1:97::0;582:6;:10;1742:2987:6;;;;-1:-1:-1;1742:2987:6;-1:-1:-1;;;;1742:2987:6:o;7362:308:39:-;7527:10;7509:29;;;;:17;:29;;;;;;;;-1:-1:-1;;;;;7509:39:39;;;;;;;;;;;;:50;;-1:-1:-1;;7509:50:39;;;;;;;;;;7617:46;;14274:41:165;;;7509:39:39;;7527:10;7617:46;;14247:18:165;7617:46:39;;;;;;;7362:308;;:::o;5646:191:2:-;5719:11;;-1:-1:-1;;;;;5719:11:2;5705:10;:25;5701:64;;5739:26;;-1:-1:-1;;;5739:26:2;;;;;;;;;;;5701:64;5775:11;:17;;-1:-1:-1;;;;;;5775:17:2;-1:-1:-1;;;;;5775:17:2;;;;;;;;5808:22;;;;-1:-1:-1;;5808:22:2;5646:191;:::o;10070:2176:4:-;10267:20;10289:24;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;10343:25:4::1;10333:35:::0;::::1;10329:111;;;10391:38;;-1:-1:-1::0;;;10391:38:4::1;;;;;;;;;;;10329:111;10483:18;10504:16;:14;:16::i;:::-;10483:37;;10530:49;10547:19;:17;:19::i;10530:49::-;;10796:33;10818:10;10796:21;:33::i;:::-;10901:12;:34;::::0;-1:-1:-1;;;;;;;;;;;10901:34:4;11056:13:::1;:29:::0;-1:-1:-1;;;10871:27:4::1;10983:70:::0;;;;;10871:27;;10983:102:::1;::::0;-1:-1:-1;;;;;11056:29:4;;::::1;::::0;10983:102:::1;:::i;:::-;10945:140:::0;-1:-1:-1;11095:21:4::1;11119:61;10945:140:::0;11119:19;:61:::1;:::i;:::-;11095:85;;11190:48;554:1:31;11218:10:4;11230:7;11190:5;:48::i;:::-;11296:21;11363:177;11398:7;11419:10;11443:13;11470:19;11503:27;11363:21;:177::i;:::-;11327:213:::0;-1:-1:-1;11327:213:4;-1:-1:-1;11600:119:4::1;-1:-1:-1::0;;;11667:12:4;11327:213;11600:5:::1;:119::i;:::-;11799:53;11809:13;11824:12;11838:13;11799:9;:53::i;:::-;11784:68;;11916:12;11903:10;:25;11899:63;;;11937:25;;-1:-1:-1::0;;;11937:25:4::1;;;;;;;;;;;11899:63;12053:136;::::0;;11824:25:165;;;11880:2;11865:18;;11858:34;;;11908:18;;;11901:34;;;12031:7:4;;-1:-1:-1;;;;;12053:136:4;::::1;::::0;::::1;::::0;11812:2:165;11797:18;12053:136:4::1;;;;;;;12200:39;;;;;;591:1:97::0;582:6;:10;10070:2176:4;;;;-1:-1:-1;10070:2176:4;-1:-1:-1;;;10070:2176:4:o;5355:3470::-;5573:16;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;6250:21:2;;::::1;::::0;::::1;;;6246:54;;;6280:20;;-1:-1:-1::0;;;6280:20:2::1;;;;;;;;;;;6246:54;5668:20:4::2;:18;:20::i;:::-;5718:25;5702:13;:41;5698:117;;;5766:38;;-1:-1:-1::0;;;5766:38:4::2;;;;;;;;;;;5698:117;5864:11;5878:216;5931:25;:23;:25::i;:::-;5970:12;:25:::0;-1:-1:-1;;;5970:25:4;::::2;-1:-1:-1::0;;;;;5970:25:4::2;6009:18;6041:17;6072:12;5878:39;:216::i;:::-;5864:230;;6114:7;6108:3;:13;:30;;;;6131:7;6125:3;:13;6108:30;6104:67;;;6147:24;;-1:-1:-1::0;;;6147:24:4::2;;;;;;;;;;;6104:67;6251:14;6267:18:::0;6289:72:::2;6311:13;6338;6289:8;:72::i;:::-;6250:111;;;;6405:49;6422:19;:17;:19::i;6405:49::-;-1:-1:-1::0;6983:13:4::2;:29:::0;-1:-1:-1;;;6872:35:4::2;6910:70:::0;;;:12:::2;:70;::::0;;;6872:35;;6910:102:::2;::::0;-1:-1:-1;;;;;6983:29:4;;::::2;::::0;6910:102:::2;:::i;:::-;7022:21;7046:34:::0;;;:12:::2;:34;::::0;-1:-1:-1;;;;;;;;;;;7046:34:4;6872:140;;-1:-1:-1;7022:21:4;7046:76:::2;::::0;6872:140;;7046:76:::2;:::i;:::-;7022:100;;7187:26;7310:63:::0;7376:34:::2;7399:10;7376:22;:34::i;:::-;7310:100;;7424:28;7455:74;7509:6;7455:36;:74::i;:::-;7424:105;;7652:32;7676:6;7652:16;:32::i;:::-;7721:12;:26:::0;-1:-1:-1;;;;;7721:26:4;;::::2;7698:49:::0;;7786:28;;::::2;;7761:22;::::0;::::2;:53:::0;-1:-1:-1;;;7850:25:4;;::::2;;7828:19;::::0;::::2;:47:::0;7910:44:::2;7698:6:::0;7910:36:::2;:44::i;:::-;7889:65:::0;-1:-1:-1;8354:137:4::2;8426:13:::0;8457:20;8355:41:::2;8457:20:::0;7889:65;8355:41:::2;:::i;:::-;8354:54:::0;:137;:54:::2;:137::i;:::-;8343:148;;7223:1279;;8555:51;554:1:31;8583:12:4;8597:8;8555:5;:51::i;:::-;8679:33;8701:10;8679:21;:33::i;:::-;8767:51;::::0;;4120:25:165;;;4176:2;4161:18;;4154:34;;;-1:-1:-1;;;;;8767:51:4;::::2;::::0;::::2;::::0;4093:18:165;8767:51:4::2;;;;;;;-1:-1:-1::0;;591:1:97;582:6;:10;-1:-1:-1;5355:3470:4;;;-1:-1:-1;;;;;;;;5355:3470:4:o;4912:294:39:-;5090:7;3063:32;3087:7;3063:23;:32::i;:::-;-1:-1:-1;;;;;3049:46:39;:10;-1:-1:-1;;;;;3049:46:39;;3045:116;;3118:32;;-1:-1:-1;;;3118:32:39;;;;;;;;;;;3045:116;5151:48:::1;5165:7;5174:4;5180:2;5184:6;5192;5151:13;:48::i;:::-;4912:294:::0;;;;;;:::o;1927:1533:1:-;2067:29;;;;:12;:29;;;;;:40;-1:-1:-1;;;;;2067:40:1;:45;2063:82;;1927:1533;:::o;2063:82::-;2324:24;2351:19;:17;:19::i;:::-;2324:46;-1:-1:-1;2397:37:1;2415:19;2397:15;:37;:::i;:::-;:42;;;:92;;;2474:15;2455:16;:34;2397:92;2380:187;;;2521:35;;-1:-1:-1;;;2521:35:1;;;;;;;;;;;2380:187;2820:16;2801:15;:35;2797:657;;2852:52;2869:16;2887;:14;:16::i;:::-;2852;:52::i;2797:657::-;2972:15;2935:509;3083:25;3111:18;;;:12;:18;;;;;:29;-1:-1:-1;;;;;3111:29:1;3162:24;;;3158:107;;3230:16;:14;:16::i;:::-;3210:36;;3158:107;3286:22;;3282:148;;3332:52;3349:15;3366:17;3332:16;:52::i;3282:148::-;-1:-1:-1;3023:27:1;3031:19;3023:27;;:::i;:::-;;;2935:509;;5410:3338:5;5612:7;512:6:97;;522:1;512:11;504:34;;;;-1:-1:-1;;;504:34:97;;;;;;;:::i;:::-;558:1;549:6;:10;5649:25:5::1;5635:39:::0;::::1;5631:115;;;5697:38;;-1:-1:-1::0;;;5697:38:5::1;;;;;;;;;;;5631:115;5979:18;6000:16;:14;:16::i;:::-;5979:37;;6026:43;6043:13;6058:10;6026:16;:43::i;:::-;;6129:142;6148:64;6170:26;6198:13;6148:21;:64::i;6129:142::-;6370:25;6409:21:::0;6444:26:::1;6484:23:::0;6521:27:::1;6562:26:::0;6601:59:::1;6621:11;6634:10;6646:13;6601:19;:59::i;:::-;6356:304;;;;;;;;;;;;6861:20;6884:13;6861:36;;6960:13;6942:15;:31;6938:1161;;;7060:18;7034:22;;:44;;;;;;;:::i;:::-;::::0;;;-1:-1:-1;7092:197:5::1;::::0;-1:-1:-1;7125:11:5;7154:17;7189:18;7225:20;7263:12;7092:15:::1;:197::i;:::-;7365:22;7390:32;7405:17;7390:12:::0;:32:::1;:::i;:::-;7436:31;7494:28:::0;;;:12:::1;:28;::::0;;;;:41;7365:57;;-1:-1:-1;;;;7494:41:5;::::1;;;7563:263;7617:11:::0;7646:15;7679:17;7714:18;7750:12;7780:10;7808:4:::1;7563:36;:263::i;:::-;7919:28;::::0;;;:12:::1;:28;::::0;;;;:41;7840:134:::1;::::0;::::1;::::0;;::::1;::::0;-1:-1:-1;;;7919:41:5;::::1;::::0;::::1;7840:19;:134::i;:::-;8055:33;8077:10;8055:21;:33::i;:::-;6975:1124;;6938:1161;8155:20;8178:99;8201:13;8228:12;8254:13;8178:9;:99::i;:::-;8155:122;;8341:12;8328:10;:25;8324:63;;;8362:25;;-1:-1:-1::0;;;8362:25:5::1;;;;;;;;;;;8324:63;8454:11:::0;8560:63:::1;8582:26;8610:12:::0;8560:21:::1;:63::i;:::-;8511:198;::::0;;11824:25:165;;;11880:2;11865:18;;11858:34;;;11908:18;;;11901:34;;;-1:-1:-1;;;;;8511:198:5;::::1;::::0;::::1;::::0;11812:2:165;11797:18;8511:198:5::1;;;;;;;-1:-1:-1::0;591:1:97;582:6;:10;8728:12:5;5410:3338;-1:-1:-1;;;;;;;;;;;;;;5410:3338:5:o;5797:620:13:-;5929:23;5968:12;5964:447;;;6061:47;;-1:-1:-1;;;6061:47:13;;;;;14777:25:165;;;-1:-1:-1;;;;;14876:15:165;;;14856:18;;;14849:43;6102:4:13;14908:18:165;;;14901:43;6061:4:13;:11;;;;14750:18:165;;6061:47:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6043:65;;5964:447;;;6190:55;-1:-1:-1;;;;;6205:4:13;6190:34;6225:11;6238:6;6190:34;:55::i;:::-;6331:28;;-1:-1:-1;;;6331:28:13;;;;;2804:25:165;;;6311:17:13;;6331:4;-1:-1:-1;;;;;6331:20:13;;;;2777:18:165;;6331:28:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6311:48;5797:620;-1:-1:-1;;;;;5797:620:13:o;941:175:82:-;1050:58;;-1:-1:-1;;;;;15147:32:165;;1050:58:82;;;15129:51:165;15196:18;;;15189:34;;;1023:86:82;;1043:5;;-1:-1:-1;;;1073:23:82;15102:18:165;;1050:58:82;;;;-1:-1:-1;;1050:58:82;;;;;;;;;;;;;;-1:-1:-1;;;;;1050:58:82;-1:-1:-1;;;;;;1050:58:82;;;;;;;;;;1023:19;:86::i;3436:144:2:-;3502:9;:14;3498:76;;3539:24;;-1:-1:-1;;;3539:24:2;;;;;;;;;;;3498:76;3436:144::o;4221:1068:13:-;4323:20;4345:18;4379:12;4375:908;;;4441:62;-1:-1:-1;;;;;4441:10:13;:27;4469:10;4489:4;4496:6;4441:27;:62::i;:::-;4567:35;;-1:-1:-1;;;4567:35:13;;;;;15408:25:165;;;4596:4:13;15449:18:165;;;15442:60;4567:4:13;-1:-1:-1;;;;;4567:12:13;;;;15381:18:165;;4567:35:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4552:50;;4629:16;:14;:16::i;:::-;4616:29;;4375:908;;;4958:28;;-1:-1:-1;;;4958:28:13;;;;;2804:25:165;;;4938:17:13;;4958:4;-1:-1:-1;;;;;4958:20:13;;;;2777:18:165;;4958:28:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;4938:48;-1:-1:-1;5053:138:13;-1:-1:-1;;;;;5068:4:13;5053:38;5109:10;5145:4;4938:48;5053:38;:138::i;:::-;5220:9;5205:24;;5256:16;:14;:16::i;:::-;5243:29;;4662:621;4221:1068;;;;;:::o;7834:223:7:-;7910:24;8012:37;8030:19;8012:15;:37;:::i;:::-;7981:69;;:15;:69;:::i;3705:3533:1:-;3826:7;3958:51;;;:12;:51;;;;;4023:22;;-1:-1:-1;;;;;4023:22:1;:27;;;:64;;;4072:15;4054;:33;4023:64;4019:124;;;4110:22;-1:-1:-1;;;;;4110:22:1;;-1:-1:-1;4103:29:1;;4019:124;4224:23;:11;:21;:23::i;:::-;4199:48;;-1:-1:-1;;;;;;4199:48:1;-1:-1:-1;;;;;4199:48:1;;;;;;;-1:-1:-1;4736:12:1;-1:-1:-1;4762:35:1;4780:17;4762:15;:35;:::i;:::-;4736:71;;;;;;;;;;;-1:-1:-1;4736:71:1;;;:82;-1:-1:-1;;;;;4736:82:1;;-1:-1:-1;4858:12:1;-1:-1:-1;4884:67:1;4858:12;4935:15;4884:21;:67::i;:::-;4858:103;;;;;;;;;;;;4828:133;;4971:20;5027:1;5005:19;:23;5001:667;;;5062:21;5101;5139:180;5186:19;5227:11;5260:14;5296:5;5139:25;:180::i;:::-;5044:275;;;;5359:13;5333:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;5386:235:1;;-1:-1:-1;5420:19:1;5457:1;5476:13;;5592:15;5386:16;:235::i;:::-;5653:4;5635:22;;5030:638;;5001:667;5786:26;5815:12;:102;5841:66;5863:26;5891:15;5841:21;:66::i;:::-;5815:102;;;;;;;;;;;;5786:131;;5952:1;5931:18;:22;5927:662;;;5987:21;6026;6064:178;6111:18;6151:11;6184:14;6220:4;6064:25;:178::i;:::-;5969:273;;;;6282:13;6256:22;;:39;;;;;;;:::i;:::-;;;;-1:-1:-1;6309:233:1;;-1:-1:-1;6342:18:1;6378:1;6397:13;;6513:15;6309;:233::i;:::-;6574:4;6556:22;;5955:634;;5927:662;6660:15;6656:547;;;6691:20;6714:35;6732:17;6714:15;:35;:::i;:::-;6763:31;6821:26;;;:12;:26;;;;;:39;;-1:-1:-1;;;;;6888:43:1;;;;;;6691:58;;-1:-1:-1;;;;6821:39:1;;;;;;;;;6945:132;;6821:39;;7024;;;;;6945:19;:132::i;:::-;7158:34;7180:11;7158:21;:34::i;:::-;6677:526;;6656:547;7220:11;7213:18;;;;;;;3705:3533;;;;;:::o;14676:3563:5:-;14816:26;14856:25;14895:20;14929:26;15151:241;15197:25;:23;:25::i;:::-;15236:12;:25;-1:-1:-1;;;15236:25:5;;-1:-1:-1;;;;;15236:25:5;15275:12;15313;15339:11;15364:18;15151:32;:241::i;:::-;15131:261;;15662:17;15682:179;15729:25;:23;:25::i;:::-;15768:12;:25;-1:-1:-1;;;15768:25:5;;-1:-1:-1;;;;;15768:25:5;15807:18;15839:12;15682:33;:179::i;:::-;15662:199;;15907:22;15919:9;15907:11;:22::i;:::-;16111:21;16155:26;16203:130;16251:12;16281:9;16308:11;16203:30;:130::i;:::-;16097:236;;-1:-1:-1;16097:236:5;-1:-1:-1;16496:33:5;16097:236;16496:17;:33;:::i;:::-;16481:48;-1:-1:-1;17208:33:5;17223:18;16481:48;17208:33;:::i;:::-;17188:53;-1:-1:-1;17704:87:5;:18;17747:9;17770:11;17704:29;:87::i;:::-;17683:108;-1:-1:-1;18050:33:5;17683:108;18050:12;:33;:::i;:::-;18029:54;;18094:138;;;14676:3563;;;;;;;:::o;8238:253:7:-;8398:12;:26;8442:28;;8296:7;;8334:150;;-1:-1:-1;;;;;8398:26:7;;;;8442:28;;8334:46;:150::i;1814:119:32:-;1876:7;1903:22;1914:1;1917;1920:4;1903:10;:22::i;9283:2118:5:-;9557:29;;-1:-1:-1;;;;;9557:29:5;9698:309;:284;9557:29;9862:20;:13;9878:4;9862:20;:::i;:::-;9719:36;;-1:-1:-1;;;;;9719:36:5;;9698:284;9933:13;9964:4;9698:102;:284::i;:309::-;9659:36;:348;;-1:-1:-1;;;;;;9659:348:5;-1:-1:-1;;;;;9659:348:5;;;;;;;;;;10155:31;:19;:29;:31::i;:::-;10125:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;10125:61:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10125:61:5;;;;;-1:-1:-1;;;;;10125:61:5;;;;;;10225:30;:18;:28;:30::i;:::-;10196:12;:59;;:25;;:59;;;;-1:-1:-1;;;10196:59:5;;-1:-1:-1;;;;;10196:59:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10196:59:5;;;;;-1:-1:-1;;;;;10196:59:5;;;;;;10286:25;:13;:23;:25::i;:::-;10265:46;;;;:::i;:::-;10321:29;:49;;-1:-1:-1;;;;;;10321:49:5;-1:-1:-1;;;;;10321:49:5;;;;;-1:-1:-1;10684:51:5;;;:12;:51;;;;;10786:23;;10321:49;;-1:-1:-1;10684:51:5;-1:-1:-1;;;10786:23:5;;;;;10848:98;10893:40;:19;10921:11;10893:27;:40::i;:::-;10849:29;10865:13;10849:1;:29;:::i;:::-;:84;;;;:::i;10848:98::-;10956:52;;10820:126;;-1:-1:-1;10820:126:5;;10956:10;;:23;;:52;;10820:126;;-1:-1:-1;;;10956:52:5;;;;;:::i;:::-;;;-1:-1:-1;;;;;10956:52:5;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;11064:23:5;;11018:70;;10956:52;11018:70;;;;-1:-1:-1;;;11064:23:5;;;;11018:19;:70::i;:::-;11187:23;11198:11;11187:10;:23::i;:::-;11182:106;;11233:44;;-1:-1:-1;;;11233:44:5;;;;;;;;;;;11182:106;11360:34;11382:11;11360:21;:34::i;:::-;9519:1882;;;;9283:2118;;;;;;:::o;1198:469:31:-;1309:10;-1:-1:-1;;;;;1401:10:31;:89;1384:179;;;1522:30;;-1:-1:-1;;;1522:30:31;;;;;;;;;;;1384:179;-1:-1:-1;1624:4:31;1620:18;;;;1617:34;;1198:469::o;9971:314:39:-;10088:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;10088:23:39;;;;;;;;;:33;;10115:6;;10088:19;:33;;10115:6;;10088:33;:::i;:::-;;;;-1:-1:-1;;10131:21:39;;;;:12;:21;;;;;:31;;10156:6;;10131:21;:31;;10156:6;;10131:31;:::i;:::-;;;;-1:-1:-1;;10219:59:39;;;4120:25:165;;;4176:2;4161:18;;4154:34;;;-1:-1:-1;;;;;10219:59:39;;;10254:1;;10234:10;;10219:59;;4093:18:165;10219:59:39;;;;;;;;9971:314;;;:::o;5568:1565::-;-1:-1:-1;;;;;5780:18:39;;;;:38;;-1:-1:-1;;;;;;5802:16:39;;;5780:38;5776:98;;;5839:35;;-1:-1:-1;;;5839:35:39;;;;;;;;;;;5776:98;5983:4;-1:-1:-1;;;;;5973:14:39;:6;-1:-1:-1;;;;;5973:14:39;;5969:871;;-1:-1:-1;;;;;6123:23:39;;;;;;;:17;:23;;;;;;;;:31;;;;;;;;;;;;6118:712;;6232:16;6251:27;;;:18;:27;;;;;;;;-1:-1:-1;;;;;6251:33:39;;;;;;;;;;;:41;;;;;;;;;;;-1:-1:-1;;6367:29:39;;6363:453;;6746:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;6746:33:39;;;;;;;;;;;:41;;;;;;;;;;:51;;6791:6;;6746:27;:51;;6791:6;;6746:51;:::i;:::-;;;;-1:-1:-1;;6363:453:39;6156:674;6118:712;6984:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;6984:25:39;;;;;;;;;:35;;7013:6;;6984:19;:35;;7013:6;;6984:35;:::i;:::-;;;;-1:-1:-1;;7029:19:39;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;7029:23:39;;;;;;;;;:33;;7056:6;;7029:19;:33;;7056:6;;7029:33;:::i;:::-;;;;-1:-1:-1;;7077:49:39;;;4120:25:165;;;4176:2;4161:18;;4154:34;;;-1:-1:-1;;;;;7077:49:39;;;;;;;;;;;;;;4093:18:165;7077:49:39;;;;;;;5568:1565;;;;;:::o;640:190:34:-;693:9;-1:-1:-1;;;720:1:34;:12;714:86;;756:33;;-1:-1:-1;;;756:33:34;;;;;;;;;;;714:86;-1:-1:-1;821:1:34;640:190::o;4089:611:33:-;4320:20;;4429:35;:17;4455:8;4429:25;:35::i;:::-;4417:47;-1:-1:-1;4550:143:33;4627:52;4655:23;150:4:32;4665:12:33;4655:9;:23::i;:::-;4634:15;:4;4647:1;4634:12;:15::i;:::-;4628:21;;150:4:32;4628:21:33;:::i;:::-;4627:27;;:52::i;:::-;4550:51;:18;4577:23;4550:26;:51::i;:::-;:59;;:143::i;:::-;4531:162;4089:611;-1:-1:-1;;;;;;;4089:611:33:o;6602:134:13:-;6686:43;;-1:-1:-1;;;6686:43:13;;565:4:32;6686:43:13;;;2804:25:165;6660:7:13;;6686:4;-1:-1:-1;;;;;6686:20:13;;;;2777:18:165;;6686:43:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;22173:1546:4:-;22382:12;:34;;-1:-1:-1;;;;;;;;;;;22382:34:4;22537:13;:29;-1:-1:-1;;;22357:22:4;22464:70;;;;;22357:22;;22464:102;;-1:-1:-1;;;;;22537:29:4;;;;22464:102;:::i;:::-;22426:140;-1:-1:-1;22576:21:4;22600:44;22426:140;22600:14;:44;:::i;:::-;22576:68;;22654:20;22677:95;22727:35;22750:11;22727:22;:35::i;:::-;22677:36;:95::i;:::-;22654:118;-1:-1:-1;22782:21:4;22806:88;:14;22654:118;22871:13;22806:25;:88::i;:::-;22782:112;;23252:26;23292:12;23307:40;23335:11;23307:27;:40::i;:::-;23292:55;;23368:13;23361:4;:20;23357:92;;;23418:20;23425:13;23418:4;:20;:::i;:::-;23397:41;;23357:92;23483:1;23462:18;:22;:43;;;-1:-1:-1;23488:17:4;;23462:43;23458:255;;;23521:181;23564:18;23600:12;23630:13;23661:27;23521:25;:181::i;:::-;22234:1485;;;;;;;22173:1546;:::o;10552:330:39:-;10681:19;;;;:10;:19;;;;;;;;-1:-1:-1;;;;;10681:25:39;;;;;;;;;:35;;10710:6;;10681:19;:35;;10710:6;;10681:35;:::i;:::-;;;;-1:-1:-1;;10726:21:39;;;;:12;:21;;;;;:31;;10751:6;;10726:21;:31;;10751:6;;10726:31;:::i;:::-;;;;-1:-1:-1;;10814:61:39;;;4120:25:165;;;4176:2;4161:18;;4154:34;;;10855:1:39;;-1:-1:-1;;;;;10814:61:39;;;10829:10;;10814:61;;4093:18:165;10814:61:39;3946:248:165;984:556:32;1100:9;1365:1;-1:-1:-1;;1348:19:32;1345:1;1342:26;1339:1;1335:34;1328:42;1315:11;1311:60;1284:146;;1414:1;1411;1404:12;1284:146;-1:-1:-1;1501:9:32;;1497:27;;984:556::o;3455:503:39:-;3650:34;;;3669:4;3650:34;;;;15129:51:165;;;;15196:18;;;15189:34;;;;3650::39;;;;;;;;;15102:18:165;;;;3650:34:39;;3640:45;;;;;;;;;-1:-1:-1;;;;;;3822:63:39;;;16176:39:165;3853:8:39;16248:15:165;;;-1:-1:-1;;16244:53:165;16231:11;;;16224:74;16314:12;;;16307:28;3869:15:39;16351:12:165;;;;16344:28;;;;3822:63:39;;;;;;;;;;16388:12:165;;;;3822:63:39;;;3799:96;;;;;;3455:503::o;9407:299::-;9553:27;;;;:18;:27;;;;;;;;-1:-1:-1;;;;;9553:35:39;;;;;;;;;;;;:45;;;;;;;;;;;;;:54;;;9665:34;;2804:25:165;;;9553:35:39;;9665:34;;2777:18:165;9665:34:39;;;;;;;9407:299;;;;:::o;19765:6067:6:-;19937:25;19976:21;20011:26;20051:23;20088:27;20129:26;20849:21;20873:38;20897:13;20873:23;:38::i;:::-;20849:62;;21046:289;21098:25;:23;:25::i;:::-;21141:12;:25;-1:-1:-1;;;21141:25:6;;-1:-1:-1;;;;;21141:25:6;21184:11;21213:13;21244:12;21274:11;21303:18;21046:34;:289::i;:::-;20925:410;;-1:-1:-1;20925:410:6;-1:-1:-1;20925:410:6;-1:-1:-1;21389:17:6;21409:199;21460:25;:23;:25::i;21409:199::-;21389:219;;21622:22;21634:9;21622:11;:22::i;:::-;21899:11;21970;21878:18;;;;22201:177;21899:11;22284:13;22319:9;21970:11;22201:29;:177::i;:::-;22020:358;;;;;;;;22434:17;22413:18;:38;;;;:::i;:::-;22392:59;-1:-1:-1;23150:34:6;23166:18;23150:13;:34;:::i;:::-;23131:53;;;;:::i;:::-;;-1:-1:-1;23524:28:6;23540:12;23524:13;:28;:::i;:::-;23502:50;;;;:::i;:::-;;;20401:3162;;;;;;;;23720:22;23745:12;:77;23791:17;23775:13;:33;;;;:::i;:::-;23745:77;;;;;;;;;;;-1:-1:-1;23745:77:6;;;:88;-1:-1:-1;;;;;23745:88:6;;-1:-1:-1;23873:15:6;:31;-1:-1:-1;23873:118:6;;23953:27;;;;:12;:27;;;;;:38;-1:-1:-1;;;;;23953:38:6;23873:118;;;23923:11;23873:118;23847:144;;24556:236;24611:11;24640:18;24676:14;24708:15;24741:11;24770:8;24556:37;:236::i;:::-;24540:252;-1:-1:-1;24998:40:6;25020:18;24998:40;;:::i;:::-;;;25530:285;25595:13;25626:18;25662:15;25695:18;25731:14;25763:15;25796:5;25530:47;:285::i;:::-;19765:6067;;25339:476;;-1:-1:-1;25339:476:6;;-1:-1:-1;25339:476:6;-1:-1:-1;25339:476:6;;-1:-1:-1;19765:6067:6;-1:-1:-1;;;;;;19765:6067:6:o;13387:1212::-;13707:30;;-1:-1:-1;;;13707:30:6;;-1:-1:-1;;;;;13707:30:6;13791:337;:308;13707:30;13968:20;:13;13984:4;13968:20;:::i;:::-;13816:37;;-1:-1:-1;;;13816:37:6;;-1:-1:-1;;;;;13816:37:6;;;14043:11;14076:5;13791:115;:308::i;:337::-;13751:37;:377;;-1:-1:-1;;;;;13751:377:6;;;-1:-1:-1;;;13751:377:6;;;;;;;;;14287:23;:11;:21;:23::i;:::-;14250:60;;:18;:60;:::i;:::-;14201:30;:109;;-1:-1:-1;;;;;14201:109:6;;;-1:-1:-1;;;14201:109:6;;;;;;;;;-1:-1:-1;14418:31:6;:19;:29;:31::i;:::-;14388:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;14388:61:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14388:61:6;;;;;-1:-1:-1;;;;;14388:61:6;;;;;;14491:32;:21;:30;:32::i;:::-;14459:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14459:64:6;;;;;;;-1:-1:-1;;;;;14459:64:6;;;;;;14562:30;:18;:28;:30::i;:::-;14533:12;:59;;:25;;:59;;;;-1:-1:-1;;;14533:59:6;;-1:-1:-1;;;;;14533:59:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;14533:59:6;;;;;-1:-1:-1;;;;;14533:59:6;;;;;;13387:1212;;;;;:::o;8388:1713:2:-;8676:22;8701:33;8717:17;8701:13;:33;:::i;:::-;8676:58;;8744:23;8770:12;:100;8796:64;8818:26;8846:13;8796:21;:64::i;:::-;8770:100;;;;;;;;;;;;8744:126;;8880:24;8907:12;:101;8933:65;8955:27;8984:13;8933:21;:65::i;:::-;8907:101;;;;;;;;;;;;8880:128;;9102:15;9121:1;9102:20;:45;;;;-1:-1:-1;9126:21:2;;9102:45;9098:997;;;9207:1;9163:28;;;:12;:28;;;;;:45;;-1:-1:-1;;;;;9163:45:2;;;9098:997;;;9443:12;9482:212;9670:11;9607:40;:19;9635:11;9607:27;:40::i;:::-;9583:64;;:1;:64;:::i;:::-;9542:18;9483:36;:15;9507:11;9483:23;:36::i;:::-;:77;;;;:::i;:::-;:164;;;;:::i;:::-;:198;;;;:::i;9482:212::-;9443:265;;9904:7;9900:185;;;9931:28;;;;:12;:28;;;;;:50;;9976:5;;9931:28;:41;;:50;;9976:5;;-1:-1:-1;;;9931:50:2;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;9931:50:2;;;;;;;-1:-1:-1;;;;;9931:50:2;;;;;;9900:185;;;10020:28;;;;:12;:28;;;;;:50;;10065:5;;10020:28;:41;;:50;;10065:5;;-1:-1:-1;;;10020:50:2;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10020:50:2;;;;;;;-1:-1:-1;;;;;10020:50:2;;;;;;9900:185;9225:870;8666:1435;;;8388:1713;;;;;;;:::o;10272:874::-;10425:6;10415:7;:16;:32;;;;;10446:1;10435:7;:12;;10415:32;10411:729;;;10463:12;10495:13;:6;10463:12;10495:10;:13::i;:::-;10485:23;;:7;:23;:::i;:::-;10691:25;;10463:46;;-1:-1:-1;10674:55:2;;:44;;10463:46;;-1:-1:-1;;;10691:25:2;;-1:-1:-1;;;;;10691:25:2;10674:44;;:9;:44::i;:::-;:53;:55::i;:::-;10620:25;:123;;:25;;:123;;;;-1:-1:-1;;;10620:123:2;;-1:-1:-1;;;;;10620:123:2;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10620:123:2;;;;;-1:-1:-1;;;;;10620:123:2;;;;;;10449:305;7555:555:13;7515:595;:::o;10411:729:2:-;10841:7;10832:6;:16;10828:312;;;10879:1;10868:7;:12;10864:266;;10978:18;:7;:16;:18::i;:::-;10958:17;:6;:15;:17::i;:::-;:38;;;;:::i;:::-;10900:25;:114;;:25;;:114;;;;-1:-1:-1;;;10900:114:2;;-1:-1:-1;;;;;10900:114:2;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10900:114:2;;;;;-1:-1:-1;;;;;10900:114:2;;;;;;7555:555:13;7515:595;:::o;10864:266:2:-;11090:24;:13;:6;11101:1;11090:10;:13::i;15166:3749:6:-;15339:21;15374:26;15414;15702:229;15749:25;:23;:25::i;:::-;15788:12;:25;-1:-1:-1;;;15788:25:6;;-1:-1:-1;;;;;15788:25:6;15827:11;15852:12;15878:11;15903:18;15702:33;:229::i;:::-;15681:250;-1:-1:-1;16192:11:6;16150:39;15681:250;16177:11;16150:26;:39::i;:::-;:53;16146:121;;;16226:30;;-1:-1:-1;;;16226:30:6;;;;;;;;;;;16146:121;16538:17;16558:179;16605:25;:23;:25::i;16558:179::-;16538:199;;16824:22;16836:9;16824:11;:22::i;:::-;17014:21;17173:197;17216:11;565:4:32;17326:9:6;17349:11;17173:29;:197::i;:::-;17045:325;-1:-1:-1;17045:325:6;;-1:-1:-1;17796:34:6;;-1:-1:-1;17045:325:6;;17796:34;:::i;:::-;17774:56;;;;:::i;:::-;;-1:-1:-1;18323:512:6;18823:11;18323:478;18391:11;18610:39;18631:18;17774:56;18610:39;:::i;:::-;18667:15;18700:32;:11;18667:15;18700;:32::i;:::-;18750:11;18779:8;18323:50;:478::i;:512::-;18307:528;;18846:62;;15166:3749;;;;;;;:::o;9893:3005::-;10293:30;;10172:312;;:287;;-1:-1:-1;;;10293:30:6;;-1:-1:-1;;;;;10293:30:6;10341:20;:13;10357:4;10341:20;:::i;:::-;10193:37;;-1:-1:-1;;;10193:37:6;;-1:-1:-1;;;;;10193:37:6;;;10412:11;10441:4;10172:103;:287::i;:312::-;10132:37;:352;;-1:-1:-1;;;;;10132:352:6;;;-1:-1:-1;;;10132:352:6;;;;;;;;;-1:-1:-1;10844:31:6;:19;:29;:31::i;:::-;10803:12;:26;:72;;;-1:-1:-1;;;;;10803:26:6;:72;:::i;:::-;10885:12;:43;;-1:-1:-1;;;;;;10885:43:6;-1:-1:-1;;;;;10885:43:6;;;;;;-1:-1:-1;10967:23:6;:11;:21;:23::i;:::-;10938:12;:52;;:25;;:52;;;;-1:-1:-1;;;10938:52:6;;-1:-1:-1;;;;;10938:52:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;10938:52:6;;;;;-1:-1:-1;;;;;10938:52:6;;;;;;11034:23;:11;:21;:23::i;:::-;11000:30;:57;;:30;;:57;;;;-1:-1:-1;;;11000:57:6;;-1:-1:-1;;;;;11000:57:6;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;11000:57:6;;;;;;;;;;;;;;;11659:28;;:12;11616:26;11659:28;;;;;11616:26;;11601:86;11584:180;;-1:-1:-1;11584:180:6;;11719:34;;-1:-1:-1;;;11719:34:6;;;;;;;;;;;11584:180;11856:25;11884:19;:17;:19::i;:::-;11913:31;11967;;;:12;:31;;;;;:44;11856:47;;-1:-1:-1;;;;11967:44:6;;;;12099:23;:11;:21;:23::i;:::-;12031:31;;;;:12;:31;;;;;:101;;:44;;:101;;;;-1:-1:-1;;;12031:101:6;;;;;:::i;:::-;;;-1:-1:-1;;;;;12031:101:6;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;12213:31:6;;;:12;:31;;;;;:44;12142:125;;12031:101;12142:125;;;;-1:-1:-1;;;12213:44:6;;;;12142:19;:125::i;:::-;12684:23;12695:11;12684:10;:23::i;:::-;12679:106;;12730:44;;-1:-1:-1;;;12730:44:6;;;;;;;;;;;12679:106;12857:34;12879:11;12857:21;:34::i;19443:2515:4:-;19668:21;19691:7;20048:59;20110:35;20133:11;20110:22;:35::i;:::-;20048:97;;20155:28;20186:66;20236:6;20186:36;:66::i;:::-;20155:97;;20278:45;20306:16;:14;:16::i;:::-;20278:27;:45::i;:::-;20262:61;-1:-1:-1;20349:55:4;20262:61;20374:7;20383:20;20349:24;:55::i;:::-;20333:71;-1:-1:-1;20414:40:4;20431:22;20333:71;20431:22;:::i;:::-;20414:16;:40::i;:::-;20487:12;:26;-1:-1:-1;;;;;20487:26:4;;;20464:49;;20548:28;;;;20523:22;;;:53;-1:-1:-1;;;20608:25:4;;;;20586:19;;;:47;20487:26;20672:66;20464:6;20672:36;:66::i;:::-;20643:95;-1:-1:-1;21012:23:4;21058:67;:14;20643:95;21104:20;21058:25;:67::i;:::-;21012:123;-1:-1:-1;21165:40:4;21197:7;21172:14;21165:40;:::i;:::-;21145:60;;;;:::i;:::-;;;21238:1;21219:16;:20;21215:677;;;21412:29;21444:121;21501:17;21502:16;21501:17;:::i;:::-;21444:20;;21537:14;21444:31;:121::i;:::-;21412:153;-1:-1:-1;21579:38:4;21412:153;21579:38;;:::i;:::-;;;21631:47;21655:21;21631:16;:47::i;:::-;21692:152;21734:21;21773:28;21819:11;21692:24;:152::i;:::-;21858:23;;;21241:651;21215:677;21933:16;-1:-1:-1;;;;19443:2515:4;;;;;;;;:::o;2312:782:33:-;2548:11;2784:17;2804:150;2836:23;2873:13;2900:18;2932:12;2804:18;:150::i;:::-;2784:170;-1:-1:-1;2983:104:33;3026:47;2784:170;3045:17;3064:8;3026:18;:47::i;:::-;2984:15;2990:9;150:4:32;2984:15:33;:::i;:::-;2983:25;;:104::i;8679:1001:7:-;8793:53;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8793:53:7;8877:796;;;;;;;;8940:12;:26;-1:-1:-1;;;;;8940:26:7;;;8877:796;;8997:28;;;;8877:796;;;;-1:-1:-1;;;9053:25:7;;;;;8877:796;;;;;;;;;;;;;9148:18;8877:796;;;;9202:21;8877:796;;;;9250:12;8877:796;;;;9294:29;;;;8877:796;;;;9410:36;;8877:796;;8940:26;8877:796;;;9363:97;;9410:36;9363:29;:97::i;:::-;8877:796;;9493:30;;-1:-1:-1;;;;;;;;9493:30:7;;;;;;8877:796;;;;9611:37;;8877:796;;;;;9564:98;;9611:37;;;9564:29;:98::i;:::-;8877:796;;8862:811;8679:1001;-1:-1:-1;;8679:1001:7:o;58989:5242:33:-;59092:7;59242:20;59400:106;59455:7;:33;;;59400:7;:25;;;:33;;:106;;;;:::i;:::-;59318:32;;;;59285:24;;;;:66;;:32;:66::i;:::-;59265:255;;;;:::i;:::-;59242:278;;59530:30;59563:113;59608:7;:21;;;59643:7;:23;;;59563:31;:113::i;:::-;59530:146;;59706:1;59690:13;:17;59686:3447;;;60378:21;60403:291;60452:22;60492:7;:20;;;60530:7;:28;;;60582:7;:19;;;150:4:32;60576:25:33;;;;:::i;:::-;60619:7;:18;;;60655:7;:25;;;60403:31;:291::i;:::-;60375:319;-1:-1:-1;60724:41:33;;-1:-1:-1;60375:319:33;60750:13;60724:17;:41::i;:::-;60708:57;-1:-1:-1;60834:17:33;;60830:448;;60896:367;60988:22;61036:7;:20;;;61082:13;61127:7;:19;;;150:4:32;61121:25:33;;;;:::i;:::-;61172:7;:18;;;61216:7;:25;;;60896:66;:367::i;:::-;60871:392;;:7;;:392;;;;;:::i;:::-;;;-1:-1:-1;60830:448:33;59709:1579;59686:3447;;;61314:1;61298:13;:17;61294:1839;;;62119:14;62120:13;62119:14;:::i;:::-;62103:30;;62197:21;62222:244;62270:22;62310:7;:20;;;62354:7;:19;;;150:4:32;62348:25:33;;;;:::i;:::-;62391:7;:18;;;62427:7;:25;;;62222:30;:244::i;:::-;62194:272;-1:-1:-1;62496:41:33;;-1:-1:-1;62194:272:33;62522:13;62496:17;:41::i;:::-;62480:57;-1:-1:-1;62602:17:33;;62598:448;;62664:367;62756:22;62804:7;:20;;;62850:13;62895:7;:19;;;150:4:32;62889:25:33;;;;:::i;:::-;62940:7;:18;;;62984:7;:25;;;62664:66;:367::i;:::-;62639:392;;:7;;:392;;;;;:::i;:::-;;;-1:-1:-1;62598:448:33;63084:38;63109:13;63092;63084:38;:::i;:::-;63059:63;;:7;;:63;;;;;:::i;:::-;;;-1:-1:-1;;61294:1839:33;63266:19;63500:153;63563:7;:32;;;150:4:32;63557:38:33;;;;:::i;:::-;63617:18;;;;63500:24;;;;;:153;:35;:153::i;:::-;63308:143;63368:7;:33;;;150:4:32;63362:39:33;;;;:::i;:::-;63419:18;;;;63308:25;;;;;:143;:36;:143::i;:::-;63288:379;;;;:::i;:::-;63266:401;;63677:27;63751:12;63714:7;:21;;;63707:56;;;;:::i;:::-;63677:86;;63807:7;:28;;;63777:20;:59;63773:131;;;63859:34;;-1:-1:-1;;;63859:34:33;;;;;;;;;;;63773:131;63913:53;;;64196:28;;;;64172:52;;63945:20;64172:52;:::i;:::-;64165:59;58989:5242;-1:-1:-1;;;;;;58989:5242:33:o;15478:3325:4:-;15661:19;15684:1;15661:24;15657:61;;15478:3325;:::o;15657:61::-;15949:12;:26;-1:-1:-1;;;;;15949:26:4;16005:21;15989:37;;15985:109;;;16049:34;;-1:-1:-1;;;16049:34:4;;;;;;;;;;;15985:109;16263:27;16293:55;16329:19;16300:13;16293:55;:::i;:::-;16263:85;;16392:21;16362:20;:52;16358:124;;;16437:34;;-1:-1:-1;;;16437:34:4;;;;;;;;;;;16358:124;16520:41;16528:20;16520:39;:41::i;:::-;16491:12;:70;;-1:-1:-1;;;;;;16491:70:4;-1:-1:-1;;;;;16491:70:4;;;;;;;;;;17137:28;;-1:-1:-1;;17137:28:4;;17179:20;;;17175:488;;17264:139;17272:20;17334:15;17372:13;17264:40;:139::i;:::-;17215:202;;17175:488;;;17498:140;17568:16;17569:15;17568:16;:::i;:::-;17506:20;;17607:13;17498:40;:140::i;:::-;17473:179;;;:::i;:::-;17448:204;;17175:488;17703:33;:22;:31;:33::i;:::-;17672:28;:64;;-1:-1:-1;;;;;;17672:64:4;-1:-1:-1;;;;;17672:64:4;;;;;;:12;18578:25;18376:420;;:395;;-1:-1:-1;;;18578:25:4;;;18621:136;18689:13;18724:15;18621:46;:136::i;:::-;18376:160;18461:20;18500:22;18376:59;:160::i;:420::-;18348:12;:448;;-1:-1:-1;;;;;18348:448:4;;;-1:-1:-1;;;18348:448:4;;;;;;;;;-1:-1:-1;;;;;15478:3325:4:o;19075:4703:5:-;19246:25;19285:21;19320:26;19360:23;19397:27;19438:26;20112:21;20136:38;20160:13;20136:23;:38::i;:::-;20112:62;;20242:337;20314:25;:23;:25::i;:::-;20361:12;:25;-1:-1:-1;;;20361:25:5;;-1:-1:-1;;;;;20361:25:5;20408:11;20441:13;20476:12;20510:11;20543:18;20242:50;:337::i;:::-;20188:391;;-1:-1:-1;20188:391:5;-1:-1:-1;20188:391:5;-1:-1:-1;20634:17:5;20654:199;20705:25;:23;:25::i;20654:199::-;20634:219;;20867:22;20879:9;20867:11;:22::i;:::-;21130:21;21165:20;21343:159;21390:11;21419:13;21450:9;21477:11;21343:29;:159::i;:::-;21199:303;-1:-1:-1;21199:303:5;;-1:-1:-1;21199:303:5;-1:-1:-1;21737:32:5;21199:303;21737:32;;:::i;:::-;;-1:-1:-1;21980:28:5;21996:12;21980:13;:28;:::i;:::-;21963:45;;;;:::i;:::-;;-1:-1:-1;22392:34:5;22408:18;21963:45;22392:34;:::i;:::-;22371:55;;19677:2760;;;;22884:887;22945:13;22972:18;23004:15;23033:18;23512:12;:47;23541:17;23525:13;:33;;;;:::i;:::-;23512:47;;;;;;;;;;;-1:-1:-1;23512:47:5;:58;-1:-1:-1;;;;;23512:58:5;23604:15;:31;-1:-1:-1;23604:118:5;;23684:27;;;;:12;:27;;;;;:38;-1:-1:-1;;;;;23684:38:5;23604:118;;;23654:11;23604:118;23757:4;22884:47;:887::i;:::-;19075:4703;;22717:1054;;-1:-1:-1;22717:1054:5;;-1:-1:-1;22717:1054:5;-1:-1:-1;22717:1054:5;;-1:-1:-1;19075:4703:5;-1:-1:-1;;;;19075:4703:5:o;11870:2273::-;12133:29;;-1:-1:-1;;;;;12133:29:5;12270:335;:306;12133:29;12445:20;:13;12461:4;12445:20;:::i;:::-;12295:36;;-1:-1:-1;;;;;12295:36:5;;12270:306;12520:11;12553:5;12270:114;:306::i;:335::-;12231:36;:374;;-1:-1:-1;;;;;;12231:374:5;-1:-1:-1;;;;;12231:374:5;;;;;;;;;;12759:23;:11;:21;:23::i;:::-;12723:59;;:17;:59;:::i;:::-;12675:29;:107;;-1:-1:-1;;;;;;12675:107:5;-1:-1:-1;;;;;12675:107:5;;;;;;;;;;-1:-1:-1;13344:31:5;:19;:29;:31::i;:::-;13314:12;:61;;:26;;:61;;;;-1:-1:-1;;;;;13314:61:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13314:61:5;;;;;-1:-1:-1;;;;;13314:61:5;;;;;;13417:32;:21;:30;:32::i;:::-;13385:28;:64;;:28;;:64;;;;;;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13385:64:5;;;;;;;-1:-1:-1;;;;;13385:64:5;;;;;;13488:30;:18;:28;:30::i;:::-;13459:12;:59;;:25;;:59;;;;-1:-1:-1;;;13459:59:5;;-1:-1:-1;;;;;13459:59:5;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;13459:59:5;;;;;;;;;;;;;;;13907:12;:26;13937:21;13907:26;;13899:59;;-1:-1:-1;13899:59:5;:161;;-1:-1:-1;14032:28:5;;:12;13989:26;14032:28;;;;;-1:-1:-1;;;;;13989:26:5;;;13974:86;13899:161;13882:255;;;14092:34;;-1:-1:-1;;;14092:34:5;;;;;;;;;;;5173:642:82;5592:23;5618:69;5646:4;5618:69;;;;;;;;;;;;;;;;;5626:5;-1:-1:-1;;;;;5618:27:82;;;:69;;;;;:::i;:::-;5592:95;;5705:10;:17;5726:1;5705:22;:56;;;;5742:10;5731:30;;;;;;;;;;;;:::i;:::-;5697:111;;;;-1:-1:-1;;;5697:111:82;;17684:2:165;5697:111:82;;;17666:21:165;17723:2;17703:18;;;17696:30;17762:34;17742:18;;;17735:62;-1:-1:-1;;;17813:18:165;;;17806:40;17863:19;;5697:111:82;17482:406:165;1355:203:82;1482:68;;-1:-1:-1;;;;;18151:15:165;;;1482:68:82;;;18133:34:165;18203:15;;18183:18;;;18176:43;18235:18;;;18228:34;;;1455:96:82;;1475:5;;-1:-1:-1;;;1505:27:82;18068:18:165;;1482:68:82;17893:375:165;7864:2095:1;8041:21;;8324:32;:11;8344;8324:19;:32::i;:::-;8308:48;-1:-1:-1;8366:15:1;8384:31;8308:48;8406:8;8384:21;:31::i;:::-;8366:49;-1:-1:-1;8441:31:1;8366:49;8457:14;8441:15;:31::i;:::-;8425:47;;8899:7;8895:557;;;8939:23;8949:13;8939:7;:23;:::i;:::-;8922:40;;;;:::i;:::-;;;8895:557;;;9418:23;9428:13;9418:7;:23;:::i;:::-;9401:40;;;;:::i;:::-;;;8895:557;9665:15;9651:11;:29;9647:306;;;9712:100;:13;9754:11;9783:15;9712:24;:100::i;:::-;9696:116;-1:-1:-1;9842:100:1;:13;9884:11;9913:15;9842:24;:100::i;:::-;9826:116;;9647:306;8087:1872;7864:2095;;;;;;;:::o;5385:642:33:-;5638:7;5758:262;5821:23;5862:13;5893:12;5923:18;5929:12;150:4:32;5923:18:33;:::i;:::-;5959:11;5988:18;5758:45;:262::i;1246:449::-;1441:17;1575:113;1675:12;1575:82;:18;1618:23;1643:13;1575:42;:82::i;1112:1260:8:-;1199:7;:21;-1:-1:-1;;;;;;;;1199:21:8;;;;;1254:12;1361:15;1332:26;1348:10;1199:21;1332:26;:::i;:::-;:44;1328:81;;;1392:7;;1112:1260;:::o;1328:81::-;1465:27;1495:7;1503:4;1495:13;;;;;;;;:::i;:::-;;;;;;;;;1549:18;;1495:13;;-1:-1:-1;1549:18:8;;;;1608:13;;;;-1:-1:-1;;;;;1608:13:8;;1674:30;1549:18;1674:15;:30;:::i;:::-;2101:7;:14;1658:46;;-1:-1:-1;1943:13:8;;;:27;;;1892:11;;2080:17;2088:4;2096:1;2080:17;:::i;:::-;2079:36;;;;:::i;:::-;2060:55;;2194:49;;;;;;;;2212:15;2194:49;;;;;;2238:3;-1:-1:-1;;;;;2194:49:8;;;;2174:7;2182:8;2174:17;;;;;;;;:::i;:::-;;;;;;;;;;:69;;;;;;-1:-1:-1;;;;;2174:69:8;;;;;;;;;;;:17;;:69;;;;2263:102;;;;;;;;;-1:-1:-1;;;;;2263:102:8;;;;;;2339:15;2263:102;;;;;;;;-1:-1:-1;;;2253:112:8;;:7;:112;-1:-1:-1;;;;;;;;1112:1260:8:o;12874:1582:2:-;13051:21;;14035:177;14202:9;14035:145;14168:11;14035:145;14136:9;565:4:32;14036:41:2;565:4:32;14066:10:2;14036:29;:41::i;:::-;:77;;;;:::i;14035:177::-;14019:193;-1:-1:-1;14412:37:2;14019:193;14434:14;14412:21;:37::i;:::-;14391:58;;12874:1582;;;;;;:::o;68721:340:33:-;68856:7;;68907:53;68944:16;68914:14;68907:53;:::i;:::-;68875:85;;69004:1;68978:22;:27;;68970:36;;;;;13582:678:32;13776:15;13807:9;13803:451;;;13842:152;13949:27;13964:12;13949;:27;:::i;:::-;13892:28;:12;13913:6;13892:20;:28::i;:::-;13843:30;:12;13864:8;13843:20;:30::i;:::-;:77;;;;:::i;:::-;13842:85;;:152::i;:::-;13832:162;;13803:451;;;14045:12;14029;:28;14025:42;;-1:-1:-1;14066:1:32;14059:8;;14025:42;14091:152;14198:27;14213:12;14198;:27;:::i;:::-;14141:28;:12;14162:6;14141:20;:28::i;:::-;14092:30;:12;14113:8;14092:20;:30::i;:::-;:77;;;;:::i;12079:313:2:-;12143:4;12342:42;:21;12372:11;12342:29;:42::i;:::-;12285:25;;:12;12212:26;12178:141;;12317:1;;-1:-1:-1;;;;;;;;12285:25:2;;;;;12179:132;;;12204:56;;12212:26;12248:11;12204:43;:56::i;:::-;12179:132;;;;:::i;:::-;12178:138;;:141::i;:::-;:207;;;12079:313;-1:-1:-1;;12079:313:2:o;2207:165:32:-;2269:7;2296:22;2307:1;2310:4;2316:1;2296:10;:22::i;4141:115::-;4201:7;4228:20;4237:1;4240:4;4246:1;4228:8;:20::i;4671:846::-;4729:7;4795:1;4800;4795:6;4791:50;;-1:-1:-1;565:4:32;4817:13;;4791:50;4894:1;4899;4894:6;4890:45;;-1:-1:-1;4923:1:32;4916:8;;4890:45;5098:1;5073:15;5276:14;5287:1;5276:3;:14::i;:::-;5263:27;-1:-1:-1;5368:18:32;;;5405:22;565:4;5368:18;5405:22;:::i;:::-;;;5500:9;5504:4;5500:3;:9::i;11297:490:2:-;11453:25;;11392:18;;;;11445:77;;-1:-1:-1;;;11453:25:2;;-1:-1:-1;;;;;11453:25:2;11501:11;11445:42;:77::i;:::-;11422:100;-1:-1:-1;11565:36:2;11580:21;11422:100;11565:36;:::i;:::-;11536:12;:26;-1:-1:-1;;;;;11536:26:2;:65;11532:222;;;11646:12;:26;11722:21;;11646:57;;11691:12;;-1:-1:-1;;;;;11646:26:2;:57;:::i;:::-;:97;;;;:::i;:::-;11617:126;;11532:222;11763:17;11297:490;;;:::o;25218:1730:4:-;25911:25;25955:1;25939:13;:17;:122;;26047:14;25939:122;;;25971:61;:14;25997:19;26018:13;25971:25;:61::i;:::-;25911:150;;26075:17;26096:1;26075:22;26071:35;;26099:7;;;26071:35;26314:17;26374:19;26407:48;;;26403:274;;;26488:28;;-1:-1:-1;26555:111:4;:19;26488:28;26635:17;26555:30;:111::i;:::-;26530:136;;26403:274;26719:26;:14;:24;:26::i;:::-;26686:13;:59;;:29;;:59;;;;-1:-1:-1;;;;;26686:59:4;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;26686:59:4;;;;;-1:-1:-1;;;;;26686:59:4;;;;;;26781:34;:22;:32;:34::i;:::-;26755:13;:60;;:22;;:60;;;;-1:-1:-1;;;26755:60:4;;-1:-1:-1;;;;;26755:60:4;;:::i;:::-;;;;;;;;-1:-1:-1;;;;;26755:60:4;;;;;-1:-1:-1;;;;;26755:60:4;;;;;;26892:49;26917:22;26909:31;;;:::i;6709:368:7:-;6802:21;6835:24;6862:19;:17;:19::i;:::-;6835:46;;6923:16;6907:13;:32;:95;;7001:1;6907:95;;;6954:32;6970:16;6954:13;:32;:::i;:::-;6891:111;-1:-1:-1;7028:42:7;6891:111;7052:17;7028:23;:42::i;10814:1571:33:-;11146:23;;;11822:100;11857:30;11863:24;150:4:32;11857:30:33;:::i;:::-;11822:10;;11901:11;11822:21;:100::i;:::-;11807:115;-1:-1:-1;11949:44:33;:10;11968:24;11949:18;:44::i;:::-;11932:61;-1:-1:-1;12007:18:33;;12003:376;;12059:264;12122:23;12163:13;12194:14;12226:18;12232:12;150:4:32;12226:18:33;:::i;:::-;12262:11;12291:18;12059:45;:264::i;:::-;12041:282;-1:-1:-1;12337:31:33;12041:282;12337:31;;:::i;:::-;;;12003:376;10814:1571;;;;;;;;;;;:::o;18315:2337:2:-;18547:21;;;;19366:34;19390:10;565:4:32;19366:34:2;:::i;:::-;19350:50;-1:-1:-1;19426:141:2;19529:24;19555:11;19426:78;19493:10;19426:45;19350:50;19461:9;19426:34;:45::i;:141::-;19410:157;-1:-1:-1;19767:37:2;19410:157;19789:14;19767:21;:37::i;:::-;19746:58;-1:-1:-1;20234:12:2;20249:118;20284:48;20308:24;565:4:32;20284:48:2;:::i;:::-;20249:10;;20346:11;20249:21;:118::i;:::-;20234:133;-1:-1:-1;20392:22:2;20234:133;20405:8;20392:12;:22::i;:::-;20377:37;-1:-1:-1;20609:36:2;20377:37;20630:14;20609:20;:36::i;:::-;20589:56;;18696:1956;18315:2337;;;;;;;;;:::o;65520:1230:33:-;65762:21;;66104:186;66140:16;66246:34;:15;66268:11;66246:21;:34::i;:::-;66104:11;;:186;:22;:186::i;:::-;66083:207;-1:-1:-1;66511:45:33;:11;66534:8;66544:11;66511:22;:45::i;:::-;66497:59;;;;:::i;:::-;;;66584:12;66571:10;:25;66567:147;;;66678:25;66691:12;66678:10;:25;:::i;:::-;66662:41;;66567:147;66723:20;65520:1230;;;;;;;;:::o;14234:2717::-;14534:7;14543;14552;14561:6;14569:7;15503:27;15563:15;15544:16;:34;15540:1219;;;15779:7;15775:181;;;15823:118;:14;15870:16;15908:15;15823:25;:118::i;:::-;15806:135;;15775:181;16031:111;:19;16079:16;16113:15;16031:30;:111::i;:::-;16009:133;-1:-1:-1;16250:70:33;16303:16;16009:133;16250:70;:::i;:::-;16211:109;-1:-1:-1;16353:108:33;:16;16398;16432:15;16353:27;:108::i;:::-;16334:127;-1:-1:-1;16497:111:33;:19;16545:16;16579:15;16497:30;:111::i;:::-;16475:133;;15540:1219;;;16678:70;16731:16;16685:19;16678:70;:::i;:::-;16639:109;;15540:1219;16790:14;;16818:19;;16851:16;;14234:2717;-1:-1:-1;;;;;;;;14234:2717:33:o;994:219:34:-;1045:8;-1:-1:-1;;;;;;1071:21:34;;;;;:46;;-1:-1:-1;;;;;;1096:21:34;;;1071:46;1065:119;;1141:32;;-1:-1:-1;;;1141:32:34;;;;;;;;;;;15261:101:32;15317:6;15346:1;15342;:5;:13;;15354:1;15342:13;;;-1:-1:-1;15350:1:32;;15261:101;-1:-1:-1;15261:101:32:o;14987:::-;15043:6;15072:1;15068;:5;:13;;15080:1;15068:13;;9270:637:33;9521:7;9641:259;9704:23;9745:13;9776:9;9803:18;9809:12;150:4:32;9803:18:33;:::i;:::-;9839:11;9868:18;9641:45;:259::i;15102:2464:2:-;15333:21;;;;16118:34;16142:10;565:4:32;16118:34:2;:::i;:::-;16097:55;-1:-1:-1;16178:137:2;16277:24;16303:11;16178:74;16242:9;16178:42;16097:55;16210:9;16178:31;:42::i;:137::-;16162:153;-1:-1:-1;16515:37:2;16162:153;16537:14;16515:21;:37::i;:::-;16494:58;-1:-1:-1;16982:12:2;16997:117;17031:48;17055:24;565:4:32;17031:48:2;:::i;16997:117::-;16982:132;-1:-1:-1;17139:22:2;16982:132;17152:8;17139:12;:22::i;:::-;17124:37;-1:-1:-1;17523:36:2;17124:37;17544:14;17523:20;:36::i;:::-;17501:58;;;;:::i;:::-;;;15443:2123;;15102:2464;;;;;;;;:::o;14710:104:32:-;14768:7;14798:1;14794;:5;:13;;14806:1;14794:13;;24101:580:4;24272:20;24295:95;24345:35;24368:11;24345:22;:35::i;24295:95::-;24400:21;24424:34;;;:12;:34;;-1:-1:-1;;;;;;;;;;;24424:34:4;24272:118;;-1:-1:-1;24400:21:4;24424:77;;24473:28;;24424:77;:::i;:::-;24400:101;;24511:163;24550:19;24583:12;24609:13;24636:28;24511:25;:163::i;2726:748:32:-;2840:9;3105:1;-1:-1:-1;;3088:19:32;3085:1;3082:26;3079:1;3075:34;3068:42;3055:11;3051:60;3024:146;;3154:1;3151;3144:12;3024:146;-1:-1:-1;3421:9:32;;3368:27;;;3365:34;;3417:27;;;3344:114;;2726:748::o;7277:444:7:-;7376:21;7409:24;565:4:32;7436:19:7;:17;:19::i;:::-;:43;;;;:::i;:::-;7409:70;;7521:16;7505:13;:32;:95;;7599:1;7505:95;;;7552:32;7568:16;7552:13;:32;:::i;:::-;7489:111;-1:-1:-1;7626:88:7;7663:41;565:4:32;7663:17:7;:41;:::i;:::-;7627:13;;7626:23;:88::i;9241:983:35:-;9414:7;;;9880:13;:1;9890:2;9880:9;:13::i;:::-;9863:30;;9903:9;9915:47;9942:6;9950:2;9954:1;9957;9960;9915:26;:47::i;:::-;9903:59;-1:-1:-1;9972:16:35;9991:105;10054:32;565:4:32;10084:1:35;10054:29;:32::i;:::-;9996:39;10011:23;10032:1;10011:16;:2;10022:4;10011:10;:16::i;:23::-;9996:6;;:14;:39::i;:::-;9992:43;;:1;:43;:::i;9991:105::-;9972:124;-1:-1:-1;10194:8:35;10198:4;10194:1;:8;:::i;:::-;10204:12;10215:1;10204:8;:12;:::i;:::-;10186:31;;;;;;;9241:983;;;;;;;;;;:::o;14433:104:32:-;14491:7;14521:1;14517;:5;:13;;14529:1;14517:13;;4871:481:35;5056:14;5082:12;5124:136;5172:1;5187;5202:2;5218:1;5233;5248:2;5124:34;:136::i;:::-;5104:156;;-1:-1:-1;5104:156:35;-1:-1:-1;5104:156:35;5270:76;;5305:30;;-1:-1:-1;;;5305:30:35;;;;;;;;;;;7623:1046;7773:7;;;8276:13;:1;8286:2;8276:9;:13::i;:::-;8259:30;;8299:9;8311:47;8338:6;8346:2;8350:1;8353;8356;8311:26;:47::i;:::-;8299:59;-1:-1:-1;8368:16:35;8387:103;8448:32;565:4:32;8478:1:35;8448:29;:32::i;:::-;8388:41;8398:30;565:4:32;8398:6:35;:30;:::i;:::-;8388:1;;:9;:41::i;8387:103::-;8368:122;-1:-1:-1;8500:16:35;8519:20;8368:122;8536:2;8519:16;:20::i;:::-;8500:39;-1:-1:-1;8635:12:35;8646:1;8500:39;8635:12;:::i;:::-;8649;8653:8;8649:1;:12;:::i;:::-;8627:35;;;;;;;;7623:1046;;;;;;;;:::o;3358:892::-;3543:7;;3595:13;:1;3605:2;3595:9;:13::i;:::-;3578:30;;3669:9;3681:47;3708:6;3716:2;3720:1;3723;3726;3681:26;:47::i;:::-;3669:59;-1:-1:-1;3770:15:35;3783:1;3771:6;3775:2;3771:1;:6;:::i;3770:15::-;3766:19;-1:-1:-1;3884:10:35;3897:81;3938:30;565:4:32;3966:1:35;3938:27;:30::i;:::-;3897:23;3913:6;3898:5;3902:1;3898;:5;:::i;3897:81::-;3884:94;-1:-1:-1;4088:14:35;3884:94;4099:2;4088:10;:14::i;:::-;4083:19;-1:-1:-1;4237:6:35;4242:1;4083:19;4237:6;:::i;:::-;4230:13;3358:892;-1:-1:-1;;;;;;;;;;3358:892:35:o;6971:1627:33:-;7301:23;;;7880:99;7914:30;7920:24;150:4:32;7914:30:33;:::i;7880:99::-;7864:115;-1:-1:-1;7993:28:33;;7989:603;;8109:43;:9;8127:24;8109:17;:43::i;:::-;8092:60;-1:-1:-1;8271:264:33;8334:23;8375:13;8092:60;8438:18;8444:12;150:4:32;8438:18:33;:::i;:::-;8474:11;8503:18;8271:45;:264::i;4108:223:83:-;4241:12;4272:52;4294:6;4302:4;4308:1;4311:12;4272:21;:52::i;2008:837:35:-;2193:7;;2245:13;:1;2255:2;2245:9;:13::i;:::-;2228:30;;2319:9;2331:47;2358:6;2366:2;2370:1;2373;2376;2331:26;:47::i;:::-;2319:59;-1:-1:-1;2427:25:35;2450:1;2427:18;2438:6;2442:2;2438:1;:6;:::i;:::-;2427:2;;:10;:18::i;:25::-;2423:29;-1:-1:-1;2512:17:35;:6;2423:29;2512:14;:17::i;:::-;2508:21;-1:-1:-1;2644:10:35;2657:43;2669:30;565:4:32;2697:1:35;2669:27;:30::i;:::-;2658:5;2662:1;2658;:5;:::i;2657:43::-;2644:56;-1:-1:-1;2832:6:35;2644:56;2832:1;:6;:::i;9632:3592:32:-;9677:8;9730:1;9725;:6;9721:60;;9740:41;;-1:-1:-1;;;9740:41:32;;;;;;;;;;;9721:60;-1:-1:-1;10747:2:32;-1:-1:-1;;;;;;;10158:1:32;10154:49;10261:9;;;10241:18;10238:33;10235:1;10231:41;10225:48;10323:9;;;10311:10;10308:25;10305:1;10301:33;10295:40;10381:9;;;10373:6;10370:21;10367:1;10363:29;10357:36;10437:9;;;10431:4;10428:19;10425:1;10421:27;;;10415:34;;;10492:9;;;10487:3;10484:18;10481:1;10477:26;10471:33;10547:9;;;10539:18;;;10536:1;10532:26;;;10526:33;;;10595:9;;;10587:18;;;10581:25;10777:3;:7;;;;;10763:22;;;;10810:17;;;11603:31;11599:35;;11654:5;;11653:13;;11670:32;11652:50;11722:5;;11721:13;;11738:33;11720:51;11791:5;;11790:13;;11807:33;11789:51;11860:5;;11859:13;;11876:33;11858:51;11929:5;;11928:13;;11945:32;11927:50;11997:5;;11996:13;;12013:30;11995:48;11000:31;10996:35;;11051:5;;11050:13;;11067:32;11049:50;11119:5;;11118:13;;11135:32;11117:50;11187:5;;11186:13;;-1:-1:-1;;11185:50:32;11255:5;;11254:13;;-1:-1:-1;;11253:50:32;11323:5;;11322:13;;;-1:-1:-1;;11321:50:32;11389:5;-1:-1:-1;;11389:46:32;12384:10;12774:43;12769:48;-1:-1:-1;;10743:6:32;;;;12897:71;:91;12876:112;13061:72;13056:77;13204:3;13198:9;;9632:3592::o;5773:3347::-;5819:8;-1:-1:-1;;5996:1:32;:26;5992:40;;-1:-1:-1;6031:1:32;;5773:3347;-1:-1:-1;5773:3347:32:o;5992:40::-;6231:21;6226:1;:26;6222:99;;6277:44;;-1:-1:-1;;;6277:44:32;;;;;;;;;;;6222:99;6594:7;6588:2;6583:7;;;6582:19;;-1:-1:-1;6930:8:32;7014:2;6954:29;6943:7;;;6942:41;-1:-1:-1;;;6942:51:32;6941:75;;7042:29;7038:33;;7034:37;;;-1:-1:-1;;7713:35:32;;7768:5;;7348:2;7767:13;;;7784:32;7766:50;7836:5;;7835:13;;-1:-1:-1;;7834:51:32;7905:5;;7904:13;;7921:34;7903:52;7975:5;;7974:13;;-1:-1:-1;;7973:53:32;8046:5;;8045:13;;8062:35;8044:53;7354:32;7287:31;7283:35;;7338:5;;7337:13;;7336:50;;;7411:5;;;-1:-1:-1;;7411:40:32;7471:5;7470:13;;;7487:35;7469:53;7540:5;;;-1:-1:-1;;;7540:50:32;8462:10;8999:49;8966:82;9081:3;:7;;;;8965:124;;;;;;-1:-1:-1;;5773:3347:32:o;3750:115::-;3810:7;3837:20;3846:1;3849;3852:4;3837:8;:20::i;10669:302:35:-;10835:7;10956:8;:1;10962;10956:5;:8::i;:::-;10917:36;10932:20;10950:1;10932:13;:2;10943:1;10932:10;:13::i;:20::-;10917:6;;:14;:36::i;:::-;:47;;;;:::i;6050:1039::-;6239:14;;;6312:13;:1;6322:2;6312:9;:13::i;:::-;6295:30;;6386:9;6398:47;6425:6;6433:2;6437:1;6440;6443;6398:26;:47::i;:::-;6386:59;-1:-1:-1;6487:15:35;6500:1;6488:6;6492:2;6488:1;:6;:::i;6487:15::-;6483:19;;6520:1;6516;:5;6512:53;;;6545:1;6548:5;6537:17;;;;;;;;6512:53;6663:10;6676:81;6717:30;565:4:32;6745:1:35;6717:27;:30::i;:::-;6676:23;6692:6;6677:5;6681:1;6677;:5;:::i;6676:81::-;6663:94;-1:-1:-1;6867:14:35;6663:94;6878:2;6867:10;:14::i;:::-;6862:19;;7015:2;7011:1;:6;7007:52;;;7042:6;7046:2;7042:1;:6;:::i;:::-;7033:15;;7007:52;7078:4;7068:14;;6269:820;;;6050:1039;;;;;;;;;:::o;5165:446:83:-;5330:12;5387:5;5362:21;:30;;5354:81;;;;-1:-1:-1;;;5354:81:83;;18673:2:165;5354:81:83;;;18655:21:165;18712:2;18692:18;;;18685:30;18751:34;18731:18;;;18724:62;-1:-1:-1;;;18802:18:165;;;18795:36;18848:19;;5354:81:83;18471:402:165;5354:81:83;5446:12;5460:23;5487:6;-1:-1:-1;;;;;5487:11:83;5506:5;5513:4;5487:31;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5445:73;;;;5535:69;5562:6;5570:7;5579:10;5591:12;5535:26;:69::i;:::-;5528:76;;;;5165:446;;;;;;;:::o;7671:628::-;7851:12;7879:7;7875:418;;;7906:10;:17;7927:1;7906:22;7902:286;;-1:-1:-1;;;;;1702:19:83;;;8113:60;;;;-1:-1:-1;;;8113:60:83;;19372:2:165;8113:60:83;;;19354:21:165;19411:2;19391:18;;;19384:30;19450:31;19430:18;;;19423:59;19499:18;;8113:60:83;19170:353:165;8113:60:83;-1:-1:-1;8208:10:83;8201:17;;7875:418;8249:33;8257:10;8269:12;8980:17;;:21;8976:379;;9208:10;9202:17;9264:15;9251:10;9247:2;9243:19;9236:44;8976:379;9331:12;9324:20;;-1:-1:-1;;;9324:20:83;;;;;;;;:::i;14:271:165:-;197:6;189;184:3;171:33;153:3;223:16;;248:13;;;223:16;14:271;-1:-1:-1;14:271:165:o;290:361::-;407:12;;455:4;444:16;;438:23;-1:-1:-1;;;;;;518:11:165;;;;407:12;438:23;552:1;541:13;;538:107;;;632:2;626;616:6;613:1;609:14;606:1;602:22;598:31;594:2;590:40;586:49;577:58;;538:107;;;;290:361;;;:::o;656:127::-;717:10;712:3;708:20;705:1;698:31;748:4;745:1;738:15;772:4;769:1;762:15;788:250;873:1;883:113;897:6;894:1;891:13;883:113;;;973:11;;;967:18;954:11;;;947:39;919:2;912:10;883:113;;;-1:-1:-1;;1030:1:165;1012:16;;1005:27;788:250::o;1043:896::-;1122:6;1175:2;1163:9;1154:7;1150:23;1146:32;1143:52;;;1191:1;1188;1181:12;1143:52;1224:9;1218:16;1253:18;1294:2;1286:6;1283:14;1280:34;;;1310:1;1307;1300:12;1280:34;1348:6;1337:9;1333:22;1323:32;;1393:7;1386:4;1382:2;1378:13;1374:27;1364:55;;1415:1;1412;1405:12;1364:55;1444:2;1438:9;1466:2;1462;1459:10;1456:36;;;1472:18;;:::i;:::-;1547:2;1541:9;1515:2;1601:13;;-1:-1:-1;;1597:22:165;;;1621:2;1593:31;1589:40;1577:53;;;1645:18;;;1665:22;;;1642:46;1639:72;;;1691:18;;:::i;:::-;1731:10;1727:2;1720:22;1766:2;1758:6;1751:18;1806:7;1801:2;1796;1792;1788:11;1784:20;1781:33;1778:53;;;1827:1;1824;1817:12;1778:53;1840:68;1905:2;1900;1892:6;1888:15;1883:2;1879;1875:11;1840:68;:::i;1944:131::-;-1:-1:-1;;;;;2019:31:165;;2009:42;;1999:70;;2065:1;2062;2055:12;1999:70;1944:131;:::o;2080:118::-;2166:5;2159:13;2152:21;2145:5;2142:32;2132:60;;2188:1;2185;2178:12;2203:450;2277:6;2285;2293;2346:2;2334:9;2325:7;2321:23;2317:32;2314:52;;;2362:1;2359;2352:12;2314:52;2398:9;2385:23;2375:33;;2458:2;2447:9;2443:18;2430:32;2471:31;2496:5;2471:31;:::i;:::-;2521:5;-1:-1:-1;2578:2:165;2563:18;;2550:32;2591:30;2550:32;2591:30;:::i;:::-;2640:7;2630:17;;;2203:450;;;;;:::o;2840:262::-;2914:6;2967:2;2955:9;2946:7;2942:23;2938:32;2935:52;;;2983:1;2980;2973:12;2935:52;3022:9;3009:23;3041:31;3066:5;3041:31;:::i;3107:241::-;3163:6;3216:2;3204:9;3195:7;3191:23;3187:32;3184:52;;;3232:1;3229;3222:12;3184:52;3271:9;3258:23;3290:28;3312:5;3290:28;:::i;3353:588::-;3445:6;3453;3461;3469;3477;3530:3;3518:9;3509:7;3505:23;3501:33;3498:53;;;3547:1;3544;3537:12;3498:53;3583:9;3570:23;3560:33;;3640:2;3629:9;3625:18;3612:32;3602:42;;3691:2;3680:9;3676:18;3663:32;3653:42;;3745:2;3734:9;3730:18;3717:32;3758:31;3783:5;3758:31;:::i;:::-;3808:5;-1:-1:-1;3865:3:165;3850:19;;3837:33;3879:30;3837:33;3879:30;:::i;:::-;3928:7;3918:17;;;3353:588;;;;;;;;:::o;4199:367::-;4262:8;4272:6;4326:3;4319:4;4311:6;4307:17;4303:27;4293:55;;4344:1;4341;4334:12;4293:55;-1:-1:-1;4367:20:165;;4410:18;4399:30;;4396:50;;;4442:1;4439;4432:12;4396:50;4479:4;4471:6;4467:17;4455:29;;4539:3;4532:4;4522:6;4519:1;4515:14;4507:6;4503:27;4499:38;4496:47;4493:67;;;4556:1;4553;4546:12;4571:1050;4711:6;4719;4727;4735;4743;4751;4804:3;4792:9;4783:7;4779:23;4775:33;4772:53;;;4821:1;4818;4811:12;4772:53;4860:9;4847:23;4879:31;4904:5;4879:31;:::i;:::-;4929:5;-1:-1:-1;4986:2:165;4971:18;;4958:32;4999:33;4958:32;4999:33;:::i;:::-;5051:7;-1:-1:-1;5109:2:165;5094:18;;5081:32;5132:18;5162:14;;;5159:34;;;5189:1;5186;5179:12;5159:34;5228:70;5290:7;5281:6;5270:9;5266:22;5228:70;:::i;:::-;5317:8;;-1:-1:-1;5202:96:165;-1:-1:-1;5405:2:165;5390:18;;5377:32;;-1:-1:-1;5421:16:165;;;5418:36;;;5450:1;5447;5440:12;5418:36;;5489:72;5553:7;5542:8;5531:9;5527:24;5489:72;:::i;:::-;4571:1050;;;;-1:-1:-1;4571:1050:165;;-1:-1:-1;4571:1050:165;;5580:8;;4571:1050;-1:-1:-1;;;4571:1050:165:o;5626:525::-;5712:6;5720;5728;5736;5789:3;5777:9;5768:7;5764:23;5760:33;5757:53;;;5806:1;5803;5796:12;5757:53;5842:9;5829:23;5819:33;;5902:2;5891:9;5887:18;5874:32;5915:31;5940:5;5915:31;:::i;:::-;5965:5;-1:-1:-1;6022:2:165;6007:18;;5994:32;6035:33;5994:32;6035:33;:::i;:::-;5626:525;;;;-1:-1:-1;6087:7:165;;6141:2;6126:18;6113:32;;-1:-1:-1;;5626:525:165:o;6156:519::-;6239:6;6247;6255;6263;6316:3;6304:9;6295:7;6291:23;6287:33;6284:53;;;6333:1;6330;6323:12;6284:53;6369:9;6356:23;6346:33;;6426:2;6415:9;6411:18;6398:32;6388:42;;6480:2;6469:9;6465:18;6452:32;6493:31;6518:5;6493:31;:::i;:::-;6543:5;-1:-1:-1;6600:2:165;6585:18;;6572:32;6613:30;6572:32;6613:30;:::i;:::-;6156:519;;;;-1:-1:-1;6156:519:165;;-1:-1:-1;;6156:519:165:o;6862:525::-;6948:6;6956;6964;6972;7025:3;7013:9;7004:7;7000:23;6996:33;6993:53;;;7042:1;7039;7032:12;6993:53;7078:9;7065:23;7055:33;;7138:2;7127:9;7123:18;7110:32;7151:31;7176:5;7151:31;:::i;:::-;7201:5;-1:-1:-1;7253:2:165;7238:18;;7225:32;;-1:-1:-1;7309:2:165;7294:18;;7281:32;7322:33;7281:32;7322:33;:::i;7392:382::-;7457:6;7465;7518:2;7506:9;7497:7;7493:23;7489:32;7486:52;;;7534:1;7531;7524:12;7486:52;7573:9;7560:23;7592:31;7617:5;7592:31;:::i;:::-;7642:5;-1:-1:-1;7699:2:165;7684:18;;7671:32;7712:30;7671:32;7712:30;:::i;:::-;7761:7;7751:17;;;7392:382;;;;;:::o;7779:896::-;7887:6;7895;7903;7911;7919;7927;7935;7988:3;7976:9;7967:7;7963:23;7959:33;7956:53;;;8005:1;8002;7995:12;7956:53;8044:9;8031:23;8063:31;8088:5;8063:31;:::i;:::-;8113:5;-1:-1:-1;8170:2:165;8155:18;;8142:32;8183:33;8142:32;8183:33;:::i;:::-;8235:7;-1:-1:-1;8294:2:165;8279:18;;8266:32;8307:30;8266:32;8307:30;:::i;:::-;8356:7;-1:-1:-1;8410:2:165;8395:18;;8382:32;;-1:-1:-1;8466:3:165;8451:19;;8438:33;8515:4;8502:18;;8490:31;;8480:59;;8535:1;8532;8525:12;8480:59;7779:896;;;;-1:-1:-1;7779:896:165;;;;8558:7;8612:3;8597:19;;8584:33;;-1:-1:-1;8664:3:165;8649:19;;;8636:33;;7779:896;-1:-1:-1;;7779:896:165:o;8680:309::-;8745:6;8753;8806:2;8794:9;8785:7;8781:23;8777:32;8774:52;;;8822:1;8819;8812:12;8774:52;8858:9;8845:23;8835:33;;8918:2;8907:9;8903:18;8890:32;8931:28;8953:5;8931:28;:::i;8994:383::-;9071:6;9079;9087;9140:2;9128:9;9119:7;9115:23;9111:32;9108:52;;;9156:1;9153;9146:12;9108:52;9192:9;9179:23;9169:33;;9252:2;9241:9;9237:18;9224:32;9265:31;9290:5;9265:31;:::i;:::-;8994:383;;9315:5;;-1:-1:-1;;;9367:2:165;9352:18;;;;9339:32;;8994:383::o;9634:667::-;9729:6;9737;9745;9753;9761;9814:3;9802:9;9793:7;9789:23;9785:33;9782:53;;;9831:1;9828;9821:12;9782:53;9867:9;9854:23;9844:33;;9927:2;9916:9;9912:18;9899:32;9940:31;9965:5;9940:31;:::i;:::-;9990:5;-1:-1:-1;10047:2:165;10032:18;;10019:32;10060:33;10019:32;10060:33;:::i;:::-;10112:7;-1:-1:-1;10166:2:165;10151:18;;10138:32;;-1:-1:-1;10222:3:165;10207:19;;10194:33;10236;10194;10236;:::i;10306:180::-;10365:6;10418:2;10406:9;10397:7;10393:23;10389:32;10386:52;;;10434:1;10431;10424:12;10386:52;-1:-1:-1;10457:23:165;;10306:180;-1:-1:-1;10306:180:165:o;10699:184::-;10769:6;10822:2;10810:9;10801:7;10797:23;10793:32;10790:52;;;10838:1;10835;10828:12;10790:52;-1:-1:-1;10861:16:165;;10699:184;-1:-1:-1;10699:184:165:o;10888:334::-;11090:2;11072:21;;;11129:2;11109:18;;;11102:30;-1:-1:-1;;;11163:2:165;11148:18;;11141:40;11213:2;11198:18;;10888:334::o;11227:127::-;11288:10;11283:3;11279:20;11276:1;11269:31;11319:4;11316:1;11309:15;11343:4;11340:1;11333:15;11359:128;11426:9;;;11447:11;;;11444:37;;;11461:18;;:::i;11492:125::-;11557:9;;;11578:10;;;11575:36;;;11591:18;;:::i;11946:127::-;12007:10;12002:3;11998:20;11995:1;11988:31;12038:4;12035:1;12028:15;12062:4;12059:1;12052:15;12078:168;12151:9;;;12182;;12199:15;;;12193:22;;12179:37;12169:71;;12220:18;;:::i;12383:200::-;-1:-1:-1;;;;;12519:10:165;;;12507;;;12503:27;;12542:12;;;12539:38;;;12557:18;;:::i;:::-;12539:38;12383:200;;;;:::o;13994:135::-;14033:3;14054:17;;;14051:43;;14074:18;;:::i;:::-;-1:-1:-1;14121:1:165;14110:13;;13994:135::o;14326:127::-;14387:10;14382:3;14378:20;14375:1;14368:31;14418:4;14415:1;14408:15;14442:4;14439:1;14432:15;14458:112;14490:1;14516;14506:35;;14521:18;;:::i;:::-;-1:-1:-1;14555:9:165;;14458:112::o;15513:197::-;-1:-1:-1;;;;;15635:10:165;;;15647;;;15631:27;;15670:11;;;15667:37;;;15684:18;;:::i;15715:245::-;15813:2;15783:17;;;15802;;;;15779:41;-1:-1:-1;;;;;15835:44:165;;-1:-1:-1;;;;;;15881:49:165;;15832:99;15829:125;;;15934:18;;:::i;16411:249::-;16511:2;16500:17;;;16481;;;;16477:41;-1:-1:-1;;;;;;16533:50:165;;-1:-1:-1;;;;;16585:45:165;;16530:101;16527:127;;;16634:18;;:::i;16665:200::-;16731:9;;;16704:4;16759:9;;16787:10;;16799:12;;;16783:29;16822:12;;;16814:21;;16780:56;16777:82;;;16839:18;;:::i;16870:136::-;16905:3;-1:-1:-1;;;16926:22:165;;16923:48;;16951:18;;:::i;:::-;-1:-1:-1;16991:1:165;16987:13;;16870:136::o;17011:216::-;17075:9;;;17103:11;;;17050:3;17133:9;;17161:10;;17157:19;;17186:10;;17178:19;;17154:44;17151:70;;;17201:18;;:::i;:::-;17151:70;;17011:216;;;;:::o;17232:245::-;17299:6;17352:2;17340:9;17331:7;17327:23;17323:32;17320:52;;;17368:1;17365;17358:12;17320:52;17400:9;17394:16;17419:28;17441:5;17419:28;:::i;18273:193::-;18312:1;18338;18328:35;;18343:18;;:::i;:::-;-1:-1:-1;;;18379:18:165;;-1:-1:-1;;18399:13:165;;18375:38;18372:64;;;18416:18;;:::i;:::-;-1:-1:-1;18450:10:165;;18273:193::o;18878:287::-;19007:3;19045:6;19039:13;19061:66;19120:6;19115:3;19108:4;19100:6;19096:17;19061:66;:::i;:::-;19143:16;;;;;18878:287;-1:-1:-1;;18878:287:165:o;19528:396::-;19677:2;19666:9;19659:21;19640:4;19709:6;19703:13;19752:6;19747:2;19736:9;19732:18;19725:34;19768:79;19840:6;19835:2;19824:9;19820:18;19815:2;19807:6;19803:15;19768:79;:::i;:::-;19908:2;19887:15;-1:-1:-1;;19883:29:165;19868:45;;;;19915:2;19864:54;;19528:396;-1:-1:-1;;19528:396:165:o",
    linkReferences: {},
    immutableReferences: {
      "12307": [
        {
          start: 998,
          length: 32,
        },
        {
          start: 5098,
          length: 32,
        },
      ],
      "13140": [
        {
          start: 12087,
          length: 32,
        },
      ],
      "13142": [
        {
          start: 12148,
          length: 32,
        },
      ],
      "4548": [
        {
          start: 8790,
          length: 32,
        },
      ],
      "4551": [
        {
          start: 7531,
          length: 32,
        },
        {
          start: 7700,
          length: 32,
        },
        {
          start: 9215,
          length: 32,
        },
      ],
      "4554": [
        {
          start: 2376,
          length: 32,
        },
        {
          start: 3118,
          length: 32,
        },
        {
          start: 4450,
          length: 32,
        },
        {
          start: 5760,
          length: 32,
        },
        {
          start: 6917,
          length: 32,
        },
        {
          start: 7975,
          length: 32,
        },
        {
          start: 9367,
          length: 32,
        },
        {
          start: 9660,
          length: 32,
        },
        {
          start: 12581,
          length: 32,
        },
        {
          start: 13176,
          length: 32,
        },
        {
          start: 16695,
          length: 32,
        },
        {
          start: 19132,
          length: 32,
        },
        {
          start: 20326,
          length: 32,
        },
      ],
      "4557": [
        {
          start: 3151,
          length: 32,
        },
        {
          start: 6950,
          length: 32,
        },
        {
          start: 9827,
          length: 32,
        },
        {
          start: 9966,
          length: 32,
        },
        {
          start: 12379,
          length: 32,
        },
        {
          start: 13926,
          length: 32,
        },
        {
          start: 15316,
          length: 32,
        },
        {
          start: 16509,
          length: 32,
        },
      ],
      "4560": [
        {
          start: 2246,
          length: 32,
        },
        {
          start: 3084,
          length: 32,
        },
        {
          start: 6884,
          length: 32,
        },
        {
          start: 9861,
          length: 32,
        },
        {
          start: 9933,
          length: 32,
        },
        {
          start: 12413,
          length: 32,
        },
        {
          start: 13960,
          length: 32,
        },
        {
          start: 15240,
          length: 32,
        },
        {
          start: 16543,
          length: 32,
        },
      ],
      "4563": [
        {
          start: 2878,
          length: 32,
        },
        {
          start: 2953,
          length: 32,
        },
        {
          start: 3229,
          length: 32,
        },
        {
          start: 15278,
          length: 32,
        },
        {
          start: 16092,
          length: 32,
        },
        {
          start: 16171,
          length: 32,
        },
        {
          start: 17192,
          length: 32,
        },
        {
          start: 18446,
          length: 32,
        },
        {
          start: 18723,
          length: 32,
        },
        {
          start: 18783,
          length: 32,
        },
      ],
      "4566": [
        {
          start: 2029,
          length: 32,
        },
        {
          start: 4180,
          length: 32,
        },
        {
          start: 5621,
          length: 32,
        },
        {
          start: 6301,
          length: 32,
        },
        {
          start: 6787,
          length: 32,
        },
        {
          start: 7786,
          length: 32,
        },
      ],
      "4577": [
        {
          start: 18174,
          length: 32,
        },
        {
          start: 19320,
          length: 32,
        },
        {
          start: 19912,
          length: 32,
        },
      ],
      "4580": [
        {
          start: 12703,
          length: 32,
        },
        {
          start: 14147,
          length: 32,
        },
        {
          start: 17581,
          length: 32,
        },
        {
          start: 19441,
          length: 32,
        },
        {
          start: 20025,
          length: 32,
        },
      ],
      "4583": [
        {
          start: 17625,
          length: 32,
        },
        {
          start: 18242,
          length: 32,
        },
        {
          start: 19364,
          length: 32,
        },
        {
          start: 19485,
          length: 32,
        },
        {
          start: 19956,
          length: 32,
        },
        {
          start: 20069,
          length: 32,
        },
      ],
      "4601": [
        {
          start: 1541,
          length: 32,
        },
        {
          start: 1813,
          length: 32,
        },
        {
          start: 3445,
          length: 32,
        },
        {
          start: 3547,
          length: 32,
        },
      ],
      "4604": [
        {
          start: 17842,
          length: 32,
        },
      ],
      "6": [
        {
          start: 407,
          length: 32,
        },
      ],
      "6047": [
        {
          start: 8319,
          length: 32,
        },
        {
          start: 8448,
          length: 32,
        },
        {
          start: 8512,
          length: 32,
        },
        {
          start: 8858,
          length: 32,
        },
        {
          start: 9017,
          length: 32,
        },
        {
          start: 9147,
          length: 32,
        },
        {
          start: 11502,
          length: 32,
        },
      ],
    },
  },
  methodIdentifiers: {
    "DOMAIN_SEPARATOR()": "3644e515",
    "PERMIT_TYPEHASH()": "30adf81f",
    "addLiquidity(uint256,uint256,uint256,address,bool)": "c326a903",
    "batchTransferFrom(address,address,uint256[],uint256[])": "17fad7fc",
    "checkpoint(uint256)": "ed64bab2",
    "closeLong(uint256,uint256,uint256,address,bool)": "fa3fcea7",
    "closeShort(uint256,uint256,uint256,address,bool)": "6f8c3a5b",
    "collectGovernanceFee(bool)": "2787d595",
    "deposit(uint256,bool)": "9a408321",
    "initialize(uint256,uint256,address,bool)": "2002b333",
    "openLong(uint256,uint256,uint256,address,bool)": "06dae82a",
    "openShort(uint256,uint256,uint256,address,bool)": "a179403b",
    "pause(bool)": "02329a29",
    "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)":
      "9032c726",
    "pricePerShare()": "99530b06",
    "redeemWithdrawalShares(uint256,uint256,address,bool)": "4536ee2f",
    "removeLiquidity(uint256,uint256,address,bool)": "c23632a7",
    "setApproval(uint256,address,uint256)": "9cd241af",
    "setApprovalBridge(uint256,address,uint256,address)": "4ed2d6ac",
    "setApprovalForAll(address,bool)": "a22cb465",
    "setGovernance(address)": "ab033ea9",
    "setPauser(address,bool)": "7180c8ca",
    "sweep(address)": "01681a62",
    "transferFrom(uint256,address,address,uint256)": "1c0f12b6",
    "transferFromBridge(uint256,address,address,uint256,address)": "e44808bc",
    "withdraw(uint256,address,bool)": "00ebf5dd",
  },
  rawMetadata:
    '{"compiler":{"version":"0.8.19+commit.7dd6d404"},"language":"Solidity","output":{"abi":[{"inputs":[{"components":[{"internalType":"contract IERC20","name":"baseToken","type":"address"},{"internalType":"uint256","name":"initialSharePrice","type":"uint256"},{"internalType":"uint256","name":"minimumShareReserves","type":"uint256"},{"internalType":"uint256","name":"minimumTransactionAmount","type":"uint256"},{"internalType":"uint256","name":"positionDuration","type":"uint256"},{"internalType":"uint256","name":"checkpointDuration","type":"uint256"},{"internalType":"uint256","name":"timeStretch","type":"uint256"},{"internalType":"address","name":"governance","type":"address"},{"internalType":"address","name":"feeCollector","type":"address"},{"components":[{"internalType":"uint256","name":"curve","type":"uint256"},{"internalType":"uint256","name":"flat","type":"uint256"},{"internalType":"uint256","name":"governance","type":"uint256"}],"internalType":"struct IHyperdrive.Fees","name":"fees","type":"tuple"},{"internalType":"uint256","name":"oracleSize","type":"uint256"},{"internalType":"uint256","name":"updateGap","type":"uint256"}],"internalType":"struct IHyperdrive.PoolConfig","name":"_config","type":"tuple"},{"internalType":"address","name":"_dataProvider","type":"address"},{"internalType":"bytes32","name":"_linkerCodeHash","type":"bytes32"},{"internalType":"address","name":"_linkerFactory","type":"address"},{"internalType":"contract IERC4626","name":"_pool","type":"address"},{"internalType":"address[]","name":"_sweepTargets","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalFailed","type":"error"},{"inputs":[],"name":"BaseBufferExceedsShareReserves","type":"error"},{"inputs":[],"name":"BatchInputLengthMismatch","type":"error"},{"inputs":[],"name":"BelowMinimumContribution","type":"error"},{"inputs":[],"name":"ExpiredDeadline","type":"error"},{"inputs":[],"name":"FixedPointMath_InvalidExponent","type":"error"},{"inputs":[],"name":"FixedPointMath_InvalidInput","type":"error"},{"inputs":[],"name":"InvalidApr","type":"error"},{"inputs":[],"name":"InvalidBaseToken","type":"error"},{"inputs":[],"name":"InvalidCheckpointDuration","type":"error"},{"inputs":[],"name":"InvalidCheckpointTime","type":"error"},{"inputs":[],"name":"InvalidERC20Bridge","type":"error"},{"inputs":[],"name":"InvalidFeeAmounts","type":"error"},{"inputs":[],"name":"InvalidInitialSharePrice","type":"error"},{"inputs":[],"name":"InvalidMinimumShareReserves","type":"error"},{"inputs":[],"name":"InvalidPositionDuration","type":"error"},{"inputs":[],"name":"InvalidShareReserves","type":"error"},{"inputs":[],"name":"InvalidSignature","type":"error"},{"inputs":[],"name":"InvalidTimestamp","type":"error"},{"inputs":[],"name":"InvalidTradeSize","type":"error"},{"inputs":[],"name":"MinimumSharePrice","type":"error"},{"inputs":[],"name":"MinimumTransactionAmount","type":"error"},{"inputs":[],"name":"NegativeInterest","type":"error"},{"inputs":[],"name":"NegativePresentValue","type":"error"},{"inputs":[],"name":"NotPayable","type":"error"},{"inputs":[],"name":"OutputLimit","type":"error"},{"inputs":[],"name":"Paused","type":"error"},{"inputs":[],"name":"PoolAlreadyInitialized","type":"error"},{"inputs":[],"name":"RestrictedZeroAddress","type":"error"},{"inputs":[],"name":"Unauthorized","type":"error"},{"inputs":[],"name":"UnexpectedSuccess","type":"error"},{"inputs":[],"name":"UnsafeCastToInt128","type":"error"},{"inputs":[],"name":"UnsafeCastToUint128","type":"error"},{"inputs":[],"name":"UnsupportedToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"}],"name":"AddLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"CloseLong","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"CloseShort","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newGovernance","type":"address"}],"name":"GovernanceUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"apr","type":"uint256"}],"name":"Initialize","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"OpenLong","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":true,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"maturityTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"OpenShort","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newPauser","type":"address"}],"name":"PauserUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"withdrawalShareAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"}],"name":"RedeemWithdrawalShares","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"baseAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"withdrawalShareAmount","type":"uint256"}],"name":"RemoveLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_contribution","type":"uint256"},{"internalType":"uint256","name":"_minApr","type":"uint256"},{"internalType":"uint256","name":"_maxApr","type":"uint256"},{"internalType":"address","name":"_destination","type":"address"},{"internalType":"bool","name":"_asUnderlying","type":"bool"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"lpShares","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"batchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_checkpointTime","type":"uint256"}],"name":"checkpoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maturityTime","type":"uint256"},{"internalType":"uint256","name":"_bondAmount","type":"uint256"},{"internalType":"uint256","name":"_minOutput","type":"uint256"},{"internalType":"address","name":"_destination","type":"address"},{"internalType":"bool","name":"_asUnderlying","type":"bool"}],"name":"closeLong","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maturityTime","type":"uint256"},{"internalType":"uint256","name":"_bondAmount","type":"uint256"},{"internalType":"uint256","name":"_minOutput","type":"uint256"},{"internalType":"address","name":"_destination","type":"address"},{"internalType":"bool","name":"_asUnderlying","type":"bool"}],"name":"closeShort","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"asUnderlying","type":"bool"}],"name":"collectGovernanceFee","outputs":[{"internalType":"uint256","name":"proceeds","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"asUnderlying","type":"bool"}],"name":"deposit","outputs":[{"internalType":"uint256","name":"sharesMinted","type":"uint256"},{"internalType":"uint256","name":"sharePrice","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_contribution","type":"uint256"},{"internalType":"uint256","name":"_apr","type":"uint256"},{"internalType":"address","name":"_destination","type":"address"},{"internalType":"bool","name":"_asUnderlying","type":"bool"}],"name":"initialize","outputs":[{"internalType":"uint256","name":"lpShares","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_baseAmount","type":"uint256"},{"internalType":"uint256","name":"_minOutput","type":"uint256"},{"internalType":"uint256","name":"_minSharePrice","type":"uint256"},{"internalType":"address","name":"_destination","type":"address"},{"internalType":"bool","name":"_asUnderlying","type":"bool"}],"name":"openLong","outputs":[{"internalType":"uint256","name":"maturityTime","type":"uint256"},{"internalType":"uint256","name":"bondProceeds","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bondAmount","type":"uint256"},{"internalType":"uint256","name":"_maxDeposit","type":"uint256"},{"internalType":"uint256","name":"_minSharePrice","type":"uint256"},{"internalType":"address","name":"_destination","type":"address"},{"internalType":"bool","name":"_asUnderlying","type":"bool"}],"name":"openShort","outputs":[{"internalType":"uint256","name":"maturityTime","type":"uint256"},{"internalType":"uint256","name":"traderDeposit","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bool","name":"status","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permitForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"pricePerShare","outputs":[{"internalType":"uint256","name":"sharePrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_minOutputPerShare","type":"uint256"},{"internalType":"address","name":"_destination","type":"address"},{"internalType":"bool","name":"_asUnderlying","type":"bool"}],"name":"redeemWithdrawalShares","outputs":[{"internalType":"uint256","name":"baseProceeds","type":"uint256"},{"internalType":"uint256","name":"sharesRedeemed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"},{"internalType":"uint256","name":"_minOutput","type":"uint256"},{"internalType":"address","name":"_destination","type":"address"},{"internalType":"bool","name":"_asUnderlying","type":"bool"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"baseProceeds","type":"uint256"},{"internalType":"uint256","name":"withdrawalShares","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setApproval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"caller","type":"address"}],"name":"setApprovalBridge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"}],"name":"setGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"who","type":"address"},{"internalType":"bool","name":"status","type":"bool"}],"name":"setPauser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_target","type":"address"}],"name":"sweep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenID","type":"uint256"},{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"caller","type":"address"}],"name":"transferFromBridge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"shares","type":"uint256"},{"internalType":"address","name":"destination","type":"address"},{"internalType":"bool","name":"asUnderlying","type":"bool"}],"name":"withdraw","outputs":[{"internalType":"uint256","name":"amountWithdrawn","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}],"devdoc":{"kind":"dev","methods":{"addLiquidity(uint256,uint256,uint256,address,bool)":{"params":{"_asUnderlying":"If true the user is charged in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.","_contribution":"The amount of base to supply.","_destination":"The address which will hold the LP shares","_maxApr":"The maximum APR at which the LP is willing to supply.","_minApr":"The minimum APR at which the LP is willing to supply."},"returns":{"lpShares":"The number of LP tokens created"}},"batchTransferFrom(address,address,uint256[],uint256[])":{"params":{"from":"the source account","ids":"The array of token ids of the asset to transfer","to":"the destination account","values":"The amount of each token to transfer"}},"checkpoint(uint256)":{"params":{"_checkpointTime":"The time of the checkpoint to create."}},"closeLong(uint256,uint256,uint256,address,bool)":{"params":{"_asUnderlying":"A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.","_bondAmount":"The amount of longs to close.","_destination":"The address which will receive the proceeds of this sale","_maturityTime":"The maturity time of the short.","_minOutput":"The minimum base the user should receive from this trade"},"returns":{"_0":"The amount of underlying the user receives."}},"closeShort(uint256,uint256,uint256,address,bool)":{"params":{"_asUnderlying":"A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.","_bondAmount":"The amount of shorts to close.","_destination":"The address that receives the short proceeds.","_maturityTime":"The maturity time of the short.","_minOutput":"The minimum output of this trade."},"returns":{"_0":"The amount of base tokens produced by closing this short"}},"collectGovernanceFee(bool)":{"params":{"asUnderlying":"Indicates if the fees should be paid in underlying or yielding token"},"returns":{"proceeds":"The amount of base collected."}},"initialize(uint256,uint256,address,bool)":{"params":{"_apr":"The target APR.","_asUnderlying":"If true the user is charged in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.","_contribution":"The amount of base to supply.","_destination":"The destination of the LP shares."},"returns":{"lpShares":"The initial number of LP shares created."}},"openLong(uint256,uint256,uint256,address,bool)":{"params":{"_asUnderlying":"A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.","_baseAmount":"The amount of base to use when trading.","_destination":"The address which will receive the bonds","_minOutput":"The minium number of bonds to receive.","_minSharePrice":"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued."},"returns":{"bondProceeds":"The amount of bonds the user received","maturityTime":"The maturity time of the bonds."}},"openShort(uint256,uint256,uint256,address,bool)":{"params":{"_asUnderlying":"A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.","_bondAmount":"The amount of bonds to short.","_destination":"The address which gets credited with share tokens","_maxDeposit":"The most the user expects to deposit for this trade","_minSharePrice":"The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued."},"returns":{"maturityTime":"The maturity time of the short.","traderDeposit":"The amount the user deposited for this trade."}},"pause(bool)":{"params":{"status":"True to pause all deposits and false to unpause them"}},"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)":{"details":"The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.","params":{"_approved":"a boolean of the approval status to set to","deadline":"the timestamp which the signature must be submitted by to be valid","owner":"the owner of the account which is having the new approval set","r":"The r component of the ECDSA signature","s":"The s component of the ECDSA signature","spender":"the address which will be allowed to spend owner\'s tokens","v":"Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28"}},"pricePerShare()":{"returns":{"sharePrice":"The current share price."}},"redeemWithdrawalShares(uint256,uint256,address,bool)":{"params":{"_asUnderlying":"If true the user is paid in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.","_destination":"The address which receive the withdraw proceeds","_minOutputPerShare":"The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.","_shares":"The withdrawal shares to redeem."},"returns":{"baseProceeds":"The amount of base the LP received.","sharesRedeemed":"The amount of withdrawal shares that were redeemed."}},"removeLiquidity(uint256,uint256,address,bool)":{"params":{"_asUnderlying":"If true the user is paid in underlying if false        the contract transfers in yield source directly.        Note - for some paths one choice may be disabled or blocked.","_destination":"The address which will receive the withdraw proceeds","_minOutput":"The minium amount of the base token to receive.Note - this        value is likely to be less than the amount LP shares are worth.        The remainder is in short and long withdraw shares which are hard        to game the value of.","_shares":"The LP shares to burn."},"returns":{"baseProceeds":"The base the LP removing liquidity receives. The         LP receives a proportional amount of the pool\'s idle capital","withdrawalShares":"The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares."}},"setApproval(uint256,address,uint256)":{"params":{"amount":"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]","operator":"The address who will be able to use the tokens","tokenID":"The asset to approve the use of"}},"setApprovalBridge(uint256,address,uint256,address)":{"params":{"amount":"The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]","caller":"The eth address which called the linking contract","operator":"The address who will be able to use the tokens","tokenID":"The asset to approve the use of"}},"setApprovalForAll(address,bool)":{"params":{"approved":"True to approve, false to remove approval","operator":"The eth address which can access the caller\'s assets"}},"setGovernance(address)":{"params":{"who":"The new governance address"}},"setPauser(address,bool)":{"params":{"status":"The new pauser status","who":"The address to change"}},"sweep(address)":{"details":"WARNING: The entire balance of any of the sweep targets can be      swept by governance. If these sweep targets provide access to the      base or pool token, then governance has the ability to rug the pool.WARNING: It is unlikely but possible that there is a selector      overlap with \'transferFrom\'. Any integrating contracts should be      checked for that, as it may result in an unexpected call from this      address.","params":{"_target":"The token to sweep."}},"transferFrom(uint256,address,address,uint256)":{"params":{"amount":"The amount of token to move","from":"The address who\'s balance will be reduced","to":"The address who\'s balance will be increased","tokenID":"The token identifier"}},"transferFromBridge(uint256,address,address,uint256,address)":{"params":{"amount":"The amount of token to move","caller":"The msg.sender from the bridge","from":"The address who\'s balance will be reduced","to":"The address who\'s balance will be increased","tokenID":"The token identifier"}}},"version":1},"userdoc":{"errors":{"ApprovalFailed()":[{"notice":"################## ### Hyperdrive ### ##################"}],"BatchInputLengthMismatch()":[{"notice":"###################### ### ERC20Forwarder ### ######################"}],"FixedPointMath_InvalidExponent()":[{"notice":"###################### ### FixedPointMath ### ######################"}],"InvalidTimestamp()":[{"notice":"############### ### AssetId ### ###############"}],"InvalidTradeSize()":[{"notice":"###################### ### YieldSpaceMath ### ######################"}],"Unauthorized()":[{"notice":"############### ### Factory ### ###############"}],"UnsafeCastToUint128()":[{"notice":"###################### ### SafeCast ### ######################"}]},"events":{"PauserUpdated(address)":{"notice":"Pause ///"}},"kind":"user","methods":{"addLiquidity(uint256,uint256,uint256,address,bool)":{"notice":"Allows LPs to supply liquidity for LP shares."},"batchTransferFrom(address,address,uint256[],uint256[])":{"notice":"Transfers several assets from one account to another"},"checkpoint(uint256)":{"notice":"Allows anyone to mint a new checkpoint."},"closeLong(uint256,uint256,uint256,address,bool)":{"notice":"Closes a long position with a specified maturity time."},"closeShort(uint256,uint256,uint256,address,bool)":{"notice":"Closes a short position with a specified maturity time."},"collectGovernanceFee(bool)":{"notice":"This function collects the governance fees accrued by the pool."},"initialize(uint256,uint256,address,bool)":{"notice":"Allows the first LP to initialize the market with a target APR."},"openLong(uint256,uint256,uint256,address,bool)":{"notice":"Opens a long position."},"openShort(uint256,uint256,uint256,address,bool)":{"notice":"Opens a short position."},"pause(bool)":{"notice":"Allows an authorized address to pause this contract"},"permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)":{"notice":"Allows a caller who is not the owner of an account to execute         the functionality of \'approve\' for all assets with the owners signature."},"pricePerShare()":{"notice":"Loads the share price from the yield source"},"redeemWithdrawalShares(uint256,uint256,address,bool)":{"notice":"Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool\'s proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw."},"removeLiquidity(uint256,uint256,address,bool)":{"notice":"Allows an LP to burn shares and withdraw from the pool."},"setApproval(uint256,address,uint256)":{"notice":"Allows a user to set an approval for an individual asset with specific amount."},"setApprovalBridge(uint256,address,uint256,address)":{"notice":"Allows the compatibility linking contract to forward calls to set asset approvals"},"setApprovalForAll(address,bool)":{"notice":"Allows a user to approve an operator to use all of their assets"},"setGovernance(address)":{"notice":"Allows governance to change governance"},"setPauser(address,bool)":{"notice":"Allows governance to set the ability of an address to pause deposits"},"sweep(address)":{"notice":"Some yield sources [eg Morpho] pay rewards directly to this         contract but we can\'t handle distributing them internally so we         sweep to the fee collector address to then redistribute to users."},"transferFrom(uint256,address,address,uint256)":{"notice":"Transfers an amount of assets from the source to the destination"},"transferFromBridge(uint256,address,address,uint256,address)":{"notice":"Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge"}},"version":1}},"settings":{"compilationTarget":{"test/mocks/Mock4626Hyperdrive.sol":"MockERC4626Hyperdrive"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@aave/=lib/aave-v3-core/contracts/",":aave-v3-core/=lib/aave-v3-core/",":create3-factory/=lib/yield-daddy/lib/create3-factory/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":solmate/=lib/solmate/src/",":yield-daddy/=lib/yield-daddy/","lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"]},"sources":{"contracts/src/DataProvider.sol":{"keccak256":"0xd23ffd6ff77b03ea16b61130fdfcda6d2bfa430576241003f89b35cd76f51e30","license":"Apache-2.0","urls":["bzz-raw://cc1ab2f99af4241f81feeeda6514fd30f11997adafddcdb48bebd2b383aae212","dweb:/ipfs/QmSPp2B1Pka73Ur1KQMybMs3u73VUrDhev5w6U9iGLTmw7"]},"contracts/src/Hyperdrive.sol":{"keccak256":"0xd2e2e47f45dab0447497a20b8ef54960190d3c01ce2f53dbfae6abe2d095f1f5","license":"Apache-2.0","urls":["bzz-raw://c8d8f034071cf69e922975cddb6123fe125862688ecbe2c3fc01c1f235a4a72e","dweb:/ipfs/QmQraAs5iFKtRYQTqFmpRLh6NSyYxbqrBMFgkGJL2E2ZCN"]},"contracts/src/HyperdriveBase.sol":{"keccak256":"0x978cac18e731453de1268355e70fae31f71718e4149ad1969a56133d1f04cf95","license":"Apache-2.0","urls":["bzz-raw://a3c37a688a10766ade884f36c111925d71318306e46c6e2d207c85ecc7adfb3e","dweb:/ipfs/QmZJu7M9zPNKd2XahfHAtCLX9483228MzMrgP2fVaS1jbn"]},"contracts/src/HyperdriveLP.sol":{"keccak256":"0xe2f37ecc51c9eba59c4b5c13549ed4cdc0415d8af1902442d52ed012e4b9c22a","license":"Apache-2.0","urls":["bzz-raw://53efc435c55fa29822d5ae3271cc42bf4ae096e4dfc9fb150a410f39cd43651e","dweb:/ipfs/QmQgRowy4YqCsxV9A9mFyxzGF7FigC4Huc66Cxy8YfeYAv"]},"contracts/src/HyperdriveLong.sol":{"keccak256":"0x004b7cadd3e9090ca6f5a59510696e3b844839e6305c9076cd3fd31d9b0a3188","license":"Apache-2.0","urls":["bzz-raw://da04266d0c817b69cde906770f047e9add9f8983a12553413c67b2c60ff15c2f","dweb:/ipfs/QmNmKcdUVGLmjxMvUq8kyETZrkfW43JDXfcPHJfP4GrF6V"]},"contracts/src/HyperdriveShort.sol":{"keccak256":"0x3bdfd1e33a2498c6183dfb1684b0db7e6775e9ae2e1097800aeccc869b9e2baa","license":"Apache-2.0","urls":["bzz-raw://e5c9337dfb069d806644ea7ceabe425222f1bc5766248648ba7a9a420715bee8","dweb:/ipfs/QmaL1ZHX4zyAXxMqNmJB4mZ5o54JUTWLnTrKGMBJmbnRDa"]},"contracts/src/HyperdriveStorage.sol":{"keccak256":"0xf02f44333981dfbf6c500bf979aab8cd7aee9731d103a6aafc247e09b90b76bc","license":"Apache-2.0","urls":["bzz-raw://6664cd66465073274f9c2c27fee39e1c64e8e21fff532e64cd3014800582b00a","dweb:/ipfs/QmSGH1ixAUMu81yYf3pMFHo4uJxw6XgfnkBupjUSoFcdNY"]},"contracts/src/HyperdriveTWAP.sol":{"keccak256":"0x76cba088948ab50bb4956377235b302b28ef7c9f6cc68bda73211d66df41e92b","license":"Apache-2.0","urls":["bzz-raw://74e1b28c8cd08aa9adf3b3f31f0379c095299cd2b9de3d3595d7d55b0e0697cc","dweb:/ipfs/QmTTnkPF3jUmdfynnJK6kUBTYSBZFWJs69A9e9tPQzqiac"]},"contracts/src/instances/ERC4626Hyperdrive.sol":{"keccak256":"0xee0cdfed80801cd31d14173548d63bf514ba1b5618504b607db4a9acf41c31f4","license":"Apache-2.0","urls":["bzz-raw://53234be5f647cef80eec3461170cc8271119d9d5019f65860e23fb5e4a5247d4","dweb:/ipfs/QmXJM27Nf5NNfTayerGiv5C59u7gw5bW1VZ6gXyugzdxmk"]},"contracts/src/interfaces/IERC20.sol":{"keccak256":"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c","license":"MIT","urls":["bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672","dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"]},"contracts/src/interfaces/IERC4626.sol":{"keccak256":"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf","license":"GPL-2.0-or-later","urls":["bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc","dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia"]},"contracts/src/interfaces/IHyperdrive.sol":{"keccak256":"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5","license":"Apache-2.0","urls":["bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e","dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"]},"contracts/src/interfaces/IHyperdriveRead.sol":{"keccak256":"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3","license":"Apache-2.0","urls":["bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993","dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"]},"contracts/src/interfaces/IHyperdriveWrite.sol":{"keccak256":"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8","license":"Apache-2.0","urls":["bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467","dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"]},"contracts/src/interfaces/IMultiToken.sol":{"keccak256":"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a","license":"Apache-2.0","urls":["bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0","dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"]},"contracts/src/interfaces/IMultiTokenMetadata.sol":{"keccak256":"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc","license":"Apache-2.0","urls":["bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87","dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"]},"contracts/src/interfaces/IMultiTokenRead.sol":{"keccak256":"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05","license":"Apache-2.0","urls":["bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939","dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"]},"contracts/src/interfaces/IMultiTokenWrite.sol":{"keccak256":"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8","license":"Apache-2.0","urls":["bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a","dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"]},"contracts/src/libraries/AssetId.sol":{"keccak256":"0x82515c6d8fc8dbc940b0e40de0bfa584ade8a5a0f24ef14e352deced1e89a384","license":"Apache-2.0","urls":["bzz-raw://fa01b52b6e05d6c304ee938ab7181cacd6cfede09c5f6eca8f6d86b31e0fe806","dweb:/ipfs/QmNVyKLPJnP71ADgTwvS9D2ME2xsPVwjD32yCnNdmvLmpT"]},"contracts/src/libraries/FixedPointMath.sol":{"keccak256":"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd","license":"Apache-2.0","urls":["bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b","dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"]},"contracts/src/libraries/HyperdriveMath.sol":{"keccak256":"0x81bccd15f87d6fb2df7fe455ab94b2f267b0cef1875890d89158f448bb7694b2","license":"Apache-2.0","urls":["bzz-raw://e973fb36a335fa1b7993152f9b051bd52588b1624c3d76f9dd21d35fe45d5c75","dweb:/ipfs/QmbYLW9GPe19dQVCYNdSwvcgqrUZtDRjPyYtF4QtMn49Zb"]},"contracts/src/libraries/SafeCast.sol":{"keccak256":"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f","license":"Apache-2.0","urls":["bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5","dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"]},"contracts/src/libraries/YieldSpaceMath.sol":{"keccak256":"0xb8682a4823e01535b6bc73755f6304d0846c44526d882cefc0c3b04b807e2a04","license":"Apache-2.0","urls":["bzz-raw://836744182376d0cd9721e15334c3f972d77564586220b8db7b63737342b410ef","dweb:/ipfs/QmVxEHgnVkDTNggxbC83wMzvDmsQaUq1vTbFosShjzgAmr"]},"contracts/src/token/MultiToken.sol":{"keccak256":"0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19","license":"Apache-2.0","urls":["bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98","dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy"]},"contracts/src/token/MultiTokenStorage.sol":{"keccak256":"0x97a22d11197f185d6f17ff5ada60665b27af265c23b208f20004e22b26d7b7e8","license":"Apache-2.0","urls":["bzz-raw://62f950f46f3de598776e8e8201a0d35ec51473cc0ea754be5c9e686078ebb3d6","dweb:/ipfs/QmaKpZETx9zCV46XwcqvXUr7f8t2CPo1Tim2umTDwsk2bj"]},"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol":{"keccak256":"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0","license":"MIT","urls":["bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1","dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"]},"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol":{"keccak256":"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb","license":"MIT","urls":["bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0","dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"]},"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol":{"keccak256":"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a","license":"MIT","urls":["bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577","dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"]},"lib/openzeppelin-contracts/contracts/utils/Address.sol":{"keccak256":"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26","license":"MIT","urls":["bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f","dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"]},"lib/solmate/src/utils/ReentrancyGuard.sol":{"keccak256":"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01","license":"AGPL-3.0-only","urls":["bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800","dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"]},"test/mocks/Mock4626Hyperdrive.sol":{"keccak256":"0x7b00438f16f29b0f3a1b363319c90b226ef6e1f6295dc7769e98f08b9c5d2b62","license":"Apache-2.0","urls":["bzz-raw://125fe492f40b97ccf1ad05885016188f234f506372efe0866c3fa3c9792d3134","dweb:/ipfs/QmQ7UfnWCEXmpRKtXpwdS7CQBDZcTgznuerHUPZW8LKbv5"]}},"version":1}',
  metadata: {
    compiler: {
      version: "0.8.19+commit.7dd6d404",
    },
    language: "Solidity",
    output: {
      abi: [
        {
          inputs: [
            {
              internalType: "struct IHyperdrive.PoolConfig",
              name: "_config",
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
            },
            {
              internalType: "address",
              name: "_dataProvider",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "_linkerCodeHash",
              type: "bytes32",
            },
            {
              internalType: "address",
              name: "_linkerFactory",
              type: "address",
            },
            {
              internalType: "contract IERC4626",
              name: "_pool",
              type: "address",
            },
            {
              internalType: "address[]",
              name: "_sweepTargets",
              type: "address[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          type: "error",
          name: "ApprovalFailed",
        },
        {
          inputs: [],
          type: "error",
          name: "BaseBufferExceedsShareReserves",
        },
        {
          inputs: [],
          type: "error",
          name: "BatchInputLengthMismatch",
        },
        {
          inputs: [],
          type: "error",
          name: "BelowMinimumContribution",
        },
        {
          inputs: [],
          type: "error",
          name: "ExpiredDeadline",
        },
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
          name: "InvalidApr",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidBaseToken",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidCheckpointDuration",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidCheckpointTime",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidERC20Bridge",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidFeeAmounts",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidInitialSharePrice",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidMinimumShareReserves",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidPositionDuration",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidShareReserves",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidSignature",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidTimestamp",
        },
        {
          inputs: [],
          type: "error",
          name: "InvalidTradeSize",
        },
        {
          inputs: [],
          type: "error",
          name: "MinimumSharePrice",
        },
        {
          inputs: [],
          type: "error",
          name: "MinimumTransactionAmount",
        },
        {
          inputs: [],
          type: "error",
          name: "NegativeInterest",
        },
        {
          inputs: [],
          type: "error",
          name: "NegativePresentValue",
        },
        {
          inputs: [],
          type: "error",
          name: "NotPayable",
        },
        {
          inputs: [],
          type: "error",
          name: "OutputLimit",
        },
        {
          inputs: [],
          type: "error",
          name: "Paused",
        },
        {
          inputs: [],
          type: "error",
          name: "PoolAlreadyInitialized",
        },
        {
          inputs: [],
          type: "error",
          name: "RestrictedZeroAddress",
        },
        {
          inputs: [],
          type: "error",
          name: "Unauthorized",
        },
        {
          inputs: [],
          type: "error",
          name: "UnexpectedSuccess",
        },
        {
          inputs: [],
          type: "error",
          name: "UnsafeCastToInt128",
        },
        {
          inputs: [],
          type: "error",
          name: "UnsafeCastToUint128",
        },
        {
          inputs: [],
          type: "error",
          name: "UnsupportedToken",
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
              name: "owner",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "Approval",
          anonymous: false,
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
              indexed: true,
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
              indexed: false,
            },
          ],
          type: "event",
          name: "ApprovalForAll",
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
              internalType: "address",
              name: "newGovernance",
              type: "address",
              indexed: true,
            },
          ],
          type: "event",
          name: "GovernanceUpdated",
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
              name: "newPauser",
              type: "address",
              indexed: true,
            },
          ],
          type: "event",
          name: "PauserUpdated",
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
              internalType: "address",
              name: "operator",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "from",
              type: "address",
              indexed: true,
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
              indexed: true,
            },
            {
              internalType: "uint256",
              name: "id",
              type: "uint256",
              indexed: false,
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
              indexed: false,
            },
          ],
          type: "event",
          name: "TransferSingle",
          anonymous: false,
        },
        {
          inputs: [],
          stateMutability: "nonpayable",
          type: "fallback",
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "PERMIT_TYPEHASH",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_contribution",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_minApr",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_maxApr",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_destination",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_asUnderlying",
              type: "bool",
            },
          ],
          stateMutability: "payable",
          type: "function",
          name: "addLiquidity",
          outputs: [
            {
              internalType: "uint256",
              name: "lpShares",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256[]",
              name: "ids",
              type: "uint256[]",
            },
            {
              internalType: "uint256[]",
              name: "values",
              type: "uint256[]",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "batchTransferFrom",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_checkpointTime",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "checkpoint",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_maturityTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_bondAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_minOutput",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_destination",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_asUnderlying",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "closeLong",
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
              internalType: "uint256",
              name: "_maturityTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_bondAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_minOutput",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_destination",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_asUnderlying",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "closeShort",
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
              internalType: "bool",
              name: "asUnderlying",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "collectGovernanceFee",
          outputs: [
            {
              internalType: "uint256",
              name: "proceeds",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "asUnderlying",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "deposit",
          outputs: [
            {
              internalType: "uint256",
              name: "sharesMinted",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "sharePrice",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_contribution",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_apr",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_destination",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_asUnderlying",
              type: "bool",
            },
          ],
          stateMutability: "payable",
          type: "function",
          name: "initialize",
          outputs: [
            {
              internalType: "uint256",
              name: "lpShares",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_baseAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_minOutput",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_minSharePrice",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_destination",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_asUnderlying",
              type: "bool",
            },
          ],
          stateMutability: "payable",
          type: "function",
          name: "openLong",
          outputs: [
            {
              internalType: "uint256",
              name: "maturityTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "bondProceeds",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_bondAmount",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_maxDeposit",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_minSharePrice",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_destination",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_asUnderlying",
              type: "bool",
            },
          ],
          stateMutability: "payable",
          type: "function",
          name: "openShort",
          outputs: [
            {
              internalType: "uint256",
              name: "maturityTime",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "traderDeposit",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "bool",
              name: "status",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "pause",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_approved",
              type: "bool",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "permitForAll",
        },
        {
          inputs: [],
          stateMutability: "view",
          type: "function",
          name: "pricePerShare",
          outputs: [
            {
              internalType: "uint256",
              name: "sharePrice",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_minOutputPerShare",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_destination",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_asUnderlying",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "redeemWithdrawalShares",
          outputs: [
            {
              internalType: "uint256",
              name: "baseProceeds",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "sharesRedeemed",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_shares",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "_minOutput",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_destination",
              type: "address",
            },
            {
              internalType: "bool",
              name: "_asUnderlying",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "removeLiquidity",
          outputs: [
            {
              internalType: "uint256",
              name: "baseProceeds",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "withdrawalShares",
              type: "uint256",
            },
          ],
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenID",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "setApproval",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenID",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "setApprovalBridge",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "operator",
              type: "address",
            },
            {
              internalType: "bool",
              name: "approved",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "setApprovalForAll",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "setGovernance",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "who",
              type: "address",
            },
            {
              internalType: "bool",
              name: "status",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "setPauser",
        },
        {
          inputs: [
            {
              internalType: "contract IERC20",
              name: "_target",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "sweep",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenID",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "transferFrom",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "tokenID",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "caller",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "transferFromBridge",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "shares",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "destination",
              type: "address",
            },
            {
              internalType: "bool",
              name: "asUnderlying",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
          name: "withdraw",
          outputs: [
            {
              internalType: "uint256",
              name: "amountWithdrawn",
              type: "uint256",
            },
          ],
        },
      ],
      devdoc: {
        kind: "dev",
        methods: {
          "addLiquidity(uint256,uint256,uint256,address,bool)": {
            params: {
              _asUnderlying:
                "If true the user is charged in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.",
              _contribution: "The amount of base to supply.",
              _destination: "The address which will hold the LP shares",
              _maxApr: "The maximum APR at which the LP is willing to supply.",
              _minApr: "The minimum APR at which the LP is willing to supply.",
            },
            returns: {
              lpShares: "The number of LP tokens created",
            },
          },
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            params: {
              from: "the source account",
              ids: "The array of token ids of the asset to transfer",
              to: "the destination account",
              values: "The amount of each token to transfer",
            },
          },
          "checkpoint(uint256)": {
            params: {
              _checkpointTime: "The time of the checkpoint to create.",
            },
          },
          "closeLong(uint256,uint256,uint256,address,bool)": {
            params: {
              _asUnderlying:
                "A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.",
              _bondAmount: "The amount of longs to close.",
              _destination:
                "The address which will receive the proceeds of this sale",
              _maturityTime: "The maturity time of the short.",
              _minOutput:
                "The minimum base the user should receive from this trade",
            },
            returns: {
              _0: "The amount of underlying the user receives.",
            },
          },
          "closeShort(uint256,uint256,uint256,address,bool)": {
            params: {
              _asUnderlying:
                "A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.",
              _bondAmount: "The amount of shorts to close.",
              _destination: "The address that receives the short proceeds.",
              _maturityTime: "The maturity time of the short.",
              _minOutput: "The minimum output of this trade.",
            },
            returns: {
              _0: "The amount of base tokens produced by closing this short",
            },
          },
          "collectGovernanceFee(bool)": {
            params: {
              asUnderlying:
                "Indicates if the fees should be paid in underlying or yielding token",
            },
            returns: {
              proceeds: "The amount of base collected.",
            },
          },
          "initialize(uint256,uint256,address,bool)": {
            params: {
              _apr: "The target APR.",
              _asUnderlying:
                "If true the user is charged in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.",
              _contribution: "The amount of base to supply.",
              _destination: "The destination of the LP shares.",
            },
            returns: {
              lpShares: "The initial number of LP shares created.",
            },
          },
          "openLong(uint256,uint256,uint256,address,bool)": {
            params: {
              _asUnderlying:
                "A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.",
              _baseAmount: "The amount of base to use when trading.",
              _destination: "The address which will receive the bonds",
              _minOutput: "The minium number of bonds to receive.",
              _minSharePrice:
                "The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.",
            },
            returns: {
              bondProceeds: "The amount of bonds the user received",
              maturityTime: "The maturity time of the bonds.",
            },
          },
          "openShort(uint256,uint256,uint256,address,bool)": {
            params: {
              _asUnderlying:
                "A flag indicating whether the sender will pay in        base or using another currency. Implementations choose which        currencies they accept.",
              _bondAmount: "The amount of bonds to short.",
              _destination: "The address which gets credited with share tokens",
              _maxDeposit:
                "The most the user expects to deposit for this trade",
              _minSharePrice:
                "The minium share price at which to open the long.        This allows traders to protect themselves from opening a long in        a checkpoint where negative interest has accrued.",
            },
            returns: {
              maturityTime: "The maturity time of the short.",
              traderDeposit: "The amount the user deposited for this trade.",
            },
          },
          "pause(bool)": {
            params: {
              status: "True to pause all deposits and false to unpause them",
            },
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            details:
              "The signature for this function follows EIP 712 standard and should be generated with the      eth_signTypedData JSON RPC call instead of the eth_sign JSON RPC call. If using out of date      parity signing libraries the v component may need to be adjusted. Also it is very rare but possible      for v to be other values, those values are not supported.",
            params: {
              _approved: "a boolean of the approval status to set to",
              deadline:
                "the timestamp which the signature must be submitted by to be valid",
              owner:
                "the owner of the account which is having the new approval set",
              r: "The r component of the ECDSA signature",
              s: "The s component of the ECDSA signature",
              spender:
                "the address which will be allowed to spend owner's tokens",
              v: "Extra ECDSA data which allows public key recovery from signature assumed to be 27 or 28",
            },
          },
          "pricePerShare()": {
            returns: {
              sharePrice: "The current share price.",
            },
          },
          "redeemWithdrawalShares(uint256,uint256,address,bool)": {
            params: {
              _asUnderlying:
                "If true the user is paid in underlying if false                      the contract transfers in yield source directly.                      Note - for some paths one choice may be disabled or blocked.",
              _destination: "The address which receive the withdraw proceeds",
              _minOutputPerShare:
                "The minimum amount of base the LP expects to        receive for each withdrawal share that is burned.",
              _shares: "The withdrawal shares to redeem.",
            },
            returns: {
              baseProceeds: "The amount of base the LP received.",
              sharesRedeemed:
                "The amount of withdrawal shares that were redeemed.",
            },
          },
          "removeLiquidity(uint256,uint256,address,bool)": {
            params: {
              _asUnderlying:
                "If true the user is paid in underlying if false        the contract transfers in yield source directly.        Note - for some paths one choice may be disabled or blocked.",
              _destination:
                "The address which will receive the withdraw proceeds",
              _minOutput:
                "The minium amount of the base token to receive.Note - this        value is likely to be less than the amount LP shares are worth.        The remainder is in short and long withdraw shares which are hard        to game the value of.",
              _shares: "The LP shares to burn.",
            },
            returns: {
              baseProceeds:
                "The base the LP removing liquidity receives. The         LP receives a proportional amount of the pool's idle capital",
              withdrawalShares:
                "The base that the LP receives buys out some of         their LP shares, but it may not be sufficient to fully buy the         LP out. In this case, the LP receives withdrawal shares equal         in value to the present value they are owed. As idle capital         becomes available, the pool will buy back these shares.",
            },
          },
          "setApproval(uint256,address,uint256)": {
            params: {
              amount:
                "The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]",
              operator: "The address who will be able to use the tokens",
              tokenID: "The asset to approve the use of",
            },
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            params: {
              amount:
                "The max tokens the approved person can use, setting to uint256.max               will cause the value to never decrement [saving gas on transfer]",
              caller: "The eth address which called the linking contract",
              operator: "The address who will be able to use the tokens",
              tokenID: "The asset to approve the use of",
            },
          },
          "setApprovalForAll(address,bool)": {
            params: {
              approved: "True to approve, false to remove approval",
              operator: "The eth address which can access the caller's assets",
            },
          },
          "setGovernance(address)": {
            params: {
              who: "The new governance address",
            },
          },
          "setPauser(address,bool)": {
            params: {
              status: "The new pauser status",
              who: "The address to change",
            },
          },
          "sweep(address)": {
            details:
              "WARNING: The entire balance of any of the sweep targets can be      swept by governance. If these sweep targets provide access to the      base or pool token, then governance has the ability to rug the pool.WARNING: It is unlikely but possible that there is a selector      overlap with 'transferFrom'. Any integrating contracts should be      checked for that, as it may result in an unexpected call from this      address.",
            params: {
              _target: "The token to sweep.",
            },
          },
          "transferFrom(uint256,address,address,uint256)": {
            params: {
              amount: "The amount of token to move",
              from: "The address who's balance will be reduced",
              to: "The address who's balance will be increased",
              tokenID: "The token identifier",
            },
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            params: {
              amount: "The amount of token to move",
              caller: "The msg.sender from the bridge",
              from: "The address who's balance will be reduced",
              to: "The address who's balance will be increased",
              tokenID: "The token identifier",
            },
          },
        },
        version: 1,
      },
      userdoc: {
        kind: "user",
        methods: {
          "addLiquidity(uint256,uint256,uint256,address,bool)": {
            notice: "Allows LPs to supply liquidity for LP shares.",
          },
          "batchTransferFrom(address,address,uint256[],uint256[])": {
            notice: "Transfers several assets from one account to another",
          },
          "checkpoint(uint256)": {
            notice: "Allows anyone to mint a new checkpoint.",
          },
          "closeLong(uint256,uint256,uint256,address,bool)": {
            notice: "Closes a long position with a specified maturity time.",
          },
          "closeShort(uint256,uint256,uint256,address,bool)": {
            notice: "Closes a short position with a specified maturity time.",
          },
          "collectGovernanceFee(bool)": {
            notice:
              "This function collects the governance fees accrued by the pool.",
          },
          "initialize(uint256,uint256,address,bool)": {
            notice:
              "Allows the first LP to initialize the market with a target APR.",
          },
          "openLong(uint256,uint256,uint256,address,bool)": {
            notice: "Opens a long position.",
          },
          "openShort(uint256,uint256,uint256,address,bool)": {
            notice: "Opens a short position.",
          },
          "pause(bool)": {
            notice: "Allows an authorized address to pause this contract",
          },
          "permitForAll(address,address,bool,uint256,uint8,bytes32,bytes32)": {
            notice:
              "Allows a caller who is not the owner of an account to execute         the functionality of 'approve' for all assets with the owners signature.",
          },
          "pricePerShare()": {
            notice: "Loads the share price from the yield source",
          },
          "redeemWithdrawalShares(uint256,uint256,address,bool)": {
            notice:
              "Redeems withdrawal shares by giving the LP a pro-rata amount of         the withdrawal pool's proceeds. This function redeems the         maximum amount of the specified withdrawal shares given the         amount of withdrawal shares ready to withdraw.",
          },
          "removeLiquidity(uint256,uint256,address,bool)": {
            notice: "Allows an LP to burn shares and withdraw from the pool.",
          },
          "setApproval(uint256,address,uint256)": {
            notice:
              "Allows a user to set an approval for an individual asset with specific amount.",
          },
          "setApprovalBridge(uint256,address,uint256,address)": {
            notice:
              "Allows the compatibility linking contract to forward calls to set asset approvals",
          },
          "setApprovalForAll(address,bool)": {
            notice:
              "Allows a user to approve an operator to use all of their assets",
          },
          "setGovernance(address)": {
            notice: "Allows governance to change governance",
          },
          "setPauser(address,bool)": {
            notice:
              "Allows governance to set the ability of an address to pause deposits",
          },
          "sweep(address)": {
            notice:
              "Some yield sources [eg Morpho] pay rewards directly to this         contract but we can't handle distributing them internally so we         sweep to the fee collector address to then redistribute to users.",
          },
          "transferFrom(uint256,address,address,uint256)": {
            notice:
              "Transfers an amount of assets from the source to the destination",
          },
          "transferFromBridge(uint256,address,address,uint256,address)": {
            notice:
              "Permission-ed transfer for the bridge to access, only callable by         the ERC20 linking bridge",
          },
        },
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
        "test/mocks/Mock4626Hyperdrive.sol": "MockERC4626Hyperdrive",
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
      "contracts/src/instances/ERC4626Hyperdrive.sol": {
        keccak256:
          "0xee0cdfed80801cd31d14173548d63bf514ba1b5618504b607db4a9acf41c31f4",
        urls: [
          "bzz-raw://53234be5f647cef80eec3461170cc8271119d9d5019f65860e23fb5e4a5247d4",
          "dweb:/ipfs/QmXJM27Nf5NNfTayerGiv5C59u7gw5bW1VZ6gXyugzdxmk",
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
      "contracts/src/interfaces/IERC4626.sol": {
        keccak256:
          "0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf",
        urls: [
          "bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc",
          "dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia",
        ],
        license: "GPL-2.0-or-later",
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
      "contracts/src/token/MultiToken.sol": {
        keccak256:
          "0x1c22e52ab701c2b7ce3c0b049540ecba5fc24cd8b8000464b5b15c99dfee6a19",
        urls: [
          "bzz-raw://089273a3f853bdb205d34b70750eeca2edda7aaf999726ed9df0621d1e92bb98",
          "dweb:/ipfs/QmPy3tUmJb7gtnL9ACiWhhekKXGo3z3cd4SMYiUQX4geHy",
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
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        keccak256:
          "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        urls: [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ",
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
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        keccak256:
          "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        urls: [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j",
        ],
        license: "AGPL-3.0-only",
      },
      "test/mocks/Mock4626Hyperdrive.sol": {
        keccak256:
          "0x7b00438f16f29b0f3a1b363319c90b226ef6e1f6295dc7769e98f08b9c5d2b62",
        urls: [
          "bzz-raw://125fe492f40b97ccf1ad05885016188f234f506372efe0866c3fa3c9792d3134",
          "dweb:/ipfs/QmQ7UfnWCEXmpRKtXpwdS7CQBDZcTgznuerHUPZW8LKbv5",
        ],
        license: "Apache-2.0",
      },
    },
    version: 1,
  },
  ast: {
    absolutePath: "test/mocks/Mock4626Hyperdrive.sol",
    id: 91644,
    exportedSymbols: {
      ERC4626Hyperdrive: [6382],
      IERC4626: [6686],
      IHyperdrive: [7103],
      MockERC4626Hyperdrive: [91643],
    },
    nodeType: "SourceUnit",
    src: "39:1369:131",
    nodes: [
      {
        id: 91564,
        nodeType: "PragmaDirective",
        src: "39:23:131",
        nodes: [],
        literals: ["solidity", "0.8", ".19"],
      },
      {
        id: 91568,
        nodeType: "ImportDirective",
        src: "64:105:131",
        nodes: [],
        absolutePath: "contracts/src/instances/ERC4626Hyperdrive.sol",
        file: "contracts/src/instances/ERC4626Hyperdrive.sol",
        nameLocation: "-1:-1:-1",
        scope: 91644,
        sourceUnit: 6383,
        symbolAliases: [
          {
            foreign: {
              id: 91565,
              name: "ERC4626Hyperdrive",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 6382,
              src: "73:17:131",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
          {
            foreign: {
              id: 91566,
              name: "IHyperdrive",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 7103,
              src: "92:11:131",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
          {
            foreign: {
              id: 91567,
              name: "IERC4626",
              nodeType: "Identifier",
              overloadedDeclarations: [],
              referencedDeclaration: 6686,
              src: "105:8:131",
              typeDescriptions: {},
            },
            nameLocation: "-1:-1:-1",
          },
        ],
        unitAlias: "",
      },
      {
        id: 91643,
        nodeType: "ContractDefinition",
        src: "294:1113:131",
        nodes: [
          {
            id: 91597,
            nodeType: "FunctionDefinition",
            src: "352:418:131",
            nodes: [],
            body: {
              id: 91596,
              nodeType: "Block",
              src: "768:2:131",
              nodes: [],
              statements: [],
            },
            implemented: true,
            kind: "constructor",
            modifiers: [
              {
                arguments: [
                  {
                    id: 91588,
                    name: "_config",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 91573,
                    src: "616:7:131",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_PoolConfig_$6924_memory_ptr",
                      typeString: "struct IHyperdrive.PoolConfig memory",
                    },
                  },
                  {
                    id: 91589,
                    name: "_dataProvider",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 91575,
                    src: "637:13:131",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  {
                    id: 91590,
                    name: "_linkerCodeHash",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 91577,
                    src: "664:15:131",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  {
                    id: 91591,
                    name: "_linkerFactory",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 91579,
                    src: "693:14:131",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  {
                    id: 91592,
                    name: "_pool",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 91582,
                    src: "721:5:131",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_IERC4626_$6686",
                      typeString: "contract IERC4626",
                    },
                  },
                  {
                    id: 91593,
                    name: "_sweepTargets",
                    nodeType: "Identifier",
                    overloadedDeclarations: [],
                    referencedDeclaration: 91585,
                    src: "740:13:131",
                    typeDescriptions: {
                      typeIdentifier: "t_array$_t_address_$dyn_memory_ptr",
                      typeString: "address[] memory",
                    },
                  },
                ],
                id: 91594,
                kind: "baseConstructorSpecifier",
                modifierName: {
                  id: 91587,
                  name: "ERC4626Hyperdrive",
                  nameLocations: ["585:17:131"],
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 6382,
                  src: "585:17:131",
                },
                nodeType: "ModifierInvocation",
                src: "585:178:131",
              },
            ],
            name: "",
            nameLocation: "-1:-1:-1",
            parameters: {
              id: 91586,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 91573,
                  mutability: "mutable",
                  name: "_config",
                  nameLocation: "403:7:131",
                  nodeType: "VariableDeclaration",
                  scope: 91597,
                  src: "373:37:131",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_struct$_PoolConfig_$6924_memory_ptr",
                    typeString: "struct IHyperdrive.PoolConfig",
                  },
                  typeName: {
                    id: 91572,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 91571,
                      name: "IHyperdrive.PoolConfig",
                      nameLocations: ["373:11:131", "385:10:131"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 6924,
                      src: "373:22:131",
                    },
                    referencedDeclaration: 6924,
                    src: "373:22:131",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_PoolConfig_$6924_storage_ptr",
                      typeString: "struct IHyperdrive.PoolConfig",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 91575,
                  mutability: "mutable",
                  name: "_dataProvider",
                  nameLocation: "428:13:131",
                  nodeType: "VariableDeclaration",
                  scope: 91597,
                  src: "420:21:131",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 91574,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "420:7:131",
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
                  id: 91577,
                  mutability: "mutable",
                  name: "_linkerCodeHash",
                  nameLocation: "459:15:131",
                  nodeType: "VariableDeclaration",
                  scope: 91597,
                  src: "451:23:131",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bytes32",
                    typeString: "bytes32",
                  },
                  typeName: {
                    id: 91576,
                    name: "bytes32",
                    nodeType: "ElementaryTypeName",
                    src: "451:7:131",
                    typeDescriptions: {
                      typeIdentifier: "t_bytes32",
                      typeString: "bytes32",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 91579,
                  mutability: "mutable",
                  name: "_linkerFactory",
                  nameLocation: "492:14:131",
                  nodeType: "VariableDeclaration",
                  scope: 91597,
                  src: "484:22:131",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 91578,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "484:7:131",
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
                  id: 91582,
                  mutability: "mutable",
                  name: "_pool",
                  nameLocation: "525:5:131",
                  nodeType: "VariableDeclaration",
                  scope: 91597,
                  src: "516:14:131",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_contract$_IERC4626_$6686",
                    typeString: "contract IERC4626",
                  },
                  typeName: {
                    id: 91581,
                    nodeType: "UserDefinedTypeName",
                    pathNode: {
                      id: 91580,
                      name: "IERC4626",
                      nameLocations: ["516:8:131"],
                      nodeType: "IdentifierPath",
                      referencedDeclaration: 6686,
                      src: "516:8:131",
                    },
                    referencedDeclaration: 6686,
                    src: "516:8:131",
                    typeDescriptions: {
                      typeIdentifier: "t_contract$_IERC4626_$6686",
                      typeString: "contract IERC4626",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 91585,
                  mutability: "mutable",
                  name: "_sweepTargets",
                  nameLocation: "557:13:131",
                  nodeType: "VariableDeclaration",
                  scope: 91597,
                  src: "540:30:131",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_array$_t_address_$dyn_memory_ptr",
                    typeString: "address[]",
                  },
                  typeName: {
                    baseType: {
                      id: 91583,
                      name: "address",
                      nodeType: "ElementaryTypeName",
                      src: "540:7:131",
                      stateMutability: "nonpayable",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    id: 91584,
                    nodeType: "ArrayTypeName",
                    src: "540:9:131",
                    typeDescriptions: {
                      typeIdentifier: "t_array$_t_address_$dyn_storage_ptr",
                      typeString: "address[]",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "363:213:131",
            },
            returnParameters: {
              id: 91595,
              nodeType: "ParameterList",
              parameters: [],
              src: "768:0:131",
            },
            scope: 91643,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            id: 91614,
            nodeType: "FunctionDefinition",
            src: "776:186:131",
            nodes: [],
            body: {
              id: 91613,
              nodeType: "Block",
              src: "908:54:131",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 91609,
                        name: "amount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 91599,
                        src: "934:6:131",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 91610,
                        name: "asUnderlying",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 91601,
                        src: "942:12:131",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
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
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      id: 91608,
                      name: "_deposit",
                      nodeType: "Identifier",
                      overloadedDeclarations: [6260],
                      referencedDeclaration: 6260,
                      src: "925:8:131",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$",
                        typeString:
                          "function (uint256,bool) returns (uint256,uint256)",
                      },
                    },
                    id: 91611,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "925:30:131",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$_t_uint256_$_t_uint256_$",
                      typeString: "tuple(uint256,uint256)",
                    },
                  },
                  functionReturnParameters: 91607,
                  id: 91612,
                  nodeType: "Return",
                  src: "918:37:131",
                },
              ],
            },
            functionSelector: "9a408321",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "deposit",
            nameLocation: "785:7:131",
            parameters: {
              id: 91602,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 91599,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "810:6:131",
                  nodeType: "VariableDeclaration",
                  scope: 91614,
                  src: "802:14:131",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 91598,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "802:7:131",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 91601,
                  mutability: "mutable",
                  name: "asUnderlying",
                  nameLocation: "831:12:131",
                  nodeType: "VariableDeclaration",
                  scope: 91614,
                  src: "826:17:131",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 91600,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "826:4:131",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "792:57:131",
            },
            returnParameters: {
              id: 91607,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 91604,
                  mutability: "mutable",
                  name: "sharesMinted",
                  nameLocation: "874:12:131",
                  nodeType: "VariableDeclaration",
                  scope: 91614,
                  src: "866:20:131",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 91603,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "866:7:131",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 91606,
                  mutability: "mutable",
                  name: "sharePrice",
                  nameLocation: "896:10:131",
                  nodeType: "VariableDeclaration",
                  scope: 91614,
                  src: "888:18:131",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 91605,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "888:7:131",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "865:42:131",
            },
            scope: 91643,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            id: 91632,
            nodeType: "FunctionDefinition",
            src: "968:213:131",
            nodes: [],
            body: {
              id: 91631,
              nodeType: "Block",
              src: "1113:68:131",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        id: 91626,
                        name: "shares",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 91616,
                        src: "1140:6:131",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 91627,
                        name: "destination",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 91618,
                        src: "1148:11:131",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 91628,
                        name: "asUnderlying",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 91620,
                        src: "1161:12:131",
                        typeDescriptions: {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
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
                        {
                          typeIdentifier: "t_bool",
                          typeString: "bool",
                        },
                      ],
                      id: 91625,
                      name: "_withdraw",
                      nodeType: "Identifier",
                      overloadedDeclarations: [6312],
                      referencedDeclaration: 6312,
                      src: "1130:9:131",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_nonpayable$_t_uint256_$_t_address_$_t_bool_$returns$_t_uint256_$",
                        typeString:
                          "function (uint256,address,bool) returns (uint256)",
                      },
                    },
                    id: 91629,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1130:44:131",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 91624,
                  id: 91630,
                  nodeType: "Return",
                  src: "1123:51:131",
                },
              ],
            },
            functionSelector: "00ebf5dd",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "withdraw",
            nameLocation: "977:8:131",
            parameters: {
              id: 91621,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 91616,
                  mutability: "mutable",
                  name: "shares",
                  nameLocation: "1003:6:131",
                  nodeType: "VariableDeclaration",
                  scope: 91632,
                  src: "995:14:131",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 91615,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "995:7:131",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 91618,
                  mutability: "mutable",
                  name: "destination",
                  nameLocation: "1027:11:131",
                  nodeType: "VariableDeclaration",
                  scope: 91632,
                  src: "1019:19:131",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 91617,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1019:7:131",
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
                  id: 91620,
                  mutability: "mutable",
                  name: "asUnderlying",
                  nameLocation: "1053:12:131",
                  nodeType: "VariableDeclaration",
                  scope: 91632,
                  src: "1048:17:131",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_bool",
                    typeString: "bool",
                  },
                  typeName: {
                    id: 91619,
                    name: "bool",
                    nodeType: "ElementaryTypeName",
                    src: "1048:4:131",
                    typeDescriptions: {
                      typeIdentifier: "t_bool",
                      typeString: "bool",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "985:86:131",
            },
            returnParameters: {
              id: 91624,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 91623,
                  mutability: "mutable",
                  name: "amountWithdrawn",
                  nameLocation: "1096:15:131",
                  nodeType: "VariableDeclaration",
                  scope: 91632,
                  src: "1088:23:131",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 91622,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1088:7:131",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1087:25:131",
            },
            scope: 91643,
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            id: 91642,
            nodeType: "FunctionDefinition",
            src: "1299:106:131",
            nodes: [],
            body: {
              id: 91641,
              nodeType: "Block",
              src: "1365:40:131",
              nodes: [],
              statements: [
                {
                  expression: {
                    arguments: [],
                    expression: {
                      argumentTypes: [],
                      id: 91638,
                      name: "_pricePerShare",
                      nodeType: "Identifier",
                      overloadedDeclarations: [6326],
                      referencedDeclaration: 6326,
                      src: "1382:14:131",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_internal_view$__$returns$_t_uint256_$",
                        typeString: "function () view returns (uint256)",
                      },
                    },
                    id: 91639,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1382:16:131",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 91637,
                  id: 91640,
                  nodeType: "Return",
                  src: "1375:23:131",
                },
              ],
            },
            documentation: {
              id: 91633,
              nodeType: "StructuredDocumentation",
              src: "1187:107:131",
              text: "@notice Loads the share price from the yield source\n @return sharePrice The current share price.",
            },
            functionSelector: "99530b06",
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "pricePerShare",
            nameLocation: "1308:13:131",
            parameters: {
              id: 91634,
              nodeType: "ParameterList",
              parameters: [],
              src: "1321:2:131",
            },
            returnParameters: {
              id: 91637,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 91636,
                  mutability: "mutable",
                  name: "sharePrice",
                  nameLocation: "1353:10:131",
                  nodeType: "VariableDeclaration",
                  scope: 91642,
                  src: "1345:18:131",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 91635,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1345:7:131",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1344:20:131",
            },
            scope: 91643,
            stateMutability: "view",
            virtual: false,
            visibility: "public",
          },
        ],
        abstract: false,
        baseContracts: [
          {
            baseName: {
              id: 91569,
              name: "ERC4626Hyperdrive",
              nameLocations: ["328:17:131"],
              nodeType: "IdentifierPath",
              referencedDeclaration: 6382,
              src: "328:17:131",
            },
            id: 91570,
            nodeType: "InheritanceSpecifier",
            src: "328:17:131",
          },
        ],
        canonicalName: "MockERC4626Hyperdrive",
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        linearizedBaseContracts: [
          91643, 6382, 478, 4522, 3682, 2866, 5037, 1320, 4904, 12918, 7657,
          13196, 63474, 72,
        ],
        name: "MockERC4626Hyperdrive",
        nameLocation: "303:21:131",
        scope: 91644,
        usedErrors: [
          6974, 6976, 6978, 6982, 6984, 6986, 6988, 6990, 6994, 6996, 6998,
          7000, 7002, 7004, 7008, 7010, 7012, 7014, 7024, 7026, 7028, 7044,
          7047, 7060, 7062, 7064, 7066, 7068, 7085, 7088, 7090, 7097, 7100,
          7102,
        ],
      },
    ],
    license: "Apache-2.0",
  },
  id: 131,
} as const;
