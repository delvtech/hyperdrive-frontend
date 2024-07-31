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
    bytecode: '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122088db113af2f427a6ab5c637f987dd98c4bc0dc49b46f2544f729fc8e1bb8da4f64736f6c63430008140033',
    methodIdentifiers: {}
};
