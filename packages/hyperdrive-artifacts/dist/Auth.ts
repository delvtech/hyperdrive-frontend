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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"AuthorityUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"user\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"authority\",\"outputs\":[{\"internalType\":\"contract Authority\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract Authority\",\"name\":\"newAuthority\",\"type\":\"address\"}],\"name\":\"setAuthority\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Provides a flexible and updatable auth pattern which is completely separate from application logic.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/solmate/src/auth/Auth.sol\":\"Auth\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/solmate/src/auth/Auth.sol\":{\"keccak256\":\"0x6e05238d59cd40172c04c1974eb8f1f6cef4fdc4b6553ef7844a7302b885f76c\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://a9743c21ca0470d9082e4cf00aea53786868c977d40775e6954463658ebb50ac\",\"dweb:/ipfs/QmPFdyrLHUX1zSipTC2tcJ58EzxxPp2TTvCZx9KCgqZn2W\"]}},\"version\":1}",
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
        "@aave/=lib/aave-v3-core/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
        "create3-factory/=lib/yield-daddy/lib/create3-factory/",
        "ds-test/=lib/forge-std/lib/ds-test/src/",
        "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
        "forge-std/=lib/forge-std/src/",
        "openzeppelin-contracts/=lib/openzeppelin-contracts/",
        "solmate/=lib/solmate/src/",
        "yield-daddy/=lib/yield-daddy/",
        "lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/"
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
    "id": 62743,
    "exportedSymbols": {
      "Auth": [
        62729
      ],
      "Authority": [
        62742
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:2535:97",
    "nodes": [
      {
        "id": 62572,
        "nodeType": "PragmaDirective",
        "src": "42:24:97",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 62729,
        "nodeType": "ContractDefinition",
        "src": "369:1760:97",
        "nodes": [
          {
            "id": 62579,
            "nodeType": "EventDefinition",
            "src": "398:75:97",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
            "name": "OwnershipTransferred",
            "nameLocation": "404:20:97",
            "parameters": {
              "id": 62578,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62575,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "441:4:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 62579,
                  "src": "425:20:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62574,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "425:7:97",
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
                  "id": 62577,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "463:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 62579,
                  "src": "447:24:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62576,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:97",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "424:48:97"
            }
          },
          {
            "id": 62586,
            "nodeType": "EventDefinition",
            "src": "479:77:97",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198",
            "name": "AuthorityUpdated",
            "nameLocation": "485:16:97",
            "parameters": {
              "id": 62585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62581,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "518:4:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 62586,
                  "src": "502:20:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62580,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "502:7:97",
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
                  "id": 62584,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newAuthority",
                  "nameLocation": "542:12:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 62586,
                  "src": "524:30:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62742",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 62583,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62582,
                      "name": "Authority",
                      "nameLocations": [
                        "524:9:97"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62742,
                      "src": "524:9:97"
                    },
                    "referencedDeclaration": 62742,
                    "src": "524:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62742",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "501:54:97"
            }
          },
          {
            "id": 62588,
            "nodeType": "VariableDeclaration",
            "src": "562:20:97",
            "nodes": [],
            "constant": false,
            "functionSelector": "8da5cb5b",
            "mutability": "mutable",
            "name": "owner",
            "nameLocation": "577:5:97",
            "scope": 62729,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 62587,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "562:7:97",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 62591,
            "nodeType": "VariableDeclaration",
            "src": "589:26:97",
            "nodes": [],
            "constant": false,
            "functionSelector": "bf7e214f",
            "mutability": "mutable",
            "name": "authority",
            "nameLocation": "606:9:97",
            "scope": 62729,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Authority_$62742",
              "typeString": "contract Authority"
            },
            "typeName": {
              "id": 62590,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 62589,
                "name": "Authority",
                "nameLocations": [
                  "589:9:97"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 62742,
                "src": "589:9:97"
              },
              "referencedDeclaration": 62742,
              "src": "589:9:97",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Authority_$62742",
                "typeString": "contract Authority"
              }
            },
            "visibility": "public"
          },
          {
            "id": 62620,
            "nodeType": "FunctionDefinition",
            "src": "622:224:97",
            "nodes": [],
            "body": {
              "id": 62619,
              "nodeType": "Block",
              "src": "672:174:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 62601,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62599,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62588,
                      "src": "682:5:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62600,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62593,
                      "src": "690:6:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "682:14:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 62602,
                  "nodeType": "ExpressionStatement",
                  "src": "682:14:97"
                },
                {
                  "expression": {
                    "id": 62605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62603,
                      "name": "authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62591,
                      "src": "706:9:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62742",
                        "typeString": "contract Authority"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62604,
                      "name": "_authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62596,
                      "src": "718:10:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62742",
                        "typeString": "contract Authority"
                      }
                    },
                    "src": "706:22:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62742",
                      "typeString": "contract Authority"
                    }
                  },
                  "id": 62606,
                  "nodeType": "ExpressionStatement",
                  "src": "706:22:97"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62608,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "765:3:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 62609,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "769:6:97",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "765:10:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62610,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62593,
                        "src": "777:6:97",
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
                      "id": 62607,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62579,
                      "src": "744:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 62611,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "744:40:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62612,
                  "nodeType": "EmitStatement",
                  "src": "739:45:97"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62614,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "816:3:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 62615,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "820:6:97",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "816:10:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62616,
                        "name": "_authority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62596,
                        "src": "828:10:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$62742",
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
                          "typeIdentifier": "t_contract$_Authority_$62742",
                          "typeString": "contract Authority"
                        }
                      ],
                      "id": 62613,
                      "name": "AuthorityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62586,
                      "src": "799:16:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$62742_$returns$__$",
                        "typeString": "function (address,contract Authority)"
                      }
                    },
                    "id": 62617,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "799:40:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62618,
                  "nodeType": "EmitStatement",
                  "src": "794:45:97"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 62597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62593,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "642:6:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 62620,
                  "src": "634:14:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62592,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "634:7:97",
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
                  "id": 62596,
                  "mutability": "mutable",
                  "name": "_authority",
                  "nameLocation": "660:10:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 62620,
                  "src": "650:20:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62742",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 62595,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62594,
                      "name": "Authority",
                      "nameLocations": [
                        "650:9:97"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62742,
                      "src": "650:9:97"
                    },
                    "referencedDeclaration": 62742,
                    "src": "650:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62742",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "633:38:97"
            },
            "returnParameters": {
              "id": 62598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "672:0:97"
            },
            "scope": 62729,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 62634,
            "nodeType": "ModifierDefinition",
            "src": "852:119:97",
            "nodes": [],
            "body": {
              "id": 62633,
              "nodeType": "Block",
              "src": "884:87:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 62624,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "915:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 62625,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "919:6:97",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "915:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "expression": {
                              "id": 62626,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "927:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 62627,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "931:3:97",
                            "memberName": "sig",
                            "nodeType": "MemberAccess",
                            "src": "927:7:97",
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
                          "id": 62623,
                          "name": "isAuthorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 62674,
                          "src": "902:12:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                            "typeString": "function (address,bytes4) view returns (bool)"
                          }
                        },
                        "id": 62628,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "902:33:97",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "554e415554484f52495a4544",
                        "id": 62629,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "937:14:97",
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
                      "id": 62622,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "894:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 62630,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "894:58:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62631,
                  "nodeType": "ExpressionStatement",
                  "src": "894:58:97"
                },
                {
                  "id": 62632,
                  "nodeType": "PlaceholderStatement",
                  "src": "963:1:97"
                }
              ]
            },
            "name": "requiresAuth",
            "nameLocation": "861:12:97",
            "parameters": {
              "id": 62621,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "873:2:97"
            },
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 62674,
            "nodeType": "FunctionDefinition",
            "src": "977:540:97",
            "nodes": [],
            "body": {
              "id": 62673,
              "nodeType": "Block",
              "src": "1070:447:97",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    62645
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 62645,
                      "mutability": "mutable",
                      "name": "auth",
                      "nameLocation": "1090:4:97",
                      "nodeType": "VariableDeclaration",
                      "scope": 62673,
                      "src": "1080:14:97",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62742",
                        "typeString": "contract Authority"
                      },
                      "typeName": {
                        "id": 62644,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 62643,
                          "name": "Authority",
                          "nameLocations": [
                            "1080:9:97"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62742,
                          "src": "1080:9:97"
                        },
                        "referencedDeclaration": 62742,
                        "src": "1080:9:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$62742",
                          "typeString": "contract Authority"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 62647,
                  "initialValue": {
                    "id": 62646,
                    "name": "authority",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 62591,
                    "src": "1097:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62742",
                      "typeString": "contract Authority"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1080:26:97"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 62671,
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
                          "id": 62666,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 62656,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 62650,
                                  "name": "auth",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 62645,
                                  "src": "1423:4:97",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Authority_$62742",
                                    "typeString": "contract Authority"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Authority_$62742",
                                    "typeString": "contract Authority"
                                  }
                                ],
                                "id": 62649,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1415:7:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 62648,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1415:7:97",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62651,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1415:13:97",
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
                                  "id": 62654,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1440:1:97",
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
                                "id": 62653,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1432:7:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 62652,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1432:7:97",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62655,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1432:10:97",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "1415:27:97",
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
                                "id": 62659,
                                "name": "user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62636,
                                "src": "1459:4:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 62662,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "1473:4:97",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_Auth_$62729",
                                      "typeString": "contract Auth"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_Auth_$62729",
                                      "typeString": "contract Auth"
                                    }
                                  ],
                                  "id": 62661,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "1465:7:97",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 62660,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1465:7:97",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 62663,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1465:13:97",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 62664,
                                "name": "functionSig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62638,
                                "src": "1480:11:97",
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
                                "id": 62657,
                                "name": "auth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 62645,
                                "src": "1446:4:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Authority_$62742",
                                  "typeString": "contract Authority"
                                }
                              },
                              "id": 62658,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1451:7:97",
                              "memberName": "canCall",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62741,
                              "src": "1446:12:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                "typeString": "function (address,address,bytes4) view external returns (bool)"
                              }
                            },
                            "id": 62665,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1446:46:97",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1415:77:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 62667,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1414:79:97",
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
                      "id": 62670,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 62668,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62636,
                        "src": "1497:4:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "id": 62669,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62588,
                        "src": "1505:5:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1497:13:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1414:96:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 62642,
                  "id": 62672,
                  "nodeType": "Return",
                  "src": "1407:103:97"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isAuthorized",
            "nameLocation": "986:12:97",
            "parameters": {
              "id": 62639,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62636,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1007:4:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 62674,
                  "src": "999:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62635,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "999:7:97",
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
                  "id": 62638,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "1020:11:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 62674,
                  "src": "1013:18:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62637,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1013:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "998:34:97"
            },
            "returnParameters": {
              "id": 62642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62641,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62674,
                  "src": "1064:4:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62640,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1064:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1063:6:97"
            },
            "scope": 62729,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 62710,
            "nodeType": "FunctionDefinition",
            "src": "1523:434:97",
            "nodes": [],
            "body": {
              "id": 62709,
              "nodeType": "Block",
              "src": "1584:373:97",
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
                        "id": 62696,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 62684,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 62681,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1780:3:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 62682,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1784:6:97",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1780:10:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 62683,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 62588,
                            "src": "1794:5:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1780:19:97",
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
                                "id": 62687,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1821:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 62688,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1825:6:97",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "1821:10:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 62691,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "1841:4:97",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Auth_$62729",
                                    "typeString": "contract Auth"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Auth_$62729",
                                    "typeString": "contract Auth"
                                  }
                                ],
                                "id": 62690,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1833:7:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 62689,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1833:7:97",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 62692,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1833:13:97",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 62693,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1848:3:97",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 62694,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1852:3:97",
                              "memberName": "sig",
                              "nodeType": "MemberAccess",
                              "src": "1848:7:97",
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
                              "id": 62685,
                              "name": "authority",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 62591,
                              "src": "1803:9:97",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Authority_$62742",
                                "typeString": "contract Authority"
                              }
                            },
                            "id": 62686,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1813:7:97",
                            "memberName": "canCall",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 62741,
                            "src": "1803:17:97",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                              "typeString": "function (address,address,bytes4) view external returns (bool)"
                            }
                          },
                          "id": 62695,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1803:53:97",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1780:76:97",
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
                      "id": 62680,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1772:7:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 62697,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1772:85:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62698,
                  "nodeType": "ExpressionStatement",
                  "src": "1772:85:97"
                },
                {
                  "expression": {
                    "id": 62701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62699,
                      "name": "authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62591,
                      "src": "1868:9:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62742",
                        "typeString": "contract Authority"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62700,
                      "name": "newAuthority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62677,
                      "src": "1880:12:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62742",
                        "typeString": "contract Authority"
                      }
                    },
                    "src": "1868:24:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62742",
                      "typeString": "contract Authority"
                    }
                  },
                  "id": 62702,
                  "nodeType": "ExpressionStatement",
                  "src": "1868:24:97"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62704,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1925:3:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 62705,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1929:6:97",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1925:10:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62706,
                        "name": "newAuthority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62677,
                        "src": "1937:12:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$62742",
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
                          "typeIdentifier": "t_contract$_Authority_$62742",
                          "typeString": "contract Authority"
                        }
                      ],
                      "id": 62703,
                      "name": "AuthorityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62586,
                      "src": "1908:16:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$62742_$returns$__$",
                        "typeString": "function (address,contract Authority)"
                      }
                    },
                    "id": 62707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1908:42:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62708,
                  "nodeType": "EmitStatement",
                  "src": "1903:47:97"
                }
              ]
            },
            "functionSelector": "7a9e5e4b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setAuthority",
            "nameLocation": "1532:12:97",
            "parameters": {
              "id": 62678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62677,
                  "mutability": "mutable",
                  "name": "newAuthority",
                  "nameLocation": "1555:12:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 62710,
                  "src": "1545:22:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62742",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 62676,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 62675,
                      "name": "Authority",
                      "nameLocations": [
                        "1545:9:97"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62742,
                      "src": "1545:9:97"
                    },
                    "referencedDeclaration": 62742,
                    "src": "1545:9:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62742",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1544:24:97"
            },
            "returnParameters": {
              "id": 62679,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1584:0:97"
            },
            "scope": 62729,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 62728,
            "nodeType": "FunctionDefinition",
            "src": "1963:164:97",
            "nodes": [],
            "body": {
              "id": 62727,
              "nodeType": "Block",
              "src": "2036:91:97",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 62719,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62717,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62588,
                      "src": "2046:5:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62718,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62712,
                      "src": "2054:8:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2046:16:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 62720,
                  "nodeType": "ExpressionStatement",
                  "src": "2046:16:97"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62722,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2099:3:97",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 62723,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2103:6:97",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2099:10:97",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62724,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62712,
                        "src": "2111:8:97",
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
                      "id": 62721,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62579,
                      "src": "2078:20:97",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 62725,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2078:42:97",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62726,
                  "nodeType": "EmitStatement",
                  "src": "2073:47:97"
                }
              ]
            },
            "functionSelector": "f2fde38b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 62715,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 62714,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "2023:12:97"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 62634,
                  "src": "2023:12:97"
                },
                "nodeType": "ModifierInvocation",
                "src": "2023:12:97"
              }
            ],
            "name": "transferOwnership",
            "nameLocation": "1972:17:97",
            "parameters": {
              "id": 62713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62712,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "1998:8:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 62728,
                  "src": "1990:16:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62711,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1990:7:97",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1989:18:97"
            },
            "returnParameters": {
              "id": 62716,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2036:0:97"
            },
            "scope": 62729,
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
          "id": 62573,
          "nodeType": "StructuredDocumentation",
          "src": "68:301:97",
          "text": "@notice Provides a flexible and updatable auth pattern which is completely separate from application logic.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          62729
        ],
        "name": "Auth",
        "nameLocation": "387:4:97",
        "scope": 62743,
        "usedErrors": []
      },
      {
        "id": 62742,
        "nodeType": "ContractDefinition",
        "src": "2422:154:97",
        "nodes": [
          {
            "id": 62741,
            "nodeType": "FunctionDefinition",
            "src": "2448:126:97",
            "nodes": [],
            "functionSelector": "b7009613",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "canCall",
            "nameLocation": "2457:7:97",
            "parameters": {
              "id": 62737,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62732,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "2482:4:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 62741,
                  "src": "2474:12:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62731,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2474:7:97",
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
                  "id": 62734,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "2504:6:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 62741,
                  "src": "2496:14:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62733,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2496:7:97",
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
                  "id": 62736,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "2527:11:97",
                  "nodeType": "VariableDeclaration",
                  "scope": 62741,
                  "src": "2520:18:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62735,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2520:6:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2464:80:97"
            },
            "returnParameters": {
              "id": 62740,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62739,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62741,
                  "src": "2568:4:97",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62738,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2568:4:97",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2567:6:97"
            },
            "scope": 62742,
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
          "id": 62730,
          "nodeType": "StructuredDocumentation",
          "src": "2131:291:97",
          "text": "@notice A generic interface for a contract which provides authorization data to an Auth instance.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          62742
        ],
        "name": "Authority",
        "nameLocation": "2432:9:97",
        "scope": 62743,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 97
} as const;
