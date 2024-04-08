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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdInvariant.sol\":\"StdInvariant\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]}},\"version\":1}",
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
        "id": 34929,
        "exportedSymbols": {
            "StdInvariant": [
                34928
            ]
        },
        "nodeType": "SourceUnit",
        "src": "32:3043:149",
        "nodes": [
            {
                "id": 34706,
                "nodeType": "PragmaDirective",
                "src": "32:31:149",
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
                "id": 34707,
                "nodeType": "PragmaDirective",
                "src": "65:33:149",
                "nodes": [],
                "literals": [
                    "experimental",
                    "ABIEncoderV2"
                ]
            },
            {
                "id": 34928,
                "nodeType": "ContractDefinition",
                "src": "100:2974:149",
                "nodes": [
                    {
                        "id": 34713,
                        "nodeType": "StructDefinition",
                        "src": "137:77:149",
                        "nodes": [],
                        "canonicalName": "StdInvariant.FuzzSelector",
                        "members": [
                            {
                                "constant": false,
                                "id": 34709,
                                "mutability": "mutable",
                                "name": "addr",
                                "nameLocation": "175:4:149",
                                "nodeType": "VariableDeclaration",
                                "scope": 34713,
                                "src": "167:12:149",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                },
                                "typeName": {
                                    "id": 34708,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "167:7:149",
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
                                "id": 34712,
                                "mutability": "mutable",
                                "name": "selectors",
                                "nameLocation": "198:9:149",
                                "nodeType": "VariableDeclaration",
                                "scope": 34713,
                                "src": "189:18:149",
                                "stateVariable": false,
                                "storageLocation": "default",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                                    "typeString": "bytes4[]"
                                },
                                "typeName": {
                                    "baseType": {
                                        "id": 34710,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "189:6:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "id": 34711,
                                    "nodeType": "ArrayTypeName",
                                    "src": "189:8:149",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                                        "typeString": "bytes4[]"
                                    }
                                },
                                "visibility": "internal"
                            }
                        ],
                        "name": "FuzzSelector",
                        "nameLocation": "144:12:149",
                        "scope": 34928,
                        "visibility": "public"
                    },
                    {
                        "id": 34716,
                        "nodeType": "VariableDeclaration",
                        "src": "220:36:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_excludedContracts",
                        "nameLocation": "238:18:149",
                        "scope": 34928,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34714,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "220:7:149",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 34715,
                            "nodeType": "ArrayTypeName",
                            "src": "220:9:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34719,
                        "nodeType": "VariableDeclaration",
                        "src": "262:34:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_excludedSenders",
                        "nameLocation": "280:16:149",
                        "scope": 34928,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34717,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "262:7:149",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 34718,
                            "nodeType": "ArrayTypeName",
                            "src": "262:9:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34722,
                        "nodeType": "VariableDeclaration",
                        "src": "302:36:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedContracts",
                        "nameLocation": "320:18:149",
                        "scope": 34928,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34720,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "302:7:149",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 34721,
                            "nodeType": "ArrayTypeName",
                            "src": "302:9:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34725,
                        "nodeType": "VariableDeclaration",
                        "src": "344:34:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedSenders",
                        "nameLocation": "362:16:149",
                        "scope": 34928,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage",
                            "typeString": "address[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34723,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "344:7:149",
                                "stateMutability": "nonpayable",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "id": 34724,
                            "nodeType": "ArrayTypeName",
                            "src": "344:9:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                "typeString": "address[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34728,
                        "nodeType": "VariableDeclaration",
                        "src": "385:35:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_excludedArtifacts",
                        "nameLocation": "402:18:149",
                        "scope": 34928,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                            "typeString": "string[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34726,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "385:6:149",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "id": 34727,
                            "nodeType": "ArrayTypeName",
                            "src": "385:8:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                "typeString": "string[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34731,
                        "nodeType": "VariableDeclaration",
                        "src": "426:35:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedArtifacts",
                        "nameLocation": "443:18:149",
                        "scope": 34928,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                            "typeString": "string[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34729,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "426:6:149",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "id": 34730,
                            "nodeType": "ArrayTypeName",
                            "src": "426:8:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                "typeString": "string[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34735,
                        "nodeType": "VariableDeclaration",
                        "src": "468:49:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedArtifactSelectors",
                        "nameLocation": "491:26:149",
                        "scope": 34928,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage",
                            "typeString": "struct StdInvariant.FuzzSelector[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34733,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 34732,
                                    "name": "FuzzSelector",
                                    "nameLocations": [
                                        "468:12:149"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 34713,
                                    "src": "468:12:149"
                                },
                                "referencedDeclaration": 34713,
                                "src": "468:12:149",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_FuzzSelector_$34713_storage_ptr",
                                    "typeString": "struct StdInvariant.FuzzSelector"
                                }
                            },
                            "id": 34734,
                            "nodeType": "ArrayTypeName",
                            "src": "468:14:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage_ptr",
                                "typeString": "struct StdInvariant.FuzzSelector[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34739,
                        "nodeType": "VariableDeclaration",
                        "src": "523:41:149",
                        "nodes": [],
                        "constant": false,
                        "mutability": "mutable",
                        "name": "_targetedSelectors",
                        "nameLocation": "546:18:149",
                        "scope": 34928,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage",
                            "typeString": "struct StdInvariant.FuzzSelector[]"
                        },
                        "typeName": {
                            "baseType": {
                                "id": 34737,
                                "nodeType": "UserDefinedTypeName",
                                "pathNode": {
                                    "id": 34736,
                                    "name": "FuzzSelector",
                                    "nameLocations": [
                                        "523:12:149"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 34713,
                                    "src": "523:12:149"
                                },
                                "referencedDeclaration": 34713,
                                "src": "523:12:149",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_FuzzSelector_$34713_storage_ptr",
                                    "typeString": "struct StdInvariant.FuzzSelector"
                                }
                            },
                            "id": 34738,
                            "nodeType": "ArrayTypeName",
                            "src": "523:14:149",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage_ptr",
                                "typeString": "struct StdInvariant.FuzzSelector[]"
                            }
                        },
                        "visibility": "private"
                    },
                    {
                        "id": 34751,
                        "nodeType": "FunctionDefinition",
                        "src": "649:126:149",
                        "nodes": [],
                        "body": {
                            "id": 34750,
                            "nodeType": "Block",
                            "src": "713:62:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34747,
                                                "name": "newExcludedContract_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34741,
                                                "src": "747:20:149",
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
                                                "id": 34744,
                                                "name": "_excludedContracts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34716,
                                                "src": "723:18:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 34746,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "742:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "723:23:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 34748,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "723:45:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34749,
                                    "nodeType": "ExpressionStatement",
                                    "src": "723:45:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeContract",
                        "nameLocation": "658:15:149",
                        "parameters": {
                            "id": 34742,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34741,
                                    "mutability": "mutable",
                                    "name": "newExcludedContract_",
                                    "nameLocation": "682:20:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34751,
                                    "src": "674:28:149",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 34740,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "674:7:149",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "673:30:149"
                        },
                        "returnParameters": {
                            "id": 34743,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "713:0:149"
                        },
                        "scope": 34928,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34763,
                        "nodeType": "FunctionDefinition",
                        "src": "781:118:149",
                        "nodes": [],
                        "body": {
                            "id": 34762,
                            "nodeType": "Block",
                            "src": "841:58:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34759,
                                                "name": "newExcludedSender_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34753,
                                                "src": "873:18:149",
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
                                                "id": 34756,
                                                "name": "_excludedSenders",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34719,
                                                "src": "851:16:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 34758,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "868:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "851:21:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 34760,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "851:41:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34761,
                                    "nodeType": "ExpressionStatement",
                                    "src": "851:41:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeSender",
                        "nameLocation": "790:13:149",
                        "parameters": {
                            "id": 34754,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34753,
                                    "mutability": "mutable",
                                    "name": "newExcludedSender_",
                                    "nameLocation": "812:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34763,
                                    "src": "804:26:149",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 34752,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "804:7:149",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "803:28:149"
                        },
                        "returnParameters": {
                            "id": 34755,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "841:0:149"
                        },
                        "scope": 34928,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34775,
                        "nodeType": "FunctionDefinition",
                        "src": "905:132:149",
                        "nodes": [],
                        "body": {
                            "id": 34774,
                            "nodeType": "Block",
                            "src": "975:62:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34771,
                                                "name": "newExcludedArtifact_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34765,
                                                "src": "1009:20:149",
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
                                                "id": 34768,
                                                "name": "_excludedArtifacts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34728,
                                                "src": "985:18:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                    "typeString": "string storage ref[] storage ref"
                                                }
                                            },
                                            "id": 34770,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1004:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "985:23:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                                            }
                                        },
                                        "id": 34772,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "985:45:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34773,
                                    "nodeType": "ExpressionStatement",
                                    "src": "985:45:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeArtifact",
                        "nameLocation": "914:15:149",
                        "parameters": {
                            "id": 34766,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34765,
                                    "mutability": "mutable",
                                    "name": "newExcludedArtifact_",
                                    "nameLocation": "944:20:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34775,
                                    "src": "930:34:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34764,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "930:6:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "929:36:149"
                        },
                        "returnParameters": {
                            "id": 34767,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "975:0:149"
                        },
                        "scope": 34928,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34787,
                        "nodeType": "FunctionDefinition",
                        "src": "1043:131:149",
                        "nodes": [],
                        "body": {
                            "id": 34786,
                            "nodeType": "Block",
                            "src": "1112:62:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34783,
                                                "name": "newTargetedArtifact_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34777,
                                                "src": "1146:20:149",
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
                                                "id": 34780,
                                                "name": "_targetedArtifacts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34731,
                                                "src": "1122:18:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                    "typeString": "string storage ref[] storage ref"
                                                }
                                            },
                                            "id": 34782,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1141:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1122:23:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                                            }
                                        },
                                        "id": 34784,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1122:45:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34785,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1122:45:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifact",
                        "nameLocation": "1052:14:149",
                        "parameters": {
                            "id": 34778,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34777,
                                    "mutability": "mutable",
                                    "name": "newTargetedArtifact_",
                                    "nameLocation": "1081:20:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34787,
                                    "src": "1067:34:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string"
                                    },
                                    "typeName": {
                                        "id": 34776,
                                        "name": "string",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1067:6:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_storage_ptr",
                                            "typeString": "string"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1066:36:149"
                        },
                        "returnParameters": {
                            "id": 34779,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1112:0:149"
                        },
                        "scope": 34928,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34800,
                        "nodeType": "FunctionDefinition",
                        "src": "1180:169:149",
                        "nodes": [],
                        "body": {
                            "id": 34799,
                            "nodeType": "Block",
                            "src": "1271:78:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34796,
                                                "name": "newTargetedArtifactSelector_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34790,
                                                "src": "1313:28:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$34713_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$34713_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 34793,
                                                "name": "_targetedArtifactSelectors",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34735,
                                                "src": "1281:26:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage",
                                                    "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                                }
                                            },
                                            "id": 34795,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1308:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1281:31:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$34713_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                                            }
                                        },
                                        "id": 34797,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1281:61:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34798,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1281:61:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifactSelector",
                        "nameLocation": "1189:22:149",
                        "parameters": {
                            "id": 34791,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34790,
                                    "mutability": "mutable",
                                    "name": "newTargetedArtifactSelector_",
                                    "nameLocation": "1232:28:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34800,
                                    "src": "1212:48:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_FuzzSelector_$34713_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector"
                                    },
                                    "typeName": {
                                        "id": 34789,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 34788,
                                            "name": "FuzzSelector",
                                            "nameLocations": [
                                                "1212:12:149"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 34713,
                                            "src": "1212:12:149"
                                        },
                                        "referencedDeclaration": 34713,
                                        "src": "1212:12:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_FuzzSelector_$34713_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1211:50:149"
                        },
                        "returnParameters": {
                            "id": 34792,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1271:0:149"
                        },
                        "scope": 34928,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34812,
                        "nodeType": "FunctionDefinition",
                        "src": "1355:125:149",
                        "nodes": [],
                        "body": {
                            "id": 34811,
                            "nodeType": "Block",
                            "src": "1418:62:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34808,
                                                "name": "newTargetedContract_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34802,
                                                "src": "1452:20:149",
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
                                                "id": 34805,
                                                "name": "_targetedContracts",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34722,
                                                "src": "1428:18:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 34807,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1447:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1428:23:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 34809,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1428:45:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34810,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1428:45:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetContract",
                        "nameLocation": "1364:14:149",
                        "parameters": {
                            "id": 34803,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34802,
                                    "mutability": "mutable",
                                    "name": "newTargetedContract_",
                                    "nameLocation": "1387:20:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34812,
                                    "src": "1379:28:149",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 34801,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1379:7:149",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1378:30:149"
                        },
                        "returnParameters": {
                            "id": 34804,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1418:0:149"
                        },
                        "scope": 34928,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34825,
                        "nodeType": "FunctionDefinition",
                        "src": "1486:137:149",
                        "nodes": [],
                        "body": {
                            "id": 34824,
                            "nodeType": "Block",
                            "src": "1561:62:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34821,
                                                "name": "newTargetedSelector_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34815,
                                                "src": "1595:20:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$34713_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_struct$_FuzzSelector_$34713_memory_ptr",
                                                    "typeString": "struct StdInvariant.FuzzSelector memory"
                                                }
                                            ],
                                            "expression": {
                                                "id": 34818,
                                                "name": "_targetedSelectors",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34739,
                                                "src": "1571:18:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage",
                                                    "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                                }
                                            },
                                            "id": 34820,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1590:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1571:23:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$34713_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage_ptr_$",
                                                "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                                            }
                                        },
                                        "id": 34822,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1571:45:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34823,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1571:45:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSelector",
                        "nameLocation": "1495:14:149",
                        "parameters": {
                            "id": 34816,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34815,
                                    "mutability": "mutable",
                                    "name": "newTargetedSelector_",
                                    "nameLocation": "1530:20:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34825,
                                    "src": "1510:40:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_FuzzSelector_$34713_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector"
                                    },
                                    "typeName": {
                                        "id": 34814,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 34813,
                                            "name": "FuzzSelector",
                                            "nameLocations": [
                                                "1510:12:149"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 34713,
                                            "src": "1510:12:149"
                                        },
                                        "referencedDeclaration": 34713,
                                        "src": "1510:12:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_FuzzSelector_$34713_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1509:42:149"
                        },
                        "returnParameters": {
                            "id": 34817,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1561:0:149"
                        },
                        "scope": 34928,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34837,
                        "nodeType": "FunctionDefinition",
                        "src": "1629:117:149",
                        "nodes": [],
                        "body": {
                            "id": 34836,
                            "nodeType": "Block",
                            "src": "1688:58:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "id": 34833,
                                                "name": "newTargetedSender_",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34827,
                                                "src": "1720:18:149",
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
                                                "id": 34830,
                                                "name": "_targetedSenders",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 34725,
                                                "src": "1698:16:149",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                    "typeString": "address[] storage ref"
                                                }
                                            },
                                            "id": 34832,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "memberLocation": "1715:4:149",
                                            "memberName": "push",
                                            "nodeType": "MemberAccess",
                                            "src": "1698:21:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                                                "typeString": "function (address[] storage pointer,address)"
                                            }
                                        },
                                        "id": 34834,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1698:41:149",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 34835,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1698:41:149"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSender",
                        "nameLocation": "1638:12:149",
                        "parameters": {
                            "id": 34828,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34827,
                                    "mutability": "mutable",
                                    "name": "newTargetedSender_",
                                    "nameLocation": "1659:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34837,
                                    "src": "1651:26:149",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 34826,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1651:7:149",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1650:28:149"
                        },
                        "returnParameters": {
                            "id": 34829,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1688:0:149"
                        },
                        "scope": 34928,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 34848,
                        "nodeType": "FunctionDefinition",
                        "src": "1875:141:149",
                        "nodes": [],
                        "body": {
                            "id": 34847,
                            "nodeType": "Block",
                            "src": "1960:56:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34845,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34843,
                                            "name": "excludedArtifacts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34841,
                                            "src": "1970:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "string memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34844,
                                            "name": "_excludedArtifacts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34728,
                                            "src": "1991:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                "typeString": "string storage ref[] storage ref"
                                            }
                                        },
                                        "src": "1970:39:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "string memory[] memory"
                                        }
                                    },
                                    "id": 34846,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1970:39:149"
                                }
                            ]
                        },
                        "functionSelector": "b5508aa9",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeArtifacts",
                        "nameLocation": "1884:16:149",
                        "parameters": {
                            "id": 34838,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1900:2:149"
                        },
                        "returnParameters": {
                            "id": 34842,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34841,
                                    "mutability": "mutable",
                                    "name": "excludedArtifacts_",
                                    "nameLocation": "1940:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34848,
                                    "src": "1924:34:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34839,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1924:6:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 34840,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1924:8:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                            "typeString": "string[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1923:36:149"
                        },
                        "scope": 34928,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34859,
                        "nodeType": "FunctionDefinition",
                        "src": "2022:142:149",
                        "nodes": [],
                        "body": {
                            "id": 34858,
                            "nodeType": "Block",
                            "src": "2108:56:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34856,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34854,
                                            "name": "excludedContracts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34852,
                                            "src": "2118:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34855,
                                            "name": "_excludedContracts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34716,
                                            "src": "2139:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "2118:39:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 34857,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2118:39:149"
                                }
                            ]
                        },
                        "functionSelector": "e20c9f71",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeContracts",
                        "nameLocation": "2031:16:149",
                        "parameters": {
                            "id": 34849,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2047:2:149"
                        },
                        "returnParameters": {
                            "id": 34853,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34852,
                                    "mutability": "mutable",
                                    "name": "excludedContracts_",
                                    "nameLocation": "2088:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34859,
                                    "src": "2071:35:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34850,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2071:7:149",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 34851,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2071:9:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2070:37:149"
                        },
                        "scope": 34928,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34870,
                        "nodeType": "FunctionDefinition",
                        "src": "2170:134:149",
                        "nodes": [],
                        "body": {
                            "id": 34869,
                            "nodeType": "Block",
                            "src": "2252:52:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34867,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34865,
                                            "name": "excludedSenders_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34863,
                                            "src": "2262:16:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34866,
                                            "name": "_excludedSenders",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34719,
                                            "src": "2281:16:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "2262:35:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 34868,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2262:35:149"
                                }
                            ]
                        },
                        "functionSelector": "1ed7831c",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "excludeSenders",
                        "nameLocation": "2179:14:149",
                        "parameters": {
                            "id": 34860,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2193:2:149"
                        },
                        "returnParameters": {
                            "id": 34864,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34863,
                                    "mutability": "mutable",
                                    "name": "excludedSenders_",
                                    "nameLocation": "2234:16:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34870,
                                    "src": "2217:33:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34861,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2217:7:149",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 34862,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2217:9:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2216:35:149"
                        },
                        "scope": 34928,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34881,
                        "nodeType": "FunctionDefinition",
                        "src": "2310:140:149",
                        "nodes": [],
                        "body": {
                            "id": 34880,
                            "nodeType": "Block",
                            "src": "2394:56:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34878,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34876,
                                            "name": "targetedArtifacts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34874,
                                            "src": "2404:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "string memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34877,
                                            "name": "_targetedArtifacts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34731,
                                            "src": "2425:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                                                "typeString": "string storage ref[] storage ref"
                                            }
                                        },
                                        "src": "2404:39:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "string memory[] memory"
                                        }
                                    },
                                    "id": 34879,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2404:39:149"
                                }
                            ]
                        },
                        "functionSelector": "85226c81",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifacts",
                        "nameLocation": "2319:15:149",
                        "parameters": {
                            "id": 34871,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2334:2:149"
                        },
                        "returnParameters": {
                            "id": 34875,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34874,
                                    "mutability": "mutable",
                                    "name": "targetedArtifacts_",
                                    "nameLocation": "2374:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34881,
                                    "src": "2358:34:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "string[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34872,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2358:6:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "id": 34873,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2358:8:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                                            "typeString": "string[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2357:36:149"
                        },
                        "scope": 34928,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34893,
                        "nodeType": "FunctionDefinition",
                        "src": "2456:178:149",
                        "nodes": [],
                        "body": {
                            "id": 34892,
                            "nodeType": "Block",
                            "src": "2562:72:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34890,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34888,
                                            "name": "targetedArtifactSelectors_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34886,
                                            "src": "2572:26:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34889,
                                            "name": "_targetedArtifactSelectors",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34735,
                                            "src": "2601:26:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage",
                                                "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                            }
                                        },
                                        "src": "2572:55:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                        }
                                    },
                                    "id": 34891,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2572:55:149"
                                }
                            ]
                        },
                        "functionSelector": "66d9a9a0",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetArtifactSelectors",
                        "nameLocation": "2465:23:149",
                        "parameters": {
                            "id": 34882,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2488:2:149"
                        },
                        "returnParameters": {
                            "id": 34887,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34886,
                                    "mutability": "mutable",
                                    "name": "targetedArtifactSelectors_",
                                    "nameLocation": "2534:26:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34893,
                                    "src": "2512:48:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34884,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 34883,
                                                "name": "FuzzSelector",
                                                "nameLocations": [
                                                    "2512:12:149"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 34713,
                                                "src": "2512:12:149"
                                            },
                                            "referencedDeclaration": 34713,
                                            "src": "2512:12:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_FuzzSelector_$34713_storage_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector"
                                            }
                                        },
                                        "id": 34885,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2512:14:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2511:50:149"
                        },
                        "scope": 34928,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34904,
                        "nodeType": "FunctionDefinition",
                        "src": "2640:141:149",
                        "nodes": [],
                        "body": {
                            "id": 34903,
                            "nodeType": "Block",
                            "src": "2725:56:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34901,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34899,
                                            "name": "targetedContracts_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34897,
                                            "src": "2735:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34900,
                                            "name": "_targetedContracts",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34722,
                                            "src": "2756:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "2735:39:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 34902,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2735:39:149"
                                }
                            ]
                        },
                        "functionSelector": "3f7286f4",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetContracts",
                        "nameLocation": "2649:15:149",
                        "parameters": {
                            "id": 34894,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2664:2:149"
                        },
                        "returnParameters": {
                            "id": 34898,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34897,
                                    "mutability": "mutable",
                                    "name": "targetedContracts_",
                                    "nameLocation": "2705:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34904,
                                    "src": "2688:35:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34895,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2688:7:149",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 34896,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2688:9:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2687:37:149"
                        },
                        "scope": 34928,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34916,
                        "nodeType": "FunctionDefinition",
                        "src": "2787:146:149",
                        "nodes": [],
                        "body": {
                            "id": 34915,
                            "nodeType": "Block",
                            "src": "2877:56:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34913,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34911,
                                            "name": "targetedSelectors_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34909,
                                            "src": "2887:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_memory_ptr_$dyn_memory_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34912,
                                            "name": "_targetedSelectors",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34739,
                                            "src": "2908:18:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage",
                                                "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                                            }
                                        },
                                        "src": "2887:39:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_memory_ptr_$dyn_memory_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                                        }
                                    },
                                    "id": 34914,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2887:39:149"
                                }
                            ]
                        },
                        "functionSelector": "916a17c6",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSelectors",
                        "nameLocation": "2796:15:149",
                        "parameters": {
                            "id": 34905,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2811:2:149"
                        },
                        "returnParameters": {
                            "id": 34910,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34909,
                                    "mutability": "mutable",
                                    "name": "targetedSelectors_",
                                    "nameLocation": "2857:18:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34916,
                                    "src": "2835:40:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "struct StdInvariant.FuzzSelector[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34907,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 34906,
                                                "name": "FuzzSelector",
                                                "nameLocations": [
                                                    "2835:12:149"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 34713,
                                                "src": "2835:12:149"
                                            },
                                            "referencedDeclaration": 34713,
                                            "src": "2835:12:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_FuzzSelector_$34713_storage_ptr",
                                                "typeString": "struct StdInvariant.FuzzSelector"
                                            }
                                        },
                                        "id": 34908,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2835:14:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$34713_storage_$dyn_storage_ptr",
                                            "typeString": "struct StdInvariant.FuzzSelector[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2834:42:149"
                        },
                        "scope": 34928,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 34927,
                        "nodeType": "FunctionDefinition",
                        "src": "2939:133:149",
                        "nodes": [],
                        "body": {
                            "id": 34926,
                            "nodeType": "Block",
                            "src": "3020:52:149",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 34924,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 34922,
                                            "name": "targetedSenders_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34920,
                                            "src": "3030:16:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                                "typeString": "address[] memory"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 34923,
                                            "name": "_targetedSenders",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 34725,
                                            "src": "3049:16:149",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                "typeString": "address[] storage ref"
                                            }
                                        },
                                        "src": "3030:35:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                            "typeString": "address[] memory"
                                        }
                                    },
                                    "id": 34925,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3030:35:149"
                                }
                            ]
                        },
                        "functionSelector": "3e5e3c23",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "targetSenders",
                        "nameLocation": "2948:13:149",
                        "parameters": {
                            "id": 34917,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2961:2:149"
                        },
                        "returnParameters": {
                            "id": 34921,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 34920,
                                    "mutability": "mutable",
                                    "name": "targetedSenders_",
                                    "nameLocation": "3002:16:149",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 34927,
                                    "src": "2985:33:149",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                                        "typeString": "address[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 34918,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2985:7:149",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "id": 34919,
                                        "nodeType": "ArrayTypeName",
                                        "src": "2985:9:149",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                            "typeString": "address[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2984:35:149"
                        },
                        "scope": 34928,
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
                    34928
                ],
                "name": "StdInvariant",
                "nameLocation": "118:12:149",
                "scope": 34929,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "MIT"
    },
    "id": 149
};
