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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_block\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_totalEth\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_stakingEth\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_rethSupply\",\"type\":\"uint256\"}],\"name\":\"executeUpdateBalances\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getBalancesBlock\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getETHUtilizationRate\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getLatestReportableBlock\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getStakingETHBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalETHBalance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTotalRETHSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_block\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_total\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_staking\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_rethSupply\",\"type\":\"uint256\"}],\"name\":\"submitBalances\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRocketNetworkBalances.sol\":\"IRocketNetworkBalances\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IRocketNetworkBalances.sol\":{\"keccak256\":\"0xd97697fbb8156373f0cbcdfcbbfdd9a0a872e35e924031b61f53696693e780ef\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://300dd50b3f96c9f65e6cc1c677a2faa8b2542f0366041d85d4e83060ad530fb8\",\"dweb:/ipfs/QmQnNPYvWNDGqPyQ6ugP3LWJR9cEftteCYouHJ51xckFXa\"]}},\"version\":1}",
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
        "id": 12424,
        "exportedSymbols": {
            "IRocketNetworkBalances": [
                12423
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:787:105",
        "nodes": [
            {
                "id": 12370,
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
                "id": 12423,
                "nodeType": "ContractDefinition",
                "src": "64:761:105",
                "nodes": [
                    {
                        "id": 12375,
                        "nodeType": "FunctionDefinition",
                        "src": "103:60:105",
                        "nodes": [],
                        "functionSelector": "9100c13d",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getBalancesBlock",
                        "nameLocation": "112:16:105",
                        "parameters": {
                            "id": 12371,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "128:2:105"
                        },
                        "returnParameters": {
                            "id": 12374,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12373,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12375,
                                    "src": "154:7:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12372,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "154:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "153:9:105"
                        },
                        "scope": 12423,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12380,
                        "nodeType": "FunctionDefinition",
                        "src": "169:68:105",
                        "nodes": [],
                        "functionSelector": "a9bb16ed",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getLatestReportableBlock",
                        "nameLocation": "178:24:105",
                        "parameters": {
                            "id": 12376,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "202:2:105"
                        },
                        "returnParameters": {
                            "id": 12379,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12378,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12380,
                                    "src": "228:7:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12377,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "228:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "227:9:105"
                        },
                        "scope": 12423,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12385,
                        "nodeType": "FunctionDefinition",
                        "src": "243:62:105",
                        "nodes": [],
                        "functionSelector": "964d042c",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalETHBalance",
                        "nameLocation": "252:18:105",
                        "parameters": {
                            "id": 12381,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "270:2:105"
                        },
                        "returnParameters": {
                            "id": 12384,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12383,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12385,
                                    "src": "296:7:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12382,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "296:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "295:9:105"
                        },
                        "scope": 12423,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12390,
                        "nodeType": "FunctionDefinition",
                        "src": "311:64:105",
                        "nodes": [],
                        "functionSelector": "f1eda634",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getStakingETHBalance",
                        "nameLocation": "320:20:105",
                        "parameters": {
                            "id": 12386,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "340:2:105"
                        },
                        "returnParameters": {
                            "id": 12389,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12388,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12390,
                                    "src": "366:7:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12387,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "366:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "365:9:105"
                        },
                        "scope": 12423,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12395,
                        "nodeType": "FunctionDefinition",
                        "src": "381:62:105",
                        "nodes": [],
                        "functionSelector": "c4c8d0ad",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getTotalRETHSupply",
                        "nameLocation": "390:18:105",
                        "parameters": {
                            "id": 12391,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "408:2:105"
                        },
                        "returnParameters": {
                            "id": 12394,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12393,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12395,
                                    "src": "434:7:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12392,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "434:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "433:9:105"
                        },
                        "scope": 12423,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12400,
                        "nodeType": "FunctionDefinition",
                        "src": "449:65:105",
                        "nodes": [],
                        "functionSelector": "9dba66af",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getETHUtilizationRate",
                        "nameLocation": "458:21:105",
                        "parameters": {
                            "id": 12396,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "479:2:105"
                        },
                        "returnParameters": {
                            "id": 12399,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12398,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12400,
                                    "src": "505:7:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12397,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "505:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "504:9:105"
                        },
                        "scope": 12423,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12411,
                        "nodeType": "FunctionDefinition",
                        "src": "520:142:105",
                        "nodes": [],
                        "functionSelector": "32db5470",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "submitBalances",
                        "nameLocation": "529:14:105",
                        "parameters": {
                            "id": 12409,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12402,
                                    "mutability": "mutable",
                                    "name": "_block",
                                    "nameLocation": "561:6:105",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12411,
                                    "src": "553:14:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12401,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "553:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12404,
                                    "mutability": "mutable",
                                    "name": "_total",
                                    "nameLocation": "585:6:105",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12411,
                                    "src": "577:14:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12403,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "577:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12406,
                                    "mutability": "mutable",
                                    "name": "_staking",
                                    "nameLocation": "609:8:105",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12411,
                                    "src": "601:16:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12405,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "601:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12408,
                                    "mutability": "mutable",
                                    "name": "_rethSupply",
                                    "nameLocation": "635:11:105",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12411,
                                    "src": "627:19:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12407,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "627:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "543:109:105"
                        },
                        "returnParameters": {
                            "id": 12410,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "661:0:105"
                        },
                        "scope": 12423,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 12422,
                        "nodeType": "FunctionDefinition",
                        "src": "668:155:105",
                        "nodes": [],
                        "functionSelector": "56ff3625",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "executeUpdateBalances",
                        "nameLocation": "677:21:105",
                        "parameters": {
                            "id": 12420,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 12413,
                                    "mutability": "mutable",
                                    "name": "_block",
                                    "nameLocation": "716:6:105",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12422,
                                    "src": "708:14:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12412,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "708:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12415,
                                    "mutability": "mutable",
                                    "name": "_totalEth",
                                    "nameLocation": "740:9:105",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12422,
                                    "src": "732:17:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12414,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "732:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12417,
                                    "mutability": "mutable",
                                    "name": "_stakingEth",
                                    "nameLocation": "767:11:105",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12422,
                                    "src": "759:19:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12416,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "759:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 12419,
                                    "mutability": "mutable",
                                    "name": "_rethSupply",
                                    "nameLocation": "796:11:105",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 12422,
                                    "src": "788:19:105",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 12418,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "788:7:105",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "698:115:105"
                        },
                        "returnParameters": {
                            "id": 12421,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "822:0:105"
                        },
                        "scope": 12423,
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
                    12423
                ],
                "name": "IRocketNetworkBalances",
                "nameLocation": "74:22:105",
                "scope": 12424,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 105
};
