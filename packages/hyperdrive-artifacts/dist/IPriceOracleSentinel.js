export const IPriceOracleSentinel = {
    abi: [
        {
            "type": "function",
            "name": "ADDRESSES_PROVIDER",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "contract IPoolAddressesProvider"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getGracePeriod",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "getSequencerOracle",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isBorrowAllowed",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "isLiquidationAllowed",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "setGracePeriod",
            "inputs": [
                {
                    "name": "newGracePeriod",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "setSequencerOracle",
            "inputs": [
                {
                    "name": "newSequencerOracle",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "event",
            "name": "GracePeriodUpdated",
            "inputs": [
                {
                    "name": "newGracePeriod",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "SequencerOracleUpdated",
            "inputs": [
                {
                    "name": "newSequencerOracle",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                }
            ],
            "anonymous": false
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "ADDRESSES_PROVIDER()": "0542975c",
        "getGracePeriod()": "dbd18388",
        "getSequencerOracle()": "12168dc2",
        "isBorrowAllowed()": "49aa2e81",
        "isLiquidationAllowed()": "7a5d20ea",
        "setGracePeriod(uint256)": "f2f65960",
        "setSequencerOracle(address)": "f0aef31c"
    }
};
