export const stdStorageSafe = {
    abi: [
        {
            "type": "event",
            "name": "SlotFound",
            "inputs": [
                {
                    "name": "who",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "fsig",
                    "type": "bytes4",
                    "indexed": false,
                    "internalType": "bytes4"
                },
                {
                    "name": "keysHash",
                    "type": "bytes32",
                    "indexed": false,
                    "internalType": "bytes32"
                },
                {
                    "name": "slot",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "WARNING_UninitedSlot",
            "inputs": [
                {
                    "name": "who",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "slot",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        }
    ],
    bytecode: '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220b25553c95f3d51cea36b8453726805a033de3c2ed0470d81d06e9e418a1a45fe64736f6c63430008160033',
    methodIdentifiers: {}
};
