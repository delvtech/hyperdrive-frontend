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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBufferedEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"getPooledEthByShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_ethAmount\",\"type\":\"uint256\"}],\"name\":\"getSharesByPooledEth\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalPooledEther\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"sharesOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_referral\",\"type\":\"address\"}],\"name\":\"submit\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferShares\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_sharesAmount\",\"type\":\"uint256\"}],\"name\":\"transferSharesFrom\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"params\":{\"amount\":\"The new allowance of the spender.\",\"spender\":\"The account with the allowance.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the approval succeeded.\"}},\"balanceOf(address)\":{\"params\":{\"account\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The account's balance.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"getBufferedEther()\":{\"returns\":{\"_0\":\"The total amount of buffered ether.\"}},\"getPooledEthByShares(uint256)\":{\"params\":{\"_sharesAmount\":\"The amount of stETH shares to convert.\"},\"returns\":{\"_0\":\"The amount of stETH tokens that the stETH shares are worth.\"}},\"getSharesByPooledEth(uint256)\":{\"params\":{\"_ethAmount\":\"The amount of stETH tokens to convert.\"},\"returns\":{\"_0\":\"The amount of stETH shares that the stETH tokens are worth.\"}},\"getTotalPooledEther()\":{\"returns\":{\"_0\":\"The total amount of pooled ether.\"}},\"getTotalShares()\":{\"returns\":{\"_0\":\"The total amount of stETH shares.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"sharesOf(address)\":{\"params\":{\"_account\":\"The owner of the shares.\"}},\"submit(address)\":{\"params\":{\"_referral\":\"The referral address that should get credit in Lido's        referral program.\"},\"returns\":{\"_0\":\"The amount of stETH shares that were minted.\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The token's total supply.\"}},\"transfer(address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"from\":\"The owner of the tokens.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferShares(address,uint256)\":{\"params\":{\"_recipient\":\"The recipient of the tokens.\",\"_sharesAmount\":\"The amount of stETH shares that will be transferred.\"},\"returns\":{\"_0\":\"The amount of stETH tokens that were transferred.\"}},\"transferSharesFrom(address,address,uint256)\":{\"params\":{\"_recipient\":\"The recipient of the tokens.\",\"_sender\":\"The owner of the tokens.\",\"_sharesAmount\":\"The amount of tokens that will be transferred.\"},\"returns\":{\"_0\":\"The amount of stETH tokens transferred.\"}}},\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Updates the allowance of a spender on behalf of the sender.\"},\"balanceOf(address)\":{\"notice\":\"Gets the balance of an account.\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"getBufferedEther()\":{\"notice\":\"Gets the total amount of ether that is buffered and waiting         to be staked underlying stETH.\"},\"getPooledEthByShares(uint256)\":{\"notice\":\"Calculates the amount of stETH tokens an amount of stETH shares         are currently worth.\"},\"getSharesByPooledEth(uint256)\":{\"notice\":\"Calculates the amount of stETH shares an amount of stETH tokens         are currently worth.\"},\"getTotalPooledEther()\":{\"notice\":\"Gets the total amount of pooled ether underlying stETH.\"},\"getTotalShares()\":{\"notice\":\"Gets the total amount of stETH shares.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"sharesOf(address)\":{\"notice\":\"Gets the amount of shares owned by an account.\"},\"submit(address)\":{\"notice\":\"Submits ether to stETH to be staked.\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalSupply()\":{\"notice\":\"Gets the token's total supply.\"},\"transfer(address,uint256)\":{\"notice\":\"Transfers tokens from the sender's account to another account.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.\"},\"transferShares(address,uint256)\":{\"notice\":\"Transfers stETH shares from the caller to a recipient.\"},\"transferSharesFrom(address,address,uint256)\":{\"notice\":\"Transfers stETH shares from an owner to a recipient. This draws         from the spender's allowance.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/ILido.sol\":\"ILido\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/ILido.sol\":{\"keccak256\":\"0x4e281fcc11a2512234c3ca7fb3dd00708bfb78cea39a7cbd911f2a70812925e6\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8db577a2a335ebc7011a7e413abd0a78010e85b1573a26218999e335280f3ba3\",\"dweb:/ipfs/QmQrjdiCvNUjDvEHyHH2Wmo8zRN7H3LLRuvrdftP7pc5kE\"]}},\"version\":1}",
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
        "id": 11466,
        "exportedSymbols": {
            "IERC20": [
                9810
            ],
            "ILido": [
                11465
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:2877:95",
        "nodes": [
            {
                "id": 11388,
                "nodeType": "PragmaDirective",
                "src": "39:23:95",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11390,
                "nodeType": "ImportDirective",
                "src": "64:38:95",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "./IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11466,
                "sourceUnit": 9811,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 11389,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9810,
                            "src": "73:6:95",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 11465,
                "nodeType": "ContractDefinition",
                "src": "104:2811:95",
                "nodes": [
                    {
                        "id": 11400,
                        "nodeType": "FunctionDefinition",
                        "src": "362:70:95",
                        "nodes": [],
                        "documentation": {
                            "id": 11393,
                            "nodeType": "StructuredDocumentation",
                            "src": "136:221:95",
                            "text": "@notice Submits ether to stETH to be staked.\n @param _referral The referral address that should get credit in Lido's\n        referral program.\n @return The amount of stETH shares that were minted."
                        },
                        "functionSelector": "a1903eab",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "submit",
                        "nameLocation": "371:6:95",
                        "parameters": {
                            "id": 11396,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11395,
                                    "mutability": "mutable",
                                    "name": "_referral",
                                    "nameLocation": "386:9:95",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11400,
                                    "src": "378:17:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11394,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "378:7:95",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "377:19:95"
                        },
                        "returnParameters": {
                            "id": 11399,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11398,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11400,
                                    "src": "423:7:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11397,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "423:7:95",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "422:9:95"
                        },
                        "scope": 11465,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11410,
                        "nodeType": "FunctionDefinition",
                        "src": "712:116:95",
                        "nodes": [],
                        "documentation": {
                            "id": 11401,
                            "nodeType": "StructuredDocumentation",
                            "src": "438:269:95",
                            "text": "@notice Transfers stETH shares from the caller to a recipient.\n @param _recipient The recipient of the tokens.\n @param _sharesAmount The amount of stETH shares that will be transferred.\n @return The amount of stETH tokens that were transferred."
                        },
                        "functionSelector": "8fcb4e5b",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferShares",
                        "nameLocation": "721:14:95",
                        "parameters": {
                            "id": 11406,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11403,
                                    "mutability": "mutable",
                                    "name": "_recipient",
                                    "nameLocation": "753:10:95",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11410,
                                    "src": "745:18:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11402,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "745:7:95",
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
                                    "id": 11405,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "781:13:95",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11410,
                                    "src": "773:21:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11404,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "773:7:95",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "735:65:95"
                        },
                        "returnParameters": {
                            "id": 11409,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11408,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11410,
                                    "src": "819:7:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11407,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "819:7:95",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "818:9:95"
                        },
                        "scope": 11465,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11422,
                        "nodeType": "FunctionDefinition",
                        "src": "1195:145:95",
                        "nodes": [],
                        "documentation": {
                            "id": 11411,
                            "nodeType": "StructuredDocumentation",
                            "src": "834:356:95",
                            "text": "@notice Transfers stETH shares from an owner to a recipient. This draws\n         from the spender's allowance.\n @param _sender The owner of the tokens.\n @param _recipient The recipient of the tokens.\n @param _sharesAmount The amount of tokens that will be transferred.\n @return The amount of stETH tokens transferred."
                        },
                        "functionSelector": "6d780459",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferSharesFrom",
                        "nameLocation": "1204:18:95",
                        "parameters": {
                            "id": 11418,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11413,
                                    "mutability": "mutable",
                                    "name": "_sender",
                                    "nameLocation": "1240:7:95",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11422,
                                    "src": "1232:15:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11412,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1232:7:95",
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
                                    "id": 11415,
                                    "mutability": "mutable",
                                    "name": "_recipient",
                                    "nameLocation": "1265:10:95",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11422,
                                    "src": "1257:18:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11414,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1257:7:95",
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
                                    "id": 11417,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "1293:13:95",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11422,
                                    "src": "1285:21:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11416,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1285:7:95",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1222:90:95"
                        },
                        "returnParameters": {
                            "id": 11421,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11420,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11422,
                                    "src": "1331:7:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11419,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1331:7:95",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1330:9:95"
                        },
                        "scope": 11465,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11430,
                        "nodeType": "FunctionDefinition",
                        "src": "1604:96:95",
                        "nodes": [],
                        "documentation": {
                            "id": 11423,
                            "nodeType": "StructuredDocumentation",
                            "src": "1346:253:95",
                            "text": "@notice Calculates the amount of stETH shares an amount of stETH tokens\n         are currently worth.\n @param _ethAmount The amount of stETH tokens to convert.\n @return The amount of stETH shares that the stETH tokens are worth."
                        },
                        "functionSelector": "19208451",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getSharesByPooledEth",
                        "nameLocation": "1613:20:95",
                        "parameters": {
                            "id": 11426,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11425,
                                    "mutability": "mutable",
                                    "name": "_ethAmount",
                                    "nameLocation": "1651:10:95",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11430,
                                    "src": "1643:18:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11424,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1643:7:95",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1633:34:95"
                        },
                        "returnParameters": {
                            "id": 11429,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11428,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11430,
                                    "src": "1691:7:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11427,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1691:7:95",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1690:9:95"
                        },
                        "scope": 11465,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11438,
                        "nodeType": "FunctionDefinition",
                        "src": "1967:99:95",
                        "nodes": [],
                        "documentation": {
                            "id": 11431,
                            "nodeType": "StructuredDocumentation",
                            "src": "1706:256:95",
                            "text": "@notice Calculates the amount of stETH tokens an amount of stETH shares\n         are currently worth.\n @param _sharesAmount The amount of stETH shares to convert.\n @return The amount of stETH tokens that the stETH shares are worth."
                        },
                        "functionSelector": "7a28fb88",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getPooledEthByShares",
                        "nameLocation": "1976:20:95",
                        "parameters": {
                            "id": 11434,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11433,
                                    "mutability": "mutable",
                                    "name": "_sharesAmount",
                                    "nameLocation": "2014:13:95",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11438,
                                    "src": "2006:21:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11432,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2006:7:95",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1996:37:95"
                        },
                        "returnParameters": {
                            "id": 11437,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11436,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11438,
                                    "src": "2057:7:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11435,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2057:7:95",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2056:9:95"
                        },
                        "scope": 11465,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11444,
                        "nodeType": "FunctionDefinition",
                        "src": "2247:60:95",
                        "nodes": [],
                        "documentation": {
                            "id": 11439,
                            "nodeType": "StructuredDocumentation",
                            "src": "2072:170:95",
                            "text": "@notice Gets the total amount of ether that is buffered and waiting\n         to be staked underlying stETH.\n @return The total amount of buffered ether."
                        },
                        "functionSelector": "47b714e0",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBufferedEther",
                        "nameLocation": "2256:16:95",
                        "parameters": {
                            "id": 11440,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2272:2:95"
                        },
                        "returnParameters": {
                            "id": 11443,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11442,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11444,
                                    "src": "2298:7:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11441,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2298:7:95",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2297:9:95"
                        },
                        "scope": 11465,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11450,
                        "nodeType": "FunctionDefinition",
                        "src": "2435:63:95",
                        "nodes": [],
                        "documentation": {
                            "id": 11445,
                            "nodeType": "StructuredDocumentation",
                            "src": "2313:117:95",
                            "text": "@notice Gets the total amount of pooled ether underlying stETH.\n @return The total amount of pooled ether."
                        },
                        "functionSelector": "37cfdaca",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalPooledEther",
                        "nameLocation": "2444:19:95",
                        "parameters": {
                            "id": 11446,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2463:2:95"
                        },
                        "returnParameters": {
                            "id": 11449,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11448,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11450,
                                    "src": "2489:7:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11447,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2489:7:95",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2488:9:95"
                        },
                        "scope": 11465,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11456,
                        "nodeType": "FunctionDefinition",
                        "src": "2609:58:95",
                        "nodes": [],
                        "documentation": {
                            "id": 11451,
                            "nodeType": "StructuredDocumentation",
                            "src": "2504:100:95",
                            "text": "@notice Gets the total amount of stETH shares.\n @return The total amount of stETH shares."
                        },
                        "functionSelector": "d5002f2e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalShares",
                        "nameLocation": "2618:14:95",
                        "parameters": {
                            "id": 11452,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2632:2:95"
                        },
                        "returnParameters": {
                            "id": 11455,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11454,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11456,
                                    "src": "2658:7:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11453,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2658:7:95",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2657:9:95"
                        },
                        "scope": 11465,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11464,
                        "nodeType": "FunctionDefinition",
                        "src": "2845:68:95",
                        "nodes": [],
                        "documentation": {
                            "id": 11457,
                            "nodeType": "StructuredDocumentation",
                            "src": "2673:107:95",
                            "text": "@notice Gets the amount of shares owned by an account.\n @param _account The owner of the shares."
                        },
                        "functionSelector": "f5eb42dc",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "sharesOf",
                        "nameLocation": "2854:8:95",
                        "parameters": {
                            "id": 11460,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11459,
                                    "mutability": "mutable",
                                    "name": "_account",
                                    "nameLocation": "2871:8:95",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11464,
                                    "src": "2863:16:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11458,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2863:7:95",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2862:18:95"
                        },
                        "returnParameters": {
                            "id": 11463,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11462,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11464,
                                    "src": "2904:7:95",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11461,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2904:7:95",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2903:9:95"
                        },
                        "scope": 11465,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 11391,
                            "name": "IERC20",
                            "nameLocations": [
                                "123:6:95"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 9810,
                            "src": "123:6:95"
                        },
                        "id": 11392,
                        "nodeType": "InheritanceSpecifier",
                        "src": "123:6:95"
                    }
                ],
                "canonicalName": "ILido",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    11465,
                    9810
                ],
                "name": "ILido",
                "nameLocation": "114:5:95",
                "scope": 11466,
                "usedErrors": [],
                "usedEvents": [
                    9726,
                    9735
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 95
};
