export const IHyperdriveCheckpointRewarder = {
  name: 'IHyperdriveCheckpointRewarder' as const,
  abi: [
  {
    "type": "function",
    "name": "admin",
    "inputs": [],
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
    "name": "claimCheckpointReward",
    "inputs": [
      {
        "name": "_claimant",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "_checkpointTime",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "_isTrader",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
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
    "name": "subrewarder",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IHyperdriveCheckpointSubrewarder"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "updateAdmin",
    "inputs": [
      {
        "name": "_admin",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateSubrewarder",
    "inputs": [
      {
        "name": "_subrewarder",
        "type": "address",
        "internalType": "contract IHyperdriveCheckpointSubrewarder"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
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
    "type": "event",
    "name": "AdminUpdated",
    "inputs": [
      {
        "name": "admin",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CheckpointRewardClaimed",
    "inputs": [
      {
        "name": "instance",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "claimant",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "isTrader",
        "type": "bool",
        "indexed": true,
        "internalType": "bool"
      },
      {
        "name": "checkpointTime",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "rewardToken",
        "type": "address",
        "indexed": false,
        "internalType": "contract IERC20"
      },
      {
        "name": "rewardAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SubrewarderUpdated",
    "inputs": [
      {
        "name": "subrewarder",
        "type": "address",
        "indexed": true,
        "internalType": "contract IHyperdriveCheckpointSubrewarder"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "Unauthorized",
    "inputs": []
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "admin()": "f851a440",
  "claimCheckpointReward(address,uint256,bool)": "69114d4e",
  "kind()": "04baa00b",
  "name()": "06fdde03",
  "subrewarder()": "3d7f7b24",
  "updateAdmin(address)": "e2f273bd",
  "updateSubrewarder(address)": "9b06ae49",
  "version()": "54fd4d50"
} as const
};
