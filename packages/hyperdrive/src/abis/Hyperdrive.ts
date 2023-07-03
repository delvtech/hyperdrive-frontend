export const HyperdriveABI = [
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
        indexed: false,
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
        name: "trader",
        type: "address",
      },
      {
        indexed: false,
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
    inputs: [],
    name: "AlreadyClosed",
    type: "error",
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
    name: "BondMatured",
    type: "error",
  },
  {
    inputs: [],
    name: "BondNotMatured",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "underlyingError",
        type: "bytes4",
      },
    ],
    name: "CallFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "ExpiredDeadline",
    type: "error",
  },
  {
    inputs: [],
    name: "FixedPointMath_AddOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "FixedPointMath_InvalidExponent",
    type: "error",
  },
  {
    inputs: [],
    name: "FixedPointMath_NegativeInput",
    type: "error",
  },
  {
    inputs: [],
    name: "FixedPointMath_NegativeOrZeroInput",
    type: "error",
  },
  {
    inputs: [],
    name: "FixedPointMath_SubOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientPrice",
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
    name: "InvalidContribution",
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
    name: "InvalidMaturityTime",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPositionDuration",
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
    name: "InvalidToken",
    type: "error",
  },
  {
    inputs: [],
    name: "MintPercentTooHigh",
    type: "error",
  },
  {
    inputs: [],
    name: "NegativeInterest",
    type: "error",
  },
  {
    inputs: [],
    name: "NoAssetsToWithdraw",
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
    name: "QueryOutOfRange",
    type: "error",
  },
  {
    inputs: [],
    name: "RestrictedZeroAddress",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ReturnData",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "UnexpectedAssetId",
    type: "error",
  },
  {
    inputs: [],
    name: "UnexpectedSender",
    type: "error",
  },
  {
    inputs: [],
    name: "UnexpectedSuccess",
    type: "error",
  },
  {
    inputs: [],
    name: "UnsupportedToken",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroLpTotalSupply",
    type: "error",
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint256",
        name: "_checkpointId",
        type: "uint256",
      },
    ],
    name: "getCheckpoint",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "sharePrice",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "longSharePrice",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "shortBaseVolume",
            type: "uint128",
          },
        ],
        internalType: "struct IHyperdrive.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolConfig",
    outputs: [
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
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "shareReserves",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "bondReserves",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lpTotalSupply",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sharePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longsOutstanding",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longAverageMaturityTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortsOutstanding",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortAverageMaturityTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortBaseVolume",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawalSharesReadyToWithdraw",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "withdrawalSharesProceeds",
            type: "uint256",
          },
        ],
        internalType: "struct IHyperdrive.PoolInfo",
        name: "",
        type: "tuple",
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
    ],
    name: "isApprovedForAll",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "_baseAmount",
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
    name: "openLong",
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
        name: "_bondAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxDeposit",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
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
    ],
    name: "perTokenApprovals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
    name: "redeemWithdrawalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "proceeds",
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
        name: "",
        type: "uint256",
      },
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
    inputs: [],
    name: "withdrawPool",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "readyToWithdraw",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "proceeds",
            type: "uint128",
          },
        ],
        internalType: "struct IHyperdrive.WithdrawPool",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
