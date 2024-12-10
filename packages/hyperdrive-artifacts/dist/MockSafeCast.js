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
    bytecode: '0x608060405234801561000f575f80fd5b506102c98061001d5f395ff3fe608060405234801561000f575f80fd5b5060043610610060575f3560e01c80630f2422d11461006457806341d2aa641461008f578063809fdd33146100ba578063dd2a0316146100e5578063dfbe873b146100f8578063fdcf791b14610119575b5f80fd5b61007761007236600461027c565b61012c565b604051600f9190910b81526020015b60405180910390f35b6100a261009d36600461027c565b61013c565b6040516001600160701b039091168152602001610086565b6100cd6100c836600461027c565b610146565b6040516001600160801b039091168152602001610086565b6100776100f336600461027c565b610150565b61010b61010636600461027c565b61015a565b604051908152602001610086565b61010b61012736600461027c565b610164565b5f6101368261016e565b92915050565b5f6101368261019b565b5f610136826101c4565b5f610136826101ed565b5f61013682610231565b5f6101368261025a565b5f60016001607f1b038211156101975760405163a5353be560e01b815260040160405180910390fd5b5090565b5f6001600160701b038211156101975760405163086b151760e11b815260040160405180910390fd5b5f6001600160801b0382111561019757604051630f0af95160e11b815260040160405180910390fd5b5f6f7fffffffffffffffffffffffffffffff19821280610213575060016001607f1b0382135b156101975760405163a5353be560e01b815260040160405180910390fd5b5f6001600160ff1b038211156101975760405163396ea70160e11b815260040160405180910390fd5b5f808212156101975760405163071d137160e51b815260040160405180910390fd5b5f6020828403121561028c575f80fd5b503591905056fea2646970667358221220ee597d4098da170f7e901684c207eab3859a0e6ecf567171473642fc1601f40f64736f6c63430008160033',
    methodIdentifiers: {
        "toInt128(int256)": "dd2a0316",
        "toInt128(uint256)": "0f2422d1",
        "toInt256(uint256)": "dfbe873b",
        "toUint112(uint256)": "41d2aa64",
        "toUint128(uint256)": "809fdd33",
        "toUint256(int256)": "fdcf791b"
    }
};
