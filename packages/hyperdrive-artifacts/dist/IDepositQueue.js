export const IDepositQueue = {
    abi: [
        {
            "type": "function",
            "name": "depositETHFromProtocol",
            "inputs": [],
            "outputs": [],
            "stateMutability": "payable"
        },
        {
            "type": "function",
            "name": "totalEarned",
            "inputs": [
                {
                    "name": "tokenAddress",
                    "type": "address",
                    "internalType": "address"
                }
            ],
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
        "depositETHFromProtocol()": "d123ccd5",
        "totalEarned(address)": "649aca4a"
    }
};
