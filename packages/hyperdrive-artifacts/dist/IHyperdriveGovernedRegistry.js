export const IHyperdriveGovernedRegistry = {
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
            "name": "getFactoriesInRange",
            "inputs": [
                {
                    "name": "_startIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_endIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getFactoryAtIndex",
            "inputs": [
                {
                    "name": "_index",
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
            "name": "getFactoryInfo",
            "inputs": [
                {
                    "name": "_factory",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct IHyperdriveRegistry.FactoryInfo",
                    "components": [
                        {
                            "name": "data",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getFactoryInfoWithMetadata",
            "inputs": [
                {
                    "name": "_factory",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct IHyperdriveRegistry.FactoryInfoWithMetadata",
                    "components": [
                        {
                            "name": "data",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "name",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "kind",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "version",
                            "type": "string",
                            "internalType": "string"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getFactoryInfos",
            "inputs": [
                {
                    "name": "__factories",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple[]",
                    "internalType": "struct IHyperdriveRegistry.FactoryInfo[]",
                    "components": [
                        {
                            "name": "data",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getFactoryInfosWithMetadata",
            "inputs": [
                {
                    "name": "__factories",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple[]",
                    "internalType": "struct IHyperdriveRegistry.FactoryInfoWithMetadata[]",
                    "components": [
                        {
                            "name": "data",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "name",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "kind",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "version",
                            "type": "string",
                            "internalType": "string"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getInstanceAtIndex",
            "inputs": [
                {
                    "name": "_index",
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
            "name": "getInstanceInfo",
            "inputs": [
                {
                    "name": "_instance",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct IHyperdriveRegistry.InstanceInfo",
                    "components": [
                        {
                            "name": "data",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "factory",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getInstanceInfoWithMetadata",
            "inputs": [
                {
                    "name": "_instance",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple",
                    "internalType": "struct IHyperdriveRegistry.InstanceInfoWithMetadata",
                    "components": [
                        {
                            "name": "data",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "factory",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "name",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "kind",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "version",
                            "type": "string",
                            "internalType": "string"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getInstanceInfos",
            "inputs": [
                {
                    "name": "__instances",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple[]",
                    "internalType": "struct IHyperdriveRegistry.InstanceInfo[]",
                    "components": [
                        {
                            "name": "data",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "factory",
                            "type": "address",
                            "internalType": "address"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getInstanceInfosWithMetadata",
            "inputs": [
                {
                    "name": "__instances",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "tuple[]",
                    "internalType": "struct IHyperdriveRegistry.InstanceInfoWithMetadata[]",
                    "components": [
                        {
                            "name": "data",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "factory",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "name",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "kind",
                            "type": "string",
                            "internalType": "string"
                        },
                        {
                            "name": "version",
                            "type": "string",
                            "internalType": "string"
                        }
                    ]
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getInstancesInRange",
            "inputs": [
                {
                    "name": "_startIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_endIndex",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getNumberOfFactories",
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
            "name": "getNumberOfInstances",
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
            "name": "initialize",
            "inputs": [
                {
                    "name": "_name",
                    "type": "string",
                    "internalType": "string"
                },
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
            "name": "isInitialized",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
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
            "name": "setFactoryInfo",
            "inputs": [
                {
                    "name": "__factories",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "_data",
                    "type": "uint128[]",
                    "internalType": "uint128[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setInstanceInfo",
            "inputs": [
                {
                    "name": "__instances",
                    "type": "address[]",
                    "internalType": "address[]"
                },
                {
                    "name": "_data",
                    "type": "uint128[]",
                    "internalType": "uint128[]"
                },
                {
                    "name": "__factories",
                    "type": "address[]",
                    "internalType": "address[]"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
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
            "name": "updateName",
            "inputs": [
                {
                    "name": "_name",
                    "type": "string",
                    "internalType": "string"
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
            "name": "FactoryInfoUpdated",
            "inputs": [
                {
                    "name": "factory",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "data",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Initialized",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "indexed": true,
                    "internalType": "string"
                },
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
            "name": "InstanceInfoUpdated",
            "inputs": [
                {
                    "name": "instance",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "data",
                    "type": "uint256",
                    "indexed": true,
                    "internalType": "uint256"
                },
                {
                    "name": "factory",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "NameUpdated",
            "inputs": [
                {
                    "name": "name",
                    "type": "string",
                    "indexed": true,
                    "internalType": "string"
                }
            ],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "EndIndexTooLarge",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InputLengthMismatch",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidFactory",
            "inputs": []
        },
        {
            "type": "error",
            "name": "InvalidIndexes",
            "inputs": []
        },
        {
            "type": "error",
            "name": "RegistryAlreadyInitialized",
            "inputs": []
        },
        {
            "type": "error",
            "name": "Unauthorized",
            "inputs": []
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "admin()": "f851a440",
        "getFactoriesInRange(uint256,uint256)": "716ba5f6",
        "getFactoryAtIndex(uint256)": "a587bbe1",
        "getFactoryInfo(address)": "9b724ad4",
        "getFactoryInfoWithMetadata(address)": "f32c9e34",
        "getFactoryInfos(address[])": "ea350321",
        "getFactoryInfosWithMetadata(address[])": "b73e3fab",
        "getInstanceAtIndex(uint256)": "daac24da",
        "getInstanceInfo(address)": "18bb3b54",
        "getInstanceInfoWithMetadata(address)": "2ad19de8",
        "getInstanceInfos(address[])": "4db6c0e0",
        "getInstanceInfosWithMetadata(address[])": "d2f72d52",
        "getInstancesInRange(uint256,uint256)": "bc30e7a1",
        "getNumberOfFactories()": "f59d00b9",
        "getNumberOfInstances()": "6e95d67c",
        "initialize(string,address)": "7ab4339d",
        "isInitialized()": "392e53cd",
        "kind()": "04baa00b",
        "name()": "06fdde03",
        "setFactoryInfo(address[],uint128[])": "e967e388",
        "setInstanceInfo(address[],uint128[],address[])": "1ff30ad2",
        "updateAdmin(address)": "e2f273bd",
        "updateName(string)": "84da92a7",
        "version()": "54fd4d50"
    }
};
