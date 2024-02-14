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
        "id": 67531,
        "exportedSymbols": {
            "Auth": [
                67517
            ],
            "Authority": [
                67530
            ]
        },
        "nodeType": "SourceUnit",
        "src": "42:2535:121",
        "nodes": [
            {
                "id": 67360,
                "nodeType": "PragmaDirective",
                "src": "42:24:121",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.8",
                    ".0"
                ]
            },
            {
                "id": 67517,
                "nodeType": "ContractDefinition",
                "src": "369:1760:121",
                "nodes": [
                    {
                        "id": 67367,
                        "nodeType": "EventDefinition",
                        "src": "398:75:121",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
                        "name": "OwnershipTransferred",
                        "nameLocation": "404:20:121",
                        "parameters": {
                            "id": 67366,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67363,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "441:4:121",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67367,
                                    "src": "425:20:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67362,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "425:7:121",
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
                                    "id": 67365,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newOwner",
                                    "nameLocation": "463:8:121",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67367,
                                    "src": "447:24:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67364,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "447:7:121",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "424:48:121"
                        }
                    },
                    {
                        "id": 67374,
                        "nodeType": "EventDefinition",
                        "src": "479:77:121",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "a3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198",
                        "name": "AuthorityUpdated",
                        "nameLocation": "485:16:121",
                        "parameters": {
                            "id": 67373,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67369,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "518:4:121",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67374,
                                    "src": "502:20:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67368,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "502:7:121",
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
                                    "id": 67372,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newAuthority",
                                    "nameLocation": "542:12:121",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67374,
                                    "src": "524:30:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$67530",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 67371,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 67370,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "524:9:121"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 67530,
                                            "src": "524:9:121"
                                        },
                                        "referencedDeclaration": 67530,
                                        "src": "524:9:121",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$67530",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "501:54:121"
                        }
                    },
                    {
                        "id": 67376,
                        "nodeType": "VariableDeclaration",
                        "src": "562:20:121",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "8da5cb5b",
                        "mutability": "mutable",
                        "name": "owner",
                        "nameLocation": "577:5:121",
                        "scope": 67517,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 67375,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "562:7:121",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 67379,
                        "nodeType": "VariableDeclaration",
                        "src": "589:26:121",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "bf7e214f",
                        "mutability": "mutable",
                        "name": "authority",
                        "nameLocation": "606:9:121",
                        "scope": 67517,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Authority_$67530",
                            "typeString": "contract Authority"
                        },
                        "typeName": {
                            "id": 67378,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 67377,
                                "name": "Authority",
                                "nameLocations": [
                                    "589:9:121"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 67530,
                                "src": "589:9:121"
                            },
                            "referencedDeclaration": 67530,
                            "src": "589:9:121",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Authority_$67530",
                                "typeString": "contract Authority"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 67408,
                        "nodeType": "FunctionDefinition",
                        "src": "622:224:121",
                        "nodes": [],
                        "body": {
                            "id": 67407,
                            "nodeType": "Block",
                            "src": "672:174:121",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 67389,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67387,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67376,
                                            "src": "682:5:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67388,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67381,
                                            "src": "690:6:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "682:14:121",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 67390,
                                    "nodeType": "ExpressionStatement",
                                    "src": "682:14:121"
                                },
                                {
                                    "expression": {
                                        "id": 67393,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67391,
                                            "name": "authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67379,
                                            "src": "706:9:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$67530",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67392,
                                            "name": "_authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67384,
                                            "src": "718:10:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$67530",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "src": "706:22:121",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$67530",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "id": 67394,
                                    "nodeType": "ExpressionStatement",
                                    "src": "706:22:121"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 67396,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "765:3:121",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 67397,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "769:6:121",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "765:10:121",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67398,
                                                "name": "_owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67381,
                                                "src": "777:6:121",
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
                                            "id": 67395,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67367,
                                            "src": "744:20:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 67399,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "744:40:121",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67400,
                                    "nodeType": "EmitStatement",
                                    "src": "739:45:121"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 67402,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "816:3:121",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 67403,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "820:6:121",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "816:10:121",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67404,
                                                "name": "_authority",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67384,
                                                "src": "828:10:121",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$67530",
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
                                                    "typeIdentifier": "t_contract$_Authority_$67530",
                                                    "typeString": "contract Authority"
                                                }
                                            ],
                                            "id": 67401,
                                            "name": "AuthorityUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67374,
                                            "src": "799:16:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$67530_$returns$__$",
                                                "typeString": "function (address,contract Authority)"
                                            }
                                        },
                                        "id": 67405,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "799:40:121",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67406,
                                    "nodeType": "EmitStatement",
                                    "src": "794:45:121"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 67385,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67381,
                                    "mutability": "mutable",
                                    "name": "_owner",
                                    "nameLocation": "642:6:121",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67408,
                                    "src": "634:14:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67380,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "634:7:121",
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
                                    "id": 67384,
                                    "mutability": "mutable",
                                    "name": "_authority",
                                    "nameLocation": "660:10:121",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67408,
                                    "src": "650:20:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$67530",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 67383,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 67382,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "650:9:121"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 67530,
                                            "src": "650:9:121"
                                        },
                                        "referencedDeclaration": 67530,
                                        "src": "650:9:121",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$67530",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "633:38:121"
                        },
                        "returnParameters": {
                            "id": 67386,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "672:0:121"
                        },
                        "scope": 67517,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 67422,
                        "nodeType": "ModifierDefinition",
                        "src": "852:119:121",
                        "nodes": [],
                        "body": {
                            "id": 67421,
                            "nodeType": "Block",
                            "src": "884:87:121",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 67412,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "915:3:121",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 67413,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "919:6:121",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "915:10:121",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 67414,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "927:3:121",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 67415,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "931:3:121",
                                                        "memberName": "sig",
                                                        "nodeType": "MemberAccess",
                                                        "src": "927:7:121",
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
                                                    "id": 67411,
                                                    "name": "isAuthorized",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67462,
                                                    "src": "902:12:121",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                        "typeString": "function (address,bytes4) view returns (bool)"
                                                    }
                                                },
                                                "id": 67416,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "902:33:121",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "554e415554484f52495a4544",
                                                "id": 67417,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "937:14:121",
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
                                            "id": 67410,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "894:7:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 67418,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "894:58:121",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67419,
                                    "nodeType": "ExpressionStatement",
                                    "src": "894:58:121"
                                },
                                {
                                    "id": 67420,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "963:1:121"
                                }
                            ]
                        },
                        "name": "requiresAuth",
                        "nameLocation": "861:12:121",
                        "parameters": {
                            "id": 67409,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "873:2:121"
                        },
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 67462,
                        "nodeType": "FunctionDefinition",
                        "src": "977:540:121",
                        "nodes": [],
                        "body": {
                            "id": 67461,
                            "nodeType": "Block",
                            "src": "1070:447:121",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        67433
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 67433,
                                            "mutability": "mutable",
                                            "name": "auth",
                                            "nameLocation": "1090:4:121",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 67461,
                                            "src": "1080:14:121",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$67530",
                                                "typeString": "contract Authority"
                                            },
                                            "typeName": {
                                                "id": 67432,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 67431,
                                                    "name": "Authority",
                                                    "nameLocations": [
                                                        "1080:9:121"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 67530,
                                                    "src": "1080:9:121"
                                                },
                                                "referencedDeclaration": 67530,
                                                "src": "1080:9:121",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$67530",
                                                    "typeString": "contract Authority"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 67435,
                                    "initialValue": {
                                        "id": 67434,
                                        "name": "authority",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 67379,
                                        "src": "1097:9:121",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$67530",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1080:26:121"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 67459,
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
                                                    "id": 67454,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "id": 67444,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 67438,
                                                                    "name": "auth",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 67433,
                                                                    "src": "1423:4:121",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Authority_$67530",
                                                                        "typeString": "contract Authority"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Authority_$67530",
                                                                        "typeString": "contract Authority"
                                                                    }
                                                                ],
                                                                "id": 67437,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1415:7:121",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 67436,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1415:7:121",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 67439,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1415:13:121",
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
                                                                    "id": 67442,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "1440:1:121",
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
                                                                "id": 67441,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1432:7:121",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 67440,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1432:7:121",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 67443,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1432:10:121",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "1415:27:121",
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
                                                                "id": 67447,
                                                                "name": "user",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 67424,
                                                                "src": "1459:4:121",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 67450,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "1473:4:121",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_Auth_$67517",
                                                                            "typeString": "contract Auth"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_Auth_$67517",
                                                                            "typeString": "contract Auth"
                                                                        }
                                                                    ],
                                                                    "id": 67449,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "1465:7:121",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 67448,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "1465:7:121",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 67451,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1465:13:121",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 67452,
                                                                "name": "functionSig",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 67426,
                                                                "src": "1480:11:121",
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
                                                                "id": 67445,
                                                                "name": "auth",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 67433,
                                                                "src": "1446:4:121",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_Authority_$67530",
                                                                    "typeString": "contract Authority"
                                                                }
                                                            },
                                                            "id": 67446,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1451:7:121",
                                                            "memberName": "canCall",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 67529,
                                                            "src": "1446:12:121",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                                "typeString": "function (address,address,bytes4) view external returns (bool)"
                                                            }
                                                        },
                                                        "id": 67453,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1446:46:121",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "1415:77:121",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 67455,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1414:79:121",
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
                                            "id": 67458,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 67456,
                                                "name": "user",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67424,
                                                "src": "1497:4:121",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "id": 67457,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67376,
                                                "src": "1505:5:121",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "1497:13:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "1414:96:121",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 67430,
                                    "id": 67460,
                                    "nodeType": "Return",
                                    "src": "1407:103:121"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "isAuthorized",
                        "nameLocation": "986:12:121",
                        "parameters": {
                            "id": 67427,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67424,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "1007:4:121",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67462,
                                    "src": "999:12:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67423,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "999:7:121",
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
                                    "id": 67426,
                                    "mutability": "mutable",
                                    "name": "functionSig",
                                    "nameLocation": "1020:11:121",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67462,
                                    "src": "1013:18:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 67425,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1013:6:121",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "998:34:121"
                        },
                        "returnParameters": {
                            "id": 67430,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67429,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67462,
                                    "src": "1064:4:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 67428,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1064:4:121",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1063:6:121"
                        },
                        "scope": 67517,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 67498,
                        "nodeType": "FunctionDefinition",
                        "src": "1523:434:121",
                        "nodes": [],
                        "body": {
                            "id": 67497,
                            "nodeType": "Block",
                            "src": "1584:373:121",
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
                                                "id": 67484,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 67472,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 67469,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1780:3:121",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 67470,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1784:6:121",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1780:10:121",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "id": 67471,
                                                        "name": "owner",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67376,
                                                        "src": "1794:5:121",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "1780:19:121",
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
                                                                "id": 67475,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1821:3:121",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 67476,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1825:6:121",
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1821:10:121",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 67479,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "1841:4:121",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Auth_$67517",
                                                                        "typeString": "contract Auth"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Auth_$67517",
                                                                        "typeString": "contract Auth"
                                                                    }
                                                                ],
                                                                "id": 67478,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1833:7:121",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 67477,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1833:7:121",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 67480,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1833:13:121",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 67481,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1848:3:121",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 67482,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1852:3:121",
                                                            "memberName": "sig",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1848:7:121",
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
                                                            "id": 67473,
                                                            "name": "authority",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 67379,
                                                            "src": "1803:9:121",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_Authority_$67530",
                                                                "typeString": "contract Authority"
                                                            }
                                                        },
                                                        "id": 67474,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1813:7:121",
                                                        "memberName": "canCall",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 67529,
                                                        "src": "1803:17:121",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                            "typeString": "function (address,address,bytes4) view external returns (bool)"
                                                        }
                                                    },
                                                    "id": 67483,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1803:53:121",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "1780:76:121",
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
                                            "id": 67468,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "1772:7:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 67485,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1772:85:121",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67486,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1772:85:121"
                                },
                                {
                                    "expression": {
                                        "id": 67489,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67487,
                                            "name": "authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67379,
                                            "src": "1868:9:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$67530",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67488,
                                            "name": "newAuthority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67465,
                                            "src": "1880:12:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$67530",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "src": "1868:24:121",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$67530",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "id": 67490,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1868:24:121"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 67492,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "1925:3:121",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 67493,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1929:6:121",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "1925:10:121",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67494,
                                                "name": "newAuthority",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67465,
                                                "src": "1937:12:121",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$67530",
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
                                                    "typeIdentifier": "t_contract$_Authority_$67530",
                                                    "typeString": "contract Authority"
                                                }
                                            ],
                                            "id": 67491,
                                            "name": "AuthorityUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67374,
                                            "src": "1908:16:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$67530_$returns$__$",
                                                "typeString": "function (address,contract Authority)"
                                            }
                                        },
                                        "id": 67495,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1908:42:121",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67496,
                                    "nodeType": "EmitStatement",
                                    "src": "1903:47:121"
                                }
                            ]
                        },
                        "functionSelector": "7a9e5e4b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setAuthority",
                        "nameLocation": "1532:12:121",
                        "parameters": {
                            "id": 67466,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67465,
                                    "mutability": "mutable",
                                    "name": "newAuthority",
                                    "nameLocation": "1555:12:121",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67498,
                                    "src": "1545:22:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$67530",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 67464,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 67463,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "1545:9:121"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 67530,
                                            "src": "1545:9:121"
                                        },
                                        "referencedDeclaration": 67530,
                                        "src": "1545:9:121",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$67530",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1544:24:121"
                        },
                        "returnParameters": {
                            "id": 67467,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1584:0:121"
                        },
                        "scope": 67517,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 67516,
                        "nodeType": "FunctionDefinition",
                        "src": "1963:164:121",
                        "nodes": [],
                        "body": {
                            "id": 67515,
                            "nodeType": "Block",
                            "src": "2036:91:121",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 67507,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67505,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67376,
                                            "src": "2046:5:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67506,
                                            "name": "newOwner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67500,
                                            "src": "2054:8:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2046:16:121",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 67508,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2046:16:121"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 67510,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2099:3:121",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 67511,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2103:6:121",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2099:10:121",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67512,
                                                "name": "newOwner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67500,
                                                "src": "2111:8:121",
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
                                            "id": 67509,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67367,
                                            "src": "2078:20:121",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 67513,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2078:42:121",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67514,
                                    "nodeType": "EmitStatement",
                                    "src": "2073:47:121"
                                }
                            ]
                        },
                        "functionSelector": "f2fde38b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 67503,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 67502,
                                    "name": "requiresAuth",
                                    "nameLocations": [
                                        "2023:12:121"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 67422,
                                    "src": "2023:12:121"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2023:12:121"
                            }
                        ],
                        "name": "transferOwnership",
                        "nameLocation": "1972:17:121",
                        "parameters": {
                            "id": 67501,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67500,
                                    "mutability": "mutable",
                                    "name": "newOwner",
                                    "nameLocation": "1998:8:121",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67516,
                                    "src": "1990:16:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67499,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1990:7:121",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1989:18:121"
                        },
                        "returnParameters": {
                            "id": 67504,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2036:0:121"
                        },
                        "scope": 67517,
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
                    "id": 67361,
                    "nodeType": "StructuredDocumentation",
                    "src": "68:301:121",
                    "text": "@notice Provides a flexible and updatable auth pattern which is completely separate from application logic.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    67517
                ],
                "name": "Auth",
                "nameLocation": "387:4:121",
                "scope": 67531,
                "usedErrors": [],
                "usedEvents": [
                    67367,
                    67374
                ]
            },
            {
                "id": 67530,
                "nodeType": "ContractDefinition",
                "src": "2422:154:121",
                "nodes": [
                    {
                        "id": 67529,
                        "nodeType": "FunctionDefinition",
                        "src": "2448:126:121",
                        "nodes": [],
                        "functionSelector": "b7009613",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "canCall",
                        "nameLocation": "2457:7:121",
                        "parameters": {
                            "id": 67525,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67520,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "2482:4:121",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67529,
                                    "src": "2474:12:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67519,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2474:7:121",
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
                                    "id": 67522,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "2504:6:121",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67529,
                                    "src": "2496:14:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67521,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2496:7:121",
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
                                    "id": 67524,
                                    "mutability": "mutable",
                                    "name": "functionSig",
                                    "nameLocation": "2527:11:121",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67529,
                                    "src": "2520:18:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 67523,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2520:6:121",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2464:80:121"
                        },
                        "returnParameters": {
                            "id": 67528,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67527,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67529,
                                    "src": "2568:4:121",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 67526,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2568:4:121",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2567:6:121"
                        },
                        "scope": 67530,
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
                    "id": 67518,
                    "nodeType": "StructuredDocumentation",
                    "src": "2131:291:121",
                    "text": "@notice A generic interface for a contract which provides authorization data to an Auth instance.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    67530
                ],
                "name": "Authority",
                "nameLocation": "2432:9:121",
                "scope": 67531,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "AGPL-3.0-only"
    },
    "id": 121
};
