export const IMultiTokenRead = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "owner",
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
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
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
                    "name": "owner",
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
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                },
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
            "name": "perTokenApprovals",
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
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
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
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                }
            ],
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
        "balanceOf(uint256,address)": "3656eec2",
        "decimals()": "313ce567",
        "isApprovedForAll(address,address)": "e985e9c5",
        "name(uint256)": "00ad800c",
        "nonces(address)": "7ecebe00",
        "perTokenApprovals(uint256,address,address)": "21ff32a9",
        "symbol(uint256)": "4e41a1fb",
        "totalSupply(uint256)": "bd85b039"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"balanceOf(uint256,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The balance of the owner.\"}},\"decimals()\":{\"returns\":{\"_0\":\"The decimals of the MultiToken.\"}},\"isApprovedForAll(address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\"},\"returns\":{\"_0\":\"The approval-for-all status of the spender for the owner.\"}},\"name(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The name of the MultiToken.\"}},\"nonces(address)\":{\"params\":{\"owner\":\"The owner of the tokens.\"},\"returns\":{\"_0\":\"The permit nonce of the owner.\"}},\"perTokenApprovals(uint256,address,address)\":{\"params\":{\"owner\":\"The owner of the tokens.\",\"spender\":\"The spender of the tokens.\",\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The allowance of the spender for the owner.\"}},\"symbol(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The symbol of the MultiToken.\"}},\"totalSupply(uint256)\":{\"params\":{\"tokenId\":\"The sub-token ID.\"},\"returns\":{\"_0\":\"The total supply of the MultiToken.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"balanceOf(uint256,address)\":{\"notice\":\"Gets the balance of a spender for a sub-token.\"},\"decimals()\":{\"notice\":\"Gets the decimals of the MultiToken.\"},\"isApprovedForAll(address,address)\":{\"notice\":\"Gets the approval-for-all status of a spender on behalf of an         owner.\"},\"name(uint256)\":{\"notice\":\"Gets the name of the MultiToken.\"},\"nonces(address)\":{\"notice\":\"Gets the permit nonce for an account.\"},\"perTokenApprovals(uint256,address,address)\":{\"notice\":\"Gets the allowance of a spender for a sub-token.\"},\"symbol(uint256)\":{\"notice\":\"Gets the symbol of the MultiToken.\"},\"totalSupply(uint256)\":{\"notice\":\"Gets the total supply of the MultiToken.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenRead.sol\":\"IMultiTokenRead\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}",
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
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "owner",
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
                    "name": "isApprovedForAll",
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
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
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
                            "name": "owner",
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
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        },
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
                    "name": "perTokenApprovals",
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
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
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
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
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
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "balanceOf(uint256,address)": {
                        "params": {
                            "owner": "The owner of the tokens.",
                            "tokenId": "The sub-token ID."
                        },
                        "returns": {
                            "_0": "The balance of the owner."
                        }
                    },
                    "decimals()": {
                        "returns": {
                            "_0": "The decimals of the MultiToken."
                        }
                    },
                    "isApprovedForAll(address,address)": {
                        "params": {
                            "owner": "The owner of the tokens.",
                            "spender": "The spender of the tokens."
                        },
                        "returns": {
                            "_0": "The approval-for-all status of the spender for the owner."
                        }
                    },
                    "name(uint256)": {
                        "params": {
                            "tokenId": "The sub-token ID."
                        },
                        "returns": {
                            "_0": "The name of the MultiToken."
                        }
                    },
                    "nonces(address)": {
                        "params": {
                            "owner": "The owner of the tokens."
                        },
                        "returns": {
                            "_0": "The permit nonce of the owner."
                        }
                    },
                    "perTokenApprovals(uint256,address,address)": {
                        "params": {
                            "owner": "The owner of the tokens.",
                            "spender": "The spender of the tokens.",
                            "tokenId": "The sub-token ID."
                        },
                        "returns": {
                            "_0": "The allowance of the spender for the owner."
                        }
                    },
                    "symbol(uint256)": {
                        "params": {
                            "tokenId": "The sub-token ID."
                        },
                        "returns": {
                            "_0": "The symbol of the MultiToken."
                        }
                    },
                    "totalSupply(uint256)": {
                        "params": {
                            "tokenId": "The sub-token ID."
                        },
                        "returns": {
                            "_0": "The total supply of the MultiToken."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "balanceOf(uint256,address)": {
                        "notice": "Gets the balance of a spender for a sub-token."
                    },
                    "decimals()": {
                        "notice": "Gets the decimals of the MultiToken."
                    },
                    "isApprovedForAll(address,address)": {
                        "notice": "Gets the approval-for-all status of a spender on behalf of an         owner."
                    },
                    "name(uint256)": {
                        "notice": "Gets the name of the MultiToken."
                    },
                    "nonces(address)": {
                        "notice": "Gets the permit nonce for an account."
                    },
                    "perTokenApprovals(uint256,address,address)": {
                        "notice": "Gets the allowance of a spender for a sub-token."
                    },
                    "symbol(uint256)": {
                        "notice": "Gets the symbol of the MultiToken."
                    },
                    "totalSupply(uint256)": {
                        "notice": "Gets the total supply of the MultiToken."
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
                "contracts/src/interfaces/IMultiTokenRead.sol": "IMultiTokenRead"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0",
                "urls": [
                    "bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11",
                    "dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IMultiTokenRead.sol",
        "id": 11548,
        "exportedSymbols": {
            "IMultiTokenRead": [
                11547
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:2172:100",
        "nodes": [
            {
                "id": 11476,
                "nodeType": "PragmaDirective",
                "src": "39:23:100",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11547,
                "nodeType": "ContractDefinition",
                "src": "64:2146:100",
                "nodes": [
                    {
                        "id": 11482,
                        "nodeType": "FunctionDefinition",
                        "src": "197:50:100",
                        "nodes": [],
                        "documentation": {
                            "id": 11477,
                            "nodeType": "StructuredDocumentation",
                            "src": "96:96:100",
                            "text": "@notice Gets the decimals of the MultiToken.\n @return The decimals of the MultiToken."
                        },
                        "functionSelector": "313ce567",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "decimals",
                        "nameLocation": "206:8:100",
                        "parameters": {
                            "id": 11478,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "214:2:100"
                        },
                        "returnParameters": {
                            "id": 11481,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11480,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11482,
                                    "src": "240:5:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                    },
                                    "typeName": {
                                        "id": 11479,
                                        "name": "uint8",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "240:5:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "239:7:100"
                        },
                        "scope": 11547,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11490,
                        "nodeType": "FunctionDefinition",
                        "src": "387:69:100",
                        "nodes": [],
                        "documentation": {
                            "id": 11483,
                            "nodeType": "StructuredDocumentation",
                            "src": "253:129:100",
                            "text": "@notice Gets the name of the MultiToken.\n @param tokenId The sub-token ID.\n @return The name of the MultiToken."
                        },
                        "functionSelector": "00ad800c",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "name",
                        "nameLocation": "396:4:100",
                        "parameters": {
                            "id": 11486,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11485,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "409:7:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11490,
                                    "src": "401:15:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11484,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "401:7:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "400:17:100"
                        },
                        "returnParameters": {
                            "id": 11489,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11488,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11490,
                                    "src": "441:13:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 11487,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "441:6:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "440:15:100"
                        },
                        "scope": 11547,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11498,
                        "nodeType": "FunctionDefinition",
                        "src": "600:71:100",
                        "nodes": [],
                        "documentation": {
                            "id": 11491,
                            "nodeType": "StructuredDocumentation",
                            "src": "462:133:100",
                            "text": "@notice Gets the symbol of the MultiToken.\n @param tokenId The sub-token ID.\n @return The symbol of the MultiToken."
                        },
                        "functionSelector": "4e41a1fb",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "symbol",
                        "nameLocation": "609:6:100",
                        "parameters": {
                            "id": 11494,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11493,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "624:7:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11498,
                                    "src": "616:15:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11492,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "616:7:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "615:17:100"
                        },
                        "returnParameters": {
                            "id": 11497,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11496,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11498,
                                    "src": "656:13:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 11495,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "656:6:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "655:15:100"
                        },
                        "scope": 11547,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11506,
                        "nodeType": "FunctionDefinition",
                        "src": "827:70:100",
                        "nodes": [],
                        "documentation": {
                            "id": 11499,
                            "nodeType": "StructuredDocumentation",
                            "src": "677:145:100",
                            "text": "@notice Gets the total supply of the MultiToken.\n @param tokenId The sub-token ID.\n @return The total supply of the MultiToken."
                        },
                        "functionSelector": "bd85b039",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalSupply",
                        "nameLocation": "836:11:100",
                        "parameters": {
                            "id": 11502,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11501,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "856:7:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11506,
                                    "src": "848:15:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11500,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "848:7:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "847:17:100"
                        },
                        "returnParameters": {
                            "id": 11505,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11504,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11506,
                                    "src": "888:7:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11503,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "888:7:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "887:9:100"
                        },
                        "scope": 11547,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11516,
                        "nodeType": "FunctionDefinition",
                        "src": "1174:109:100",
                        "nodes": [],
                        "documentation": {
                            "id": 11507,
                            "nodeType": "StructuredDocumentation",
                            "src": "903:266:100",
                            "text": "@notice Gets the approval-for-all status of a spender on behalf of an\n         owner.\n @param owner The owner of the tokens.\n @param spender The spender of the tokens.\n @return The approval-for-all status of the spender for the owner."
                        },
                        "functionSelector": "e985e9c5",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "isApprovedForAll",
                        "nameLocation": "1183:16:100",
                        "parameters": {
                            "id": 11512,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11509,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "1217:5:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11516,
                                    "src": "1209:13:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11508,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1209:7:100",
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
                                    "id": 11511,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "1240:7:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11516,
                                    "src": "1232:15:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11510,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1232:7:100",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1199:54:100"
                        },
                        "returnParameters": {
                            "id": 11515,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11514,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11516,
                                    "src": "1277:4:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11513,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1277:4:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1276:6:100"
                        },
                        "scope": 11547,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11528,
                        "nodeType": "FunctionDefinition",
                        "src": "1551:138:100",
                        "nodes": [],
                        "documentation": {
                            "id": 11517,
                            "nodeType": "StructuredDocumentation",
                            "src": "1289:257:100",
                            "text": "@notice Gets the allowance of a spender for a sub-token.\n @param tokenId The sub-token ID.\n @param owner The owner of the tokens.\n @param spender The spender of the tokens.\n @return The allowance of the spender for the owner."
                        },
                        "functionSelector": "21ff32a9",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "perTokenApprovals",
                        "nameLocation": "1560:17:100",
                        "parameters": {
                            "id": 11524,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11519,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "1595:7:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11528,
                                    "src": "1587:15:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11518,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1587:7:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11521,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "1620:5:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11528,
                                    "src": "1612:13:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11520,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1612:7:100",
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
                                    "id": 11523,
                                    "mutability": "mutable",
                                    "name": "spender",
                                    "nameLocation": "1643:7:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11528,
                                    "src": "1635:15:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11522,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1635:7:100",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1577:79:100"
                        },
                        "returnParameters": {
                            "id": 11527,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11526,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11528,
                                    "src": "1680:7:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11525,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1680:7:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1679:9:100"
                        },
                        "scope": 11547,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11538,
                        "nodeType": "FunctionDefinition",
                        "src": "1887:105:100",
                        "nodes": [],
                        "documentation": {
                            "id": 11529,
                            "nodeType": "StructuredDocumentation",
                            "src": "1695:187:100",
                            "text": "@notice Gets the balance of a spender for a sub-token.\n @param tokenId The sub-token ID.\n @param owner The owner of the tokens.\n @return The balance of the owner."
                        },
                        "functionSelector": "3656eec2",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "balanceOf",
                        "nameLocation": "1896:9:100",
                        "parameters": {
                            "id": 11534,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11531,
                                    "mutability": "mutable",
                                    "name": "tokenId",
                                    "nameLocation": "1923:7:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11538,
                                    "src": "1915:15:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11530,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1915:7:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11533,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "1948:5:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11538,
                                    "src": "1940:13:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11532,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1940:7:100",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1905:54:100"
                        },
                        "returnParameters": {
                            "id": 11537,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11536,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11538,
                                    "src": "1983:7:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11535,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1983:7:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1982:9:100"
                        },
                        "scope": 11547,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11546,
                        "nodeType": "FunctionDefinition",
                        "src": "2145:63:100",
                        "nodes": [],
                        "documentation": {
                            "id": 11539,
                            "nodeType": "StructuredDocumentation",
                            "src": "1998:142:100",
                            "text": "@notice Gets the permit nonce for an account.\n @param owner The owner of the tokens.\n @return The permit nonce of the owner."
                        },
                        "functionSelector": "7ecebe00",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nonces",
                        "nameLocation": "2154:6:100",
                        "parameters": {
                            "id": 11542,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11541,
                                    "mutability": "mutable",
                                    "name": "owner",
                                    "nameLocation": "2169:5:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11546,
                                    "src": "2161:13:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11540,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2161:7:100",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2160:15:100"
                        },
                        "returnParameters": {
                            "id": 11545,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11544,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11546,
                                    "src": "2199:7:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11543,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2199:7:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2198:9:100"
                        },
                        "scope": 11547,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IMultiTokenRead",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    11547
                ],
                "name": "IMultiTokenRead",
                "nameLocation": "74:15:100",
                "scope": 11548,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 100
};
