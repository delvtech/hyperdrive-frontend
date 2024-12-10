export const IGatewayRouter = {
    abi: [
        {
            "type": "function",
            "name": "getGateway",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
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
            "name": "outboundTransferCustomRefund",
            "inputs": [
                {
                    "name": "_l1Token",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_refundTo",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_to",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_maxGas",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_gasPriceBid",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_data",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "stateMutability": "payable"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "getGateway(address)": "bda009fe",
        "outboundTransferCustomRefund(address,address,address,uint256,uint256,uint256,bytes)": "4fb1a07b"
    }
};
