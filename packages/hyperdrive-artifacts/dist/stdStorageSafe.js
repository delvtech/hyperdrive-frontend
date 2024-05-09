export const stdStorageSafe = {
    abi: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "who",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bytes4",
                    "name": "fsig",
                    "type": "bytes4"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "keysHash",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "slot",
                    "type": "uint256"
                }
            ],
            "name": "SlotFound",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "who",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "slot",
                    "type": "uint256"
                }
            ],
            "name": "WARNING_UninitedSlot",
            "type": "event"
        }
    ],
    bytecode: '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122023080842fa3f3601b404df30eb0453af67dec61f0fffa160dd3103517b5a7c8164736f6c63430008140033',
    methodIdentifiers: {}
};
