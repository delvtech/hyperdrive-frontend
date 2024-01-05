export const Auth = 
{
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Provides a flexible and updatable auth pattern which is completely separate from application logic.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/auth/Auth.sol\":\"Auth\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
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
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "forge-std/=lib/forge-std/src/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/"
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
    "id": 62477,
    "exportedSymbols": {
      "Auth": [
        62463
      ],
      "Authority": [
        62476
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:2535:92",
    "nodes": [
      {
        "id": 62306,
        "nodeType": "PragmaDirective",
        "src": "42:24:92",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 62463,
        "nodeType": "ContractDefinition",
        "src": "369:1760:92",
        "nodes": [
          {
            "id": 62313,
            "nodeType": "EventDefinition",
            "src": "398:75:92",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
            "name": "OwnershipTransferred",
            "nameLocation": "404:20:92",
            "parameters": {
              "id": 62312,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62309,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "441:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62313,
                  "src": "425:20:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62308,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "425:7:92",
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
                  "id": 62311,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "463:8:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62313,
                  "src": "447:24:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62310,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:92",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "424:48:92"
            }
          },
          {
            "id": 62320,
            "nodeType": "EventDefinition",
            "src": "479:77:92",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198",
            "name": "AuthorityUpdated",
            "nameLocation": "485:16:92",
            "parameters": {
              "id": 62319,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62315,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "518:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62320,
                  "src": "502:20:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62314,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "502:7:92",
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
                  "id": 62318,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newAuthority",
                  "nameLocation": "542:12:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62320,
                  "src": "524:30:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62476",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 62317,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62316,
                      "name": "Authority",
                      "nameLocations": [
                        "524:9:92"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62476,
                      "src": "524:9:92"
                    },
                    "referencedDeclaration": 62476,
                    "src": "524:9:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62476",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "501:54:92"
            }
          },
          {
            "id": 62322,
            "nodeType": "VariableDeclaration",
            "src": "562:20:92",
            "nodes": [],
            "constant": false,
            "functionSelector": "8da5cb5b",
            "mutability": "mutable",
            "name": "owner",
            "nameLocation": "577:5:92",
            "scope": 62463,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 62321,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "562:7:92",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 62325,
            "nodeType": "VariableDeclaration",
            "src": "589:26:92",
            "nodes": [],
            "constant": false,
            "functionSelector": "bf7e214f",
            "mutability": "mutable",
            "name": "authority",
            "nameLocation": "606:9:92",
            "scope": 62463,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Authority_$62476",
              "typeString": "contract Authority"
            },
            "typeName": {
              "id": 62324,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 62323,
                "name": "Authority",
                "nameLocations": [
                  "589:9:92"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 62476,
                "src": "589:9:92"
              },
              "referencedDeclaration": 62476,
              "src": "589:9:92",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Authority_$62476",
                "typeString": "contract Authority"
              }
            },
            "visibility": "public"
          },
          {
            "id": 62354,
            "nodeType": "FunctionDefinition",
            "src": "622:224:92",
            "nodes": [],
            "body": {
              "id": 62353,
              "nodeType": "Block",
              "src": "672:174:92",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 62335,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62333,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62322,
                      "src": "682:5:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62334,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62327,
                      "src": "690:6:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "682:14:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 62336,
                  "nodeType": "ExpressionStatement",
                  "src": "682:14:92"
                },
                {
                  "expression": {
                    "id": 62339,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62337,
                      "name": "authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62325,
                      "src": "706:9:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62476",
                        "typeString": "contract Authority"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62338,
                      "name": "_authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62330,
                      "src": "718:10:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62476",
                        "typeString": "contract Authority"
                      }
                    },
                    "src": "706:22:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62476",
                      "typeString": "contract Authority"
                    }
                  },
                  "id": 62340,
                  "nodeType": "ExpressionStatement",
                  "src": "706:22:92"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62342,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "765:3:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 62343,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "769:6:92",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "765:10:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62344,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62327,
                        "src": "777:6:92",
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
                      "id": 62341,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62313,
                      "src": "744:20:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 62345,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "744:40:92",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62346,
                  "nodeType": "EmitStatement",
                  "src": "739:45:92"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62348,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "816:3:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 62349,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "820:6:92",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "816:10:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62350,
                        "name": "_authority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62330,
                        "src": "828:10:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$62476",
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
                          "typeIdentifier": "t_contract$_Authority_$62476",
                          "typeString": "contract Authority"
                        }
                      ],
                      "id": 62347,
                      "name": "AuthorityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62320,
                      "src": "799:16:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$62476_$returns$__$",
                        "typeString": "function (address,contract Authority)"
                      }
                    },
                    "id": 62351,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "799:40:92",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62352,
                  "nodeType": "EmitStatement",
                  "src": "794:45:92"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 62331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62327,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "642:6:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62354,
                  "src": "634:14:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62326,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "634:7:92",
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
                  "id": 62330,
                  "mutability": "mutable",
                  "name": "_authority",
                  "nameLocation": "660:10:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62354,
                  "src": "650:20:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62476",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 62329,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62328,
                      "name": "Authority",
                      "nameLocations": [
                        "650:9:92"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62476,
                      "src": "650:9:92"
                    },
                    "referencedDeclaration": 62476,
                    "src": "650:9:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62476",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "633:38:92"
            },
            "returnParameters": {
              "id": 62332,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "672:0:92"
            },
            "scope": 62463,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62368,
            "nodeType": "ModifierDefinition",
            "src": "852:119:92",
            "nodes": [],
            "body": {
              "id": 62367,
              "nodeType": "Block",
              "src": "884:87:92",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 62358,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "915:3:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 62359,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "919:6:92",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "915:10:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "expression": {
                              "id": 62360,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "927:3:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 62361,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "931:3:92",
                            "memberName": "sig",
                            "nodeType": "MemberAccess",
                            "src": "927:7:92",
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
                          "id": 62357,
                          "name": "isAuthorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62408,
                          "src": "902:12:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                            "typeString": "function (address,bytes4) view returns (bool)"
                          }
                        },
                        "id": 62362,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "902:33:92",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "554e415554484f52495a4544",
                        "id": 62363,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "937:14:92",
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
                      "id": 62356,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "894:7:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 62364,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "894:58:92",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62365,
                  "nodeType": "ExpressionStatement",
                  "src": "894:58:92"
                },
                {
                  "id": 62366,
                  "nodeType": "PlaceholderStatement",
                  "src": "963:1:92"
                }
              ]
            },
            "name": "requiresAuth",
            "nameLocation": "861:12:92",
            "parameters": {
              "id": 62355,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "873:2:92"
            },
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 62408,
            "nodeType": "FunctionDefinition",
            "src": "977:540:92",
            "nodes": [],
            "body": {
              "id": 62407,
              "nodeType": "Block",
              "src": "1070:447:92",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    62379
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62379,
                      "mutability": "mutable",
                      "name": "auth",
                      "nameLocation": "1090:4:92",
                      "nodeType": "VariableDeclaration",
                      "scope": 62407,
                      "src": "1080:14:92",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62476",
                        "typeString": "contract Authority"
                      },
                      "typeName": {
                        "id": 62378,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 62377,
                          "name": "Authority",
                          "nameLocations": [
                            "1080:9:92"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62476,
                          "src": "1080:9:92"
                        },
                        "referencedDeclaration": 62476,
                        "src": "1080:9:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$62476",
                          "typeString": "contract Authority"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62381,
                  "initialValue": {
                    "id": 62380,
                    "name": "authority",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62325,
                    "src": "1097:9:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62476",
                      "typeString": "contract Authority"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1080:26:92"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 62405,
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
                          "id": 62400,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 62390,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 62384,
                                  "name": "auth",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 62379,
                                  "src": "1423:4:92",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Authority_$62476",
                                    "typeString": "contract Authority"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Authority_$62476",
                                    "typeString": "contract Authority"
                                  }
                                ],
                                "id": 62383,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1415:7:92",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 62382,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1415:7:92",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62385,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1415:13:92",
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
                                  "id": 62388,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1440:1:92",
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
                                "id": 62387,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1432:7:92",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 62386,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1432:7:92",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62389,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1432:10:92",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "1415:27:92",
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
                                "id": 62393,
                                "name": "user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62370,
                                "src": "1459:4:92",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 62396,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "1473:4:92",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_Auth_$62463",
                                      "typeString": "contract Auth"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_Auth_$62463",
                                      "typeString": "contract Auth"
                                    }
                                  ],
                                  "id": 62395,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "1465:7:92",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 62394,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1465:7:92",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 62397,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1465:13:92",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 62398,
                                "name": "functionSig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62372,
                                "src": "1480:11:92",
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
                                "id": 62391,
                                "name": "auth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62379,
                                "src": "1446:4:92",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Authority_$62476",
                                  "typeString": "contract Authority"
                                }
                              },
                              "id": 62392,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1451:7:92",
                              "memberName": "canCall",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62475,
                              "src": "1446:12:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                "typeString": "function (address,address,bytes4) view external returns (bool)"
                              }
                            },
                            "id": 62399,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1446:46:92",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1415:77:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 62401,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1414:79:92",
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
                      "id": 62404,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 62402,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62370,
                        "src": "1497:4:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "id": 62403,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62322,
                        "src": "1505:5:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1497:13:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1414:96:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62376,
                  "id": 62406,
                  "nodeType": "Return",
                  "src": "1407:103:92"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isAuthorized",
            "nameLocation": "986:12:92",
            "parameters": {
              "id": 62373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62370,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1007:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62408,
                  "src": "999:12:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62369,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "999:7:92",
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
                  "id": 62372,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "1020:11:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62408,
                  "src": "1013:18:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62371,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1013:6:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "998:34:92"
            },
            "returnParameters": {
              "id": 62376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62375,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62408,
                  "src": "1064:4:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62374,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1064:4:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1063:6:92"
            },
            "scope": 62463,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 62444,
            "nodeType": "FunctionDefinition",
            "src": "1523:434:92",
            "nodes": [],
            "body": {
              "id": 62443,
              "nodeType": "Block",
              "src": "1584:373:92",
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
                        "id": 62430,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 62418,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 62415,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1780:3:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 62416,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1784:6:92",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1780:10:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 62417,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62322,
                            "src": "1794:5:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1780:19:92",
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
                                "id": 62421,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1821:3:92",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 62422,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1825:6:92",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "1821:10:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 62425,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "1841:4:92",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Auth_$62463",
                                    "typeString": "contract Auth"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Auth_$62463",
                                    "typeString": "contract Auth"
                                  }
                                ],
                                "id": 62424,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1833:7:92",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 62423,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1833:7:92",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62426,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1833:13:92",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 62427,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1848:3:92",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 62428,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1852:3:92",
                              "memberName": "sig",
                              "nodeType": "MemberAccess",
                              "src": "1848:7:92",
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
                              "id": 62419,
                              "name": "authority",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62325,
                              "src": "1803:9:92",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Authority_$62476",
                                "typeString": "contract Authority"
                              }
                            },
                            "id": 62420,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1813:7:92",
                            "memberName": "canCall",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 62475,
                            "src": "1803:17:92",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                              "typeString": "function (address,address,bytes4) view external returns (bool)"
                            }
                          },
                          "id": 62429,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1803:53:92",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1780:76:92",
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
                      "id": 62414,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1772:7:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 62431,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1772:85:92",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62432,
                  "nodeType": "ExpressionStatement",
                  "src": "1772:85:92"
                },
                {
                  "expression": {
                    "id": 62435,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62433,
                      "name": "authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62325,
                      "src": "1868:9:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62476",
                        "typeString": "contract Authority"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62434,
                      "name": "newAuthority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62411,
                      "src": "1880:12:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62476",
                        "typeString": "contract Authority"
                      }
                    },
                    "src": "1868:24:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62476",
                      "typeString": "contract Authority"
                    }
                  },
                  "id": 62436,
                  "nodeType": "ExpressionStatement",
                  "src": "1868:24:92"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62438,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1925:3:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 62439,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1929:6:92",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1925:10:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62440,
                        "name": "newAuthority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62411,
                        "src": "1937:12:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$62476",
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
                          "typeIdentifier": "t_contract$_Authority_$62476",
                          "typeString": "contract Authority"
                        }
                      ],
                      "id": 62437,
                      "name": "AuthorityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62320,
                      "src": "1908:16:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$62476_$returns$__$",
                        "typeString": "function (address,contract Authority)"
                      }
                    },
                    "id": 62441,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1908:42:92",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62442,
                  "nodeType": "EmitStatement",
                  "src": "1903:47:92"
                }
              ]
            },
            "functionSelector": "7a9e5e4b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setAuthority",
            "nameLocation": "1532:12:92",
            "parameters": {
              "id": 62412,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62411,
                  "mutability": "mutable",
                  "name": "newAuthority",
                  "nameLocation": "1555:12:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62444,
                  "src": "1545:22:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62476",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 62410,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62409,
                      "name": "Authority",
                      "nameLocations": [
                        "1545:9:92"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62476,
                      "src": "1545:9:92"
                    },
                    "referencedDeclaration": 62476,
                    "src": "1545:9:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62476",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1544:24:92"
            },
            "returnParameters": {
              "id": 62413,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1584:0:92"
            },
            "scope": 62463,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 62462,
            "nodeType": "FunctionDefinition",
            "src": "1963:164:92",
            "nodes": [],
            "body": {
              "id": 62461,
              "nodeType": "Block",
              "src": "2036:91:92",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 62453,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62451,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62322,
                      "src": "2046:5:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62452,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62446,
                      "src": "2054:8:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2046:16:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 62454,
                  "nodeType": "ExpressionStatement",
                  "src": "2046:16:92"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62456,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2099:3:92",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 62457,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2103:6:92",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2099:10:92",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62458,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62446,
                        "src": "2111:8:92",
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
                      "id": 62455,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62313,
                      "src": "2078:20:92",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 62459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2078:42:92",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62460,
                  "nodeType": "EmitStatement",
                  "src": "2073:47:92"
                }
              ]
            },
            "functionSelector": "f2fde38b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 62449,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 62448,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "2023:12:92"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62368,
                  "src": "2023:12:92"
                },
                "nodeType": "ModifierInvocation",
                "src": "2023:12:92"
              }
            ],
            "name": "transferOwnership",
            "nameLocation": "1972:17:92",
            "parameters": {
              "id": 62447,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62446,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "1998:8:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62462,
                  "src": "1990:16:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62445,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1990:7:92",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1989:18:92"
            },
            "returnParameters": {
              "id": 62450,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2036:0:92"
            },
            "scope": 62463,
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
          "id": 62307,
          "nodeType": "StructuredDocumentation",
          "src": "68:301:92",
          "text": "@notice Provides a flexible and updatable auth pattern which is completely separate from application logic.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          62463
        ],
        "name": "Auth",
        "nameLocation": "387:4:92",
        "scope": 62477,
        "usedErrors": []
      },
      {
        "id": 62476,
        "nodeType": "ContractDefinition",
        "src": "2422:154:92",
        "nodes": [
          {
            "id": 62475,
            "nodeType": "FunctionDefinition",
            "src": "2448:126:92",
            "nodes": [],
            "functionSelector": "b7009613",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "canCall",
            "nameLocation": "2457:7:92",
            "parameters": {
              "id": 62471,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62466,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "2482:4:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62475,
                  "src": "2474:12:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62465,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2474:7:92",
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
                  "id": 62468,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "2504:6:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62475,
                  "src": "2496:14:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62467,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2496:7:92",
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
                  "id": 62470,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "2527:11:92",
                  "nodeType": "VariableDeclaration",
                  "scope": 62475,
                  "src": "2520:18:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62469,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2520:6:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2464:80:92"
            },
            "returnParameters": {
              "id": 62474,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62473,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62475,
                  "src": "2568:4:92",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62472,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2568:4:92",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2567:6:92"
            },
            "scope": 62476,
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
          "id": 62464,
          "nodeType": "StructuredDocumentation",
          "src": "2131:291:92",
          "text": "@notice A generic interface for a contract which provides authorization data to an Auth instance.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          62476
        ],
        "name": "Authority",
        "nameLocation": "2432:9:92",
        "scope": 62477,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 92
} as const;
