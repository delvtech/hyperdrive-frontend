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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"deadline\",\"type\":\"uint256\"},{\"internalType\":\"uint8\",\"name\":\"v\",\"type\":\"uint8\"},{\"internalType\":\"bytes32\",\"name\":\"r\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"s\",\"type\":\"bytes32\"}],\"name\":\"permit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol)Modified from Uniswap (https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol)\",\"details\":\"Do not manually set balances without updating totalSupply, as the sum of all user balances must not exceed it.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Modern and gas efficient ERC20 + EIP-2612 implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/tokens/ERC20.sol\":\"ERC20\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]}},\"version\":1}",
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
        "id": 72505,
        "exportedSymbols": {
            "ERC20": [
                72504
            ]
        },
        "nodeType": "SourceUnit",
        "src": "42:6770:172",
        "nodes": [
            {
                "id": 72118,
                "nodeType": "PragmaDirective",
                "src": "42:24:172",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.8",
                    ".0"
                ]
            },
            {
                "id": 72504,
                "nodeType": "ContractDefinition",
                "src": "474:6337:172",
                "nodes": [
                    {
                        "id": 72127,
                        "nodeType": "EventDefinition",
                        "src": "683:73:172",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
                        "name": "Transfer",
                        "nameLocation": "689:8:172",
                        "parameters": {
                            "id": 72126,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72121,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "714:4:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72127,
                                    "src": "698:20:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72120,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "698:7:172",
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
                                    "id": 72123,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "736:2:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72127,
                                    "src": "720:18:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72122,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "720:7:172",
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
                                    "id": 72125,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "748:6:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72127,
                                    "src": "740:14:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72124,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "740:7:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "697:58:172"
                        }
                    },
                    {
                        "id": 72135,
                        "nodeType": "EventDefinition",
                        "src": "762:79:172",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
                        "name": "Approval",
                        "nameLocation": "768:8:172",
                        "parameters": {
                            "id": 72134,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72129,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "793:5:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72135,
                                    "src": "777:21:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72128,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "777:7:172",
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
                                    "id": 72131,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "816:7:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72135,
                                    "src": "800:23:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72130,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "800:7:172",
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
                                    "id": 72133,
                                    "indexed": false,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "833:6:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72135,
                                    "src": "825:14:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72132,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "825:7:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "776:64:172"
                        }
                    },
                    {
                        "id": 72137,
                        "nodeType": "VariableDeclaration",
                        "src": "1031:18:172",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "06fdde03",
                        "mutability": "mutable",
                        "name": "name",
                        "nameLocation": "1045:4:172",
                        "scope": 72504,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 72136,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1031:6:172",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 72139,
                        "nodeType": "VariableDeclaration",
                        "src": "1056:20:172",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "95d89b41",
                        "mutability": "mutable",
                        "name": "symbol",
                        "nameLocation": "1070:6:172",
                        "scope": 72504,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_string_storage",
                            "typeString": "string"
                        },
                        "typeName": {
                            "id": 72138,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1056:6:172",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 72141,
                        "nodeType": "VariableDeclaration",
                        "src": "1083:31:172",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "313ce567",
                        "mutability": "immutable",
                        "name": "decimals",
                        "nameLocation": "1106:8:172",
                        "scope": 72504,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                        },
                        "typeName": {
                            "id": 72140,
                            "name": "uint8",
                            "nodeType": "ElementaryTypeName",
                            "src": "1083:5:172",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 72143,
                        "nodeType": "VariableDeclaration",
                        "src": "1304:26:172",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "18160ddd",
                        "mutability": "mutable",
                        "name": "totalSupply",
                        "nameLocation": "1319:11:172",
                        "scope": 72504,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 72142,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1304:7:172",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 72147,
                        "nodeType": "VariableDeclaration",
                        "src": "1337:44:172",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "70a08231",
                        "mutability": "mutable",
                        "name": "balanceOf",
                        "nameLocation": "1372:9:172",
                        "scope": 72504,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                        },
                        "typeName": {
                            "id": 72146,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 72144,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1345:7:172",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1337:27:172",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 72145,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1356:7:172",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 72153,
                        "nodeType": "VariableDeclaration",
                        "src": "1388:64:172",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "dd62ed3e",
                        "mutability": "mutable",
                        "name": "allowance",
                        "nameLocation": "1443:9:172",
                        "scope": 72504,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                            "typeString": "mapping(address => mapping(address => uint256))"
                        },
                        "typeName": {
                            "id": 72152,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 72148,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1396:7:172",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1388:47:172",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                "typeString": "mapping(address => mapping(address => uint256))"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 72151,
                                "keyName": "",
                                "keyNameLocation": "-1:-1:-1",
                                "keyType": {
                                    "id": 72149,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1415:7:172",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "1407:27:172",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                    "typeString": "mapping(address => uint256)"
                                },
                                "valueName": "",
                                "valueNameLocation": "-1:-1:-1",
                                "valueType": {
                                    "id": 72150,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1426:7:172",
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
                        "id": 72155,
                        "nodeType": "VariableDeclaration",
                        "src": "1643:43:172",
                        "nodes": [],
                        "constant": false,
                        "mutability": "immutable",
                        "name": "INITIAL_CHAIN_ID",
                        "nameLocation": "1670:16:172",
                        "scope": 72504,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 72154,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1643:7:172",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 72157,
                        "nodeType": "VariableDeclaration",
                        "src": "1693:51:172",
                        "nodes": [],
                        "constant": false,
                        "mutability": "immutable",
                        "name": "INITIAL_DOMAIN_SEPARATOR",
                        "nameLocation": "1720:24:172",
                        "scope": 72504,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                        },
                        "typeName": {
                            "id": 72156,
                            "name": "bytes32",
                            "nodeType": "ElementaryTypeName",
                            "src": "1693:7:172",
                            "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 72161,
                        "nodeType": "VariableDeclaration",
                        "src": "1751:41:172",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "7ecebe00",
                        "mutability": "mutable",
                        "name": "nonces",
                        "nameLocation": "1786:6:172",
                        "scope": 72504,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                        },
                        "typeName": {
                            "id": 72160,
                            "keyName": "",
                            "keyNameLocation": "-1:-1:-1",
                            "keyType": {
                                "id": 72158,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "1759:7:172",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "1751:27:172",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                            },
                            "valueName": "",
                            "valueNameLocation": "-1:-1:-1",
                            "valueType": {
                                "id": 72159,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1770:7:172",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 72193,
                        "nodeType": "FunctionDefinition",
                        "src": "1981:292:172",
                        "nodes": [],
                        "body": {
                            "id": 72192,
                            "nodeType": "Block",
                            "src": "2084:189:172",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 72172,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 72170,
                                            "name": "name",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72137,
                                            "src": "2094:4:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 72171,
                                            "name": "_name",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72163,
                                            "src": "2101:5:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "2094:12:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 72173,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2094:12:172"
                                },
                                {
                                    "expression": {
                                        "id": 72176,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 72174,
                                            "name": "symbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72139,
                                            "src": "2116:6:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 72175,
                                            "name": "_symbol",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72165,
                                            "src": "2125:7:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_memory_ptr",
                                                "typeString": "string memory"
                                            }
                                        },
                                        "src": "2116:16:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage",
                                            "typeString": "string storage ref"
                                        }
                                    },
                                    "id": 72177,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2116:16:172"
                                },
                                {
                                    "expression": {
                                        "id": 72180,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 72178,
                                            "name": "decimals",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72141,
                                            "src": "2142:8:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint8",
                                                "typeString": "uint8"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 72179,
                                            "name": "_decimals",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72167,
                                            "src": "2153:9:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint8",
                                                "typeString": "uint8"
                                            }
                                        },
                                        "src": "2142:20:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "id": 72181,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2142:20:172"
                                },
                                {
                                    "expression": {
                                        "id": 72185,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 72182,
                                            "name": "INITIAL_CHAIN_ID",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72155,
                                            "src": "2173:16:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 72183,
                                                "name": "block",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -4,
                                                "src": "2192:5:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_block",
                                                    "typeString": "block"
                                                }
                                            },
                                            "id": 72184,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "2198:7:172",
                                            "memberName": "chainid",
                                            "nodeType": "MemberAccess",
                                            "src": "2192:13:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2173:32:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 72186,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2173:32:172"
                                },
                                {
                                    "expression": {
                                        "id": 72190,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 72187,
                                            "name": "INITIAL_DOMAIN_SEPARATOR",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72157,
                                            "src": "2215:24:172",
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
                                                "id": 72188,
                                                "name": "computeDomainSeparator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72447,
                                                "src": "2242:22:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                                    "typeString": "function () view returns (bytes32)"
                                                }
                                            },
                                            "id": 72189,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2242:24:172",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "2215:51:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 72191,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2215:51:172"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 72168,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72163,
                                    "mutability": "mutable",
                                    "name": "_name",
                                    "nameLocation": "2016:5:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72193,
                                    "src": "2002:19:172",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 72162,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2002:6:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 72165,
                                    "mutability": "mutable",
                                    "name": "_symbol",
                                    "nameLocation": "2045:7:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72193,
                                    "src": "2031:21:172",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 72164,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2031:6:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 72167,
                                    "mutability": "mutable",
                                    "name": "_decimals",
                                    "nameLocation": "2068:9:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72193,
                                    "src": "2062:15:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 72166,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2062:5:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1992:91:172"
                        },
                        "returnParameters": {
                            "id": 72169,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2084:0:172"
                        },
                        "scope": 72504,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 72221,
                        "nodeType": "FunctionDefinition",
                        "src": "2461:211:172",
                        "nodes": [],
                        "body": {
                            "id": 72220,
                            "nodeType": "Block",
                            "src": "2541:131:172",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 72209,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "baseExpression": {
                                                    "id": 72202,
                                                    "name": "allowance",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72153,
                                                    "src": "2551:9:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                        "typeString": "mapping(address => mapping(address => uint256))"
                                                    }
                                                },
                                                "id": 72206,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 72203,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "2561:3:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 72204,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "2565:6:172",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "2561:10:172",
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
                                                "src": "2551:21:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                    "typeString": "mapping(address => uint256)"
                                                }
                                            },
                                            "id": 72207,
                                            "indexExpression": {
                                                "id": 72205,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72195,
                                                "src": "2573:7:172",
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
                                            "src": "2551:30:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 72208,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72197,
                                            "src": "2584:6:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2551:39:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 72210,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2551:39:172"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 72212,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2615:3:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 72213,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2619:6:172",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2615:10:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72214,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72195,
                                                "src": "2627:7:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72215,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72197,
                                                "src": "2636:6:172",
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
                                            "id": 72211,
                                            "name": "Approval",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72135,
                                            "src": "2606:8:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 72216,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2606:37:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72217,
                                    "nodeType": "EmitStatement",
                                    "src": "2601:42:172"
                                },
                                {
                                    "expression": {
                                        "hexValue": "74727565",
                                        "id": 72218,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2661:4:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 72201,
                                    "id": 72219,
                                    "nodeType": "Return",
                                    "src": "2654:11:172"
                                }
                            ]
                        },
                        "functionSelector": "095ea7b3",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "approve",
                        "nameLocation": "2470:7:172",
                        "parameters": {
                            "id": 72198,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72195,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "2486:7:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72221,
                                    "src": "2478:15:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72194,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2478:7:172",
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
                                    "id": 72197,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "2503:6:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72221,
                                    "src": "2495:14:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72196,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2495:7:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2477:33:172"
                        },
                        "returnParameters": {
                            "id": 72201,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72200,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72221,
                                    "src": "2535:4:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 72199,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2535:4:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2534:6:172"
                        },
                        "scope": 72504,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 72254,
                        "nodeType": "FunctionDefinition",
                        "src": "2678:373:172",
                        "nodes": [],
                        "body": {
                            "id": 72253,
                            "nodeType": "Block",
                            "src": "2754:297:172",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 72235,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 72230,
                                                "name": "balanceOf",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72147,
                                                "src": "2764:9:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                    "typeString": "mapping(address => uint256)"
                                                }
                                            },
                                            "id": 72233,
                                            "indexExpression": {
                                                "expression": {
                                                    "id": 72231,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2774:3:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 72232,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2778:6:172",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2774:10:172",
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
                                            "src": "2764:21:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 72234,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72225,
                                            "src": "2789:6:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "2764:31:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 72236,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2764:31:172"
                                },
                                {
                                    "id": 72243,
                                    "nodeType": "UncheckedBlock",
                                    "src": "2917:58:172",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 72241,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "baseExpression": {
                                                        "id": 72237,
                                                        "name": "balanceOf",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72147,
                                                        "src": "2941:9:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 72239,
                                                    "indexExpression": {
                                                        "id": 72238,
                                                        "name": "to",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72223,
                                                        "src": "2951:2:172",
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
                                                    "src": "2941:13:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "+=",
                                                "rightHandSide": {
                                                    "id": 72240,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72225,
                                                    "src": "2958:6:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2941:23:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 72242,
                                            "nodeType": "ExpressionStatement",
                                            "src": "2941:23:172"
                                        }
                                    ]
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 72245,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2999:3:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 72246,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "3003:6:172",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2999:10:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72247,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72223,
                                                "src": "3011:2:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72248,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72225,
                                                "src": "3015:6:172",
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
                                            "id": 72244,
                                            "name": "Transfer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72127,
                                            "src": "2990:8:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 72249,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2990:32:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72250,
                                    "nodeType": "EmitStatement",
                                    "src": "2985:37:172"
                                },
                                {
                                    "expression": {
                                        "hexValue": "74727565",
                                        "id": 72251,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3040:4:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 72229,
                                    "id": 72252,
                                    "nodeType": "Return",
                                    "src": "3033:11:172"
                                }
                            ]
                        },
                        "functionSelector": "a9059cbb",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transfer",
                        "nameLocation": "2687:8:172",
                        "parameters": {
                            "id": 72226,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72223,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "2704:2:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72254,
                                    "src": "2696:10:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72222,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2696:7:172",
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
                                    "id": 72225,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "2716:6:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72254,
                                    "src": "2708:14:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72224,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2708:7:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2695:28:172"
                        },
                        "returnParameters": {
                            "id": 72229,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72228,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72254,
                                    "src": "2748:4:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 72227,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2748:4:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2747:6:172"
                        },
                        "scope": 72504,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 72315,
                        "nodeType": "FunctionDefinition",
                        "src": "3057:592:172",
                        "nodes": [],
                        "body": {
                            "id": 72314,
                            "nodeType": "Block",
                            "src": "3181:468:172",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        72266
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 72266,
                                            "mutability": "mutable",
                                            "name": "allowed",
                                            "nameLocation": "3199:7:172",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 72314,
                                            "src": "3191:15:172",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "typeName": {
                                                "id": 72265,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "3191:7:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 72273,
                                    "initialValue": {
                                        "baseExpression": {
                                            "baseExpression": {
                                                "id": 72267,
                                                "name": "allowance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72153,
                                                "src": "3209:9:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                    "typeString": "mapping(address => mapping(address => uint256))"
                                                }
                                            },
                                            "id": 72269,
                                            "indexExpression": {
                                                "id": 72268,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72256,
                                                "src": "3219:4:172",
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
                                            "src": "3209:15:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                "typeString": "mapping(address => uint256)"
                                            }
                                        },
                                        "id": 72272,
                                        "indexExpression": {
                                            "expression": {
                                                "id": 72270,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "3225:3:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 72271,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "3229:6:172",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "3225:10:172",
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
                                        "src": "3209:27:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "3191:45:172"
                                },
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "id": 72280,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "id": 72274,
                                            "name": "allowed",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72266,
                                            "src": "3287:7:172",
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
                                                        "id": 72277,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "lValueRequested": false,
                                                        "nodeType": "ElementaryTypeNameExpression",
                                                        "src": "3303:7:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_type$_t_uint256_$",
                                                            "typeString": "type(uint256)"
                                                        },
                                                        "typeName": {
                                                            "id": 72276,
                                                            "name": "uint256",
                                                            "nodeType": "ElementaryTypeName",
                                                            "src": "3303:7:172",
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
                                                    "id": 72275,
                                                    "name": "type",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -27,
                                                    "src": "3298:4:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_metatype_pure$__$returns$__$",
                                                        "typeString": "function () pure"
                                                    }
                                                },
                                                "id": 72278,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "3298:13:172",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_meta_type_t_uint256",
                                                    "typeString": "type(uint256)"
                                                }
                                            },
                                            "id": 72279,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "memberLocation": "3312:3:172",
                                            "memberName": "max",
                                            "nodeType": "MemberAccess",
                                            "src": "3298:17:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3287:28:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 72292,
                                    "nodeType": "IfStatement",
                                    "src": "3283:80:172",
                                    "trueBody": {
                                        "expression": {
                                            "id": 72290,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "baseExpression": {
                                                    "baseExpression": {
                                                        "id": 72281,
                                                        "name": "allowance",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72153,
                                                        "src": "3317:9:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                            "typeString": "mapping(address => mapping(address => uint256))"
                                                        }
                                                    },
                                                    "id": 72285,
                                                    "indexExpression": {
                                                        "id": 72282,
                                                        "name": "from",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72256,
                                                        "src": "3327:4:172",
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
                                                    "src": "3317:15:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                        "typeString": "mapping(address => uint256)"
                                                    }
                                                },
                                                "id": 72286,
                                                "indexExpression": {
                                                    "expression": {
                                                        "id": 72283,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "3333:3:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 72284,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "3337:6:172",
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "3333:10:172",
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
                                                "src": "3317:27:172",
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
                                                "id": 72289,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 72287,
                                                    "name": "allowed",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72266,
                                                    "src": "3347:7:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "-",
                                                "rightExpression": {
                                                    "id": 72288,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72260,
                                                    "src": "3357:6:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3347:16:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "3317:46:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 72291,
                                        "nodeType": "ExpressionStatement",
                                        "src": "3317:46:172"
                                    }
                                },
                                {
                                    "expression": {
                                        "id": 72297,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 72293,
                                                "name": "balanceOf",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72147,
                                                "src": "3374:9:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                    "typeString": "mapping(address => uint256)"
                                                }
                                            },
                                            "id": 72295,
                                            "indexExpression": {
                                                "id": 72294,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72256,
                                                "src": "3384:4:172",
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
                                            "src": "3374:15:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 72296,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72260,
                                            "src": "3393:6:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "3374:25:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 72298,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3374:25:172"
                                },
                                {
                                    "id": 72305,
                                    "nodeType": "UncheckedBlock",
                                    "src": "3521:58:172",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 72303,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "baseExpression": {
                                                        "id": 72299,
                                                        "name": "balanceOf",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72147,
                                                        "src": "3545:9:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 72301,
                                                    "indexExpression": {
                                                        "id": 72300,
                                                        "name": "to",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72258,
                                                        "src": "3555:2:172",
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
                                                    "src": "3545:13:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "+=",
                                                "rightHandSide": {
                                                    "id": 72302,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72260,
                                                    "src": "3562:6:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "3545:23:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 72304,
                                            "nodeType": "ExpressionStatement",
                                            "src": "3545:23:172"
                                        }
                                    ]
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 72307,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72256,
                                                "src": "3603:4:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72308,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72258,
                                                "src": "3609:2:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72309,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72260,
                                                "src": "3613:6:172",
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
                                            "id": 72306,
                                            "name": "Transfer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72127,
                                            "src": "3594:8:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 72310,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3594:26:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72311,
                                    "nodeType": "EmitStatement",
                                    "src": "3589:31:172"
                                },
                                {
                                    "expression": {
                                        "hexValue": "74727565",
                                        "id": 72312,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "bool",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3638:4:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "value": "true"
                                    },
                                    "functionReturnParameters": 72264,
                                    "id": 72313,
                                    "nodeType": "Return",
                                    "src": "3631:11:172"
                                }
                            ]
                        },
                        "functionSelector": "23b872dd",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "transferFrom",
                        "nameLocation": "3066:12:172",
                        "parameters": {
                            "id": 72261,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72256,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "3096:4:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72315,
                                    "src": "3088:12:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72255,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3088:7:172",
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
                                    "id": 72258,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "3118:2:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72315,
                                    "src": "3110:10:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72257,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3110:7:172",
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
                                    "id": 72260,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "3138:6:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72315,
                                    "src": "3130:14:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72259,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3130:7:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3078:72:172"
                        },
                        "returnParameters": {
                            "id": 72264,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72263,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72315,
                                    "src": "3175:4:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 72262,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3175:4:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3174:6:172"
                        },
                        "scope": 72504,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 72402,
                        "nodeType": "FunctionDefinition",
                        "src": "3838:1483:172",
                        "nodes": [],
                        "body": {
                            "id": 72401,
                            "nodeType": "Block",
                            "src": "4027:1294:172",
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
                                                "id": 72336,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "id": 72333,
                                                    "name": "deadline",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72323,
                                                    "src": "4045:8:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": ">=",
                                                "rightExpression": {
                                                    "expression": {
                                                        "id": 72334,
                                                        "name": "block",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -4,
                                                        "src": "4057:5:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_block",
                                                            "typeString": "block"
                                                        }
                                                    },
                                                    "id": 72335,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberLocation": "4063:9:172",
                                                    "memberName": "timestamp",
                                                    "nodeType": "MemberAccess",
                                                    "src": "4057:15:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "4045:27:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "5045524d49545f444541444c494e455f45585049524544",
                                                "id": 72337,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "4074:25:172",
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
                                            "id": 72332,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "4037:7:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 72338,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "4037:63:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72339,
                                    "nodeType": "ExpressionStatement",
                                    "src": "4037:63:172"
                                },
                                {
                                    "id": 72394,
                                    "nodeType": "UncheckedBlock",
                                    "src": "4241:1027:172",
                                    "statements": [
                                        {
                                            "assignments": [
                                                72341
                                            ],
                                            "declarations": [
                                                {
                                                    "constant": false,
                                                    "id": 72341,
                                                    "mutability": "mutable",
                                                    "name": "recoveredAddress",
                                                    "nameLocation": "4273:16:172",
                                                    "nodeType": "VariableDeclaration",
                                                    "scope": 72394,
                                                    "src": "4265:24:172",
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "typeName": {
                                                        "id": 72340,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "4265:7:172",
                                                        "stateMutability": "nonpayable",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "visibility": "internal"
                                                }
                                            ],
                                            "id": 72371,
                                            "initialValue": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "1901",
                                                                        "id": 72346,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "4392:10:172",
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
                                                                            "id": 72347,
                                                                            "name": "DOMAIN_SEPARATOR",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": 72417,
                                                                            "src": "4428:16:172",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                                                                "typeString": "function () view returns (bytes32)"
                                                                            }
                                                                        },
                                                                        "id": 72348,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "4428:18:172",
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
                                                                                                "id": 72353,
                                                                                                "isConstant": false,
                                                                                                "isLValue": false,
                                                                                                "isPure": true,
                                                                                                "kind": "string",
                                                                                                "lValueRequested": false,
                                                                                                "nodeType": "Literal",
                                                                                                "src": "4602:84:172",
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
                                                                                            "id": 72352,
                                                                                            "name": "keccak256",
                                                                                            "nodeType": "Identifier",
                                                                                            "overloadedDeclarations": [],
                                                                                            "referencedDeclaration": -8,
                                                                                            "src": "4555:9:172",
                                                                                            "typeDescriptions": {
                                                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                                            }
                                                                                        },
                                                                                        "id": 72354,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": true,
                                                                                        "kind": "functionCall",
                                                                                        "lValueRequested": false,
                                                                                        "nameLocations": [],
                                                                                        "names": [],
                                                                                        "nodeType": "FunctionCall",
                                                                                        "src": "4555:165:172",
                                                                                        "tryCall": false,
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_bytes32",
                                                                                            "typeString": "bytes32"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "id": 72355,
                                                                                        "name": "owner",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 72317,
                                                                                        "src": "4754:5:172",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_address",
                                                                                            "typeString": "address"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "id": 72356,
                                                                                        "name": "spender",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 72319,
                                                                                        "src": "4793:7:172",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_address",
                                                                                            "typeString": "address"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "id": 72357,
                                                                                        "name": "value",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 72321,
                                                                                        "src": "4834:5:172",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    },
                                                                                    {
                                                                                        "id": 72361,
                                                                                        "isConstant": false,
                                                                                        "isLValue": false,
                                                                                        "isPure": false,
                                                                                        "lValueRequested": false,
                                                                                        "nodeType": "UnaryOperation",
                                                                                        "operator": "++",
                                                                                        "prefix": false,
                                                                                        "src": "4873:15:172",
                                                                                        "subExpression": {
                                                                                            "baseExpression": {
                                                                                                "id": 72358,
                                                                                                "name": "nonces",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 72161,
                                                                                                "src": "4873:6:172",
                                                                                                "typeDescriptions": {
                                                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                                                                    "typeString": "mapping(address => uint256)"
                                                                                                }
                                                                                            },
                                                                                            "id": 72360,
                                                                                            "indexExpression": {
                                                                                                "id": 72359,
                                                                                                "name": "owner",
                                                                                                "nodeType": "Identifier",
                                                                                                "overloadedDeclarations": [],
                                                                                                "referencedDeclaration": 72317,
                                                                                                "src": "4880:5:172",
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
                                                                                            "src": "4873:13:172",
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
                                                                                        "id": 72362,
                                                                                        "name": "deadline",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": 72323,
                                                                                        "src": "4922:8:172",
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
                                                                                        "id": 72350,
                                                                                        "name": "abi",
                                                                                        "nodeType": "Identifier",
                                                                                        "overloadedDeclarations": [],
                                                                                        "referencedDeclaration": -1,
                                                                                        "src": "4511:3:172",
                                                                                        "typeDescriptions": {
                                                                                            "typeIdentifier": "t_magic_abi",
                                                                                            "typeString": "abi"
                                                                                        }
                                                                                    },
                                                                                    "id": 72351,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "memberLocation": "4515:6:172",
                                                                                    "memberName": "encode",
                                                                                    "nodeType": "MemberAccess",
                                                                                    "src": "4511:10:172",
                                                                                    "typeDescriptions": {
                                                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                                        "typeString": "function () pure returns (bytes memory)"
                                                                                    }
                                                                                },
                                                                                "id": 72363,
                                                                                "isConstant": false,
                                                                                "isLValue": false,
                                                                                "isPure": false,
                                                                                "kind": "functionCall",
                                                                                "lValueRequested": false,
                                                                                "nameLocations": [],
                                                                                "names": [],
                                                                                "nodeType": "FunctionCall",
                                                                                "src": "4511:449:172",
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
                                                                            "id": 72349,
                                                                            "name": "keccak256",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": -8,
                                                                            "src": "4472:9:172",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                                            }
                                                                        },
                                                                        "id": 72364,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "kind": "functionCall",
                                                                        "lValueRequested": false,
                                                                        "nameLocations": [],
                                                                        "names": [],
                                                                        "nodeType": "FunctionCall",
                                                                        "src": "4472:514:172",
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
                                                                        "id": 72344,
                                                                        "name": "abi",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -1,
                                                                        "src": "4350:3:172",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_abi",
                                                                            "typeString": "abi"
                                                                        }
                                                                    },
                                                                    "id": 72345,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "memberLocation": "4354:12:172",
                                                                    "memberName": "encodePacked",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "4350:16:172",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                                                        "typeString": "function () pure returns (bytes memory)"
                                                                    }
                                                                },
                                                                "id": 72365,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "functionCall",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "4350:658:172",
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
                                                            "id": 72343,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "4319:9:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 72366,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "4319:707:172",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "id": 72367,
                                                        "name": "v",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72325,
                                                        "src": "5044:1:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint8",
                                                            "typeString": "uint8"
                                                        }
                                                    },
                                                    {
                                                        "id": 72368,
                                                        "name": "r",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72327,
                                                        "src": "5063:1:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "id": 72369,
                                                        "name": "s",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72329,
                                                        "src": "5082:1:172",
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
                                                    "id": 72342,
                                                    "name": "ecrecover",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -6,
                                                    "src": "4292:9:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_ecrecover_pure$_t_bytes32_$_t_uint8_$_t_bytes32_$_t_bytes32_$returns$_t_address_$",
                                                        "typeString": "function (bytes32,uint8,bytes32,bytes32) pure returns (address)"
                                                    }
                                                },
                                                "id": 72370,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "4292:805:172",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "VariableDeclarationStatement",
                                            "src": "4265:832:172"
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "commonType": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        },
                                                        "id": 72382,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "commonType": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            "id": 72378,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 72373,
                                                                "name": "recoveredAddress",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 72341,
                                                                "src": "5120:16:172",
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
                                                                        "id": 72376,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "number",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "5148:1:172",
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
                                                                    "id": 72375,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "5140:7:172",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 72374,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "5140:7:172",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 72377,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "5140:10:172",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "src": "5120:30:172",
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
                                                            "id": 72381,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "leftExpression": {
                                                                "id": 72379,
                                                                "name": "recoveredAddress",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 72341,
                                                                "src": "5154:16:172",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "nodeType": "BinaryOperation",
                                                            "operator": "==",
                                                            "rightExpression": {
                                                                "id": 72380,
                                                                "name": "owner",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 72317,
                                                                "src": "5174:5:172",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "src": "5154:25:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bool",
                                                                "typeString": "bool"
                                                            }
                                                        },
                                                        "src": "5120:59:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    {
                                                        "hexValue": "494e56414c49445f5349474e4552",
                                                        "id": 72383,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "string",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "5181:16:172",
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
                                                    "id": 72372,
                                                    "name": "require",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [
                                                        -18,
                                                        -18
                                                    ],
                                                    "referencedDeclaration": -18,
                                                    "src": "5112:7:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                        "typeString": "function (bool,string memory) pure"
                                                    }
                                                },
                                                "id": 72384,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5112:86:172",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_tuple$__$",
                                                    "typeString": "tuple()"
                                                }
                                            },
                                            "id": 72385,
                                            "nodeType": "ExpressionStatement",
                                            "src": "5112:86:172"
                                        },
                                        {
                                            "expression": {
                                                "id": 72392,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "baseExpression": {
                                                        "baseExpression": {
                                                            "id": 72386,
                                                            "name": "allowance",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 72153,
                                                            "src": "5213:9:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                                                                "typeString": "mapping(address => mapping(address => uint256))"
                                                            }
                                                        },
                                                        "id": 72389,
                                                        "indexExpression": {
                                                            "id": 72387,
                                                            "name": "recoveredAddress",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 72341,
                                                            "src": "5223:16:172",
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
                                                        "src": "5213:27:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 72390,
                                                    "indexExpression": {
                                                        "id": 72388,
                                                        "name": "spender",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72319,
                                                        "src": "5241:7:172",
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
                                                    "src": "5213:36:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "=",
                                                "rightHandSide": {
                                                    "id": 72391,
                                                    "name": "value",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72321,
                                                    "src": "5252:5:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "5213:44:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 72393,
                                            "nodeType": "ExpressionStatement",
                                            "src": "5213:44:172"
                                        }
                                    ]
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 72396,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72317,
                                                "src": "5292:5:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72397,
                                                "name": "spender",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72319,
                                                "src": "5299:7:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72398,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72321,
                                                "src": "5308:5:172",
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
                                            "id": 72395,
                                            "name": "Approval",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72135,
                                            "src": "5283:8:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 72399,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5283:31:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72400,
                                    "nodeType": "EmitStatement",
                                    "src": "5278:36:172"
                                }
                            ]
                        },
                        "functionSelector": "d505accf",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "permit",
                        "nameLocation": "3847:6:172",
                        "parameters": {
                            "id": 72330,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72317,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "3871:5:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72402,
                                    "src": "3863:13:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72316,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3863:7:172",
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
                                    "id": 72319,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "3894:7:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72402,
                                    "src": "3886:15:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72318,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3886:7:172",
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
                                    "id": 72321,
                                    "mutability": "mutable",
                                    "name": "value",
                                    "nameLocation": "3919:5:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72402,
                                    "src": "3911:13:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72320,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3911:7:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 72323,
                                    "mutability": "mutable",
                                    "name": "deadline",
                                    "nameLocation": "3942:8:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72402,
                                    "src": "3934:16:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72322,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3934:7:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 72325,
                                    "mutability": "mutable",
                                    "name": "v",
                                    "nameLocation": "3966:1:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72402,
                                    "src": "3960:7:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 72324,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3960:5:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 72327,
                                    "mutability": "mutable",
                                    "name": "r",
                                    "nameLocation": "3985:1:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72402,
                                    "src": "3977:9:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 72326,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3977:7:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 72329,
                                    "mutability": "mutable",
                                    "name": "s",
                                    "nameLocation": "4004:1:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72402,
                                    "src": "3996:9:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 72328,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "3996:7:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "3853:158:172"
                        },
                        "returnParameters": {
                            "id": 72331,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "4027:0:172"
                        },
                        "scope": 72504,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 72417,
                        "nodeType": "FunctionDefinition",
                        "src": "5327:177:172",
                        "nodes": [],
                        "body": {
                            "id": 72416,
                            "nodeType": "Block",
                            "src": "5393:111:172",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "condition": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 72410,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "expression": {
                                                    "id": 72407,
                                                    "name": "block",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -4,
                                                    "src": "5410:5:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_block",
                                                        "typeString": "block"
                                                    }
                                                },
                                                "id": 72408,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "5416:7:172",
                                                "memberName": "chainid",
                                                "nodeType": "MemberAccess",
                                                "src": "5410:13:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "id": 72409,
                                                "name": "INITIAL_CHAIN_ID",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72155,
                                                "src": "5427:16:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "5410:33:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "falseExpression": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "id": 72412,
                                                "name": "computeDomainSeparator",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72447,
                                                "src": "5473:22:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$__$returns$_t_bytes32_$",
                                                    "typeString": "function () view returns (bytes32)"
                                                }
                                            },
                                            "id": 72413,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "nameLocations": [],
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "5473:24:172",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "id": 72414,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "Conditional",
                                        "src": "5410:87:172",
                                        "trueExpression": {
                                            "id": 72411,
                                            "name": "INITIAL_DOMAIN_SEPARATOR",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72157,
                                            "src": "5446:24:172",
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
                                    "functionReturnParameters": 72406,
                                    "id": 72415,
                                    "nodeType": "Return",
                                    "src": "5403:94:172"
                                }
                            ]
                        },
                        "functionSelector": "3644e515",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "DOMAIN_SEPARATOR",
                        "nameLocation": "5336:16:172",
                        "parameters": {
                            "id": 72403,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5352:2:172"
                        },
                        "returnParameters": {
                            "id": 72406,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72405,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72417,
                                    "src": "5384:7:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 72404,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5384:7:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5383:9:172"
                        },
                        "scope": 72504,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 72447,
                        "nodeType": "FunctionDefinition",
                        "src": "5510:446:172",
                        "nodes": [],
                        "body": {
                            "id": 72446,
                            "nodeType": "Block",
                            "src": "5584:372:172",
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
                                                                "id": 72426,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5682:84:172",
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
                                                            "id": 72425,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "5672:9:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 72427,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5672:95:172",
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
                                                                        "id": 72431,
                                                                        "name": "name",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 72137,
                                                                        "src": "5805:4:172",
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
                                                                    "id": 72430,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "5799:5:172",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                        "typeString": "type(bytes storage pointer)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 72429,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "5799:5:172",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 72432,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "5799:11:172",
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
                                                            "id": 72428,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "5789:9:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 72433,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5789:22:172",
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
                                                                "id": 72435,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "string",
                                                                "lValueRequested": false,
                                                                "nodeType": "Literal",
                                                                "src": "5843:3:172",
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
                                                            "id": 72434,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "5833:9:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 72436,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5833:14:172",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 72437,
                                                            "name": "block",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -4,
                                                            "src": "5869:5:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_block",
                                                                "typeString": "block"
                                                            }
                                                        },
                                                        "id": 72438,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "5875:7:172",
                                                        "memberName": "chainid",
                                                        "nodeType": "MemberAccess",
                                                        "src": "5869:13:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "id": 72441,
                                                                "name": "this",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -28,
                                                                "src": "5912:4:172",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_ERC20_$72504",
                                                                    "typeString": "contract ERC20"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_contract$_ERC20_$72504",
                                                                    "typeString": "contract ERC20"
                                                                }
                                                            ],
                                                            "id": 72440,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "nodeType": "ElementaryTypeNameExpression",
                                                            "src": "5904:7:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_address_$",
                                                                "typeString": "type(address)"
                                                            },
                                                            "typeName": {
                                                                "id": 72439,
                                                                "name": "address",
                                                                "nodeType": "ElementaryTypeName",
                                                                "src": "5904:7:172",
                                                                "typeDescriptions": {}
                                                            }
                                                        },
                                                        "id": 72442,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "typeConversion",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "5904:13:172",
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
                                                        "id": 72423,
                                                        "name": "abi",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -1,
                                                        "src": "5640:3:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_abi",
                                                            "typeString": "abi"
                                                        }
                                                    },
                                                    "id": 72424,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "memberLocation": "5644:6:172",
                                                    "memberName": "encode",
                                                    "nodeType": "MemberAccess",
                                                    "src": "5640:10:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_abiencode_pure$__$returns$_t_bytes_memory_ptr_$",
                                                        "typeString": "function () pure returns (bytes memory)"
                                                    }
                                                },
                                                "id": 72443,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "5640:295:172",
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
                                            "id": 72422,
                                            "name": "keccak256",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": -8,
                                            "src": "5613:9:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                            }
                                        },
                                        "id": 72444,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "5613:336:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 72421,
                                    "id": 72445,
                                    "nodeType": "Return",
                                    "src": "5594:355:172"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "computeDomainSeparator",
                        "nameLocation": "5519:22:172",
                        "parameters": {
                            "id": 72418,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "5541:2:172"
                        },
                        "returnParameters": {
                            "id": 72421,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72420,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72447,
                                    "src": "5575:7:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 72419,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "5575:7:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "5574:9:172"
                        },
                        "scope": 72504,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 72475,
                        "nodeType": "FunctionDefinition",
                        "src": "6150:325:172",
                        "nodes": [],
                        "body": {
                            "id": 72474,
                            "nodeType": "Block",
                            "src": "6210:265:172",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 72456,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 72454,
                                            "name": "totalSupply",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72143,
                                            "src": "6220:11:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "+=",
                                        "rightHandSide": {
                                            "id": 72455,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72451,
                                            "src": "6235:6:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6220:21:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 72457,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6220:21:172"
                                },
                                {
                                    "id": 72464,
                                    "nodeType": "UncheckedBlock",
                                    "src": "6363:58:172",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 72462,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "baseExpression": {
                                                        "id": 72458,
                                                        "name": "balanceOf",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72147,
                                                        "src": "6387:9:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                            "typeString": "mapping(address => uint256)"
                                                        }
                                                    },
                                                    "id": 72460,
                                                    "indexExpression": {
                                                        "id": 72459,
                                                        "name": "to",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72449,
                                                        "src": "6397:2:172",
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
                                                    "src": "6387:13:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "+=",
                                                "rightHandSide": {
                                                    "id": 72461,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72451,
                                                    "src": "6404:6:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "6387:23:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 72463,
                                            "nodeType": "ExpressionStatement",
                                            "src": "6387:23:172"
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
                                                        "id": 72468,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "6453:1:172",
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
                                                    "id": 72467,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "6445:7:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 72466,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6445:7:172",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 72469,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6445:10:172",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72470,
                                                "name": "to",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72449,
                                                "src": "6457:2:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72471,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72451,
                                                "src": "6461:6:172",
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
                                            "id": 72465,
                                            "name": "Transfer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72127,
                                            "src": "6436:8:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 72472,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6436:32:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72473,
                                    "nodeType": "EmitStatement",
                                    "src": "6431:37:172"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_mint",
                        "nameLocation": "6159:5:172",
                        "parameters": {
                            "id": 72452,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72449,
                                    "mutability": "mutable",
                                    "name": "to",
                                    "nameLocation": "6173:2:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72475,
                                    "src": "6165:10:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72448,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6165:7:172",
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
                                    "id": 72451,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "6185:6:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72475,
                                    "src": "6177:14:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72450,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6177:7:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6164:28:172"
                        },
                        "returnParameters": {
                            "id": 72453,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6210:0:172"
                        },
                        "scope": 72504,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 72503,
                        "nodeType": "FunctionDefinition",
                        "src": "6481:328:172",
                        "nodes": [],
                        "body": {
                            "id": 72502,
                            "nodeType": "Block",
                            "src": "6543:266:172",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 72486,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 72482,
                                                "name": "balanceOf",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72147,
                                                "src": "6553:9:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                    "typeString": "mapping(address => uint256)"
                                                }
                                            },
                                            "id": 72484,
                                            "indexExpression": {
                                                "id": 72483,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72477,
                                                "src": "6563:4:172",
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
                                            "src": "6553:15:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "-=",
                                        "rightHandSide": {
                                            "id": 72485,
                                            "name": "amount",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72479,
                                            "src": "6572:6:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "6553:25:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 72487,
                                    "nodeType": "ExpressionStatement",
                                    "src": "6553:25:172"
                                },
                                {
                                    "id": 72492,
                                    "nodeType": "UncheckedBlock",
                                    "src": "6697:56:172",
                                    "statements": [
                                        {
                                            "expression": {
                                                "id": 72490,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftHandSide": {
                                                    "id": 72488,
                                                    "name": "totalSupply",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72143,
                                                    "src": "6721:11:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "Assignment",
                                                "operator": "-=",
                                                "rightHandSide": {
                                                    "id": 72489,
                                                    "name": "amount",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72479,
                                                    "src": "6736:6:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "6721:21:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 72491,
                                            "nodeType": "ExpressionStatement",
                                            "src": "6721:21:172"
                                        }
                                    ]
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 72494,
                                                "name": "from",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72477,
                                                "src": "6777:4:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "arguments": [
                                                    {
                                                        "hexValue": "30",
                                                        "id": 72497,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "6791:1:172",
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
                                                    "id": 72496,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "6783:7:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_address_$",
                                                        "typeString": "type(address)"
                                                    },
                                                    "typeName": {
                                                        "id": 72495,
                                                        "name": "address",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "6783:7:172",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 72498,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "6783:10:172",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72499,
                                                "name": "amount",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72479,
                                                "src": "6795:6:172",
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
                                            "id": 72493,
                                            "name": "Transfer",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72127,
                                            "src": "6768:8:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,uint256)"
                                            }
                                        },
                                        "id": 72500,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "6768:34:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72501,
                                    "nodeType": "EmitStatement",
                                    "src": "6763:39:172"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "_burn",
                        "nameLocation": "6490:5:172",
                        "parameters": {
                            "id": 72480,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72477,
                                    "mutability": "mutable",
                                    "name": "from",
                                    "nameLocation": "6504:4:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72503,
                                    "src": "6496:12:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72476,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6496:7:172",
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
                                    "id": 72479,
                                    "mutability": "mutable",
                                    "name": "amount",
                                    "nameLocation": "6518:6:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72503,
                                    "src": "6510:14:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 72478,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "6510:7:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "6495:30:172"
                        },
                        "returnParameters": {
                            "id": 72481,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "6543:0:172"
                        },
                        "scope": 72504,
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
                    "id": 72119,
                    "nodeType": "StructuredDocumentation",
                    "src": "68:406:172",
                    "text": "@notice Modern and gas efficient ERC20 + EIP-2612 implementation.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol)\n @author Modified from Uniswap (https://github.com/Uniswap/uniswap-v2-core/blob/master/contracts/UniswapV2ERC20.sol)\n @dev Do not manually set balances without updating totalSupply, as the sum of all user balances must not exceed it."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    72504
                ],
                "name": "ERC20",
                "nameLocation": "492:5:172",
                "scope": 72505,
                "usedErrors": [],
                "usedEvents": [
                    72127,
                    72135
                ]
            }
        ],
        "license": "AGPL-3.0-only"
    },
    "id": 172
};
