export const EtchingVault = {
    abi: [
        {
            "type": "constructor",
            "inputs": [
                {
                    "name": "_baseToken_",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "_vaultSharePrice_",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "asset",
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
            "name": "convertToAssets",
            "inputs": [
                {
                    "name": "",
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
        }
    ],
    bytecode: '0x60c060405234801561001057600080fd5b5060405161019e38038061019e83398101604081905261002f91610045565b6001600160a01b0390911660805260a05261007f565b6000806040838503121561005857600080fd5b82516001600160a01b038116811461006f57600080fd5b6020939093015192949293505050565b60805160a05160fe6100a060003960006045015260006087015260fe6000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806307a2d13a14603757806338d52e0f14607a575b600080fd5b6067604236600460b0565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016071565b60006020828403121560c157600080fd5b503591905056fea2646970667358221220807f0ebd2e790b5c21d915cc03fee4d864a98c213878604790faa586832c8b4b64736f6c63430008140033',
    methodIdentifiers: {
        "asset()": "38d52e0f",
        "convertToAssets(uint256)": "07a2d13a"
    }
};
