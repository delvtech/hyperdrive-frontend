export const IRenzoOracle = {
    abi: [
        {
            "type": "function",
            "name": "calculateMintAmount",
            "inputs": [
                {
                    "name": "_currentValueInProtocol",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_newValueAdded",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_existingEzETHSupply",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "calculateRedeemAmount",
            "inputs": [
                {
                    "name": "_ezETHBeingBurned",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_existingEzETHSupply",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "_currentValueInProtocol",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "lookupTokenAmountFromValue",
            "inputs": [
                {
                    "name": "_token",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "_value",
                    "type": "uint256",
                    "internalType": "uint256"
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
        },
        {
            "type": "function",
            "name": "lookupTokenValue",
            "inputs": [
                {
                    "name": "_token",
                    "type": "address",
                    "internalType": "contract IERC20"
                },
                {
                    "name": "_balance",
                    "type": "uint256",
                    "internalType": "uint256"
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
        },
        {
            "type": "function",
            "name": "lookupTokenValues",
            "inputs": [
                {
                    "name": "_tokens",
                    "type": "address[]",
                    "internalType": "contract IERC20[]"
                },
                {
                    "name": "_balances",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
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
        "calculateMintAmount(uint256,uint256,uint256)": "8f686e6a",
        "calculateRedeemAmount(uint256,uint256,uint256)": "c5c83cb0",
        "lookupTokenAmountFromValue(address,uint256)": "37933625",
        "lookupTokenValue(address,uint256)": "0052e3fd",
        "lookupTokenValues(address[],uint256[])": "ba28a571"
    }
};
