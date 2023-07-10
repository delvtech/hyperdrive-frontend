export const HyperdriveMathABI = [
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
    inputs: [
      {
        internalType: "uint256",
        name: "_shareReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bondReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initialSharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_positionDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeStretch",
        type: "uint256",
      },
    ],
    name: "calculateAPRFromReserves",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
        name: "_bondAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeRemaining",
        type: "uint256",
      },
    ],
    name: "calculateBaseVolume",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shareReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bondReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_normalizedTimeRemaining",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeStretch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_closeSharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_sharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initialSharePrice",
        type: "uint256",
      },
    ],
    name: "calculateCloseLong",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shareReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bondReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_normalizedTimeRemaining",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeStretch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_sharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initialSharePrice",
        type: "uint256",
      },
    ],
    name: "calculateCloseShort",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shareReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_sharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initialSharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_apr",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_positionDuration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeStretch",
        type: "uint256",
      },
    ],
    name: "calculateInitialBondReserves",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_positionsOutstanding",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_baseVolume",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_averageTimeRemaining",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_sharePrice",
        type: "uint256",
      },
    ],
    name: "calculateLpAllocationAdjustment",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shareReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bondReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_normalizedTimeRemaining",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeStretch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_sharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initialSharePrice",
        type: "uint256",
      },
    ],
    name: "calculateOpenLong",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shareReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bondReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_normalizedTimeRemaining",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeStretch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_sharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initialSharePrice",
        type: "uint256",
      },
    ],
    name: "calculateOpenShort",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
        name: "_shareReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lpTotalSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_longsOutstanding",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_sharePrice",
        type: "uint256",
      },
    ],
    name: "calculateOutForLpSharesIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
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
            name: "sharePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialSharePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeStretch",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longsOutstanding",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longAverageTimeRemaining",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longBaseVolume",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortsOutstanding",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortAverageTimeRemaining",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortBaseVolume",
            type: "uint256",
          },
        ],
        internalType: "struct HyperdriveMath.PresentValueParams",
        name: "_params",
        type: "tuple",
      },
    ],
    name: "calculatePresentValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
        name: "_openSharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_closeSharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_sharePrice",
        type: "uint256",
      },
    ],
    name: "calculateShortInterest",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
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
        name: "_shareAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_openSharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_closeSharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_sharePrice",
        type: "uint256",
      },
    ],
    name: "calculateShortProceeds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shareReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bondReserves",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_initialSharePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_normalizedTimeRemaining",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeStretch",
        type: "uint256",
      },
    ],
    name: "calculateSpotPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;
