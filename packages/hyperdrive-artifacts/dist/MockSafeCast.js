export const MockSafeCast = {
    abi: [
        {
            "type": "function",
            "name": "toInt128",
            "inputs": [
                {
                    "name": "x",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "y",
                    "type": "int128",
                    "internalType": "int128"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toInt128",
            "inputs": [
                {
                    "name": "x",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [
                {
                    "name": "y",
                    "type": "int128",
                    "internalType": "int128"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toInt256",
            "inputs": [
                {
                    "name": "x",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "y",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toUint112",
            "inputs": [
                {
                    "name": "x",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "y",
                    "type": "uint112",
                    "internalType": "uint112"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toUint128",
            "inputs": [
                {
                    "name": "x",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "y",
                    "type": "uint128",
                    "internalType": "uint128"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "function",
            "name": "toUint256",
            "inputs": [
                {
                    "name": "x",
                    "type": "int256",
                    "internalType": "int256"
                }
            ],
            "outputs": [
                {
                    "name": "y",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "pure"
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt128",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToInt256",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToUint112",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToUint128",
            "inputs": []
        },
        {
            "type": "error",
            "name": "UnsafeCastToUint256",
            "inputs": []
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b506102da806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630f2422d11461006757806341d2aa6414610092578063809fdd33146100bd578063dd2a0316146100e8578063dfbe873b146100fb578063fdcf791b1461011c575b600080fd5b61007a61007536600461028b565b61012f565b604051600f9190910b81526020015b60405180910390f35b6100a56100a036600461028b565b610140565b6040516001600160701b039091168152602001610089565b6100d06100cb36600461028b565b61014b565b6040516001600160801b039091168152602001610089565b61007a6100f636600461028b565b610156565b61010e61010936600461028b565b610161565b604051908152602001610089565b61010e61012a36600461028b565b61016c565b600061013a82610177565b92915050565b600061013a826101a5565b600061013a826101cf565b600061013a826101f9565b600061013a8261023e565b600061013a82610268565b600060016001607f1b038211156101a15760405163a5353be560e01b815260040160405180910390fd5b5090565b60006001600160701b038211156101a15760405163086b151760e11b815260040160405180910390fd5b60006001600160801b038211156101a157604051630f0af95160e11b815260040160405180910390fd5b60006f7fffffffffffffffffffffffffffffff19821280610220575060016001607f1b0382135b156101a15760405163a5353be560e01b815260040160405180910390fd5b60006001600160ff1b038211156101a15760405163396ea70160e11b815260040160405180910390fd5b6000808212156101a15760405163071d137160e51b815260040160405180910390fd5b60006020828403121561029d57600080fd5b503591905056fea26469706673582212205f7143fd91d74210a0ea1836ba077d2dedfca161707b8dfc4ea9aa006f8241b564736f6c63430008160033',
    methodIdentifiers: {
        "toInt128(int256)": "dd2a0316",
        "toInt128(uint256)": "0f2422d1",
        "toInt256(uint256)": "dfbe873b",
        "toUint112(uint256)": "41d2aa64",
        "toUint128(uint256)": "809fdd33",
        "toUint256(int256)": "fdcf791b"
    }
};
