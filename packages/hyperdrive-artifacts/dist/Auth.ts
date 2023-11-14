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
    "id": 59127,
    "exportedSymbols": {
      "Auth": [
        59113
      ],
      "Authority": [
        59126
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:2535:81",
    "nodes": [
      {
        "id": 58956,
        "nodeType": "PragmaDirective",
        "src": "42:24:81",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 59113,
        "nodeType": "ContractDefinition",
        "src": "369:1760:81",
        "nodes": [
          {
            "id": 58963,
            "nodeType": "EventDefinition",
            "src": "398:75:81",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
            "name": "OwnershipTransferred",
            "nameLocation": "404:20:81",
            "parameters": {
              "id": 58962,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58959,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "441:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 58963,
                  "src": "425:20:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58958,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "425:7:81",
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
                  "id": 58961,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "463:8:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 58963,
                  "src": "447:24:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58960,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:81",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "424:48:81"
            }
          },
          {
            "id": 58970,
            "nodeType": "EventDefinition",
            "src": "479:77:81",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198",
            "name": "AuthorityUpdated",
            "nameLocation": "485:16:81",
            "parameters": {
              "id": 58969,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58965,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "518:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 58970,
                  "src": "502:20:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58964,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "502:7:81",
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
                  "id": 58968,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newAuthority",
                  "nameLocation": "542:12:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 58970,
                  "src": "524:30:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$59126",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 58967,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 58966,
                      "name": "Authority",
                      "nameLocations": [
                        "524:9:81"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 59126,
                      "src": "524:9:81"
                    },
                    "referencedDeclaration": 59126,
                    "src": "524:9:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$59126",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "501:54:81"
            }
          },
          {
            "id": 58972,
            "nodeType": "VariableDeclaration",
            "src": "562:20:81",
            "nodes": [],
            "constant": false,
            "functionSelector": "8da5cb5b",
            "mutability": "mutable",
            "name": "owner",
            "nameLocation": "577:5:81",
            "scope": 59113,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 58971,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "562:7:81",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 58975,
            "nodeType": "VariableDeclaration",
            "src": "589:26:81",
            "nodes": [],
            "constant": false,
            "functionSelector": "bf7e214f",
            "mutability": "mutable",
            "name": "authority",
            "nameLocation": "606:9:81",
            "scope": 59113,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Authority_$59126",
              "typeString": "contract Authority"
            },
            "typeName": {
              "id": 58974,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 58973,
                "name": "Authority",
                "nameLocations": [
                  "589:9:81"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 59126,
                "src": "589:9:81"
              },
              "referencedDeclaration": 59126,
              "src": "589:9:81",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Authority_$59126",
                "typeString": "contract Authority"
              }
            },
            "visibility": "public"
          },
          {
            "id": 59004,
            "nodeType": "FunctionDefinition",
            "src": "622:224:81",
            "nodes": [],
            "body": {
              "id": 59003,
              "nodeType": "Block",
              "src": "672:174:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 58985,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 58983,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58972,
                      "src": "682:5:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 58984,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58977,
                      "src": "690:6:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "682:14:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 58986,
                  "nodeType": "ExpressionStatement",
                  "src": "682:14:81"
                },
                {
                  "expression": {
                    "id": 58989,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 58987,
                      "name": "authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58975,
                      "src": "706:9:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$59126",
                        "typeString": "contract Authority"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 58988,
                      "name": "_authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58980,
                      "src": "718:10:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$59126",
                        "typeString": "contract Authority"
                      }
                    },
                    "src": "706:22:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$59126",
                      "typeString": "contract Authority"
                    }
                  },
                  "id": 58990,
                  "nodeType": "ExpressionStatement",
                  "src": "706:22:81"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 58992,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "765:3:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 58993,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "769:6:81",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "765:10:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 58994,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58977,
                        "src": "777:6:81",
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
                      "id": 58991,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58963,
                      "src": "744:20:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 58995,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "744:40:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 58996,
                  "nodeType": "EmitStatement",
                  "src": "739:45:81"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 58998,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "816:3:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 58999,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "820:6:81",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "816:10:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59000,
                        "name": "_authority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58980,
                        "src": "828:10:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$59126",
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
                          "typeIdentifier": "t_contract$_Authority_$59126",
                          "typeString": "contract Authority"
                        }
                      ],
                      "id": 58997,
                      "name": "AuthorityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58970,
                      "src": "799:16:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$59126_$returns$__$",
                        "typeString": "function (address,contract Authority)"
                      }
                    },
                    "id": 59001,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "799:40:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59002,
                  "nodeType": "EmitStatement",
                  "src": "794:45:81"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 58981,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 58977,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "642:6:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 59004,
                  "src": "634:14:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 58976,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "634:7:81",
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
                  "id": 58980,
                  "mutability": "mutable",
                  "name": "_authority",
                  "nameLocation": "660:10:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 59004,
                  "src": "650:20:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$59126",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 58979,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 58978,
                      "name": "Authority",
                      "nameLocations": [
                        "650:9:81"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 59126,
                      "src": "650:9:81"
                    },
                    "referencedDeclaration": 59126,
                    "src": "650:9:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$59126",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "633:38:81"
            },
            "returnParameters": {
              "id": 58982,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "672:0:81"
            },
            "scope": 59113,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 59018,
            "nodeType": "ModifierDefinition",
            "src": "852:119:81",
            "nodes": [],
            "body": {
              "id": 59017,
              "nodeType": "Block",
              "src": "884:87:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 59008,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "915:3:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 59009,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "919:6:81",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "915:10:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "expression": {
                              "id": 59010,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "927:3:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 59011,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "931:3:81",
                            "memberName": "sig",
                            "nodeType": "MemberAccess",
                            "src": "927:7:81",
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
                          "id": 59007,
                          "name": "isAuthorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 59058,
                          "src": "902:12:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                            "typeString": "function (address,bytes4) view returns (bool)"
                          }
                        },
                        "id": 59012,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "902:33:81",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "554e415554484f52495a4544",
                        "id": 59013,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "937:14:81",
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
                      "id": 59006,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "894:7:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 59014,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "894:58:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59015,
                  "nodeType": "ExpressionStatement",
                  "src": "894:58:81"
                },
                {
                  "id": 59016,
                  "nodeType": "PlaceholderStatement",
                  "src": "963:1:81"
                }
              ]
            },
            "name": "requiresAuth",
            "nameLocation": "861:12:81",
            "parameters": {
              "id": 59005,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "873:2:81"
            },
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 59058,
            "nodeType": "FunctionDefinition",
            "src": "977:540:81",
            "nodes": [],
            "body": {
              "id": 59057,
              "nodeType": "Block",
              "src": "1070:447:81",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    59029
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 59029,
                      "mutability": "mutable",
                      "name": "auth",
                      "nameLocation": "1090:4:81",
                      "nodeType": "VariableDeclaration",
                      "scope": 59057,
                      "src": "1080:14:81",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$59126",
                        "typeString": "contract Authority"
                      },
                      "typeName": {
                        "id": 59028,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 59027,
                          "name": "Authority",
                          "nameLocations": [
                            "1080:9:81"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 59126,
                          "src": "1080:9:81"
                        },
                        "referencedDeclaration": 59126,
                        "src": "1080:9:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$59126",
                          "typeString": "contract Authority"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 59031,
                  "initialValue": {
                    "id": 59030,
                    "name": "authority",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 58975,
                    "src": "1097:9:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$59126",
                      "typeString": "contract Authority"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1080:26:81"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 59055,
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
                          "id": 59050,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 59040,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 59034,
                                  "name": "auth",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 59029,
                                  "src": "1423:4:81",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Authority_$59126",
                                    "typeString": "contract Authority"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Authority_$59126",
                                    "typeString": "contract Authority"
                                  }
                                ],
                                "id": 59033,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1415:7:81",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 59032,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1415:7:81",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 59035,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1415:13:81",
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
                                  "id": 59038,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1440:1:81",
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
                                "id": 59037,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1432:7:81",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 59036,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1432:7:81",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 59039,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1432:10:81",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "1415:27:81",
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
                                "id": 59043,
                                "name": "user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59020,
                                "src": "1459:4:81",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 59046,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "1473:4:81",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_Auth_$59113",
                                      "typeString": "contract Auth"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_Auth_$59113",
                                      "typeString": "contract Auth"
                                    }
                                  ],
                                  "id": 59045,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "1465:7:81",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 59044,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1465:7:81",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 59047,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1465:13:81",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 59048,
                                "name": "functionSig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59022,
                                "src": "1480:11:81",
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
                                "id": 59041,
                                "name": "auth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 59029,
                                "src": "1446:4:81",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Authority_$59126",
                                  "typeString": "contract Authority"
                                }
                              },
                              "id": 59042,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1451:7:81",
                              "memberName": "canCall",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 59125,
                              "src": "1446:12:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                "typeString": "function (address,address,bytes4) view external returns (bool)"
                              }
                            },
                            "id": 59049,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1446:46:81",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1415:77:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 59051,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1414:79:81",
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
                      "id": 59054,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 59052,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59020,
                        "src": "1497:4:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "id": 59053,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 58972,
                        "src": "1505:5:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1497:13:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1414:96:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 59026,
                  "id": 59056,
                  "nodeType": "Return",
                  "src": "1407:103:81"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isAuthorized",
            "nameLocation": "986:12:81",
            "parameters": {
              "id": 59023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59020,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1007:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 59058,
                  "src": "999:12:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59019,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "999:7:81",
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
                  "id": 59022,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "1020:11:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 59058,
                  "src": "1013:18:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 59021,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1013:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "998:34:81"
            },
            "returnParameters": {
              "id": 59026,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59025,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59058,
                  "src": "1064:4:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 59024,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1064:4:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1063:6:81"
            },
            "scope": 59113,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 59094,
            "nodeType": "FunctionDefinition",
            "src": "1523:434:81",
            "nodes": [],
            "body": {
              "id": 59093,
              "nodeType": "Block",
              "src": "1584:373:81",
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
                        "id": 59080,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 59068,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 59065,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1780:3:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 59066,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1784:6:81",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1780:10:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 59067,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 58972,
                            "src": "1794:5:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1780:19:81",
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
                                "id": 59071,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1821:3:81",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 59072,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1825:6:81",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "1821:10:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 59075,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "1841:4:81",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Auth_$59113",
                                    "typeString": "contract Auth"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Auth_$59113",
                                    "typeString": "contract Auth"
                                  }
                                ],
                                "id": 59074,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1833:7:81",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 59073,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1833:7:81",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 59076,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1833:13:81",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 59077,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1848:3:81",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 59078,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1852:3:81",
                              "memberName": "sig",
                              "nodeType": "MemberAccess",
                              "src": "1848:7:81",
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
                              "id": 59069,
                              "name": "authority",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 58975,
                              "src": "1803:9:81",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Authority_$59126",
                                "typeString": "contract Authority"
                              }
                            },
                            "id": 59070,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1813:7:81",
                            "memberName": "canCall",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 59125,
                            "src": "1803:17:81",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                              "typeString": "function (address,address,bytes4) view external returns (bool)"
                            }
                          },
                          "id": 59079,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1803:53:81",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1780:76:81",
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
                      "id": 59064,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1772:7:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 59081,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1772:85:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59082,
                  "nodeType": "ExpressionStatement",
                  "src": "1772:85:81"
                },
                {
                  "expression": {
                    "id": 59085,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 59083,
                      "name": "authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58975,
                      "src": "1868:9:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$59126",
                        "typeString": "contract Authority"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 59084,
                      "name": "newAuthority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59061,
                      "src": "1880:12:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$59126",
                        "typeString": "contract Authority"
                      }
                    },
                    "src": "1868:24:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$59126",
                      "typeString": "contract Authority"
                    }
                  },
                  "id": 59086,
                  "nodeType": "ExpressionStatement",
                  "src": "1868:24:81"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 59088,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1925:3:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 59089,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1929:6:81",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1925:10:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59090,
                        "name": "newAuthority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59061,
                        "src": "1937:12:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$59126",
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
                          "typeIdentifier": "t_contract$_Authority_$59126",
                          "typeString": "contract Authority"
                        }
                      ],
                      "id": 59087,
                      "name": "AuthorityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58970,
                      "src": "1908:16:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$59126_$returns$__$",
                        "typeString": "function (address,contract Authority)"
                      }
                    },
                    "id": 59091,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1908:42:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59092,
                  "nodeType": "EmitStatement",
                  "src": "1903:47:81"
                }
              ]
            },
            "functionSelector": "7a9e5e4b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setAuthority",
            "nameLocation": "1532:12:81",
            "parameters": {
              "id": 59062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59061,
                  "mutability": "mutable",
                  "name": "newAuthority",
                  "nameLocation": "1555:12:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 59094,
                  "src": "1545:22:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$59126",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 59060,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 59059,
                      "name": "Authority",
                      "nameLocations": [
                        "1545:9:81"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 59126,
                      "src": "1545:9:81"
                    },
                    "referencedDeclaration": 59126,
                    "src": "1545:9:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$59126",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1544:24:81"
            },
            "returnParameters": {
              "id": 59063,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1584:0:81"
            },
            "scope": 59113,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 59112,
            "nodeType": "FunctionDefinition",
            "src": "1963:164:81",
            "nodes": [],
            "body": {
              "id": 59111,
              "nodeType": "Block",
              "src": "2036:91:81",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 59103,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 59101,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58972,
                      "src": "2046:5:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 59102,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 59096,
                      "src": "2054:8:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2046:16:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 59104,
                  "nodeType": "ExpressionStatement",
                  "src": "2046:16:81"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 59106,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2099:3:81",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 59107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2103:6:81",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2099:10:81",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 59108,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 59096,
                        "src": "2111:8:81",
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
                      "id": 59105,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 58963,
                      "src": "2078:20:81",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 59109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2078:42:81",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 59110,
                  "nodeType": "EmitStatement",
                  "src": "2073:47:81"
                }
              ]
            },
            "functionSelector": "f2fde38b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 59099,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 59098,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "2023:12:81"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 59018,
                  "src": "2023:12:81"
                },
                "nodeType": "ModifierInvocation",
                "src": "2023:12:81"
              }
            ],
            "name": "transferOwnership",
            "nameLocation": "1972:17:81",
            "parameters": {
              "id": 59097,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59096,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "1998:8:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 59112,
                  "src": "1990:16:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59095,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1990:7:81",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1989:18:81"
            },
            "returnParameters": {
              "id": 59100,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2036:0:81"
            },
            "scope": 59113,
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
          "id": 58957,
          "nodeType": "StructuredDocumentation",
          "src": "68:301:81",
          "text": "@notice Provides a flexible and updatable auth pattern which is completely separate from application logic.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          59113
        ],
        "name": "Auth",
        "nameLocation": "387:4:81",
        "scope": 59127,
        "usedErrors": []
      },
      {
        "id": 59126,
        "nodeType": "ContractDefinition",
        "src": "2422:154:81",
        "nodes": [
          {
            "id": 59125,
            "nodeType": "FunctionDefinition",
            "src": "2448:126:81",
            "nodes": [],
            "functionSelector": "b7009613",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "canCall",
            "nameLocation": "2457:7:81",
            "parameters": {
              "id": 59121,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59116,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "2482:4:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 59125,
                  "src": "2474:12:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59115,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2474:7:81",
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
                  "id": 59118,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "2504:6:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 59125,
                  "src": "2496:14:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 59117,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2496:7:81",
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
                  "id": 59120,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "2527:11:81",
                  "nodeType": "VariableDeclaration",
                  "scope": 59125,
                  "src": "2520:18:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 59119,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2520:6:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2464:80:81"
            },
            "returnParameters": {
              "id": 59124,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 59123,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 59125,
                  "src": "2568:4:81",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 59122,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2568:4:81",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2567:6:81"
            },
            "scope": 59126,
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
          "id": 59114,
          "nodeType": "StructuredDocumentation",
          "src": "2131:291:81",
          "text": "@notice A generic interface for a contract which provides authorization data to an Auth instance.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          59126
        ],
        "name": "Authority",
        "nameLocation": "2432:9:81",
        "scope": 59127,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 81
} as const;
