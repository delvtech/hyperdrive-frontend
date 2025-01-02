export const IL2Pool = {
    abi: [
        {
            "type": "function",
            "name": "borrow",
            "inputs": [
                {
                    "name": "args",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "liquidationCall",
            "inputs": [
                {
                    "name": "args1",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "args2",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "rebalanceStableBorrowRate",
            "inputs": [
                {
                    "name": "args",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "repay",
            "inputs": [
                {
                    "name": "args",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "repayWithATokens",
            "inputs": [
                {
                    "name": "args",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "repayWithPermit",
            "inputs": [
                {
                    "name": "args",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "r",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setUserUseReserveAsCollateral",
            "inputs": [
                {
                    "name": "args",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "supply",
            "inputs": [
                {
                    "name": "args",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "supplyWithPermit",
            "inputs": [
                {
                    "name": "args",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "r",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "s",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "swapBorrowRateMode",
            "inputs": [
                {
                    "name": "args",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "withdraw",
            "inputs": [
                {
                    "name": "args",
                    "type": "bytes32",
                    "internalType": "bytes32"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "nonpayable"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "borrow(bytes32)": "d5eed868",
        "liquidationCall(bytes32,bytes32)": "fd21ecff",
        "rebalanceStableBorrowRate(bytes32)": "427da177",
        "repay(bytes32)": "563dd613",
        "repayWithATokens(bytes32)": "dc7c0bff",
        "repayWithPermit(bytes32,bytes32,bytes32)": "94b576de",
        "setUserUseReserveAsCollateral(bytes32)": "4d013f03",
        "supply(bytes32)": "f7a73840",
        "supplyWithPermit(bytes32,bytes32,bytes32)": "680dd47c",
        "swapBorrowRateMode(bytes32)": "1fe3c6f3",
        "withdraw(bytes32)": "8e19899e"
    }
};
