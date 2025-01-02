export const IVariableDebtToken = {
    abi: [
        {
            "type": "function",
            "name": "UNDERLYING_ASSET_ADDRESS",
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
            "name": "burn",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "index",
                    "type": "uint256",
                    "internalType": "uint256"
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
            "name": "getPreviousIndex",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                }
            ],
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
            "name": "getScaledUserBalanceAndSupply",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
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
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "initialize",
            "inputs": [
                {
                    "name": "pool",
                    "type": "address",
                    "internalType": "contract IPool"
                },
                {
                    "name": "underlyingAsset",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "incentivesController",
                    "type": "address",
                    "internalType": "contract IAaveIncentivesController"
                },
                {
                    "name": "debtTokenDecimals",
                    "type": "uint8",
                    "internalType": "uint8"
                },
                {
                    "name": "debtTokenName",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "debtTokenSymbol",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "params",
                    "type": "bytes",
                    "internalType": "bytes"
                }
            ],
            "outputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "mint",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "onBehalfOf",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "amount",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "index",
                    "type": "uint256",
                    "internalType": "uint256"
                }
            ],
            "outputs": [
                {
                    "name": "",
                    "type": "bool",
                    "internalType": "bool"
                },
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
            "name": "scaledBalanceOf",
            "inputs": [
                {
                    "name": "user",
                    "type": "address",
                    "internalType": "address"
                }
            ],
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
            "name": "scaledTotalSupply",
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
            "type": "event",
            "name": "Burn",
            "inputs": [
                {
                    "name": "from",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "target",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "balanceIncrease",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "index",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Initialized",
            "inputs": [
                {
                    "name": "underlyingAsset",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "pool",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "incentivesController",
                    "type": "address",
                    "indexed": false,
                    "internalType": "address"
                },
                {
                    "name": "debtTokenDecimals",
                    "type": "uint8",
                    "indexed": false,
                    "internalType": "uint8"
                },
                {
                    "name": "debtTokenName",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "debtTokenSymbol",
                    "type": "string",
                    "indexed": false,
                    "internalType": "string"
                },
                {
                    "name": "params",
                    "type": "bytes",
                    "indexed": false,
                    "internalType": "bytes"
                }
            ],
            "anonymous": false
        },
        {
            "type": "event",
            "name": "Mint",
            "inputs": [
                {
                    "name": "caller",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "onBehalfOf",
                    "type": "address",
                    "indexed": true,
                    "internalType": "address"
                },
                {
                    "name": "value",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "balanceIncrease",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                },
                {
                    "name": "index",
                    "type": "uint256",
                    "indexed": false,
                    "internalType": "uint256"
                }
            ],
            "anonymous": false
        }
    ],
    bytecode: '0x',
    methodIdentifiers: {
        "UNDERLYING_ASSET_ADDRESS()": "b16a19de",
        "burn(address,uint256,uint256)": "f5298aca",
        "getPreviousIndex(address)": "e0753986",
        "getScaledUserBalanceAndSupply(address)": "0afbcdc9",
        "initialize(address,address,address,uint8,string,string,bytes)": "c222ec8a",
        "mint(address,address,uint256,uint256)": "b3f1c93d",
        "scaledBalanceOf(address)": "1da24f3e",
        "scaledTotalSupply()": "b1bf962d"
    }
};
