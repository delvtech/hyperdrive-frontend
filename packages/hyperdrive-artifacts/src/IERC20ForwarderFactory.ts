export const IERC20ForwarderFactory = {
  name: 'IERC20ForwarderFactory' as const,
  abi: [
  {
    "type": "function",
    "name": "ERC20LINK_HASH",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "bytes32",
        "internalType": "bytes32"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "create",
    "inputs": [
      {
        "name": "_token",
        "type": "address",
        "internalType": "contract IMultiToken"
      },
      {
        "name": "_tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IERC20Forwarder"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "getDeployDetails",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IMultiToken"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "getForwarder",
    "inputs": [
      {
        "name": "_token",
        "type": "address",
        "internalType": "contract IMultiToken"
      },
      {
        "name": "_tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "kind",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "version",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "error",
    "name": "InvalidForwarderAddress",
    "inputs": []
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "ERC20LINK_HASH()": "d13053bb",
  "create(address,uint256)": "0ecaea73",
  "getDeployDetails()": "600eb4ba",
  "getForwarder(address,uint256)": "0710fd58",
  "kind()": "04baa00b",
  "name()": "06fdde03",
  "version()": "54fd4d50"
} as const
};
