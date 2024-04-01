export const IERC20ForwarderFactory = {
    "abi": [
        {
            "inputs": [],
            "name": "InvalidForwarderAddress",
            "type": "error"
        },
        {
            "inputs": [],
            "name": "ERC20LINK_HASH",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IMultiToken",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "create",
            "outputs": [
                {
                    "internalType": "contract IERC20Forwarder",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getDeployDetails",
            "outputs": [
                {
                    "internalType": "contract IMultiToken",
                    "name": "",
                    "type": "address"
                },
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
                    "internalType": "contract IMultiToken",
                    "name": "_token",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                }
            ],
            "name": "getForwarder",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
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
        "ERC20LINK_HASH()": "d13053bb",
        "create(address,uint256)": "0ecaea73",
        "getDeployDetails()": "600eb4ba",
        "getForwarder(address,uint256)": "0710fd58"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidForwarderAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ERC20LINK_HASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"create\",\"outputs\":[{\"internalType\":\"contract IERC20Forwarder\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDeployDetails\",\"outputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"getForwarder\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"ERC20LINK_HASH()\":{\"returns\":{\"_0\":\"The hash of the bytecode of the ERC20 forwarder contract.\"}},\"create(address,uint256)\":{\"params\":{\"_token\":\"The MultiToken targeted by this factory.\",\"_tokenId\":\"The sub-token ID targeted by this factory.\"},\"returns\":{\"_0\":\"Returns the address of the deployed forwarder.\"}},\"getDeployDetails()\":{\"returns\":{\"_0\":\"The target MultiToken.\",\"_1\":\"The target token ID.\"}},\"getForwarder(address,uint256)\":{\"params\":{\"_token\":\"The target MultiToken of the forwarder.\",\"_tokenId\":\"The target token ID of the forwarder.\"},\"returns\":{\"_0\":\"The expected address of the forwarder.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidForwarderAddress()\":[{\"notice\":\"Thrown when a forwarder is deployed to an unexpected address.\"}]},\"kind\":\"user\",\"methods\":{\"ERC20LINK_HASH()\":{\"notice\":\"Gets the hash of the bytecode of the ERC20 forwarder contract.\"},\"create(address,uint256)\":{\"notice\":\"Uses create2 to deploy a forwarder at a predictable address as         part of our ERC20 multitoken implementation.\"},\"getDeployDetails()\":{\"notice\":\"Gets the MultiToken and token ID that should be targeted by the         calling forwarder.\"},\"getForwarder(address,uint256)\":{\"notice\":\"Helper to calculate expected forwarder contract addresses.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC20ForwarderFactory.sol\":\"IERC20ForwarderFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC20Forwarder.sol\":{\"keccak256\":\"0xeb9152fad7b2431ab4e9f0db4945462104825ac0ca2541319fafb1ea3e726592\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ab76c60cc144e299295e24f00f4e642ab093eab7c0157de6201b96cd2097892e\",\"dweb:/ipfs/QmYLiPgwNvZgUKzuLqsJKAotqFoq1Yw7y5NQZgbUcdCWgV\"]},\"contracts/src/interfaces/IERC20ForwarderFactory.sol\":{\"keccak256\":\"0xd413c9701c4d8be234bd037de24aabacce110848f86eac44fa6de04eda6d05ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://59fcaa637112713c2d1264664f8c6b428da46cceb4689fd8757f07fa87633aad\",\"dweb:/ipfs/QmWGLox6p9Ja2dwH5bgED69JtuK4Y55G7pgTPeeTmYrW5Z\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae\",\"dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3\",\"dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xac84dd306f29ae9d6becf764d93545c33f7c37737bb1aeb714c85930d0c074a0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d9082a16d5a736ab7ce5670be4f2475ea5c5fdae8ad7096ed9663f84eed96b11\",\"dweb:/ipfs/QmUTH8dZaQJt56UsT7N2aCUCKmjQYj7Ah53rRXk6DuVNUR\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidForwarderAddress"
                },
                {
                    "inputs": [],
                    "stateMutability": "pure",
                    "type": "function",
                    "name": "ERC20LINK_HASH",
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
                            "internalType": "contract IMultiToken",
                            "name": "_token",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "create",
                    "outputs": [
                        {
                            "internalType": "contract IERC20Forwarder",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getDeployDetails",
                    "outputs": [
                        {
                            "internalType": "contract IMultiToken",
                            "name": "",
                            "type": "address"
                        },
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
                            "internalType": "contract IMultiToken",
                            "name": "_token",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_tokenId",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "getForwarder",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "ERC20LINK_HASH()": {
                        "returns": {
                            "_0": "The hash of the bytecode of the ERC20 forwarder contract."
                        }
                    },
                    "create(address,uint256)": {
                        "params": {
                            "_token": "The MultiToken targeted by this factory.",
                            "_tokenId": "The sub-token ID targeted by this factory."
                        },
                        "returns": {
                            "_0": "Returns the address of the deployed forwarder."
                        }
                    },
                    "getDeployDetails()": {
                        "returns": {
                            "_0": "The target MultiToken.",
                            "_1": "The target token ID."
                        }
                    },
                    "getForwarder(address,uint256)": {
                        "params": {
                            "_token": "The target MultiToken of the forwarder.",
                            "_tokenId": "The target token ID of the forwarder."
                        },
                        "returns": {
                            "_0": "The expected address of the forwarder."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "ERC20LINK_HASH()": {
                        "notice": "Gets the hash of the bytecode of the ERC20 forwarder contract."
                    },
                    "create(address,uint256)": {
                        "notice": "Uses create2 to deploy a forwarder at a predictable address as         part of our ERC20 multitoken implementation."
                    },
                    "getDeployDetails()": {
                        "notice": "Gets the MultiToken and token ID that should be targeted by the         calling forwarder."
                    },
                    "getForwarder(address,uint256)": {
                        "notice": "Helper to calculate expected forwarder contract addresses."
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
                "contracts/src/interfaces/IERC20ForwarderFactory.sol": "IERC20ForwarderFactory"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IERC20.sol": {
                "keccak256": "0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9",
                "urls": [
                    "bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac",
                    "dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC20Forwarder.sol": {
                "keccak256": "0xeb9152fad7b2431ab4e9f0db4945462104825ac0ca2541319fafb1ea3e726592",
                "urls": [
                    "bzz-raw://ab76c60cc144e299295e24f00f4e642ab093eab7c0157de6201b96cd2097892e",
                    "dweb:/ipfs/QmYLiPgwNvZgUKzuLqsJKAotqFoq1Yw7y5NQZgbUcdCWgV"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IERC20ForwarderFactory.sol": {
                "keccak256": "0xd413c9701c4d8be234bd037de24aabacce110848f86eac44fa6de04eda6d05ed",
                "urls": [
                    "bzz-raw://59fcaa637112713c2d1264664f8c6b428da46cceb4689fd8757f07fa87633aad",
                    "dweb:/ipfs/QmWGLox6p9Ja2dwH5bgED69JtuK4Y55G7pgTPeeTmYrW5Z"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiToken.sol": {
                "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
                "urls": [
                    "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
                    "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenCore.sol": {
                "keccak256": "0x5c27315743bb6ef8a121ecf72cb24d5c144786dedb6526ef010f580eb872e501",
                "urls": [
                    "bzz-raw://3e102c51bac9c82766c9826d97dc780a05a2bf64703b070757a7531a0851a1ae",
                    "dweb:/ipfs/QmXYwbzPbiznj5AeDiX7NNfRE9xyhSx1huTMfMFndrUZWs"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenEvents.sol": {
                "keccak256": "0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb",
                "urls": [
                    "bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222",
                    "dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xcc21ad6d3d4e3de354fbc25a472d940e5e2af0b48766404f9efecdac600d72ca",
                "urls": [
                    "bzz-raw://b48fa111a773c820fe578efdd737d164e3957930ed46f3f304c6a8602a7e26a3",
                    "dweb:/ipfs/QmcA7bjBC6ZBvYyojZZx3eKpugHmSrAAA14p14bQugiVKG"
                ],
                "license": "Apache-2.0"
            },
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
        "absolutePath": "contracts/src/interfaces/IERC20ForwarderFactory.sol",
        "id": 10098,
        "exportedSymbols": {
            "IERC20Forwarder": [
                10049
            ],
            "IERC20ForwarderFactory": [
                10097
            ],
            "IMultiToken": [
                11652
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:1691:81",
        "nodes": [
            {
                "id": 10051,
                "nodeType": "PragmaDirective",
                "src": "39:23:81",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 10053,
                "nodeType": "ImportDirective",
                "src": "64:56:81",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20Forwarder.sol",
                "file": "./IERC20Forwarder.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 10098,
                "sourceUnit": 10050,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10052,
                            "name": "IERC20Forwarder",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10049,
                            "src": "73:15:81",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10055,
                "nodeType": "ImportDirective",
                "src": "121:48:81",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IMultiToken.sol",
                "file": "./IMultiToken.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 10098,
                "sourceUnit": 11653,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 10054,
                            "name": "IMultiToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11652,
                            "src": "130:11:81",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 10097,
                "nodeType": "ContractDefinition",
                "src": "171:1558:81",
                "nodes": [
                    {
                        "id": 10058,
                        "nodeType": "ErrorDefinition",
                        "src": "308:32:81",
                        "nodes": [],
                        "documentation": {
                            "id": 10056,
                            "nodeType": "StructuredDocumentation",
                            "src": "230:73:81",
                            "text": "@notice Thrown when a forwarder is deployed to an unexpected address."
                        },
                        "errorSelector": "381dd540",
                        "name": "InvalidForwarderAddress",
                        "nameLocation": "314:23:81",
                        "parameters": {
                            "id": 10057,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "337:2:81"
                        }
                    },
                    {
                        "id": 10070,
                        "nodeType": "FunctionDefinition",
                        "src": "702:111:81",
                        "nodes": [],
                        "documentation": {
                            "id": 10059,
                            "nodeType": "StructuredDocumentation",
                            "src": "369:328:81",
                            "text": "@notice Uses create2 to deploy a forwarder at a predictable address as\n         part of our ERC20 multitoken implementation.\n @param _token The MultiToken targeted by this factory.\n @param _tokenId The sub-token ID targeted by this factory.\n @return Returns the address of the deployed forwarder."
                        },
                        "functionSelector": "0ecaea73",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "create",
                        "nameLocation": "711:6:81",
                        "parameters": {
                            "id": 10065,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10062,
                                    "mutability": "mutable",
                                    "name": "_token",
                                    "nameLocation": "739:6:81",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10070,
                                    "src": "727:18:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IMultiToken_$11652",
                                        "typeString": "contract IMultiToken"
                                    },
                                    "typeName": {
                                        "id": 10061,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10060,
                                            "name": "IMultiToken",
                                            "nameLocations": [
                                                "727:11:81"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 11652,
                                            "src": "727:11:81"
                                        },
                                        "referencedDeclaration": 11652,
                                        "src": "727:11:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IMultiToken_$11652",
                                            "typeString": "contract IMultiToken"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10064,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "763:8:81",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10070,
                                    "src": "755:16:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10063,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "755:7:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "717:60:81"
                        },
                        "returnParameters": {
                            "id": 10069,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10068,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10070,
                                    "src": "796:15:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20Forwarder_$10049",
                                        "typeString": "contract IERC20Forwarder"
                                    },
                                    "typeName": {
                                        "id": 10067,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10066,
                                            "name": "IERC20Forwarder",
                                            "nameLocations": [
                                                "796:15:81"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 10049,
                                            "src": "796:15:81"
                                        },
                                        "referencedDeclaration": 10049,
                                        "src": "796:15:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20Forwarder_$10049",
                                            "typeString": "contract IERC20Forwarder"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "795:17:81"
                        },
                        "scope": 10097,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10079,
                        "nodeType": "FunctionDefinition",
                        "src": "1010:73:81",
                        "nodes": [],
                        "documentation": {
                            "id": 10071,
                            "nodeType": "StructuredDocumentation",
                            "src": "819:186:81",
                            "text": "@notice Gets the MultiToken and token ID that should be targeted by the\n         calling forwarder.\n @return The target MultiToken.\n @return The target token ID."
                        },
                        "functionSelector": "600eb4ba",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getDeployDetails",
                        "nameLocation": "1019:16:81",
                        "parameters": {
                            "id": 10072,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1035:2:81"
                        },
                        "returnParameters": {
                            "id": 10078,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10075,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10079,
                                    "src": "1061:11:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IMultiToken_$11652",
                                        "typeString": "contract IMultiToken"
                                    },
                                    "typeName": {
                                        "id": 10074,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10073,
                                            "name": "IMultiToken",
                                            "nameLocations": [
                                                "1061:11:81"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 11652,
                                            "src": "1061:11:81"
                                        },
                                        "referencedDeclaration": 11652,
                                        "src": "1061:11:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IMultiToken_$11652",
                                            "typeString": "contract IMultiToken"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10077,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10079,
                                    "src": "1074:7:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10076,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1074:7:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1060:22:81"
                        },
                        "scope": 10097,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10090,
                        "nodeType": "FunctionDefinition",
                        "src": "1343:114:81",
                        "nodes": [],
                        "documentation": {
                            "id": 10080,
                            "nodeType": "StructuredDocumentation",
                            "src": "1089:249:81",
                            "text": "@notice Helper to calculate expected forwarder contract addresses.\n @param _token The target MultiToken of the forwarder.\n @param _tokenId The target token ID of the forwarder.\n @return The expected address of the forwarder."
                        },
                        "functionSelector": "0710fd58",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getForwarder",
                        "nameLocation": "1352:12:81",
                        "parameters": {
                            "id": 10086,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10083,
                                    "mutability": "mutable",
                                    "name": "_token",
                                    "nameLocation": "1386:6:81",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10090,
                                    "src": "1374:18:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IMultiToken_$11652",
                                        "typeString": "contract IMultiToken"
                                    },
                                    "typeName": {
                                        "id": 10082,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 10081,
                                            "name": "IMultiToken",
                                            "nameLocations": [
                                                "1374:11:81"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 11652,
                                            "src": "1374:11:81"
                                        },
                                        "referencedDeclaration": 11652,
                                        "src": "1374:11:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IMultiToken_$11652",
                                            "typeString": "contract IMultiToken"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 10085,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "1410:8:81",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10090,
                                    "src": "1402:16:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 10084,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1402:7:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1364:60:81"
                        },
                        "returnParameters": {
                            "id": 10089,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10088,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10090,
                                    "src": "1448:7:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10087,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1448:7:81",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1447:9:81"
                        },
                        "scope": 10097,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 10096,
                        "nodeType": "FunctionDefinition",
                        "src": "1669:58:81",
                        "nodes": [],
                        "documentation": {
                            "id": 10091,
                            "nodeType": "StructuredDocumentation",
                            "src": "1463:148:81",
                            "text": "@notice Gets the hash of the bytecode of the ERC20 forwarder contract.\n @return The hash of the bytecode of the ERC20 forwarder contract."
                        },
                        "functionSelector": "d13053bb",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "ERC20LINK_HASH",
                        "nameLocation": "1678:14:81",
                        "parameters": {
                            "id": 10092,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1692:2:81"
                        },
                        "returnParameters": {
                            "id": 10095,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 10094,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 10096,
                                    "src": "1718:7:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 10093,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1718:7:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1717:9:81"
                        },
                        "scope": 10097,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IERC20ForwarderFactory",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    10097
                ],
                "name": "IERC20ForwarderFactory",
                "nameLocation": "181:22:81",
                "scope": 10098,
                "usedErrors": [
                    10058
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 81
};
