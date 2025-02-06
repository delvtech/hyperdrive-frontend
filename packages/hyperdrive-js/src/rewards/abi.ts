export const hyperdriveRewardsAbi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "initialOwner",
        type: "address",
        internalType: "address",
      },
      {
        name: "initialTimelock",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "initialRoot",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "initialIpfsHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "acceptRoot",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "batchClaim",
    inputs: [
      {
        name: "_accounts",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "_rewards",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "_claimable",
        type: "uint256[]",
        internalType: "uint256[]",
      },
      {
        name: "_proofs",
        type: "bytes32[][]",
        internalType: "bytes32[][]",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claim",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
      {
        name: "reward",
        type: "address",
        internalType: "address",
      },
      {
        name: "claimable",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "proof",
        type: "bytes32[]",
        internalType: "bytes32[]",
      },
    ],
    outputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claimed",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
      {
        name: "reward",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "ipfsHash",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isUpdater",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "pendingRoot",
    inputs: [],
    outputs: [
      {
        name: "root",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "ipfsHash",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "validAt",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "revokePendingRoot",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "root",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "setOwner",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRoot",
    inputs: [
      {
        name: "newRoot",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "newIpfsHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setRootUpdater",
    inputs: [
      {
        name: "updater",
        type: "address",
        internalType: "address",
      },
      {
        name: "active",
        type: "bool",
        internalType: "bool",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setTimelock",
    inputs: [
      {
        name: "newTimelock",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "submitRoot",
    inputs: [
      {
        name: "newRoot",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "newIpfsHash",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "timelock",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "error",
    name: "ArrayEndIndexLessThanStartIndex",
    inputs: [],
  },
  {
    type: "error",
    name: "ArrayIndexOutOfBounds",
    inputs: [],
  },
  {
    type: "error",
    name: "IncorrectLength",
    inputs: [],
  },
] as const;
export type HyperdriveRewardsAbi = typeof hyperdriveRewardsAbi;
