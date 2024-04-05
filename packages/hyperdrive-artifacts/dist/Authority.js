export const Authority = {
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "target",
                    "type": "address"
                },
                {
                    "internalType": "bytes4",
                    "name": "functionSig",
                    "type": "bytes4"
                }
            ],
            "name": "canCall",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
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
        "canCall(address,address,bytes4)": "b7009613"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bytes4\",\"name\":\"functionSig\",\"type\":\"bytes4\"}],\"name\":\"canCall\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"A generic interface for a contract which provides authorization data to an Auth instance.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/auth/Auth.sol\":\"Authority\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]}},\"version\":1}",
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
                            "type": "address"
                        },
                        {
                            "internalType": "address",
                            "name": "target",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes4",
                            "name": "functionSig",
                            "type": "bytes4"
                        }
                    ],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "canCall",
                    "outputs": [
                        {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
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
                "lib/solmate/src/auth/Auth.sol": "Authority"
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
        "id": 71738,
        "exportedSymbols": {
            "Auth": [
                71724
            ],
            "Authority": [
                71737
            ]
        },
        "nodeType": "SourceUnit",
        "src": "42:2535:170",
        "nodes": [
            {
                "id": 71567,
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
                "id": 71724,
                "nodeType": "ContractDefinition",
                "src": "369:1760:170",
                "nodes": [
                    {
                        "id": 71574,
                        "nodeType": "EventDefinition",
                        "src": "398:75:170",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
                        "name": "OwnershipTransferred",
                        "nameLocation": "404:20:170",
                        "parameters": {
                            "id": 71573,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71570,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "441:4:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71574,
                                    "src": "425:20:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71569,
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
                                    "id": 71572,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newOwner",
                                    "nameLocation": "463:8:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71574,
                                    "src": "447:24:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71571,
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
                        "id": 71581,
                        "nodeType": "EventDefinition",
                        "src": "479:77:170",
                        "nodes": [],
                        "anonymous": false,
                        "eventSelector": "a3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198",
                        "name": "AuthorityUpdated",
                        "nameLocation": "485:16:170",
                        "parameters": {
                            "id": 71580,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71576,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "518:4:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71581,
                                    "src": "502:20:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71575,
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
                                    "id": 71579,
                                    "indexed": true,
                                    "mutability": "mutable",
                                    "name": "newAuthority",
                                    "nameLocation": "542:12:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71581,
                                    "src": "524:30:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$71737",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 71578,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71577,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "524:9:170"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 71737,
                                            "src": "524:9:170"
                                        },
                                        "referencedDeclaration": 71737,
                                        "src": "524:9:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$71737",
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
                        "id": 71583,
                        "nodeType": "VariableDeclaration",
                        "src": "562:20:170",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "8da5cb5b",
                        "mutability": "mutable",
                        "name": "owner",
                        "nameLocation": "577:5:170",
                        "scope": 71724,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                        },
                        "typeName": {
                            "id": 71582,
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
                        "id": 71586,
                        "nodeType": "VariableDeclaration",
                        "src": "589:26:170",
                        "nodes": [],
                        "constant": false,
                        "functionSelector": "bf7e214f",
                        "mutability": "mutable",
                        "name": "authority",
                        "nameLocation": "606:9:170",
                        "scope": 71724,
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Authority_$71737",
                            "typeString": "contract Authority"
                        },
                        "typeName": {
                            "id": 71585,
                            "nodeType": "UserDefinedTypeName",
                            "pathNode": {
                                "id": 71584,
                                "name": "Authority",
                                "nameLocations": [
                                    "589:9:170"
                                ],
                                "nodeType": "IdentifierPath",
                                "referencedDeclaration": 71737,
                                "src": "589:9:170"
                            },
                            "referencedDeclaration": 71737,
                            "src": "589:9:170",
                            "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Authority_$71737",
                                "typeString": "contract Authority"
                            }
                        },
                        "visibility": "public"
                    },
                    {
                        "id": 71615,
                        "nodeType": "FunctionDefinition",
                        "src": "622:224:170",
                        "nodes": [],
                        "body": {
                            "id": 71614,
                            "nodeType": "Block",
                            "src": "672:174:170",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 71596,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71594,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71583,
                                            "src": "682:5:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71595,
                                            "name": "_owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71588,
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
                                    "id": 71597,
                                    "nodeType": "ExpressionStatement",
                                    "src": "682:14:170"
                                },
                                {
                                    "expression": {
                                        "id": 71600,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71598,
                                            "name": "authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71586,
                                            "src": "706:9:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$71737",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71599,
                                            "name": "_authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71591,
                                            "src": "718:10:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$71737",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "src": "706:22:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$71737",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "id": 71601,
                                    "nodeType": "ExpressionStatement",
                                    "src": "706:22:170"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 71603,
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
                                                "id": 71604,
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
                                                "id": 71605,
                                                "name": "_owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71588,
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
                                            "id": 71602,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71574,
                                            "src": "744:20:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 71606,
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
                                    "id": 71607,
                                    "nodeType": "EmitStatement",
                                    "src": "739:45:170"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 71609,
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
                                                "id": 71610,
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
                                                "id": 71611,
                                                "name": "_authority",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71591,
                                                "src": "828:10:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$71737",
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
                                                    "typeIdentifier": "t_contract$_Authority_$71737",
                                                    "typeString": "contract Authority"
                                                }
                                            ],
                                            "id": 71608,
                                            "name": "AuthorityUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71581,
                                            "src": "799:16:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$71737_$returns$__$",
                                                "typeString": "function (address,contract Authority)"
                                            }
                                        },
                                        "id": 71612,
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
                                    "id": 71613,
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
                            "id": 71592,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71588,
                                    "mutability": "mutable",
                                    "name": "_owner",
                                    "nameLocation": "642:6:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71615,
                                    "src": "634:14:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71587,
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
                                    "id": 71591,
                                    "mutability": "mutable",
                                    "name": "_authority",
                                    "nameLocation": "660:10:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71615,
                                    "src": "650:20:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$71737",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 71590,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71589,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "650:9:170"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 71737,
                                            "src": "650:9:170"
                                        },
                                        "referencedDeclaration": 71737,
                                        "src": "650:9:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$71737",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "633:38:170"
                        },
                        "returnParameters": {
                            "id": 71593,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "672:0:170"
                        },
                        "scope": 71724,
                        "stateMutability": "nonpayable",
                        "virtual": false,
                        "visibility": "internal"
                    },
                    {
                        "id": 71629,
                        "nodeType": "ModifierDefinition",
                        "src": "852:119:170",
                        "nodes": [],
                        "body": {
                            "id": 71628,
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
                                                            "id": 71619,
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
                                                        "id": 71620,
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
                                                            "id": 71621,
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
                                                        "id": 71622,
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
                                                    "id": 71618,
                                                    "name": "isAuthorized",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 71669,
                                                    "src": "902:12:170",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                        "typeString": "function (address,bytes4) view returns (bool)"
                                                    }
                                                },
                                                "id": 71623,
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
                                                "id": 71624,
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
                                            "id": 71617,
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
                                        "id": 71625,
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
                                    "id": 71626,
                                    "nodeType": "ExpressionStatement",
                                    "src": "894:58:170"
                                },
                                {
                                    "id": 71627,
                                    "nodeType": "PlaceholderStatement",
                                    "src": "963:1:170"
                                }
                            ]
                        },
                        "name": "requiresAuth",
                        "nameLocation": "861:12:170",
                        "parameters": {
                            "id": 71616,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "873:2:170"
                        },
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 71669,
                        "nodeType": "FunctionDefinition",
                        "src": "977:540:170",
                        "nodes": [],
                        "body": {
                            "id": 71668,
                            "nodeType": "Block",
                            "src": "1070:447:170",
                            "nodes": [],
                            "statements": [
                                {
                                    "assignments": [
                                        71640
                                    ],
                                    "declarations": [
                                        {
                                            "constant": false,
                                            "id": 71640,
                                            "mutability": "mutable",
                                            "name": "auth",
                                            "nameLocation": "1090:4:170",
                                            "nodeType": "VariableDeclaration",
                                            "scope": 71668,
                                            "src": "1080:14:170",
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$71737",
                                                "typeString": "contract Authority"
                                            },
                                            "typeName": {
                                                "id": 71639,
                                                "nodeType": "UserDefinedTypeName",
                                                "pathNode": {
                                                    "id": 71638,
                                                    "name": "Authority",
                                                    "nameLocations": [
                                                        "1080:9:170"
                                                    ],
                                                    "nodeType": "IdentifierPath",
                                                    "referencedDeclaration": 71737,
                                                    "src": "1080:9:170"
                                                },
                                                "referencedDeclaration": 71737,
                                                "src": "1080:9:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$71737",
                                                    "typeString": "contract Authority"
                                                }
                                            },
                                            "visibility": "internal"
                                        }
                                    ],
                                    "id": 71642,
                                    "initialValue": {
                                        "id": 71641,
                                        "name": "authority",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 71586,
                                        "src": "1097:9:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$71737",
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
                                        "id": 71666,
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
                                                    "id": 71661,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "commonType": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        },
                                                        "id": 71651,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "leftExpression": {
                                                            "arguments": [
                                                                {
                                                                    "id": 71645,
                                                                    "name": "auth",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 71640,
                                                                    "src": "1423:4:170",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Authority_$71737",
                                                                        "typeString": "contract Authority"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Authority_$71737",
                                                                        "typeString": "contract Authority"
                                                                    }
                                                                ],
                                                                "id": 71644,
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
                                                                    "id": 71643,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1415:7:170",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71646,
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
                                                                    "id": 71649,
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
                                                                "id": 71648,
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
                                                                    "id": 71647,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1432:7:170",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71650,
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
                                                                "id": 71654,
                                                                "name": "user",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71631,
                                                                "src": "1459:4:170",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "id": 71657,
                                                                        "name": "this",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -28,
                                                                        "src": "1473:4:170",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_contract$_Auth_$71724",
                                                                            "typeString": "contract Auth"
                                                                        }
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_contract$_Auth_$71724",
                                                                            "typeString": "contract Auth"
                                                                        }
                                                                    ],
                                                                    "id": 71656,
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
                                                                        "id": 71655,
                                                                        "name": "address",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "1465:7:170",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 71658,
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
                                                                "id": 71659,
                                                                "name": "functionSig",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71633,
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
                                                                "id": 71652,
                                                                "name": "auth",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 71640,
                                                                "src": "1446:4:170",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_contract$_Authority_$71737",
                                                                    "typeString": "contract Authority"
                                                                }
                                                            },
                                                            "id": 71653,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberLocation": "1451:7:170",
                                                            "memberName": "canCall",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 71736,
                                                            "src": "1446:12:170",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                                "typeString": "function (address,address,bytes4) view external returns (bool)"
                                                            }
                                                        },
                                                        "id": 71660,
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
                                            "id": 71662,
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
                                            "id": 71665,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "id": 71663,
                                                "name": "user",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71631,
                                                "src": "1497:4:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "==",
                                            "rightExpression": {
                                                "id": 71664,
                                                "name": "owner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71583,
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
                                    "functionReturnParameters": 71637,
                                    "id": 71667,
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
                            "id": 71634,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71631,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "1007:4:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71669,
                                    "src": "999:12:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71630,
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
                                    "id": 71633,
                                    "mutability": "mutable",
                                    "name": "functionSig",
                                    "nameLocation": "1020:11:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71669,
                                    "src": "1013:18:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 71632,
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
                            "id": 71637,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71636,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71669,
                                    "src": "1064:4:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71635,
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
                        "scope": 71724,
                        "stateMutability": "view",
                        "virtual": true,
                        "visibility": "internal"
                    },
                    {
                        "id": 71705,
                        "nodeType": "FunctionDefinition",
                        "src": "1523:434:170",
                        "nodes": [],
                        "body": {
                            "id": 71704,
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
                                                "id": 71691,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 71679,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 71676,
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
                                                        "id": 71677,
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
                                                        "id": 71678,
                                                        "name": "owner",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 71583,
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
                                                                "id": 71682,
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
                                                            "id": 71683,
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
                                                                    "id": 71686,
                                                                    "name": "this",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": -28,
                                                                    "src": "1841:4:170",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_contract$_Auth_$71724",
                                                                        "typeString": "contract Auth"
                                                                    }
                                                                }
                                                            ],
                                                            "expression": {
                                                                "argumentTypes": [
                                                                    {
                                                                        "typeIdentifier": "t_contract$_Auth_$71724",
                                                                        "typeString": "contract Auth"
                                                                    }
                                                                ],
                                                                "id": 71685,
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
                                                                    "id": 71684,
                                                                    "name": "address",
                                                                    "nodeType": "ElementaryTypeName",
                                                                    "src": "1833:7:170",
                                                                    "typeDescriptions": {}
                                                                }
                                                            },
                                                            "id": 71687,
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
                                                                "id": 71688,
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
                                                            "id": 71689,
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
                                                            "id": 71680,
                                                            "name": "authority",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 71586,
                                                            "src": "1803:9:170",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_contract$_Authority_$71737",
                                                                "typeString": "contract Authority"
                                                            }
                                                        },
                                                        "id": 71681,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberLocation": "1813:7:170",
                                                        "memberName": "canCall",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 71736,
                                                        "src": "1803:17:170",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                                            "typeString": "function (address,address,bytes4) view external returns (bool)"
                                                        }
                                                    },
                                                    "id": 71690,
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
                                            "id": 71675,
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
                                        "id": 71692,
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
                                    "id": 71693,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1772:85:170"
                                },
                                {
                                    "expression": {
                                        "id": 71696,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71694,
                                            "name": "authority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71586,
                                            "src": "1868:9:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$71737",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71695,
                                            "name": "newAuthority",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71672,
                                            "src": "1880:12:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_contract$_Authority_$71737",
                                                "typeString": "contract Authority"
                                            }
                                        },
                                        "src": "1868:24:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$71737",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "id": 71697,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1868:24:170"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 71699,
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
                                                "id": 71700,
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
                                                "id": 71701,
                                                "name": "newAuthority",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71672,
                                                "src": "1937:12:170",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_contract$_Authority_$71737",
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
                                                    "typeIdentifier": "t_contract$_Authority_$71737",
                                                    "typeString": "contract Authority"
                                                }
                                            ],
                                            "id": 71698,
                                            "name": "AuthorityUpdated",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71581,
                                            "src": "1908:16:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$71737_$returns$__$",
                                                "typeString": "function (address,contract Authority)"
                                            }
                                        },
                                        "id": 71702,
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
                                    "id": 71703,
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
                            "id": 71673,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71672,
                                    "mutability": "mutable",
                                    "name": "newAuthority",
                                    "nameLocation": "1555:12:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71705,
                                    "src": "1545:22:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_Authority_$71737",
                                        "typeString": "contract Authority"
                                    },
                                    "typeName": {
                                        "id": 71671,
                                        "nodeType": "UserDefinedTypeName",
                                        "pathNode": {
                                            "id": 71670,
                                            "name": "Authority",
                                            "nameLocations": [
                                                "1545:9:170"
                                            ],
                                            "nodeType": "IdentifierPath",
                                            "referencedDeclaration": 71737,
                                            "src": "1545:9:170"
                                        },
                                        "referencedDeclaration": 71737,
                                        "src": "1545:9:170",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_Authority_$71737",
                                            "typeString": "contract Authority"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "src": "1544:24:170"
                        },
                        "returnParameters": {
                            "id": 71674,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "1584:0:170"
                        },
                        "scope": 71724,
                        "stateMutability": "nonpayable",
                        "virtual": true,
                        "visibility": "public"
                    },
                    {
                        "id": 71723,
                        "nodeType": "FunctionDefinition",
                        "src": "1963:164:170",
                        "nodes": [],
                        "body": {
                            "id": 71722,
                            "nodeType": "Block",
                            "src": "2036:91:170",
                            "nodes": [],
                            "statements": [
                                {
                                    "expression": {
                                        "id": 71714,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "id": 71712,
                                            "name": "owner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71583,
                                            "src": "2046:5:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "id": 71713,
                                            "name": "newOwner",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71707,
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
                                    "id": 71715,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2046:16:170"
                                },
                                {
                                    "eventCall": {
                                        "arguments": [
                                            {
                                                "expression": {
                                                    "id": 71717,
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
                                                "id": 71718,
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
                                                "id": 71719,
                                                "name": "newOwner",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 71707,
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
                                            "id": 71716,
                                            "name": "OwnershipTransferred",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 71574,
                                            "src": "2078:20:170",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                                "typeString": "function (address,address)"
                                            }
                                        },
                                        "id": 71720,
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
                                    "id": 71721,
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
                                "id": 71710,
                                "kind": "modifierInvocation",
                                "modifierName": {
                                    "id": 71709,
                                    "name": "requiresAuth",
                                    "nameLocations": [
                                        "2023:12:170"
                                    ],
                                    "nodeType": "IdentifierPath",
                                    "referencedDeclaration": 71629,
                                    "src": "2023:12:170"
                                },
                                "nodeType": "ModifierInvocation",
                                "src": "2023:12:170"
                            }
                        ],
                        "name": "transferOwnership",
                        "nameLocation": "1972:17:170",
                        "parameters": {
                            "id": 71708,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71707,
                                    "mutability": "mutable",
                                    "name": "newOwner",
                                    "nameLocation": "1998:8:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71723,
                                    "src": "1990:16:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71706,
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
                            "id": 71711,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "2036:0:170"
                        },
                        "scope": 71724,
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
                    "id": 71568,
                    "nodeType": "StructuredDocumentation",
                    "src": "68:301:170",
                    "text": "@notice Provides a flexible and updatable auth pattern which is completely separate from application logic.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
                },
                "fullyImplemented": true,
                "linearizedBaseContracts": [
                    71724
                ],
                "name": "Auth",
                "nameLocation": "387:4:170",
                "scope": 71738,
                "usedErrors": [],
                "usedEvents": [
                    71574,
                    71581
                ]
            },
            {
                "id": 71737,
                "nodeType": "ContractDefinition",
                "src": "2422:154:170",
                "nodes": [
                    {
                        "id": 71736,
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
                            "id": 71732,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71727,
                                    "mutability": "mutable",
                                    "name": "user",
                                    "nameLocation": "2482:4:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71736,
                                    "src": "2474:12:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71726,
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
                                    "id": 71729,
                                    "mutability": "mutable",
                                    "name": "target",
                                    "nameLocation": "2504:6:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71736,
                                    "src": "2496:14:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 71728,
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
                                    "id": 71731,
                                    "mutability": "mutable",
                                    "name": "functionSig",
                                    "nameLocation": "2527:11:170",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71736,
                                    "src": "2520:18:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes4",
                                        "typeString": "bytes4"
                                    },
                                    "typeName": {
                                        "id": 71730,
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
                            "id": 71735,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 71734,
                                    "mutability": "mutable",
                                    "name": "",
                                    "nameLocation": "-1:-1:-1",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 71736,
                                    "src": "2568:4:170",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                    },
                                    "typeName": {
                                        "id": 71733,
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
                        "scope": 71737,
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
                    "id": 71725,
                    "nodeType": "StructuredDocumentation",
                    "src": "2131:291:170",
                    "text": "@notice A generic interface for a contract which provides authorization data to an Auth instance.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
                },
                "fullyImplemented": false,
                "linearizedBaseContracts": [
                    71737
                ],
                "name": "Authority",
                "nameLocation": "2432:9:170",
                "scope": 71738,
                "usedErrors": [],
                "usedEvents": []
            }
        ],
        "license": "AGPL-3.0-only"
    },
    "id": 170
};
