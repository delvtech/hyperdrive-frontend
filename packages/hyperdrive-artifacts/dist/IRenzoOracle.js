export const IRenzoOracle = {
    abi: [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_currentValueInProtocol",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_newValueAdded",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_existingEzETHSupply",
                    "type": "uint256"
                }
            ],
            "name": "calculateMintAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_ezETHBeingBurned",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_existingEzETHSupply",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_currentValueInProtocol",
                    "type": "uint256"
                }
            ],
            "name": "calculateRedeemAmount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "lookupTokenAmountFromValue",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_balance",
                    "type": "uint256"
                }
            ],
            "name": "lookupTokenValue",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20[]",
                    "name": "_tokens",
                    "type": "address[]"
                },
                {
                    "internalType": "uint256[]",
                    "name": "_balances",
                    "type": "uint256[]"
                }
            ],
            "name": "lookupTokenValues",
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
        "calculateMintAmount(uint256,uint256,uint256)": "8f686e6a",
        "calculateRedeemAmount(uint256,uint256,uint256)": "c5c83cb0",
        "lookupTokenAmountFromValue(address,uint256)": "37933625",
        "lookupTokenValue(address,uint256)": "0052e3fd",
        "lookupTokenValues(address[],uint256[])": "ba28a571"
    }
};
