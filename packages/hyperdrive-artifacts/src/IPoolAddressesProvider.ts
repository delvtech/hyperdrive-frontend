export const IPoolAddressesProvider = {
  name: 'IPoolAddressesProvider' as const,
  abi: [
  {
    "type": "function",
    "name": "getACLAdmin",
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
    "name": "getACLManager",
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
    "name": "getAddress",
    "inputs": [
      {
        "name": "id",
        "type": "bytes32",
        "internalType": "bytes32"
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
    "name": "getMarketId",
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
    "name": "getPool",
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
    "name": "getPoolConfigurator",
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
    "name": "getPoolDataProvider",
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
    "name": "getPriceOracle",
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
    "name": "getPriceOracleSentinel",
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
    "name": "setACLAdmin",
    "inputs": [
      {
        "name": "newAclAdmin",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setACLManager",
    "inputs": [
      {
        "name": "newAclManager",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setAddress",
    "inputs": [
      {
        "name": "id",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "newAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setAddressAsProxy",
    "inputs": [
      {
        "name": "id",
        "type": "bytes32",
        "internalType": "bytes32"
      },
      {
        "name": "newImplementationAddress",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setMarketId",
    "inputs": [
      {
        "name": "newMarketId",
        "type": "string",
        "internalType": "string"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPoolConfiguratorImpl",
    "inputs": [
      {
        "name": "newPoolConfiguratorImpl",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPoolDataProvider",
    "inputs": [
      {
        "name": "newDataProvider",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPoolImpl",
    "inputs": [
      {
        "name": "newPoolImpl",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPriceOracle",
    "inputs": [
      {
        "name": "newPriceOracle",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPriceOracleSentinel",
    "inputs": [
      {
        "name": "newPriceOracleSentinel",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "ACLAdminUpdated",
    "inputs": [
      {
        "name": "oldAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ACLManagerUpdated",
    "inputs": [
      {
        "name": "oldAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "AddressSet",
    "inputs": [
      {
        "name": "id",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "oldAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "AddressSetAsProxy",
    "inputs": [
      {
        "name": "id",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "proxyAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "oldImplementationAddress",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      },
      {
        "name": "newImplementationAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "MarketIdSet",
    "inputs": [
      {
        "name": "oldMarketId",
        "type": "string",
        "indexed": true,
        "internalType": "string"
      },
      {
        "name": "newMarketId",
        "type": "string",
        "indexed": true,
        "internalType": "string"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PoolConfiguratorUpdated",
    "inputs": [
      {
        "name": "oldAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PoolDataProviderUpdated",
    "inputs": [
      {
        "name": "oldAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PoolUpdated",
    "inputs": [
      {
        "name": "oldAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PriceOracleSentinelUpdated",
    "inputs": [
      {
        "name": "oldAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "PriceOracleUpdated",
    "inputs": [
      {
        "name": "oldAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "newAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ProxyCreated",
    "inputs": [
      {
        "name": "id",
        "type": "bytes32",
        "indexed": true,
        "internalType": "bytes32"
      },
      {
        "name": "proxyAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "implementationAddress",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  }
] as const,
  bytecode: '0x' as `0x${string}`,
  methodIdentifiers: {
  "getACLAdmin()": "0e67178c",
  "getACLManager()": "707cd716",
  "getAddress(bytes32)": "21f8a721",
  "getMarketId()": "568ef470",
  "getPool()": "026b1d5f",
  "getPoolConfigurator()": "631adfca",
  "getPoolDataProvider()": "e860accb",
  "getPriceOracle()": "fca513a8",
  "getPriceOracleSentinel()": "5eb88d3d",
  "setACLAdmin(address)": "76d84ffc",
  "setACLManager(address)": "ed301ca9",
  "setAddress(bytes32,address)": "ca446dd9",
  "setAddressAsProxy(bytes32,address)": "5dcc528c",
  "setMarketId(string)": "f67b1847",
  "setPoolConfiguratorImpl(address)": "e4ca28b7",
  "setPoolDataProvider(address)": "e44e9ed1",
  "setPoolImpl(address)": "a1564406",
  "setPriceOracle(address)": "530e784f",
  "setPriceOracleSentinel(address)": "74944cec"
} as const
};
