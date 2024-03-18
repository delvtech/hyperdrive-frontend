export const ISharesManagerV1 = {
    "abi": [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Approval",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                }
            ],
            "name": "allowance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "approve",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_owner",
                    "type": "address"
                }
            ],
            "name": "balanceOfUnderlying",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "decimals",
            "outputs": [
                {
                    "internalType": "uint8",
                    "name": "",
                    "type": "uint8"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "name",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_underlyingAssetAmount",
                    "type": "uint256"
                }
            ],
            "name": "sharesFromUnderlyingBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "symbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "totalUnderlyingSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transfer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_value",
                    "type": "uint256"
                }
            ],
            "name": "transferFrom",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_shares",
                    "type": "uint256"
                }
            ],
            "name": "underlyingBalanceFromShares",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x",
        "sourceMap": "",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "allowance(address,address)": "dd62ed3e",
        "approve(address,uint256)": "095ea7b3",
        "balanceOf(address)": "70a08231",
        "balanceOfUnderlying(address)": "3af9e669",
        "decimals()": "313ce567",
        "name()": "06fdde03",
        "sharesFromUnderlyingBalance(uint256)": "799a1954",
        "symbol()": "95d89b41",
        "totalSupply()": "18160ddd",
        "totalUnderlyingSupply()": "143a08d4",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd",
        "underlyingBalanceFromShares(uint256)": "f79c3f02"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOfUnderlying\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_underlyingAssetAmount\",\"type\":\"uint256\"}],\"name\":\"sharesFromUnderlyingBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalUnderlyingSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"}],\"name\":\"underlyingBalanceFromShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Kiln\",\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"details\":\"An approved account can use transferFrom to transfer funds on behalf of the token owner\",\"params\":{\"_spender\":\"Address that is allowed to spend the tokens\",\"_value\":\"The allowed amount in shares, will override previous value\"},\"returns\":{\"_0\":\"True if success\"}},\"balanceOf(address)\":{\"params\":{\"_owner\":\"Address to be checked\"},\"returns\":{\"_0\":\"The balance of the account in shares\"}},\"balanceOfUnderlying(address)\":{\"params\":{\"_owner\":\"Address to be checked\"},\"returns\":{\"_0\":\"The underlying balance of the account\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"sharesFromUnderlyingBalance(uint256)\":{\"params\":{\"_underlyingAssetAmount\":\"Amount of underlying asset to convert\"},\"returns\":{\"_0\":\"The amount of shares worth the underlying asset amopunt\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The total supply in shares\"}},\"totalUnderlyingSupply()\":{\"returns\":{\"_0\":\"The total underlying asset supply\"}},\"transfer(address,uint256)\":{\"params\":{\"_to\":\"Address receiving the tokens\",\"_value\":\"Amount of shares to be sent\"},\"returns\":{\"_0\":\"True if success\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"_from\":\"Address sending the tokens\",\"_to\":\"Address receiving the tokens\",\"_value\":\"Amount of shares to be sent\"},\"returns\":{\"_0\":\"True if success\"}},\"underlyingBalanceFromShares(uint256)\":{\"params\":{\"_shares\":\"Amount of shares to convert\"},\"returns\":{\"_0\":\"The underlying asset balance represented by the shares\"}}},\"title\":\"Shares Manager Interface (v1)\",\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Approves an account for future spendings\"},\"balanceOf(address)\":{\"notice\":\"Retrieve the balance of an account\"},\"balanceOfUnderlying(address)\":{\"notice\":\"Retrieve the underlying asset balance of an account\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"sharesFromUnderlyingBalance(uint256)\":{\"notice\":\"Retrieve the shares count from an underlying asset amount\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalSupply()\":{\"notice\":\"Retrieve the total token supply\"},\"totalUnderlyingSupply()\":{\"notice\":\"Retrieve the total underlying asset supply\"},\"transfer(address,uint256)\":{\"notice\":\"Performs a transfer from the message sender to the provided account\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Performs a transfer between two recipients\"},\"underlyingBalanceFromShares(uint256)\":{\"notice\":\"Retrieve the underlying asset balance from an amount of shares\"}},\"notice\":\"This interface exposes methods to handle the shares of the depositor and the ERC20 interface\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/lseth/ISharesManagerV1.sol\":\"ISharesManagerV1\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/lseth/ISharesManagerV1.sol\":{\"keccak256\":\"0xfefc57da6aa97835543b9e28aa70912334634001bbade60b95b250d5a2e85581\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f0d4a2fbbc6d68a1549bd0350080f0f7cd871d7733e47f23148bf4893bcceaca\",\"dweb:/ipfs/QmfQdu9SZKmMziHa3HgHWkdj6Bw6izZrJT1pSBaWWgumwv\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Approval",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "from",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Transfer",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "allowance",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "approve",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "balanceOfUnderlying",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "decimals",
                    "outputs": [
                        {
                            "internalType": "uint8",
                            "name": "",
                            "type": "uint8"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "name",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_underlyingAssetAmount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "sharesFromUnderlyingBalance",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "symbol",
                    "outputs": [
                        {
                            "internalType": "string",
                            "name": "",
                            "type": "string"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "totalSupply",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "totalUnderlyingSupply",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transfer",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferFrom",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_shares",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "underlyingBalanceFromShares",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "allowance(address,address)": {
                        "params": {
                            "owner": "The owner of the tokens.",
                            "spender": "The spender of the tokens."
                        },
                        "returns": {
                            "_0": "The allowance of the spender for the owner."
                        }
                    },
                    "approve(address,uint256)": {
                        "details": "An approved account can use transferFrom to transfer funds on behalf of the token owner",
                        "params": {
                            "_spender": "Address that is allowed to spend the tokens",
                            "_value": "The allowed amount in shares, will override previous value"
                        },
                        "returns": {
                            "_0": "True if success"
                        }
                    },
                    "balanceOf(address)": {
                        "params": {
                            "_owner": "Address to be checked"
                        },
                        "returns": {
                            "_0": "The balance of the account in shares"
                        }
                    },
                    "balanceOfUnderlying(address)": {
                        "params": {
                            "_owner": "Address to be checked"
                        },
                        "returns": {
                            "_0": "The underlying balance of the account"
                        }
                    },
                    "decimals()": {
                        "returns": {
                            "_0": "The token's decimals."
                        }
                    },
                    "name()": {
                        "returns": {
                            "_0": "The token's name."
                        }
                    },
                    "sharesFromUnderlyingBalance(uint256)": {
                        "params": {
                            "_underlyingAssetAmount": "Amount of underlying asset to convert"
                        },
                        "returns": {
                            "_0": "The amount of shares worth the underlying asset amopunt"
                        }
                    },
                    "symbol()": {
                        "returns": {
                            "_0": "The token's symbol."
                        }
                    },
                    "totalSupply()": {
                        "returns": {
                            "_0": "The total supply in shares"
                        }
                    },
                    "totalUnderlyingSupply()": {
                        "returns": {
                            "_0": "The total underlying asset supply"
                        }
                    },
                    "transfer(address,uint256)": {
                        "params": {
                            "_to": "Address receiving the tokens",
                            "_value": "Amount of shares to be sent"
                        },
                        "returns": {
                            "_0": "True if success"
                        }
                    },
                    "transferFrom(address,address,uint256)": {
                        "params": {
                            "_from": "Address sending the tokens",
                            "_to": "Address receiving the tokens",
                            "_value": "Amount of shares to be sent"
                        },
                        "returns": {
                            "_0": "True if success"
                        }
                    },
                    "underlyingBalanceFromShares(uint256)": {
                        "params": {
                            "_shares": "Amount of shares to convert"
                        },
                        "returns": {
                            "_0": "The underlying asset balance represented by the shares"
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "allowance(address,address)": {
                        "notice": "Gets the allowance of a spender for an owner."
                    },
                    "approve(address,uint256)": {
                        "notice": "Approves an account for future spendings"
                    },
                    "balanceOf(address)": {
                        "notice": "Retrieve the balance of an account"
                    },
                    "balanceOfUnderlying(address)": {
                        "notice": "Retrieve the underlying asset balance of an account"
                    },
                    "decimals()": {
                        "notice": "Gets the token's decimals."
                    },
                    "name()": {
                        "notice": "Gets the token's name."
                    },
                    "sharesFromUnderlyingBalance(uint256)": {
                        "notice": "Retrieve the shares count from an underlying asset amount"
                    },
                    "symbol()": {
                        "notice": "Gets the token's symbol."
                    },
                    "totalSupply()": {
                        "notice": "Retrieve the total token supply"
                    },
                    "totalUnderlyingSupply()": {
                        "notice": "Retrieve the total underlying asset supply"
                    },
                    "transfer(address,uint256)": {
                        "notice": "Performs a transfer from the message sender to the provided account"
                    },
                    "transferFrom(address,address,uint256)": {
                        "notice": "Performs a transfer between two recipients"
                    },
                    "underlyingBalanceFromShares(uint256)": {
                        "notice": "Retrieve the underlying asset balance from an amount of shares"
                    }
                },
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "aave-v3-core/=lib/aave-v3-core/",
                "ds-test/=lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/",
                "openzeppelin/=lib/openzeppelin-contracts/contracts/",
                "solmate/=lib/solmate/src/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "contracts/src/interfaces/lseth/ISharesManagerV1.sol": "ISharesManagerV1"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/lseth/ISharesManagerV1.sol": {
                "keccak256": "0xfefc57da6aa97835543b9e28aa70912334634001bbade60b95b250d5a2e85581",
                "urls": [
                    "bzz-raw://f0d4a2fbbc6d68a1549bd0350080f0f7cd871d7733e47f23148bf4893bcceaca",
                    "dweb:/ipfs/QmfQdu9SZKmMziHa3HgHWkdj6Bw6izZrJT1pSBaWWgumwv"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/lseth/ISharesManagerV1.sol",
        "id": 12831,
        "exportedSymbols": {
            "IERC20": [
                10319
            ],
            "ISharesManagerV1": [
                12830
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:2809:112",
        "nodes": [
            {
                "id": 12748,
                "nodeType": "PragmaDirective",
                "src": "39:23:112",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 12750,
                "nodeType": "ImportDirective",
                "src": "64:39:112",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "../IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 12831,
                "sourceUnit": 10320,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 12749,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10319,
                            "src": "73:6:112",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 12830,
                "nodeType": "ContractDefinition",
                "src": "268:2579:112",
                "nodes": [
                    {
                        "id": 12759,
                        "nodeType": "FunctionDefinition",
                        "src": "402:55:112",
                        "nodes": [],
                        "baseFunctions": [
                            10300
                        ],
                        "documentation": {
                            "id": 12754,
                            "nodeType": "StructuredDocumentation",
                            "src": "311:86:112",
                            "text": "@notice Retrieve the total token supply\n @return The total supply in shares"
                        },
                        "functionSelector": "18160ddd",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nameLocation": "411:11:112",
                        "parameters": {
                            "id": 12755,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "422:2:112"
                        },
                        "returnParameters": {
                            "id": 12758,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12757,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12759,
                                    "src": "448:7:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12756,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "448:7:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "447:9:112"
                        },
                        "scope": 12830,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12765,
                        "nodeType": "FunctionDefinition",
                        "src": "572:65:112",
                        "nodes": [],
                        "documentation": {
                            "id": 12760,
                            "nodeType": "StructuredDocumentation",
                            "src": "463:104:112",
                            "text": "@notice Retrieve the total underlying asset supply\n @return The total underlying asset supply"
                        },
                        "functionSelector": "143a08d4",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalUnderlyingSupply",
                        "nameLocation": "581:21:112",
                        "parameters": {
                            "id": 12761,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "602:2:112"
                        },
                        "returnParameters": {
                            "id": 12764,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12763,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12765,
                                    "src": "628:7:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12762,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "628:7:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "627:9:112"
                        },
                        "scope": 12830,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12773,
                        "nodeType": "FunctionDefinition",
                        "src": "791:67:112",
                        "nodes": [],
                        "baseFunctions": [
                            10318
                        ],
                        "documentation": {
                            "id": 12766,
                            "nodeType": "StructuredDocumentation",
                            "src": "643:143:112",
                            "text": "@notice Retrieve the balance of an account\n @param _owner Address to be checked\n @return The balance of the account in shares"
                        },
                        "functionSelector": "70a08231",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nameLocation": "800:9:112",
                        "parameters": {
                            "id": 12769,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12768,
                                    "mutability": "mutable",
                                    "name": "_owner",
                                    "nameLocation": "818:6:112",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12773,
                                    "src": "810:14:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12767,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "810:7:112",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "809:16:112"
                        },
                        "returnParameters": {
                            "id": 12772,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12771,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12773,
                                    "src": "849:7:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12770,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "849:7:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "848:9:112"
                        },
                        "scope": 12830,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12781,
                        "nodeType": "FunctionDefinition",
                        "src": "1030:91:112",
                        "nodes": [],
                        "documentation": {
                            "id": 12774,
                            "nodeType": "StructuredDocumentation",
                            "src": "864:161:112",
                            "text": "@notice Retrieve the underlying asset balance of an account\n @param _owner Address to be checked\n @return The underlying balance of the account"
                        },
                        "functionSelector": "3af9e669",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOfUnderlying",
                        "nameLocation": "1039:19:112",
                        "parameters": {
                            "id": 12777,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12776,
                                    "mutability": "mutable",
                                    "name": "_owner",
                                    "nameLocation": "1076:6:112",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12781,
                                    "src": "1068:14:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12775,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1068:7:112",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1058:30:112"
                        },
                        "returnParameters": {
                            "id": 12780,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12779,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12781,
                                    "src": "1112:7:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12778,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1112:7:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1111:9:112"
                        },
                        "scope": 12830,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12789,
                        "nodeType": "FunctionDefinition",
                        "src": "1328:100:112",
                        "nodes": [],
                        "documentation": {
                            "id": 12782,
                            "nodeType": "StructuredDocumentation",
                            "src": "1127:196:112",
                            "text": "@notice Retrieve the underlying asset balance from an amount of shares\n @param _shares Amount of shares to convert\n @return The underlying asset balance represented by the shares"
                        },
                        "functionSelector": "f79c3f02",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "underlyingBalanceFromShares",
                        "nameLocation": "1337:27:112",
                        "parameters": {
                            "id": 12785,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12784,
                                    "mutability": "mutable",
                                    "name": "_shares",
                                    "nameLocation": "1382:7:112",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12789,
                                    "src": "1374:15:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12783,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1374:7:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1364:31:112"
                        },
                        "returnParameters": {
                            "id": 12788,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12787,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12789,
                                    "src": "1419:7:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12786,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1419:7:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1418:9:112"
                        },
                        "scope": 12830,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12797,
                        "nodeType": "FunctionDefinition",
                        "src": "1656:115:112",
                        "nodes": [],
                        "documentation": {
                            "id": 12790,
                            "nodeType": "StructuredDocumentation",
                            "src": "1434:217:112",
                            "text": "@notice Retrieve the shares count from an underlying asset amount\n @param _underlyingAssetAmount Amount of underlying asset to convert\n @return The amount of shares worth the underlying asset amopunt"
                        },
                        "functionSelector": "799a1954",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sharesFromUnderlyingBalance",
                        "nameLocation": "1665:27:112",
                        "parameters": {
                            "id": 12793,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12792,
                                    "mutability": "mutable",
                                    "name": "_underlyingAssetAmount",
                                    "nameLocation": "1710:22:112",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12797,
                                    "src": "1702:30:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12791,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1702:7:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1692:46:112"
                        },
                        "returnParameters": {
                            "id": 12796,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12795,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12797,
                                    "src": "1762:7:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12794,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1762:7:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1761:9:112"
                        },
                        "scope": 12830,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12807,
                        "nodeType": "FunctionDefinition",
                        "src": "1991:71:112",
                        "nodes": [],
                        "baseFunctions": [
                            10264
                        ],
                        "documentation": {
                            "id": 12798,
                            "nodeType": "StructuredDocumentation",
                            "src": "1777:209:112",
                            "text": "@notice Performs a transfer from the message sender to the provided account\n @param _to Address receiving the tokens\n @param _value Amount of shares to be sent\n @return True if success"
                        },
                        "functionSelector": "a9059cbb",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transfer",
                        "nameLocation": "2000:8:112",
                        "parameters": {
                            "id": 12803,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12800,
                                    "mutability": "mutable",
                                    "name": "_to",
                                    "nameLocation": "2017:3:112",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12807,
                                    "src": "2009:11:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12799,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2009:7:112",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12802,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "2030:6:112",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12807,
                                    "src": "2022:14:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12801,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2022:7:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2008:29:112"
                        },
                        "returnParameters": {
                            "id": 12806,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12805,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12807,
                                    "src": "2056:4:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12804,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2056:4:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2055:6:112"
                        },
                        "scope": 12830,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12819,
                        "nodeType": "FunctionDefinition",
                        "src": "2305:120:112",
                        "nodes": [],
                        "baseFunctions": [
                            10276
                        ],
                        "documentation": {
                            "id": 12808,
                            "nodeType": "StructuredDocumentation",
                            "src": "2068:232:112",
                            "text": "@notice Performs a transfer between two recipients\n @param _from Address sending the tokens\n @param _to Address receiving the tokens\n @param _value Amount of shares to be sent\n @return True if success"
                        },
                        "functionSelector": "23b872dd",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferFrom",
                        "nameLocation": "2314:12:112",
                        "parameters": {
                            "id": 12815,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12810,
                                    "mutability": "mutable",
                                    "name": "_from",
                                    "nameLocation": "2344:5:112",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12819,
                                    "src": "2336:13:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12809,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2336:7:112",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12812,
                                    "mutability": "mutable",
                                    "name": "_to",
                                    "nameLocation": "2367:3:112",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12819,
                                    "src": "2359:11:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12811,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2359:7:112",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12814,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "2388:6:112",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12819,
                                    "src": "2380:14:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12813,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2380:7:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2326:74:112"
                        },
                        "returnParameters": {
                            "id": 12818,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12817,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12819,
                                    "src": "2419:4:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12816,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2419:4:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2418:6:112"
                        },
                        "scope": 12830,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12829,
                        "nodeType": "FunctionDefinition",
                        "src": "2770:75:112",
                        "nodes": [],
                        "baseFunctions": [
                            10254
                        ],
                        "documentation": {
                            "id": 12820,
                            "nodeType": "StructuredDocumentation",
                            "src": "2431:334:112",
                            "text": "@notice Approves an account for future spendings\n @dev An approved account can use transferFrom to transfer funds on behalf of the token owner\n @param _spender Address that is allowed to spend the tokens\n @param _value The allowed amount in shares, will override previous value\n @return True if success"
                        },
                        "functionSelector": "095ea7b3",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "approve",
                        "nameLocation": "2779:7:112",
                        "parameters": {
                            "id": 12825,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12822,
                                    "mutability": "mutable",
                                    "name": "_spender",
                                    "nameLocation": "2795:8:112",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12829,
                                    "src": "2787:16:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12821,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2787:7:112",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12824,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "2813:6:112",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12829,
                                    "src": "2805:14:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12823,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2805:7:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2786:34:112"
                        },
                        "returnParameters": {
                            "id": 12828,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12827,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12829,
                                    "src": "2839:4:112",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12826,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2839:4:112",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2838:6:112"
                        },
                        "scope": 12830,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 12752,
                            "name": "IERC20",
                            "nameLocations": [
                                "298:6:112"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 10319,
                            "src": "298:6:112"
                        },
                        "id": 12753,
                        "nodeType": "InheritanceSpecifier",
                        "src": "298:6:112"
                    }
                ],
                "canonicalName": "ISharesManagerV1",
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": {
                    "id": 12751,
                    "nodeType": "StructuredDocumentation",
                    "src": "105:163:112",
                    "text": "@title Shares Manager Interface (v1)\n @author Kiln\n @notice This interface exposes methods to handle the shares of the depositor and the ERC20 interface"
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    12830,
                    10319
                ],
                "name": "ISharesManagerV1",
                "nameLocation": "278:16:112",
                "scope": 12831,
                "usedErrors": [],
                "usedEvents": [
                    10235,
                    10244
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 112
};
