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
    "id": 62037,
    "exportedSymbols": {
      "Auth": [
        62023
      ],
      "Authority": [
        62036
      ]
    },
    "nodeType": "SourceUnit",
    "src": "42:2535:91",
    "nodes": [
      {
        "id": 61866,
        "nodeType": "PragmaDirective",
        "src": "42:24:91",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 62023,
        "nodeType": "ContractDefinition",
        "src": "369:1760:91",
        "nodes": [
          {
            "id": 61873,
            "nodeType": "EventDefinition",
            "src": "398:75:91",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
            "name": "OwnershipTransferred",
            "nameLocation": "404:20:91",
            "parameters": {
              "id": 61872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61869,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "441:4:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61873,
                  "src": "425:20:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61868,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "425:7:91",
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
                  "id": 61871,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "463:8:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61873,
                  "src": "447:24:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61870,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "447:7:91",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "424:48:91"
            }
          },
          {
            "id": 61880,
            "nodeType": "EventDefinition",
            "src": "479:77:91",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "a3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b76389980198",
            "name": "AuthorityUpdated",
            "nameLocation": "485:16:91",
            "parameters": {
              "id": 61879,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61875,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "518:4:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61880,
                  "src": "502:20:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61874,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "502:7:91",
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
                  "id": 61878,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "newAuthority",
                  "nameLocation": "542:12:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61880,
                  "src": "524:30:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62036",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 61877,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61876,
                      "name": "Authority",
                      "nameLocations": [
                        "524:9:91"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62036,
                      "src": "524:9:91"
                    },
                    "referencedDeclaration": 62036,
                    "src": "524:9:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62036",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "501:54:91"
            }
          },
          {
            "id": 61882,
            "nodeType": "VariableDeclaration",
            "src": "562:20:91",
            "nodes": [],
            "constant": false,
            "functionSelector": "8da5cb5b",
            "mutability": "mutable",
            "name": "owner",
            "nameLocation": "577:5:91",
            "scope": 62023,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 61881,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "562:7:91",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "public"
          },
          {
            "id": 61885,
            "nodeType": "VariableDeclaration",
            "src": "589:26:91",
            "nodes": [],
            "constant": false,
            "functionSelector": "bf7e214f",
            "mutability": "mutable",
            "name": "authority",
            "nameLocation": "606:9:91",
            "scope": 62023,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Authority_$62036",
              "typeString": "contract Authority"
            },
            "typeName": {
              "id": 61884,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 61883,
                "name": "Authority",
                "nameLocations": [
                  "589:9:91"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 62036,
                "src": "589:9:91"
              },
              "referencedDeclaration": 62036,
              "src": "589:9:91",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Authority_$62036",
                "typeString": "contract Authority"
              }
            },
            "visibility": "public"
          },
          {
            "id": 61914,
            "nodeType": "FunctionDefinition",
            "src": "622:224:91",
            "nodes": [],
            "body": {
              "id": 61913,
              "nodeType": "Block",
              "src": "672:174:91",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 61895,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 61893,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61882,
                      "src": "682:5:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 61894,
                      "name": "_owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61887,
                      "src": "690:6:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "682:14:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 61896,
                  "nodeType": "ExpressionStatement",
                  "src": "682:14:91"
                },
                {
                  "expression": {
                    "id": 61899,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 61897,
                      "name": "authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61885,
                      "src": "706:9:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62036",
                        "typeString": "contract Authority"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 61898,
                      "name": "_authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61890,
                      "src": "718:10:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62036",
                        "typeString": "contract Authority"
                      }
                    },
                    "src": "706:22:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62036",
                      "typeString": "contract Authority"
                    }
                  },
                  "id": 61900,
                  "nodeType": "ExpressionStatement",
                  "src": "706:22:91"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61902,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "765:3:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 61903,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "769:6:91",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "765:10:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 61904,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61887,
                        "src": "777:6:91",
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
                      "id": 61901,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61873,
                      "src": "744:20:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 61905,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "744:40:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61906,
                  "nodeType": "EmitStatement",
                  "src": "739:45:91"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61908,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "816:3:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 61909,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "820:6:91",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "816:10:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 61910,
                        "name": "_authority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61890,
                        "src": "828:10:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$62036",
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
                          "typeIdentifier": "t_contract$_Authority_$62036",
                          "typeString": "contract Authority"
                        }
                      ],
                      "id": 61907,
                      "name": "AuthorityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61880,
                      "src": "799:16:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$62036_$returns$__$",
                        "typeString": "function (address,contract Authority)"
                      }
                    },
                    "id": 61911,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "799:40:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61912,
                  "nodeType": "EmitStatement",
                  "src": "794:45:91"
                }
              ]
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 61891,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61887,
                  "mutability": "mutable",
                  "name": "_owner",
                  "nameLocation": "642:6:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61914,
                  "src": "634:14:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61886,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "634:7:91",
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
                  "id": 61890,
                  "mutability": "mutable",
                  "name": "_authority",
                  "nameLocation": "660:10:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61914,
                  "src": "650:20:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62036",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 61889,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61888,
                      "name": "Authority",
                      "nameLocations": [
                        "650:9:91"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62036,
                      "src": "650:9:91"
                    },
                    "referencedDeclaration": 62036,
                    "src": "650:9:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62036",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "633:38:91"
            },
            "returnParameters": {
              "id": 61892,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "672:0:91"
            },
            "scope": 62023,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 61928,
            "nodeType": "ModifierDefinition",
            "src": "852:119:91",
            "nodes": [],
            "body": {
              "id": 61927,
              "nodeType": "Block",
              "src": "884:87:91",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "expression": {
                              "id": 61918,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "915:3:91",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 61919,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "919:6:91",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "915:10:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "expression": {
                              "id": 61920,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "927:3:91",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 61921,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "931:3:91",
                            "memberName": "sig",
                            "nodeType": "MemberAccess",
                            "src": "927:7:91",
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
                          "id": 61917,
                          "name": "isAuthorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 61968,
                          "src": "902:12:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_address_$_t_bytes4_$returns$_t_bool_$",
                            "typeString": "function (address,bytes4) view returns (bool)"
                          }
                        },
                        "id": 61922,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "902:33:91",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "554e415554484f52495a4544",
                        "id": 61923,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "937:14:91",
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
                      "id": 61916,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "894:7:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 61924,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "894:58:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61925,
                  "nodeType": "ExpressionStatement",
                  "src": "894:58:91"
                },
                {
                  "id": 61926,
                  "nodeType": "PlaceholderStatement",
                  "src": "963:1:91"
                }
              ]
            },
            "name": "requiresAuth",
            "nameLocation": "861:12:91",
            "parameters": {
              "id": 61915,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "873:2:91"
            },
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 61968,
            "nodeType": "FunctionDefinition",
            "src": "977:540:91",
            "nodes": [],
            "body": {
              "id": 61967,
              "nodeType": "Block",
              "src": "1070:447:91",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    61939
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 61939,
                      "mutability": "mutable",
                      "name": "auth",
                      "nameLocation": "1090:4:91",
                      "nodeType": "VariableDeclaration",
                      "scope": 61967,
                      "src": "1080:14:91",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62036",
                        "typeString": "contract Authority"
                      },
                      "typeName": {
                        "id": 61938,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 61937,
                          "name": "Authority",
                          "nameLocations": [
                            "1080:9:91"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 62036,
                          "src": "1080:9:91"
                        },
                        "referencedDeclaration": 62036,
                        "src": "1080:9:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$62036",
                          "typeString": "contract Authority"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 61941,
                  "initialValue": {
                    "id": 61940,
                    "name": "authority",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 61885,
                    "src": "1097:9:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62036",
                      "typeString": "contract Authority"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1080:26:91"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 61965,
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
                          "id": 61960,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "id": 61950,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 61944,
                                  "name": "auth",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 61939,
                                  "src": "1423:4:91",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Authority_$62036",
                                    "typeString": "contract Authority"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Authority_$62036",
                                    "typeString": "contract Authority"
                                  }
                                ],
                                "id": 61943,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1415:7:91",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 61942,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1415:7:91",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 61945,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1415:13:91",
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
                                  "id": 61948,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1440:1:91",
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
                                "id": 61947,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1432:7:91",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 61946,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1432:7:91",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 61949,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1432:10:91",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "1415:27:91",
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
                                "id": 61953,
                                "name": "user",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61930,
                                "src": "1459:4:91",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 61956,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "1473:4:91",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_Auth_$62023",
                                      "typeString": "contract Auth"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_Auth_$62023",
                                      "typeString": "contract Auth"
                                    }
                                  ],
                                  "id": 61955,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "1465:7:91",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 61954,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "1465:7:91",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 61957,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1465:13:91",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "id": 61958,
                                "name": "functionSig",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61932,
                                "src": "1480:11:91",
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
                                "id": 61951,
                                "name": "auth",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 61939,
                                "src": "1446:4:91",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Authority_$62036",
                                  "typeString": "contract Authority"
                                }
                              },
                              "id": 61952,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1451:7:91",
                              "memberName": "canCall",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 62035,
                              "src": "1446:12:91",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                                "typeString": "function (address,address,bytes4) view external returns (bool)"
                              }
                            },
                            "id": 61959,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1446:46:91",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1415:77:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 61961,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "1414:79:91",
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
                      "id": 61964,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 61962,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61930,
                        "src": "1497:4:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "id": 61963,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61882,
                        "src": "1505:5:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "src": "1497:13:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1414:96:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 61936,
                  "id": 61966,
                  "nodeType": "Return",
                  "src": "1407:103:91"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isAuthorized",
            "nameLocation": "986:12:91",
            "parameters": {
              "id": 61933,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61930,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "1007:4:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61968,
                  "src": "999:12:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 61929,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "999:7:91",
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
                  "id": 61932,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "1020:11:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 61968,
                  "src": "1013:18:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 61931,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1013:6:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "998:34:91"
            },
            "returnParameters": {
              "id": 61936,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61935,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 61968,
                  "src": "1064:4:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 61934,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1064:4:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1063:6:91"
            },
            "scope": 62023,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 62004,
            "nodeType": "FunctionDefinition",
            "src": "1523:434:91",
            "nodes": [],
            "body": {
              "id": 62003,
              "nodeType": "Block",
              "src": "1584:373:91",
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
                        "id": 61990,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 61978,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 61975,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1780:3:91",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 61976,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1784:6:91",
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "src": "1780:10:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 61977,
                            "name": "owner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 61882,
                            "src": "1794:5:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1780:19:91",
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
                                "id": 61981,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1821:3:91",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 61982,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1825:6:91",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "1821:10:91",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 61985,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "1841:4:91",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Auth_$62023",
                                    "typeString": "contract Auth"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_Auth_$62023",
                                    "typeString": "contract Auth"
                                  }
                                ],
                                "id": 61984,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1833:7:91",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 61983,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "1833:7:91",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 61986,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1833:13:91",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "expression": {
                                "id": 61987,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1848:3:91",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 61988,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "1852:3:91",
                              "memberName": "sig",
                              "nodeType": "MemberAccess",
                              "src": "1848:7:91",
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
                              "id": 61979,
                              "name": "authority",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 61885,
                              "src": "1803:9:91",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_Authority_$62036",
                                "typeString": "contract Authority"
                              }
                            },
                            "id": 61980,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1813:7:91",
                            "memberName": "canCall",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 62035,
                            "src": "1803:17:91",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$_t_bytes4_$returns$_t_bool_$",
                              "typeString": "function (address,address,bytes4) view external returns (bool)"
                            }
                          },
                          "id": 61989,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1803:53:91",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "src": "1780:76:91",
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
                      "id": 61974,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1772:7:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 61991,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1772:85:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61992,
                  "nodeType": "ExpressionStatement",
                  "src": "1772:85:91"
                },
                {
                  "expression": {
                    "id": 61995,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 61993,
                      "name": "authority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61885,
                      "src": "1868:9:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62036",
                        "typeString": "contract Authority"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 61994,
                      "name": "newAuthority",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61971,
                      "src": "1880:12:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Authority_$62036",
                        "typeString": "contract Authority"
                      }
                    },
                    "src": "1868:24:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62036",
                      "typeString": "contract Authority"
                    }
                  },
                  "id": 61996,
                  "nodeType": "ExpressionStatement",
                  "src": "1868:24:91"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 61998,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1925:3:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 61999,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1929:6:91",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "1925:10:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62000,
                        "name": "newAuthority",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 61971,
                        "src": "1937:12:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_Authority_$62036",
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
                          "typeIdentifier": "t_contract$_Authority_$62036",
                          "typeString": "contract Authority"
                        }
                      ],
                      "id": 61997,
                      "name": "AuthorityUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61880,
                      "src": "1908:16:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_contract$_Authority_$62036_$returns$__$",
                        "typeString": "function (address,contract Authority)"
                      }
                    },
                    "id": 62001,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1908:42:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62002,
                  "nodeType": "EmitStatement",
                  "src": "1903:47:91"
                }
              ]
            },
            "functionSelector": "7a9e5e4b",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setAuthority",
            "nameLocation": "1532:12:91",
            "parameters": {
              "id": 61972,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61971,
                  "mutability": "mutable",
                  "name": "newAuthority",
                  "nameLocation": "1555:12:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 62004,
                  "src": "1545:22:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_Authority_$62036",
                    "typeString": "contract Authority"
                  },
                  "typeName": {
                    "id": 61970,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 61969,
                      "name": "Authority",
                      "nameLocations": [
                        "1545:9:91"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62036,
                      "src": "1545:9:91"
                    },
                    "referencedDeclaration": 62036,
                    "src": "1545:9:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Authority_$62036",
                      "typeString": "contract Authority"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1544:24:91"
            },
            "returnParameters": {
              "id": 61973,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1584:0:91"
            },
            "scope": 62023,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "id": 62022,
            "nodeType": "FunctionDefinition",
            "src": "1963:164:91",
            "nodes": [],
            "body": {
              "id": 62021,
              "nodeType": "Block",
              "src": "2036:91:91",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 62013,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 62011,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61882,
                      "src": "2046:5:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 62012,
                      "name": "newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 62006,
                      "src": "2054:8:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "2046:16:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 62014,
                  "nodeType": "ExpressionStatement",
                  "src": "2046:16:91"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 62016,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "2099:3:91",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 62017,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "2103:6:91",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "2099:10:91",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 62018,
                        "name": "newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 62006,
                        "src": "2111:8:91",
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
                      "id": 62015,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 61873,
                      "src": "2078:20:91",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 62019,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2078:42:91",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 62020,
                  "nodeType": "EmitStatement",
                  "src": "2073:47:91"
                }
              ]
            },
            "functionSelector": "f2fde38b",
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "id": 62009,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 62008,
                  "name": "requiresAuth",
                  "nameLocations": [
                    "2023:12:91"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 61928,
                  "src": "2023:12:91"
                },
                "nodeType": "ModifierInvocation",
                "src": "2023:12:91"
              }
            ],
            "name": "transferOwnership",
            "nameLocation": "1972:17:91",
            "parameters": {
              "id": 62007,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62006,
                  "mutability": "mutable",
                  "name": "newOwner",
                  "nameLocation": "1998:8:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 62022,
                  "src": "1990:16:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62005,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1990:7:91",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1989:18:91"
            },
            "returnParameters": {
              "id": 62010,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2036:0:91"
            },
            "scope": 62023,
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
          "id": 61867,
          "nodeType": "StructuredDocumentation",
          "src": "68:301:91",
          "text": "@notice Provides a flexible and updatable auth pattern which is completely separate from application logic.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          62023
        ],
        "name": "Auth",
        "nameLocation": "387:4:91",
        "scope": 62037,
        "usedErrors": []
      },
      {
        "id": 62036,
        "nodeType": "ContractDefinition",
        "src": "2422:154:91",
        "nodes": [
          {
            "id": 62035,
            "nodeType": "FunctionDefinition",
            "src": "2448:126:91",
            "nodes": [],
            "functionSelector": "b7009613",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "canCall",
            "nameLocation": "2457:7:91",
            "parameters": {
              "id": 62031,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62026,
                  "mutability": "mutable",
                  "name": "user",
                  "nameLocation": "2482:4:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 62035,
                  "src": "2474:12:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62025,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2474:7:91",
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
                  "id": 62028,
                  "mutability": "mutable",
                  "name": "target",
                  "nameLocation": "2504:6:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 62035,
                  "src": "2496:14:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 62027,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2496:7:91",
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
                  "id": 62030,
                  "mutability": "mutable",
                  "name": "functionSig",
                  "nameLocation": "2527:11:91",
                  "nodeType": "VariableDeclaration",
                  "scope": 62035,
                  "src": "2520:18:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 62029,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2520:6:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2464:80:91"
            },
            "returnParameters": {
              "id": 62034,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 62033,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 62035,
                  "src": "2568:4:91",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 62032,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2568:4:91",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2567:6:91"
            },
            "scope": 62036,
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
          "id": 62024,
          "nodeType": "StructuredDocumentation",
          "src": "2131:291:91",
          "text": "@notice A generic interface for a contract which provides authorization data to an Auth instance.\n @author Solmate (https://github.com/transmissions11/solmate/blob/main/src/auth/Auth.sol)\n @author Modified from Dappsys (https://github.com/dapphub/ds-auth/blob/master/src/auth.sol)"
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          62036
        ],
        "name": "Authority",
        "nameLocation": "2432:9:91",
        "scope": 62037,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0-only"
  },
  "id": 91
} as const;
