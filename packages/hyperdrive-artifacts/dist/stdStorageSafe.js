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
    bytecode: '0x60556032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f80fdfea26469706673582212204cc1ab2cd6a604f15f9c4ce9584da51f090df0b197c7c615c311f23a31d5919b64736f6c63430008160033',
    methodIdentifiers: {}
};
