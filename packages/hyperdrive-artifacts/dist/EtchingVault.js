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
        "object": "0x60c060405234801561001057600080fd5b5060405161019e38038061019e83398101604081905261002f91610045565b6001600160a01b0390911660805260a05261007f565b6000806040838503121561005857600080fd5b82516001600160a01b038116811461006f57600080fd5b6020939093015192949293505050565b60805160a05160fe6100a060003960006045015260006087015260fe6000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806307a2d13a14603757806338d52e0f14607a575b600080fd5b6067604236600460b0565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016071565b60006020828403121560c157600080fd5b503591905056fea2646970667358221220173d09ebc36688c2f55a797b3ea03f4b424c98b4c4db0a1ae5faf3e21cbb807864736f6c63430008140033",
        "sourceMap": "511:471:130:-:0;;;632:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;702:24:130;;;;;736:36;;511:471;;14:351:234;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;196:16;;-1:-1:-1;;;;;241:31:234;;231:42;;221:70;;287:1;284;277:12;221:70;355:2;340:18;;;;334:25;310:5;;334:25;;-1:-1:-1;;;14:351:234:o;:::-;511:471:130;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x6080604052348015600f57600080fd5b506004361060325760003560e01c806307a2d13a14603757806338d52e0f14607a575b600080fd5b6067604236600460b0565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016071565b60006020828403121560c157600080fd5b503591905056fea2646970667358221220173d09ebc36688c2f55a797b3ea03f4b424c98b4c4db0a1ae5faf3e21cbb807864736f6c63430008140033",
        "sourceMap": "511:471:130:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;874:106;;;;;;:::i;:::-;-1:-1:-1;957:16:130;;874:106;;;;345:25:234;;;333:2;318:18;874:106:130;;;;;;;;785:83;;;-1:-1:-1;;;;;851:10:130;545:32:234;527:51;;515:2;500:18;785:83:130;381:203:234;14:180;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:234;;14:180;-1:-1:-1;14:180:234:o",
        "linkReferences": {},
        "immutableReferences": {
            "23607": [
                {
                    "start": 135,
                    "length": 32
                }
            ],
            "23609": [
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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_baseToken_\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_vaultSharePrice_\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"asset\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"convertToAssets\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"details\":\"This is a helper contract that is etched onto a `MockERC4626` vault      as one of the intermediate steps in the \\\"etching\\\" process in the Rust      debugging tools.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"EtchingVault\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/test/EtchingVault.sol\":\"EtchingVault\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/test/EtchingVault.sol\":{\"keccak256\":\"0x756b076eba139fa9dbc5e45ec6ce3d18a50347798912c073821221a5edd0b8dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8cbe4766616950283607c67b26377166328a998d3f8d4022aed2305cde14783f\",\"dweb:/ipfs/QmWPGJG4c1YDcthA5oQbsymbYZp3ZXbTzd8VppBqpXE14k\"]}},\"version\":1}",
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
        "id": 23645,
        "exportedSymbols": {
            "EtchingVault": [
                23644
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:944:130",
        "nodes": [
            {
                "id": 23604,
                "nodeType": "PragmaDirective",
                "src": "39:23:130",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 23644,
                "nodeType": "ContractDefinition",
                "src": "511:471:130",
                "nodes": [
                    {
                        "id": 23607,
                        "nodeType": "VariableDeclaration",
                        "src": "539:37:130",
                        "nodes": [],
                        "constant": false,
                        "mutability": "immutable",
                        "name": "_baseToken",
                        "nameLocation": "566:10:130",
                        "scope": 23644,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 23606,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "539:7:130",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 23609,
                        "nodeType": "VariableDeclaration",
                        "src": "582:43:130",
                        "nodes": [],
                        "constant": false,
                        "mutability": "immutable",
                        "name": "_vaultSharePrice",
                        "nameLocation": "609:16:130",
                        "scope": 23644,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 23608,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "582:7:130",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 23625,
                        "nodeType": "FunctionDefinition",
                        "src": "632:147:130",
                        "nodes": [],
                        "body": {
                            "id": 23624,
                            "nodeType": "Block",
                            "src": "692:87:130",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 23618,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 23616,
                                            "name": "_baseToken",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23607,
                                            "src": "702:10:130",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 23617,
                                            "name": "_baseToken_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23611,
                                            "src": "715:11:130",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "702:24:130",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 23619,
                                    "nodeType": "ExpressionStatement",
                                    "src": "702:24:130"
                                },
                                {
                                    "expression": {
                                        "id": 23622,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 23620,
                                            "name": "_vaultSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23609,
                                            "src": "736:16:130",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 23621,
                                            "name": "_vaultSharePrice_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 23613,
                                            "src": "755:17:130",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "736:36:130",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 23623,
                                    "nodeType": "ExpressionStatement",
                                    "src": "736:36:130"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 23614,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23611,
                                    "mutability": "mutable",
                                    "name": "_baseToken_",
                                    "nameLocation": "652:11:130",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23625,
                                    "src": "644:19:130",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 23610,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "644:7:130",
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
                                    "id": 23613,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice_",
                                    "nameLocation": "673:17:130",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23625,
                                    "src": "665:25:130",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23612,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "665:7:130",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "643:48:130"
                        },
                        "returnParameters": {
                            "id": 23615,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "692:0:130"
                        },
                        "scope": 23644,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 23633,
                        "nodeType": "FunctionDefinition",
                        "src": "785:83:130",
                        "nodes": [],
                        "body": {
                            "id": 23632,
                            "nodeType": "Block",
                            "src": "834:34:130",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 23630,
                                        "name": "_baseToken",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23607,
                                        "src": "851:10:130",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 23629,
                                    "id": 23631,
                                    "nodeType": "Return",
                                    "src": "844:17:130"
                                }
                            ]
                        },
                        "functionSelector": "38d52e0f",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "asset",
                        "nameLocation": "794:5:130",
                        "parameters": {
                            "id": 23626,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "799:2:130"
                        },
                        "returnParameters": {
                            "id": 23629,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23628,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23633,
                                    "src": "825:7:130",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 23627,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "825:7:130",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "824:9:130"
                        },
                        "scope": 23644,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 23643,
                        "nodeType": "FunctionDefinition",
                        "src": "874:106:130",
                        "nodes": [],
                        "body": {
                            "id": 23642,
                            "nodeType": "Block",
                            "src": "940:40:130",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 23640,
                                        "name": "_vaultSharePrice",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 23609,
                                        "src": "957:16:130",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 23639,
                                    "id": 23641,
                                    "nodeType": "Return",
                                    "src": "950:23:130"
                                }
                            ]
                        },
                        "functionSelector": "07a2d13a",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "convertToAssets",
                        "nameLocation": "883:15:130",
                        "parameters": {
                            "id": 23636,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23635,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23643,
                                    "src": "899:7:130",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23634,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "899:7:130",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "898:9:130"
                        },
                        "returnParameters": {
                            "id": 23639,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23638,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 23643,
                                    "src": "931:7:130",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 23637,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "931:7:130",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "930:9:130"
                        },
                        "scope": 23644,
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
                    "id": 23605,
                    "nodeType": "StructuredDocumentation",
                    "src": "64:447:130",
                    "text": "@author DELV\n @title EtchingVault\n @dev This is a helper contract that is etched onto a `MockERC4626` vault\n      as one of the intermediate steps in the \"etching\" process in the Rust\n      debugging tools.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    23644
                ],
                "name": "EtchingVault",
                "nameLocation": "520:12:130",
                "scope": 23645,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 130
};
