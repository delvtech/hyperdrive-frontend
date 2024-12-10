export const IReserveInterestRateStrategy = {
    abi: [
        {
            "type": "function",
            "name": "calculateInterestRates",
            "inputs": [
                {
                    "name": "params",
                    "type": "tuple",
                    "internalType": "struct DataTypes.CalculateInterestRatesParams",
                    "components": [
                        {
                            "name": "unbacked",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "liquidityAdded",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "liquidityTaken",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "totalStableDebt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "totalVariableDebt",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "averageStableBorrowRate",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "reserveFactor",
                            "type": "uint256",
                            "internalType": "uint256"
                        },
                        {
                            "name": "reserve",
                            "type": "address",
                            "internalType": "address"
                        },
                        {
                            "name": "usingVirtualBalance",
                            "type": "bool",
                            "internalType": "bool"
                        },
                        {
                            "name": "virtualUnderlyingBalance",
                            "type": "uint256",
                            "internalType": "uint256"
                        }
                    ]
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256",
                    "internalType": "uint256"
                },
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
            "name": "setInterestRateParams",
            "inputs": [
                {
                    "name": "reserve",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "rateData",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "calculateInterestRates((uint256,uint256,uint256,uint256,uint256,uint256,uint256,address,bool,uint256))": "f6849b9e",
        "setInterestRateParams(address,bytes)": "a8d9e56f"
    }
};
