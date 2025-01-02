export const IPriceOracleGetter = {
    abi: [
        {
            "type": "function",
            "name": "BASE_CURRENCY",
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
            "name": "BASE_CURRENCY_UNIT",
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
            "name": "getAssetPrice",
            "inputs": [
                {
                    "name": "asset",
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
        "BASE_CURRENCY()": "e19f4700",
        "BASE_CURRENCY_UNIT()": "8c89b64f",
        "getAssetPrice(address)": "b3596f07"
    }
};
