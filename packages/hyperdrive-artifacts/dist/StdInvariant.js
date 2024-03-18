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
        "id": 35285,
        "exportedSymbols": {
            "StdInvariant": [
                35284
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:3043:151",
        "nodes": [
            {
                "id": 35062,
                "nodeType": "PragmaDirective",
                "src": "32:31:151",
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
                "id": 35063,
                "nodeType": "PragmaDirective",
                "src": "65:33:151",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 35284,
                "nodeType": "ContractDefinition",
                "src": "100:2974:151",
                "nodes": [
                    {
                        "id": 35069,
                        "nodeType": "StructDefinition",
                        "src": "137:77:151",
                        "nodes": [],
                        "canonicalName": "StdInvariant.FuzzSelector",
                        "members": [
                            {
                                "constant": false,
                                "id": 35065,
                                "mutability": "mutable",
                                "name": "addr",
                                "nameLocation": "175:4:151",
                                "nodeType": "VariableDeclaration",
                                "scope": 35069,
                                "src": "167:12:151",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 35064,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "167:7:151",
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
                                "id": 35068,
                                "mutability": "mutable",
                                "name": "selectors",
                                "nameLocation": "198:9:151",
                                "nodeType": "VariableDeclaration",
                                "scope": 35069,
                                "src": "189:18:151",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                                    "typeString": "bytes4[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 35066,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "189:6:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "id": 35067,
                                    "nodeType": "ArrayTypeName",
                                    "src": "189:8:151",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                                        "typeString": "bytes4[]"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "FuzzSelector",
                        "nameLocation": "144:12:151",
                        "scope": 35284,
                        "visibility": "public"
                    },
                    {
                        "id": 35072,
                        "nodeType": "VariableDeclaration",
                        "src": "220:36:151",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_excludedContracts",
                        "nameLocation": "238:18:151",
                        "scope": 35284,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 35070,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "220:7:151",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 35071,
                            "nodeType": "ArrayTypeName",
                            "src": "220:9:151",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 35075,
                        "nodeType": "VariableDeclaration",
                        "src": "262:34:151",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_excludedSenders",
                        "nameLocation": "280:16:151",
                        "scope": 35284,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 35073,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "262:7:151",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 35074,
                            "nodeType": "ArrayTypeName",
                            "src": "262:9:151",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 35078,
                        "nodeType": "VariableDeclaration",
                        "src": "302:36:151",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedContracts",
                        "nameLocation": "320:18:151",
                        "scope": 35284,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 35076,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "302:7:151",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 35077,
                            "nodeType": "ArrayTypeName",
                            "src": "302:9:151",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 35081,
                        "nodeType": "VariableDeclaration",
                        "src": "344:34:151",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedSenders",
                        "nameLocation": "362:16:151",
                        "scope": 35284,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 35079,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "344:7:151",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 35080,
                            "nodeType": "ArrayTypeName",
                            "src": "344:9:151",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 35084,
                        "nodeType": "VariableDeclaration",
                        "src": "385:35:151",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_excludedArtifacts",
                        "nameLocation": "402:18:151",
                        "scope": 35284,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                            "typeString": "string[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 35082,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "385:6:151",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "id": 35083,
                            "nodeType": "ArrayTypeName",
                            "src": "385:8:151",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                "typeString": "string[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 35087,
                        "nodeType": "VariableDeclaration",
                        "src": "426:35:151",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedArtifacts",
                        "nameLocation": "443:18:151",
                        "scope": 35284,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                            "typeString": "string[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 35085,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "426:6:151",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "id": 35086,
                            "nodeType": "ArrayTypeName",
                            "src": "426:8:151",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                "typeString": "string[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 35091,
                        "nodeType": "VariableDeclaration",
                        "src": "468:49:151",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedArtifactSelectors",
                        "nameLocation": "491:26:151",
                        "scope": 35284,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage",
                            "typeString": "struct StdInvariant.FuzzSelector[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 35089,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 35088,
                                    "name": "FuzzSelector",
                                    "nameLocations": [
                                        "468:12:151"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 35069,
                                    "src": "468:12:151"
                                },
                                "referencedDeclaration": 35069,
                                "src": "468:12:151",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_FuzzSelector_$35069_storage_ptr",
                                    "typeString": "struct StdInvariant.FuzzSelector"
                                }
                            },
                            "id": 35090,
                            "nodeType": "ArrayTypeName",
                            "src": "468:14:151",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr",
                                "typeString": "struct StdInvariant.FuzzSelector[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 35095,
                        "nodeType": "VariableDeclaration",
                        "src": "523:41:151",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedSelectors",
                        "nameLocation": "546:18:151",
                        "scope": 35284,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage",
                            "typeString": "struct StdInvariant.FuzzSelector[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 35093,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 35092,
                                    "name": "FuzzSelector",
                                    "nameLocations": [
                                        "523:12:151"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 35069,
                                    "src": "523:12:151"
                                },
                                "referencedDeclaration": 35069,
                                "src": "523:12:151",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_FuzzSelector_$35069_storage_ptr",
                                    "typeString": "struct StdInvariant.FuzzSelector"
                                }
                            },
                            "id": 35094,
                            "nodeType": "ArrayTypeName",
                            "src": "523:14:151",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr",
                                "typeString": "struct StdInvariant.FuzzSelector[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 35107,
                        "nodeType": "FunctionDefinition",
                        "src": "649:126:151",
                        "nodes": [],
                        "body": {
                            "id": 35106,
                            "nodeType": "Block",
                            "src": "713:62:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35103,
                                                "name": "newExcludedContract_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35097,
                                                "src": "747:20:151",
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
                                                "id": 35100,
                                                "name": "_excludedContracts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35072,
                                                "src": "723:18:151",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 35102,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "742:4:151",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "723:23:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 35104,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "723:45:151",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 35105,
                                    "nodeType": "ExpressionStatement",
                                    "src": "723:45:151"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeContract",
                        "nameLocation": "658:15:151",
                        "parameters": {
                            "id": 35098,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35097,
                                    "mutability": "mutable",
                                    "name": "newExcludedContract_",
                                    "nameLocation": "682:20:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35107,
                                    "src": "674:28:151",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 35096,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "674:7:151",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "673:30:151"
                        },
                        "returnParameters": {
                            "id": 35099,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "713:0:151"
                        },
                        "scope": 35284,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35119,
                        "nodeType": "FunctionDefinition",
                        "src": "781:118:151",
                        "nodes": [],
                        "body": {
                            "id": 35118,
                            "nodeType": "Block",
                            "src": "841:58:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35115,
                                                "name": "newExcludedSender_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35109,
                                                "src": "873:18:151",
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
                                                "id": 35112,
                                                "name": "_excludedSenders",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35075,
                                                "src": "851:16:151",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 35114,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "868:4:151",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "851:21:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 35116,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "851:41:151",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 35117,
                                    "nodeType": "ExpressionStatement",
                                    "src": "851:41:151"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeSender",
                        "nameLocation": "790:13:151",
                        "parameters": {
                            "id": 35110,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35109,
                                    "mutability": "mutable",
                                    "name": "newExcludedSender_",
                                    "nameLocation": "812:18:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35119,
                                    "src": "804:26:151",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 35108,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "804:7:151",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "803:28:151"
                        },
                        "returnParameters": {
                            "id": 35111,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "841:0:151"
                        },
                        "scope": 35284,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35131,
                        "nodeType": "FunctionDefinition",
                        "src": "905:132:151",
                        "nodes": [],
                        "body": {
                            "id": 35130,
                            "nodeType": "Block",
                            "src": "975:62:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35127,
                                                "name": "newExcludedArtifact_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35121,
                                                "src": "1009:20:151",
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
                                                "id": 35124,
                                                "name": "_excludedArtifacts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35084,
                                                "src": "985:18:151",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                    "typeString": "string storage ref[] storage ref"
                                                }
                                            },
                                            "id": 35126,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1004:4:151",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "985:23:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                                            }
                                        },
                                        "id": 35128,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "985:45:151",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 35129,
                                    "nodeType": "ExpressionStatement",
                                    "src": "985:45:151"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeArtifact",
                        "nameLocation": "914:15:151",
                        "parameters": {
                            "id": 35122,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35121,
                                    "mutability": "mutable",
                                    "name": "newExcludedArtifact_",
                                    "nameLocation": "944:20:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35131,
                                    "src": "930:34:151",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35120,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "930:6:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "929:36:151"
                        },
                        "returnParameters": {
                            "id": 35123,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "975:0:151"
                        },
                        "scope": 35284,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35143,
                        "nodeType": "FunctionDefinition",
                        "src": "1043:131:151",
                        "nodes": [],
                        "body": {
                            "id": 35142,
                            "nodeType": "Block",
                            "src": "1112:62:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35139,
                                                "name": "newTargetedArtifact_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35133,
                                                "src": "1146:20:151",
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
                                                "id": 35136,
                                                "name": "_targetedArtifacts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35087,
                                                "src": "1122:18:151",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                    "typeString": "string storage ref[] storage ref"
                                                }
                                            },
                                            "id": 35138,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1141:4:151",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1122:23:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                                            }
                                        },
                                        "id": 35140,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1122:45:151",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 35141,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1122:45:151"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifact",
                        "nameLocation": "1052:14:151",
                        "parameters": {
                            "id": 35134,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35133,
                                    "mutability": "mutable",
                                    "name": "newTargetedArtifact_",
                                    "nameLocation": "1081:20:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35143,
                                    "src": "1067:34:151",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 35132,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1067:6:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1066:36:151"
                        },
                        "returnParameters": {
                            "id": 35135,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1112:0:151"
                        },
                        "scope": 35284,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35156,
                        "nodeType": "FunctionDefinition",
                        "src": "1180:169:151",
                        "nodes": [],
                        "body": {
                            "id": 35155,
                            "nodeType": "Block",
                            "src": "1271:78:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35152,
                                                "name": "newTargetedArtifactSelector_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35146,
                                                "src": "1313:28:151",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$35069_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$35069_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35149,
                                                "name": "_targetedArtifactSelectors",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35091,
                                                "src": "1281:26:151",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage",
                                                    "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                                }
                                            },
                                            "id": 35151,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1308:4:151",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1281:31:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$35069_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                                            }
                                        },
                                        "id": 35153,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1281:61:151",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 35154,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1281:61:151"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifactSelector",
                        "nameLocation": "1189:22:151",
                        "parameters": {
                            "id": 35147,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35146,
                                    "mutability": "mutable",
                                    "name": "newTargetedArtifactSelector_",
                                    "nameLocation": "1232:28:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35156,
                                    "src": "1212:48:151",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_FuzzSelector_$35069_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector"
                                    },
                                    "typeName": {
                                        "id": 35145,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 35144,
                                            "name": "FuzzSelector",
                                            "nameLocations": [
                                                "1212:12:151"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 35069,
                                            "src": "1212:12:151"
                                        },
                                        "referencedDeclaration": 35069,
                                        "src": "1212:12:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_FuzzSelector_$35069_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1211:50:151"
                        },
                        "returnParameters": {
                            "id": 35148,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1271:0:151"
                        },
                        "scope": 35284,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35168,
                        "nodeType": "FunctionDefinition",
                        "src": "1355:125:151",
                        "nodes": [],
                        "body": {
                            "id": 35167,
                            "nodeType": "Block",
                            "src": "1418:62:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35164,
                                                "name": "newTargetedContract_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35158,
                                                "src": "1452:20:151",
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
                                                "id": 35161,
                                                "name": "_targetedContracts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35078,
                                                "src": "1428:18:151",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 35163,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1447:4:151",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1428:23:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 35165,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1428:45:151",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 35166,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1428:45:151"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetContract",
                        "nameLocation": "1364:14:151",
                        "parameters": {
                            "id": 35159,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35158,
                                    "mutability": "mutable",
                                    "name": "newTargetedContract_",
                                    "nameLocation": "1387:20:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35168,
                                    "src": "1379:28:151",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 35157,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1379:7:151",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1378:30:151"
                        },
                        "returnParameters": {
                            "id": 35160,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1418:0:151"
                        },
                        "scope": 35284,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35181,
                        "nodeType": "FunctionDefinition",
                        "src": "1486:137:151",
                        "nodes": [],
                        "body": {
                            "id": 35180,
                            "nodeType": "Block",
                            "src": "1561:62:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35177,
                                                "name": "newTargetedSelector_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35171,
                                                "src": "1595:20:151",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$35069_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$35069_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 35174,
                                                "name": "_targetedSelectors",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35095,
                                                "src": "1571:18:151",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage",
                                                    "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                                }
                                            },
                                            "id": 35176,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1590:4:151",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1571:23:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$35069_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                                            }
                                        },
                                        "id": 35178,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1571:45:151",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 35179,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1571:45:151"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSelector",
                        "nameLocation": "1495:14:151",
                        "parameters": {
                            "id": 35172,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35171,
                                    "mutability": "mutable",
                                    "name": "newTargetedSelector_",
                                    "nameLocation": "1530:20:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35181,
                                    "src": "1510:40:151",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_FuzzSelector_$35069_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector"
                                    },
                                    "typeName": {
                                        "id": 35170,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 35169,
                                            "name": "FuzzSelector",
                                            "nameLocations": [
                                                "1510:12:151"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 35069,
                                            "src": "1510:12:151"
                                        },
                                        "referencedDeclaration": 35069,
                                        "src": "1510:12:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_FuzzSelector_$35069_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1509:42:151"
                        },
                        "returnParameters": {
                            "id": 35173,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1561:0:151"
                        },
                        "scope": 35284,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35193,
                        "nodeType": "FunctionDefinition",
                        "src": "1629:117:151",
                        "nodes": [],
                        "body": {
                            "id": 35192,
                            "nodeType": "Block",
                            "src": "1688:58:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 35189,
                                                "name": "newTargetedSender_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35183,
                                                "src": "1720:18:151",
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
                                                "id": 35186,
                                                "name": "_targetedSenders",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35081,
                                                "src": "1698:16:151",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 35188,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1715:4:151",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1698:21:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 35190,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1698:41:151",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 35191,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1698:41:151"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSender",
                        "nameLocation": "1638:12:151",
                        "parameters": {
                            "id": 35184,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35183,
                                    "mutability": "mutable",
                                    "name": "newTargetedSender_",
                                    "nameLocation": "1659:18:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35193,
                                    "src": "1651:26:151",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 35182,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1651:7:151",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1650:28:151"
                        },
                        "returnParameters": {
                            "id": 35185,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1688:0:151"
                        },
                        "scope": 35284,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 35204,
                        "nodeType": "FunctionDefinition",
                        "src": "1875:141:151",
                        "nodes": [],
                        "body": {
                            "id": 35203,
                            "nodeType": "Block",
                            "src": "1960:56:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 35201,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 35199,
                                            "name": "excludedArtifacts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35197,
                                            "src": "1970:18:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "string memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 35200,
                                            "name": "_excludedArtifacts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35084,
                                            "src": "1991:18:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                "typeString": "string storage ref[] storage ref"
                                            }
                                        },
                                        "src": "1970:39:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "string memory[] memory"
                                        }
                                    },
                                    "id": 35202,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1970:39:151"
                                }
                            ]
                        },
                        "functionSelector": "b5508aa9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeArtifacts",
                        "nameLocation": "1884:16:151",
                        "parameters": {
                            "id": 35194,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1900:2:151"
                        },
                        "returnParameters": {
                            "id": 35198,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35197,
                                    "mutability": "mutable",
                                    "name": "excludedArtifacts_",
                                    "nameLocation": "1940:18:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35204,
                                    "src": "1924:34:151",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35195,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1924:6:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 35196,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1924:8:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                            "typeString": "string[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1923:36:151"
                        },
                        "scope": 35284,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 35215,
                        "nodeType": "FunctionDefinition",
                        "src": "2022:142:151",
                        "nodes": [],
                        "body": {
                            "id": 35214,
                            "nodeType": "Block",
                            "src": "2108:56:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 35212,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 35210,
                                            "name": "excludedContracts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35208,
                                            "src": "2118:18:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 35211,
                                            "name": "_excludedContracts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35072,
                                            "src": "2139:18:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "2118:39:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 35213,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2118:39:151"
                                }
                            ]
                        },
                        "functionSelector": "e20c9f71",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeContracts",
                        "nameLocation": "2031:16:151",
                        "parameters": {
                            "id": 35205,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2047:2:151"
                        },
                        "returnParameters": {
                            "id": 35209,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35208,
                                    "mutability": "mutable",
                                    "name": "excludedContracts_",
                                    "nameLocation": "2088:18:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35215,
                                    "src": "2071:35:151",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35206,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2071:7:151",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 35207,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2071:9:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2070:37:151"
                        },
                        "scope": 35284,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 35226,
                        "nodeType": "FunctionDefinition",
                        "src": "2170:134:151",
                        "nodes": [],
                        "body": {
                            "id": 35225,
                            "nodeType": "Block",
                            "src": "2252:52:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 35223,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 35221,
                                            "name": "excludedSenders_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35219,
                                            "src": "2262:16:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 35222,
                                            "name": "_excludedSenders",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35075,
                                            "src": "2281:16:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "2262:35:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 35224,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2262:35:151"
                                }
                            ]
                        },
                        "functionSelector": "1ed7831c",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeSenders",
                        "nameLocation": "2179:14:151",
                        "parameters": {
                            "id": 35216,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2193:2:151"
                        },
                        "returnParameters": {
                            "id": 35220,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35219,
                                    "mutability": "mutable",
                                    "name": "excludedSenders_",
                                    "nameLocation": "2234:16:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35226,
                                    "src": "2217:33:151",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35217,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2217:7:151",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 35218,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2217:9:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2216:35:151"
                        },
                        "scope": 35284,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 35237,
                        "nodeType": "FunctionDefinition",
                        "src": "2310:140:151",
                        "nodes": [],
                        "body": {
                            "id": 35236,
                            "nodeType": "Block",
                            "src": "2394:56:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 35234,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 35232,
                                            "name": "targetedArtifacts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35230,
                                            "src": "2404:18:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "string memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 35233,
                                            "name": "_targetedArtifacts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35087,
                                            "src": "2425:18:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                "typeString": "string storage ref[] storage ref"
                                            }
                                        },
                                        "src": "2404:39:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "string memory[] memory"
                                        }
                                    },
                                    "id": 35235,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2404:39:151"
                                }
                            ]
                        },
                        "functionSelector": "85226c81",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifacts",
                        "nameLocation": "2319:15:151",
                        "parameters": {
                            "id": 35227,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2334:2:151"
                        },
                        "returnParameters": {
                            "id": 35231,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35230,
                                    "mutability": "mutable",
                                    "name": "targetedArtifacts_",
                                    "nameLocation": "2374:18:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35237,
                                    "src": "2358:34:151",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35228,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2358:6:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 35229,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2358:8:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                            "typeString": "string[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2357:36:151"
                        },
                        "scope": 35284,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 35249,
                        "nodeType": "FunctionDefinition",
                        "src": "2456:178:151",
                        "nodes": [],
                        "body": {
                            "id": 35248,
                            "nodeType": "Block",
                            "src": "2562:72:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 35246,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 35244,
                                            "name": "targetedArtifactSelectors_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35242,
                                            "src": "2572:26:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 35245,
                                            "name": "_targetedArtifactSelectors",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35091,
                                            "src": "2601:26:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage",
                                                "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                            }
                                        },
                                        "src": "2572:55:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                        }
                                    },
                                    "id": 35247,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2572:55:151"
                                }
                            ]
                        },
                        "functionSelector": "66d9a9a0",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifactSelectors",
                        "nameLocation": "2465:23:151",
                        "parameters": {
                            "id": 35238,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2488:2:151"
                        },
                        "returnParameters": {
                            "id": 35243,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35242,
                                    "mutability": "mutable",
                                    "name": "targetedArtifactSelectors_",
                                    "nameLocation": "2534:26:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35249,
                                    "src": "2512:48:151",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35240,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 35239,
                                                "name": "FuzzSelector",
                                                "nameLocations": [
                                                    "2512:12:151"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 35069,
                                                "src": "2512:12:151"
                                            },
                                            "referencedDeclaration": 35069,
                                            "src": "2512:12:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_FuzzSelector_$35069_storage_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector"
                                            }
                                        },
                                        "id": 35241,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2512:14:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2511:50:151"
                        },
                        "scope": 35284,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 35260,
                        "nodeType": "FunctionDefinition",
                        "src": "2640:141:151",
                        "nodes": [],
                        "body": {
                            "id": 35259,
                            "nodeType": "Block",
                            "src": "2725:56:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 35257,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 35255,
                                            "name": "targetedContracts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35253,
                                            "src": "2735:18:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 35256,
                                            "name": "_targetedContracts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35078,
                                            "src": "2756:18:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "2735:39:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 35258,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2735:39:151"
                                }
                            ]
                        },
                        "functionSelector": "3f7286f4",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetContracts",
                        "nameLocation": "2649:15:151",
                        "parameters": {
                            "id": 35250,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2664:2:151"
                        },
                        "returnParameters": {
                            "id": 35254,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35253,
                                    "mutability": "mutable",
                                    "name": "targetedContracts_",
                                    "nameLocation": "2705:18:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35260,
                                    "src": "2688:35:151",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35251,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2688:7:151",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 35252,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2688:9:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2687:37:151"
                        },
                        "scope": 35284,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 35272,
                        "nodeType": "FunctionDefinition",
                        "src": "2787:146:151",
                        "nodes": [],
                        "body": {
                            "id": 35271,
                            "nodeType": "Block",
                            "src": "2877:56:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 35269,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 35267,
                                            "name": "targetedSelectors_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35265,
                                            "src": "2887:18:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 35268,
                                            "name": "_targetedSelectors",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35095,
                                            "src": "2908:18:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage",
                                                "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                            }
                                        },
                                        "src": "2887:39:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                        }
                                    },
                                    "id": 35270,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2887:39:151"
                                }
                            ]
                        },
                        "functionSelector": "916a17c6",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSelectors",
                        "nameLocation": "2796:15:151",
                        "parameters": {
                            "id": 35261,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2811:2:151"
                        },
                        "returnParameters": {
                            "id": 35266,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35265,
                                    "mutability": "mutable",
                                    "name": "targetedSelectors_",
                                    "nameLocation": "2857:18:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35272,
                                    "src": "2835:40:151",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35263,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 35262,
                                                "name": "FuzzSelector",
                                                "nameLocations": [
                                                    "2835:12:151"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 35069,
                                                "src": "2835:12:151"
                                            },
                                            "referencedDeclaration": 35069,
                                            "src": "2835:12:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_FuzzSelector_$35069_storage_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector"
                                            }
                                        },
                                        "id": 35264,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2835:14:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$35069_storage_$dyn_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2834:42:151"
                        },
                        "scope": 35284,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 35283,
                        "nodeType": "FunctionDefinition",
                        "src": "2939:133:151",
                        "nodes": [],
                        "body": {
                            "id": 35282,
                            "nodeType": "Block",
                            "src": "3020:52:151",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 35280,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 35278,
                                            "name": "targetedSenders_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35276,
                                            "src": "3030:16:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 35279,
                                            "name": "_targetedSenders",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 35081,
                                            "src": "3049:16:151",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "3030:35:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 35281,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3030:35:151"
                                }
                            ]
                        },
                        "functionSelector": "3e5e3c23",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSenders",
                        "nameLocation": "2948:13:151",
                        "parameters": {
                            "id": 35273,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2961:2:151"
                        },
                        "returnParameters": {
                            "id": 35277,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 35276,
                                    "mutability": "mutable",
                                    "name": "targetedSenders_",
                                    "nameLocation": "3002:16:151",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 35283,
                                    "src": "2985:33:151",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 35274,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2985:7:151",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 35275,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2985:9:151",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2984:35:151"
                        },
                        "scope": 35284,
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
                    35284
                ],
                "name": "StdInvariant",
                "nameLocation": "118:12:151",
                "scope": 35285,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 151
};
