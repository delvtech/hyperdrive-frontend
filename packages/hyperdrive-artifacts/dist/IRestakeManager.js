export const IRestakeManager = {
    abi: [
        {
            "inputs": [],
            "name": "calculateTVLs",
            "outputs": [
                {
                    "internalType": "uint256[][]",
                    "name": "",
                    "type": "uint256[][]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "",
                    "type": "uint256[]"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "depositETH",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "ezETH",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "renzoOracle",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "calculateTVLs()": "ff9969cd",
        "depositETH()": "f6326fb3",
        "ezETH()": "13a73c78",
        "renzoOracle()": "892866a4"
    }
};
