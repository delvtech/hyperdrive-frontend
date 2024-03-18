export const ILido = {
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
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
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
                    "name": "account",
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
            "name": "getBufferedEther",
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
                    "internalType": "uint256",
                    "name": "_sharesAmount",
                    "type": "uint256"
                }
            ],
            "name": "getPooledEthByShares",
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
                    "internalType": "uint256",
                    "name": "_ethAmount",
                    "type": "uint256"
                }
            ],
            "name": "getSharesByPooledEth",
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
            "name": "getTotalPooledEther",
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
            "name": "getTotalShares",
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
                    "internalType": "address",
                    "name": "_account",
                    "type": "address"
                }
            ],
            "name": "sharesOf",
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
                    "name": "_referral",
                    "type": "address"
                }
            ],
            "name": "submit",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "payable",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
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
                    "name": "from",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "amount",
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
                    "internalType": "address",
                    "name": "_recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_sharesAmount",
                    "type": "uint256"
                }
            ],
            "name": "transferShares",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_sender",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_recipient",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_sharesAmount",
                    "type": "uint256"
                }
            ],
            "name": "transferSharesFrom",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
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
        "decimals()": "313ce567",
        "getBufferedEther()": "47b714e0",
        "getPooledEthByShares(uint256)": "7a28fb88",
        "getSharesByPooledEth(uint256)": "19208451",
        "getTotalPooledEther()": "37cfdaca",
        "getTotalShares()": "d5002f2e",
        "name()": "06fdde03",
        "sharesOf(address)": "f5eb42dc",
        "submit(address)": "a1903eab",
        "symbol()": "95d89b41",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd",
        "transferShares(address,uint256)": "8fcb4e5b",
        "transferSharesFrom(address,address,uint256)": "6d780459"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBufferedEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"getPooledEthByShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ethAmount\",\"type\":\"uint256\"}],\"name\":\"getSharesByPooledEth\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalPooledEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"sharesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_referral\",\"type\":\"address\"}],\"name\":\"submit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferSharesFrom\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"params\":{\"amount\":\"The new allowance of the spender.\",\"spender\":\"The account with the allowance.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the approval succeeded.\"}},\"balanceOf(address)\":{\"params\":{\"account\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The account's balance.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"getBufferedEther()\":{\"returns\":{\"_0\":\"The total amount of buffered ether.\"}},\"getPooledEthByShares(uint256)\":{\"params\":{\"_sharesAmount\":\"The amount of stETH shares to convert.\"},\"returns\":{\"_0\":\"The amount of stETH tokens that the stETH shares are worth.\"}},\"getSharesByPooledEth(uint256)\":{\"params\":{\"_ethAmount\":\"The amount of stETH tokens to convert.\"},\"returns\":{\"_0\":\"The amount of stETH shares that the stETH tokens are worth.\"}},\"getTotalPooledEther()\":{\"returns\":{\"_0\":\"The total amount of pooled ether.\"}},\"getTotalShares()\":{\"returns\":{\"_0\":\"The total amount of stETH shares.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"sharesOf(address)\":{\"params\":{\"_account\":\"The owner of the shares.\"}},\"submit(address)\":{\"params\":{\"_referral\":\"The referral address that should get credit in Lido's        referral program.\"},\"returns\":{\"_0\":\"The amount of stETH shares that were minted.\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The token's total supply.\"}},\"transfer(address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"from\":\"The owner of the tokens.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferShares(address,uint256)\":{\"params\":{\"_recipient\":\"The recipient of the tokens.\",\"_sharesAmount\":\"The amount of stETH shares that will be transferred.\"},\"returns\":{\"_0\":\"The amount of stETH tokens that were transferred.\"}},\"transferSharesFrom(address,address,uint256)\":{\"params\":{\"_recipient\":\"The recipient of the tokens.\",\"_sender\":\"The owner of the tokens.\",\"_sharesAmount\":\"The amount of tokens that will be transferred.\"},\"returns\":{\"_0\":\"The amount of stETH tokens transferred.\"}}},\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Updates the allowance of a spender on behalf of the sender.\"},\"balanceOf(address)\":{\"notice\":\"Gets the balance of an account.\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"getBufferedEther()\":{\"notice\":\"Gets the total amount of ether that is buffered and waiting         to be staked underlying stETH.\"},\"getPooledEthByShares(uint256)\":{\"notice\":\"Calculates the amount of stETH tokens an amount of stETH shares         are currently worth.\"},\"getSharesByPooledEth(uint256)\":{\"notice\":\"Calculates the amount of stETH shares an amount of stETH tokens         are currently worth.\"},\"getTotalPooledEther()\":{\"notice\":\"Gets the total amount of pooled ether underlying stETH.\"},\"getTotalShares()\":{\"notice\":\"Gets the total amount of stETH shares.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"sharesOf(address)\":{\"notice\":\"Gets the amount of shares owned by an account.\"},\"submit(address)\":{\"notice\":\"Submits ether to stETH to be staked.\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalSupply()\":{\"notice\":\"Gets the token's total supply.\"},\"transfer(address,uint256)\":{\"notice\":\"Transfers tokens from the sender's account to another account.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.\"},\"transferShares(address,uint256)\":{\"notice\":\"Transfers stETH shares from the caller to a recipient.\"},\"transferSharesFrom(address,address,uint256)\":{\"notice\":\"Transfers stETH shares from an owner to a recipient. This draws         from the spender's allowance.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/ILido.sol\":\"ILido\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0x4e281fcc11a2512234c3ca7fb3dd00708bfb78cea39a7cbd911f2a70812925e6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8db577a2a335ebc7011a7e413abd0a78010e85b1573a26218999e335280f3ba3\",\"dweb:/ipfs/QmQrjdiCvNUjDvEHyHH2Wmo8zRN7H3LLRuvrdftP7pc5kE\"]}},\"version\":1}",
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
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
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
                            "name": "account",
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
                    "name": "getBufferedEther",
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
                            "internalType": "uint256",
                            "name": "_sharesAmount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getPooledEthByShares",
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
                            "internalType": "uint256",
                            "name": "_ethAmount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getSharesByPooledEth",
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
                    "name": "getTotalPooledEther",
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
                    "name": "getTotalShares",
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
                            "internalType": "address",
                            "name": "_account",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "sharesOf",
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
                            "name": "_referral",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "submit",
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
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
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
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "amount",
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
                            "internalType": "address",
                            "name": "_recipient",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_sharesAmount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferShares",
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
                            "name": "_sender",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "_recipient",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_sharesAmount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferSharesFrom",
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
                        "params": {
                            "amount": "The new allowance of the spender.",
                            "spender": "The account with the allowance."
                        },
                        "returns": {
                            "_0": "A flag indicating whether or not the approval succeeded."
                        }
                    },
                    "balanceOf(address)": {
                        "params": {
                            "account": "The owner of the tokens."
                        },
                        "returns": {
                            "_0": "The account's balance."
                        }
                    },
                    "decimals()": {
                        "returns": {
                            "_0": "The token's decimals."
                        }
                    },
                    "getBufferedEther()": {
                        "returns": {
                            "_0": "The total amount of buffered ether."
                        }
                    },
                    "getPooledEthByShares(uint256)": {
                        "params": {
                            "_sharesAmount": "The amount of stETH shares to convert."
                        },
                        "returns": {
                            "_0": "The amount of stETH tokens that the stETH shares are worth."
                        }
                    },
                    "getSharesByPooledEth(uint256)": {
                        "params": {
                            "_ethAmount": "The amount of stETH tokens to convert."
                        },
                        "returns": {
                            "_0": "The amount of stETH shares that the stETH tokens are worth."
                        }
                    },
                    "getTotalPooledEther()": {
                        "returns": {
                            "_0": "The total amount of pooled ether."
                        }
                    },
                    "getTotalShares()": {
                        "returns": {
                            "_0": "The total amount of stETH shares."
                        }
                    },
                    "name()": {
                        "returns": {
                            "_0": "The token's name."
                        }
                    },
                    "sharesOf(address)": {
                        "params": {
                            "_account": "The owner of the shares."
                        }
                    },
                    "submit(address)": {
                        "params": {
                            "_referral": "The referral address that should get credit in Lido's        referral program."
                        },
                        "returns": {
                            "_0": "The amount of stETH shares that were minted."
                        }
                    },
                    "symbol()": {
                        "returns": {
                            "_0": "The token's symbol."
                        }
                    },
                    "totalSupply()": {
                        "returns": {
                            "_0": "The token's total supply."
                        }
                    },
                    "transfer(address,uint256)": {
                        "params": {
                            "amount": "The amount of tokens that will be transferred.",
                            "to": "The recipient of the tokens."
                        },
                        "returns": {
                            "_0": "A flag indicating whether or not the transfer succeeded."
                        }
                    },
                    "transferFrom(address,address,uint256)": {
                        "params": {
                            "amount": "The amount of tokens that will be transferred.",
                            "from": "The owner of the tokens.",
                            "to": "The recipient of the tokens."
                        },
                        "returns": {
                            "_0": "A flag indicating whether or not the transfer succeeded."
                        }
                    },
                    "transferShares(address,uint256)": {
                        "params": {
                            "_recipient": "The recipient of the tokens.",
                            "_sharesAmount": "The amount of stETH shares that will be transferred."
                        },
                        "returns": {
                            "_0": "The amount of stETH tokens that were transferred."
                        }
                    },
                    "transferSharesFrom(address,address,uint256)": {
                        "params": {
                            "_recipient": "The recipient of the tokens.",
                            "_sender": "The owner of the tokens.",
                            "_sharesAmount": "The amount of tokens that will be transferred."
                        },
                        "returns": {
                            "_0": "The amount of stETH tokens transferred."
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
                        "notice": "Updates the allowance of a spender on behalf of the sender."
                    },
                    "balanceOf(address)": {
                        "notice": "Gets the balance of an account."
                    },
                    "decimals()": {
                        "notice": "Gets the token's decimals."
                    },
                    "getBufferedEther()": {
                        "notice": "Gets the total amount of ether that is buffered and waiting         to be staked underlying stETH."
                    },
                    "getPooledEthByShares(uint256)": {
                        "notice": "Calculates the amount of stETH tokens an amount of stETH shares         are currently worth."
                    },
                    "getSharesByPooledEth(uint256)": {
                        "notice": "Calculates the amount of stETH shares an amount of stETH tokens         are currently worth."
                    },
                    "getTotalPooledEther()": {
                        "notice": "Gets the total amount of pooled ether underlying stETH."
                    },
                    "getTotalShares()": {
                        "notice": "Gets the total amount of stETH shares."
                    },
                    "name()": {
                        "notice": "Gets the token's name."
                    },
                    "sharesOf(address)": {
                        "notice": "Gets the amount of shares owned by an account."
                    },
                    "submit(address)": {
                        "notice": "Submits ether to stETH to be staked."
                    },
                    "symbol()": {
                        "notice": "Gets the token's symbol."
                    },
                    "totalSupply()": {
                        "notice": "Gets the token's total supply."
                    },
                    "transfer(address,uint256)": {
                        "notice": "Transfers tokens from the sender's account to another account."
                    },
                    "transferFrom(address,address,uint256)": {
                        "notice": "Transfers tokens from an owner to a recipient. This draws from         the sender's allowance."
                    },
                    "transferShares(address,uint256)": {
                        "notice": "Transfers stETH shares from the caller to a recipient."
                    },
                    "transferSharesFrom(address,address,uint256)": {
                        "notice": "Transfers stETH shares from an owner to a recipient. This draws         from the spender's allowance."
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
                "contracts/src/interfaces/ILido.sol": "ILido"
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
            "contracts/src/interfaces/ILido.sol": {
                "keccak256": "0x4e281fcc11a2512234c3ca7fb3dd00708bfb78cea39a7cbd911f2a70812925e6",
                "urls": [
                    "bzz-raw://8db577a2a335ebc7011a7e413abd0a78010e85b1573a26218999e335280f3ba3",
                    "dweb:/ipfs/QmQrjdiCvNUjDvEHyHH2Wmo8zRN7H3LLRuvrdftP7pc5kE"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/ILido.sol",
        "id": 11974,
        "exportedSymbols": {
            "IERC20": [
                10319
            ],
            "ILido": [
                11973
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:2877:97",
        "nodes": [
            {
                "id": 11896,
                "nodeType": "PragmaDirective",
                "src": "39:23:97",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11898,
                "nodeType": "ImportDirective",
                "src": "64:38:97",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "./IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11974,
                "sourceUnit": 10320,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 11897,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10319,
                            "src": "73:6:97",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 11973,
                "nodeType": "ContractDefinition",
                "src": "104:2811:97",
                "nodes": [
                    {
                        "id": 11908,
                        "nodeType": "FunctionDefinition",
                        "src": "362:70:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11901,
                            "nodeType": "StructuredDocumentation",
                            "src": "136:221:97",
                            "text": "@notice Submits ether to stETH to be staked.\n @param _referral The referral address that should get credit in Lido's\n        referral program.\n @return The amount of stETH shares that were minted."
                        },
                        "functionSelector": "a1903eab",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "submit",
                        "nameLocation": "371:6:97",
                        "parameters": {
                            "id": 11904,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11903,
                                    "mutability": "mutable",
                                    "name": "_referral",
                                    "nameLocation": "386:9:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11908,
                                    "src": "378:17:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11902,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "378:7:97",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "377:19:97"
                        },
                        "returnParameters": {
                            "id": 11907,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11906,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11908,
                                    "src": "423:7:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11905,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "423:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "422:9:97"
                        },
                        "scope": 11973,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11918,
                        "nodeType": "FunctionDefinition",
                        "src": "712:116:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11909,
                            "nodeType": "StructuredDocumentation",
                            "src": "438:269:97",
                            "text": "@notice Transfers stETH shares from the caller to a recipient.\n @param _recipient The recipient of the tokens.\n @param _sharesAmount The amount of stETH shares that will be transferred.\n @return The amount of stETH tokens that were transferred."
                        },
                        "functionSelector": "8fcb4e5b",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferShares",
                        "nameLocation": "721:14:97",
                        "parameters": {
                            "id": 11914,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11911,
                                    "mutability": "mutable",
                                    "name": "_recipient",
                                    "nameLocation": "753:10:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11918,
                                    "src": "745:18:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11910,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "745:7:97",
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
                                    "id": 11913,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "781:13:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11918,
                                    "src": "773:21:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11912,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "773:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "735:65:97"
                        },
                        "returnParameters": {
                            "id": 11917,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11916,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11918,
                                    "src": "819:7:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11915,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "819:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "818:9:97"
                        },
                        "scope": 11973,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11930,
                        "nodeType": "FunctionDefinition",
                        "src": "1195:145:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11919,
                            "nodeType": "StructuredDocumentation",
                            "src": "834:356:97",
                            "text": "@notice Transfers stETH shares from an owner to a recipient. This draws\n         from the spender's allowance.\n @param _sender The owner of the tokens.\n @param _recipient The recipient of the tokens.\n @param _sharesAmount The amount of tokens that will be transferred.\n @return The amount of stETH tokens transferred."
                        },
                        "functionSelector": "6d780459",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferSharesFrom",
                        "nameLocation": "1204:18:97",
                        "parameters": {
                            "id": 11926,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11921,
                                    "mutability": "mutable",
                                    "name": "_sender",
                                    "nameLocation": "1240:7:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11930,
                                    "src": "1232:15:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11920,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1232:7:97",
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
                                    "id": 11923,
                                    "mutability": "mutable",
                                    "name": "_recipient",
                                    "nameLocation": "1265:10:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11930,
                                    "src": "1257:18:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11922,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1257:7:97",
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
                                    "id": 11925,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "1293:13:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11930,
                                    "src": "1285:21:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11924,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1285:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1222:90:97"
                        },
                        "returnParameters": {
                            "id": 11929,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11928,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11930,
                                    "src": "1331:7:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11927,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1331:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1330:9:97"
                        },
                        "scope": 11973,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11938,
                        "nodeType": "FunctionDefinition",
                        "src": "1604:96:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11931,
                            "nodeType": "StructuredDocumentation",
                            "src": "1346:253:97",
                            "text": "@notice Calculates the amount of stETH shares an amount of stETH tokens\n         are currently worth.\n @param _ethAmount The amount of stETH tokens to convert.\n @return The amount of stETH shares that the stETH tokens are worth."
                        },
                        "functionSelector": "19208451",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getSharesByPooledEth",
                        "nameLocation": "1613:20:97",
                        "parameters": {
                            "id": 11934,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11933,
                                    "mutability": "mutable",
                                    "name": "_ethAmount",
                                    "nameLocation": "1651:10:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11938,
                                    "src": "1643:18:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11932,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1643:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1633:34:97"
                        },
                        "returnParameters": {
                            "id": 11937,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11936,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11938,
                                    "src": "1691:7:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11935,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1691:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1690:9:97"
                        },
                        "scope": 11973,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11946,
                        "nodeType": "FunctionDefinition",
                        "src": "1967:99:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11939,
                            "nodeType": "StructuredDocumentation",
                            "src": "1706:256:97",
                            "text": "@notice Calculates the amount of stETH tokens an amount of stETH shares\n         are currently worth.\n @param _sharesAmount The amount of stETH shares to convert.\n @return The amount of stETH tokens that the stETH shares are worth."
                        },
                        "functionSelector": "7a28fb88",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getPooledEthByShares",
                        "nameLocation": "1976:20:97",
                        "parameters": {
                            "id": 11942,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11941,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "2014:13:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11946,
                                    "src": "2006:21:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11940,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2006:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1996:37:97"
                        },
                        "returnParameters": {
                            "id": 11945,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11944,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11946,
                                    "src": "2057:7:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11943,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2057:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2056:9:97"
                        },
                        "scope": 11973,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11952,
                        "nodeType": "FunctionDefinition",
                        "src": "2247:60:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11947,
                            "nodeType": "StructuredDocumentation",
                            "src": "2072:170:97",
                            "text": "@notice Gets the total amount of ether that is buffered and waiting\n         to be staked underlying stETH.\n @return The total amount of buffered ether."
                        },
                        "functionSelector": "47b714e0",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBufferedEther",
                        "nameLocation": "2256:16:97",
                        "parameters": {
                            "id": 11948,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2272:2:97"
                        },
                        "returnParameters": {
                            "id": 11951,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11950,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11952,
                                    "src": "2298:7:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11949,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2298:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2297:9:97"
                        },
                        "scope": 11973,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11958,
                        "nodeType": "FunctionDefinition",
                        "src": "2435:63:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11953,
                            "nodeType": "StructuredDocumentation",
                            "src": "2313:117:97",
                            "text": "@notice Gets the total amount of pooled ether underlying stETH.\n @return The total amount of pooled ether."
                        },
                        "functionSelector": "37cfdaca",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalPooledEther",
                        "nameLocation": "2444:19:97",
                        "parameters": {
                            "id": 11954,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2463:2:97"
                        },
                        "returnParameters": {
                            "id": 11957,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11956,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11958,
                                    "src": "2489:7:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11955,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2489:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2488:9:97"
                        },
                        "scope": 11973,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11964,
                        "nodeType": "FunctionDefinition",
                        "src": "2609:58:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11959,
                            "nodeType": "StructuredDocumentation",
                            "src": "2504:100:97",
                            "text": "@notice Gets the total amount of stETH shares.\n @return The total amount of stETH shares."
                        },
                        "functionSelector": "d5002f2e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalShares",
                        "nameLocation": "2618:14:97",
                        "parameters": {
                            "id": 11960,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2632:2:97"
                        },
                        "returnParameters": {
                            "id": 11963,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11962,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11964,
                                    "src": "2658:7:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11961,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2658:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2657:9:97"
                        },
                        "scope": 11973,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11972,
                        "nodeType": "FunctionDefinition",
                        "src": "2845:68:97",
                        "nodes": [],
                        "documentation": {
                            "id": 11965,
                            "nodeType": "StructuredDocumentation",
                            "src": "2673:107:97",
                            "text": "@notice Gets the amount of shares owned by an account.\n @param _account The owner of the shares."
                        },
                        "functionSelector": "f5eb42dc",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sharesOf",
                        "nameLocation": "2854:8:97",
                        "parameters": {
                            "id": 11968,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11967,
                                    "mutability": "mutable",
                                    "name": "_account",
                                    "nameLocation": "2871:8:97",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11972,
                                    "src": "2863:16:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11966,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2863:7:97",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2862:18:97"
                        },
                        "returnParameters": {
                            "id": 11971,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11970,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11972,
                                    "src": "2904:7:97",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11969,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2904:7:97",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2903:9:97"
                        },
                        "scope": 11973,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 11899,
                            "name": "IERC20",
                            "nameLocations": [
                                "123:6:97"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 10319,
                            "src": "123:6:97"
                        },
                        "id": 11900,
                        "nodeType": "InheritanceSpecifier",
                        "src": "123:6:97"
                    }
                ],
                "canonicalName": "ILido",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    11973,
                    10319
                ],
                "name": "ILido",
                "nameLocation": "114:5:97",
                "scope": 11974,
                "usedErrors": [],
                "usedEvents": [
                    10235,
                    10244
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 97
};
