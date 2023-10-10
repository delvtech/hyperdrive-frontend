export const HyperdriveMathABI = [
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
    name: "InvalidTradeSize",
    type: "error",
  },
  {
    inputs: [],
    name: "NegativePresentValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_effectiveShareReserves",
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
        name: "_effectiveShareReserves",
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
        name: "_effectiveShareReserves",
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
        name: "_effectiveShareReserves",
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
        components: [
          {
            internalType: "uint256",
            name: "shareReserves",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "shareAdjustment",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "bondReserves",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longsOutstanding",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longExposure",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeStretch",
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
            name: "minimumShareReserves",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "curveFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "governanceFee",
            type: "uint256",
          },
        ],
        internalType: "struct HyperdriveMath.MaxTradeParams",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "int256",
        name: "_checkpointLongExposure",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_maxIterations",
        type: "uint256",
      },
    ],
    name: "calculateMaxLong",
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
            internalType: "int256",
            name: "shareAdjustment",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "bondReserves",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longsOutstanding",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longExposure",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timeStretch",
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
            name: "minimumShareReserves",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "curveFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "governanceFee",
            type: "uint256",
          },
        ],
        internalType: "struct HyperdriveMath.MaxTradeParams",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "int256",
        name: "_checkpointExposure",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "_maxIterations",
        type: "uint256",
      },
    ],
    name: "calculateMaxShort",
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
        name: "_shareProceeds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_shareReservesDelta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_shareCurveDelta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalGovernanceFee",
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
        internalType: "bool",
        name: "_isLong",
        type: "bool",
      },
    ],
    name: "calculateNegativeInterestOnClose",
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
      {
        internalType: "int256",
        name: "",
        type: "int256",
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
        name: "_effectiveShareReserves",
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
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_effectiveShareReserves",
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
            internalType: "int256",
            name: "shareAdjustment",
            type: "int256",
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
            name: "minimumShareReserves",
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
            name: "shortsOutstanding",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortAverageTimeRemaining",
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
      {
        internalType: "uint256",
        name: "_flatFee",
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
