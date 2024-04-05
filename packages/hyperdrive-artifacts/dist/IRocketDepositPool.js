export const IRocketDepositPool = {
    "abi": [
        {
            "inputs": [],
            "name": "assignDeposits",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "deposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalance",
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
            "name": "getExcessBalance",
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
            "name": "getMaximumDepositAmount",
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
            "name": "getNodeBalance",
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
            "name": "getUserBalance",
            "outputs": [
                {
                    "internalType": "int256",
                    "name": "",
                    "type": "int256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "maybeAssignDeposits",
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
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "nodeCreditWithdrawal",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_totalAmount",
                    "type": "uint256"
                }
            ],
            "name": "nodeDeposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "recycleDissolvedDeposit",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "recycleExcessCollateral",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "recycleLiquidatedStake",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                }
            ],
            "name": "withdrawExcessBalance",
            "outputs": [],
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
        "assignDeposits()": "27c8f193",
        "deposit()": "d0e30db0",
        "getBalance()": "12065fe0",
        "getExcessBalance()": "888b042f",
        "getMaximumDepositAmount()": "1eddb626",
        "getNodeBalance()": "1e35fed8",
        "getUserBalance()": "b7013dc1",
        "maybeAssignDeposits()": "3b36f592",
        "nodeCreditWithdrawal(uint256)": "606b6497",
        "nodeDeposit(uint256)": "22b1751d",
        "recycleDissolvedDeposit()": "72f5158d",
        "recycleExcessCollateral()": "db82047b",
        "recycleLiquidatedStake()": "1b7dd4c0",
        "withdrawExcessBalance(uint256)": "63a5db9e"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"assignDeposits\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getExcessBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMaximumDepositAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getNodeBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUserBalance\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maybeAssignDeposits\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"nodeCreditWithdrawal\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_totalAmount\",\"type\":\"uint256\"}],\"name\":\"nodeDeposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"recycleDissolvedDeposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"recycleExcessCollateral\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"recycleLiquidatedStake\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"withdrawExcessBalance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRocketDepositPool.sol\":\"IRocketDepositPool\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IRocketDepositPool.sol\":{\"keccak256\":\"0x0dffab5deeb8fab3cdf6a4f8077f0328fb7724c6ac8413dbb742217054b0394a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://18701aa0e0c62c8be0522628a9bbc3edfcb3b7eeb0db5b5d050a4e85f72308ff\",\"dweb:/ipfs/QmQ6boPdVgN1yDZjkv6pf9hzph6PDb7NHujUPgTJxvwPsz\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "assignDeposits"
                },
                {
                    "inputs": [],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "deposit"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getBalance",
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
                    "name": "getExcessBalance",
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
                    "name": "getMaximumDepositAmount",
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
                    "name": "getNodeBalance",
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
                    "name": "getUserBalance",
                    "outputs": [
                        {
                            "internalType": "int256",
                            "name": "",
                            "type": "int256"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "maybeAssignDeposits",
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
                            "name": "_amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "nodeCreditWithdrawal"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_totalAmount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "nodeDeposit"
                },
                {
                    "inputs": [],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "recycleDissolvedDeposit"
                },
                {
                    "inputs": [],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "recycleExcessCollateral"
                },
                {
                    "inputs": [],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "recycleLiquidatedStake"
                },
                {
                    "inputs": [
                        {
                            "internalType": "uint256",
                            "name": "_amount",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "withdrawExcessBalance"
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
                "contracts/src/interfaces/IRocketDepositPool.sol": "IRocketDepositPool"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IRocketDepositPool.sol": {
                "keccak256": "0x0dffab5deeb8fab3cdf6a4f8077f0328fb7724c6ac8413dbb742217054b0394a",
                "urls": [
                    "bzz-raw://18701aa0e0c62c8be0522628a9bbc3edfcb3b7eeb0db5b5d050a4e85f72308ff",
                    "dweb:/ipfs/QmQ6boPdVgN1yDZjkv6pf9hzph6PDb7NHujUPgTJxvwPsz"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IRocketDepositPool.sol",
        "id": 11898,
        "exportedSymbols": {
            "IRocketDepositPool": [
                11897
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:891:105",
        "nodes": [
            {
                "id": 11836,
                "nodeType": "PragmaDirective",
                "src": "39:23:105",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11897,
                "nodeType": "ContractDefinition",
                "src": "64:865:105",
                "nodes": [
                    {
                        "id": 11841,
                        "nodeType": "FunctionDefinition",
                        "src": "99:54:105",
                        "nodes": [],
                        "functionSelector": "12065fe0",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBalance",
                        "nameLocation": "108:10:105",
                        "parameters": {
                            "id": 11837,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "118:2:105"
                        },
                        "returnParameters": {
                            "id": 11840,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11839,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11841,
                                    "src": "144:7:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11838,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "144:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "143:9:105"
                        },
                        "scope": 11897,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11846,
                        "nodeType": "FunctionDefinition",
                        "src": "159:58:105",
                        "nodes": [],
                        "functionSelector": "1e35fed8",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getNodeBalance",
                        "nameLocation": "168:14:105",
                        "parameters": {
                            "id": 11842,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "182:2:105"
                        },
                        "returnParameters": {
                            "id": 11845,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11844,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11846,
                                    "src": "208:7:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11843,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "208:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "207:9:105"
                        },
                        "scope": 11897,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11851,
                        "nodeType": "FunctionDefinition",
                        "src": "223:57:105",
                        "nodes": [],
                        "functionSelector": "b7013dc1",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getUserBalance",
                        "nameLocation": "232:14:105",
                        "parameters": {
                            "id": 11847,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "246:2:105"
                        },
                        "returnParameters": {
                            "id": 11850,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11849,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11851,
                                    "src": "272:6:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 11848,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "272:6:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "271:8:105"
                        },
                        "scope": 11897,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11856,
                        "nodeType": "FunctionDefinition",
                        "src": "286:60:105",
                        "nodes": [],
                        "functionSelector": "888b042f",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getExcessBalance",
                        "nameLocation": "295:16:105",
                        "parameters": {
                            "id": 11852,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "311:2:105"
                        },
                        "returnParameters": {
                            "id": 11855,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11854,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11856,
                                    "src": "337:7:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11853,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "337:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "336:9:105"
                        },
                        "scope": 11897,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11859,
                        "nodeType": "FunctionDefinition",
                        "src": "352:36:105",
                        "nodes": [],
                        "functionSelector": "d0e30db0",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deposit",
                        "nameLocation": "361:7:105",
                        "parameters": {
                            "id": 11857,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "368:2:105"
                        },
                        "returnParameters": {
                            "id": 11858,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "387:0:105"
                        },
                        "scope": 11897,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11864,
                        "nodeType": "FunctionDefinition",
                        "src": "394:67:105",
                        "nodes": [],
                        "functionSelector": "1eddb626",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getMaximumDepositAmount",
                        "nameLocation": "403:23:105",
                        "parameters": {
                            "id": 11860,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "426:2:105"
                        },
                        "returnParameters": {
                            "id": 11863,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11862,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11864,
                                    "src": "452:7:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11861,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "452:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "451:9:105"
                        },
                        "scope": 11897,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11869,
                        "nodeType": "FunctionDefinition",
                        "src": "467:60:105",
                        "nodes": [],
                        "functionSelector": "22b1751d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nodeDeposit",
                        "nameLocation": "476:11:105",
                        "parameters": {
                            "id": 11867,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11866,
                                    "mutability": "mutable",
                                    "name": "_totalAmount",
                                    "nameLocation": "496:12:105",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11869,
                                    "src": "488:20:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11865,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "488:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "487:22:105"
                        },
                        "returnParameters": {
                            "id": 11868,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "526:0:105"
                        },
                        "scope": 11897,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11874,
                        "nodeType": "FunctionDefinition",
                        "src": "533:56:105",
                        "nodes": [],
                        "functionSelector": "606b6497",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nodeCreditWithdrawal",
                        "nameLocation": "542:20:105",
                        "parameters": {
                            "id": 11872,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11871,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "571:7:105",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11874,
                                    "src": "563:15:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11870,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "563:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "562:17:105"
                        },
                        "returnParameters": {
                            "id": 11873,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "588:0:105"
                        },
                        "scope": 11897,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11877,
                        "nodeType": "FunctionDefinition",
                        "src": "595:52:105",
                        "nodes": [],
                        "functionSelector": "72f5158d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "recycleDissolvedDeposit",
                        "nameLocation": "604:23:105",
                        "parameters": {
                            "id": 11875,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "627:2:105"
                        },
                        "returnParameters": {
                            "id": 11876,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "646:0:105"
                        },
                        "scope": 11897,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11880,
                        "nodeType": "FunctionDefinition",
                        "src": "653:52:105",
                        "nodes": [],
                        "functionSelector": "db82047b",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "recycleExcessCollateral",
                        "nameLocation": "662:23:105",
                        "parameters": {
                            "id": 11878,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "685:2:105"
                        },
                        "returnParameters": {
                            "id": 11879,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "704:0:105"
                        },
                        "scope": 11897,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11883,
                        "nodeType": "FunctionDefinition",
                        "src": "711:51:105",
                        "nodes": [],
                        "functionSelector": "1b7dd4c0",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "recycleLiquidatedStake",
                        "nameLocation": "720:22:105",
                        "parameters": {
                            "id": 11881,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "742:2:105"
                        },
                        "returnParameters": {
                            "id": 11882,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "761:0:105"
                        },
                        "scope": 11897,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11886,
                        "nodeType": "FunctionDefinition",
                        "src": "768:35:105",
                        "nodes": [],
                        "functionSelector": "27c8f193",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "assignDeposits",
                        "nameLocation": "777:14:105",
                        "parameters": {
                            "id": 11884,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "791:2:105"
                        },
                        "returnParameters": {
                            "id": 11885,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "802:0:105"
                        },
                        "scope": 11897,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11891,
                        "nodeType": "FunctionDefinition",
                        "src": "809:55:105",
                        "nodes": [],
                        "functionSelector": "3b36f592",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maybeAssignDeposits",
                        "nameLocation": "818:19:105",
                        "parameters": {
                            "id": 11887,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "837:2:105"
                        },
                        "returnParameters": {
                            "id": 11890,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11889,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11891,
                                    "src": "858:4:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 11888,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "858:4:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "857:6:105"
                        },
                        "scope": 11897,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11896,
                        "nodeType": "FunctionDefinition",
                        "src": "870:57:105",
                        "nodes": [],
                        "functionSelector": "63a5db9e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "withdrawExcessBalance",
                        "nameLocation": "879:21:105",
                        "parameters": {
                            "id": 11894,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11893,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "909:7:105",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11896,
                                    "src": "901:15:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11892,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "901:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "900:17:105"
                        },
                        "returnParameters": {
                            "id": 11895,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "926:0:105"
                        },
                        "scope": 11897,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IRocketDepositPool",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    11897
                ],
                "name": "IRocketDepositPool",
                "nameLocation": "74:18:105",
                "scope": 11898,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 105
};
