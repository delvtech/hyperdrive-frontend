export const HyperdriveRegistry = {
    "abi": [
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "Unauthorized",
            "type": "error"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "governance",
                    "type": "address"
                }
            ],
            "name": "GovernanceUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "hyperdrive",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "data",
                    "type": "uint256"
                }
            ],
            "name": "HyperdriveInfoUpdated",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_hyperdriveInstance",
                    "type": "address"
                }
            ],
            "name": "getHyperdriveInfo",
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
            "name": "governance",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_hyperdriveInstance",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_data",
                    "type": "uint256"
                }
            ],
            "name": "setHyperdriveInfo",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_governance",
                    "type": "address"
                }
            ],
            "name": "updateGovernance",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x608060405234801561001057600080fd5b50600080546001600160a01b03191633179055610273806100326000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806332ddcb88146100515780635aa6e6751461008d578063b2561263146100b8578063be44e71a146100cd575b600080fd5b61007a61005f3660046101f1565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b6000546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c63660046101f1565b6100e0565b005b6100cb6100db366004610213565b610152565b6000546001600160a01b0316331461010a576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b6000546001600160a01b0316331461017c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03821660008181526001602052604090819020839055517ff0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356906101c99084815260200190565b60405180910390a25050565b80356001600160a01b03811681146101ec57600080fd5b919050565b60006020828403121561020357600080fd5b61020c826101d5565b9392505050565b6000806040838503121561022657600080fd5b61022f836101d5565b94602093909301359350505056fea264697066735822122048be1ce4969d37315390b46c58c301eb9430773adb0108c3191fffaa463acd1264736f6c63430008140033",
        "sourceMap": "235:1176:43:-:0;;;436:54;;;;;;;;;-1:-1:-1;460:10:43;:23;;-1:-1:-1;;;;;;460:23:43;473:10;460:23;;;235:1176;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806332ddcb88146100515780635aa6e6751461008d578063b2561263146100b8578063be44e71a146100cd575b600080fd5b61007a61005f3660046101f1565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b6000546100a0906001600160a01b031681565b6040516001600160a01b039091168152602001610084565b6100cb6100c63660046101f1565b6100e0565b005b6100cb6100db366004610213565b610152565b6000546001600160a01b0316331461010a576040516282b42960e81b815260040160405180910390fd5b600080546001600160a01b0319166001600160a01b038316908117825560405190917f9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab91a250565b6000546001600160a01b0316331461017c576040516282b42960e81b815260040160405180910390fd5b6001600160a01b03821660008181526001602052604090819020839055517ff0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356906101c99084815260200190565b60405180910390a25050565b80356001600160a01b03811681146101ec57600080fd5b919050565b60006020828403121561020357600080fd5b61020c826101d5565b9392505050565b6000806040838503121561022657600080fd5b61022f836101d5565b94602093909301359350505056fea264697066735822122048be1ce4969d37315390b46c58c301eb9430773adb0108c3191fffaa463acd1264736f6c63430008140033",
        "sourceMap": "235:1176:43:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1238:171;;;;;;:::i;:::-;-1:-1:-1;;;;;1366:36:43;1340:7;1366:36;;;:15;:36;;;;;;;1238:171;;;;529:25:234;;;517:2;502:18;1238:171:43;;;;;;;;329:25;;;;;-1:-1:-1;;;;;329:25:43;;;;;;-1:-1:-1;;;;;729:32:234;;;711:51;;699:2;684:18;329:25:43;565:203:234;707:180:43;;;;;;:::i;:::-;;:::i;:::-;;941:251;;;;;;:::i;:::-;;:::i;707:180::-;550:10;;-1:-1:-1;;;;;550:10:43;536;:24;532:104;;583:42;;-1:-1:-1;;;583:42:43;;;;;;;;;;;532:104;811:10:::1;:24:::0;;-1:-1:-1;;;;;;811:24:43::1;-1:-1:-1::0;;;;;811:24:43;::::1;::::0;;::::1;::::0;;850:30:::1;::::0;811:24;;850:30:::1;::::0;::::1;707:180:::0;:::o;941:251::-;550:10;;-1:-1:-1;;;;;550:10:43;536;:24;532:104;;583:42;;-1:-1:-1;;;583:42:43;;;;;;;;;;;532:104;-1:-1:-1;;;;;1077:36:43;::::1;;::::0;;;:15:::1;:36;::::0;;;;;;:44;;;1136:49;::::1;::::0;::::1;::::0;1116:5;529:25:234;;517:2;502:18;;383:177;1136:49:43::1;;;;;;;;941:251:::0;;:::o;14:173:234:-;82:20;;-1:-1:-1;;;;;131:31:234;;121:42;;111:70;;177:1;174;167:12;111:70;14:173;;;:::o;192:186::-;251:6;304:2;292:9;283:7;279:23;275:32;272:52;;;320:1;317;310:12;272:52;343:29;362:9;343:29;:::i;:::-;333:39;192:186;-1:-1:-1;;;192:186:234:o;773:254::-;841:6;849;902:2;890:9;881:7;877:23;873:32;870:52;;;918:1;915;908:12;870:52;941:29;960:9;941:29;:::i;:::-;931:39;1017:2;1002:18;;;;989:32;;-1:-1:-1;;;773:254:234:o",
        "linkReferences": {}
    },
    "methodIdentifiers": {
        "getHyperdriveInfo(address)": "32ddcb88",
        "governance()": "5aa6e675",
        "setHyperdriveInfo(address,uint256)": "be44e71a",
        "updateGovernance(address)": "b2561263"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"HyperdriveInfoUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"}],\"name\":\"getHyperdriveInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"governance\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_data\",\"type\":\"uint256\"}],\"name\":\"setHyperdriveInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"getHyperdriveInfo(address)\":{\"params\":{\"_hyperdriveInstance\":\"The hyperdrive instance address.\"},\"returns\":{\"_0\":\"The uint256 value set by governance.\"}},\"setHyperdriveInfo(address,uint256)\":{\"params\":{\"_data\":\"The uint256 value to be set to convey information about the        instance.\",\"_hyperdriveInstance\":\"The Hyperdrive instance address.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"Unauthorized()\":[{\"notice\":\"Thrown when caller is not governance.\"}]},\"events\":{\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveInfoUpdated(address,uint256)\":{\"notice\":\"Emitted when hyperdrive info is updated.\"}},\"kind\":\"user\",\"methods\":{\"getHyperdriveInfo(address)\":{\"notice\":\"Allows anyone to get the info for a hyperdrive instance.\"},\"setHyperdriveInfo(address,uint256)\":{\"notice\":\"Allows governance to set arbitrary info for a Hyperdrive         instance.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/factory/HyperdriveRegistry.sol\":\"HyperdriveRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/factory/HyperdriveRegistry.sol\":{\"keccak256\":\"0xfbbaecdc43f485ccab2d64e6b4d1a8249978269af5af5d4bb13c25cfce7f864c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5e48037114a4d529662a75f243b3d45f673e4c818ea8b13ab0dd7b2807532c03\",\"dweb:/ipfs/QmaQn7Zbuda174zuYdwP75B9csKeuB9Wvh8FA9h8qNwsbX\"]},\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":{\"keccak256\":\"0xbc3cbd92913846b65613a28f06e222246891d672661d15674c3d3454722fade2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://dcf1e5d47e4ed0413786db673b13edf8959b0d8b568ffdc1c9e374940e11af99\",\"dweb:/ipfs/QmYDdKhfGHcu6MaJmrJGSvFrHiZfi8bz7DYJg6QxKr5vU7\"]},\"contracts/src/interfaces/IHyperdriveRegistry.sol\":{\"keccak256\":\"0x241c66a66aa6b7c75ae11a5724b819ba6b3df202cd6bb569f000e8e307044b00\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c4d9c479f9a85da89250f9f8db6fc2c5056a7606c8e604655b5a2c8ccf08b168\",\"dweb:/ipfs/QmZBtC8yHBqf1KcKLjCw3eehERbj2A2j9S6t5SG8aKNToC\"]}},\"version\":1}",
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
                    "type": "constructor"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "Unauthorized"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "governance",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "GovernanceUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "hyperdrive",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "uint256",
                            "name": "data",
                            "type": "uint256",
                            "indexed": false
                        }
                    ],
                    "type": "event",
                    "name": "HyperdriveInfoUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_hyperdriveInstance",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getHyperdriveInfo",
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
                    "name": "governance",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_hyperdriveInstance",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_data",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setHyperdriveInfo"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "_governance",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "updateGovernance"
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "getHyperdriveInfo(address)": {
                        "params": {
                            "_hyperdriveInstance": "The hyperdrive instance address."
                        },
                        "returns": {
                            "_0": "The uint256 value set by governance."
                        }
                    },
                    "setHyperdriveInfo(address,uint256)": {
                        "params": {
                            "_data": "The uint256 value to be set to convey information about the        instance.",
                            "_hyperdriveInstance": "The Hyperdrive instance address."
                        }
                    },
                    "updateGovernance(address)": {
                        "params": {
                            "_governance": "The new governance address."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "getHyperdriveInfo(address)": {
                        "notice": "Allows anyone to get the info for a hyperdrive instance."
                    },
                    "setHyperdriveInfo(address,uint256)": {
                        "notice": "Allows governance to set arbitrary info for a Hyperdrive         instance."
                    },
                    "updateGovernance(address)": {
                        "notice": "Allows governance to transfer the governance role."
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
                "contracts/src/factory/HyperdriveRegistry.sol": "HyperdriveRegistry"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/factory/HyperdriveRegistry.sol": {
                "keccak256": "0xfbbaecdc43f485ccab2d64e6b4d1a8249978269af5af5d4bb13c25cfce7f864c",
                "urls": [
                    "bzz-raw://5e48037114a4d529662a75f243b3d45f673e4c818ea8b13ab0dd7b2807532c03",
                    "dweb:/ipfs/QmaQn7Zbuda174zuYdwP75B9csKeuB9Wvh8FA9h8qNwsbX"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": {
                "keccak256": "0xbc3cbd92913846b65613a28f06e222246891d672661d15674c3d3454722fade2",
                "urls": [
                    "bzz-raw://dcf1e5d47e4ed0413786db673b13edf8959b0d8b568ffdc1c9e374940e11af99",
                    "dweb:/ipfs/QmYDdKhfGHcu6MaJmrJGSvFrHiZfi8bz7DYJg6QxKr5vU7"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IHyperdriveRegistry.sol": {
                "keccak256": "0x241c66a66aa6b7c75ae11a5724b819ba6b3df202cd6bb569f000e8e307044b00",
                "urls": [
                    "bzz-raw://c4d9c479f9a85da89250f9f8db6fc2c5056a7606c8e604655b5a2c8ccf08b168",
                    "dweb:/ipfs/QmZBtC8yHBqf1KcKLjCw3eehERbj2A2j9S6t5SG8aKNToC"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/factory/HyperdriveRegistry.sol",
        "id": 7496,
        "exportedSymbols": {
            "HyperdriveRegistry": [
                7495
            ],
            "IHyperdriveGovernedRegistry": [
                11117
            ],
            "IHyperdriveRegistry": [
                11218
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:1373:43",
        "nodes": [
            {
                "id": 7401,
                "nodeType": "PragmaDirective",
                "src": "39:23:43",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 7403,
                "nodeType": "ImportDirective",
                "src": "64:92:43",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol",
                "file": "../interfaces/IHyperdriveGovernedRegistry.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 7496,
                "sourceUnit": 11118,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 7402,
                            "name": "IHyperdriveGovernedRegistry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11117,
                            "src": "73:27:43",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 7405,
                "nodeType": "ImportDirective",
                "src": "157:76:43",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IHyperdriveRegistry.sol",
                "file": "../interfaces/IHyperdriveRegistry.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 7496,
                "sourceUnit": 11219,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 7404,
                            "name": "IHyperdriveRegistry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11218,
                            "src": "166:19:43",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 7495,
                "nodeType": "ContractDefinition",
                "src": "235:1176:43",
                "nodes": [
                    {
                        "id": 7411,
                        "nodeType": "VariableDeclaration",
                        "src": "329:25:43",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "5aa6e675",
                        "mutability": "mutable",
                        "name": "governance",
                        "nameLocation": "344:10:43",
                        "scope": 7495,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 7410,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "329:7:43",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 7415,
                        "nodeType": "VariableDeclaration",
                        "src": "361:68:43",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_hyperdriveInfo",
                        "nameLocation": "414:15:43",
                        "scope": 7495,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                        },
                        "typeName": {
                            "id": 7414,
                            "keyName": "hyperdrive",
                            "keyNameLocation": "377:10:43",
                            "keyType": {
                                "id": 7412,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "369:7:43",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "361:43:43",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                            },
                            "valueName": "data",
                            "valueNameLocation": "399:4:43",
                            "valueType": {
                                "id": 7413,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "391:7:43",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 7424,
                        "nodeType": "FunctionDefinition",
                        "src": "436:54:43",
                        "nodes": [],
                        "body": {
                            "id": 7423,
                            "nodeType": "Block",
                            "src": "450:40:43",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 7421,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 7418,
                                            "name": "governance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 7411,
                                            "src": "460:10:43",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "expression": {
                                                "id": 7419,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "473:3:43",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 7420,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "477:6:43",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "473:10:43",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "460:23:43",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 7422,
                                    "nodeType": "ExpressionStatement",
                                    "src": "460:23:43"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 7416,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "447:2:43"
                        },
                        "returnParameters": {
                            "id": 7417,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "450:0:43"
                        },
                        "scope": 7495,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 7439,
                        "nodeType": "ModifierDefinition",
                        "src": "496:157:43",
                        "nodes": [],
                        "body": {
                            "id": 7438,
                            "nodeType": "Block",
                            "src": "522:131:43",
                            "nodes": [],
                            "statements": [
                                {
                                    "condition": {
                                        "commonType": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "id": 7429,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "expression": {
                                                "id": 7426,
                                                "name": "msg",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": -15,
                                                "src": "536:3:43",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_magic_message",
                                                    "typeString": "msg"
                                                }
                                            },
                                            "id": 7427,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "540:6:43",
                                            "memberName": "sender",
                                            "nodeType": "MemberAccess",
                                            "src": "536:10:43",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "!=",
                                        "rightExpression": {
                                            "id": 7428,
                                            "name": "governance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 7411,
                                            "src": "550:10:43",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "536:24:43",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "id": 7436,
                                    "nodeType": "IfStatement",
                                    "src": "532:104:43",
                                    "trueBody": {
                                        "id": 7435,
                                        "nodeType": "Block",
                                        "src": "562:74:43",
                                        "statements": [
                                            {
                                                "errorCall": {
                                                    "arguments": [],
                                                    "expression": {
                                                        "argumentTypes": [],
                                                        "expression": {
                                                            "id": 7430,
                                                            "name": "IHyperdriveGovernedRegistry",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 11117,
                                                            "src": "583:27:43",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_type$_t_contract$_IHyperdriveGovernedRegistry_$11117_$",
                                                                "typeString": "type(contract IHyperdriveGovernedRegistry)"
                                                            }
                                                        },
                                                        "id": 7432,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "611:12:43",
                                                        "memberName": "Unauthorized",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 11102,
                                                        "src": "583:40:43",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_error_pure$__$returns$__$",
                                                            "typeString": "function () pure"
                                                        }
                                                    },
                                                    "id": 7433,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "583:42:43",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_tuple$__$",
                                                        "typeString": "tuple()"
                                                    }
                                                },
                                                "id": 7434,
                                                "nodeType": "RevertStatement",
                                                "src": "576:49:43"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "id": 7437,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "645:1:43"
                                }
                            ]
                        },
                        "name": "onlyGovernance",
                        "nameLocation": "505:14:43",
                        "parameters": {
                            "id": 7425,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "519:2:43"
                        },
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 7457,
                        "nodeType": "FunctionDefinition",
                        "src": "707:180:43",
                        "nodes": [],
                        "body": {
                            "id": 7456,
                            "nodeType": "Block",
                            "src": "801:86:43",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 7450,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 7448,
                                            "name": "governance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 7411,
                                            "src": "811:10:43",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 7449,
                                            "name": "_governance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 7442,
                                            "src": "824:11:43",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "811:24:43",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 7451,
                                    "nodeType": "ExpressionStatement",
                                    "src": "811:24:43"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 7453,
                                                "name": "_governance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 7442,
                                                "src": "868:11:43",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 7452,
                                            "name": "GovernanceUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11092,
                                            "src": "850:17:43",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                                                "typeString": "function (address)"
                                            }
                                        },
                                        "id": 7454,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "850:30:43",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 7455,
                                    "nodeType": "EmitStatement",
                                    "src": "845:35:43"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11108
                        ],
                        "documentation": {
                            "id": 7440,
                            "nodeType": "StructuredDocumentation",
                            "src": "659:43:43",
                            "text": "@inheritdoc IHyperdriveGovernedRegistry"
                        },
                        "functionSelector": "b2561263",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 7446,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 7445,
                                    "name": "onlyGovernance",
                                    "nameLocations": [
                                        "786:14:43"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 7439,
                                    "src": "786:14:43"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "786:14:43"
                            }
                        ],
                        "name": "updateGovernance",
                        "nameLocation": "716:16:43",
                        "overrides": {
                            "id": 7444,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "777:8:43"
                        },
                        "parameters": {
                            "id": 7443,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7442,
                                    "mutability": "mutable",
                                    "name": "_governance",
                                    "nameLocation": "750:11:43",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7457,
                                    "src": "742:19:43",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7441,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "742:7:43",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "732:35:43"
                        },
                        "returnParameters": {
                            "id": 7447,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "801:0:43"
                        },
                        "scope": 7495,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7480,
                        "nodeType": "FunctionDefinition",
                        "src": "941:251:43",
                        "nodes": [],
                        "body": {
                            "id": 7479,
                            "nodeType": "Block",
                            "src": "1067:125:43",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 7472,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "baseExpression": {
                                                "id": 7468,
                                                "name": "_hyperdriveInfo",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 7415,
                                                "src": "1077:15:43",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                    "typeString": "mapping(address => uint256)"
                                                }
                                            },
                                            "id": 7470,
                                            "indexExpression": {
                                                "id": 7469,
                                                "name": "_hyperdriveInstance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 7460,
                                                "src": "1093:19:43",
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
                                            "src": "1077:36:43",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 7471,
                                            "name": "_data",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 7462,
                                            "src": "1116:5:43",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "1077:44:43",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 7473,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1077:44:43"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "id": 7475,
                                                "name": "_hyperdriveInstance",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 7460,
                                                "src": "1158:19:43",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 7476,
                                                "name": "_data",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 7462,
                                                "src": "1179:5:43",
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
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 7474,
                                            "name": "HyperdriveInfoUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 11099,
                                            "src": "1136:21:43",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,uint256)"
                                            }
                                        },
                                        "id": 7477,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1136:49:43",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 7478,
                                    "nodeType": "EmitStatement",
                                    "src": "1131:54:43"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11116
                        ],
                        "documentation": {
                            "id": 7458,
                            "nodeType": "StructuredDocumentation",
                            "src": "893:43:43",
                            "text": "@inheritdoc IHyperdriveGovernedRegistry"
                        },
                        "functionSelector": "be44e71a",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 7466,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 7465,
                                    "name": "onlyGovernance",
                                    "nameLocations": [
                                        "1052:14:43"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 7439,
                                    "src": "1052:14:43"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "1052:14:43"
                            }
                        ],
                        "name": "setHyperdriveInfo",
                        "nameLocation": "950:17:43",
                        "overrides": {
                            "id": 7464,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "1043:8:43"
                        },
                        "parameters": {
                            "id": 7463,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7460,
                                    "mutability": "mutable",
                                    "name": "_hyperdriveInstance",
                                    "nameLocation": "985:19:43",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7480,
                                    "src": "977:27:43",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7459,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "977:7:43",
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
                                    "id": 7462,
                                    "mutability": "mutable",
                                    "name": "_data",
                                    "nameLocation": "1022:5:43",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7480,
                                    "src": "1014:13:43",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7461,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1014:7:43",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "967:66:43"
                        },
                        "returnParameters": {
                            "id": 7467,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1067:0:43"
                        },
                        "scope": 7495,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 7494,
                        "nodeType": "FunctionDefinition",
                        "src": "1238:171:43",
                        "nodes": [],
                        "body": {
                            "id": 7493,
                            "nodeType": "Block",
                            "src": "1349:60:43",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "baseExpression": {
                                            "id": 7489,
                                            "name": "_hyperdriveInfo",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 7415,
                                            "src": "1366:15:43",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                                "typeString": "mapping(address => uint256)"
                                            }
                                        },
                                        "id": 7491,
                                        "indexExpression": {
                                            "id": 7490,
                                            "name": "_hyperdriveInstance",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 7483,
                                            "src": "1382:19:43",
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
                                        "src": "1366:36:43",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 7488,
                                    "id": 7492,
                                    "nodeType": "Return",
                                    "src": "1359:43:43"
                                }
                            ]
                        },
                        "baseFunctions": [
                            11217
                        ],
                        "documentation": {
                            "id": 7481,
                            "nodeType": "StructuredDocumentation",
                            "src": "1198:35:43",
                            "text": "@inheritdoc IHyperdriveRegistry"
                        },
                        "functionSelector": "32ddcb88",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getHyperdriveInfo",
                        "nameLocation": "1247:17:43",
                        "overrides": {
                            "id": 7485,
                            "nodeType": "OverrideSpecifier",
                            "overrides": [],
                            "src": "1322:8:43"
                        },
                        "parameters": {
                            "id": 7484,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7483,
                                    "mutability": "mutable",
                                    "name": "_hyperdriveInstance",
                                    "nameLocation": "1282:19:43",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7494,
                                    "src": "1274:27:43",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 7482,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1274:7:43",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1264:43:43"
                        },
                        "returnParameters": {
                            "id": 7488,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 7487,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 7494,
                                    "src": "1340:7:43",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 7486,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1340:7:43",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1339:9:43"
                        },
                        "scope": 7495,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [
                    {
                        "baseName": {
                            "id": 7406,
                            "name": "IHyperdriveRegistry",
                            "nameLocations": [
                                "270:19:43"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11218,
                            "src": "270:19:43"
                        },
                        "id": 7407,
                        "nodeType": "InheritanceSpecifier",
                        "src": "270:19:43"
                    },
                    {
                        "baseName": {
                            "id": 7408,
                            "name": "IHyperdriveGovernedRegistry",
                            "nameLocations": [
                                "295:27:43"
                            ],
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 11117,
                            "src": "295:27:43"
                        },
                        "id": 7409,
                        "nodeType": "InheritanceSpecifier",
                        "src": "295:27:43"
                    }
                ],
                "canonicalName": "HyperdriveRegistry",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    7495,
                    11117,
                    11218
                ],
                "name": "HyperdriveRegistry",
                "nameLocation": "244:18:43",
                "scope": 7496,
                "usedErrors": [
                    11102
                ],
                "usedEvents": [
                    11092,
                    11099
                ]
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 43
};
