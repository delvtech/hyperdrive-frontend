export const IERC20 = {
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
        "name()": "06fdde03",
        "symbol()": "95d89b41",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"approve(address,uint256)\":{\"params\":{\"amount\":\"The new allowance of the spender.\",\"spender\":\"The account with the allowance.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the approval succeeded.\"}},\"balanceOf(address)\":{\"params\":{\"account\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The account's balance.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The token's decimals.\"}},\"name()\":{\"returns\":{\"_0\":\"The token's name.\"}},\"symbol()\":{\"returns\":{\"_0\":\"The token's symbol.\"}},\"totalSupply()\":{\"returns\":{\"_0\":\"The token's total supply.\"}},\"transfer(address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}},\"transferFrom(address,address,uint256)\":{\"params\":{\"amount\":\"The amount of tokens that will be transferred.\",\"from\":\"The owner of the tokens.\",\"to\":\"The recipient of the tokens.\"},\"returns\":{\"_0\":\"A flag indicating whether or not the transfer succeeded.\"}}},\"version\":1},\"userdoc\":{\"events\":{\"Approval(address,address,uint256)\":{\"notice\":\"Emitted when an owner changes the approval for a spender.\"},\"Transfer(address,address,uint256)\":{\"notice\":\"Emitted when tokens are transferred from one account to another.\"}},\"kind\":\"user\",\"methods\":{\"allowance(address,address)\":{\"notice\":\"Gets the allowance of a spender for an owner.\"},\"approve(address,uint256)\":{\"notice\":\"Updates the allowance of a spender on behalf of the sender.\"},\"balanceOf(address)\":{\"notice\":\"Gets the balance of an account.\"},\"decimals()\":{\"notice\":\"Gets the token's decimals.\"},\"name()\":{\"notice\":\"Gets the token's name.\"},\"symbol()\":{\"notice\":\"Gets the token's symbol.\"},\"totalSupply()\":{\"notice\":\"Gets the token's total supply.\"},\"transfer(address,uint256)\":{\"notice\":\"Transfers tokens from the sender's account to another account.\"},\"transferFrom(address,address,uint256)\":{\"notice\":\"Transfers tokens from an owner to a recipient. This draws from         the sender's allowance.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC20.sol\":\"IERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]}},\"version\":1}",
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
                    "name()": {
                        "returns": {
                            "_0": "The token's name."
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
                    "name()": {
                        "notice": "Gets the token's name."
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
                "contracts/src/interfaces/IERC20.sol": "IERC20"
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
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "id": 9981,
        "exportedSymbols": {
            "IERC20": [
                9980
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:2650:79",
        "nodes": [
            {
                "id": 9887,
                "nodeType": "PragmaDirective",
                "src": "39:23:79",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 9980,
                "nodeType": "ContractDefinition",
                "src": "64:2624:79",
                "nodes": [
                    {
                        "id": 9896,
                        "nodeType": "EventDefinition",
                        "src": "168:72:79",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 9888,
                            "nodeType": "StructuredDocumentation",
                            "src": "87:76:79",
                            "text": "@notice Emitted when tokens are transferred from one account to another."
                        },
                        "eventSelector": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                        "name": "Transfer",
                        "nameLocation": "174:8:79",
                        "parameters": {
                            "id": 9895,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9890,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "199:4:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9896,
                                    "src": "183:20:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9889,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "183:7:79",
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
                                    "id": 9892,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "221:2:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9896,
                                    "src": "205:18:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9891,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "205:7:79",
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
                                    "id": 9894,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "233:5:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9896,
                                    "src": "225:13:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9893,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "225:7:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "182:57:79"
                        }
                    },
                    {
                        "id": 9905,
                        "nodeType": "EventDefinition",
                        "src": "320:108:79",
                        "nodes": [],
                        "anonymous": false,
                        "documentation": {
                            "id": 9897,
                            "nodeType": "StructuredDocumentation",
                            "src": "246:69:79",
                            "text": "@notice Emitted when an owner changes the approval for a spender."
                        },
                        "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
                        "name": "Approval",
                        "nameLocation": "326:8:79",
                        "parameters": {
                            "id": 9904,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9899,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "360:5:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9905,
                                    "src": "344:21:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9898,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "344:7:79",
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
                                    "id": 9901,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "391:7:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9905,
                                    "src": "375:23:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9900,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "375:7:79",
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
                                    "id": 9903,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "416:5:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9905,
                                    "src": "408:13:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9902,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "408:7:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "334:93:79"
                        }
                    },
                    {
                        "id": 9915,
                        "nodeType": "FunctionDefinition",
                        "src": "694:74:79",
                        "nodes": [],
                        "documentation": {
                            "id": 9906,
                            "nodeType": "StructuredDocumentation",
                            "src": "434:255:79",
                            "text": "@notice Updates the allowance of a spender on behalf of the sender.\n @param spender The account with the allowance.\n @param amount The new allowance of the spender.\n @return A flag indicating whether or not the approval succeeded."
                        },
                        "functionSelector": "095ea7b3",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "approve",
                        "nameLocation": "703:7:79",
                        "parameters": {
                            "id": 9911,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9908,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "719:7:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9915,
                                    "src": "711:15:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9907,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "711:7:79",
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
                                    "id": 9910,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "736:6:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9915,
                                    "src": "728:14:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9909,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "728:7:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "710:33:79"
                        },
                        "returnParameters": {
                            "id": 9914,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9913,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9915,
                                    "src": "762:4:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 9912,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "762:4:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "761:6:79"
                        },
                        "scope": 9980,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 9925,
                        "nodeType": "FunctionDefinition",
                        "src": "1042:70:79",
                        "nodes": [],
                        "documentation": {
                            "id": 9916,
                            "nodeType": "StructuredDocumentation",
                            "src": "774:263:79",
                            "text": "@notice Transfers tokens from the sender's account to another account.\n @param to The recipient of the tokens.\n @param amount The amount of tokens that will be transferred.\n @return A flag indicating whether or not the transfer succeeded."
                        },
                        "functionSelector": "a9059cbb",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transfer",
                        "nameLocation": "1051:8:79",
                        "parameters": {
                            "id": 9921,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9918,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1068:2:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9925,
                                    "src": "1060:10:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9917,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1060:7:79",
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
                                    "id": 9920,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1080:6:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9925,
                                    "src": "1072:14:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9919,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1072:7:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1059:28:79"
                        },
                        "returnParameters": {
                            "id": 9924,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9923,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9925,
                                    "src": "1106:4:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 9922,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1106:4:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1105:6:79"
                        },
                        "scope": 9980,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 9937,
                        "nodeType": "FunctionDefinition",
                        "src": "1471:118:79",
                        "nodes": [],
                        "documentation": {
                            "id": 9926,
                            "nodeType": "StructuredDocumentation",
                            "src": "1118:348:79",
                            "text": "@notice Transfers tokens from an owner to a recipient. This draws from\n         the sender's allowance.\n @param from The owner of the tokens.\n @param to The recipient of the tokens.\n @param amount The amount of tokens that will be transferred.\n @return A flag indicating whether or not the transfer succeeded."
                        },
                        "functionSelector": "23b872dd",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferFrom",
                        "nameLocation": "1480:12:79",
                        "parameters": {
                            "id": 9933,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9928,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "1510:4:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9937,
                                    "src": "1502:12:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9927,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1502:7:79",
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
                                    "id": 9930,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "1532:2:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9937,
                                    "src": "1524:10:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9929,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1524:7:79",
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
                                    "id": 9932,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "1552:6:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9937,
                                    "src": "1544:14:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9931,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1544:7:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1492:72:79"
                        },
                        "returnParameters": {
                            "id": 9936,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9935,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9937,
                                    "src": "1583:4:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 9934,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1583:4:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1582:6:79"
                        },
                        "scope": 9980,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 9943,
                        "nodeType": "FunctionDefinition",
                        "src": "1668:54:79",
                        "nodes": [],
                        "documentation": {
                            "id": 9938,
                            "nodeType": "StructuredDocumentation",
                            "src": "1595:68:79",
                            "text": "@notice Gets the token's name.\n @return The token's name."
                        },
                        "functionSelector": "06fdde03",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "name",
                        "nameLocation": "1677:4:79",
                        "parameters": {
                            "id": 9939,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1681:2:79"
                        },
                        "returnParameters": {
                            "id": 9942,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9941,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9943,
                                    "src": "1707:13:79",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 9940,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1707:6:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1706:15:79"
                        },
                        "scope": 9980,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 9949,
                        "nodeType": "FunctionDefinition",
                        "src": "1805:56:79",
                        "nodes": [],
                        "documentation": {
                            "id": 9944,
                            "nodeType": "StructuredDocumentation",
                            "src": "1728:72:79",
                            "text": "@notice Gets the token's symbol.\n @return The token's symbol."
                        },
                        "functionSelector": "95d89b41",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "symbol",
                        "nameLocation": "1814:6:79",
                        "parameters": {
                            "id": 9945,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1820:2:79"
                        },
                        "returnParameters": {
                            "id": 9948,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9947,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9949,
                                    "src": "1846:13:79",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 9946,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1846:6:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1845:15:79"
                        },
                        "scope": 9980,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 9955,
                        "nodeType": "FunctionDefinition",
                        "src": "1948:50:79",
                        "nodes": [],
                        "documentation": {
                            "id": 9950,
                            "nodeType": "StructuredDocumentation",
                            "src": "1867:76:79",
                            "text": "@notice Gets the token's decimals.\n @return The token's decimals."
                        },
                        "functionSelector": "313ce567",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decimals",
                        "nameLocation": "1957:8:79",
                        "parameters": {
                            "id": 9951,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1965:2:79"
                        },
                        "returnParameters": {
                            "id": 9954,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9953,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9955,
                                    "src": "1991:5:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 9952,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1991:5:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1990:7:79"
                        },
                        "scope": 9980,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 9961,
                        "nodeType": "FunctionDefinition",
                        "src": "2093:55:79",
                        "nodes": [],
                        "documentation": {
                            "id": 9956,
                            "nodeType": "StructuredDocumentation",
                            "src": "2004:84:79",
                            "text": "@notice Gets the token's total supply.\n @return The token's total supply."
                        },
                        "functionSelector": "18160ddd",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nameLocation": "2102:11:79",
                        "parameters": {
                            "id": 9957,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2113:2:79"
                        },
                        "returnParameters": {
                            "id": 9960,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9959,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9961,
                                    "src": "2139:7:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9958,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2139:7:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2138:9:79"
                        },
                        "scope": 9980,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 9971,
                        "nodeType": "FunctionDefinition",
                        "src": "2372:105:79",
                        "nodes": [],
                        "documentation": {
                            "id": 9962,
                            "nodeType": "StructuredDocumentation",
                            "src": "2154:213:79",
                            "text": "@notice Gets the allowance of a spender for an owner.\n @param owner The owner of the tokens.\n @param spender The spender of the tokens.\n @return The allowance of the spender for the owner."
                        },
                        "functionSelector": "dd62ed3e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "allowance",
                        "nameLocation": "2381:9:79",
                        "parameters": {
                            "id": 9967,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9964,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "2408:5:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9971,
                                    "src": "2400:13:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9963,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2400:7:79",
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
                                    "id": 9966,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "2431:7:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9971,
                                    "src": "2423:15:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9965,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2423:7:79",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2390:54:79"
                        },
                        "returnParameters": {
                            "id": 9970,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9969,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9971,
                                    "src": "2468:7:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9968,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2468:7:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2467:9:79"
                        },
                        "scope": 9980,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 9979,
                        "nodeType": "FunctionDefinition",
                        "src": "2618:68:79",
                        "nodes": [],
                        "documentation": {
                            "id": 9972,
                            "nodeType": "StructuredDocumentation",
                            "src": "2483:130:79",
                            "text": "@notice Gets the balance of an account.\n @param account The owner of the tokens.\n @return The account's balance."
                        },
                        "functionSelector": "70a08231",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nameLocation": "2627:9:79",
                        "parameters": {
                            "id": 9975,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9974,
                                    "mutability": "mutable",
                                    "name": "account",
                                    "nameLocation": "2645:7:79",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9979,
                                    "src": "2637:15:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 9973,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2637:7:79",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2636:17:79"
                        },
                        "returnParameters": {
                            "id": 9978,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 9977,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 9979,
                                    "src": "2677:7:79",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 9976,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2677:7:79",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2676:9:79"
                        },
                        "scope": 9980,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IERC20",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    9980
                ],
                "name": "IERC20",
                "nameLocation": "74:6:79",
                "scope": 9981,
                "usedErrors": [],
                "usedEvents": [
                    9896,
                    9905
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 79
};
