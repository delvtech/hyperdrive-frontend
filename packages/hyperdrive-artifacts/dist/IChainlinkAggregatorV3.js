export const IChainlinkAggregatorV3 = {
    abi: [
        {
            "type": "function",
            "name": "aggregator",
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
            "name": "decimals",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint8",
                    "internalType": "uint8"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "description",
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
            "name": "getRoundData",
            "inputs": [
                {
                    "name": "_roundId",
                    "type": "uint80",
                    "internalType": "uint80"
                }
            ],
            "outputs": [
                {
                    "name": "roundId",
                    "type": "uint80",
                    "internalType": "uint80"
                },
                {
                    "name": "answer",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "startedAt",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "updatedAt",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "answeredInRound",
                    "type": "uint80",
                    "internalType": "uint80"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "latestRoundData",
            "inputs": [],
            "outputs": [
                {
                    "name": "roundId",
                    "type": "uint80",
                    "internalType": "uint80"
                },
                {
                    "name": "answer",
                    "type": "int256",
                    "internalType": "int256"
                },
                {
                    "name": "startedAt",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "updatedAt",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "answeredInRound",
                    "type": "uint80",
                    "internalType": "uint80"
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
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "aggregator()": "245a7bfc",
        "decimals()": "313ce567",
        "description()": "7284e416",
        "getRoundData(uint80)": "9a6fc8f5",
        "latestRoundData()": "feaf968c",
        "version()": "54fd4d50"
    }
};
