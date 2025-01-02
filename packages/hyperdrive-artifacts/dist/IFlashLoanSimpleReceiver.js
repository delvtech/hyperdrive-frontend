export const IFlashLoanSimpleReceiver = {
    abi: [
        {
            "type": "function",
            "name": "ADDRESSES_PROVIDER",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IPoolAddressesProvider"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "POOL",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IPool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "executeOperation",
            "inputs": [
                {
                    "name": "asset",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "premium",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "initiator",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "params",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "nonpayable"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "ADDRESSES_PROVIDER()": "0542975c",
        "POOL()": "7535d246",
        "executeOperation(address,uint256,uint256,address,bytes)": "1b11d0ff"
    }
};
