export const IDepositQueue = {
    abi: [
        {
            "inputs": [],
            "name": "depositETHFromProtocol",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenAddress",
                    "type": "address"
                }
            ],
            "name": "totalEarned",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "depositETHFromProtocol()": "d123ccd5",
        "totalEarned(address)": "649aca4a"
    }
};
