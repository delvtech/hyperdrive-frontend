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
        "id": 67231,
        "exportedSymbols": {
            "Auth": [
                67217
            ],
            "Authority": [
                67230
            ]
        },
        "nodeType": "SourceUnit",
        "src": "42:2535:122",
        "nodes": [
            {
                "id": 67060,
                "nodeType": "PragmaDirective",
                "src": "42:24:122",
                "nodes": [],
                "literals": [
                    "solidity",
                    ">=",
                    "0.8",
                    ".0"
                ]
            },
            {
                "id": 67217,
                "nodeType": "ContractDefinition",
                "src": "369:1760:122",
                "nodes": [
                    {
                        "id": 67067,
                        "nodeType": "EventDefinition",
                        "src": "398:75:122",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
                        "name": "OwnershipTransferred",
                        "nameLocation": "404:20:122",
                        "parameters": {
                            "id": 67066,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67063,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "441:4:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67067,
                                    "src": "425:20:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67062,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "425:7:122",
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
                                    "id": 67065,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newOwner",
                                    "nameLocation": "463:8:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67067,
                                    "src": "447:24:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67064,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "447:7:122",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "424:48:122"
                        }
                    },
                    {
                        "id": 67074,
                        "nodeType": "EventDefinition",
                        "src": "479:77:122",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "a3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198",
                        "name": "AuthorityUpdated",
                        "nameLocation": "485:16:122",
                        "parameters": {
                            "id": 67073,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67069,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "518:4:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67074,
                                    "src": "502:20:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67068,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "502:7:122",
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
                                    "id": 67072,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newAuthority",
                                    "nameLocation": "542:12:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67074,
                                    "src": "524:30:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$67230",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 67071,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 67070,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "524:9:122"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 67230,
                                            "src": "524:9:122"
                                        },
                                        "referencedDeclaration": 67230,
                                        "src": "524:9:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$67230",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "501:54:122"
                        }
                    },
                    {
                        "id": 67076,
                        "nodeType": "VariableDeclaration",
                        "src": "562:20:122",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "8da5cb5b",
                        "mutability": "mutable",
                        "name": "owner",
                        "nameLocation": "577:5:122",
                        "scope": 67217,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 67075,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "562:7:122",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 67079,
                        "nodeType": "VariableDeclaration",
                        "src": "589:26:122",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "bf7e214f",
                        "mutability": "mutable",
                        "name": "authority",
                        "nameLocation": "606:9:122",
                        "scope": 67217,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Authority_$67230",
                            "typeString": "contract Authority"
                        },
                        "typeName": {
                            "id": 67078,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 67077,
                                "name": "Authority",
                                "nameLocations": [
                                    "589:9:122"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 67230,
                                "src": "589:9:122"
                            },
                            "referencedDeclaration": 67230,
                            "src": "589:9:122",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Authority_$67230",
                                "typeString": "contract Authority"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 67108,
                        "nodeType": "FunctionDefinition",
                        "src": "622:224:122",
                        "nodes": [],
                        "body": {
                            "id": 67107,
                            "nodeType": "Block",
                            "src": "672:174:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 67089,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67087,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67076,
                                            "src": "682:5:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67088,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67081,
                                            "src": "690:6:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "682:14:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 67090,
                                    "nodeType": "ExpressionStatement",
                                    "src": "682:14:122"
                                },
                                {
                                    "expression": {
                                        "id": 67093,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67091,
                                            "name": "authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67079,
                                            "src": "706:9:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$67230",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67092,
                                            "name": "_authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67084,
                                            "src": "718:10:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$67230",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "src": "706:22:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$67230",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "id": 67094,
                                    "nodeType": "ExpressionStatement",
                                    "src": "706:22:122"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 67096,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "765:3:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 67097,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "769:6:122",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "765:10:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67098,
                                                "name": "_owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67081,
                                                "src": "777:6:122",
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
                                            "id": 67095,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67067,
                                            "src": "744:20:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 67099,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "744:40:122",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67100,
                                    "nodeType": "EmitStatement",
                                    "src": "739:45:122"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 67102,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "816:3:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 67103,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "820:6:122",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "816:10:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67104,
                                                "name": "_authority",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67084,
                                                "src": "828:10:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$67230",
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
                                                    "typeIdentifier": "t_contract$_Authority_$67230",
                                                    "typeString": "contract Authority"
                                                }
                                            ],
                                            "id": 67101,
                                            "name": "AuthorityUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67074,
                                            "src": "799:16:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$67230_$returns$__$",
                                                "typeString": "function (address,contract Authority)"
                                            }
                                        },
                                        "id": 67105,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "799:40:122",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67106,
                                    "nodeType": "EmitStatement",
                                    "src": "794:45:122"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "constructor",
                        "modifiers": [],
                        "name": "",
                        "nameLocation": "-1:-1:-1",
                        "parameters": {
                            "id": 67085,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67081,
                                    "mutability": "mutable",
                                    "name": "_owner",
                                    "nameLocation": "642:6:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67108,
                                    "src": "634:14:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67080,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "634:7:122",
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
                                    "id": 67084,
                                    "mutability": "mutable",
                                    "name": "_authority",
                                    "nameLocation": "660:10:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67108,
                                    "src": "650:20:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$67230",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 67083,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 67082,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "650:9:122"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 67230,
                                            "src": "650:9:122"
                                        },
                                        "referencedDeclaration": 67230,
                                        "src": "650:9:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$67230",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "633:38:122"
                        },
                        "returnParameters": {
                            "id": 67086,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "672:0:122"
                        },
                        "scope": 67217,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 67122,
                        "nodeType": "ModifierDefinition",
                        "src": "852:119:122",
                        "nodes": [],
                        "body": {
                            "id": 67121,
                            "nodeType": "Block",
                            "src": "884:87:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "arguments": [
                                            {
                                                "arguments": [
                                                    {
                                                        "expression": {
                                                            "id": 67112,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "915:3:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 67113,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "919:6:122",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "915:10:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    {
                                                        "expression": {
                                                            "id": 67114,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "927:3:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 67115,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "931:3:122",
                                                        "memberName": "sig",
                                                        "nodeType": "MemberAccess",
                                                        "src": "927:7:122",
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
                                                    "id": 67111,
                                                    "name": "isAuthorized",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 67162,
                                                    "src": "902:12:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                        "typeString": "function (address,bytes4) view returns (bool)"
                                                    }
                                                },
                                                "id": 67116,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "functionCall",
                                                "lValueRequested": false,
                                                "nameLocations": [],
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "902:33:122",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            },
                                            {
                                                "hexValue": "554e415554484f52495a4544",
                                                "id": 67117,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "string",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "937:14:122",
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
                                            "id": 67110,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "894:7:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                "typeString": "function (bool,string memory) pure"
                                            }
                                        },
                                        "id": 67118,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "894:58:122",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67119,
                                    "nodeType": "ExpressionStatement",
                                    "src": "894:58:122"
                                },
                                {
                                    "id": 67120,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "963:1:122"
                                }
                            ]
                        },
                        "name": "requiresAuth",
                        "nameLocation": "861:12:122",
                        "parameters": {
                            "id": 67109,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "873:2:122"
                        },
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 67162,
                        "nodeType": "FunctionDefinition",
                        "src": "977:540:122",
                        "nodes": [],
                        "body": {
                            "id": 67161,
                            "nodeType": "Block",
                            "src": "1070:447:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        67133
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 67133,
                                            "mutability": "mutable",
                                            "name": "auth",
                                            "nameLocation": "1090:4:122",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 67161,
                                            "src": "1080:14:122",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$67230",
                                                "typeString": "contract Authority"
                                            },
                                            "typeName": {
                                                "id": 67132,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 67131,
                                                    "name": "Authority",
                                                    "nameLocations": [
                                                        "1080:9:122"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 67230,
                                                    "src": "1080:9:122"
                                                },
                                                "referencedDeclaration": 67230,
                                                "src": "1080:9:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$67230",
                                                    "typeString": "contract Authority"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 67135,
                                    "initialValue": {
                                        "id": 67134,
                                        "name": "authority",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 67079,
                                        "src": "1097:9:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$67230",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1080:26:122"
                                },
                                {
                                    "expression": {
                                        "commonType": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        },
                                        "id": 67159,
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
                                                    "id": 67154,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "id": 67144,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 67138,
                                                                    "name": "auth",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 67133,
                                                                    "src": "1423:4:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Authority_$67230",
                                                                        "typeString": "contract Authority"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Authority_$67230",
                                                                        "typeString": "contract Authority"
                                                                    }
                                                                ],
                                                                "id": 67137,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1415:7:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 67136,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1415:7:122",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 67139,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1415:13:122",
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
                                                                    "id": 67142,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "kind": "number",
                                                                    "lValueRequested": false,
                                                                    "nodeType": "Literal",
                                                                    "src": "1440:1:122",
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
                                                                "id": 67141,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1432:7:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 67140,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1432:7:122",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 67143,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1432:10:122",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "src": "1415:27:122",
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
                                                                "id": 67147,
                                                                "name": "user",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 67124,
                                                                "src": "1459:4:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 67150,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "1473:4:122",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_Auth_$67217",
                                                                            "typeString": "contract Auth"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_Auth_$67217",
                                                                            "typeString": "contract Auth"
                                                                        }
                                                                    ],
                                                                    "id": 67149,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "1465:7:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_address_$",
                                                                        "typeString": "type(address)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 67148,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "1465:7:122",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 67151,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": false,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "nameLocations": [],
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1465:13:122",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "id": 67152,
                                                                "name": "functionSig",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 67126,
                                                                "src": "1480:11:122",
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
                                                                "id": 67145,
                                                                "name": "auth",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 67133,
                                                                "src": "1446:4:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_Authority_$67230",
                                                                    "typeString": "contract Authority"
                                                                }
                                                            },
                                                            "id": 67146,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1451:7:122",
                                                            "memberName": "canCall",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 67229,
                                                            "src": "1446:12:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                                "typeString": "function (address,address,bytes4) view external returns (bool)"
                                                            }
                                                        },
                                                        "id": 67153,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "nameLocations": [],
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1446:46:122",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bool",
                                                            "typeString": "bool"
                                                        }
                                                    },
                                                    "src": "1415:77:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "id": 67155,
                                            "isConstant": false,
                                            "isInlineArray": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "TupleExpression",
                                            "src": "1414:79:122",
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
                                            "id": 67158,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 67156,
                                                "name": "user",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67124,
                                                "src": "1497:4:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "id": 67157,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67076,
                                                "src": "1505:5:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "src": "1497:13:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bool",
                                                "typeString": "bool"
                                            }
                                        },
                                        "src": "1414:96:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "functionReturnParameters": 67130,
                                    "id": 67160,
                                    "nodeType": "Return",
                                    "src": "1407:103:122"
                                }
                            ]
                        },
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "isAuthorized",
                        "nameLocation": "986:12:122",
                        "parameters": {
                            "id": 67127,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67124,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "1007:4:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67162,
                                    "src": "999:12:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67123,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "999:7:122",
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
                                    "id": 67126,
                                    "mutability": "mutable",
                                    "name": "functionSig",
                                    "nameLocation": "1020:11:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67162,
                                    "src": "1013:18:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 67125,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1013:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "998:34:122"
                        },
                        "returnParameters": {
                            "id": 67130,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67129,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67162,
                                    "src": "1064:4:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 67128,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1064:4:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1063:6:122"
                        },
                        "scope": 67217,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 67198,
                        "nodeType": "FunctionDefinition",
                        "src": "1523:434:122",
                        "nodes": [],
                        "body": {
                            "id": 67197,
                            "nodeType": "Block",
                            "src": "1584:373:122",
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
                                                "id": 67184,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 67172,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 67169,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1780:3:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 67170,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1784:6:122",
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1780:10:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "id": 67171,
                                                        "name": "owner",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 67076,
                                                        "src": "1794:5:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "1780:19:122",
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
                                                                "id": 67175,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1821:3:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 67176,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1825:6:122",
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1821:10:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "arguments": [
                                                                {
                                                                    "id": 67179,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "1841:4:122",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Auth_$67217",
                                                                        "typeString": "contract Auth"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Auth_$67217",
                                                                        "typeString": "contract Auth"
                                                                    }
                                                                ],
                                                                "id": 67178,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "lValueRequested": false,
                                                                "nodeType": "ElementaryTypeNameExpression",
                                                                "src": "1833:7:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_type$_t_address_$",
                                                                    "typeString": "type(address)"
                                                                },
                                                                "typeName": {
                                                                    "id": 67177,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1833:7:122",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 67180,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "kind": "typeConversion",
                                                            "lValueRequested": false,
                                                            "nameLocations": [],
                                                            "names": [],
                                                            "nodeType": "FunctionCall",
                                                            "src": "1833:13:122",
                                                            "tryCall": false,
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        {
                                                            "expression": {
                                                                "id": 67181,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1848:3:122",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 67182,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1852:3:122",
                                                            "memberName": "sig",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1848:7:122",
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
                                                            "id": 67173,
                                                            "name": "authority",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 67079,
                                                            "src": "1803:9:122",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_Authority_$67230",
                                                                "typeString": "contract Authority"
                                                            }
                                                        },
                                                        "id": 67174,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1813:7:122",
                                                        "memberName": "canCall",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 67229,
                                                        "src": "1803:17:122",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                            "typeString": "function (address,address,bytes4) view external returns (bool)"
                                                        }
                                                    },
                                                    "id": 67183,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "kind": "functionCall",
                                                    "lValueRequested": false,
                                                    "nameLocations": [],
                                                    "names": [],
                                                    "nodeType": "FunctionCall",
                                                    "src": "1803:53:122",
                                                    "tryCall": false,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "1780:76:122",
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
                                            "id": 67168,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                -18,
                                                -18
                                            ],
                                            "referencedDeclaration": -18,
                                            "src": "1772:7:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 67185,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1772:85:122",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67186,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1772:85:122"
                                },
                                {
                                    "expression": {
                                        "id": 67189,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67187,
                                            "name": "authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67079,
                                            "src": "1868:9:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$67230",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67188,
                                            "name": "newAuthority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67165,
                                            "src": "1880:12:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$67230",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "src": "1868:24:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$67230",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "id": 67190,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1868:24:122"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 67192,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "1925:3:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 67193,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "1929:6:122",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "1925:10:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67194,
                                                "name": "newAuthority",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67165,
                                                "src": "1937:12:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$67230",
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
                                                    "typeIdentifier": "t_contract$_Authority_$67230",
                                                    "typeString": "contract Authority"
                                                }
                                            ],
                                            "id": 67191,
                                            "name": "AuthorityUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67074,
                                            "src": "1908:16:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$67230_$returns$__$",
                                                "typeString": "function (address,contract Authority)"
                                            }
                                        },
                                        "id": 67195,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1908:42:122",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67196,
                                    "nodeType": "EmitStatement",
                                    "src": "1903:47:122"
                                }
                            ]
                        },
                        "functionSelector": "7a9e5e4b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [],
                        "name": "setAuthority",
                        "nameLocation": "1532:12:122",
                        "parameters": {
                            "id": 67166,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67165,
                                    "mutability": "mutable",
                                    "name": "newAuthority",
                                    "nameLocation": "1555:12:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67198,
                                    "src": "1545:22:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$67230",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 67164,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 67163,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "1545:9:122"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 67230,
                                            "src": "1545:9:122"
                                        },
                                        "referencedDeclaration": 67230,
                                        "src": "1545:9:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$67230",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1544:24:122"
                        },
                        "returnParameters": {
                            "id": 67167,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1584:0:122"
                        },
                        "scope": 67217,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 67216,
                        "nodeType": "FunctionDefinition",
                        "src": "1963:164:122",
                        "nodes": [],
                        "body": {
                            "id": 67215,
                            "nodeType": "Block",
                            "src": "2036:91:122",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 67207,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 67205,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67076,
                                            "src": "2046:5:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 67206,
                                            "name": "newOwner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67200,
                                            "src": "2054:8:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "src": "2046:16:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "id": 67208,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2046:16:122"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 67210,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": -15,
                                                    "src": "2099:3:122",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 67211,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberLocation": "2103:6:122",
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "src": "2099:10:122",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "id": 67212,
                                                "name": "newOwner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 67200,
                                                "src": "2111:8:122",
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
                                            "id": 67209,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67067,
                                            "src": "2078:20:122",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 67213,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2078:42:122",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 67214,
                                    "nodeType": "EmitStatement",
                                    "src": "2073:47:122"
                                }
                            ]
                        },
                        "functionSelector": "f2fde38b",
                        "implemented": true,
                        "kind": "function",
                        "modifiers": [
                            {
                                "id": 67203,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 67202,
                                    "name": "requiresAuth",
                                    "nameLocations": [
                                        "2023:12:122"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 67122,
                                    "src": "2023:12:122"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2023:12:122"
                            }
                        ],
                        "name": "transferOwnership",
                        "nameLocation": "1972:17:122",
                        "parameters": {
                            "id": 67201,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67200,
                                    "mutability": "mutable",
                                    "name": "newOwner",
                                    "nameLocation": "1998:8:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67216,
                                    "src": "1990:16:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67199,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "1990:7:122",
                                        "stateMutability": "nonpayable",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1989:18:122"
                        },
                        "returnParameters": {
                            "id": 67204,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2036:0:122"
                        },
                        "scope": 67217,
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
                    "id": 67061,
                    "nodeType": "StructuredDocumentation",
                    "src": "68:301:122",
                    "text": "@notice Provides a flexible and updatable auth pattern which is completely separate from application logic.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    67217
                ],
                "name": "Auth",
                "nameLocation": "387:4:122",
                "scope": 67231,
                "usedErrors": [],
                "usedEvents": [
                    67067,
                    67074
                ]
            },
            {
                "id": 67230,
                "nodeType": "ContractDefinition",
                "src": "2422:154:122",
                "nodes": [
                    {
                        "id": 67229,
                        "nodeType": "FunctionDefinition",
                        "src": "2448:126:122",
                        "nodes": [],
                        "functionSelector": "b7009613",
                        "implemented": false,
                        "kind": "function",
                        "modifiers": [],
                        "name": "canCall",
                        "nameLocation": "2457:7:122",
                        "parameters": {
                            "id": 67225,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67220,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "2482:4:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67229,
                                    "src": "2474:12:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67219,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2474:7:122",
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
                                    "id": 67222,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "2504:6:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67229,
                                    "src": "2496:14:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 67221,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2496:7:122",
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
                                    "id": 67224,
                                    "mutability": "mutable",
                                    "name": "functionSig",
                                    "nameLocation": "2527:11:122",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67229,
                                    "src": "2520:18:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 67223,
                                        "name": "bytes4",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2520:6:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes4",
                                            "typeString": "bytes4"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2464:80:122"
                        },
                        "returnParameters": {
                            "id": 67228,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 67227,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 67229,
                                    "src": "2568:4:122",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 67226,
                                        "name": "bool",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "2568:4:122",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bool",
                                            "typeString": "bool"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "2567:6:122"
                        },
                        "scope": 67230,
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
                    "id": 67218,
                    "nodeType": "StructuredDocumentation",
                    "src": "2131:291:122",
                    "text": "@notice A generic interface for a contract which provides authorization data to an Auth instance.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    67230
                ],
                "name": "Authority",
                "nameLocation": "2432:9:122",
                "scope": 67231,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "AGPL-3.0-only"
    },
    "id": 122
};
