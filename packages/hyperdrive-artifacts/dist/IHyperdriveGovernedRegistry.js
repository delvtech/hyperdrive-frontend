export const IHyperdriveGovernedRegistry = {
    abi: [
        {
            "type": "function",
            "name": "setHyperdriveInfo",
            "inputs": [
                {
                    "name": "_hyperdriveInstance",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_data",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "updateGovernance",
            "inputs": [
                {
                    "name": "_governance",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "GovernanceUpdated",
            "inputs": [
                {
                    "name": "governance",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "HyperdriveInfoUpdated",
            "inputs": [
                {
                    "name": "hyperdrive",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "data",
                    "type": "uint256",
                    "indexed": false,
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
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "setHyperdriveInfo(address,uint256)": "be44e71a",
        "updateGovernance(address)": "b2561263"
    }
};
