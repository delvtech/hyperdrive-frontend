export const Auth = {
    "abi": [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "contract Authority",
                    "name": "newAuthority",
                    "type": "address"
                }
            ],
            "name": "AuthorityUpdated",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "authority",
            "outputs": [
                {
                    "internalType": "contract Authority",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
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
                    "internalType": "contract Authority",
                    "name": "newAuthority",
                    "type": "address"
                }
            ],
            "name": "setAuthority",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
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
        "authority()": "bf7e214f",
        "owner()": "8da5cb5b",
        "setAuthority(address)": "7a9e5e4b",
        "transferOwnership(address)": "f2fde38b"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Provides a flexible and updatable auth pattern which is completely separate from application logic.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/auth/Auth.sol\":\"Auth\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]}},\"version\":1}",
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
                            "name": "user",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "contract Authority",
                            "name": "newAuthority",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "AuthorityUpdated",
                    "anonymous": false
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "user",
                            "type": "address",
                            "indexed": true
                        },
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address",
                            "indexed": true
                        }
                    ],
                    "type": "event",
                    "name": "OwnershipTransferred",
                    "anonymous": false
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "authority",
                    "outputs": [
                        {
                            "internalType": "contract Authority",
                            "name": "",
                            "type": "address"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "owner",
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
                            "internalType": "contract Authority",
                            "name": "newAuthority",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "setAuthority"
                },
                {
                    "inputs": [
                        {
                            "internalType": "address",
                            "name": "newOwner",
                            "type": "address"
                        }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "function",
                    "name": "transferOwnership"
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
                "lib/solmate/src/auth/Auth.sol": "Auth"
            },
            "libraries": {}
        },
        "sources": {
            "lib/solmate/src/auth/Auth.sol": {
                "keccak256": "0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c",
                "urls": [
                    "bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac",
                    "dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W"
                ],
                "license": "AGPL-3.0-only"
            }
        },
        "version": 1
    },
    "ast": {
        "absolutePath": "lib/solmate/src/auth/Auth.sol",
        "id": 71812,
        "exportedSymbols": {
            "Auth": [
                71798
            ],
            "Authority": [
                71811
            ]
        },
        "nodeType": "SourceUnit",
        "src": "42:2535:170",
        "nodes": [
            {
                "id": 71641,
                "nodeType": "PragmaDirective",
                "src": "42:24:170",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.8",
                    ".0"
                ]
            },
            {
                "id": 71798,
                "nodeType": "ContractDefinition",
                "src": "369:1760:170",
                "nodes": [
                    {
                        "id": 71648,
                        "nodeType": "EventDefinition",
                        "src": "398:75:170",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
                        "name": "OwnershipTransferred",
                        "nameLocation": "404:20:170",
                        "parameters": {
                            "id": 71647,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71644,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "441:4:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71648,
                                    "src": "425:20:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71643,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "425:7:170",
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
                                    "id": 71646,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newOwner",
                                    "nameLocation": "463:8:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71648,
                                    "src": "447:24:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71645,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "447:7:170",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "424:48:170"
                        }
                    },
                    {
                        "id": 71655,
                        "nodeType": "EventDefinition",
                        "src": "479:77:170",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "a3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198",
                        "name": "AuthorityUpdated",
                        "nameLocation": "485:16:170",
                        "parameters": {
                            "id": 71654,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71650,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "518:4:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71655,
                                    "src": "502:20:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71649,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "502:7:170",
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
                                    "id": 71653,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newAuthority",
                                    "nameLocation": "542:12:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71655,
                                    "src": "524:30:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$71811",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 71652,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71651,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "524:9:170"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 71811,
                                            "src": "524:9:170"
                                        },
                                        "referencedDeclaration": 71811,
                                        "src": "524:9:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$71811",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "501:54:170"
                        }
                    },
                    {
                        "id": 71657,
                        "nodeType": "VariableDeclaration",
                        "src": "562:20:170",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "8da5cb5b",
                        "mutability": "mutable",
                        "name": "owner",
                        "nameLocation": "577:5:170",
                        "scope": 71798,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 71656,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "562:7:170",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 71660,
                        "nodeType": "VariableDeclaration",
                        "src": "589:26:170",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "bf7e214f",
                        "mutability": "mutable",
                        "name": "authority",
                        "nameLocation": "606:9:170",
                        "scope": 71798,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Authority_$71811",
                            "typeString": "contract Authority"
                        },
                        "typeName": {
                            "id": 71659,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 71658,
                                "name": "Authority",
                                "nameLocations": [
                                    "589:9:170"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 71811,
                                "src": "589:9:170"
                            },
                            "referencedDeclaration": 71811,
                            "src": "589:9:170",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Authority_$71811",
                                "typeString": "contract Authority"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 71689,
                        "nodeType": "FunctionDefinition",
                        "src": "622:224:170",
                        "nodes": [],
                        "body": {
                            "id": 71688,
                            "nodeType": "Block",
                            "src": "672:174:170",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 71670,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71668,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71657,
                                            "src": "682:5:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71669,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71662,
                                            "src": "690:6:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "682:14:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 71671,
                                    "nodeType": "ExpressionStatement",
                                    "src": "682:14:170"
                                },
                                {
                                    "expression": {
                                        "id": 71674,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71672,
                                            "name": "authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71660,
                                            "src": "706:9:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$71811",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71673,
                                            "name": "_authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71665,
                                            "src": "718:10:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$71811",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "src": "706:22:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$71811",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "id": 71675,
                                    "nodeType": "ExpressionStatement",
                                    "src": "706:22:170"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 71677,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "765:3:170",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 71678,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "769:6:170",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "765:10:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71679,
                                                "name": "_owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71662,
                                                "src": "777:6:170",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 71676,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71648,
                                            "src": "744:20:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 71680,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "744:40:170",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71681,
                                    "nodeType": "EmitStatement",
                                    "src": "739:45:170"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 71683,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "816:3:170",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 71684,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "820:6:170",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "816:10:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71685,
                                                "name": "_authority",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71665,
                                                "src": "828:10:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$71811",
                                                    "typeString": "contract Authority"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_contract$_Authority_$71811",
                                                    "typeString": "contract Authority"
                                                }
                                            ],
                                            "id": 71682,
                                            "name": "AuthorityUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71655,
                                            "src": "799:16:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$71811_$returns$__$",
                                                "typeString": "function (address,contract Authority)"
                                            }
                                        },
                                        "id": 71686,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "799:40:170",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71687,
                                    "nodeType": "EmitStatement",
                                    "src": "794:45:170"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 71666,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71662,
                                    "mutability": "mutable",
                                    "name": "_owner",
                                    "nameLocation": "642:6:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71689,
                                    "src": "634:14:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71661,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "634:7:170",
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
                                    "id": 71665,
                                    "mutability": "mutable",
                                    "name": "_authority",
                                    "nameLocation": "660:10:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71689,
                                    "src": "650:20:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$71811",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 71664,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71663,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "650:9:170"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 71811,
                                            "src": "650:9:170"
                                        },
                                        "referencedDeclaration": 71811,
                                        "src": "650:9:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$71811",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "633:38:170"
                        },
                        "returnParameters": {
                            "id": 71667,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "672:0:170"
                        },
                        "scope": 71798,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71703,
                        "nodeType": "ModifierDefinition",
                        "src": "852:119:170",
                        "nodes": [],
                        "body": {
                            "id": 71702,
                            "nodeType": "Block",
                            "src": "884:87:170",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 71693,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "915:3:170",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 71694,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "919:6:170",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "915:10:170",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 71695,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "927:3:170",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 71696,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "931:3:170",
                                                        "memberName": "sig",
                                                        "nodeType": "MemberAccess",
                                                        "src": "927:7:170",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes4",
                                                            "typeString": "bytes4"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_bytes4",
                                                            "typeString": "bytes4"
                                                        }
                                                    ],
                                                    "id": 71692,
                                                    "name": "isAuthorized",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71743,
                                                    "src": "902:12:170",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                        "typeString": "function (address,bytes4) view returns (bool)"
                                                    }
                                                },
                                                "id": 71697,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "902:33:170",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "554e415554484f52495a4544",
                                                "id": 71698,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "937:14:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_stringliteral_269df367cd41cace5897a935d0e0858fe4543b5619d45e09af6b124c1bb3d528",
                                                    "typeString": "literal_string \"UNAUTHORIZED\""
                                                },
                                                "value": "UNAUTHORIZED"
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                {
                                                    "typeIdentifier": "t_stringliteral_269df367cd41cace5897a935d0e0858fe4543b5619d45e09af6b124c1bb3d528",
                                                    "typeString": "literal_string \"UNAUTHORIZED\""
                                                }
                                            ],
                                            "id": 71691,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "894:7:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 71699,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "894:58:170",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71700,
                                    "nodeType": "ExpressionStatement",
                                    "src": "894:58:170"
                                },
                                {
                                    "id": 71701,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "963:1:170"
                                }
                            ]
                        },
                        "name": "requiresAuth",
                        "nameLocation": "861:12:170",
                        "parameters": {
                            "id": 71690,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "873:2:170"
                        },
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 71743,
                        "nodeType": "FunctionDefinition",
                        "src": "977:540:170",
                        "nodes": [],
                        "body": {
                            "id": 71742,
                            "nodeType": "Block",
                            "src": "1070:447:170",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71714
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71714,
                                            "mutability": "mutable",
                                            "name": "auth",
                                            "nameLocation": "1090:4:170",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71742,
                                            "src": "1080:14:170",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$71811",
                                                "typeString": "contract Authority"
                                            },
                                            "typeName": {
                                                "id": 71713,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 71712,
                                                    "name": "Authority",
                                                    "nameLocations": [
                                                        "1080:9:170"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 71811,
                                                    "src": "1080:9:170"
                                                },
                                                "referencedDeclaration": 71811,
                                                "src": "1080:9:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$71811",
                                                    "typeString": "contract Authority"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71716,
                                    "initialValue": {
                                        "id": 71715,
                                        "name": "authority",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 71660,
                                        "src": "1097:9:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$71811",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1080:26:170"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 71740,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                            "components": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    "id": 71735,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "id": 71725,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 71719,
                                                                    "name": "auth",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71714,
                                                                    "src": "1423:4:170",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Authority_$71811",
                                                                        "typeString": "contract Authority"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Authority_$71811",
                                                                        "typeString": "contract Authority"
                                                                    }
                                                                ],
                                                                "id": 71718,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1415:7:170",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 71717,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1415:7:170",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71720,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1415:13:170",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "nodeType": "BinaryOperation",
                                                        "operator": "!=",
                                                        "rightExpression": {
                                                            "arguments": [
                                                                {
                                                                    "hexValue": "30",
                                                                    "id": 71723,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "1440:1:170",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_rational_0_by_1",
                                                                        "typeString": "int_const 0"
                                                                    },
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_rational_0_by_1",
                                                                        "typeString": "int_const 0"
                                                                    }
                                                                ],
                                                                "id": 71722,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1432:7:170",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 71721,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1432:7:170",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71724,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1432:10:170",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "1415:27:170",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "&&",
                                                    "rightExpression": {
                                                        "arguments": [
                                                            {
                                                                "id": 71728,
                                                                "name": "user",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71705,
                                                                "src": "1459:4:170",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 71731,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "1473:4:170",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_Auth_$71798",
                                                                            "typeString": "contract Auth"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_Auth_$71798",
                                                                            "typeString": "contract Auth"
                                                                        }
                                                                    ],
                                                                    "id": 71730,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "1465:7:170",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 71729,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "1465:7:170",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 71732,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1465:13:170",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 71733,
                                                                "name": "functionSig",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71707,
                                                                "src": "1480:11:170",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes4",
                                                                    "typeString": "bytes4"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                },
                                                                {
                                                                    "typeIdentifier": "t_bytes4",
                                                                    "typeString": "bytes4"
                                                                }
                                                            ],
                                                            "expression": {
                                                                "id": 71726,
                                                                "name": "auth",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71714,
                                                                "src": "1446:4:170",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_Authority_$71811",
                                                                    "typeString": "contract Authority"
                                                                }
                                                            },
                                                            "id": 71727,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1451:7:170",
                                                            "memberName": "canCall",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 71810,
                                                            "src": "1446:12:170",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                                "typeString": "function (address,address,bytes4) view external returns (bool)"
                                                            }
                                                        },
                                                        "id": 71734,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1446:46:170",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "1415:77:170",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 71736,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1414:79:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "||",
                                        "rightExpression": {
                                            "commonType": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            },
                                            "id": 71739,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 71737,
                                                "name": "user",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71705,
                                                "src": "1497:4:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "id": 71738,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71657,
                                                "src": "1505:5:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "1497:13:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "1414:96:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 71711,
                                    "id": 71741,
                                    "nodeType": "Return",
                                    "src": "1407:103:170"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "isAuthorized",
                        "nameLocation": "986:12:170",
                        "parameters": {
                            "id": 71708,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71705,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "1007:4:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71743,
                                    "src": "999:12:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71704,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "999:7:170",
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
                                    "id": 71707,
                                    "mutability": "mutable",
                                    "name": "functionSig",
                                    "nameLocation": "1020:11:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71743,
                                    "src": "1013:18:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 71706,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1013:6:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "998:34:170"
                        },
                        "returnParameters": {
                            "id": 71711,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71710,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71743,
                                    "src": "1064:4:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71709,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1064:4:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1063:6:170"
                        },
                        "scope": 71798,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 71779,
                        "nodeType": "FunctionDefinition",
                        "src": "1523:434:170",
                        "nodes": [],
                        "body": {
                            "id": 71778,
                            "nodeType": "Block",
                            "src": "1584:373:170",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "commonType": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "id": 71765,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 71753,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 71750,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1780:3:170",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 71751,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1784:6:170",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1780:10:170",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "id": 71752,
                                                        "name": "owner",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71657,
                                                        "src": "1794:5:170",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "1780:19:170",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "||",
                                                "rightExpression": {
                                                    "arguments": [
                                                        {
                                                            "expression": {
                                                                "id": 71756,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1821:3:170",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 71757,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1825:6:170",
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1821:10:170",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 71760,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "1841:4:170",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Auth_$71798",
                                                                        "typeString": "contract Auth"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Auth_$71798",
                                                                        "typeString": "contract Auth"
                                                                    }
                                                                ],
                                                                "id": 71759,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1833:7:170",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 71758,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1833:7:170",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71761,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1833:13:170",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 71762,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1848:3:170",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 71763,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1852:3:170",
                                                            "memberName": "sig",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1848:7:170",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_bytes4",
                                                                "typeString": "bytes4"
                                                            }
                                                        }
                                                    ],
                                                    "expression": {
                                                        "argumentTypes": [
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            },
                                                            {
                                                                "typeIdentifier": "t_bytes4",
                                                                "typeString": "bytes4"
                                                            }
                                                        ],
                                                        "expression": {
                                                            "id": 71754,
                                                            "name": "authority",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71660,
                                                            "src": "1803:9:170",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_Authority_$71811",
                                                                "typeString": "contract Authority"
                                                            }
                                                        },
                                                        "id": 71755,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1813:7:170",
                                                        "memberName": "canCall",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 71810,
                                                        "src": "1803:17:170",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                            "typeString": "function (address,address,bytes4) view external returns (bool)"
                                                        }
                                                    },
                                                    "id": 71764,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1803:53:170",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "1780:76:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 71749,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "1772:7:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 71766,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1772:85:170",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71767,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1772:85:170"
                                },
                                {
                                    "expression": {
                                        "id": 71770,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71768,
                                            "name": "authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71660,
                                            "src": "1868:9:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$71811",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71769,
                                            "name": "newAuthority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71746,
                                            "src": "1880:12:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$71811",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "src": "1868:24:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$71811",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "id": 71771,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1868:24:170"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 71773,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "1925:3:170",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 71774,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1929:6:170",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "1925:10:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71775,
                                                "name": "newAuthority",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71746,
                                                "src": "1937:12:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$71811",
                                                    "typeString": "contract Authority"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_contract$_Authority_$71811",
                                                    "typeString": "contract Authority"
                                                }
                                            ],
                                            "id": 71772,
                                            "name": "AuthorityUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71655,
                                            "src": "1908:16:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$71811_$returns$__$",
                                                "typeString": "function (address,contract Authority)"
                                            }
                                        },
                                        "id": 71776,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1908:42:170",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71777,
                                    "nodeType": "EmitStatement",
                                    "src": "1903:47:170"
                                }
                            ]
                        },
                        "functionSelector": "7a9e5e4b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setAuthority",
                        "nameLocation": "1532:12:170",
                        "parameters": {
                            "id": 71747,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71746,
                                    "mutability": "mutable",
                                    "name": "newAuthority",
                                    "nameLocation": "1555:12:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71779,
                                    "src": "1545:22:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$71811",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 71745,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71744,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "1545:9:170"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 71811,
                                            "src": "1545:9:170"
                                        },
                                        "referencedDeclaration": 71811,
                                        "src": "1545:9:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$71811",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1544:24:170"
                        },
                        "returnParameters": {
                            "id": 71748,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1584:0:170"
                        },
                        "scope": 71798,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 71797,
                        "nodeType": "FunctionDefinition",
                        "src": "1963:164:170",
                        "nodes": [],
                        "body": {
                            "id": 71796,
                            "nodeType": "Block",
                            "src": "2036:91:170",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 71788,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71786,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71657,
                                            "src": "2046:5:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71787,
                                            "name": "newOwner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71781,
                                            "src": "2054:8:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2046:16:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 71789,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2046:16:170"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 71791,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2099:3:170",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 71792,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2103:6:170",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2099:10:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 71793,
                                                "name": "newOwner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71781,
                                                "src": "2111:8:170",
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
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            ],
                                            "id": 71790,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71648,
                                            "src": "2078:20:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 71794,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2078:42:170",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 71795,
                                    "nodeType": "EmitStatement",
                                    "src": "2073:47:170"
                                }
                            ]
                        },
                        "functionSelector": "f2fde38b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 71784,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 71783,
                                    "name": "requiresAuth",
                                    "nameLocations": [
                                        "2023:12:170"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 71703,
                                    "src": "2023:12:170"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2023:12:170"
                            }
                        ],
                        "name": "transferOwnership",
                        "nameLocation": "1972:17:170",
                        "parameters": {
                            "id": 71782,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71781,
                                    "mutability": "mutable",
                                    "name": "newOwner",
                                    "nameLocation": "1998:8:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71797,
                                    "src": "1990:16:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71780,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1990:7:170",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1989:18:170"
                        },
                        "returnParameters": {
                            "id": 71785,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2036:0:170"
                        },
                        "scope": 71798,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    }
                ],
                "abstract": true,
                "baseContracts": [],
                "canonicalName": "Auth",
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": {
                    "id": 71642,
                    "nodeType": "StructuredDocumentation",
                    "src": "68:301:170",
                    "text": "@notice Provides a flexible and updatable auth pattern which is completely separate from application logic.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    71798
                ],
                "name": "Auth",
                "nameLocation": "387:4:170",
                "scope": 71812,
                "usedErrors": [],
                "usedEvents": [
                    71648,
                    71655
                ]
            },
            {
                "id": 71811,
                "nodeType": "ContractDefinition",
                "src": "2422:154:170",
                "nodes": [
                    {
                        "id": 71810,
                        "nodeType": "FunctionDefinition",
                        "src": "2448:126:170",
                        "nodes": [],
                        "functionSelector": "b7009613",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "canCall",
                        "nameLocation": "2457:7:170",
                        "parameters": {
                            "id": 71806,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71801,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "2482:4:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71810,
                                    "src": "2474:12:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71800,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2474:7:170",
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
                                    "id": 71803,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "2504:6:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71810,
                                    "src": "2496:14:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71802,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2496:7:170",
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
                                    "id": 71805,
                                    "mutability": "mutable",
                                    "name": "functionSig",
                                    "nameLocation": "2527:11:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71810,
                                    "src": "2520:18:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 71804,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2520:6:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2464:80:170"
                        },
                        "returnParameters": {
                            "id": 71809,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71808,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71810,
                                    "src": "2568:4:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71807,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2568:4:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2567:6:170"
                        },
                        "scope": 71811,
                        "stateMutability": "view",
                        "virtual": false,
                        "visibility": "external"
                    }
                ],
                "abstract": false,
                "baseContracts": [],
                "canonicalName": "Authority",
                "contractDependencies": [],
                "contractKind": "interface",
                "documentation": {
                    "id": 71799,
                    "nodeType": "StructuredDocumentation",
                    "src": "2131:291:170",
                    "text": "@notice A generic interface for a contract which provides authorization data to an Auth instance.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    71811
                ],
                "name": "Authority",
                "nameLocation": "2432:9:170",
                "scope": 71812,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "AGPL-3.0-only"
    },
    "id": 170
};
