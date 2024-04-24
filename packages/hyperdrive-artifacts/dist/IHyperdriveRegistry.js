export const IHyperdriveRegistry = {
    abi: [
        {
            "type": "function",
            "name": "getHyperdriveInfo",
            "inputs": [
                {
                    "name": "_hyperdriveInstance",
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
        "getHyperdriveInfo(address)": "32ddcb88"
    }
};
