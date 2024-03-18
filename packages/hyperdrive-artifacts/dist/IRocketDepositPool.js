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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"assignDeposits\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"deposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getExcessBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMaximumDepositAmount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getNodeBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUserBalance\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maybeAssignDeposits\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"nodeCreditWithdrawal\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_totalAmount\",\"type\":\"uint256\"}],\"name\":\"nodeDeposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"recycleDissolvedDeposit\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"recycleExcessCollateral\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"recycleLiquidatedStake\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"withdrawExcessBalance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRocketDepositPool.sol\":\"IRocketDepositPool\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IRocketDepositPool.sol\":{\"keccak256\":\"0x0dffab5deeb8fab3cdf6a4f8077f0328fb7724c6ac8413dbb742217054b0394a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://18701aa0e0c62c8be0522628a9bbc3edfcb3b7eeb0db5b5d050a4e85f72308ff\",\"dweb:/ipfs/QmQ6boPdVgN1yDZjkv6pf9hzph6PDb7NHujUPgTJxvwPsz\"]}},\"version\":1}",
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
        "id": 12369,
        "exportedSymbols": {
            "IRocketDepositPool": [
                12368
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:891:104",
        "nodes": [
            {
                "id": 12307,
                "nodeType": "PragmaDirective",
                "src": "39:23:104",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 12368,
                "nodeType": "ContractDefinition",
                "src": "64:865:104",
                "nodes": [
                    {
                        "id": 12312,
                        "nodeType": "FunctionDefinition",
                        "src": "99:54:104",
                        "nodes": [],
                        "functionSelector": "12065fe0",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBalance",
                        "nameLocation": "108:10:104",
                        "parameters": {
                            "id": 12308,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "118:2:104"
                        },
                        "returnParameters": {
                            "id": 12311,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12310,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12312,
                                    "src": "144:7:104",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12309,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "144:7:104",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "143:9:104"
                        },
                        "scope": 12368,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12317,
                        "nodeType": "FunctionDefinition",
                        "src": "159:58:104",
                        "nodes": [],
                        "functionSelector": "1e35fed8",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getNodeBalance",
                        "nameLocation": "168:14:104",
                        "parameters": {
                            "id": 12313,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "182:2:104"
                        },
                        "returnParameters": {
                            "id": 12316,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12315,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12317,
                                    "src": "208:7:104",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12314,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "208:7:104",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "207:9:104"
                        },
                        "scope": 12368,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12322,
                        "nodeType": "FunctionDefinition",
                        "src": "223:57:104",
                        "nodes": [],
                        "functionSelector": "b7013dc1",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getUserBalance",
                        "nameLocation": "232:14:104",
                        "parameters": {
                            "id": 12318,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "246:2:104"
                        },
                        "returnParameters": {
                            "id": 12321,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12320,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12322,
                                    "src": "272:6:104",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                    },
                                    "typeName": {
                                        "id": 12319,
                                        "name": "int256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "272:6:104",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "271:8:104"
                        },
                        "scope": 12368,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12327,
                        "nodeType": "FunctionDefinition",
                        "src": "286:60:104",
                        "nodes": [],
                        "functionSelector": "888b042f",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getExcessBalance",
                        "nameLocation": "295:16:104",
                        "parameters": {
                            "id": 12323,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "311:2:104"
                        },
                        "returnParameters": {
                            "id": 12326,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12325,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12327,
                                    "src": "337:7:104",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12324,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "337:7:104",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "336:9:104"
                        },
                        "scope": 12368,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12330,
                        "nodeType": "FunctionDefinition",
                        "src": "352:36:104",
                        "nodes": [],
                        "functionSelector": "d0e30db0",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "deposit",
                        "nameLocation": "361:7:104",
                        "parameters": {
                            "id": 12328,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "368:2:104"
                        },
                        "returnParameters": {
                            "id": 12329,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "387:0:104"
                        },
                        "scope": 12368,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12335,
                        "nodeType": "FunctionDefinition",
                        "src": "394:67:104",
                        "nodes": [],
                        "functionSelector": "1eddb626",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getMaximumDepositAmount",
                        "nameLocation": "403:23:104",
                        "parameters": {
                            "id": 12331,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "426:2:104"
                        },
                        "returnParameters": {
                            "id": 12334,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12333,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12335,
                                    "src": "452:7:104",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12332,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "452:7:104",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "451:9:104"
                        },
                        "scope": 12368,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12340,
                        "nodeType": "FunctionDefinition",
                        "src": "467:60:104",
                        "nodes": [],
                        "functionSelector": "22b1751d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nodeDeposit",
                        "nameLocation": "476:11:104",
                        "parameters": {
                            "id": 12338,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12337,
                                    "mutability": "mutable",
                                    "name": "_totalAmount",
                                    "nameLocation": "496:12:104",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12340,
                                    "src": "488:20:104",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12336,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "488:7:104",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "487:22:104"
                        },
                        "returnParameters": {
                            "id": 12339,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "526:0:104"
                        },
                        "scope": 12368,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12345,
                        "nodeType": "FunctionDefinition",
                        "src": "533:56:104",
                        "nodes": [],
                        "functionSelector": "606b6497",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "nodeCreditWithdrawal",
                        "nameLocation": "542:20:104",
                        "parameters": {
                            "id": 12343,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12342,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "571:7:104",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12345,
                                    "src": "563:15:104",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12341,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "563:7:104",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "562:17:104"
                        },
                        "returnParameters": {
                            "id": 12344,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "588:0:104"
                        },
                        "scope": 12368,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12348,
                        "nodeType": "FunctionDefinition",
                        "src": "595:52:104",
                        "nodes": [],
                        "functionSelector": "72f5158d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "recycleDissolvedDeposit",
                        "nameLocation": "604:23:104",
                        "parameters": {
                            "id": 12346,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "627:2:104"
                        },
                        "returnParameters": {
                            "id": 12347,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "646:0:104"
                        },
                        "scope": 12368,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12351,
                        "nodeType": "FunctionDefinition",
                        "src": "653:52:104",
                        "nodes": [],
                        "functionSelector": "db82047b",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "recycleExcessCollateral",
                        "nameLocation": "662:23:104",
                        "parameters": {
                            "id": 12349,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "685:2:104"
                        },
                        "returnParameters": {
                            "id": 12350,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "704:0:104"
                        },
                        "scope": 12368,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12354,
                        "nodeType": "FunctionDefinition",
                        "src": "711:51:104",
                        "nodes": [],
                        "functionSelector": "1b7dd4c0",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "recycleLiquidatedStake",
                        "nameLocation": "720:22:104",
                        "parameters": {
                            "id": 12352,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "742:2:104"
                        },
                        "returnParameters": {
                            "id": 12353,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "761:0:104"
                        },
                        "scope": 12368,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12357,
                        "nodeType": "FunctionDefinition",
                        "src": "768:35:104",
                        "nodes": [],
                        "functionSelector": "27c8f193",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "assignDeposits",
                        "nameLocation": "777:14:104",
                        "parameters": {
                            "id": 12355,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "791:2:104"
                        },
                        "returnParameters": {
                            "id": 12356,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "802:0:104"
                        },
                        "scope": 12368,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12362,
                        "nodeType": "FunctionDefinition",
                        "src": "809:55:104",
                        "nodes": [],
                        "functionSelector": "3b36f592",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "maybeAssignDeposits",
                        "nameLocation": "818:19:104",
                        "parameters": {
                            "id": 12358,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "837:2:104"
                        },
                        "returnParameters": {
                            "id": 12361,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12360,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12362,
                                    "src": "858:4:104",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 12359,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "858:4:104",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "857:6:104"
                        },
                        "scope": 12368,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12367,
                        "nodeType": "FunctionDefinition",
                        "src": "870:57:104",
                        "nodes": [],
                        "functionSelector": "63a5db9e",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "withdrawExcessBalance",
                        "nameLocation": "879:21:104",
                        "parameters": {
                            "id": 12365,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12364,
                                    "mutability": "mutable",
                                    "name": "_amount",
                                    "nameLocation": "909:7:104",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12367,
                                    "src": "901:15:104",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12363,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "901:7:104",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "900:17:104"
                        },
                        "returnParameters": {
                            "id": 12366,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "926:0:104"
                        },
                        "scope": 12368,
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
                    12368
                ],
                "name": "IRocketDepositPool",
                "nameLocation": "74:18:104",
                "scope": 12369,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 104
};
