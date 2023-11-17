export const StdInvariant = 
{
  "abi": [
    {
      "inputs": [],
      "name": "excludeArtifacts",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "excludedArtifacts_",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "excludeContracts",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "excludedContracts_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "excludeSenders",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "excludedSenders_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetArtifactSelectors",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "bytes4[]",
              "name": "selectors",
              "type": "bytes4[]"
            }
          ],
          "internalType": "struct StdInvariant.FuzzSelector[]",
          "name": "targetedArtifactSelectors_",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetArtifacts",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "targetedArtifacts_",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetContracts",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "targetedContracts_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetSelectors",
      "outputs": [
        {
          "components": [
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            },
            {
              "internalType": "bytes4[]",
              "name": "selectors",
              "type": "bytes4[]"
            }
          ],
          "internalType": "struct StdInvariant.FuzzSelector[]",
          "name": "targetedSelectors_",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "targetSenders",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "targetedSenders_",
          "type": "address[]"
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
    "excludeArtifacts()": "b5508aa9",
    "excludeContracts()": "e20c9f71",
    "excludeSenders()": "1ed7831c",
    "targetArtifactSelectors()": "66d9a9a0",
    "targetArtifacts()": "85226c81",
    "targetContracts()": "3f7286f4",
    "targetSelectors()": "916a17c6",
    "targetSenders()": "3e5e3c23"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdInvariant.sol\":\"StdInvariant\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "excludeArtifacts",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "excludedArtifacts_",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "excludeContracts",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "excludedContracts_",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "excludeSenders",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "excludedSenders_",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetArtifactSelectors",
          "outputs": [
            {
              "internalType": "struct StdInvariant.FuzzSelector[]",
              "name": "targetedArtifactSelectors_",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "bytes4[]",
                  "name": "selectors",
                  "type": "bytes4[]"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetArtifacts",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "targetedArtifacts_",
              "type": "string[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetContracts",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "targetedContracts_",
              "type": "address[]"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetSelectors",
          "outputs": [
            {
              "internalType": "struct StdInvariant.FuzzSelector[]",
              "name": "targetedSelectors_",
              "type": "tuple[]",
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "bytes4[]",
                  "name": "selectors",
                  "type": "bytes4[]"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "targetSenders",
          "outputs": [
            {
              "internalType": "address[]",
              "name": "targetedSenders_",
              "type": "address[]"
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
        "lib/forge-std/src/StdInvariant.sol": "StdInvariant"
      },
      "libraries": {}
    },
    "sources": {
      "lib/forge-std/src/StdInvariant.sol": {
        "keccak256": "0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1",
        "urls": [
          "bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c",
          "dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/forge-std/src/StdInvariant.sol",
    "id": 23678,
    "exportedSymbols": {
      "StdInvariant": [
        23677
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:3043:69",
    "nodes": [
      {
        "id": 23455,
        "nodeType": "PragmaDirective",
        "src": "32:31:69",
        "nodes": [],
        "literals": [
          "solidity",
          ">=",
          "0.6",
          ".2",
          "<",
          "0.9",
          ".0"
        ]
      },
      {
        "id": 23456,
        "nodeType": "PragmaDirective",
        "src": "65:33:69",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 23677,
        "nodeType": "ContractDefinition",
        "src": "100:2974:69",
        "nodes": [
          {
            "id": 23462,
            "nodeType": "StructDefinition",
            "src": "137:77:69",
            "nodes": [],
            "canonicalName": "StdInvariant.FuzzSelector",
            "members": [
              {
                "constant": false,
                "id": 23458,
                "mutability": "mutable",
                "name": "addr",
                "nameLocation": "175:4:69",
                "nodeType": "VariableDeclaration",
                "scope": 23462,
                "src": "167:12:69",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 23457,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "167:7:69",
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
                "id": 23461,
                "mutability": "mutable",
                "name": "selectors",
                "nameLocation": "198:9:69",
                "nodeType": "VariableDeclaration",
                "scope": 23462,
                "src": "189:18:69",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                  "typeString": "bytes4[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 23459,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "189:6:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "id": 23460,
                  "nodeType": "ArrayTypeName",
                  "src": "189:8:69",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                    "typeString": "bytes4[]"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "FuzzSelector",
            "nameLocation": "144:12:69",
            "scope": 23677,
            "visibility": "public"
          },
          {
            "id": 23465,
            "nodeType": "VariableDeclaration",
            "src": "220:36:69",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedContracts",
            "nameLocation": "238:18:69",
            "scope": 23677,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 23463,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "220:7:69",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 23464,
              "nodeType": "ArrayTypeName",
              "src": "220:9:69",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 23468,
            "nodeType": "VariableDeclaration",
            "src": "262:34:69",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedSenders",
            "nameLocation": "280:16:69",
            "scope": 23677,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 23466,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "262:7:69",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 23467,
              "nodeType": "ArrayTypeName",
              "src": "262:9:69",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 23471,
            "nodeType": "VariableDeclaration",
            "src": "302:36:69",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedContracts",
            "nameLocation": "320:18:69",
            "scope": 23677,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 23469,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "302:7:69",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 23470,
              "nodeType": "ArrayTypeName",
              "src": "302:9:69",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 23474,
            "nodeType": "VariableDeclaration",
            "src": "344:34:69",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedSenders",
            "nameLocation": "362:16:69",
            "scope": 23677,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 23472,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "344:7:69",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 23473,
              "nodeType": "ArrayTypeName",
              "src": "344:9:69",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 23477,
            "nodeType": "VariableDeclaration",
            "src": "385:35:69",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedArtifacts",
            "nameLocation": "402:18:69",
            "scope": 23677,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 23475,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "385:6:69",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 23476,
              "nodeType": "ArrayTypeName",
              "src": "385:8:69",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 23480,
            "nodeType": "VariableDeclaration",
            "src": "426:35:69",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedArtifacts",
            "nameLocation": "443:18:69",
            "scope": 23677,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 23478,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "426:6:69",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 23479,
              "nodeType": "ArrayTypeName",
              "src": "426:8:69",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 23484,
            "nodeType": "VariableDeclaration",
            "src": "468:49:69",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedArtifactSelectors",
            "nameLocation": "491:26:69",
            "scope": 23677,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage",
              "typeString": "struct StdInvariant.FuzzSelector[]"
            },
            "typeName": {
              "baseType": {
                "id": 23482,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 23481,
                  "name": "FuzzSelector",
                  "nameLocations": [
                    "468:12:69"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 23462,
                  "src": "468:12:69"
                },
                "referencedDeclaration": 23462,
                "src": "468:12:69",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_FuzzSelector_$23462_storage_ptr",
                  "typeString": "struct StdInvariant.FuzzSelector"
                }
              },
              "id": 23483,
              "nodeType": "ArrayTypeName",
              "src": "468:14:69",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage_ptr",
                "typeString": "struct StdInvariant.FuzzSelector[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 23488,
            "nodeType": "VariableDeclaration",
            "src": "523:41:69",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedSelectors",
            "nameLocation": "546:18:69",
            "scope": 23677,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage",
              "typeString": "struct StdInvariant.FuzzSelector[]"
            },
            "typeName": {
              "baseType": {
                "id": 23486,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 23485,
                  "name": "FuzzSelector",
                  "nameLocations": [
                    "523:12:69"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 23462,
                  "src": "523:12:69"
                },
                "referencedDeclaration": 23462,
                "src": "523:12:69",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_FuzzSelector_$23462_storage_ptr",
                  "typeString": "struct StdInvariant.FuzzSelector"
                }
              },
              "id": 23487,
              "nodeType": "ArrayTypeName",
              "src": "523:14:69",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage_ptr",
                "typeString": "struct StdInvariant.FuzzSelector[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 23500,
            "nodeType": "FunctionDefinition",
            "src": "649:126:69",
            "nodes": [],
            "body": {
              "id": 23499,
              "nodeType": "Block",
              "src": "713:62:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23496,
                        "name": "newExcludedContract_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23490,
                        "src": "747:20:69",
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
                        }
                      ],
                      "expression": {
                        "id": 23493,
                        "name": "_excludedContracts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23465,
                        "src": "723:18:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 23495,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "742:4:69",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "723:23:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 23497,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "723:45:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23498,
                  "nodeType": "ExpressionStatement",
                  "src": "723:45:69"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeContract",
            "nameLocation": "658:15:69",
            "parameters": {
              "id": 23491,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23490,
                  "mutability": "mutable",
                  "name": "newExcludedContract_",
                  "nameLocation": "682:20:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23500,
                  "src": "674:28:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23489,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "673:30:69"
            },
            "returnParameters": {
              "id": 23492,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "713:0:69"
            },
            "scope": 23677,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23512,
            "nodeType": "FunctionDefinition",
            "src": "781:118:69",
            "nodes": [],
            "body": {
              "id": 23511,
              "nodeType": "Block",
              "src": "841:58:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23508,
                        "name": "newExcludedSender_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23502,
                        "src": "873:18:69",
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
                        }
                      ],
                      "expression": {
                        "id": 23505,
                        "name": "_excludedSenders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23468,
                        "src": "851:16:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 23507,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "868:4:69",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "851:21:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 23509,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "851:41:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23510,
                  "nodeType": "ExpressionStatement",
                  "src": "851:41:69"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeSender",
            "nameLocation": "790:13:69",
            "parameters": {
              "id": 23503,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23502,
                  "mutability": "mutable",
                  "name": "newExcludedSender_",
                  "nameLocation": "812:18:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23512,
                  "src": "804:26:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23501,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "804:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "803:28:69"
            },
            "returnParameters": {
              "id": 23504,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "841:0:69"
            },
            "scope": 23677,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23524,
            "nodeType": "FunctionDefinition",
            "src": "905:132:69",
            "nodes": [],
            "body": {
              "id": 23523,
              "nodeType": "Block",
              "src": "975:62:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23520,
                        "name": "newExcludedArtifact_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23514,
                        "src": "1009:20:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 23517,
                        "name": "_excludedArtifacts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23477,
                        "src": "985:18:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 23519,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1004:4:69",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "985:23:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                        "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                      }
                    },
                    "id": 23521,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "985:45:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23522,
                  "nodeType": "ExpressionStatement",
                  "src": "985:45:69"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeArtifact",
            "nameLocation": "914:15:69",
            "parameters": {
              "id": 23515,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23514,
                  "mutability": "mutable",
                  "name": "newExcludedArtifact_",
                  "nameLocation": "944:20:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23524,
                  "src": "930:34:69",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23513,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "930:6:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "929:36:69"
            },
            "returnParameters": {
              "id": 23516,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "975:0:69"
            },
            "scope": 23677,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23536,
            "nodeType": "FunctionDefinition",
            "src": "1043:131:69",
            "nodes": [],
            "body": {
              "id": 23535,
              "nodeType": "Block",
              "src": "1112:62:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23532,
                        "name": "newTargetedArtifact_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23526,
                        "src": "1146:20:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "id": 23529,
                        "name": "_targetedArtifacts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23480,
                        "src": "1122:18:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 23531,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1141:4:69",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1122:23:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                        "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                      }
                    },
                    "id": 23533,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1122:45:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23534,
                  "nodeType": "ExpressionStatement",
                  "src": "1122:45:69"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifact",
            "nameLocation": "1052:14:69",
            "parameters": {
              "id": 23527,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23526,
                  "mutability": "mutable",
                  "name": "newTargetedArtifact_",
                  "nameLocation": "1081:20:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23536,
                  "src": "1067:34:69",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 23525,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1067:6:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1066:36:69"
            },
            "returnParameters": {
              "id": 23528,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1112:0:69"
            },
            "scope": 23677,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23549,
            "nodeType": "FunctionDefinition",
            "src": "1180:169:69",
            "nodes": [],
            "body": {
              "id": 23548,
              "nodeType": "Block",
              "src": "1271:78:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23545,
                        "name": "newTargetedArtifactSelector_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23539,
                        "src": "1313:28:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FuzzSelector_$23462_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_FuzzSelector_$23462_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      ],
                      "expression": {
                        "id": 23542,
                        "name": "_targetedArtifactSelectors",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23484,
                        "src": "1281:26:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage",
                          "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                        }
                      },
                      "id": 23544,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1308:4:69",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1281:31:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$23462_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                      }
                    },
                    "id": 23546,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1281:61:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23547,
                  "nodeType": "ExpressionStatement",
                  "src": "1281:61:69"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifactSelector",
            "nameLocation": "1189:22:69",
            "parameters": {
              "id": 23540,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23539,
                  "mutability": "mutable",
                  "name": "newTargetedArtifactSelector_",
                  "nameLocation": "1232:28:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23549,
                  "src": "1212:48:69",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FuzzSelector_$23462_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector"
                  },
                  "typeName": {
                    "id": 23538,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 23537,
                      "name": "FuzzSelector",
                      "nameLocations": [
                        "1212:12:69"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 23462,
                      "src": "1212:12:69"
                    },
                    "referencedDeclaration": 23462,
                    "src": "1212:12:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FuzzSelector_$23462_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1211:50:69"
            },
            "returnParameters": {
              "id": 23541,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1271:0:69"
            },
            "scope": 23677,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23561,
            "nodeType": "FunctionDefinition",
            "src": "1355:125:69",
            "nodes": [],
            "body": {
              "id": 23560,
              "nodeType": "Block",
              "src": "1418:62:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23557,
                        "name": "newTargetedContract_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23551,
                        "src": "1452:20:69",
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
                        }
                      ],
                      "expression": {
                        "id": 23554,
                        "name": "_targetedContracts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23471,
                        "src": "1428:18:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 23556,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1447:4:69",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1428:23:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 23558,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1428:45:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23559,
                  "nodeType": "ExpressionStatement",
                  "src": "1428:45:69"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetContract",
            "nameLocation": "1364:14:69",
            "parameters": {
              "id": 23552,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23551,
                  "mutability": "mutable",
                  "name": "newTargetedContract_",
                  "nameLocation": "1387:20:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23561,
                  "src": "1379:28:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23550,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1379:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1378:30:69"
            },
            "returnParameters": {
              "id": 23553,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1418:0:69"
            },
            "scope": 23677,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23574,
            "nodeType": "FunctionDefinition",
            "src": "1486:137:69",
            "nodes": [],
            "body": {
              "id": 23573,
              "nodeType": "Block",
              "src": "1561:62:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23570,
                        "name": "newTargetedSelector_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23564,
                        "src": "1595:20:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FuzzSelector_$23462_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_FuzzSelector_$23462_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      ],
                      "expression": {
                        "id": 23567,
                        "name": "_targetedSelectors",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23488,
                        "src": "1571:18:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage",
                          "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                        }
                      },
                      "id": 23569,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1590:4:69",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1571:23:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$23462_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                      }
                    },
                    "id": 23571,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1571:45:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23572,
                  "nodeType": "ExpressionStatement",
                  "src": "1571:45:69"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSelector",
            "nameLocation": "1495:14:69",
            "parameters": {
              "id": 23565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23564,
                  "mutability": "mutable",
                  "name": "newTargetedSelector_",
                  "nameLocation": "1530:20:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23574,
                  "src": "1510:40:69",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FuzzSelector_$23462_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector"
                  },
                  "typeName": {
                    "id": 23563,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 23562,
                      "name": "FuzzSelector",
                      "nameLocations": [
                        "1510:12:69"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 23462,
                      "src": "1510:12:69"
                    },
                    "referencedDeclaration": 23462,
                    "src": "1510:12:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FuzzSelector_$23462_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1509:42:69"
            },
            "returnParameters": {
              "id": 23566,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1561:0:69"
            },
            "scope": 23677,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23586,
            "nodeType": "FunctionDefinition",
            "src": "1629:117:69",
            "nodes": [],
            "body": {
              "id": 23585,
              "nodeType": "Block",
              "src": "1688:58:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23582,
                        "name": "newTargetedSender_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23576,
                        "src": "1720:18:69",
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
                        }
                      ],
                      "expression": {
                        "id": 23579,
                        "name": "_targetedSenders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23474,
                        "src": "1698:16:69",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 23581,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1715:4:69",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1698:21:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 23583,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1698:41:69",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23584,
                  "nodeType": "ExpressionStatement",
                  "src": "1698:41:69"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSender",
            "nameLocation": "1638:12:69",
            "parameters": {
              "id": 23577,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23576,
                  "mutability": "mutable",
                  "name": "newTargetedSender_",
                  "nameLocation": "1659:18:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23586,
                  "src": "1651:26:69",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 23575,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1651:7:69",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1650:28:69"
            },
            "returnParameters": {
              "id": 23578,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1688:0:69"
            },
            "scope": 23677,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23597,
            "nodeType": "FunctionDefinition",
            "src": "1875:141:69",
            "nodes": [],
            "body": {
              "id": 23596,
              "nodeType": "Block",
              "src": "1960:56:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23594,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23592,
                      "name": "excludedArtifacts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23590,
                      "src": "1970:18:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                        "typeString": "string memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23593,
                      "name": "_excludedArtifacts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23477,
                      "src": "1991:18:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                        "typeString": "string storage ref[] storage ref"
                      }
                    },
                    "src": "1970:39:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      "typeString": "string memory[] memory"
                    }
                  },
                  "id": 23595,
                  "nodeType": "ExpressionStatement",
                  "src": "1970:39:69"
                }
              ]
            },
            "functionSelector": "b5508aa9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeArtifacts",
            "nameLocation": "1884:16:69",
            "parameters": {
              "id": 23587,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1900:2:69"
            },
            "returnParameters": {
              "id": 23591,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23590,
                  "mutability": "mutable",
                  "name": "excludedArtifacts_",
                  "nameLocation": "1940:18:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23597,
                  "src": "1924:34:69",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23588,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1924:6:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 23589,
                    "nodeType": "ArrayTypeName",
                    "src": "1924:8:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1923:36:69"
            },
            "scope": 23677,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23608,
            "nodeType": "FunctionDefinition",
            "src": "2022:142:69",
            "nodes": [],
            "body": {
              "id": 23607,
              "nodeType": "Block",
              "src": "2108:56:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23605,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23603,
                      "name": "excludedContracts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23601,
                      "src": "2118:18:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23604,
                      "name": "_excludedContracts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23465,
                      "src": "2139:18:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2118:39:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 23606,
                  "nodeType": "ExpressionStatement",
                  "src": "2118:39:69"
                }
              ]
            },
            "functionSelector": "e20c9f71",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeContracts",
            "nameLocation": "2031:16:69",
            "parameters": {
              "id": 23598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2047:2:69"
            },
            "returnParameters": {
              "id": 23602,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23601,
                  "mutability": "mutable",
                  "name": "excludedContracts_",
                  "nameLocation": "2088:18:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23608,
                  "src": "2071:35:69",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23599,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2071:7:69",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 23600,
                    "nodeType": "ArrayTypeName",
                    "src": "2071:9:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2070:37:69"
            },
            "scope": 23677,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23619,
            "nodeType": "FunctionDefinition",
            "src": "2170:134:69",
            "nodes": [],
            "body": {
              "id": 23618,
              "nodeType": "Block",
              "src": "2252:52:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23616,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23614,
                      "name": "excludedSenders_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23612,
                      "src": "2262:16:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23615,
                      "name": "_excludedSenders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23468,
                      "src": "2281:16:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2262:35:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 23617,
                  "nodeType": "ExpressionStatement",
                  "src": "2262:35:69"
                }
              ]
            },
            "functionSelector": "1ed7831c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeSenders",
            "nameLocation": "2179:14:69",
            "parameters": {
              "id": 23609,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2193:2:69"
            },
            "returnParameters": {
              "id": 23613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23612,
                  "mutability": "mutable",
                  "name": "excludedSenders_",
                  "nameLocation": "2234:16:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23619,
                  "src": "2217:33:69",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23610,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2217:7:69",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 23611,
                    "nodeType": "ArrayTypeName",
                    "src": "2217:9:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2216:35:69"
            },
            "scope": 23677,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23630,
            "nodeType": "FunctionDefinition",
            "src": "2310:140:69",
            "nodes": [],
            "body": {
              "id": 23629,
              "nodeType": "Block",
              "src": "2394:56:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23627,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23625,
                      "name": "targetedArtifacts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23623,
                      "src": "2404:18:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                        "typeString": "string memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23626,
                      "name": "_targetedArtifacts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23480,
                      "src": "2425:18:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                        "typeString": "string storage ref[] storage ref"
                      }
                    },
                    "src": "2404:39:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      "typeString": "string memory[] memory"
                    }
                  },
                  "id": 23628,
                  "nodeType": "ExpressionStatement",
                  "src": "2404:39:69"
                }
              ]
            },
            "functionSelector": "85226c81",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifacts",
            "nameLocation": "2319:15:69",
            "parameters": {
              "id": 23620,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2334:2:69"
            },
            "returnParameters": {
              "id": 23624,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23623,
                  "mutability": "mutable",
                  "name": "targetedArtifacts_",
                  "nameLocation": "2374:18:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23630,
                  "src": "2358:34:69",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23621,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2358:6:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 23622,
                    "nodeType": "ArrayTypeName",
                    "src": "2358:8:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2357:36:69"
            },
            "scope": 23677,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23642,
            "nodeType": "FunctionDefinition",
            "src": "2456:178:69",
            "nodes": [],
            "body": {
              "id": 23641,
              "nodeType": "Block",
              "src": "2562:72:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23639,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23637,
                      "name": "targetedArtifactSelectors_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23635,
                      "src": "2572:26:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23638,
                      "name": "_targetedArtifactSelectors",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23484,
                      "src": "2601:26:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage",
                        "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                      }
                    },
                    "src": "2572:55:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                    }
                  },
                  "id": 23640,
                  "nodeType": "ExpressionStatement",
                  "src": "2572:55:69"
                }
              ]
            },
            "functionSelector": "66d9a9a0",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifactSelectors",
            "nameLocation": "2465:23:69",
            "parameters": {
              "id": 23631,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2488:2:69"
            },
            "returnParameters": {
              "id": 23636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23635,
                  "mutability": "mutable",
                  "name": "targetedArtifactSelectors_",
                  "nameLocation": "2534:26:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23642,
                  "src": "2512:48:69",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23633,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 23632,
                        "name": "FuzzSelector",
                        "nameLocations": [
                          "2512:12:69"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 23462,
                        "src": "2512:12:69"
                      },
                      "referencedDeclaration": 23462,
                      "src": "2512:12:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FuzzSelector_$23462_storage_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector"
                      }
                    },
                    "id": 23634,
                    "nodeType": "ArrayTypeName",
                    "src": "2512:14:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2511:50:69"
            },
            "scope": 23677,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23653,
            "nodeType": "FunctionDefinition",
            "src": "2640:141:69",
            "nodes": [],
            "body": {
              "id": 23652,
              "nodeType": "Block",
              "src": "2725:56:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23650,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23648,
                      "name": "targetedContracts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23646,
                      "src": "2735:18:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23649,
                      "name": "_targetedContracts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23471,
                      "src": "2756:18:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2735:39:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 23651,
                  "nodeType": "ExpressionStatement",
                  "src": "2735:39:69"
                }
              ]
            },
            "functionSelector": "3f7286f4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetContracts",
            "nameLocation": "2649:15:69",
            "parameters": {
              "id": 23643,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2664:2:69"
            },
            "returnParameters": {
              "id": 23647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23646,
                  "mutability": "mutable",
                  "name": "targetedContracts_",
                  "nameLocation": "2705:18:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23653,
                  "src": "2688:35:69",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23644,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2688:7:69",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 23645,
                    "nodeType": "ArrayTypeName",
                    "src": "2688:9:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2687:37:69"
            },
            "scope": 23677,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23665,
            "nodeType": "FunctionDefinition",
            "src": "2787:146:69",
            "nodes": [],
            "body": {
              "id": 23664,
              "nodeType": "Block",
              "src": "2877:56:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23662,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23660,
                      "name": "targetedSelectors_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23658,
                      "src": "2887:18:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23661,
                      "name": "_targetedSelectors",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23488,
                      "src": "2908:18:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage",
                        "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                      }
                    },
                    "src": "2887:39:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                    }
                  },
                  "id": 23663,
                  "nodeType": "ExpressionStatement",
                  "src": "2887:39:69"
                }
              ]
            },
            "functionSelector": "916a17c6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSelectors",
            "nameLocation": "2796:15:69",
            "parameters": {
              "id": 23654,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2811:2:69"
            },
            "returnParameters": {
              "id": 23659,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23658,
                  "mutability": "mutable",
                  "name": "targetedSelectors_",
                  "nameLocation": "2857:18:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23665,
                  "src": "2835:40:69",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23656,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 23655,
                        "name": "FuzzSelector",
                        "nameLocations": [
                          "2835:12:69"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 23462,
                        "src": "2835:12:69"
                      },
                      "referencedDeclaration": 23462,
                      "src": "2835:12:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FuzzSelector_$23462_storage_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector"
                      }
                    },
                    "id": 23657,
                    "nodeType": "ArrayTypeName",
                    "src": "2835:14:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$23462_storage_$dyn_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2834:42:69"
            },
            "scope": 23677,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23676,
            "nodeType": "FunctionDefinition",
            "src": "2939:133:69",
            "nodes": [],
            "body": {
              "id": 23675,
              "nodeType": "Block",
              "src": "3020:52:69",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23673,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23671,
                      "name": "targetedSenders_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23669,
                      "src": "3030:16:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23672,
                      "name": "_targetedSenders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23474,
                      "src": "3049:16:69",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "3030:35:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 23674,
                  "nodeType": "ExpressionStatement",
                  "src": "3030:35:69"
                }
              ]
            },
            "functionSelector": "3e5e3c23",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSenders",
            "nameLocation": "2948:13:69",
            "parameters": {
              "id": 23666,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2961:2:69"
            },
            "returnParameters": {
              "id": 23670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23669,
                  "mutability": "mutable",
                  "name": "targetedSenders_",
                  "nameLocation": "3002:16:69",
                  "nodeType": "VariableDeclaration",
                  "scope": 23676,
                  "src": "2985:33:69",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23667,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2985:7:69",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 23668,
                    "nodeType": "ArrayTypeName",
                    "src": "2985:9:69",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2984:35:69"
            },
            "scope": 23677,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "StdInvariant",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          23677
        ],
        "name": "StdInvariant",
        "nameLocation": "118:12:69",
        "scope": 23678,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 69
} as const;
