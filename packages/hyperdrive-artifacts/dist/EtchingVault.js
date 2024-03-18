export const EtchingVault = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_baseToken_",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "_vaultSharePrice_",
                    "type": "uint256"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "asset",
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
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "convertToAssets",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ],
    "bytecode": {
        "object": "0x60c060405234801561001057600080fd5b5060405161019e38038061019e83398101604081905261002f91610045565b6001600160a01b0390911660805260a05261007f565b6000806040838503121561005857600080fd5b82516001600160a01b038116811461006f57600080fd5b6020939093015192949293505050565b60805160a05160fe6100a060003960006045015260006087015260fe6000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806307a2d13a14603757806338d52e0f14607a575b600080fd5b6067604236600460b0565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016071565b60006020828403121560c157600080fd5b503591905056fea2646970667358221220bf31d7d4014b34f65f9a3539b27871551c603a48e718d08b1402b2313f506a0464736f6c63430008140033",
        "sourceMap": "511:471:132:-:0;;;632:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;702:24:132;;;;;736:36;;511:471;;14:351:235;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;196:16;;-1:-1:-1;;;;;241:31:235;;231:42;;221:70;;287:1;284;277:12;221:70;355:2;340:18;;;;334:25;310:5;;334:25;;-1:-1:-1;;;14:351:235:o;:::-;511:471:132;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x6080604052348015600f57600080fd5b506004361060325760003560e01c806307a2d13a14603757806338d52e0f14607a575b600080fd5b6067604236600460b0565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016071565b60006020828403121560c157600080fd5b503591905056fea2646970667358221220bf31d7d4014b34f65f9a3539b27871551c603a48e718d08b1402b2313f506a0464736f6c63430008140033",
        "sourceMap": "511:471:132:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;874:106;;;;;;:::i;:::-;-1:-1:-1;957:16:132;;874:106;;;;345:25:235;;;333:2;318:18;874:106:132;;;;;;;;785:83;;;-1:-1:-1;;;;;851:10:132;545:32:235;527:51;;515:2;500:18;785:83:132;381:203:235;14:180;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:235;;14:180;-1:-1:-1;14:180:235:o",
        "linkReferences": {},
        "immutableReferences": {
            "23936": [
                {
                    "start": 135,
                    "length": 32
                }
            ],
            "23938": [
                {
                    "start": 69,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
        "asset()": "38d52e0f",
        "convertToAssets(uint256)": "07a2d13a"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_baseToken_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice_\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"This is a helper contract that is etched onto a `MockERC4626` vault      as one of the intermediate steps in the \\\"etching\\\" process in the Rust      debugging tools.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"EtchingVault\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/EtchingVault.sol\":\"EtchingVault\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/test/EtchingVault.sol\":{\"keccak256\":\"0x756b076eba139fa9dbc5e45ec6ce3d18a50347798912c073821221a5edd0b8dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8cbe4766616950283607c67b26377166328a998d3f8d4022aed2305cde14783f\",\"dweb:/ipfs/QmWPGJG4c1YDcthA5oQbsymbYZp3ZXbTzd8VppBqpXE14k\"]}},\"version\":1}",
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
                            "internalType": "address",
                            "name": "_baseToken_",
                            "type": "address"
                        },
                        {
                            "internalType": "uint256",
                            "name": "_vaultSharePrice_",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "asset",
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
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "convertToAssets",
                    "outputs": [
                        {
                            "internalType": "uint256",
                            "name": "",
                            "type": "uint256"
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
                "contracts/test/EtchingVault.sol": "EtchingVault"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/test/EtchingVault.sol": {
                "keccak256": "0x756b076eba139fa9dbc5e45ec6ce3d18a50347798912c073821221a5edd0b8dd",
                "urls": [
                    "bzz-raw://8cbe4766616950283607c67b26377166328a998d3f8d4022aed2305cde14783f",
                    "dweb:/ipfs/QmWPGJG4c1YDcthA5oQbsymbYZp3ZXbTzd8VppBqpXE14k"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/test/EtchingVault.sol",
        "id": 23974,
        "exportedSymbols": {
            "EtchingVault": [
                23973
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:944:132",
        "nodes": [
            {
                "id": 23933,
                "nodeType": "PragmaDirective",
                "src": "39:23:132",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 23973,
                "nodeType": "ContractDefinition",
                "src": "511:471:132",
                "nodes": [
                    {
                        "id": 23936,
                        "nodeType": "VariableDeclaration",
                        "src": "539:37:132",
                        "nodes": [],
                        "constant": false,
                        "mutability": "immutable",
                        "name": "_baseToken",
                        "nameLocation": "566:10:132",
                        "scope": 23973,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 23935,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "539:7:132",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 23938,
                        "nodeType": "VariableDeclaration",
                        "src": "582:43:132",
                        "nodes": [],
                        "constant": false,
                        "mutability": "immutable",
                        "name": "_vaultSharePrice",
                        "nameLocation": "609:16:132",
                        "scope": 23973,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 23937,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "582:7:132",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 23954,
                        "nodeType": "FunctionDefinition",
                        "src": "632:147:132",
                        "nodes": [],
                        "body": {
                            "id": 23953,
                            "nodeType": "Block",
                            "src": "692:87:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 23947,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 23945,
                                            "name": "_baseToken",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23936,
                                            "src": "702:10:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 23946,
                                            "name": "_baseToken_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23940,
                                            "src": "715:11:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "702:24:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 23948,
                                    "nodeType": "ExpressionStatement",
                                    "src": "702:24:132"
                                },
                                {
                                    "expression": {
                                        "id": 23951,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 23949,
                                            "name": "_vaultSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23938,
                                            "src": "736:16:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 23950,
                                            "name": "_vaultSharePrice_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23942,
                                            "src": "755:17:132",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "736:36:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 23952,
                                    "nodeType": "ExpressionStatement",
                                    "src": "736:36:132"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 23943,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23940,
                                    "mutability": "mutable",
                                    "name": "_baseToken_",
                                    "nameLocation": "652:11:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23954,
                                    "src": "644:19:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 23939,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "644:7:132",
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
                                    "id": 23942,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice_",
                                    "nameLocation": "673:17:132",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23954,
                                    "src": "665:25:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23941,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "665:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "643:48:132"
                        },
                        "returnParameters": {
                            "id": 23944,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "692:0:132"
                        },
                        "scope": 23973,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 23962,
                        "nodeType": "FunctionDefinition",
                        "src": "785:83:132",
                        "nodes": [],
                        "body": {
                            "id": 23961,
                            "nodeType": "Block",
                            "src": "834:34:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 23959,
                                        "name": "_baseToken",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23936,
                                        "src": "851:10:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 23958,
                                    "id": 23960,
                                    "nodeType": "Return",
                                    "src": "844:17:132"
                                }
                            ]
                        },
                        "functionSelector": "38d52e0f",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "asset",
                        "nameLocation": "794:5:132",
                        "parameters": {
                            "id": 23955,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "799:2:132"
                        },
                        "returnParameters": {
                            "id": 23958,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23957,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23962,
                                    "src": "825:7:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 23956,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "825:7:132",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "824:9:132"
                        },
                        "scope": 23973,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 23972,
                        "nodeType": "FunctionDefinition",
                        "src": "874:106:132",
                        "nodes": [],
                        "body": {
                            "id": 23971,
                            "nodeType": "Block",
                            "src": "940:40:132",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 23969,
                                        "name": "_vaultSharePrice",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23938,
                                        "src": "957:16:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 23968,
                                    "id": 23970,
                                    "nodeType": "Return",
                                    "src": "950:23:132"
                                }
                            ]
                        },
                        "functionSelector": "07a2d13a",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "convertToAssets",
                        "nameLocation": "883:15:132",
                        "parameters": {
                            "id": 23965,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23964,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23972,
                                    "src": "899:7:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23963,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "899:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "898:9:132"
                        },
                        "returnParameters": {
                            "id": 23968,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23967,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23972,
                                    "src": "931:7:132",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23966,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "931:7:132",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "930:9:132"
                        },
                        "scope": 23973,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "EtchingVault",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 23934,
                    "nodeType": "StructuredDocumentation",
                    "src": "64:447:132",
                    "text": "@author DELV\n @title EtchingVault\n @dev This is a helper contract that is etched onto a `MockERC4626` vault\n      as one of the intermediate steps in the \"etching\" process in the Rust\n      debugging tools.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    23973
                ],
                "name": "EtchingVault",
                "nameLocation": "520:12:132",
                "scope": 23974,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 132
};
