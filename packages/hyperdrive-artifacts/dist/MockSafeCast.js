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
        }
    ],
    bytecode: '0x608060405234801561001057600080fd5b5061028e806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630f2422d11461005c57806341d2aa6414610087578063809fdd33146100b2578063dd2a0316146100dd578063dfbe873b146100f0575b600080fd5b61006f61006a36600461023f565b610111565b604051600f9190910b81526020015b60405180910390f35b61009a61009536600461023f565b610122565b6040516001600160701b03909116815260200161007e565b6100c56100c036600461023f565b61012d565b6040516001600160801b03909116815260200161007e565b61006f6100eb36600461023f565b610138565b6101036100fe36600461023f565b610143565b60405190815260200161007e565b600061011c8261014e565b92915050565b600061011c8261017c565b600061011c826101a6565b600061011c826101d0565b600061011c82610215565b600060016001607f1b038211156101785760405163a5353be560e01b815260040160405180910390fd5b5090565b60006001600160701b038211156101785760405163086b151760e11b815260040160405180910390fd5b60006001600160801b0382111561017857604051630f0af95160e11b815260040160405180910390fd5b60006f7fffffffffffffffffffffffffffffff198212806101f7575060016001607f1b0382135b156101785760405163a5353be560e01b815260040160405180910390fd5b60006001600160ff1b038211156101785760405163396ea70160e11b815260040160405180910390fd5b60006020828403121561025157600080fd5b503591905056fea26469706673582212204d4cb207c17a505cf7352ccc2269c0da9f608382733cfdd5c25caff1359c982064736f6c63430008140033',
    methodIdentifiers: {
        "toInt128(int256)": "dd2a0316",
        "toInt128(uint256)": "0f2422d1",
        "toInt256(uint256)": "dfbe873b",
        "toUint112(uint256)": "41d2aa64",
        "toUint128(uint256)": "809fdd33"
    }
};
