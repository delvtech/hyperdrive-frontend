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
    bytecode: '0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202f341ba6af1df480498d95bb3c7389791e685facd1dc0e2405d9ef3f27f0f9e764736f6c63430008140033',
    methodIdentifiers: {}
};
