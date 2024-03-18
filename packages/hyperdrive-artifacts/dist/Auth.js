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
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Provides a flexible and updatable auth pattern which is completely separate from application logic.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/auth/Auth.sol\":\"Auth\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]}},\"version\":1}",
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
        "id": 72168,
        "exportedSymbols": {
            "Auth": [
                72154
            ],
            "Authority": [
                72167
            ]
        },
        "nodeType": "SourceUnit",
        "src": "42:2535:172",
        "nodes": [
            {
                "id": 71997,
                "nodeType": "PragmaDirective",
                "src": "42:24:172",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.8",
                    ".0"
                ]
            },
            {
                "id": 72154,
                "nodeType": "ContractDefinition",
                "src": "369:1760:172",
                "nodes": [
                    {
                        "id": 72004,
                        "nodeType": "EventDefinition",
                        "src": "398:75:172",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
                        "name": "OwnershipTransferred",
                        "nameLocation": "404:20:172",
                        "parameters": {
                            "id": 72003,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72000,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "441:4:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72004,
                                    "src": "425:20:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71999,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "425:7:172",
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
                                    "id": 72002,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newOwner",
                                    "nameLocation": "463:8:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72004,
                                    "src": "447:24:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72001,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "447:7:172",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "424:48:172"
                        }
                    },
                    {
                        "id": 72011,
                        "nodeType": "EventDefinition",
                        "src": "479:77:172",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "a3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198",
                        "name": "AuthorityUpdated",
                        "nameLocation": "485:16:172",
                        "parameters": {
                            "id": 72010,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72006,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "518:4:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72011,
                                    "src": "502:20:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72005,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "502:7:172",
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
                                    "id": 72009,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newAuthority",
                                    "nameLocation": "542:12:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72011,
                                    "src": "524:30:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$72167",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 72008,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 72007,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "524:9:172"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 72167,
                                            "src": "524:9:172"
                                        },
                                        "referencedDeclaration": 72167,
                                        "src": "524:9:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$72167",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "501:54:172"
                        }
                    },
                    {
                        "id": 72013,
                        "nodeType": "VariableDeclaration",
                        "src": "562:20:172",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "8da5cb5b",
                        "mutability": "mutable",
                        "name": "owner",
                        "nameLocation": "577:5:172",
                        "scope": 72154,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 72012,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "562:7:172",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 72016,
                        "nodeType": "VariableDeclaration",
                        "src": "589:26:172",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "bf7e214f",
                        "mutability": "mutable",
                        "name": "authority",
                        "nameLocation": "606:9:172",
                        "scope": 72154,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Authority_$72167",
                            "typeString": "contract Authority"
                        },
                        "typeName": {
                            "id": 72015,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 72014,
                                "name": "Authority",
                                "nameLocations": [
                                    "589:9:172"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 72167,
                                "src": "589:9:172"
                            },
                            "referencedDeclaration": 72167,
                            "src": "589:9:172",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Authority_$72167",
                                "typeString": "contract Authority"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 72045,
                        "nodeType": "FunctionDefinition",
                        "src": "622:224:172",
                        "nodes": [],
                        "body": {
                            "id": 72044,
                            "nodeType": "Block",
                            "src": "672:174:172",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 72026,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 72024,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72013,
                                            "src": "682:5:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 72025,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72018,
                                            "src": "690:6:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "682:14:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 72027,
                                    "nodeType": "ExpressionStatement",
                                    "src": "682:14:172"
                                },
                                {
                                    "expression": {
                                        "id": 72030,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 72028,
                                            "name": "authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72016,
                                            "src": "706:9:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$72167",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 72029,
                                            "name": "_authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72021,
                                            "src": "718:10:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$72167",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "src": "706:22:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$72167",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "id": 72031,
                                    "nodeType": "ExpressionStatement",
                                    "src": "706:22:172"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 72033,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "765:3:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 72034,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "769:6:172",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "765:10:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72035,
                                                "name": "_owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72018,
                                                "src": "777:6:172",
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
                                            "id": 72032,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72004,
                                            "src": "744:20:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 72036,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "744:40:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72037,
                                    "nodeType": "EmitStatement",
                                    "src": "739:45:172"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 72039,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "816:3:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 72040,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "820:6:172",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "816:10:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72041,
                                                "name": "_authority",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72021,
                                                "src": "828:10:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$72167",
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
                                                    "typeIdentifier": "t_contract$_Authority_$72167",
                                                    "typeString": "contract Authority"
                                                }
                                            ],
                                            "id": 72038,
                                            "name": "AuthorityUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72011,
                                            "src": "799:16:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$72167_$returns$__$",
                                                "typeString": "function (address,contract Authority)"
                                            }
                                        },
                                        "id": 72042,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "799:40:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72043,
                                    "nodeType": "EmitStatement",
                                    "src": "794:45:172"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 72022,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72018,
                                    "mutability": "mutable",
                                    "name": "_owner",
                                    "nameLocation": "642:6:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72045,
                                    "src": "634:14:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72017,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "634:7:172",
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
                                    "id": 72021,
                                    "mutability": "mutable",
                                    "name": "_authority",
                                    "nameLocation": "660:10:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72045,
                                    "src": "650:20:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$72167",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 72020,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 72019,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "650:9:172"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 72167,
                                            "src": "650:9:172"
                                        },
                                        "referencedDeclaration": 72167,
                                        "src": "650:9:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$72167",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "633:38:172"
                        },
                        "returnParameters": {
                            "id": 72023,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "672:0:172"
                        },
                        "scope": 72154,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 72059,
                        "nodeType": "ModifierDefinition",
                        "src": "852:119:172",
                        "nodes": [],
                        "body": {
                            "id": 72058,
                            "nodeType": "Block",
                            "src": "884:87:172",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 72049,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "915:3:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 72050,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "919:6:172",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "915:10:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 72051,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "927:3:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 72052,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "931:3:172",
                                                        "memberName": "sig",
                                                        "nodeType": "MemberAccess",
                                                        "src": "927:7:172",
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
                                                    "id": 72048,
                                                    "name": "isAuthorized",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 72099,
                                                    "src": "902:12:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                        "typeString": "function (address,bytes4) view returns (bool)"
                                                    }
                                                },
                                                "id": 72053,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "902:33:172",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "554e415554484f52495a4544",
                                                "id": 72054,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "937:14:172",
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
                                            "id": 72047,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "894:7:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 72055,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "894:58:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72056,
                                    "nodeType": "ExpressionStatement",
                                    "src": "894:58:172"
                                },
                                {
                                    "id": 72057,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "963:1:172"
                                }
                            ]
                        },
                        "name": "requiresAuth",
                        "nameLocation": "861:12:172",
                        "parameters": {
                            "id": 72046,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "873:2:172"
                        },
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 72099,
                        "nodeType": "FunctionDefinition",
                        "src": "977:540:172",
                        "nodes": [],
                        "body": {
                            "id": 72098,
                            "nodeType": "Block",
                            "src": "1070:447:172",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        72070
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 72070,
                                            "mutability": "mutable",
                                            "name": "auth",
                                            "nameLocation": "1090:4:172",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 72098,
                                            "src": "1080:14:172",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$72167",
                                                "typeString": "contract Authority"
                                            },
                                            "typeName": {
                                                "id": 72069,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 72068,
                                                    "name": "Authority",
                                                    "nameLocations": [
                                                        "1080:9:172"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 72167,
                                                    "src": "1080:9:172"
                                                },
                                                "referencedDeclaration": 72167,
                                                "src": "1080:9:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$72167",
                                                    "typeString": "contract Authority"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 72072,
                                    "initialValue": {
                                        "id": 72071,
                                        "name": "authority",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 72016,
                                        "src": "1097:9:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$72167",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1080:26:172"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 72096,
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
                                                    "id": 72091,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "id": 72081,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 72075,
                                                                    "name": "auth",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 72070,
                                                                    "src": "1423:4:172",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Authority_$72167",
                                                                        "typeString": "contract Authority"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Authority_$72167",
                                                                        "typeString": "contract Authority"
                                                                    }
                                                                ],
                                                                "id": 72074,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1415:7:172",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 72073,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1415:7:172",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 72076,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1415:13:172",
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
                                                                    "id": 72079,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "1440:1:172",
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
                                                                "id": 72078,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1432:7:172",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 72077,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1432:7:172",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 72080,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1432:10:172",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "1415:27:172",
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
                                                                "id": 72084,
                                                                "name": "user",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 72061,
                                                                "src": "1459:4:172",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 72087,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "1473:4:172",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_Auth_$72154",
                                                                            "typeString": "contract Auth"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_Auth_$72154",
                                                                            "typeString": "contract Auth"
                                                                        }
                                                                    ],
                                                                    "id": 72086,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "1465:7:172",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 72085,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "1465:7:172",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 72088,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1465:13:172",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 72089,
                                                                "name": "functionSig",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 72063,
                                                                "src": "1480:11:172",
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
                                                                "id": 72082,
                                                                "name": "auth",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 72070,
                                                                "src": "1446:4:172",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_Authority_$72167",
                                                                    "typeString": "contract Authority"
                                                                }
                                                            },
                                                            "id": 72083,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1451:7:172",
                                                            "memberName": "canCall",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 72166,
                                                            "src": "1446:12:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                                "typeString": "function (address,address,bytes4) view external returns (bool)"
                                                            }
                                                        },
                                                        "id": 72090,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1446:46:172",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "1415:77:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 72092,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1414:79:172",
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
                                            "id": 72095,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 72093,
                                                "name": "user",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72061,
                                                "src": "1497:4:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "id": 72094,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72013,
                                                "src": "1505:5:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "1497:13:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "1414:96:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 72067,
                                    "id": 72097,
                                    "nodeType": "Return",
                                    "src": "1407:103:172"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "isAuthorized",
                        "nameLocation": "986:12:172",
                        "parameters": {
                            "id": 72064,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72061,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "1007:4:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72099,
                                    "src": "999:12:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72060,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "999:7:172",
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
                                    "id": 72063,
                                    "mutability": "mutable",
                                    "name": "functionSig",
                                    "nameLocation": "1020:11:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72099,
                                    "src": "1013:18:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 72062,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1013:6:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "998:34:172"
                        },
                        "returnParameters": {
                            "id": 72067,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72066,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72099,
                                    "src": "1064:4:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 72065,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1064:4:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1063:6:172"
                        },
                        "scope": 72154,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 72135,
                        "nodeType": "FunctionDefinition",
                        "src": "1523:434:172",
                        "nodes": [],
                        "body": {
                            "id": 72134,
                            "nodeType": "Block",
                            "src": "1584:373:172",
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
                                                "id": 72121,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 72109,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 72106,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1780:3:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 72107,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1784:6:172",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1780:10:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "id": 72108,
                                                        "name": "owner",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 72013,
                                                        "src": "1794:5:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "1780:19:172",
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
                                                                "id": 72112,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1821:3:172",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 72113,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1825:6:172",
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1821:10:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 72116,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "1841:4:172",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Auth_$72154",
                                                                        "typeString": "contract Auth"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Auth_$72154",
                                                                        "typeString": "contract Auth"
                                                                    }
                                                                ],
                                                                "id": 72115,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1833:7:172",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 72114,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1833:7:172",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 72117,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1833:13:172",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 72118,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1848:3:172",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 72119,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1852:3:172",
                                                            "memberName": "sig",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1848:7:172",
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
                                                            "id": 72110,
                                                            "name": "authority",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 72016,
                                                            "src": "1803:9:172",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_Authority_$72167",
                                                                "typeString": "contract Authority"
                                                            }
                                                        },
                                                        "id": 72111,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1813:7:172",
                                                        "memberName": "canCall",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 72166,
                                                        "src": "1803:17:172",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                            "typeString": "function (address,address,bytes4) view external returns (bool)"
                                                        }
                                                    },
                                                    "id": 72120,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1803:53:172",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "1780:76:172",
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
                                            "id": 72105,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "1772:7:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 72122,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1772:85:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72123,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1772:85:172"
                                },
                                {
                                    "expression": {
                                        "id": 72126,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 72124,
                                            "name": "authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72016,
                                            "src": "1868:9:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$72167",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 72125,
                                            "name": "newAuthority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72102,
                                            "src": "1880:12:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$72167",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "src": "1868:24:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$72167",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "id": 72127,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1868:24:172"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 72129,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "1925:3:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 72130,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1929:6:172",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "1925:10:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72131,
                                                "name": "newAuthority",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72102,
                                                "src": "1937:12:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$72167",
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
                                                    "typeIdentifier": "t_contract$_Authority_$72167",
                                                    "typeString": "contract Authority"
                                                }
                                            ],
                                            "id": 72128,
                                            "name": "AuthorityUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72011,
                                            "src": "1908:16:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$72167_$returns$__$",
                                                "typeString": "function (address,contract Authority)"
                                            }
                                        },
                                        "id": 72132,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1908:42:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72133,
                                    "nodeType": "EmitStatement",
                                    "src": "1903:47:172"
                                }
                            ]
                        },
                        "functionSelector": "7a9e5e4b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setAuthority",
                        "nameLocation": "1532:12:172",
                        "parameters": {
                            "id": 72103,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72102,
                                    "mutability": "mutable",
                                    "name": "newAuthority",
                                    "nameLocation": "1555:12:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72135,
                                    "src": "1545:22:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$72167",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 72101,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 72100,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "1545:9:172"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 72167,
                                            "src": "1545:9:172"
                                        },
                                        "referencedDeclaration": 72167,
                                        "src": "1545:9:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$72167",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1544:24:172"
                        },
                        "returnParameters": {
                            "id": 72104,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1584:0:172"
                        },
                        "scope": 72154,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 72153,
                        "nodeType": "FunctionDefinition",
                        "src": "1963:164:172",
                        "nodes": [],
                        "body": {
                            "id": 72152,
                            "nodeType": "Block",
                            "src": "2036:91:172",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 72144,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 72142,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72013,
                                            "src": "2046:5:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 72143,
                                            "name": "newOwner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72137,
                                            "src": "2054:8:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2046:16:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 72145,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2046:16:172"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 72147,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2099:3:172",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 72148,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2103:6:172",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2099:10:172",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 72149,
                                                "name": "newOwner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 72137,
                                                "src": "2111:8:172",
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
                                            "id": 72146,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 72004,
                                            "src": "2078:20:172",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 72150,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2078:42:172",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 72151,
                                    "nodeType": "EmitStatement",
                                    "src": "2073:47:172"
                                }
                            ]
                        },
                        "functionSelector": "f2fde38b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 72140,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 72139,
                                    "name": "requiresAuth",
                                    "nameLocations": [
                                        "2023:12:172"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 72059,
                                    "src": "2023:12:172"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2023:12:172"
                            }
                        ],
                        "name": "transferOwnership",
                        "nameLocation": "1972:17:172",
                        "parameters": {
                            "id": 72138,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72137,
                                    "mutability": "mutable",
                                    "name": "newOwner",
                                    "nameLocation": "1998:8:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72153,
                                    "src": "1990:16:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72136,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1990:7:172",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1989:18:172"
                        },
                        "returnParameters": {
                            "id": 72141,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2036:0:172"
                        },
                        "scope": 72154,
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
                    "id": 71998,
                    "nodeType": "StructuredDocumentation",
                    "src": "68:301:172",
                    "text": "@notice Provides a flexible and updatable auth pattern which is completely separate from application logic.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    72154
                ],
                "name": "Auth",
                "nameLocation": "387:4:172",
                "scope": 72168,
                "usedErrors": [],
                "usedEvents": [
                    72004,
                    72011
                ]
            },
            {
                "id": 72167,
                "nodeType": "ContractDefinition",
                "src": "2422:154:172",
                "nodes": [
                    {
                        "id": 72166,
                        "nodeType": "FunctionDefinition",
                        "src": "2448:126:172",
                        "nodes": [],
                        "functionSelector": "b7009613",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "canCall",
                        "nameLocation": "2457:7:172",
                        "parameters": {
                            "id": 72162,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72157,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "2482:4:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72166,
                                    "src": "2474:12:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72156,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2474:7:172",
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
                                    "id": 72159,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "2504:6:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72166,
                                    "src": "2496:14:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 72158,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2496:7:172",
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
                                    "id": 72161,
                                    "mutability": "mutable",
                                    "name": "functionSig",
                                    "nameLocation": "2527:11:172",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72166,
                                    "src": "2520:18:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 72160,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2520:6:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2464:80:172"
                        },
                        "returnParameters": {
                            "id": 72165,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 72164,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 72166,
                                    "src": "2568:4:172",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 72163,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2568:4:172",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2567:6:172"
                        },
                        "scope": 72167,
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
                    "id": 72155,
                    "nodeType": "StructuredDocumentation",
                    "src": "2131:291:172",
                    "text": "@notice A generic interface for a contract which provides authorization data to an Auth instance.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    72167
                ],
                "name": "Authority",
                "nameLocation": "2432:9:172",
                "scope": 72168,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "AGPL-3.0-only"
    },
    "id": 172
};
