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
    "id": 27028,
    "exportedSymbols": {
      "StdInvariant": [
        27027
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:3043:80",
    "nodes": [
      {
        "id": 26805,
        "nodeType": "PragmaDirective",
        "src": "32:31:80",
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
        "id": 26806,
        "nodeType": "PragmaDirective",
        "src": "65:33:80",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 27027,
        "nodeType": "ContractDefinition",
        "src": "100:2974:80",
        "nodes": [
          {
            "id": 26812,
            "nodeType": "StructDefinition",
            "src": "137:77:80",
            "nodes": [],
            "canonicalName": "StdInvariant.FuzzSelector",
            "members": [
              {
                "constant": false,
                "id": 26808,
                "mutability": "mutable",
                "name": "addr",
                "nameLocation": "175:4:80",
                "nodeType": "VariableDeclaration",
                "scope": 26812,
                "src": "167:12:80",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 26807,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "167:7:80",
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
                "id": 26811,
                "mutability": "mutable",
                "name": "selectors",
                "nameLocation": "198:9:80",
                "nodeType": "VariableDeclaration",
                "scope": 26812,
                "src": "189:18:80",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                  "typeString": "bytes4[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 26809,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "189:6:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "id": 26810,
                  "nodeType": "ArrayTypeName",
                  "src": "189:8:80",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                    "typeString": "bytes4[]"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "FuzzSelector",
            "nameLocation": "144:12:80",
            "scope": 27027,
            "visibility": "public"
          },
          {
            "id": 26815,
            "nodeType": "VariableDeclaration",
            "src": "220:36:80",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedContracts",
            "nameLocation": "238:18:80",
            "scope": 27027,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 26813,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "220:7:80",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 26814,
              "nodeType": "ArrayTypeName",
              "src": "220:9:80",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 26818,
            "nodeType": "VariableDeclaration",
            "src": "262:34:80",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedSenders",
            "nameLocation": "280:16:80",
            "scope": 27027,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 26816,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "262:7:80",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 26817,
              "nodeType": "ArrayTypeName",
              "src": "262:9:80",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 26821,
            "nodeType": "VariableDeclaration",
            "src": "302:36:80",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedContracts",
            "nameLocation": "320:18:80",
            "scope": 27027,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 26819,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "302:7:80",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 26820,
              "nodeType": "ArrayTypeName",
              "src": "302:9:80",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 26824,
            "nodeType": "VariableDeclaration",
            "src": "344:34:80",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedSenders",
            "nameLocation": "362:16:80",
            "scope": 27027,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 26822,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "344:7:80",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 26823,
              "nodeType": "ArrayTypeName",
              "src": "344:9:80",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 26827,
            "nodeType": "VariableDeclaration",
            "src": "385:35:80",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedArtifacts",
            "nameLocation": "402:18:80",
            "scope": 27027,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 26825,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "385:6:80",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 26826,
              "nodeType": "ArrayTypeName",
              "src": "385:8:80",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 26830,
            "nodeType": "VariableDeclaration",
            "src": "426:35:80",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedArtifacts",
            "nameLocation": "443:18:80",
            "scope": 27027,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 26828,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "426:6:80",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 26829,
              "nodeType": "ArrayTypeName",
              "src": "426:8:80",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 26834,
            "nodeType": "VariableDeclaration",
            "src": "468:49:80",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedArtifactSelectors",
            "nameLocation": "491:26:80",
            "scope": 27027,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage",
              "typeString": "struct StdInvariant.FuzzSelector[]"
            },
            "typeName": {
              "baseType": {
                "id": 26832,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 26831,
                  "name": "FuzzSelector",
                  "nameLocations": [
                    "468:12:80"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 26812,
                  "src": "468:12:80"
                },
                "referencedDeclaration": 26812,
                "src": "468:12:80",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_FuzzSelector_$26812_storage_ptr",
                  "typeString": "struct StdInvariant.FuzzSelector"
                }
              },
              "id": 26833,
              "nodeType": "ArrayTypeName",
              "src": "468:14:80",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage_ptr",
                "typeString": "struct StdInvariant.FuzzSelector[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 26838,
            "nodeType": "VariableDeclaration",
            "src": "523:41:80",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedSelectors",
            "nameLocation": "546:18:80",
            "scope": 27027,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage",
              "typeString": "struct StdInvariant.FuzzSelector[]"
            },
            "typeName": {
              "baseType": {
                "id": 26836,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 26835,
                  "name": "FuzzSelector",
                  "nameLocations": [
                    "523:12:80"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 26812,
                  "src": "523:12:80"
                },
                "referencedDeclaration": 26812,
                "src": "523:12:80",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_FuzzSelector_$26812_storage_ptr",
                  "typeString": "struct StdInvariant.FuzzSelector"
                }
              },
              "id": 26837,
              "nodeType": "ArrayTypeName",
              "src": "523:14:80",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage_ptr",
                "typeString": "struct StdInvariant.FuzzSelector[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 26850,
            "nodeType": "FunctionDefinition",
            "src": "649:126:80",
            "nodes": [],
            "body": {
              "id": 26849,
              "nodeType": "Block",
              "src": "713:62:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26846,
                        "name": "newExcludedContract_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26840,
                        "src": "747:20:80",
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
                        "id": 26843,
                        "name": "_excludedContracts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26815,
                        "src": "723:18:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 26845,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "742:4:80",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "723:23:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 26847,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "723:45:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26848,
                  "nodeType": "ExpressionStatement",
                  "src": "723:45:80"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeContract",
            "nameLocation": "658:15:80",
            "parameters": {
              "id": 26841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26840,
                  "mutability": "mutable",
                  "name": "newExcludedContract_",
                  "nameLocation": "682:20:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 26850,
                  "src": "674:28:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26839,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:7:80",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "673:30:80"
            },
            "returnParameters": {
              "id": 26842,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "713:0:80"
            },
            "scope": 27027,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26862,
            "nodeType": "FunctionDefinition",
            "src": "781:118:80",
            "nodes": [],
            "body": {
              "id": 26861,
              "nodeType": "Block",
              "src": "841:58:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26858,
                        "name": "newExcludedSender_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26852,
                        "src": "873:18:80",
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
                        "id": 26855,
                        "name": "_excludedSenders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26818,
                        "src": "851:16:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 26857,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "868:4:80",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "851:21:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 26859,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "851:41:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26860,
                  "nodeType": "ExpressionStatement",
                  "src": "851:41:80"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeSender",
            "nameLocation": "790:13:80",
            "parameters": {
              "id": 26853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26852,
                  "mutability": "mutable",
                  "name": "newExcludedSender_",
                  "nameLocation": "812:18:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 26862,
                  "src": "804:26:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26851,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "804:7:80",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "803:28:80"
            },
            "returnParameters": {
              "id": 26854,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "841:0:80"
            },
            "scope": 27027,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26874,
            "nodeType": "FunctionDefinition",
            "src": "905:132:80",
            "nodes": [],
            "body": {
              "id": 26873,
              "nodeType": "Block",
              "src": "975:62:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26870,
                        "name": "newExcludedArtifact_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26864,
                        "src": "1009:20:80",
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
                        "id": 26867,
                        "name": "_excludedArtifacts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26827,
                        "src": "985:18:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 26869,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1004:4:80",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "985:23:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                        "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                      }
                    },
                    "id": 26871,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "985:45:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26872,
                  "nodeType": "ExpressionStatement",
                  "src": "985:45:80"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeArtifact",
            "nameLocation": "914:15:80",
            "parameters": {
              "id": 26865,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26864,
                  "mutability": "mutable",
                  "name": "newExcludedArtifact_",
                  "nameLocation": "944:20:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 26874,
                  "src": "930:34:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26863,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "930:6:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "929:36:80"
            },
            "returnParameters": {
              "id": 26866,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "975:0:80"
            },
            "scope": 27027,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26886,
            "nodeType": "FunctionDefinition",
            "src": "1043:131:80",
            "nodes": [],
            "body": {
              "id": 26885,
              "nodeType": "Block",
              "src": "1112:62:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26882,
                        "name": "newTargetedArtifact_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26876,
                        "src": "1146:20:80",
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
                        "id": 26879,
                        "name": "_targetedArtifacts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26830,
                        "src": "1122:18:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 26881,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1141:4:80",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1122:23:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                        "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                      }
                    },
                    "id": 26883,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1122:45:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26884,
                  "nodeType": "ExpressionStatement",
                  "src": "1122:45:80"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifact",
            "nameLocation": "1052:14:80",
            "parameters": {
              "id": 26877,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26876,
                  "mutability": "mutable",
                  "name": "newTargetedArtifact_",
                  "nameLocation": "1081:20:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 26886,
                  "src": "1067:34:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26875,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1067:6:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1066:36:80"
            },
            "returnParameters": {
              "id": 26878,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1112:0:80"
            },
            "scope": 27027,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26899,
            "nodeType": "FunctionDefinition",
            "src": "1180:169:80",
            "nodes": [],
            "body": {
              "id": 26898,
              "nodeType": "Block",
              "src": "1271:78:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26895,
                        "name": "newTargetedArtifactSelector_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26889,
                        "src": "1313:28:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FuzzSelector_$26812_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_FuzzSelector_$26812_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      ],
                      "expression": {
                        "id": 26892,
                        "name": "_targetedArtifactSelectors",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26834,
                        "src": "1281:26:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage",
                          "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                        }
                      },
                      "id": 26894,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1308:4:80",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1281:31:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$26812_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                      }
                    },
                    "id": 26896,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1281:61:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26897,
                  "nodeType": "ExpressionStatement",
                  "src": "1281:61:80"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifactSelector",
            "nameLocation": "1189:22:80",
            "parameters": {
              "id": 26890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26889,
                  "mutability": "mutable",
                  "name": "newTargetedArtifactSelector_",
                  "nameLocation": "1232:28:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 26899,
                  "src": "1212:48:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FuzzSelector_$26812_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector"
                  },
                  "typeName": {
                    "id": 26888,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 26887,
                      "name": "FuzzSelector",
                      "nameLocations": [
                        "1212:12:80"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 26812,
                      "src": "1212:12:80"
                    },
                    "referencedDeclaration": 26812,
                    "src": "1212:12:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FuzzSelector_$26812_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1211:50:80"
            },
            "returnParameters": {
              "id": 26891,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1271:0:80"
            },
            "scope": 27027,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26911,
            "nodeType": "FunctionDefinition",
            "src": "1355:125:80",
            "nodes": [],
            "body": {
              "id": 26910,
              "nodeType": "Block",
              "src": "1418:62:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26907,
                        "name": "newTargetedContract_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26901,
                        "src": "1452:20:80",
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
                        "id": 26904,
                        "name": "_targetedContracts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26821,
                        "src": "1428:18:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 26906,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1447:4:80",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1428:23:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 26908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1428:45:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26909,
                  "nodeType": "ExpressionStatement",
                  "src": "1428:45:80"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetContract",
            "nameLocation": "1364:14:80",
            "parameters": {
              "id": 26902,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26901,
                  "mutability": "mutable",
                  "name": "newTargetedContract_",
                  "nameLocation": "1387:20:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 26911,
                  "src": "1379:28:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26900,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1379:7:80",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1378:30:80"
            },
            "returnParameters": {
              "id": 26903,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1418:0:80"
            },
            "scope": 27027,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26924,
            "nodeType": "FunctionDefinition",
            "src": "1486:137:80",
            "nodes": [],
            "body": {
              "id": 26923,
              "nodeType": "Block",
              "src": "1561:62:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26920,
                        "name": "newTargetedSelector_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26914,
                        "src": "1595:20:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FuzzSelector_$26812_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_FuzzSelector_$26812_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      ],
                      "expression": {
                        "id": 26917,
                        "name": "_targetedSelectors",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26838,
                        "src": "1571:18:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage",
                          "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                        }
                      },
                      "id": 26919,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1590:4:80",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1571:23:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$26812_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                      }
                    },
                    "id": 26921,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1571:45:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26922,
                  "nodeType": "ExpressionStatement",
                  "src": "1571:45:80"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSelector",
            "nameLocation": "1495:14:80",
            "parameters": {
              "id": 26915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26914,
                  "mutability": "mutable",
                  "name": "newTargetedSelector_",
                  "nameLocation": "1530:20:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 26924,
                  "src": "1510:40:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FuzzSelector_$26812_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector"
                  },
                  "typeName": {
                    "id": 26913,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 26912,
                      "name": "FuzzSelector",
                      "nameLocations": [
                        "1510:12:80"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 26812,
                      "src": "1510:12:80"
                    },
                    "referencedDeclaration": 26812,
                    "src": "1510:12:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FuzzSelector_$26812_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1509:42:80"
            },
            "returnParameters": {
              "id": 26916,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1561:0:80"
            },
            "scope": 27027,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26936,
            "nodeType": "FunctionDefinition",
            "src": "1629:117:80",
            "nodes": [],
            "body": {
              "id": 26935,
              "nodeType": "Block",
              "src": "1688:58:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 26932,
                        "name": "newTargetedSender_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26926,
                        "src": "1720:18:80",
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
                        "id": 26929,
                        "name": "_targetedSenders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26824,
                        "src": "1698:16:80",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 26931,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1715:4:80",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1698:21:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 26933,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1698:41:80",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 26934,
                  "nodeType": "ExpressionStatement",
                  "src": "1698:41:80"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSender",
            "nameLocation": "1638:12:80",
            "parameters": {
              "id": 26927,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26926,
                  "mutability": "mutable",
                  "name": "newTargetedSender_",
                  "nameLocation": "1659:18:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 26936,
                  "src": "1651:26:80",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26925,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1651:7:80",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1650:28:80"
            },
            "returnParameters": {
              "id": 26928,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1688:0:80"
            },
            "scope": 27027,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 26947,
            "nodeType": "FunctionDefinition",
            "src": "1875:141:80",
            "nodes": [],
            "body": {
              "id": 26946,
              "nodeType": "Block",
              "src": "1960:56:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 26944,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 26942,
                      "name": "excludedArtifacts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26940,
                      "src": "1970:18:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                        "typeString": "string memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 26943,
                      "name": "_excludedArtifacts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26827,
                      "src": "1991:18:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                        "typeString": "string storage ref[] storage ref"
                      }
                    },
                    "src": "1970:39:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      "typeString": "string memory[] memory"
                    }
                  },
                  "id": 26945,
                  "nodeType": "ExpressionStatement",
                  "src": "1970:39:80"
                }
              ]
            },
            "functionSelector": "b5508aa9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeArtifacts",
            "nameLocation": "1884:16:80",
            "parameters": {
              "id": 26937,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1900:2:80"
            },
            "returnParameters": {
              "id": 26941,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26940,
                  "mutability": "mutable",
                  "name": "excludedArtifacts_",
                  "nameLocation": "1940:18:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 26947,
                  "src": "1924:34:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26938,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1924:6:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 26939,
                    "nodeType": "ArrayTypeName",
                    "src": "1924:8:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1923:36:80"
            },
            "scope": 27027,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 26958,
            "nodeType": "FunctionDefinition",
            "src": "2022:142:80",
            "nodes": [],
            "body": {
              "id": 26957,
              "nodeType": "Block",
              "src": "2108:56:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 26955,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 26953,
                      "name": "excludedContracts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26951,
                      "src": "2118:18:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 26954,
                      "name": "_excludedContracts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26815,
                      "src": "2139:18:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2118:39:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 26956,
                  "nodeType": "ExpressionStatement",
                  "src": "2118:39:80"
                }
              ]
            },
            "functionSelector": "e20c9f71",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeContracts",
            "nameLocation": "2031:16:80",
            "parameters": {
              "id": 26948,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2047:2:80"
            },
            "returnParameters": {
              "id": 26952,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26951,
                  "mutability": "mutable",
                  "name": "excludedContracts_",
                  "nameLocation": "2088:18:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 26958,
                  "src": "2071:35:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26949,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2071:7:80",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 26950,
                    "nodeType": "ArrayTypeName",
                    "src": "2071:9:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2070:37:80"
            },
            "scope": 27027,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 26969,
            "nodeType": "FunctionDefinition",
            "src": "2170:134:80",
            "nodes": [],
            "body": {
              "id": 26968,
              "nodeType": "Block",
              "src": "2252:52:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 26966,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 26964,
                      "name": "excludedSenders_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26962,
                      "src": "2262:16:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 26965,
                      "name": "_excludedSenders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26818,
                      "src": "2281:16:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2262:35:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 26967,
                  "nodeType": "ExpressionStatement",
                  "src": "2262:35:80"
                }
              ]
            },
            "functionSelector": "1ed7831c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeSenders",
            "nameLocation": "2179:14:80",
            "parameters": {
              "id": 26959,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2193:2:80"
            },
            "returnParameters": {
              "id": 26963,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26962,
                  "mutability": "mutable",
                  "name": "excludedSenders_",
                  "nameLocation": "2234:16:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 26969,
                  "src": "2217:33:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26960,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2217:7:80",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 26961,
                    "nodeType": "ArrayTypeName",
                    "src": "2217:9:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2216:35:80"
            },
            "scope": 27027,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 26980,
            "nodeType": "FunctionDefinition",
            "src": "2310:140:80",
            "nodes": [],
            "body": {
              "id": 26979,
              "nodeType": "Block",
              "src": "2394:56:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 26977,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 26975,
                      "name": "targetedArtifacts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26973,
                      "src": "2404:18:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                        "typeString": "string memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 26976,
                      "name": "_targetedArtifacts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26830,
                      "src": "2425:18:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                        "typeString": "string storage ref[] storage ref"
                      }
                    },
                    "src": "2404:39:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      "typeString": "string memory[] memory"
                    }
                  },
                  "id": 26978,
                  "nodeType": "ExpressionStatement",
                  "src": "2404:39:80"
                }
              ]
            },
            "functionSelector": "85226c81",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifacts",
            "nameLocation": "2319:15:80",
            "parameters": {
              "id": 26970,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2334:2:80"
            },
            "returnParameters": {
              "id": 26974,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26973,
                  "mutability": "mutable",
                  "name": "targetedArtifacts_",
                  "nameLocation": "2374:18:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 26980,
                  "src": "2358:34:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26971,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2358:6:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 26972,
                    "nodeType": "ArrayTypeName",
                    "src": "2358:8:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2357:36:80"
            },
            "scope": 27027,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 26992,
            "nodeType": "FunctionDefinition",
            "src": "2456:178:80",
            "nodes": [],
            "body": {
              "id": 26991,
              "nodeType": "Block",
              "src": "2562:72:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 26989,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 26987,
                      "name": "targetedArtifactSelectors_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26985,
                      "src": "2572:26:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 26988,
                      "name": "_targetedArtifactSelectors",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26834,
                      "src": "2601:26:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage",
                        "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                      }
                    },
                    "src": "2572:55:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                    }
                  },
                  "id": 26990,
                  "nodeType": "ExpressionStatement",
                  "src": "2572:55:80"
                }
              ]
            },
            "functionSelector": "66d9a9a0",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifactSelectors",
            "nameLocation": "2465:23:80",
            "parameters": {
              "id": 26981,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2488:2:80"
            },
            "returnParameters": {
              "id": 26986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26985,
                  "mutability": "mutable",
                  "name": "targetedArtifactSelectors_",
                  "nameLocation": "2534:26:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 26992,
                  "src": "2512:48:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26983,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 26982,
                        "name": "FuzzSelector",
                        "nameLocations": [
                          "2512:12:80"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 26812,
                        "src": "2512:12:80"
                      },
                      "referencedDeclaration": 26812,
                      "src": "2512:12:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FuzzSelector_$26812_storage_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector"
                      }
                    },
                    "id": 26984,
                    "nodeType": "ArrayTypeName",
                    "src": "2512:14:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2511:50:80"
            },
            "scope": 27027,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 27003,
            "nodeType": "FunctionDefinition",
            "src": "2640:141:80",
            "nodes": [],
            "body": {
              "id": 27002,
              "nodeType": "Block",
              "src": "2725:56:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 27000,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 26998,
                      "name": "targetedContracts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26996,
                      "src": "2735:18:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 26999,
                      "name": "_targetedContracts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26821,
                      "src": "2756:18:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2735:39:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 27001,
                  "nodeType": "ExpressionStatement",
                  "src": "2735:39:80"
                }
              ]
            },
            "functionSelector": "3f7286f4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetContracts",
            "nameLocation": "2649:15:80",
            "parameters": {
              "id": 26993,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2664:2:80"
            },
            "returnParameters": {
              "id": 26997,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 26996,
                  "mutability": "mutable",
                  "name": "targetedContracts_",
                  "nameLocation": "2705:18:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 27003,
                  "src": "2688:35:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 26994,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2688:7:80",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 26995,
                    "nodeType": "ArrayTypeName",
                    "src": "2688:9:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2687:37:80"
            },
            "scope": 27027,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 27015,
            "nodeType": "FunctionDefinition",
            "src": "2787:146:80",
            "nodes": [],
            "body": {
              "id": 27014,
              "nodeType": "Block",
              "src": "2877:56:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 27012,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 27010,
                      "name": "targetedSelectors_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27008,
                      "src": "2887:18:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 27011,
                      "name": "_targetedSelectors",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26838,
                      "src": "2908:18:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage",
                        "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                      }
                    },
                    "src": "2887:39:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                    }
                  },
                  "id": 27013,
                  "nodeType": "ExpressionStatement",
                  "src": "2887:39:80"
                }
              ]
            },
            "functionSelector": "916a17c6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSelectors",
            "nameLocation": "2796:15:80",
            "parameters": {
              "id": 27004,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2811:2:80"
            },
            "returnParameters": {
              "id": 27009,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27008,
                  "mutability": "mutable",
                  "name": "targetedSelectors_",
                  "nameLocation": "2857:18:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 27015,
                  "src": "2835:40:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27006,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 27005,
                        "name": "FuzzSelector",
                        "nameLocations": [
                          "2835:12:80"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 26812,
                        "src": "2835:12:80"
                      },
                      "referencedDeclaration": 26812,
                      "src": "2835:12:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FuzzSelector_$26812_storage_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector"
                      }
                    },
                    "id": 27007,
                    "nodeType": "ArrayTypeName",
                    "src": "2835:14:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$26812_storage_$dyn_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2834:42:80"
            },
            "scope": 27027,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 27026,
            "nodeType": "FunctionDefinition",
            "src": "2939:133:80",
            "nodes": [],
            "body": {
              "id": 27025,
              "nodeType": "Block",
              "src": "3020:52:80",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 27023,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 27021,
                      "name": "targetedSenders_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27019,
                      "src": "3030:16:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 27022,
                      "name": "_targetedSenders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26824,
                      "src": "3049:16:80",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "3030:35:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 27024,
                  "nodeType": "ExpressionStatement",
                  "src": "3030:35:80"
                }
              ]
            },
            "functionSelector": "3e5e3c23",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSenders",
            "nameLocation": "2948:13:80",
            "parameters": {
              "id": 27016,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2961:2:80"
            },
            "returnParameters": {
              "id": 27020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 27019,
                  "mutability": "mutable",
                  "name": "targetedSenders_",
                  "nameLocation": "3002:16:80",
                  "nodeType": "VariableDeclaration",
                  "scope": 27026,
                  "src": "2985:33:80",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 27017,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2985:7:80",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 27018,
                    "nodeType": "ArrayTypeName",
                    "src": "2985:9:80",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2984:35:80"
            },
            "scope": 27027,
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
          27027
        ],
        "name": "StdInvariant",
        "nameLocation": "118:12:80",
        "scope": 27028,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 80
} as const;
