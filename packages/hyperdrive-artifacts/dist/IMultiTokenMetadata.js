export const IMultiTokenMetadata = {
    "abi": [
        {
            "inputs": [],
            "name": "DOMAIN_SEPARATOR",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "PERMIT_TYPEHASH",
            "outputs": [
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
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
        "DOMAIN_SEPARATOR()": "3644e515",
        "PERMIT_TYPEHASH()": "30adf81f"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"DOMAIN_SEPARATOR\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PERMIT_TYPEHASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"returns\":{\"_0\":\"The EIP712 domain separator of the MultiToken.\"}},\"PERMIT_TYPEHASH()\":{\"returns\":{\"_0\":\"The EIP712 permit typehash of the MultiToken.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"DOMAIN_SEPARATOR()\":{\"notice\":\"Gets the EIP712 domain separator of the MultiToken.\"},\"PERMIT_TYPEHASH()\":{\"notice\":\"Gets the EIP712 permit typehash of the MultiToken.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IMultiTokenMetadata.sol\":\"IMultiTokenMetadata\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355\",\"dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2\"]}},\"version\":1}",
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
                    "name": "DOMAIN_SEPARATOR",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "PERMIT_TYPEHASH",
                    "outputs": [
                        {
                            "internalType": "bytes32",
                            "name": "",
                            "type": "bytes32"
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "DOMAIN_SEPARATOR()": {
                        "returns": {
                            "_0": "The EIP712 domain separator of the MultiToken."
                        }
                    },
                    "PERMIT_TYPEHASH()": {
                        "returns": {
                            "_0": "The EIP712 permit typehash of the MultiToken."
                        }
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {
                    "DOMAIN_SEPARATOR()": {
                        "notice": "Gets the EIP712 domain separator of the MultiToken."
                    },
                    "PERMIT_TYPEHASH()": {
                        "notice": "Gets the EIP712 permit typehash of the MultiToken."
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
                "contracts/src/interfaces/IMultiTokenMetadata.sol": "IMultiTokenMetadata"
            },
            "libraries": {}
        },
        "sources": {
            "contracts/src/interfaces/IMultiTokenMetadata.sol": {
                "keccak256": "0xeabffcfcd0fd642caaa2355dccad38269d25fbd4db1b0db43fd97328bf464862",
                "urls": [
                    "bzz-raw://6970e3db54bfcca6748db01b871fcee4f8d74fea2e66c39e3320232086633355",
                    "dweb:/ipfs/QmPq66eyA4DmnU7m1QpMgKGrJ3ebUeN6e8UEuhb64U3BH2"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IMultiTokenMetadata.sol",
        "id": 8498,
        "exportedSymbols": {
            "IMultiTokenMetadata": [
                8497
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:535:58",
        "nodes": [
            {
                "id": 8484,
                "nodeType": "PragmaDirective",
                "src": "39:23:58",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 8497,
                "nodeType": "ContractDefinition",
                "src": "64:509:58",
                "nodes": [
                    {
                        "id": 8490,
                        "nodeType": "FunctionDefinition",
                        "src": "272:59:58",
                        "nodes": [],
                        "documentation": {
                            "id": 8485,
                            "nodeType": "StructuredDocumentation",
                            "src": "100:124:58",
                            "text": "@notice Gets the EIP712 permit typehash of the MultiToken.\n @return The EIP712 permit typehash of the MultiToken."
                        },
                        "functionSelector": "30adf81f",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "PERMIT_TYPEHASH",
                        "nameLocation": "281:15:58",
                        "parameters": {
                            "id": 8486,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "296:2:58"
                        },
                        "returnParameters": {
                            "id": 8489,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8488,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8490,
                                    "src": "322:7:58",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 8487,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "322:7:58",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "321:9:58"
                        },
                        "scope": 8497,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 8496,
                        "nodeType": "FunctionDefinition",
                        "src": "511:60:58",
                        "nodes": [],
                        "documentation": {
                            "id": 8491,
                            "nodeType": "StructuredDocumentation",
                            "src": "337:126:58",
                            "text": "@notice Gets the EIP712 domain separator of the MultiToken.\n @return The EIP712 domain separator of the MultiToken."
                        },
                        "functionSelector": "3644e515",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "DOMAIN_SEPARATOR",
                        "nameLocation": "520:16:58",
                        "parameters": {
                            "id": 8492,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "536:2:58"
                        },
                        "returnParameters": {
                            "id": 8495,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 8494,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 8496,
                                    "src": "562:7:58",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 8493,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "562:7:58",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "561:9:58"
                        },
                        "scope": 8497,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IMultiTokenMetadata",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    8497
                ],
                "name": "IMultiTokenMetadata",
                "nameLocation": "74:19:58",
                "scope": 8498,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 58
};
