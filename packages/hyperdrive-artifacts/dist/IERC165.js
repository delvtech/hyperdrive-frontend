export const IERC165 = {
    abi: [
        {
            "type": "function",
            "name": "supportsInterface",
            "inputs": [
                {
                    "name": "interfaceID",
                    "type": "bytes4",
                    "internalType": "bytes4"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "supportsInterface(bytes4)": "01ffc9a7"
    }
};
