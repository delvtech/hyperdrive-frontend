export const IDepositQueue = {
    "abi": [
        {
            "inputs": [],
            "name": "depositETHFromProtocol",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "tokenAddress",
                    "type": "address"
                }
            ],
            "name": "totalEarned",
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
        "depositETHFromProtocol()": "d123ccd5",
        "totalEarned(address)": "649aca4a"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"depositETHFromProtocol\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenAddress\",\"type\":\"address\"}],\"name\":\"totalEarned\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IRenzo.sol\":\"IDepositQueue\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x5f446a4987d57c64380d44c234ee079172e98bed9595ec067eb519898c3117d9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a3245994c58110716f5099c07e5cb270137356d288044f03c713d29c36e207ac\",\"dweb:/ipfs/QmYdn52sGRQKXfSyL8ieSz8HysG6R5kLJWsNwEnyX1e22p\"]},\"contracts/src/interfaces/IRenzo.sol\":{\"keccak256\":\"0x61bdb85d6c6804facffa12d31496d3acfc9482de001ec8fb3d15f294e5fd5e00\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5519988953b2b131e9726ce2827a96fb3691f802d71501d30a10b5118e8a541d\",\"dweb:/ipfs/QmZZCtcg3SR2F37gareTCnbdS5QfHRwRBCH4Sr64jAJQ7F\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.20+commit.a1b79de6"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "stateMutability": "payable",
                    "type": "function",
                    "name": "depositETHFromProtocol"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "tokenAddress",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "totalEarned",
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
                "contracts/src/interfaces/IRenzo.sol": "IDepositQueue"
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
            "contracts/src/interfaces/IRenzo.sol": {
                "keccak256": "0x61bdb85d6c6804facffa12d31496d3acfc9482de001ec8fb3d15f294e5fd5e00",
                "urls": [
                    "bzz-raw://5519988953b2b131e9726ce2827a96fb3691f802d71501d30a10b5118e8a541d",
                    "dweb:/ipfs/QmZZCtcg3SR2F37gareTCnbdS5QfHRwRBCH4Sr64jAJQ7F"
                ],
                "license": "Apache-2.0"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "contracts/src/interfaces/IRenzo.sol",
        "id": 11995,
        "exportedSymbols": {
            "IDepositQueue": [
                11994
            ],
            "IERC20": [
                9980
            ],
            "IRenzoOracle": [
                11983
            ],
            "IRestakeManager": [
                11928
            ]
        },
        "nodeType": "SourceUnit",
        "src": "39:2264:103",
        "nodes": [
            {
                "id": 11896,
                "nodeType": "PragmaDirective",
                "src": "39:23:103",
                "nodes": [],
                "literals": [
                    "solidity",
                    "0.8",
                    ".20"
                ]
            },
            {
                "id": 11898,
                "nodeType": "ImportDirective",
                "src": "64:38:103",
                "nodes": [],
                "absolutePath": "contracts/src/interfaces/IERC20.sol",
                "file": "./IERC20.sol",
                "nameLocation": "-1:-1:-1",
                "scope": 11995,
                "sourceUnit": 9981,
                "symbolAliases": [
                    {
                        "foreign": {
                            "id": 11897,
                            "name": "IERC20",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9980,
                            "src": "73:6:103",
                            "typeDescriptions": {}
                        },
                        "nameLocation": "-1:-1:-1"
                    }
                ],
                "unitAlias": ""
            },
            {
                "id": 11928,
                "nodeType": "ContractDefinition",
                "src": "104:1246:103",
                "nodes": [
                    {
                        "id": 11904,
                        "nodeType": "FunctionDefinition",
                        "src": "289:49:103",
                        "nodes": [],
                        "documentation": {
                            "id": 11899,
                            "nodeType": "StructuredDocumentation",
                            "src": "136:148:103",
                            "text": " @notice Returns the ezETH token contract address\n @dev Getter for public state variable of the ezETH token contract address"
                        },
                        "functionSelector": "13a73c78",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "ezETH",
                        "nameLocation": "298:5:103",
                        "parameters": {
                            "id": 11900,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "303:2:103"
                        },
                        "returnParameters": {
                            "id": 11903,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11902,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11904,
                                    "src": "329:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11901,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "329:7:103",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "328:9:103"
                        },
                        "scope": 11928,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11910,
                        "nodeType": "FunctionDefinition",
                        "src": "499:55:103",
                        "nodes": [],
                        "documentation": {
                            "id": 11905,
                            "nodeType": "StructuredDocumentation",
                            "src": "344:150:103",
                            "text": " @notice Returns the renzo oracle contract address\n @dev Getter for public state variable of the renzo oracle contract address"
                        },
                        "functionSelector": "892866a4",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "renzoOracle",
                        "nameLocation": "508:11:103",
                        "parameters": {
                            "id": 11906,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "519:2:103"
                        },
                        "returnParameters": {
                            "id": 11909,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11908,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11910,
                                    "src": "545:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11907,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "545:7:103",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "544:9:103"
                        },
                        "scope": 11928,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11914,
                        "nodeType": "FunctionDefinition",
                        "src": "756:39:103",
                        "nodes": [],
                        "documentation": {
                            "id": 11911,
                            "nodeType": "StructuredDocumentation",
                            "src": "560:191:103",
                            "text": " @notice  Allows a user to deposit ETH into the protocol and get back ezETH\n @dev     Convenience function to deposit without a referral ID and backwards compatibility"
                        },
                        "functionSelector": "f6326fb3",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "depositETH",
                        "nameLocation": "765:10:103",
                        "parameters": {
                            "id": 11912,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "775:2:103"
                        },
                        "returnParameters": {
                            "id": 11913,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "794:0:103"
                        },
                        "scope": 11928,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11927,
                        "nodeType": "FunctionDefinition",
                        "src": "1229:119:103",
                        "nodes": [],
                        "documentation": {
                            "id": 11915,
                            "nodeType": "StructuredDocumentation",
                            "src": "801:423:103",
                            "text": "@dev This function calculates the TVLs for each operator delegator by individual token, total for each OD, and total for the protocol.\n @return operatorDelegatorTokenTVLs Each OD's TVL indexed by operatorDelegators array by collateralTokens array\n @return operatorDelegatorTVLs Each OD's Total TVL in order of operatorDelegators array\n @return totalTVL The total TVL across all operator delegators."
                        },
                        "functionSelector": "ff9969cd",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateTVLs",
                        "nameLocation": "1238:13:103",
                        "parameters": {
                            "id": 11916,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1251:2:103"
                        },
                        "returnParameters": {
                            "id": 11926,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11920,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11927,
                                    "src": "1301:18:103",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_array$_t_uint256_$dyn_memory_ptr_$dyn_memory_ptr",
                                        "typeString": "uint256[][]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "baseType": {
                                                "id": 11917,
                                                "name": "uint256",
                                                "nodeType": "ElementaryTypeName",
                                                "src": "1301:7:103",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "id": 11918,
                                            "nodeType": "ArrayTypeName",
                                            "src": "1301:9:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                                "typeString": "uint256[]"
                                            }
                                        },
                                        "id": 11919,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1301:11:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_array$_t_uint256_$dyn_storage_$dyn_storage_ptr",
                                            "typeString": "uint256[][]"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11923,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11927,
                                    "src": "1321:16:103",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 11921,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1321:7:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 11922,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1321:9:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11925,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11927,
                                    "src": "1339:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11924,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1339:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1300:47:103"
                        },
                        "scope": 11928,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IRestakeManager",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    11928
                ],
                "name": "IRestakeManager",
                "nameLocation": "114:15:103",
                "scope": 11995,
                "usedErrors": [],
                "usedEvents": []
            },
            {
                "id": 11983,
                "nodeType": "ContractDefinition",
                "src": "1352:784:103",
                "nodes": [
                    {
                        "id": 11938,
                        "nodeType": "FunctionDefinition",
                        "src": "1381:113:103",
                        "nodes": [],
                        "functionSelector": "0052e3fd",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "lookupTokenValue",
                        "nameLocation": "1390:16:103",
                        "parameters": {
                            "id": 11934,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11931,
                                    "mutability": "mutable",
                                    "name": "_token",
                                    "nameLocation": "1423:6:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11938,
                                    "src": "1416:13:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$9980",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 11930,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 11929,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "1416:6:103"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 9980,
                                            "src": "1416:6:103"
                                        },
                                        "referencedDeclaration": 9980,
                                        "src": "1416:6:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$9980",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11933,
                                    "mutability": "mutable",
                                    "name": "_balance",
                                    "nameLocation": "1447:8:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11938,
                                    "src": "1439:16:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11932,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1439:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1406:55:103"
                        },
                        "returnParameters": {
                            "id": 11937,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11936,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11938,
                                    "src": "1485:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11935,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1485:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1484:9:103"
                        },
                        "scope": 11983,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11948,
                        "nodeType": "FunctionDefinition",
                        "src": "1500:121:103",
                        "nodes": [],
                        "functionSelector": "37933625",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "lookupTokenAmountFromValue",
                        "nameLocation": "1509:26:103",
                        "parameters": {
                            "id": 11944,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11941,
                                    "mutability": "mutable",
                                    "name": "_token",
                                    "nameLocation": "1552:6:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11948,
                                    "src": "1545:13:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$9980",
                                        "typeString": "contract IERC20"
                                    },
                                    "typeName": {
                                        "id": 11940,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 11939,
                                            "name": "IERC20",
                                            "nameLocations": [
                                                "1545:6:103"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 9980,
                                            "src": "1545:6:103"
                                        },
                                        "referencedDeclaration": 9980,
                                        "src": "1545:6:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_IERC20_$9980",
                                            "typeString": "contract IERC20"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11943,
                                    "mutability": "mutable",
                                    "name": "_value",
                                    "nameLocation": "1576:6:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11948,
                                    "src": "1568:14:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11942,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1568:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1535:53:103"
                        },
                        "returnParameters": {
                            "id": 11947,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11946,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11948,
                                    "src": "1612:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11945,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1612:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1611:9:103"
                        },
                        "scope": 11983,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11960,
                        "nodeType": "FunctionDefinition",
                        "src": "1627:134:103",
                        "nodes": [],
                        "functionSelector": "ba28a571",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "lookupTokenValues",
                        "nameLocation": "1636:17:103",
                        "parameters": {
                            "id": 11956,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11952,
                                    "mutability": "mutable",
                                    "name": "_tokens",
                                    "nameLocation": "1679:7:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11960,
                                    "src": "1663:23:103",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_contract$_IERC20_$9980_$dyn_memory_ptr",
                                        "typeString": "contract IERC20[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 11950,
                                            "nodeType": "UserDefinedTypeName",
                                            "pathNode": {
                                                "id": 11949,
                                                "name": "IERC20",
                                                "nameLocations": [
                                                    "1663:6:103"
                                                ],
                                                "nodeType": "IdentifierPath",
                                                "referencedDeclaration": 9980,
                                                "src": "1663:6:103"
                                            },
                                            "referencedDeclaration": 9980,
                                            "src": "1663:6:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_IERC20_$9980",
                                                "typeString": "contract IERC20"
                                            }
                                        },
                                        "id": 11951,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1663:8:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_contract$_IERC20_$9980_$dyn_storage_ptr",
                                            "typeString": "contract IERC20[]"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11955,
                                    "mutability": "mutable",
                                    "name": "_balances",
                                    "nameLocation": "1713:9:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11960,
                                    "src": "1696:26:103",
                                    "stateVariable": false,
                                    "storageLocation": "memory",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 11953,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1696:7:103",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 11954,
                                        "nodeType": "ArrayTypeName",
                                        "src": "1696:9:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1653:75:103"
                        },
                        "returnParameters": {
                            "id": 11959,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11958,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11960,
                                    "src": "1752:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11957,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1752:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1751:9:103"
                        },
                        "scope": 11983,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11971,
                        "nodeType": "FunctionDefinition",
                        "src": "1767:178:103",
                        "nodes": [],
                        "functionSelector": "8f686e6a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateMintAmount",
                        "nameLocation": "1776:19:103",
                        "parameters": {
                            "id": 11967,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11962,
                                    "mutability": "mutable",
                                    "name": "_currentValueInProtocol",
                                    "nameLocation": "1813:23:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11971,
                                    "src": "1805:31:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11961,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1805:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11964,
                                    "mutability": "mutable",
                                    "name": "_newValueAdded",
                                    "nameLocation": "1854:14:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11971,
                                    "src": "1846:22:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11963,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1846:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11966,
                                    "mutability": "mutable",
                                    "name": "_existingEzETHSupply",
                                    "nameLocation": "1886:20:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11971,
                                    "src": "1878:28:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11965,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1878:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1795:117:103"
                        },
                        "returnParameters": {
                            "id": 11970,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11969,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11971,
                                    "src": "1936:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11968,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1936:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1935:9:103"
                        },
                        "scope": 11983,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11982,
                        "nodeType": "FunctionDefinition",
                        "src": "1951:183:103",
                        "nodes": [],
                        "functionSelector": "c5c83cb0",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "calculateRedeemAmount",
                        "nameLocation": "1960:21:103",
                        "parameters": {
                            "id": 11978,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11973,
                                    "mutability": "mutable",
                                    "name": "_ezETHBeingBurned",
                                    "nameLocation": "1999:17:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11982,
                                    "src": "1991:25:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11972,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1991:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11975,
                                    "mutability": "mutable",
                                    "name": "_existingEzETHSupply",
                                    "nameLocation": "2034:20:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11982,
                                    "src": "2026:28:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11974,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2026:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 11977,
                                    "mutability": "mutable",
                                    "name": "_currentValueInProtocol",
                                    "nameLocation": "2072:23:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11982,
                                    "src": "2064:31:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11976,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2064:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1981:120:103"
                        },
                        "returnParameters": {
                            "id": 11981,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11980,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11982,
                                    "src": "2125:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11979,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2125:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2124:9:103"
                        },
                        "scope": 11983,
                        "stateMutability": "pure",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IRenzoOracle",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    11983
                ],
                "name": "IRenzoOracle",
                "nameLocation": "1362:12:103",
                "scope": 11995,
                "usedErrors": [],
                "usedEvents": []
            },
            {
                "id": 11994,
                "nodeType": "ContractDefinition",
                "src": "2138:164:103",
                "nodes": [
                    {
                        "id": 11986,
                        "nodeType": "FunctionDefinition",
                        "src": "2168:51:103",
                        "nodes": [],
                        "functionSelector": "d123ccd5",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "depositETHFromProtocol",
                        "nameLocation": "2177:22:103",
                        "parameters": {
                            "id": 11984,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2199:2:103"
                        },
                        "returnParameters": {
                            "id": 11985,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2218:0:103"
                        },
                        "scope": 11994,
                        "stateMutability": "payable",
                        "virtual": false,
                        "visibility": "external"
                    },
                    {
                        "id": 11993,
                        "nodeType": "FunctionDefinition",
                        "src": "2225:75:103",
                        "nodes": [],
                        "functionSelector": "649aca4a",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "totalEarned",
                        "nameLocation": "2234:11:103",
                        "parameters": {
                            "id": 11989,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11988,
                                    "mutability": "mutable",
                                    "name": "tokenAddress",
                                    "nameLocation": "2254:12:103",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11993,
                                    "src": "2246:20:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 11987,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2246:7:103",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2245:22:103"
                        },
                        "returnParameters": {
                            "id": 11992,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11991,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 11993,
                                    "src": "2291:7:103",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 11990,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2291:7:103",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2290:9:103"
                        },
                        "scope": 11994,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "IDepositQueue",
                "contractDependencies": [],
                "contractKind": "interface",
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    11994
                ],
                "name": "IDepositQueue",
                "nameLocation": "2148:13:103",
                "scope": 11995,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "Apache-2.0"
    },
    "id": 103
};
