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
        "id": 11953,
        "exportedSymbols": {
            "IRocketNetworkBalances": [
                11952
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:787:106",
        "nodes": [
            {
                "id": 11899,
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
                "id": 11952,
                "nodeType": "ContractDefinition",
                "src": "64:761:106",
                "nodes": [
                    {
                        "id": 11904,
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
                            "id": 11900,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "128:2:106"
                        },
                        "returnParameters": {
                            "id": 11903,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11902,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11904,
                                    "src": "154:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11901,
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
                        "scope": 11952,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11909,
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
                            "id": 11905,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "202:2:106"
                        },
                        "returnParameters": {
                            "id": 11908,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11907,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11909,
                                    "src": "228:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11906,
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
                        "scope": 11952,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11914,
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
                            "id": 11910,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "270:2:106"
                        },
                        "returnParameters": {
                            "id": 11913,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11912,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11914,
                                    "src": "296:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11911,
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
                        "scope": 11952,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11919,
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
                            "id": 11915,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "340:2:106"
                        },
                        "returnParameters": {
                            "id": 11918,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11917,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11919,
                                    "src": "366:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11916,
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
                        "scope": 11952,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11924,
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
                            "id": 11920,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "408:2:106"
                        },
                        "returnParameters": {
                            "id": 11923,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11922,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11924,
                                    "src": "434:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11921,
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
                        "scope": 11952,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11929,
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
                            "id": 11925,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "479:2:106"
                        },
                        "returnParameters": {
                            "id": 11928,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11927,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11929,
                                    "src": "505:7:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11926,
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
                        "scope": 11952,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11940,
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
                            "id": 11938,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11931,
                                    "mutability": "mutable",
                                    "name": "_block",
                                    "nameLocation": "561:6:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11940,
                                    "src": "553:14:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11930,
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
                                    "id": 11933,
                                    "mutability": "mutable",
                                    "name": "_total",
                                    "nameLocation": "585:6:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11940,
                                    "src": "577:14:106",
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
                                    "id": 11935,
                                    "mutability": "mutable",
                                    "name": "_staking",
                                    "nameLocation": "609:8:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11940,
                                    "src": "601:16:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11934,
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
                                    "id": 11937,
                                    "mutability": "mutable",
                                    "name": "_rethSupply",
                                    "nameLocation": "635:11:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11940,
                                    "src": "627:19:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11936,
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
                            "id": 11939,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "661:0:106"
                        },
                        "scope": 11952,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11951,
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
                            "id": 11949,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11942,
                                    "mutability": "mutable",
                                    "name": "_block",
                                    "nameLocation": "716:6:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11951,
                                    "src": "708:14:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11941,
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
                                    "id": 11944,
                                    "mutability": "mutable",
                                    "name": "_totalEth",
                                    "nameLocation": "740:9:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11951,
                                    "src": "732:17:106",
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
                                    "id": 11946,
                                    "mutability": "mutable",
                                    "name": "_stakingEth",
                                    "nameLocation": "767:11:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11951,
                                    "src": "759:19:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11945,
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
                                    "id": 11948,
                                    "mutability": "mutable",
                                    "name": "_rethSupply",
                                    "nameLocation": "796:11:106",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11951,
                                    "src": "788:19:106",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11947,
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
                            "id": 11950,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "822:0:106"
                        },
                        "scope": 11952,
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
                    11952
                ],
                "name": "IRocketNetworkBalances",
                "nameLocation": "74:22:106",
                "scope": 11953,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 106
};
