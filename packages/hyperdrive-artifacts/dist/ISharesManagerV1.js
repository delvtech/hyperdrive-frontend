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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"balanceOfUnderlying\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_underlyingAssetAmount\",\"type\":\"uint256\"}],\"name\":\"sharesFromUnderlyingBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalUnderlyingSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_shares\",\"type\":\"uint256\"}],\"name\":\"underlyingBalanceFromShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Kiln\",\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"details\":\"An approved account can use transferFrom to transfer funds on behalf of the token owner\",\"params\":{\"_spender\":\"Address that is allowed to spend the tokens\",\"_value\":\"The allowed amount in shares, will override previous value\"},\"returns\":{\"_0\":\"True if success\"}},\"balanceOf(address)\":{\"params\":{\"_owner\":\"Address to be checked\"},\"returns\":{\"_0\":\"The balance of the account in shares\"}},\"balanceOfUnderlying(address)\":{\"params\":{\"_owner\":\"Address to be checked\"},\"returns\":{\"_0\":\"The underlying balance of the account\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"sharesFromUnderlyingBalance(uint256)\":{\"params\":{\"_underlyingAssetAmount\":\"Amount of underlying asset to convert\"},\"returns\":{\"_0\":\"The amount of shares worth the underlying asset amopunt\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The total supply in shares\"}},\"totalUnderlyingSupply()\":{\"returns\":{\"_0\":\"The total underlying asset supply\"}},\"transfer(address,uint256)\":{\"params\":{\"_to\":\"Address receiving the tokens\",\"_value\":\"Amount of shares to be sent\"},\"returns\":{\"_0\":\"True if success\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"_from\":\"Address sending the tokens\",\"_to\":\"Address receiving the tokens\",\"_value\":\"Amount of shares to be sent\"},\"returns\":{\"_0\":\"True if success\"}},\"underlyingBalanceFromShares(uint256)\":{\"params\":{\"_shares\":\"Amount of shares to convert\"},\"returns\":{\"_0\":\"The underlying asset balance represented by the shares\"}}},\"title\":\"Shares Manager Interface (v1)\",\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Approves an account for future spendings\"},\"balanceOf(address)\":{\"notice\":\"Retrieve the balance of an account\"},\"balanceOfUnderlying(address)\":{\"notice\":\"Retrieve the underlying asset balance of an account\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"sharesFromUnderlyingBalance(uint256)\":{\"notice\":\"Retrieve the shares count from an underlying asset amount\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalSupply()\":{\"notice\":\"Retrieve the total token supply\"},\"totalUnderlyingSupply()\":{\"notice\":\"Retrieve the total underlying asset supply\"},\"transfer(address,uint256)\":{\"notice\":\"Performs a transfer from the message sender to the provided account\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Performs a transfer between two recipients\"},\"underlyingBalanceFromShares(uint256)\":{\"notice\":\"Retrieve the underlying asset balance from an amount of shares\"}},\"notice\":\"This interface exposes methods to handle the shares of the depositor and the ERC20 interface\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/ISharesManagerV1.sol\":\"ISharesManagerV1\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/ISharesManagerV1.sol\":{\"keccak256\":\"0xca5ddd1dff26fc16fbf35e7154c5dee64098f6a0e3e44f9335c62b14d3705a98\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://577579582e9762b9244a47ce465a3de3a848fdf1b8a5b0ad07a5b803d8ef02e4\",\"dweb:/ipfs/QmSkPXPtxhcGB6DfVNYY6ZxdNHnkUupxBmDAgPtooKXzqA\"]}},\"version\":1}",
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
                "contracts/src/interfaces/ISharesManagerV1.sol": "ISharesManagerV1"
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
            "contracts/src/interfaces/ISharesManagerV1.sol": {
                "keccak256": "0xca5ddd1dff26fc16fbf35e7154c5dee64098f6a0e3e44f9335c62b14d3705a98",
                "urls": [
                    "bzz-raw://577579582e9762b9244a47ce465a3de3a848fdf1b8a5b0ad07a5b803d8ef02e4",
                    "dweb:/ipfs/QmSkPXPtxhcGB6DfVNYY6ZxdNHnkUupxBmDAgPtooKXzqA"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/ISharesManagerV1.sol",
        "id": 12493,
        "exportedSymbols": {
            "IERC20": [
                9980
            ],
            "ISharesManagerV1": [
                12492
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:2808:110",
        "nodes": [
            {
                "id": 12410,
                "nodeType": "PragmaDirective",
                "src": "39:23:110",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 12412,
                "nodeType": "ImportDirective",
                "src": "64:38:110",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "./IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 12493,
                "sourceUnit": 9981,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 12411,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9980,
                            "src": "73:6:110",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 12492,
                "nodeType": "ContractDefinition",
                "src": "267:2579:110",
                "nodes": [
                    {
                        "id": 12421,
                        "nodeType": "FunctionDefinition",
                        "src": "401:55:110",
                        "nodes": [],
                        "baseFunctions": [
                            9961
                        ],
                        "documentation": {
                            "id": 12416,
                            "nodeType": "StructuredDocumentation",
                            "src": "310:86:110",
                            "text": "@notice Retrieve the total token supply\n @return The total supply in shares"
                        },
                        "functionSelector": "18160ddd",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nameLocation": "410:11:110",
                        "parameters": {
                            "id": 12417,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "421:2:110"
                        },
                        "returnParameters": {
                            "id": 12420,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12419,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12421,
                                    "src": "447:7:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12418,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "447:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "446:9:110"
                        },
                        "scope": 12492,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12427,
                        "nodeType": "FunctionDefinition",
                        "src": "571:65:110",
                        "nodes": [],
                        "documentation": {
                            "id": 12422,
                            "nodeType": "StructuredDocumentation",
                            "src": "462:104:110",
                            "text": "@notice Retrieve the total underlying asset supply\n @return The total underlying asset supply"
                        },
                        "functionSelector": "143a08d4",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalUnderlyingSupply",
                        "nameLocation": "580:21:110",
                        "parameters": {
                            "id": 12423,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "601:2:110"
                        },
                        "returnParameters": {
                            "id": 12426,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12425,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12427,
                                    "src": "627:7:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12424,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "627:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "626:9:110"
                        },
                        "scope": 12492,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12435,
                        "nodeType": "FunctionDefinition",
                        "src": "790:67:110",
                        "nodes": [],
                        "baseFunctions": [
                            9979
                        ],
                        "documentation": {
                            "id": 12428,
                            "nodeType": "StructuredDocumentation",
                            "src": "642:143:110",
                            "text": "@notice Retrieve the balance of an account\n @param _owner Address to be checked\n @return The balance of the account in shares"
                        },
                        "functionSelector": "70a08231",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nameLocation": "799:9:110",
                        "parameters": {
                            "id": 12431,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12430,
                                    "mutability": "mutable",
                                    "name": "_owner",
                                    "nameLocation": "817:6:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12435,
                                    "src": "809:14:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12429,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "809:7:110",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "808:16:110"
                        },
                        "returnParameters": {
                            "id": 12434,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12433,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12435,
                                    "src": "848:7:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12432,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "848:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "847:9:110"
                        },
                        "scope": 12492,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12443,
                        "nodeType": "FunctionDefinition",
                        "src": "1029:91:110",
                        "nodes": [],
                        "documentation": {
                            "id": 12436,
                            "nodeType": "StructuredDocumentation",
                            "src": "863:161:110",
                            "text": "@notice Retrieve the underlying asset balance of an account\n @param _owner Address to be checked\n @return The underlying balance of the account"
                        },
                        "functionSelector": "3af9e669",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOfUnderlying",
                        "nameLocation": "1038:19:110",
                        "parameters": {
                            "id": 12439,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12438,
                                    "mutability": "mutable",
                                    "name": "_owner",
                                    "nameLocation": "1075:6:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12443,
                                    "src": "1067:14:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12437,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1067:7:110",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1057:30:110"
                        },
                        "returnParameters": {
                            "id": 12442,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12441,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12443,
                                    "src": "1111:7:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12440,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1111:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1110:9:110"
                        },
                        "scope": 12492,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12451,
                        "nodeType": "FunctionDefinition",
                        "src": "1327:100:110",
                        "nodes": [],
                        "documentation": {
                            "id": 12444,
                            "nodeType": "StructuredDocumentation",
                            "src": "1126:196:110",
                            "text": "@notice Retrieve the underlying asset balance from an amount of shares\n @param _shares Amount of shares to convert\n @return The underlying asset balance represented by the shares"
                        },
                        "functionSelector": "f79c3f02",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "underlyingBalanceFromShares",
                        "nameLocation": "1336:27:110",
                        "parameters": {
                            "id": 12447,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12446,
                                    "mutability": "mutable",
                                    "name": "_shares",
                                    "nameLocation": "1381:7:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12451,
                                    "src": "1373:15:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12445,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1373:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1363:31:110"
                        },
                        "returnParameters": {
                            "id": 12450,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12449,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12451,
                                    "src": "1418:7:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12448,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1418:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1417:9:110"
                        },
                        "scope": 12492,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12459,
                        "nodeType": "FunctionDefinition",
                        "src": "1655:115:110",
                        "nodes": [],
                        "documentation": {
                            "id": 12452,
                            "nodeType": "StructuredDocumentation",
                            "src": "1433:217:110",
                            "text": "@notice Retrieve the shares count from an underlying asset amount\n @param _underlyingAssetAmount Amount of underlying asset to convert\n @return The amount of shares worth the underlying asset amopunt"
                        },
                        "functionSelector": "799a1954",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sharesFromUnderlyingBalance",
                        "nameLocation": "1664:27:110",
                        "parameters": {
                            "id": 12455,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12454,
                                    "mutability": "mutable",
                                    "name": "_underlyingAssetAmount",
                                    "nameLocation": "1709:22:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12459,
                                    "src": "1701:30:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12453,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1701:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1691:46:110"
                        },
                        "returnParameters": {
                            "id": 12458,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12457,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12459,
                                    "src": "1761:7:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12456,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1761:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1760:9:110"
                        },
                        "scope": 12492,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12469,
                        "nodeType": "FunctionDefinition",
                        "src": "1990:71:110",
                        "nodes": [],
                        "baseFunctions": [
                            9925
                        ],
                        "documentation": {
                            "id": 12460,
                            "nodeType": "StructuredDocumentation",
                            "src": "1776:209:110",
                            "text": "@notice Performs a transfer from the message sender to the provided account\n @param _to Address receiving the tokens\n @param _value Amount of shares to be sent\n @return True if success"
                        },
                        "functionSelector": "a9059cbb",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transfer",
                        "nameLocation": "1999:8:110",
                        "parameters": {
                            "id": 12465,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12462,
                                    "mutability": "mutable",
                                    "name": "_to",
                                    "nameLocation": "2016:3:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12469,
                                    "src": "2008:11:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12461,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2008:7:110",
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
                                    "id": 12464,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "2029:6:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12469,
                                    "src": "2021:14:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12463,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2021:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2007:29:110"
                        },
                        "returnParameters": {
                            "id": 12468,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12467,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12469,
                                    "src": "2055:4:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12466,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2055:4:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2054:6:110"
                        },
                        "scope": 12492,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12481,
                        "nodeType": "FunctionDefinition",
                        "src": "2304:120:110",
                        "nodes": [],
                        "baseFunctions": [
                            9937
                        ],
                        "documentation": {
                            "id": 12470,
                            "nodeType": "StructuredDocumentation",
                            "src": "2067:232:110",
                            "text": "@notice Performs a transfer between two recipients\n @param _from Address sending the tokens\n @param _to Address receiving the tokens\n @param _value Amount of shares to be sent\n @return True if success"
                        },
                        "functionSelector": "23b872dd",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferFrom",
                        "nameLocation": "2313:12:110",
                        "parameters": {
                            "id": 12477,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12472,
                                    "mutability": "mutable",
                                    "name": "_from",
                                    "nameLocation": "2343:5:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12481,
                                    "src": "2335:13:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12471,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2335:7:110",
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
                                    "id": 12474,
                                    "mutability": "mutable",
                                    "name": "_to",
                                    "nameLocation": "2366:3:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12481,
                                    "src": "2358:11:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12473,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2358:7:110",
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
                                    "id": 12476,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "2387:6:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12481,
                                    "src": "2379:14:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12475,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2379:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2325:74:110"
                        },
                        "returnParameters": {
                            "id": 12480,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12479,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12481,
                                    "src": "2418:4:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12478,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2418:4:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2417:6:110"
                        },
                        "scope": 12492,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12491,
                        "nodeType": "FunctionDefinition",
                        "src": "2769:75:110",
                        "nodes": [],
                        "baseFunctions": [
                            9915
                        ],
                        "documentation": {
                            "id": 12482,
                            "nodeType": "StructuredDocumentation",
                            "src": "2430:334:110",
                            "text": "@notice Approves an account for future spendings\n @dev An approved account can use transferFrom to transfer funds on behalf of the token owner\n @param _spender Address that is allowed to spend the tokens\n @param _value The allowed amount in shares, will override previous value\n @return True if success"
                        },
                        "functionSelector": "095ea7b3",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "approve",
                        "nameLocation": "2778:7:110",
                        "parameters": {
                            "id": 12487,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12484,
                                    "mutability": "mutable",
                                    "name": "_spender",
                                    "nameLocation": "2794:8:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12491,
                                    "src": "2786:16:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12483,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2786:7:110",
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
                                    "id": 12486,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "2812:6:110",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12491,
                                    "src": "2804:14:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12485,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2804:7:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2785:34:110"
                        },
                        "returnParameters": {
                            "id": 12490,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12489,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12491,
                                    "src": "2838:4:110",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12488,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2838:4:110",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2837:6:110"
                        },
                        "scope": 12492,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 12414,
                            "name": "IERC20",
                            "nameLocations": [
                                "297:6:110"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 9980,
                            "src": "297:6:110"
                        },
                        "id": 12415,
                        "nodeType": "InheritanceSpecifier",
                        "src": "297:6:110"
                    }
                ],
                "canonicalName": "ISharesManagerV1",
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": {
                    "id": 12413,
                    "nodeType": "StructuredDocumentation",
                    "src": "104:163:110",
                    "text": "@title Shares Manager Interface (v1)\n @author Kiln\n @notice This interface exposes methods to handle the shares of the depositor and the ERC20 interface"
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    12492,
                    9980
                ],
                "name": "ISharesManagerV1",
                "nameLocation": "277:16:110",
                "scope": 12493,
                "usedErrors": [],
                "usedEvents": [
                    9896,
                    9905
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 110
};
