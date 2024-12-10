export const IXRenzoDeposit = {
    abi: [
        {
            "type": "function",
            "name": "getMintRate",
            "inputs": [],
            "outputs": [
                {
                    "name": "lastPrice",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "lastPriceTimestamp",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "xezETH",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IERC20"
                }
            ],
            "stateMutability": "view"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "getMintRate()": "96f0bd61",
        "xezETH()": "152b2c4f"
    }
};
