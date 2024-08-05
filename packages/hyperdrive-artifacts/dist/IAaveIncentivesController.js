export const IAaveIncentivesController = {
    abi: [
        {
            "type": "function",
            "name": "handleAction",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "totalSupply",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "userBalance",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "handleAction(address,uint256,uint256)": "31873e2e"
    }
};
