export const IHyperdriveRegistry = {
    abi: [
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
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
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
        "kind()": "04baa00b",
        "name()": "06fdde03",
        "version()": "54fd4d50"
    }
};
