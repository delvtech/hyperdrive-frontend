export const AaveFixedBorrowActionABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "shortId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "costOfShort",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "collateralDeposited",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "borrowToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrowAmount",
        type: "uint256",
      },
    ],
    name: "SupplyBorrowAndOpenShort",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "contract IHyperdrive",
        name: "_hyperdrive",
        type: "address",
      },
      {
        internalType: "contract IPool",
        name: "_pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "debtToken",
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
    inputs: [],
    name: "hyperdrive",
    outputs: [
      {
        internalType: "contract IHyperdrive",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "contract IPool",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
        internalType: "address",
        name: "_collateralToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_supplyAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_borrowAmount",
        type: "uint256",
      },
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
    ],
    name: "supplyBorrowAndOpenShort",
    outputs: [
      {
        internalType: "uint256",
        name: "baseDeposited",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "variableDebtToken",
    outputs: [
      {
        internalType: "contract ICreditDelegationToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
