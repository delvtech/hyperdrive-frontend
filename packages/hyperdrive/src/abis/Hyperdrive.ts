export const HyperdriveABI = [
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
    name: "FixedPointMath_SubOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidApr",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCheckpointTime",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCheckpointsPerTerm",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidERC20Bridge",
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
    name: "NegativeInterest",
    type: "error",
  },
  {
    inputs: [],
    name: "OutputLimit",
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
    name: "ZeroAmount",
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
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
        internalType: "contract IERC20",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "checkpoints",
    outputs: [
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
        name: "longBaseVolume",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "shortBaseVolume",
        type: "uint128",
      },
    ],
    stateMutability: "view",
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
    inputs: [],
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
    inputs: [],
    name: "factory",
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
    inputs: [],
    name: "getPoolConfiguration",
    outputs: [
      {
        internalType: "uint256",
        name: "initialSharePrice_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "positionDuration_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "checkpointDuration_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timeStretch_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "flatFee_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "curveFee_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "governanceFee_",
        type: "uint256",
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
        internalType: "uint256",
        name: "shareReserves_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bondReserves_",
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
        name: "longsOutstanding_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "longAverageMaturityTime_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "longBaseVolume_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shortsOutstanding_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shortAverageMaturityTime_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shortBaseVolume_",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
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
    inputs: [],
    name: "governanceFeesAccrued",
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
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
    inputs: [],
    name: "linkerCodeHash",
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
        name: "",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
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
        name: "_proceeds",
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
        name: "",
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
        internalType: "uint128",
        name: "withdrawalSharesReadyToWithdraw",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "capital",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "interest",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
