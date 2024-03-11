export const ERC20 = {
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
                    "name": "amount",
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
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "Transfer",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "DOMAIN_SEPARATOR",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "",
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
                    "name": "",
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
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "nonces",
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
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "spender",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                },
                {
                    "internalType": "uint8",
                    "name": "v",
                    "type": "uint8"
                },
                {
                    "internalType": "bytes32",
                    "name": "r",
                    "type": "bytes32"
                },
                {
                    "internalType": "bytes32",
                    "name": "s",
                    "type": "bytes32"
                }
            ],
            "name": "permit",
            "outputs": [],
            "stateMutability": "nonpayable",
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
        "DOMAIN_SEPARATOR()": "3644e515",
        "allowance(address,address)": "dd62ed3e",
        "approve(address,uint256)": "095ea7b3",
        "balanceOf(address)": "70a08231",
        "decimals()": "313ce567",
        "name()": "06fdde03",
        "nonces(address)": "7ecebe00",
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": "d505accf",
        "symbol()": "95d89b41",
        "totalSupply()": "18160ddd",
        "transfer(address,uint256)": "a9059cbb",
        "transferFrom(address,address,uint256)": "23b872dd"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol)Modified from Uniswap (https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol)\",\"details\":\"Do not manually set balances without updating totalSupply, as the sum of all user balances must not exceed it.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Modern and gas efficient ERC20 + EIP-2612 implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/tokens/ERC20.sol\":\"ERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]}},\"version\":1}",
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
                            "name": "amount",
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
                            "name": "amount",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "Transfer",
                    "anonymous": false
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "DOMAIN_SEPARATOR",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "",
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
                            "name": "",
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
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "nonces",
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
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "value",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "deadline",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint8",
                            "name": "v",
                            "type": "uint8"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "r",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "s",
                            "type": "bytes32"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "permit"
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
                "methods": {},
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {},
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
                "lib/solmate/src/tokens/ERC20.sol": "ERC20"
            },
            "libraries": {}
        },
        "sources": {
            "lib/solmate/src/tokens/ERC20.sol": {
                "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
                "urls": [
                    "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
                    "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
                ],
                "license": "AGPL-3.0-only"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "id": 67924,
        "exportedSymbols": {
            "ERC20": [
                67923
            ]
        },
        "nodeType": "SourceUnit",
        "src": "42:6770:124",
        "nodes": [
            {
                "id": 67537,
                "nodeType": "PragmaDirective",
                "src": "42:24:124",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.8",
                    ".0"
                ]
            },
            {
                "id": 67923,
                "nodeType": "ContractDefinition",
                "src": "474:6337:124",
                "nodes": [
                    {
                        "id": 67546,
                        "nodeType": "EventDefinition",
                        "src": "683:73:124",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                        "name": "Transfer",
                        "nameLocation": "689:8:124",
                        "parameters": {
                            "id": 67545,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67540,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "714:4:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67546,
                                    "src": "698:20:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67539,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "698:7:124",
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
                                    "id": 67542,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "736:2:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67546,
                                    "src": "720:18:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67541,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "720:7:124",
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
                                    "id": 67544,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "748:6:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67546,
                                    "src": "740:14:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 67543,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "740:7:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "697:58:124"
                        }
                    },
                    {
                        "id": 67554,
                        "nodeType": "EventDefinition",
                        "src": "762:79:124",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
                        "name": "Approval",
                        "nameLocation": "768:8:124",
                        "parameters": {
                            "id": 67553,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67548,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "793:5:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67554,
                                    "src": "777:21:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67547,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "777:7:124",
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
                                    "id": 67550,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "816:7:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67554,
                                    "src": "800:23:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67549,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "800:7:124",
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
                                    "id": 67552,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "833:6:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67554,
                                    "src": "825:14:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 67551,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "825:7:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "776:64:124"
                        }
                    },
                    {
                        "id": 67556,
                        "nodeType": "VariableDeclaration",
                        "src": "1031:18:124",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "06fdde03",
                        "mutability": "mutable",
                        "name": "name",
                        "nameLocation": "1045:4:124",
                        "scope": 67923,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 67555,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1031:6:124",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 67558,
                        "nodeType": "VariableDeclaration",
                        "src": "1056:20:124",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "95d89b41",
                        "mutability": "mutable",
                        "name": "symbol",
                        "nameLocation": "1070:6:124",
                        "scope": 67923,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 67557,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1056:6:124",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 67560,
                        "nodeType": "VariableDeclaration",
                        "src": "1083:31:124",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "313ce567",
                        "mutability": "immutable",
                        "name": "decimals",
                        "nameLocation": "1106:8:124",
                        "scope": 67923,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                        },
                        "typeName": {
                            "id": 67559,
                            "name": "uint8",
                            "nodeType": "ElementaryTypeName",
                            "src": "1083:5:124",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 67562,
                        "nodeType": "VariableDeclaration",
                        "src": "1304:26:124",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "18160ddd",
                        "mutability": "mutable",
                        "name": "totalSupply",
                        "nameLocation": "1319:11:124",
                        "scope": 67923,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 67561,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1304:7:124",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 67566,
                        "nodeType": "VariableDeclaration",
                        "src": "1337:44:124",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "70a08231",
                        "mutability": "mutable",
                        "name": "balanceOf",
                        "nameLocation": "1372:9:124",
                        "scope": 67923,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                        },
                        "typeName": {
                            "id": 67565,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 67563,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1345:7:124",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1337:27:124",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 67564,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1356:7:124",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 67572,
                        "nodeType": "VariableDeclaration",
                        "src": "1388:64:124",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "dd62ed3e",
                        "mutability": "mutable",
                        "name": "allowance",
                        "nameLocation": "1443:9:124",
                        "scope": 67923,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                        },
                        "typeName": {
                            "id": 67571,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 67567,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1396:7:124",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1388:47:124",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 67570,
                                "keyName": "",
                                "keyNameLocation": "-1:-1:-1",
                                "keyType": {
                                    "id": 67568,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1415:7:124",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "1407:27:124",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                },
                                "valueName": "",
                                "valueNameLocation": "-1:-1:-1",
                                "valueType": {
                                    "id": 67569,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1426:7:124",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    }
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 67574,
                        "nodeType": "VariableDeclaration",
                        "src": "1643:43:124",
                        "nodes": [],
                        "constant": false,
                        "mutability": "immutable",
                        "name": "INITIAL_CHAIN_ID",
                        "nameLocation": "1670:16:124",
                        "scope": 67923,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 67573,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1643:7:124",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 67576,
                        "nodeType": "VariableDeclaration",
                        "src": "1693:51:124",
                        "nodes": [],
                        "constant": false,
                        "mutability": "immutable",
                        "name": "INITIAL_DOMAIN_SEPARATOR",
                        "nameLocation": "1720:24:124",
                        "scope": 67923,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 67575,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "1693:7:124",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 67580,
                        "nodeType": "VariableDeclaration",
                        "src": "1751:41:124",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "7ecebe00",
                        "mutability": "mutable",
                        "name": "nonces",
                        "nameLocation": "1786:6:124",
                        "scope": 67923,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                        },
                        "typeName": {
                            "id": 67579,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 67577,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1759:7:124",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1751:27:124",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 67578,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1770:7:124",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 67612,
                        "nodeType": "FunctionDefinition",
                        "src": "1981:292:124",
                        "nodes": [],
                        "body": {
                            "id": 67611,
                            "nodeType": "Block",
                            "src": "2084:189:124",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 67591,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67589,
                                            "name": "name",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67556,
                                            "src": "2094:4:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67590,
                                            "name": "_name",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67582,
                                            "src": "2101:5:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "2094:12:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 67592,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2094:12:124"
                                },
                                {
                                    "expression": {
                                        "id": 67595,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67593,
                                            "name": "symbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67558,
                                            "src": "2116:6:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67594,
                                            "name": "_symbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67584,
                                            "src": "2125:7:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "2116:16:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 67596,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2116:16:124"
                                },
                                {
                                    "expression": {
                                        "id": 67599,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67597,
                                            "name": "decimals",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67560,
                                            "src": "2142:8:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint8",
                                                "typeString": "uint8"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67598,
                                            "name": "_decimals",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67586,
                                            "src": "2153:9:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint8",
                                                "typeString": "uint8"
                                            }
                                        },
                                        "src": "2142:20:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "id": 67600,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2142:20:124"
                                },
                                {
                                    "expression": {
                                        "id": 67604,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67601,
                                            "name": "INITIAL_CHAIN_ID",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67574,
                                            "src": "2173:16:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 67602,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "2192:5:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 67603,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2198:7:124",
                                            "memberName": "chainid",
                                            "nodeType": "MemberAccess",
                                            "src": "2192:13:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2173:32:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 67605,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2173:32:124"
                                },
                                {
                                    "expression": {
                                        "id": 67609,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67606,
                                            "name": "INITIAL_DOMAIN_SEPARATOR",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67576,
                                            "src": "2215:24:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "id": 67607,
                                                "name": "computeDomainSeparator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67866,
                                                "src": "2242:22:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                                    "typeString": "function () view returns (bytes32)"
                                                }
                                            },
                                            "id": 67608,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2242:24:124",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "2215:51:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 67610,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2215:51:124"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 67587,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67582,
                                    "mutability": "mutable",
                                    "name": "_name",
                                    "nameLocation": "2016:5:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67612,
                                    "src": "2002:19:124",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 67581,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2002:6:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67584,
                                    "mutability": "mutable",
                                    "name": "_symbol",
                                    "nameLocation": "2045:7:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67612,
                                    "src": "2031:21:124",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 67583,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2031:6:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67586,
                                    "mutability": "mutable",
                                    "name": "_decimals",
                                    "nameLocation": "2068:9:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67612,
                                    "src": "2062:15:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 67585,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2062:5:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1992:91:124"
                        },
                        "returnParameters": {
                            "id": 67588,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2084:0:124"
                        },
                        "scope": 67923,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 67640,
                        "nodeType": "FunctionDefinition",
                        "src": "2461:211:124",
                        "nodes": [],
                        "body": {
                            "id": 67639,
                            "nodeType": "Block",
                            "src": "2541:131:124",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 67628,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "baseExpression": {
                                                    "id": 67621,
                                                    "name": "allowance",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67572,
                                                    "src": "2551:9:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                        "typeString": "mapping(address => mapping(address => uint256))"
                                                    }
                                                },
                                                "id": 67625,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 67622,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "2561:3:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 67623,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2565:6:124",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "2561:10:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "2551:21:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                    "typeString": "mapping(address => uint256)"
                                                }
                                            },
                                            "id": 67626,
                                            "indexExpression": {
                                                "id": 67624,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67614,
                                                "src": "2573:7:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "2551:30:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67627,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67616,
                                            "src": "2584:6:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2551:39:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 67629,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2551:39:124"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 67631,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2615:3:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 67632,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2619:6:124",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2615:10:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67633,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67614,
                                                "src": "2627:7:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67634,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67616,
                                                "src": "2636:6:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 67630,
                                            "name": "Approval",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67554,
                                            "src": "2606:8:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 67635,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2606:37:124",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67636,
                                    "nodeType": "EmitStatement",
                                    "src": "2601:42:124"
                                },
                                {
                                    "expression": {
                                        "hexValue": "74727565",
                                        "id": 67637,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2661:4:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 67620,
                                    "id": 67638,
                                    "nodeType": "Return",
                                    "src": "2654:11:124"
                                }
                            ]
                        },
                        "functionSelector": "095ea7b3",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "approve",
                        "nameLocation": "2470:7:124",
                        "parameters": {
                            "id": 67617,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67614,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "2486:7:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67640,
                                    "src": "2478:15:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67613,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2478:7:124",
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
                                    "id": 67616,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "2503:6:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67640,
                                    "src": "2495:14:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 67615,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2495:7:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2477:33:124"
                        },
                        "returnParameters": {
                            "id": 67620,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67619,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67640,
                                    "src": "2535:4:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 67618,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2535:4:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2534:6:124"
                        },
                        "scope": 67923,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 67673,
                        "nodeType": "FunctionDefinition",
                        "src": "2678:373:124",
                        "nodes": [],
                        "body": {
                            "id": 67672,
                            "nodeType": "Block",
                            "src": "2754:297:124",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 67654,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 67649,
                                                "name": "balanceOf",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67566,
                                                "src": "2764:9:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                    "typeString": "mapping(address => uint256)"
                                                }
                                            },
                                            "id": 67652,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 67650,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2774:3:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 67651,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2778:6:124",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2774:10:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "2764:21:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 67653,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67644,
                                            "src": "2789:6:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2764:31:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 67655,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2764:31:124"
                                },
                                {
                                    "id": 67662,
                                    "nodeType": "UncheckedBlock",
                                    "src": "2917:58:124",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 67660,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "baseExpression": {
                                                        "id": 67656,
                                                        "name": "balanceOf",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67566,
                                                        "src": "2941:9:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 67658,
                                                    "indexExpression": {
                                                        "id": 67657,
                                                        "name": "to",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67642,
                                                        "src": "2951:2:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "nodeType": "IndexAccess",
                                                    "src": "2941:13:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "+=",
                                                "rightHandSide": {
                                                    "id": 67659,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67644,
                                                    "src": "2958:6:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2941:23:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 67661,
                                            "nodeType": "ExpressionStatement",
                                            "src": "2941:23:124"
                                        }
                                    ]
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 67664,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2999:3:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 67665,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3003:6:124",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2999:10:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67666,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67642,
                                                "src": "3011:2:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67667,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67644,
                                                "src": "3015:6:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 67663,
                                            "name": "Transfer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67546,
                                            "src": "2990:8:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 67668,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2990:32:124",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67669,
                                    "nodeType": "EmitStatement",
                                    "src": "2985:37:124"
                                },
                                {
                                    "expression": {
                                        "hexValue": "74727565",
                                        "id": 67670,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3040:4:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 67648,
                                    "id": 67671,
                                    "nodeType": "Return",
                                    "src": "3033:11:124"
                                }
                            ]
                        },
                        "functionSelector": "a9059cbb",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transfer",
                        "nameLocation": "2687:8:124",
                        "parameters": {
                            "id": 67645,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67642,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "2704:2:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67673,
                                    "src": "2696:10:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67641,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2696:7:124",
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
                                    "id": 67644,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "2716:6:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67673,
                                    "src": "2708:14:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 67643,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2708:7:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2695:28:124"
                        },
                        "returnParameters": {
                            "id": 67648,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67647,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67673,
                                    "src": "2748:4:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 67646,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2748:4:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2747:6:124"
                        },
                        "scope": 67923,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 67734,
                        "nodeType": "FunctionDefinition",
                        "src": "3057:592:124",
                        "nodes": [],
                        "body": {
                            "id": 67733,
                            "nodeType": "Block",
                            "src": "3181:468:124",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        67685
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 67685,
                                            "mutability": "mutable",
                                            "name": "allowed",
                                            "nameLocation": "3199:7:124",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 67733,
                                            "src": "3191:15:124",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 67684,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3191:7:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 67692,
                                    "initialValue": {
                                        "baseExpression": {
                                            "baseExpression": {
                                                "id": 67686,
                                                "name": "allowance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67572,
                                                "src": "3209:9:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                    "typeString": "mapping(address => mapping(address => uint256))"
                                                }
                                            },
                                            "id": 67688,
                                            "indexExpression": {
                                                "id": 67687,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67675,
                                                "src": "3219:4:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "3209:15:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                "typeString": "mapping(address => uint256)"
                                            }
                                        },
                                        "id": 67691,
                                        "indexExpression": {
                                            "expression": {
                                                "id": 67689,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "3225:3:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 67690,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3229:6:124",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "3225:10:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "3209:27:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3191:45:124"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 67699,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 67693,
                                            "name": "allowed",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67685,
                                            "src": "3287:7:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "id": 67696,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "3303:7:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        },
                                                        "typeName": {
                                                            "id": 67695,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "3303:7:124",
                                                            "typeDescriptions": {}
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        }
                                                    ],
                                                    "id": 67694,
                                                    "name": "type",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -27,
                                                    "src": "3298:4:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                        "typeString": "function () pure"
                                                    }
                                                },
                                                "id": 67697,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3298:13:124",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_meta_type_t_uint256",
                                                    "typeString": "type(uint256)"
                                                }
                                            },
                                            "id": 67698,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberLocation": "3312:3:124",
                                            "memberName": "max",
                                            "nodeType": "MemberAccess",
                                            "src": "3298:17:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3287:28:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 67711,
                                    "nodeType": "IfStatement",
                                    "src": "3283:80:124",
                                    "trueBody": {
                                        "expression": {
                                            "id": 67709,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "baseExpression": {
                                                    "baseExpression": {
                                                        "id": 67700,
                                                        "name": "allowance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67572,
                                                        "src": "3317:9:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                            "typeString": "mapping(address => mapping(address => uint256))"
                                                        }
                                                    },
                                                    "id": 67704,
                                                    "indexExpression": {
                                                        "id": 67701,
                                                        "name": "from",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67675,
                                                        "src": "3327:4:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "3317:15:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                        "typeString": "mapping(address => uint256)"
                                                    }
                                                },
                                                "id": 67705,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 67702,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "3333:3:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 67703,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3337:6:124",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "3333:10:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "nodeType": "IndexAccess",
                                                "src": "3317:27:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 67708,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 67706,
                                                    "name": "allowed",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67685,
                                                    "src": "3347:7:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "id": 67707,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67679,
                                                    "src": "3357:6:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3347:16:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3317:46:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 67710,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3317:46:124"
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 67716,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 67712,
                                                "name": "balanceOf",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67566,
                                                "src": "3374:9:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                    "typeString": "mapping(address => uint256)"
                                                }
                                            },
                                            "id": 67714,
                                            "indexExpression": {
                                                "id": 67713,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67675,
                                                "src": "3384:4:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "3374:15:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 67715,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67679,
                                            "src": "3393:6:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3374:25:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 67717,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3374:25:124"
                                },
                                {
                                    "id": 67724,
                                    "nodeType": "UncheckedBlock",
                                    "src": "3521:58:124",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 67722,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "baseExpression": {
                                                        "id": 67718,
                                                        "name": "balanceOf",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67566,
                                                        "src": "3545:9:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 67720,
                                                    "indexExpression": {
                                                        "id": 67719,
                                                        "name": "to",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67677,
                                                        "src": "3555:2:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "nodeType": "IndexAccess",
                                                    "src": "3545:13:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "+=",
                                                "rightHandSide": {
                                                    "id": 67721,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67679,
                                                    "src": "3562:6:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3545:23:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 67723,
                                            "nodeType": "ExpressionStatement",
                                            "src": "3545:23:124"
                                        }
                                    ]
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 67726,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67675,
                                                "src": "3603:4:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67727,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67677,
                                                "src": "3609:2:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67728,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67679,
                                                "src": "3613:6:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 67725,
                                            "name": "Transfer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67546,
                                            "src": "3594:8:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 67729,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3594:26:124",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67730,
                                    "nodeType": "EmitStatement",
                                    "src": "3589:31:124"
                                },
                                {
                                    "expression": {
                                        "hexValue": "74727565",
                                        "id": 67731,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3638:4:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 67683,
                                    "id": 67732,
                                    "nodeType": "Return",
                                    "src": "3631:11:124"
                                }
                            ]
                        },
                        "functionSelector": "23b872dd",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferFrom",
                        "nameLocation": "3066:12:124",
                        "parameters": {
                            "id": 67680,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67675,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "3096:4:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67734,
                                    "src": "3088:12:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67674,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3088:7:124",
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
                                    "id": 67677,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "3118:2:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67734,
                                    "src": "3110:10:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67676,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3110:7:124",
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
                                    "id": 67679,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "3138:6:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67734,
                                    "src": "3130:14:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 67678,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3130:7:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3078:72:124"
                        },
                        "returnParameters": {
                            "id": 67683,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67682,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67734,
                                    "src": "3175:4:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 67681,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3175:4:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3174:6:124"
                        },
                        "scope": 67923,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 67821,
                        "nodeType": "FunctionDefinition",
                        "src": "3838:1483:124",
                        "nodes": [],
                        "body": {
                            "id": 67820,
                            "nodeType": "Block",
                            "src": "4027:1294:124",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 67755,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 67752,
                                                    "name": "deadline",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67742,
                                                    "src": "4045:8:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "expression": {
                                                        "id": 67753,
                                                        "name": "block",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -4,
                                                        "src": "4057:5:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_block",
                                                            "typeString": "block"
                                                        }
                                                    },
                                                    "id": 67754,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4063:9:124",
                                                    "memberName": "timestamp",
                                                    "nodeType": "MemberAccess",
                                                    "src": "4057:15:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "4045:27:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "5045524d49545f444541444c494e455f45585049524544",
                                                "id": 67756,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4074:25:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_dd18cfd81b4c1281b56302a044e7f751a261543590362c41d86af048f8ed4b3e",
                                                    "typeString": "literal_string \"PERMIT_DEADLINE_EXPIRED\""
                                                },
                                                "value": "PERMIT_DEADLINE_EXPIRED"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_dd18cfd81b4c1281b56302a044e7f751a261543590362c41d86af048f8ed4b3e",
                                                    "typeString": "literal_string \"PERMIT_DEADLINE_EXPIRED\""
                                                }
                                            ],
                                            "id": 67751,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4037:7:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 67757,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4037:63:124",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67758,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4037:63:124"
                                },
                                {
                                    "id": 67813,
                                    "nodeType": "UncheckedBlock",
                                    "src": "4241:1027:124",
                                    "statements": [
                                        {
                                            "assignments": [
                                                67760
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 67760,
                                                    "mutability": "mutable",
                                                    "name": "recoveredAddress",
                                                    "nameLocation": "4273:16:124",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 67813,
                                                    "src": "4265:24:124",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "typeName": {
                                                        "id": 67759,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4265:7:124",
                                                        "stateMutability": "nonpayable",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 67790,
                                            "initialValue": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "1901",
                                                                        "id": 67765,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "4392:10:124",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_301a50b291d33ce1e8e9064e3f6a6c51d902ec22892b50d58abf6357c6a45541",
                                                                            "typeString": "literal_string hex\"1901\""
                                                                        },
                                                                        "value": "\u0019\u0001"
                                                                    },
                                                                    {
                                                                        "arguments": [],
                                                                        "expression": {
                                                                            "argumentTypes": [],
                                                                            "id": 67766,
                                                                            "name": "DOMAIN_SEPARATOR",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 67836,
                                                                            "src": "4428:16:124",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                                                                "typeString": "function () view returns (bytes32)"
                                                                            }
                                                                        },
                                                                        "id": 67767,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "4428:18:124",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes32",
                                                                            "typeString": "bytes32"
                                                                        }
                                                                    },
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "arguments": [
                                                                                    {
                                                                                        "arguments": [
                                                                                            {
                                                                                                "hexValue": "5065726d69742861646472657373206f776e65722c61646472657373207370656e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63652c75696e7432353620646561646c696e6529",
                                                                                                "id": 67772,
                                                                                                "isConstant": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": true,
                                                                                                "kind": "string",
                                                                                                "lValueRequested": false,
                                                                                                "nodeType": "Literal",
                                                                                                "src": "4602:84:124",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_stringliteral_6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9",
                                                                                                    "typeString": "literal_string \"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)\""
                                                                                                },
                                                                                                "value": "Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)"
                                                                                            }
                                                                                        ],
                                                                                        "expression": {
                                                                                            "argumentTypes": [
                                                                                                {
                                                                                                    "typeIdentifier": "t_stringliteral_6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9",
                                                                                                    "typeString": "literal_string \"Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)\""
                                                                                                }
                                                                                            ],
                                                                                            "id": 67771,
                                                                                            "name": "keccak256",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": -8,
                                                                                            "src": "4555:9:124",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                                            }
                                                                                        },
                                                                                        "id": 67773,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "4555:165:124",
                                                                                        "tryCall": false,
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_bytes32",
                                                                                            "typeString": "bytes32"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "id": 67774,
                                                                                        "name": "owner",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 67736,
                                                                                        "src": "4754:5:124",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_address",
                                                                                            "typeString": "address"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "id": 67775,
                                                                                        "name": "spender",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 67738,
                                                                                        "src": "4793:7:124",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_address",
                                                                                            "typeString": "address"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "id": 67776,
                                                                                        "name": "value",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 67740,
                                                                                        "src": "4834:5:124",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "id": 67780,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "UnaryOperation",
                                                                                        "operator": "++",
                                                                                        "prefix": false,
                                                                                        "src": "4873:15:124",
                                                                                        "subExpression": {
                                                                                            "baseExpression": {
                                                                                                "id": 67777,
                                                                                                "name": "nonces",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 67580,
                                                                                                "src": "4873:6:124",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                                                    "typeString": "mapping(address => uint256)"
                                                                                                }
                                                                                            },
                                                                                            "id": 67779,
                                                                                            "indexExpression": {
                                                                                                "id": 67778,
                                                                                                "name": "owner",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 67736,
                                                                                                "src": "4880:5:124",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_address",
                                                                                                    "typeString": "address"
                                                                                                }
                                                                                            },
                                                                                            "isConstant": false,
                                                                                            "isLValue": true,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": true,
                                                                                            "nodeType": "IndexAccess",
                                                                                            "src": "4873:13:124",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_uint256",
                                                                                                "typeString": "uint256"
                                                                                            }
                                                                                        },
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "id": 67781,
                                                                                        "name": "deadline",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 67742,
                                                                                        "src": "4922:8:124",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    }
                                                                                ],
                                                                                "expression": {
                                                                                    "argumentTypes": [
                                                                                        {
                                                                                            "typeIdentifier": "t_bytes32",
                                                                                            "typeString": "bytes32"
                                                                                        },
                                                                                        {
                                                                                            "typeIdentifier": "t_address",
                                                                                            "typeString": "address"
                                                                                        },
                                                                                        {
                                                                                            "typeIdentifier": "t_address",
                                                                                            "typeString": "address"
                                                                                        },
                                                                                        {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        },
                                                                                        {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        },
                                                                                        {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    ],
                                                                                    "expression": {
                                                                                        "id": 67769,
                                                                                        "name": "abi",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": -1,
                                                                                        "src": "4511:3:124",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_magic_abi",
                                                                                            "typeString": "abi"
                                                                                        }
                                                                                    },
                                                                                    "id": 67770,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "memberLocation": "4515:6:124",
                                                                                    "memberName": "encode",
                                                                                    "nodeType": "MemberAccess",
                                                                                    "src": "4511:10:124",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                        "typeString": "function () pure returns (bytes memory)"
                                                                                    }
                                                                                },
                                                                                "id": 67782,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "4511:449:124",
                                                                                "tryCall": false,
                                                                                "typeDescriptions": {
                                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                                    "typeString": "bytes memory"
                                                                                }
                                                                            }
                                                                        ],
                                                                        "expression": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                                    "typeString": "bytes memory"
                                                                                }
                                                                            ],
                                                                            "id": 67768,
                                                                            "name": "keccak256",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": -8,
                                                                            "src": "4472:9:124",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                            }
                                                                        },
                                                                        "id": 67783,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "4472:514:124",
                                                                        "tryCall": false,
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_bytes32",
                                                                            "typeString": "bytes32"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_stringliteral_301a50b291d33ce1e8e9064e3f6a6c51d902ec22892b50d58abf6357c6a45541",
                                                                            "typeString": "literal_string hex\"1901\""
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_bytes32",
                                                                            "typeString": "bytes32"
                                                                        },
                                                                        {
                                                                            "typeIdentifier": "t_bytes32",
                                                                            "typeString": "bytes32"
                                                                        }
                                                                    ],
                                                                    "expression": {
                                                                        "id": 67763,
                                                                        "name": "abi",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -1,
                                                                        "src": "4350:3:124",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_abi",
                                                                            "typeString": "abi"
                                                                        }
                                                                    },
                                                                    "id": 67764,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "4354:12:124",
                                                                    "memberName": "encodePacked",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "4350:16:124",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                        "typeString": "function () pure returns (bytes memory)"
                                                                    }
                                                                },
                                                                "id": 67784,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4350:658:124",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            ],
                                                            "id": 67762,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "4319:9:124",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 67785,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4319:707:124",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "id": 67786,
                                                        "name": "v",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67744,
                                                        "src": "5044:1:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint8",
                                                            "typeString": "uint8"
                                                        }
                                                    },
                                                    {
                                                        "id": 67787,
                                                        "name": "r",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67746,
                                                        "src": "5063:1:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "id": 67788,
                                                        "name": "s",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67748,
                                                        "src": "5082:1:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_uint8",
                                                            "typeString": "uint8"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    ],
                                                    "id": 67761,
                                                    "name": "ecrecover",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -6,
                                                    "src": "4292:9:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_ecrecover_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$",
                                                        "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address)"
                                                    }
                                                },
                                                "id": 67789,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4292:805:124",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "4265:832:124"
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "id": 67801,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            "id": 67797,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 67792,
                                                                "name": "recoveredAddress",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 67760,
                                                                "src": "5120:16:124",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "!=",
                                                            "rightExpression": {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "30",
                                                                        "id": 67795,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "5148:1:124",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_rational_0_by_1",
                                                                            "typeString": "int_const 0"
                                                                        },
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_rational_0_by_1",
                                                                            "typeString": "int_const 0"
                                                                        }
                                                                    ],
                                                                    "id": 67794,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "5140:7:124",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 67793,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "5140:7:124",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 67796,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "5140:10:124",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "src": "5120:30:124",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "&&",
                                                        "rightExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            "id": 67800,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 67798,
                                                                "name": "recoveredAddress",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 67760,
                                                                "src": "5154:16:124",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "==",
                                                            "rightExpression": {
                                                                "id": 67799,
                                                                "name": "owner",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 67736,
                                                                "src": "5174:5:124",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "src": "5154:25:124",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "src": "5120:59:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    {
                                                        "hexValue": "494e56414c49445f5349474e4552",
                                                        "id": 67802,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "5181:16:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_stringliteral_ba2319f5fa9f0c8e55f0d6899910b7354e6f643d1d349de47190066d85e68a1c",
                                                            "typeString": "literal_string \"INVALID_SIGNER\""
                                                        },
                                                        "value": "INVALID_SIGNER"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_stringliteral_ba2319f5fa9f0c8e55f0d6899910b7354e6f643d1d349de47190066d85e68a1c",
                                                            "typeString": "literal_string \"INVALID_SIGNER\""
                                                        }
                                                    ],
                                                    "id": 67791,
                                                    "name": "require",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [
                                                        -18,
                                                        -18
                                                    ],
                                                    "referencedDeclaration": -18,
                                                    "src": "5112:7:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                        "typeString": "function (bool,string memory) pure"
                                                    }
                                                },
                                                "id": 67803,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5112:86:124",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 67804,
                                            "nodeType": "ExpressionStatement",
                                            "src": "5112:86:124"
                                        },
                                        {
                                            "expression": {
                                                "id": 67811,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "baseExpression": {
                                                        "baseExpression": {
                                                            "id": 67805,
                                                            "name": "allowance",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 67572,
                                                            "src": "5213:9:124",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                                "typeString": "mapping(address => mapping(address => uint256))"
                                                            }
                                                        },
                                                        "id": 67808,
                                                        "indexExpression": {
                                                            "id": 67806,
                                                            "name": "recoveredAddress",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 67760,
                                                            "src": "5223:16:124",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "5213:27:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 67809,
                                                    "indexExpression": {
                                                        "id": 67807,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67738,
                                                        "src": "5241:7:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "nodeType": "IndexAccess",
                                                    "src": "5213:36:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "id": 67810,
                                                    "name": "value",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67740,
                                                    "src": "5252:5:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "5213:44:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 67812,
                                            "nodeType": "ExpressionStatement",
                                            "src": "5213:44:124"
                                        }
                                    ]
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 67815,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67736,
                                                "src": "5292:5:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67816,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67738,
                                                "src": "5299:7:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67817,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67740,
                                                "src": "5308:5:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 67814,
                                            "name": "Approval",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67554,
                                            "src": "5283:8:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 67818,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5283:31:124",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67819,
                                    "nodeType": "EmitStatement",
                                    "src": "5278:36:124"
                                }
                            ]
                        },
                        "functionSelector": "d505accf",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "permit",
                        "nameLocation": "3847:6:124",
                        "parameters": {
                            "id": 67749,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67736,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "3871:5:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67821,
                                    "src": "3863:13:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67735,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3863:7:124",
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
                                    "id": 67738,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "3894:7:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67821,
                                    "src": "3886:15:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67737,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3886:7:124",
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
                                    "id": 67740,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3919:5:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67821,
                                    "src": "3911:13:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 67739,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3911:7:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67742,
                                    "mutability": "mutable",
                                    "name": "deadline",
                                    "nameLocation": "3942:8:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67821,
                                    "src": "3934:16:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 67741,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3934:7:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67744,
                                    "mutability": "mutable",
                                    "name": "v",
                                    "nameLocation": "3966:1:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67821,
                                    "src": "3960:7:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 67743,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3960:5:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67746,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "3985:1:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67821,
                                    "src": "3977:9:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 67745,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3977:7:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67748,
                                    "mutability": "mutable",
                                    "name": "s",
                                    "nameLocation": "4004:1:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67821,
                                    "src": "3996:9:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 67747,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3996:7:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3853:158:124"
                        },
                        "returnParameters": {
                            "id": 67750,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4027:0:124"
                        },
                        "scope": 67923,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 67836,
                        "nodeType": "FunctionDefinition",
                        "src": "5327:177:124",
                        "nodes": [],
                        "body": {
                            "id": 67835,
                            "nodeType": "Block",
                            "src": "5393:111:124",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 67829,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 67826,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -4,
                                                    "src": "5410:5:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 67827,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5416:7:124",
                                                "memberName": "chainid",
                                                "nodeType": "MemberAccess",
                                                "src": "5410:13:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "id": 67828,
                                                "name": "INITIAL_CHAIN_ID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67574,
                                                "src": "5427:16:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "5410:33:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "id": 67831,
                                                "name": "computeDomainSeparator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67866,
                                                "src": "5473:22:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                                    "typeString": "function () view returns (bytes32)"
                                                }
                                            },
                                            "id": 67832,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5473:24:124",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 67833,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "5410:87:124",
                                        "trueExpression": {
                                            "id": 67830,
                                            "name": "INITIAL_DOMAIN_SEPARATOR",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67576,
                                            "src": "5446:24:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 67825,
                                    "id": 67834,
                                    "nodeType": "Return",
                                    "src": "5403:94:124"
                                }
                            ]
                        },
                        "functionSelector": "3644e515",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "DOMAIN_SEPARATOR",
                        "nameLocation": "5336:16:124",
                        "parameters": {
                            "id": 67822,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5352:2:124"
                        },
                        "returnParameters": {
                            "id": 67825,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67824,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67836,
                                    "src": "5384:7:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 67823,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5384:7:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5383:9:124"
                        },
                        "scope": 67923,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 67866,
                        "nodeType": "FunctionDefinition",
                        "src": "5510:446:124",
                        "nodes": [],
                        "body": {
                            "id": 67865,
                            "nodeType": "Block",
                            "src": "5584:372:124",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429",
                                                                "id": 67845,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5682:84:124",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f",
                                                                    "typeString": "literal_string \"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\""
                                                                },
                                                                "value": "EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f",
                                                                    "typeString": "literal_string \"EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)\""
                                                                }
                                                            ],
                                                            "id": 67844,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "5672:9:124",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 67846,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5672:95:124",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 67850,
                                                                        "name": "name",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 67556,
                                                                        "src": "5805:4:124",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_string_storage",
                                                                            "typeString": "string storage ref"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_string_storage",
                                                                            "typeString": "string storage ref"
                                                                        }
                                                                    ],
                                                                    "id": 67849,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "5799:5:124",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                        "typeString": "type(bytes storage pointer)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 67848,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "5799:5:124",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 67851,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "5799:11:124",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                                    "typeString": "bytes storage pointer"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes_storage_ptr",
                                                                    "typeString": "bytes storage pointer"
                                                                }
                                                            ],
                                                            "id": 67847,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "5789:9:124",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 67852,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5789:22:124",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "hexValue": "31",
                                                                "id": 67854,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5843:3:124",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6",
                                                                    "typeString": "literal_string \"1\""
                                                                },
                                                                "value": "1"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_stringliteral_c89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6",
                                                                    "typeString": "literal_string \"1\""
                                                                }
                                                            ],
                                                            "id": 67853,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "5833:9:124",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 67855,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5833:14:124",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 67856,
                                                            "name": "block",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -4,
                                                            "src": "5869:5:124",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_block",
                                                                "typeString": "block"
                                                            }
                                                        },
                                                        "id": 67857,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5875:7:124",
                                                        "memberName": "chainid",
                                                        "nodeType": "MemberAccess",
                                                        "src": "5869:13:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 67860,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "5912:4:124",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_ERC20_$67923",
                                                                    "typeString": "contract ERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_ERC20_$67923",
                                                                    "typeString": "contract ERC20"
                                                                }
                                                            ],
                                                            "id": 67859,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "5904:7:124",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 67858,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "5904:7:124",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 67861,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5904:13:124",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    ],
                                                    "expression": {
                                                        "id": 67842,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "5640:3:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 67843,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5644:6:124",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "5640:10:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 67862,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5640:295:124",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            ],
                                            "id": 67841,
                                            "name": "keccak256",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -8,
                                            "src": "5613:9:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                            }
                                        },
                                        "id": 67863,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5613:336:124",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 67840,
                                    "id": 67864,
                                    "nodeType": "Return",
                                    "src": "5594:355:124"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "computeDomainSeparator",
                        "nameLocation": "5519:22:124",
                        "parameters": {
                            "id": 67837,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5541:2:124"
                        },
                        "returnParameters": {
                            "id": 67840,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67839,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67866,
                                    "src": "5575:7:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 67838,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5575:7:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5574:9:124"
                        },
                        "scope": 67923,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 67894,
                        "nodeType": "FunctionDefinition",
                        "src": "6150:325:124",
                        "nodes": [],
                        "body": {
                            "id": 67893,
                            "nodeType": "Block",
                            "src": "6210:265:124",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 67875,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67873,
                                            "name": "totalSupply",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67562,
                                            "src": "6220:11:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "id": 67874,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67870,
                                            "src": "6235:6:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6220:21:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 67876,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6220:21:124"
                                },
                                {
                                    "id": 67883,
                                    "nodeType": "UncheckedBlock",
                                    "src": "6363:58:124",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 67881,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "baseExpression": {
                                                        "id": 67877,
                                                        "name": "balanceOf",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67566,
                                                        "src": "6387:9:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 67879,
                                                    "indexExpression": {
                                                        "id": 67878,
                                                        "name": "to",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67868,
                                                        "src": "6397:2:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": true,
                                                    "nodeType": "IndexAccess",
                                                    "src": "6387:13:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "+=",
                                                "rightHandSide": {
                                                    "id": 67880,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67870,
                                                    "src": "6404:6:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "6387:23:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 67882,
                                            "nodeType": "ExpressionStatement",
                                            "src": "6387:23:124"
                                        }
                                    ]
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "30",
                                                        "id": 67887,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "6453:1:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        }
                                                    ],
                                                    "id": 67886,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "6445:7:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 67885,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6445:7:124",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 67888,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6445:10:124",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67889,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67868,
                                                "src": "6457:2:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67890,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67870,
                                                "src": "6461:6:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 67884,
                                            "name": "Transfer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67546,
                                            "src": "6436:8:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 67891,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6436:32:124",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67892,
                                    "nodeType": "EmitStatement",
                                    "src": "6431:37:124"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_mint",
                        "nameLocation": "6159:5:124",
                        "parameters": {
                            "id": 67871,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67868,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "6173:2:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67894,
                                    "src": "6165:10:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67867,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6165:7:124",
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
                                    "id": 67870,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "6185:6:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67894,
                                    "src": "6177:14:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 67869,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6177:7:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6164:28:124"
                        },
                        "returnParameters": {
                            "id": 67872,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6210:0:124"
                        },
                        "scope": 67923,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 67922,
                        "nodeType": "FunctionDefinition",
                        "src": "6481:328:124",
                        "nodes": [],
                        "body": {
                            "id": 67921,
                            "nodeType": "Block",
                            "src": "6543:266:124",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 67905,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 67901,
                                                "name": "balanceOf",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67566,
                                                "src": "6553:9:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                    "typeString": "mapping(address => uint256)"
                                                }
                                            },
                                            "id": 67903,
                                            "indexExpression": {
                                                "id": 67902,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67896,
                                                "src": "6563:4:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "6553:15:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 67904,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67898,
                                            "src": "6572:6:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6553:25:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 67906,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6553:25:124"
                                },
                                {
                                    "id": 67911,
                                    "nodeType": "UncheckedBlock",
                                    "src": "6697:56:124",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 67909,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 67907,
                                                    "name": "totalSupply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67562,
                                                    "src": "6721:11:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "-=",
                                                "rightHandSide": {
                                                    "id": 67908,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67898,
                                                    "src": "6736:6:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "6721:21:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 67910,
                                            "nodeType": "ExpressionStatement",
                                            "src": "6721:21:124"
                                        }
                                    ]
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 67913,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67896,
                                                "src": "6777:4:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "30",
                                                        "id": 67916,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "6791:1:124",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        }
                                                    ],
                                                    "id": 67915,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "6783:7:124",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 67914,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6783:7:124",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 67917,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6783:10:124",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67918,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67898,
                                                "src": "6795:6:124",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 67912,
                                            "name": "Transfer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67546,
                                            "src": "6768:8:124",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 67919,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6768:34:124",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67920,
                                    "nodeType": "EmitStatement",
                                    "src": "6763:39:124"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_burn",
                        "nameLocation": "6490:5:124",
                        "parameters": {
                            "id": 67899,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67896,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "6504:4:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67922,
                                    "src": "6496:12:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67895,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6496:7:124",
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
                                    "id": 67898,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "6518:6:124",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67922,
                                    "src": "6510:14:124",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 67897,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6510:7:124",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6495:30:124"
                        },
                        "returnParameters": {
                            "id": 67900,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6543:0:124"
                        },
                        "scope": 67923,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    }
                ],
                "abstract": true,
                "baseContracts": [],
                "canonicalName": "ERC20",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 67538,
                    "nodeType": "StructuredDocumentation",
                    "src": "68:406:124",
                    "text": "@notice Modern and gas efficient ERC20 + EIP-2612 implementation.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol)\n @author Modified from Uniswap (https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol)\n @dev Do not manually set balances without updating totalSupply, as the sum of all user balances must not exceed it."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    67923
                ],
                "name": "ERC20",
                "nameLocation": "492:5:124",
                "scope": 67924,
                "usedErrors": [],
                "usedEvents": [
                    67546,
                    67554
                ]
            }
        ],
        "license": "AGPL-3.0-only"
    },
    "id": 124
};
