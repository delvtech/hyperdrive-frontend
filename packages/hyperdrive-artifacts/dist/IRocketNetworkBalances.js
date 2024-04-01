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
        "id": 12121,
        "exportedSymbols": {
            "IRocketNetworkBalances": [
                12120
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:787:106",
        "nodes": [
            {
                "id": 12067,
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
                "id": 12120,
                "nodeType": "ContractDefinition",
                "src": "64:761:106",
                "nodes": [
                    {
                        "id": 12072,
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
                            "id": 12068,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "128:2:106"
                        },
                        "returnParameters": {
                            "id": 12071,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12070,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12072,
                                    "src": "154:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12069,
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
                        "scope": 12120,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12077,
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
                            "id": 12073,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "202:2:106"
                        },
                        "returnParameters": {
                            "id": 12076,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12075,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12077,
                                    "src": "228:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12074,
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
                        "scope": 12120,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12082,
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
                            "id": 12078,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "270:2:106"
                        },
                        "returnParameters": {
                            "id": 12081,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12080,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12082,
                                    "src": "296:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12079,
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
                        "scope": 12120,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12087,
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
                            "id": 12083,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "340:2:106"
                        },
                        "returnParameters": {
                            "id": 12086,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12085,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12087,
                                    "src": "366:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12084,
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
                        "scope": 12120,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12092,
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
                            "id": 12088,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "408:2:106"
                        },
                        "returnParameters": {
                            "id": 12091,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12090,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12092,
                                    "src": "434:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12089,
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
                        "scope": 12120,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12097,
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
                            "id": 12093,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "479:2:106"
                        },
                        "returnParameters": {
                            "id": 12096,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12095,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12097,
                                    "src": "505:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12094,
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
                        "scope": 12120,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12108,
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
                            "id": 12106,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12099,
                                    "mutability": "mutable",
                                    "name": "_block",
                                    "nameLocation": "561:6:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12108,
                                    "src": "553:14:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12098,
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
                                    "id": 12101,
                                    "mutability": "mutable",
                                    "name": "_total",
                                    "nameLocation": "585:6:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12108,
                                    "src": "577:14:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12100,
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
                                    "id": 12103,
                                    "mutability": "mutable",
                                    "name": "_staking",
                                    "nameLocation": "609:8:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12108,
                                    "src": "601:16:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12102,
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
                                    "id": 12105,
                                    "mutability": "mutable",
                                    "name": "_rethSupply",
                                    "nameLocation": "635:11:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12108,
                                    "src": "627:19:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12104,
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
                            "id": 12107,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "661:0:106"
                        },
                        "scope": 12120,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12119,
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
                            "id": 12117,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12110,
                                    "mutability": "mutable",
                                    "name": "_block",
                                    "nameLocation": "716:6:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12119,
                                    "src": "708:14:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12109,
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
                                    "id": 12112,
                                    "mutability": "mutable",
                                    "name": "_totalEth",
                                    "nameLocation": "740:9:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12119,
                                    "src": "732:17:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12111,
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
                                    "id": 12114,
                                    "mutability": "mutable",
                                    "name": "_stakingEth",
                                    "nameLocation": "767:11:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12119,
                                    "src": "759:19:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12113,
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
                                    "id": 12116,
                                    "mutability": "mutable",
                                    "name": "_rethSupply",
                                    "nameLocation": "796:11:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12119,
                                    "src": "788:19:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12115,
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
                            "id": 12118,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "822:0:106"
                        },
                        "scope": 12120,
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
                    12120
                ],
                "name": "IRocketNetworkBalances",
                "nameLocation": "74:22:106",
                "scope": 12121,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 106
};
