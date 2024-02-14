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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidForwarderAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ERC20LINK_HASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"create\",\"outputs\":[{\"internalType\":\"contract IERC20Forwarder\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDeployDetails\",\"outputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"getForwarder\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"ERC20LINK_HASH()\":{\"returns\":{\"_0\":\"The hash of the bytecode of the ERC20 forwarder contract.\"}},\"create(address,uint256)\":{\"params\":{\"_token\":\"The MultiToken targeted by this factory.\",\"_tokenId\":\"The sub-token ID targeted by this factory.\"},\"returns\":{\"_0\":\"Returns the address of the deployed forwarder.\"}},\"getDeployDetails()\":{\"returns\":{\"_0\":\"The target MultiToken.\",\"_1\":\"The target token ID.\"}},\"getForwarder(address,uint256)\":{\"params\":{\"_token\":\"The target MultiToken of the forwarder.\",\"_tokenId\":\"The target token ID of the forwarder.\"},\"returns\":{\"_0\":\"The expected address of the forwarder.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidForwarderAddress()\":[{\"notice\":\"Thrown when a forwarder is deployed to an unexpected address.\"}]},\"kind\":\"user\",\"methods\":{\"ERC20LINK_HASH()\":{\"notice\":\"Gets the hash of the bytecode of the ERC20 forwarder contract.\"},\"create(address,uint256)\":{\"notice\":\"Uses create2 to deploy a forwarder at a predictable address as         part of our ERC20 multitoken implementation.\"},\"getDeployDetails()\":{\"notice\":\"Gets the MultiToken and token ID that should be targeted by the         calling forwarder.\"},\"getForwarder(address,uint256)\":{\"notice\":\"Helper to calculate expected forwarder contract addresses.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC20ForwarderFactory.sol\":\"IERC20ForwarderFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IERC20Forwarder.sol\":{\"keccak256\":\"0x0af72255c641b0cd5c1975215e3f6713539da7963edd3d67d8151657e524dbe9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://187998e942efa97a7932bef37fde379346938e19f513e8e73c7ae9dbdd83499a\",\"dweb:/ipfs/QmSwSphYw15JVo2vizDWknyAzsc6ttrjiDMmRDbN7UXHrZ\"]},\"contracts/src/interfaces/IERC20ForwarderFactory.sol\":{\"keccak256\":\"0xd413c9701c4d8be234bd037de24aabacce110848f86eac44fa6de04eda6d05ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://59fcaa637112713c2d1264664f8c6b428da46cceb4689fd8757f07fa87633aad\",\"dweb:/ipfs/QmWGLox6p9Ja2dwH5bgED69JtuK4Y55G7pgTPeeTmYrW5Z\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2\",\"dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0x165f79e628b1975343f979549f3fdb5073a29aeecb03861f41d165961ee39fdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c0751cf322944d080a7a6692897807d0cef798268689afc1f6c8f91182a4222\",\"dweb:/ipfs/QmQVWtCgphU9sjqD2q6F6ww62uXDSWZx5KJVj6jFJpXeDK\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c\",\"dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx\"]}},\"version\":1}",
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
                "keccak256": "0x0af72255c641b0cd5c1975215e3f6713539da7963edd3d67d8151657e524dbe9",
                "urls": [
                    "bzz-raw://187998e942efa97a7932bef37fde379346938e19f513e8e73c7ae9dbdd83499a",
                    "dweb:/ipfs/QmSwSphYw15JVo2vizDWknyAzsc6ttrjiDMmRDbN7UXHrZ"
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
                "keccak256": "0xf692b4673daac8627a185253b5fb99c843d9c5a2897be50599030fbd02c21a28",
                "urls": [
                    "bzz-raw://ec28e35b2523d2f399c79ec5c8e29a4985a0e7a2d1d83c9a834d84dfc44130a2",
                    "dweb:/ipfs/QmZLHmSUkDJsnU2FJ4FuaMfo2t6dPimmLaCDrfuxYF8nmD"
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
                "keccak256": "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862",
                "urls": [
                    "bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355",
                    "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"
                ],
                "license": "Apache-2.0"
            },
            "contracts/src/interfaces/IMultiTokenRead.sol": {
                "keccak256": "0xc28d1017afe010c20c2fbe9b78e0001eb8b7db16e0fe5038990692227be365ec",
                "urls": [
                    "bzz-raw://8056e866c6da775c66cefc4e03d8856d75980d8c6eb98e954e1319b2478ad51c",
                    "dweb:/ipfs/Qme9n2mBoeFUxf7Tzx4dD3iYt2kDsza6mqPXoUogPnS2hx"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IERC20ForwarderFactory.sol",
        "id": 6911,
        "exportedSymbols": {
            "IERC20Forwarder": [
                6862
            ],
            "IERC20ForwarderFactory": [
                6910
            ],
            "IMultiToken": [
                8357
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:1691:39",
        "nodes": [
            {
                "id": 6864,
                "nodeType": "PragmaDirective",
                "src": "39:23:39",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 6866,
                "nodeType": "ImportDirective",
                "src": "64:56:39",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20Forwarder.sol",
                "file": "./IERC20Forwarder.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6911,
                "sourceUnit": 6863,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6865,
                            "name": "IERC20Forwarder",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6862,
                            "src": "73:15:39",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6868,
                "nodeType": "ImportDirective",
                "src": "121:48:39",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IMultiToken.sol",
                "file": "./IMultiToken.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 6911,
                "sourceUnit": 8358,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 6867,
                            "name": "IMultiToken",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8357,
                            "src": "130:11:39",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 6910,
                "nodeType": "ContractDefinition",
                "src": "171:1558:39",
                "nodes": [
                    {
                        "id": 6871,
                        "nodeType": "ErrorDefinition",
                        "src": "308:32:39",
                        "nodes": [],
                        "documentation": {
                            "id": 6869,
                            "nodeType": "StructuredDocumentation",
                            "src": "230:73:39",
                            "text": "@notice Thrown when a forwarder is deployed to an unexpected address."
                        },
                        "errorSelector": "381dd540",
                        "name": "InvalidForwarderAddress",
                        "nameLocation": "314:23:39",
                        "parameters": {
                            "id": 6870,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "337:2:39"
                        }
                    },
                    {
                        "id": 6883,
                        "nodeType": "FunctionDefinition",
                        "src": "702:111:39",
                        "nodes": [],
                        "documentation": {
                            "id": 6872,
                            "nodeType": "StructuredDocumentation",
                            "src": "369:328:39",
                            "text": "@notice Uses create2 to deploy a forwarder at a predictable address as\n         part of our ERC20 multitoken implementation.\n @param _token The MultiToken targeted by this factory.\n @param _tokenId The sub-token ID targeted by this factory.\n @return Returns the address of the deployed forwarder."
                        },
                        "functionSelector": "0ecaea73",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "create",
                        "nameLocation": "711:6:39",
                        "parameters": {
                            "id": 6878,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6875,
                                    "mutability": "mutable",
                                    "name": "_token",
                                    "nameLocation": "739:6:39",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6883,
                                    "src": "727:18:39",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IMultiToken_$8357",
                                        "typeString": "contract IMultiToken"
                                    },
                                    "typeName": {
                                        "id": 6874,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6873,
                                            "name": "IMultiToken",
                                            "nameLocations": [
                                                "727:11:39"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 8357,
                                            "src": "727:11:39"
                                        },
                                        "referencedDeclaration": 8357,
                                        "src": "727:11:39",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IMultiToken_$8357",
                                            "typeString": "contract IMultiToken"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 6877,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "763:8:39",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6883,
                                    "src": "755:16:39",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 6876,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "755:7:39",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "717:60:39"
                        },
                        "returnParameters": {
                            "id": 6882,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6881,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6883,
                                    "src": "796:15:39",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20Forwarder_$6862",
                                        "typeString": "contract IERC20Forwarder"
                                    },
                                    "typeName": {
                                        "id": 6880,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6879,
                                            "name": "IERC20Forwarder",
                                            "nameLocations": [
                                                "796:15:39"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 6862,
                                            "src": "796:15:39"
                                        },
                                        "referencedDeclaration": 6862,
                                        "src": "796:15:39",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20Forwarder_$6862",
                                            "typeString": "contract IERC20Forwarder"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "795:17:39"
                        },
                        "scope": 6910,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 6892,
                        "nodeType": "FunctionDefinition",
                        "src": "1010:73:39",
                        "nodes": [],
                        "documentation": {
                            "id": 6884,
                            "nodeType": "StructuredDocumentation",
                            "src": "819:186:39",
                            "text": "@notice Gets the MultiToken and token ID that should be targeted by the\n         calling forwarder.\n @return The target MultiToken.\n @return The target token ID."
                        },
                        "functionSelector": "600eb4ba",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getDeployDetails",
                        "nameLocation": "1019:16:39",
                        "parameters": {
                            "id": 6885,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1035:2:39"
                        },
                        "returnParameters": {
                            "id": 6891,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6888,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6892,
                                    "src": "1061:11:39",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IMultiToken_$8357",
                                        "typeString": "contract IMultiToken"
                                    },
                                    "typeName": {
                                        "id": 6887,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6886,
                                            "name": "IMultiToken",
                                            "nameLocations": [
                                                "1061:11:39"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 8357,
                                            "src": "1061:11:39"
                                        },
                                        "referencedDeclaration": 8357,
                                        "src": "1061:11:39",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IMultiToken_$8357",
                                            "typeString": "contract IMultiToken"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 6890,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6892,
                                    "src": "1074:7:39",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 6889,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1074:7:39",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1060:22:39"
                        },
                        "scope": 6910,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 6903,
                        "nodeType": "FunctionDefinition",
                        "src": "1343:114:39",
                        "nodes": [],
                        "documentation": {
                            "id": 6893,
                            "nodeType": "StructuredDocumentation",
                            "src": "1089:249:39",
                            "text": "@notice Helper to calculate expected forwarder contract addresses.\n @param _token The target MultiToken of the forwarder.\n @param _tokenId The target token ID of the forwarder.\n @return The expected address of the forwarder."
                        },
                        "functionSelector": "0710fd58",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "getForwarder",
                        "nameLocation": "1352:12:39",
                        "parameters": {
                            "id": 6899,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6896,
                                    "mutability": "mutable",
                                    "name": "_token",
                                    "nameLocation": "1386:6:39",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6903,
                                    "src": "1374:18:39",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IMultiToken_$8357",
                                        "typeString": "contract IMultiToken"
                                    },
                                    "typeName": {
                                        "id": 6895,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 6894,
                                            "name": "IMultiToken",
                                            "nameLocations": [
                                                "1374:11:39"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 8357,
                                            "src": "1374:11:39"
                                        },
                                        "referencedDeclaration": 8357,
                                        "src": "1374:11:39",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IMultiToken_$8357",
                                            "typeString": "contract IMultiToken"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 6898,
                                    "mutability": "mutable",
                                    "name": "_tokenId",
                                    "nameLocation": "1410:8:39",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6903,
                                    "src": "1402:16:39",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 6897,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1402:7:39",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1364:60:39"
                        },
                        "returnParameters": {
                            "id": 6902,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6901,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6903,
                                    "src": "1448:7:39",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 6900,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1448:7:39",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1447:9:39"
                        },
                        "scope": 6910,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 6909,
                        "nodeType": "FunctionDefinition",
                        "src": "1669:58:39",
                        "nodes": [],
                        "documentation": {
                            "id": 6904,
                            "nodeType": "StructuredDocumentation",
                            "src": "1463:148:39",
                            "text": "@notice Gets the hash of the bytecode of the ERC20 forwarder contract.\n @return The hash of the bytecode of the ERC20 forwarder contract."
                        },
                        "functionSelector": "d13053bb",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "ERC20LINK_HASH",
                        "nameLocation": "1678:14:39",
                        "parameters": {
                            "id": 6905,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1692:2:39"
                        },
                        "returnParameters": {
                            "id": 6908,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 6907,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6909,
                                    "src": "1718:7:39",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 6906,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1718:7:39",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1717:9:39"
                        },
                        "scope": 6910,
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
                    6910
                ],
                "name": "IERC20ForwarderFactory",
                "nameLocation": "181:22:39",
                "scope": 6911,
                "usedErrors": [
                    6871
                ],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 39
};
