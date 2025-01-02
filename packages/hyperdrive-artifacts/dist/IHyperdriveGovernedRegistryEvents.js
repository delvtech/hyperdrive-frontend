export const IHyperdriveGovernedRegistryEvents = {
    abi: [
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
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {}
};
