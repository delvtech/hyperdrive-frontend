export const IRocketNetworkBalances = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_block",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_totalEth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_stakingEth",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rethSupply",
                    "type": "uint256"
                }
            ],
            "name": "executeUpdateBalances",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getBalancesBlock",
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
            "name": "getETHUtilizationRate",
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
            "name": "getLatestReportableBlock",
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
            "name": "getStakingETHBalance",
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
            "name": "getTotalETHBalance",
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
            "name": "getTotalRETHSupply",
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
                    "name": "_block",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_total",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_staking",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_rethSupply",
                    "type": "uint256"
                }
            ],
            "name": "submitBalances",
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
        "executeUpdateBalances(uint256,uint256,uint256,uint256)": "56ff3625",
        "getBalancesBlock()": "9100c13d",
        "getETHUtilizationRate()": "9dba66af",
        "getLatestReportableBlock()": "a9bb16ed",
        "getStakingETHBalance()": "f1eda634",
        "getTotalETHBalance()": "964d042c",
        "getTotalRETHSupply()": "c4c8d0ad",
        "submitBalances(uint256,uint256,uint256,uint256)": "32db5470"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_block\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalEth\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_stakingEth\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_rethSupply\",\"type\":\"uint256\"}],\"name\":\"executeUpdateBalances\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBalancesBlock\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getETHUtilizationRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLatestReportableBlock\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getStakingETHBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalETHBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalRETHSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_block\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_total\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_staking\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_rethSupply\",\"type\":\"uint256\"}],\"name\":\"submitBalances\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRocketNetworkBalances.sol\":\"IRocketNetworkBalances\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IRocketNetworkBalances.sol\":{\"keccak256\":\"0xd97697fbb8156373f0cbcdfcbbfdd9a0a872e35e924031b61f53696693e780ef\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://300dd50b3f96c9f65e6cc1c677a2faa8b2542f0366041d85d4e83060ad530fb8\",\"dweb:/ipfs/QmQnNPYvWNDGqPyQ6ugP3LWJR9cEftteCYouHJ51xckFXa\"]}},\"version\":1}",
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
                            "name": "_block",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_totalEth",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_stakingEth",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_rethSupply",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "executeUpdateBalances"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getBalancesBlock",
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
                    "name": "getETHUtilizationRate",
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
                    "name": "getLatestReportableBlock",
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
                    "name": "getStakingETHBalance",
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
                    "name": "getTotalETHBalance",
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
                    "name": "getTotalRETHSupply",
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
                            "name": "_block",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_total",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_staking",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_rethSupply",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "submitBalances"
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
                "contracts/src/interfaces/IRocketNetworkBalances.sol": "IRocketNetworkBalances"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IRocketNetworkBalances.sol": {
                "keccak256": "0xd97697fbb8156373f0cbcdfcbbfdd9a0a872e35e924031b61f53696693e780ef",
                "urls": [
                    "bzz-raw://300dd50b3f96c9f65e6cc1c677a2faa8b2542f0366041d85d4e83060ad530fb8",
                    "dweb:/ipfs/QmQnNPYvWNDGqPyQ6ugP3LWJR9cEftteCYouHJ51xckFXa"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IRocketNetworkBalances.sol",
        "id": 11801,
        "exportedSymbols": {
            "IRocketNetworkBalances": [
                11800
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:787:106",
        "nodes": [
            {
                "id": 11747,
                "nodeType": "PragmaDirective",
                "src": "39:23:106",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11800,
                "nodeType": "ContractDefinition",
                "src": "64:761:106",
                "nodes": [
                    {
                        "id": 11752,
                        "nodeType": "FunctionDefinition",
                        "src": "103:60:106",
                        "nodes": [],
                        "functionSelector": "9100c13d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBalancesBlock",
                        "nameLocation": "112:16:106",
                        "parameters": {
                            "id": 11748,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "128:2:106"
                        },
                        "returnParameters": {
                            "id": 11751,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11750,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11752,
                                    "src": "154:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11749,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "154:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "153:9:106"
                        },
                        "scope": 11800,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11757,
                        "nodeType": "FunctionDefinition",
                        "src": "169:68:106",
                        "nodes": [],
                        "functionSelector": "a9bb16ed",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getLatestReportableBlock",
                        "nameLocation": "178:24:106",
                        "parameters": {
                            "id": 11753,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "202:2:106"
                        },
                        "returnParameters": {
                            "id": 11756,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11755,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11757,
                                    "src": "228:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11754,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "228:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "227:9:106"
                        },
                        "scope": 11800,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11762,
                        "nodeType": "FunctionDefinition",
                        "src": "243:62:106",
                        "nodes": [],
                        "functionSelector": "964d042c",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalETHBalance",
                        "nameLocation": "252:18:106",
                        "parameters": {
                            "id": 11758,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "270:2:106"
                        },
                        "returnParameters": {
                            "id": 11761,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11760,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11762,
                                    "src": "296:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11759,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "296:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "295:9:106"
                        },
                        "scope": 11800,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11767,
                        "nodeType": "FunctionDefinition",
                        "src": "311:64:106",
                        "nodes": [],
                        "functionSelector": "f1eda634",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getStakingETHBalance",
                        "nameLocation": "320:20:106",
                        "parameters": {
                            "id": 11763,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "340:2:106"
                        },
                        "returnParameters": {
                            "id": 11766,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11765,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11767,
                                    "src": "366:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11764,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "366:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "365:9:106"
                        },
                        "scope": 11800,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11772,
                        "nodeType": "FunctionDefinition",
                        "src": "381:62:106",
                        "nodes": [],
                        "functionSelector": "c4c8d0ad",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalRETHSupply",
                        "nameLocation": "390:18:106",
                        "parameters": {
                            "id": 11768,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "408:2:106"
                        },
                        "returnParameters": {
                            "id": 11771,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11770,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11772,
                                    "src": "434:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11769,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "434:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "433:9:106"
                        },
                        "scope": 11800,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11777,
                        "nodeType": "FunctionDefinition",
                        "src": "449:65:106",
                        "nodes": [],
                        "functionSelector": "9dba66af",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getETHUtilizationRate",
                        "nameLocation": "458:21:106",
                        "parameters": {
                            "id": 11773,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "479:2:106"
                        },
                        "returnParameters": {
                            "id": 11776,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11775,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11777,
                                    "src": "505:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11774,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "505:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "504:9:106"
                        },
                        "scope": 11800,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11788,
                        "nodeType": "FunctionDefinition",
                        "src": "520:142:106",
                        "nodes": [],
                        "functionSelector": "32db5470",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "submitBalances",
                        "nameLocation": "529:14:106",
                        "parameters": {
                            "id": 11786,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11779,
                                    "mutability": "mutable",
                                    "name": "_block",
                                    "nameLocation": "561:6:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11788,
                                    "src": "553:14:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11778,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "553:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11781,
                                    "mutability": "mutable",
                                    "name": "_total",
                                    "nameLocation": "585:6:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11788,
                                    "src": "577:14:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11780,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "577:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11783,
                                    "mutability": "mutable",
                                    "name": "_staking",
                                    "nameLocation": "609:8:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11788,
                                    "src": "601:16:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11782,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "601:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11785,
                                    "mutability": "mutable",
                                    "name": "_rethSupply",
                                    "nameLocation": "635:11:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11788,
                                    "src": "627:19:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11784,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "627:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "543:109:106"
                        },
                        "returnParameters": {
                            "id": 11787,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "661:0:106"
                        },
                        "scope": 11800,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11799,
                        "nodeType": "FunctionDefinition",
                        "src": "668:155:106",
                        "nodes": [],
                        "functionSelector": "56ff3625",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "executeUpdateBalances",
                        "nameLocation": "677:21:106",
                        "parameters": {
                            "id": 11797,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11790,
                                    "mutability": "mutable",
                                    "name": "_block",
                                    "nameLocation": "716:6:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11799,
                                    "src": "708:14:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11789,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "708:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11792,
                                    "mutability": "mutable",
                                    "name": "_totalEth",
                                    "nameLocation": "740:9:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11799,
                                    "src": "732:17:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11791,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "732:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11794,
                                    "mutability": "mutable",
                                    "name": "_stakingEth",
                                    "nameLocation": "767:11:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11799,
                                    "src": "759:19:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11793,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "759:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11796,
                                    "mutability": "mutable",
                                    "name": "_rethSupply",
                                    "nameLocation": "796:11:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11799,
                                    "src": "788:19:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11795,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "788:7:106",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "698:115:106"
                        },
                        "returnParameters": {
                            "id": 11798,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "822:0:106"
                        },
                        "scope": 11800,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IRocketNetworkBalances",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    11800
                ],
                "name": "IRocketNetworkBalances",
                "nameLocation": "74:22:106",
                "scope": 11801,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 106
};
