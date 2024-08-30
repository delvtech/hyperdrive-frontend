export const SafeERC20 = {
    abi: [
        {
            "type": "error",
            "name": "SafeERC20FailedDecreaseAllowance",
            "inputs": [
                {
                    "name": "spender",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "currentAllowance",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "requestedDecrease",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ]
        },
        {
            "type": "error",
            "name": "SafeERC20FailedOperation",
            "inputs": [
                {
                    "name": "token",
                    "type": "address",
                    "internalType": "address"
                }
            ]
        }
    ],
    bytecode: '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220c8b14e1bae8b1f1ba2f71e3ff823017c9d893362ad2a3a0c1b40331105cd364364736f6c63430008160033',
    methodIdentifiers: {}
};
