export const FaucetABI = [
  {
    inputs: [
      { internalType: "address", name: "_makerFaucet", type: "address" },
      { internalType: "address", name: "_psm", type: "address" },
      { internalType: "address", name: "_sDai", type: "address" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "dai",
    outputs: [
      { internalType: "contract TokenLike", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gem",
    outputs: [
      { internalType: "contract TokenLike", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "makerFaucet",
    outputs: [
      { internalType: "contract MakerFaucetLike", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "token", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "psm",
    outputs: [{ internalType: "contract PsmLike", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sDai",
    outputs: [
      { internalType: "contract TokenLike", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
