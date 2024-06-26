export const IERC721TokenReceiver = {
    abi: [
        {
            "type": "function",
            "name": "onERC721Received",
            "inputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "stateMutability": "nonpayable"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "onERC721Received(address,address,uint256,bytes)": "150b7a02"
    }
};
