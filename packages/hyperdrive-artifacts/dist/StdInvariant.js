export const StdInvariant = {
    "abi": [
        {
            "inputs": [],
            "name": "excludeArtifacts",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "excludedArtifacts_",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "excludeContracts",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "excludedContracts_",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "excludeSenders",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "excludedSenders_",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetArtifactSelectors",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "addr",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes4[]",
                            "name": "selectors",
                            "type": "bytes4[]"
                        }
                    ],
                    "internalType": "struct StdInvariant.FuzzSelector[]",
                    "name": "targetedArtifactSelectors_",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetArtifacts",
            "outputs": [
                {
                    "internalType": "string[]",
                    "name": "targetedArtifacts_",
                    "type": "string[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetContracts",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "targetedContracts_",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetSelectors",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "address",
                            "name": "addr",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes4[]",
                            "name": "selectors",
                            "type": "bytes4[]"
                        }
                    ],
                    "internalType": "struct StdInvariant.FuzzSelector[]",
                    "name": "targetedSelectors_",
                    "type": "tuple[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "targetSenders",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "targetedSenders_",
                    "type": "address[]"
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
        "excludeArtifacts()": "b5508aa9",
        "excludeContracts()": "e20c9f71",
        "excludeSenders()": "1ed7831c",
        "targetArtifactSelectors()": "66d9a9a0",
        "targetArtifacts()": "85226c81",
        "targetContracts()": "3f7286f4",
        "targetSelectors()": "916a17c6",
        "targetSenders()": "3e5e3c23"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdInvariant.sol\":\"StdInvariant\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "excludeArtifacts",
                    "outputs": [
                        {
                            "internalType": "string[]",
                            "name": "excludedArtifacts_",
                            "type": "string[]"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "excludeContracts",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "excludedContracts_",
                            "type": "address[]"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "excludeSenders",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "excludedSenders_",
                            "type": "address[]"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "targetArtifactSelectors",
                    "outputs": [
                        {
                            "internalType": "struct StdInvariant.FuzzSelector[]",
                            "name": "targetedArtifactSelectors_",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "addr",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes4[]",
                                    "name": "selectors",
                                    "type": "bytes4[]"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "targetArtifacts",
                    "outputs": [
                        {
                            "internalType": "string[]",
                            "name": "targetedArtifacts_",
                            "type": "string[]"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "targetContracts",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "targetedContracts_",
                            "type": "address[]"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "targetSelectors",
                    "outputs": [
                        {
                            "internalType": "struct StdInvariant.FuzzSelector[]",
                            "name": "targetedSelectors_",
                            "type": "tuple[]",
                            "components": [
                                {
                                    "internalType": "address",
                                    "name": "addr",
                                    "type": "address"
                                },
                                {
                                    "internalType": "bytes4[]",
                                    "name": "selectors",
                                    "type": "bytes4[]"
                                }
                            ]
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "targetSenders",
                    "outputs": [
                        {
                            "internalType": "address[]",
                            "name": "targetedSenders_",
                            "type": "address[]"
                        }
                    ]
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
                "lib/forge-std/src/StdInvariant.sol": "StdInvariant"
            },
            "libraries": {}
        },
        "sources": {
            "lib/forge-std/src/StdInvariant.sol": {
                "keccak256": "0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1",
                "urls": [
                    "bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c",
                    "dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/forge-std/src/StdInvariant.sol",
        "id": 30648,
        "exportedSymbols": {
            "StdInvariant": [
                30647
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:3043:100",
        "nodes": [
            {
                "id": 30425,
                "nodeType": "PragmaDirective",
                "src": "32:31:100",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.6",
                    ".2",
                    "<",
                    "0.9",
                    ".0"
                ]
            },
            {
                "id": 30426,
                "nodeType": "PragmaDirective",
                "src": "65:33:100",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 30647,
                "nodeType": "ContractDefinition",
                "src": "100:2974:100",
                "nodes": [
                    {
                        "id": 30432,
                        "nodeType": "StructDefinition",
                        "src": "137:77:100",
                        "nodes": [],
                        "canonicalName": "StdInvariant.FuzzSelector",
                        "members": [
                            {
                                "constant": false,
                                "id": 30428,
                                "mutability": "mutable",
                                "name": "addr",
                                "nameLocation": "175:4:100",
                                "nodeType": "VariableDeclaration",
                                "scope": 30432,
                                "src": "167:12:100",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 30427,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "167:7:100",
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
                                "id": 30431,
                                "mutability": "mutable",
                                "name": "selectors",
                                "nameLocation": "198:9:100",
                                "nodeType": "VariableDeclaration",
                                "scope": 30432,
                                "src": "189:18:100",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                                    "typeString": "bytes4[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 30429,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "189:6:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "id": 30430,
                                    "nodeType": "ArrayTypeName",
                                    "src": "189:8:100",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                                        "typeString": "bytes4[]"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "FuzzSelector",
                        "nameLocation": "144:12:100",
                        "scope": 30647,
                        "visibility": "public"
                    },
                    {
                        "id": 30435,
                        "nodeType": "VariableDeclaration",
                        "src": "220:36:100",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_excludedContracts",
                        "nameLocation": "238:18:100",
                        "scope": 30647,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 30433,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "220:7:100",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 30434,
                            "nodeType": "ArrayTypeName",
                            "src": "220:9:100",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 30438,
                        "nodeType": "VariableDeclaration",
                        "src": "262:34:100",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_excludedSenders",
                        "nameLocation": "280:16:100",
                        "scope": 30647,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 30436,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "262:7:100",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 30437,
                            "nodeType": "ArrayTypeName",
                            "src": "262:9:100",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 30441,
                        "nodeType": "VariableDeclaration",
                        "src": "302:36:100",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedContracts",
                        "nameLocation": "320:18:100",
                        "scope": 30647,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 30439,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "302:7:100",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 30440,
                            "nodeType": "ArrayTypeName",
                            "src": "302:9:100",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 30444,
                        "nodeType": "VariableDeclaration",
                        "src": "344:34:100",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedSenders",
                        "nameLocation": "362:16:100",
                        "scope": 30647,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 30442,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "344:7:100",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 30443,
                            "nodeType": "ArrayTypeName",
                            "src": "344:9:100",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 30447,
                        "nodeType": "VariableDeclaration",
                        "src": "385:35:100",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_excludedArtifacts",
                        "nameLocation": "402:18:100",
                        "scope": 30647,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                            "typeString": "string[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 30445,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "385:6:100",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "id": 30446,
                            "nodeType": "ArrayTypeName",
                            "src": "385:8:100",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                "typeString": "string[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 30450,
                        "nodeType": "VariableDeclaration",
                        "src": "426:35:100",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedArtifacts",
                        "nameLocation": "443:18:100",
                        "scope": 30647,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                            "typeString": "string[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 30448,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "426:6:100",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "id": 30449,
                            "nodeType": "ArrayTypeName",
                            "src": "426:8:100",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                "typeString": "string[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 30454,
                        "nodeType": "VariableDeclaration",
                        "src": "468:49:100",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedArtifactSelectors",
                        "nameLocation": "491:26:100",
                        "scope": 30647,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage",
                            "typeString": "struct StdInvariant.FuzzSelector[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 30452,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 30451,
                                    "name": "FuzzSelector",
                                    "nameLocations": [
                                        "468:12:100"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 30432,
                                    "src": "468:12:100"
                                },
                                "referencedDeclaration": 30432,
                                "src": "468:12:100",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_FuzzSelector_$30432_storage_ptr",
                                    "typeString": "struct StdInvariant.FuzzSelector"
                                }
                            },
                            "id": 30453,
                            "nodeType": "ArrayTypeName",
                            "src": "468:14:100",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage_ptr",
                                "typeString": "struct StdInvariant.FuzzSelector[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 30458,
                        "nodeType": "VariableDeclaration",
                        "src": "523:41:100",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedSelectors",
                        "nameLocation": "546:18:100",
                        "scope": 30647,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage",
                            "typeString": "struct StdInvariant.FuzzSelector[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 30456,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 30455,
                                    "name": "FuzzSelector",
                                    "nameLocations": [
                                        "523:12:100"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 30432,
                                    "src": "523:12:100"
                                },
                                "referencedDeclaration": 30432,
                                "src": "523:12:100",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_FuzzSelector_$30432_storage_ptr",
                                    "typeString": "struct StdInvariant.FuzzSelector"
                                }
                            },
                            "id": 30457,
                            "nodeType": "ArrayTypeName",
                            "src": "523:14:100",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage_ptr",
                                "typeString": "struct StdInvariant.FuzzSelector[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 30470,
                        "nodeType": "FunctionDefinition",
                        "src": "649:126:100",
                        "nodes": [],
                        "body": {
                            "id": 30469,
                            "nodeType": "Block",
                            "src": "713:62:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 30466,
                                                "name": "newExcludedContract_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30460,
                                                "src": "747:20:100",
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
                                            "expression": {
                                                "id": 30463,
                                                "name": "_excludedContracts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30435,
                                                "src": "723:18:100",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 30465,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "742:4:100",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "723:23:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 30467,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "723:45:100",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 30468,
                                    "nodeType": "ExpressionStatement",
                                    "src": "723:45:100"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeContract",
                        "nameLocation": "658:15:100",
                        "parameters": {
                            "id": 30461,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30460,
                                    "mutability": "mutable",
                                    "name": "newExcludedContract_",
                                    "nameLocation": "682:20:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30470,
                                    "src": "674:28:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 30459,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "674:7:100",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "673:30:100"
                        },
                        "returnParameters": {
                            "id": 30462,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "713:0:100"
                        },
                        "scope": 30647,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 30482,
                        "nodeType": "FunctionDefinition",
                        "src": "781:118:100",
                        "nodes": [],
                        "body": {
                            "id": 30481,
                            "nodeType": "Block",
                            "src": "841:58:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 30478,
                                                "name": "newExcludedSender_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30472,
                                                "src": "873:18:100",
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
                                            "expression": {
                                                "id": 30475,
                                                "name": "_excludedSenders",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30438,
                                                "src": "851:16:100",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 30477,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "868:4:100",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "851:21:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 30479,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "851:41:100",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 30480,
                                    "nodeType": "ExpressionStatement",
                                    "src": "851:41:100"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeSender",
                        "nameLocation": "790:13:100",
                        "parameters": {
                            "id": 30473,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30472,
                                    "mutability": "mutable",
                                    "name": "newExcludedSender_",
                                    "nameLocation": "812:18:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30482,
                                    "src": "804:26:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 30471,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "804:7:100",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "803:28:100"
                        },
                        "returnParameters": {
                            "id": 30474,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "841:0:100"
                        },
                        "scope": 30647,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 30494,
                        "nodeType": "FunctionDefinition",
                        "src": "905:132:100",
                        "nodes": [],
                        "body": {
                            "id": 30493,
                            "nodeType": "Block",
                            "src": "975:62:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 30490,
                                                "name": "newExcludedArtifact_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30484,
                                                "src": "1009:20:100",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 30487,
                                                "name": "_excludedArtifacts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30447,
                                                "src": "985:18:100",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                    "typeString": "string storage ref[] storage ref"
                                                }
                                            },
                                            "id": 30489,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1004:4:100",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "985:23:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                                            }
                                        },
                                        "id": 30491,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "985:45:100",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 30492,
                                    "nodeType": "ExpressionStatement",
                                    "src": "985:45:100"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeArtifact",
                        "nameLocation": "914:15:100",
                        "parameters": {
                            "id": 30485,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30484,
                                    "mutability": "mutable",
                                    "name": "newExcludedArtifact_",
                                    "nameLocation": "944:20:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30494,
                                    "src": "930:34:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 30483,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "930:6:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "929:36:100"
                        },
                        "returnParameters": {
                            "id": 30486,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "975:0:100"
                        },
                        "scope": 30647,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 30506,
                        "nodeType": "FunctionDefinition",
                        "src": "1043:131:100",
                        "nodes": [],
                        "body": {
                            "id": 30505,
                            "nodeType": "Block",
                            "src": "1112:62:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 30502,
                                                "name": "newTargetedArtifact_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30496,
                                                "src": "1146:20:100",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 30499,
                                                "name": "_targetedArtifacts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30450,
                                                "src": "1122:18:100",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                    "typeString": "string storage ref[] storage ref"
                                                }
                                            },
                                            "id": 30501,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1141:4:100",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1122:23:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                                            }
                                        },
                                        "id": 30503,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1122:45:100",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 30504,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1122:45:100"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifact",
                        "nameLocation": "1052:14:100",
                        "parameters": {
                            "id": 30497,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30496,
                                    "mutability": "mutable",
                                    "name": "newTargetedArtifact_",
                                    "nameLocation": "1081:20:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30506,
                                    "src": "1067:34:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 30495,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1067:6:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1066:36:100"
                        },
                        "returnParameters": {
                            "id": 30498,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1112:0:100"
                        },
                        "scope": 30647,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 30519,
                        "nodeType": "FunctionDefinition",
                        "src": "1180:169:100",
                        "nodes": [],
                        "body": {
                            "id": 30518,
                            "nodeType": "Block",
                            "src": "1271:78:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 30515,
                                                "name": "newTargetedArtifactSelector_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30509,
                                                "src": "1313:28:100",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$30432_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$30432_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 30512,
                                                "name": "_targetedArtifactSelectors",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30454,
                                                "src": "1281:26:100",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage",
                                                    "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                                }
                                            },
                                            "id": 30514,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1308:4:100",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1281:31:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$30432_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                                            }
                                        },
                                        "id": 30516,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1281:61:100",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 30517,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1281:61:100"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifactSelector",
                        "nameLocation": "1189:22:100",
                        "parameters": {
                            "id": 30510,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30509,
                                    "mutability": "mutable",
                                    "name": "newTargetedArtifactSelector_",
                                    "nameLocation": "1232:28:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30519,
                                    "src": "1212:48:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_FuzzSelector_$30432_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector"
                                    },
                                    "typeName": {
                                        "id": 30508,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 30507,
                                            "name": "FuzzSelector",
                                            "nameLocations": [
                                                "1212:12:100"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 30432,
                                            "src": "1212:12:100"
                                        },
                                        "referencedDeclaration": 30432,
                                        "src": "1212:12:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_FuzzSelector_$30432_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1211:50:100"
                        },
                        "returnParameters": {
                            "id": 30511,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1271:0:100"
                        },
                        "scope": 30647,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 30531,
                        "nodeType": "FunctionDefinition",
                        "src": "1355:125:100",
                        "nodes": [],
                        "body": {
                            "id": 30530,
                            "nodeType": "Block",
                            "src": "1418:62:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 30527,
                                                "name": "newTargetedContract_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30521,
                                                "src": "1452:20:100",
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
                                            "expression": {
                                                "id": 30524,
                                                "name": "_targetedContracts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30441,
                                                "src": "1428:18:100",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 30526,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1447:4:100",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1428:23:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 30528,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1428:45:100",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 30529,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1428:45:100"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetContract",
                        "nameLocation": "1364:14:100",
                        "parameters": {
                            "id": 30522,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30521,
                                    "mutability": "mutable",
                                    "name": "newTargetedContract_",
                                    "nameLocation": "1387:20:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30531,
                                    "src": "1379:28:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 30520,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1379:7:100",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1378:30:100"
                        },
                        "returnParameters": {
                            "id": 30523,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1418:0:100"
                        },
                        "scope": 30647,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 30544,
                        "nodeType": "FunctionDefinition",
                        "src": "1486:137:100",
                        "nodes": [],
                        "body": {
                            "id": 30543,
                            "nodeType": "Block",
                            "src": "1561:62:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 30540,
                                                "name": "newTargetedSelector_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30534,
                                                "src": "1595:20:100",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$30432_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$30432_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 30537,
                                                "name": "_targetedSelectors",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30458,
                                                "src": "1571:18:100",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage",
                                                    "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                                }
                                            },
                                            "id": 30539,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1590:4:100",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1571:23:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$30432_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                                            }
                                        },
                                        "id": 30541,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1571:45:100",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 30542,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1571:45:100"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSelector",
                        "nameLocation": "1495:14:100",
                        "parameters": {
                            "id": 30535,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30534,
                                    "mutability": "mutable",
                                    "name": "newTargetedSelector_",
                                    "nameLocation": "1530:20:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30544,
                                    "src": "1510:40:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_FuzzSelector_$30432_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector"
                                    },
                                    "typeName": {
                                        "id": 30533,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 30532,
                                            "name": "FuzzSelector",
                                            "nameLocations": [
                                                "1510:12:100"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 30432,
                                            "src": "1510:12:100"
                                        },
                                        "referencedDeclaration": 30432,
                                        "src": "1510:12:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_FuzzSelector_$30432_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1509:42:100"
                        },
                        "returnParameters": {
                            "id": 30536,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1561:0:100"
                        },
                        "scope": 30647,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 30556,
                        "nodeType": "FunctionDefinition",
                        "src": "1629:117:100",
                        "nodes": [],
                        "body": {
                            "id": 30555,
                            "nodeType": "Block",
                            "src": "1688:58:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 30552,
                                                "name": "newTargetedSender_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30546,
                                                "src": "1720:18:100",
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
                                            "expression": {
                                                "id": 30549,
                                                "name": "_targetedSenders",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 30444,
                                                "src": "1698:16:100",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 30551,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1715:4:100",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1698:21:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 30553,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1698:41:100",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 30554,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1698:41:100"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSender",
                        "nameLocation": "1638:12:100",
                        "parameters": {
                            "id": 30547,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30546,
                                    "mutability": "mutable",
                                    "name": "newTargetedSender_",
                                    "nameLocation": "1659:18:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30556,
                                    "src": "1651:26:100",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 30545,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1651:7:100",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1650:28:100"
                        },
                        "returnParameters": {
                            "id": 30548,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1688:0:100"
                        },
                        "scope": 30647,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 30567,
                        "nodeType": "FunctionDefinition",
                        "src": "1875:141:100",
                        "nodes": [],
                        "body": {
                            "id": 30566,
                            "nodeType": "Block",
                            "src": "1960:56:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 30564,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 30562,
                                            "name": "excludedArtifacts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30560,
                                            "src": "1970:18:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "string memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 30563,
                                            "name": "_excludedArtifacts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30447,
                                            "src": "1991:18:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                "typeString": "string storage ref[] storage ref"
                                            }
                                        },
                                        "src": "1970:39:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "string memory[] memory"
                                        }
                                    },
                                    "id": 30565,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1970:39:100"
                                }
                            ]
                        },
                        "functionSelector": "b5508aa9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeArtifacts",
                        "nameLocation": "1884:16:100",
                        "parameters": {
                            "id": 30557,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1900:2:100"
                        },
                        "returnParameters": {
                            "id": 30561,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30560,
                                    "mutability": "mutable",
                                    "name": "excludedArtifacts_",
                                    "nameLocation": "1940:18:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30567,
                                    "src": "1924:34:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 30558,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1924:6:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 30559,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1924:8:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                            "typeString": "string[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1923:36:100"
                        },
                        "scope": 30647,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 30578,
                        "nodeType": "FunctionDefinition",
                        "src": "2022:142:100",
                        "nodes": [],
                        "body": {
                            "id": 30577,
                            "nodeType": "Block",
                            "src": "2108:56:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 30575,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 30573,
                                            "name": "excludedContracts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30571,
                                            "src": "2118:18:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 30574,
                                            "name": "_excludedContracts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30435,
                                            "src": "2139:18:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "2118:39:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 30576,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2118:39:100"
                                }
                            ]
                        },
                        "functionSelector": "e20c9f71",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeContracts",
                        "nameLocation": "2031:16:100",
                        "parameters": {
                            "id": 30568,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2047:2:100"
                        },
                        "returnParameters": {
                            "id": 30572,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30571,
                                    "mutability": "mutable",
                                    "name": "excludedContracts_",
                                    "nameLocation": "2088:18:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30578,
                                    "src": "2071:35:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 30569,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2071:7:100",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 30570,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2071:9:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2070:37:100"
                        },
                        "scope": 30647,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 30589,
                        "nodeType": "FunctionDefinition",
                        "src": "2170:134:100",
                        "nodes": [],
                        "body": {
                            "id": 30588,
                            "nodeType": "Block",
                            "src": "2252:52:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 30586,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 30584,
                                            "name": "excludedSenders_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30582,
                                            "src": "2262:16:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 30585,
                                            "name": "_excludedSenders",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30438,
                                            "src": "2281:16:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "2262:35:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 30587,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2262:35:100"
                                }
                            ]
                        },
                        "functionSelector": "1ed7831c",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeSenders",
                        "nameLocation": "2179:14:100",
                        "parameters": {
                            "id": 30579,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2193:2:100"
                        },
                        "returnParameters": {
                            "id": 30583,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30582,
                                    "mutability": "mutable",
                                    "name": "excludedSenders_",
                                    "nameLocation": "2234:16:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30589,
                                    "src": "2217:33:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 30580,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2217:7:100",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 30581,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2217:9:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2216:35:100"
                        },
                        "scope": 30647,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 30600,
                        "nodeType": "FunctionDefinition",
                        "src": "2310:140:100",
                        "nodes": [],
                        "body": {
                            "id": 30599,
                            "nodeType": "Block",
                            "src": "2394:56:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 30597,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 30595,
                                            "name": "targetedArtifacts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30593,
                                            "src": "2404:18:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "string memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 30596,
                                            "name": "_targetedArtifacts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30450,
                                            "src": "2425:18:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                "typeString": "string storage ref[] storage ref"
                                            }
                                        },
                                        "src": "2404:39:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "string memory[] memory"
                                        }
                                    },
                                    "id": 30598,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2404:39:100"
                                }
                            ]
                        },
                        "functionSelector": "85226c81",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifacts",
                        "nameLocation": "2319:15:100",
                        "parameters": {
                            "id": 30590,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2334:2:100"
                        },
                        "returnParameters": {
                            "id": 30594,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30593,
                                    "mutability": "mutable",
                                    "name": "targetedArtifacts_",
                                    "nameLocation": "2374:18:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30600,
                                    "src": "2358:34:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 30591,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2358:6:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 30592,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2358:8:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                            "typeString": "string[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2357:36:100"
                        },
                        "scope": 30647,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 30612,
                        "nodeType": "FunctionDefinition",
                        "src": "2456:178:100",
                        "nodes": [],
                        "body": {
                            "id": 30611,
                            "nodeType": "Block",
                            "src": "2562:72:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 30609,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 30607,
                                            "name": "targetedArtifactSelectors_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30605,
                                            "src": "2572:26:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 30608,
                                            "name": "_targetedArtifactSelectors",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30454,
                                            "src": "2601:26:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage",
                                                "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                            }
                                        },
                                        "src": "2572:55:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                        }
                                    },
                                    "id": 30610,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2572:55:100"
                                }
                            ]
                        },
                        "functionSelector": "66d9a9a0",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifactSelectors",
                        "nameLocation": "2465:23:100",
                        "parameters": {
                            "id": 30601,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2488:2:100"
                        },
                        "returnParameters": {
                            "id": 30606,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30605,
                                    "mutability": "mutable",
                                    "name": "targetedArtifactSelectors_",
                                    "nameLocation": "2534:26:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30612,
                                    "src": "2512:48:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 30603,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 30602,
                                                "name": "FuzzSelector",
                                                "nameLocations": [
                                                    "2512:12:100"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 30432,
                                                "src": "2512:12:100"
                                            },
                                            "referencedDeclaration": 30432,
                                            "src": "2512:12:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_FuzzSelector_$30432_storage_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector"
                                            }
                                        },
                                        "id": 30604,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2512:14:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2511:50:100"
                        },
                        "scope": 30647,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 30623,
                        "nodeType": "FunctionDefinition",
                        "src": "2640:141:100",
                        "nodes": [],
                        "body": {
                            "id": 30622,
                            "nodeType": "Block",
                            "src": "2725:56:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 30620,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 30618,
                                            "name": "targetedContracts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30616,
                                            "src": "2735:18:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 30619,
                                            "name": "_targetedContracts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30441,
                                            "src": "2756:18:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "2735:39:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 30621,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2735:39:100"
                                }
                            ]
                        },
                        "functionSelector": "3f7286f4",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetContracts",
                        "nameLocation": "2649:15:100",
                        "parameters": {
                            "id": 30613,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2664:2:100"
                        },
                        "returnParameters": {
                            "id": 30617,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30616,
                                    "mutability": "mutable",
                                    "name": "targetedContracts_",
                                    "nameLocation": "2705:18:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30623,
                                    "src": "2688:35:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 30614,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2688:7:100",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 30615,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2688:9:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2687:37:100"
                        },
                        "scope": 30647,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 30635,
                        "nodeType": "FunctionDefinition",
                        "src": "2787:146:100",
                        "nodes": [],
                        "body": {
                            "id": 30634,
                            "nodeType": "Block",
                            "src": "2877:56:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 30632,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 30630,
                                            "name": "targetedSelectors_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30628,
                                            "src": "2887:18:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 30631,
                                            "name": "_targetedSelectors",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30458,
                                            "src": "2908:18:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage",
                                                "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                            }
                                        },
                                        "src": "2887:39:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                        }
                                    },
                                    "id": 30633,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2887:39:100"
                                }
                            ]
                        },
                        "functionSelector": "916a17c6",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSelectors",
                        "nameLocation": "2796:15:100",
                        "parameters": {
                            "id": 30624,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2811:2:100"
                        },
                        "returnParameters": {
                            "id": 30629,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30628,
                                    "mutability": "mutable",
                                    "name": "targetedSelectors_",
                                    "nameLocation": "2857:18:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30635,
                                    "src": "2835:40:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 30626,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 30625,
                                                "name": "FuzzSelector",
                                                "nameLocations": [
                                                    "2835:12:100"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 30432,
                                                "src": "2835:12:100"
                                            },
                                            "referencedDeclaration": 30432,
                                            "src": "2835:12:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_FuzzSelector_$30432_storage_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector"
                                            }
                                        },
                                        "id": 30627,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2835:14:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$30432_storage_$dyn_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2834:42:100"
                        },
                        "scope": 30647,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 30646,
                        "nodeType": "FunctionDefinition",
                        "src": "2939:133:100",
                        "nodes": [],
                        "body": {
                            "id": 30645,
                            "nodeType": "Block",
                            "src": "3020:52:100",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 30643,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 30641,
                                            "name": "targetedSenders_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30639,
                                            "src": "3030:16:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 30642,
                                            "name": "_targetedSenders",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 30444,
                                            "src": "3049:16:100",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "3030:35:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 30644,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3030:35:100"
                                }
                            ]
                        },
                        "functionSelector": "3e5e3c23",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSenders",
                        "nameLocation": "2948:13:100",
                        "parameters": {
                            "id": 30636,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2961:2:100"
                        },
                        "returnParameters": {
                            "id": 30640,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 30639,
                                    "mutability": "mutable",
                                    "name": "targetedSenders_",
                                    "nameLocation": "3002:16:100",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 30646,
                                    "src": "2985:33:100",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 30637,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2985:7:100",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 30638,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2985:9:100",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2984:35:100"
                        },
                        "scope": 30647,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    }
                ],
                "abstract": true,
                "baseContracts": [],
                "canonicalName": "StdInvariant",
                "contractDependencies": [],
                "contractKind": "contract",
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    30647
                ],
                "name": "StdInvariant",
                "nameLocation": "118:12:100",
                "scope": 30648,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 100
};
