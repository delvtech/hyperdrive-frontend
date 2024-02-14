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
        "sourceMap": "511:471:81:-:0;;;632:147;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;702:24:81;;;;;736:36;;511:471;;14:351:182;93:6;101;154:2;142:9;133:7;129:23;125:32;122:52;;;170:1;167;160:12;122:52;196:16;;-1:-1:-1;;;;;241:31:182;;231:42;;221:70;;287:1;284;277:12;221:70;355:2;340:18;;;;334:25;310:5;;334:25;;-1:-1:-1;;;14:351:182:o;:::-;511:471:81;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x6080604052348015600f57600080fd5b506004361060325760003560e01c806307a2d13a14603757806338d52e0f14607a575b600080fd5b6067604236600460b0565b507f000000000000000000000000000000000000000000000000000000000000000090565b6040519081526020015b60405180910390f35b6040516001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001681526020016071565b60006020828403121560c157600080fd5b503591905056fea2646970667358221220bf31d7d4014b34f65f9a3539b27871551c603a48e718d08b1402b2313f506a0464736f6c63430008140033",
        "sourceMap": "511:471:81:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;874:106;;;;;;:::i;:::-;-1:-1:-1;957:16:81;;874:106;;;;345:25:182;;;333:2;318:18;874:106:81;;;;;;;;785:83;;;-1:-1:-1;;;;;851:10:81;545:32:182;527:51;;515:2;500:18;785:83:81;381:203:182;14:180;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:182;;14:180;-1:-1:-1;14:180:182:o",
        "linkReferences": {},
        "immutableReferences": {
            "19560": [
                {
                    "start": 135,
                    "length": 32
                }
            ],
            "19562": [
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
        "id": 19598,
        "exportedSymbols": {
            "EtchingVault": [
                19597
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:944:81",
        "nodes": [
            {
                "id": 19557,
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
                "id": 19597,
                "nodeType": "ContractDefinition",
                "src": "511:471:81",
                "nodes": [
                    {
                        "id": 19560,
                        "nodeType": "VariableDeclaration",
                        "src": "539:37:81",
                        "nodes": [],
                        "constant": false,
                        "mutability": "immutable",
                        "name": "_baseToken",
                        "nameLocation": "566:10:81",
                        "scope": 19597,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 19559,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "539:7:81",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 19562,
                        "nodeType": "VariableDeclaration",
                        "src": "582:43:81",
                        "nodes": [],
                        "constant": false,
                        "mutability": "immutable",
                        "name": "_vaultSharePrice",
                        "nameLocation": "609:16:81",
                        "scope": 19597,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                        },
                        "typeName": {
                            "id": 19561,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "582:7:81",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            }
                        },
                        "visibility": "internal"
                    },
                    {
                        "id": 19578,
                        "nodeType": "FunctionDefinition",
                        "src": "632:147:81",
                        "nodes": [],
                        "body": {
                            "id": 19577,
                            "nodeType": "Block",
                            "src": "692:87:81",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 19571,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 19569,
                                            "name": "_baseToken",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 19560,
                                            "src": "702:10:81",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 19570,
                                            "name": "_baseToken_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 19564,
                                            "src": "715:11:81",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "702:24:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 19572,
                                    "nodeType": "ExpressionStatement",
                                    "src": "702:24:81"
                                },
                                {
                                    "expression": {
                                        "id": 19575,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 19573,
                                            "name": "_vaultSharePrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 19562,
                                            "src": "736:16:81",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 19574,
                                            "name": "_vaultSharePrice_",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 19566,
                                            "src": "755:17:81",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "src": "736:36:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "id": 19576,
                                    "nodeType": "ExpressionStatement",
                                    "src": "736:36:81"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 19567,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 19564,
                                    "mutability": "mutable",
                                    "name": "_baseToken_",
                                    "nameLocation": "652:11:81",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 19578,
                                    "src": "644:19:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 19563,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "644:7:81",
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
                                    "id": 19566,
                                    "mutability": "mutable",
                                    "name": "_vaultSharePrice_",
                                    "nameLocation": "673:17:81",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 19578,
                                    "src": "665:25:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 19565,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "665:7:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "643:48:81"
                        },
                        "returnParameters": {
                            "id": 19568,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "692:0:81"
                        },
                        "scope": 19597,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "public"
                    },
                    {
                        "id": 19586,
                        "nodeType": "FunctionDefinition",
                        "src": "785:83:81",
                        "nodes": [],
                        "body": {
                            "id": 19585,
                            "nodeType": "Block",
                            "src": "834:34:81",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 19583,
                                        "name": "_baseToken",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 19560,
                                        "src": "851:10:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "functionReturnParameters": 19582,
                                    "id": 19584,
                                    "nodeType": "Return",
                                    "src": "844:17:81"
                                }
                            ]
                        },
                        "functionSelector": "38d52e0f",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "asset",
                        "nameLocation": "794:5:81",
                        "parameters": {
                            "id": 19579,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "799:2:81"
                        },
                        "returnParameters": {
                            "id": 19582,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 19581,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 19586,
                                    "src": "825:7:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 19580,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "825:7:81",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "824:9:81"
                        },
                        "scope": 19597,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 19596,
                        "nodeType": "FunctionDefinition",
                        "src": "874:106:81",
                        "nodes": [],
                        "body": {
                            "id": 19595,
                            "nodeType": "Block",
                            "src": "940:40:81",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 19593,
                                        "name": "_vaultSharePrice",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 19562,
                                        "src": "957:16:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "functionReturnParameters": 19592,
                                    "id": 19594,
                                    "nodeType": "Return",
                                    "src": "950:23:81"
                                }
                            ]
                        },
                        "functionSelector": "07a2d13a",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "convertToAssets",
                        "nameLocation": "883:15:81",
                        "parameters": {
                            "id": 19589,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 19588,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 19596,
                                    "src": "899:7:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 19587,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "899:7:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "898:9:81"
                        },
                        "returnParameters": {
                            "id": 19592,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 19591,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 19596,
                                    "src": "931:7:81",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 19590,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "931:7:81",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "930:9:81"
                        },
                        "scope": 19597,
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
                    "id": 19558,
                    "nodeType": "StructuredDocumentation",
                    "src": "64:447:81",
                    "text": "@author DELV\n @title EtchingVault\n @dev This is a helper contract that is etched onto a `MockERC4626` vault\n      as one of the intermediate steps in the \"etching\" process in the Rust\n      debugging tools.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    19597
                ],
                "name": "EtchingVault",
                "nameLocation": "520:12:81",
                "scope": 19598,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 81
};
