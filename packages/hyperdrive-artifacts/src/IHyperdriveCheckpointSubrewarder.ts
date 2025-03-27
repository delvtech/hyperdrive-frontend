export const IHyperdriveCheckpointSubrewarder = {
  name: 'IHyperdriveCheckpointSubrewarder' as const,
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
    "name": "minterRewardAmount",
    "inputs": [],
    "outputs": [
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
    "name": "processReward",
    "inputs": [
      {
        "name": "_instance",
        "type": "address",
        "internalType": "address"
      },
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
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IERC20"
      },
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "registry",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IHyperdriveRegistry"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rewardToken",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "contract IERC20"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rewarder",
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
    "name": "source",
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
    "name": "traderRewardAmount",
    "inputs": [],
    "outputs": [
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
    "name": "updateMinterRewardAmount",
    "inputs": [
      {
        "name": "_minterRewardAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateRegistry",
    "inputs": [
      {
        "name": "_registry",
        "type": "address",
        "internalType": "contract IHyperdriveRegistry"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateRewardToken",
    "inputs": [
      {
        "name": "_rewardToken",
        "type": "address",
        "internalType": "contract IERC20"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateSource",
    "inputs": [
      {
        "name": "_source",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateTraderRewardAmount",
    "inputs": [
      {
        "name": "_traderRewardAmount",
        "type": "uint256",
        "internalType": "uint256"
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
    "name": "MinterRewardAmountUpdated",
    "inputs": [
      {
        "name": "minterRewardAmount",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RegistryUpdated",
    "inputs": [
      {
        "name": "registry",
        "type": "address",
        "indexed": true,
        "internalType": "contract IHyperdriveRegistry"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RewardTokenUpdated",
    "inputs": [
      {
        "name": "rewardToken",
        "type": "address",
        "indexed": true,
        "internalType": "contract IERC20"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SourceUpdated",
    "inputs": [
      {
        "name": "source",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TraderRewardAmountUpdated",
    "inputs": [
      {
        "name": "traderRewardAmount",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
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
  "kind()": "04baa00b",
  "minterRewardAmount()": "62498576",
  "name()": "06fdde03",
  "processReward(address,address,uint256,bool)": "e9f46041",
  "registry()": "7b103999",
  "rewardToken()": "f7c618c1",
  "rewarder()": "dcc3e06e",
  "source()": "67e828bf",
  "traderRewardAmount()": "5b338e07",
  "updateAdmin(address)": "e2f273bd",
  "updateMinterRewardAmount(uint256)": "2057b1c7",
  "updateRegistry(address)": "1a5da6c8",
  "updateRewardToken(address)": "f8cf31cb",
  "updateSource(address)": "f24bab65",
  "updateTraderRewardAmount(uint256)": "9183219f",
  "version()": "54fd4d50"
} as const
};
