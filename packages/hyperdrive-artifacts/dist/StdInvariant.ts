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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"excludeArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"excludedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"excludeSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"excludedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifactSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedArtifactSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetArtifacts\",\"outputs\":[{\"internalType\":\"string[]\",\"name\":\"targetedArtifacts_\",\"type\":\"string[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetContracts\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedContracts_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSelectors\",\"outputs\":[{\"components\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"bytes4[]\",\"name\":\"selectors\",\"type\":\"bytes4[]\"}],\"internalType\":\"struct StdInvariant.FuzzSelector[]\",\"name\":\"targetedSelectors_\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"targetSenders\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"targetedSenders_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/forge-std/src/StdInvariant.sol\":\"StdInvariant\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/forge-std/src/StdInvariant.sol\":{\"keccak256\":\"0xf5762db8ef95099bbe77578cd9349511ed77f4dd63ec98cc6b7cd711447830c1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a6b0360806a9804eac0f7e07492b5db9c4953c521dabb9a11b17dd610d5b804c\",\"dweb:/ipfs/QmUFozSt3W7drBRdm1cdRow61EABqSLJtkvYZXWmoHUPss\"]}},\"version\":1}",
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
    "id": 23098,
    "exportedSymbols": {
      "StdInvariant": [
        23097
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:3043:63",
    "nodes": [
      {
        "id": 22875,
        "nodeType": "PragmaDirective",
        "src": "32:31:63",
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
        "id": 22876,
        "nodeType": "PragmaDirective",
        "src": "65:33:63",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 23097,
        "nodeType": "ContractDefinition",
        "src": "100:2974:63",
        "nodes": [
          {
            "id": 22882,
            "nodeType": "StructDefinition",
            "src": "137:77:63",
            "nodes": [],
            "canonicalName": "StdInvariant.FuzzSelector",
            "members": [
              {
                "constant": false,
                "id": 22878,
                "mutability": "mutable",
                "name": "addr",
                "nameLocation": "175:4:63",
                "nodeType": "VariableDeclaration",
                "scope": 22882,
                "src": "167:12:63",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 22877,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "167:7:63",
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
                "id": 22881,
                "mutability": "mutable",
                "name": "selectors",
                "nameLocation": "198:9:63",
                "nodeType": "VariableDeclaration",
                "scope": 22882,
                "src": "189:18:63",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                  "typeString": "bytes4[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 22879,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "189:6:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "id": 22880,
                  "nodeType": "ArrayTypeName",
                  "src": "189:8:63",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                    "typeString": "bytes4[]"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "FuzzSelector",
            "nameLocation": "144:12:63",
            "scope": 23097,
            "visibility": "public"
          },
          {
            "id": 22885,
            "nodeType": "VariableDeclaration",
            "src": "220:36:63",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedContracts",
            "nameLocation": "238:18:63",
            "scope": 23097,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 22883,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "220:7:63",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 22884,
              "nodeType": "ArrayTypeName",
              "src": "220:9:63",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22888,
            "nodeType": "VariableDeclaration",
            "src": "262:34:63",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedSenders",
            "nameLocation": "280:16:63",
            "scope": 23097,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 22886,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "262:7:63",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 22887,
              "nodeType": "ArrayTypeName",
              "src": "262:9:63",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22891,
            "nodeType": "VariableDeclaration",
            "src": "302:36:63",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedContracts",
            "nameLocation": "320:18:63",
            "scope": 23097,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 22889,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "302:7:63",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 22890,
              "nodeType": "ArrayTypeName",
              "src": "302:9:63",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22894,
            "nodeType": "VariableDeclaration",
            "src": "344:34:63",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedSenders",
            "nameLocation": "362:16:63",
            "scope": 23097,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 22892,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "344:7:63",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 22893,
              "nodeType": "ArrayTypeName",
              "src": "344:9:63",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22897,
            "nodeType": "VariableDeclaration",
            "src": "385:35:63",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedArtifacts",
            "nameLocation": "402:18:63",
            "scope": 23097,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 22895,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "385:6:63",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 22896,
              "nodeType": "ArrayTypeName",
              "src": "385:8:63",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22900,
            "nodeType": "VariableDeclaration",
            "src": "426:35:63",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedArtifacts",
            "nameLocation": "443:18:63",
            "scope": 23097,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 22898,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "426:6:63",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 22899,
              "nodeType": "ArrayTypeName",
              "src": "426:8:63",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22904,
            "nodeType": "VariableDeclaration",
            "src": "468:49:63",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedArtifactSelectors",
            "nameLocation": "491:26:63",
            "scope": 23097,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage",
              "typeString": "struct StdInvariant.FuzzSelector[]"
            },
            "typeName": {
              "baseType": {
                "id": 22902,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 22901,
                  "name": "FuzzSelector",
                  "nameLocations": [
                    "468:12:63"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 22882,
                  "src": "468:12:63"
                },
                "referencedDeclaration": 22882,
                "src": "468:12:63",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_FuzzSelector_$22882_storage_ptr",
                  "typeString": "struct StdInvariant.FuzzSelector"
                }
              },
              "id": 22903,
              "nodeType": "ArrayTypeName",
              "src": "468:14:63",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage_ptr",
                "typeString": "struct StdInvariant.FuzzSelector[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22908,
            "nodeType": "VariableDeclaration",
            "src": "523:41:63",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedSelectors",
            "nameLocation": "546:18:63",
            "scope": 23097,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage",
              "typeString": "struct StdInvariant.FuzzSelector[]"
            },
            "typeName": {
              "baseType": {
                "id": 22906,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 22905,
                  "name": "FuzzSelector",
                  "nameLocations": [
                    "523:12:63"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 22882,
                  "src": "523:12:63"
                },
                "referencedDeclaration": 22882,
                "src": "523:12:63",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_FuzzSelector_$22882_storage_ptr",
                  "typeString": "struct StdInvariant.FuzzSelector"
                }
              },
              "id": 22907,
              "nodeType": "ArrayTypeName",
              "src": "523:14:63",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage_ptr",
                "typeString": "struct StdInvariant.FuzzSelector[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22920,
            "nodeType": "FunctionDefinition",
            "src": "649:126:63",
            "nodes": [],
            "body": {
              "id": 22919,
              "nodeType": "Block",
              "src": "713:62:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22916,
                        "name": "newExcludedContract_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22910,
                        "src": "747:20:63",
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
                        "id": 22913,
                        "name": "_excludedContracts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22885,
                        "src": "723:18:63",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 22915,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "742:4:63",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "723:23:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 22917,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "723:45:63",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22918,
                  "nodeType": "ExpressionStatement",
                  "src": "723:45:63"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeContract",
            "nameLocation": "658:15:63",
            "parameters": {
              "id": 22911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22910,
                  "mutability": "mutable",
                  "name": "newExcludedContract_",
                  "nameLocation": "682:20:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 22920,
                  "src": "674:28:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 22909,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:7:63",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "673:30:63"
            },
            "returnParameters": {
              "id": 22912,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "713:0:63"
            },
            "scope": 23097,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22932,
            "nodeType": "FunctionDefinition",
            "src": "781:118:63",
            "nodes": [],
            "body": {
              "id": 22931,
              "nodeType": "Block",
              "src": "841:58:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22928,
                        "name": "newExcludedSender_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22922,
                        "src": "873:18:63",
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
                        "id": 22925,
                        "name": "_excludedSenders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22888,
                        "src": "851:16:63",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 22927,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "868:4:63",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "851:21:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 22929,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "851:41:63",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22930,
                  "nodeType": "ExpressionStatement",
                  "src": "851:41:63"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeSender",
            "nameLocation": "790:13:63",
            "parameters": {
              "id": 22923,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22922,
                  "mutability": "mutable",
                  "name": "newExcludedSender_",
                  "nameLocation": "812:18:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 22932,
                  "src": "804:26:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 22921,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "804:7:63",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "803:28:63"
            },
            "returnParameters": {
              "id": 22924,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "841:0:63"
            },
            "scope": 23097,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22944,
            "nodeType": "FunctionDefinition",
            "src": "905:132:63",
            "nodes": [],
            "body": {
              "id": 22943,
              "nodeType": "Block",
              "src": "975:62:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22940,
                        "name": "newExcludedArtifact_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22934,
                        "src": "1009:20:63",
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
                        "id": 22937,
                        "name": "_excludedArtifacts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22897,
                        "src": "985:18:63",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 22939,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1004:4:63",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "985:23:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                        "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                      }
                    },
                    "id": 22941,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "985:45:63",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22942,
                  "nodeType": "ExpressionStatement",
                  "src": "985:45:63"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeArtifact",
            "nameLocation": "914:15:63",
            "parameters": {
              "id": 22935,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22934,
                  "mutability": "mutable",
                  "name": "newExcludedArtifact_",
                  "nameLocation": "944:20:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 22944,
                  "src": "930:34:63",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22933,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "930:6:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "929:36:63"
            },
            "returnParameters": {
              "id": 22936,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "975:0:63"
            },
            "scope": 23097,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22956,
            "nodeType": "FunctionDefinition",
            "src": "1043:131:63",
            "nodes": [],
            "body": {
              "id": 22955,
              "nodeType": "Block",
              "src": "1112:62:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22952,
                        "name": "newTargetedArtifact_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22946,
                        "src": "1146:20:63",
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
                        "id": 22949,
                        "name": "_targetedArtifacts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22900,
                        "src": "1122:18:63",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 22951,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1141:4:63",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1122:23:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                        "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                      }
                    },
                    "id": 22953,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1122:45:63",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22954,
                  "nodeType": "ExpressionStatement",
                  "src": "1122:45:63"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifact",
            "nameLocation": "1052:14:63",
            "parameters": {
              "id": 22947,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22946,
                  "mutability": "mutable",
                  "name": "newTargetedArtifact_",
                  "nameLocation": "1081:20:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 22956,
                  "src": "1067:34:63",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22945,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1067:6:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1066:36:63"
            },
            "returnParameters": {
              "id": 22948,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1112:0:63"
            },
            "scope": 23097,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22969,
            "nodeType": "FunctionDefinition",
            "src": "1180:169:63",
            "nodes": [],
            "body": {
              "id": 22968,
              "nodeType": "Block",
              "src": "1271:78:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22965,
                        "name": "newTargetedArtifactSelector_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22959,
                        "src": "1313:28:63",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FuzzSelector_$22882_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_FuzzSelector_$22882_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      ],
                      "expression": {
                        "id": 22962,
                        "name": "_targetedArtifactSelectors",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22904,
                        "src": "1281:26:63",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage",
                          "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                        }
                      },
                      "id": 22964,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1308:4:63",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1281:31:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$22882_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                      }
                    },
                    "id": 22966,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1281:61:63",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22967,
                  "nodeType": "ExpressionStatement",
                  "src": "1281:61:63"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifactSelector",
            "nameLocation": "1189:22:63",
            "parameters": {
              "id": 22960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22959,
                  "mutability": "mutable",
                  "name": "newTargetedArtifactSelector_",
                  "nameLocation": "1232:28:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 22969,
                  "src": "1212:48:63",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FuzzSelector_$22882_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector"
                  },
                  "typeName": {
                    "id": 22958,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 22957,
                      "name": "FuzzSelector",
                      "nameLocations": [
                        "1212:12:63"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 22882,
                      "src": "1212:12:63"
                    },
                    "referencedDeclaration": 22882,
                    "src": "1212:12:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FuzzSelector_$22882_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1211:50:63"
            },
            "returnParameters": {
              "id": 22961,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1271:0:63"
            },
            "scope": 23097,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22981,
            "nodeType": "FunctionDefinition",
            "src": "1355:125:63",
            "nodes": [],
            "body": {
              "id": 22980,
              "nodeType": "Block",
              "src": "1418:62:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22977,
                        "name": "newTargetedContract_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22971,
                        "src": "1452:20:63",
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
                        "id": 22974,
                        "name": "_targetedContracts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22891,
                        "src": "1428:18:63",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 22976,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1447:4:63",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1428:23:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 22978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1428:45:63",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22979,
                  "nodeType": "ExpressionStatement",
                  "src": "1428:45:63"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetContract",
            "nameLocation": "1364:14:63",
            "parameters": {
              "id": 22972,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22971,
                  "mutability": "mutable",
                  "name": "newTargetedContract_",
                  "nameLocation": "1387:20:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 22981,
                  "src": "1379:28:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 22970,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1379:7:63",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1378:30:63"
            },
            "returnParameters": {
              "id": 22973,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1418:0:63"
            },
            "scope": 23097,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22994,
            "nodeType": "FunctionDefinition",
            "src": "1486:137:63",
            "nodes": [],
            "body": {
              "id": 22993,
              "nodeType": "Block",
              "src": "1561:62:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22990,
                        "name": "newTargetedSelector_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22984,
                        "src": "1595:20:63",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FuzzSelector_$22882_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_FuzzSelector_$22882_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      ],
                      "expression": {
                        "id": 22987,
                        "name": "_targetedSelectors",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22908,
                        "src": "1571:18:63",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage",
                          "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                        }
                      },
                      "id": 22989,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1590:4:63",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1571:23:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$22882_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                      }
                    },
                    "id": 22991,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1571:45:63",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22992,
                  "nodeType": "ExpressionStatement",
                  "src": "1571:45:63"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSelector",
            "nameLocation": "1495:14:63",
            "parameters": {
              "id": 22985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22984,
                  "mutability": "mutable",
                  "name": "newTargetedSelector_",
                  "nameLocation": "1530:20:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 22994,
                  "src": "1510:40:63",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FuzzSelector_$22882_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector"
                  },
                  "typeName": {
                    "id": 22983,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 22982,
                      "name": "FuzzSelector",
                      "nameLocations": [
                        "1510:12:63"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 22882,
                      "src": "1510:12:63"
                    },
                    "referencedDeclaration": 22882,
                    "src": "1510:12:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FuzzSelector_$22882_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1509:42:63"
            },
            "returnParameters": {
              "id": 22986,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1561:0:63"
            },
            "scope": 23097,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23006,
            "nodeType": "FunctionDefinition",
            "src": "1629:117:63",
            "nodes": [],
            "body": {
              "id": 23005,
              "nodeType": "Block",
              "src": "1688:58:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 23002,
                        "name": "newTargetedSender_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22996,
                        "src": "1720:18:63",
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
                        "id": 22999,
                        "name": "_targetedSenders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22894,
                        "src": "1698:16:63",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 23001,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1715:4:63",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1698:21:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 23003,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1698:41:63",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 23004,
                  "nodeType": "ExpressionStatement",
                  "src": "1698:41:63"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSender",
            "nameLocation": "1638:12:63",
            "parameters": {
              "id": 22997,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22996,
                  "mutability": "mutable",
                  "name": "newTargetedSender_",
                  "nameLocation": "1659:18:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 23006,
                  "src": "1651:26:63",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 22995,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1651:7:63",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1650:28:63"
            },
            "returnParameters": {
              "id": 22998,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1688:0:63"
            },
            "scope": 23097,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 23017,
            "nodeType": "FunctionDefinition",
            "src": "1875:141:63",
            "nodes": [],
            "body": {
              "id": 23016,
              "nodeType": "Block",
              "src": "1960:56:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23014,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23012,
                      "name": "excludedArtifacts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23010,
                      "src": "1970:18:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                        "typeString": "string memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23013,
                      "name": "_excludedArtifacts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22897,
                      "src": "1991:18:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                        "typeString": "string storage ref[] storage ref"
                      }
                    },
                    "src": "1970:39:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      "typeString": "string memory[] memory"
                    }
                  },
                  "id": 23015,
                  "nodeType": "ExpressionStatement",
                  "src": "1970:39:63"
                }
              ]
            },
            "functionSelector": "b5508aa9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeArtifacts",
            "nameLocation": "1884:16:63",
            "parameters": {
              "id": 23007,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1900:2:63"
            },
            "returnParameters": {
              "id": 23011,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23010,
                  "mutability": "mutable",
                  "name": "excludedArtifacts_",
                  "nameLocation": "1940:18:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 23017,
                  "src": "1924:34:63",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23008,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1924:6:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 23009,
                    "nodeType": "ArrayTypeName",
                    "src": "1924:8:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1923:36:63"
            },
            "scope": 23097,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23028,
            "nodeType": "FunctionDefinition",
            "src": "2022:142:63",
            "nodes": [],
            "body": {
              "id": 23027,
              "nodeType": "Block",
              "src": "2108:56:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23025,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23023,
                      "name": "excludedContracts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23021,
                      "src": "2118:18:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23024,
                      "name": "_excludedContracts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22885,
                      "src": "2139:18:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2118:39:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 23026,
                  "nodeType": "ExpressionStatement",
                  "src": "2118:39:63"
                }
              ]
            },
            "functionSelector": "e20c9f71",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeContracts",
            "nameLocation": "2031:16:63",
            "parameters": {
              "id": 23018,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2047:2:63"
            },
            "returnParameters": {
              "id": 23022,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23021,
                  "mutability": "mutable",
                  "name": "excludedContracts_",
                  "nameLocation": "2088:18:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 23028,
                  "src": "2071:35:63",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23019,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2071:7:63",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 23020,
                    "nodeType": "ArrayTypeName",
                    "src": "2071:9:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2070:37:63"
            },
            "scope": 23097,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23039,
            "nodeType": "FunctionDefinition",
            "src": "2170:134:63",
            "nodes": [],
            "body": {
              "id": 23038,
              "nodeType": "Block",
              "src": "2252:52:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23036,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23034,
                      "name": "excludedSenders_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23032,
                      "src": "2262:16:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23035,
                      "name": "_excludedSenders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22888,
                      "src": "2281:16:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2262:35:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 23037,
                  "nodeType": "ExpressionStatement",
                  "src": "2262:35:63"
                }
              ]
            },
            "functionSelector": "1ed7831c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeSenders",
            "nameLocation": "2179:14:63",
            "parameters": {
              "id": 23029,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2193:2:63"
            },
            "returnParameters": {
              "id": 23033,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23032,
                  "mutability": "mutable",
                  "name": "excludedSenders_",
                  "nameLocation": "2234:16:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 23039,
                  "src": "2217:33:63",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23030,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2217:7:63",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 23031,
                    "nodeType": "ArrayTypeName",
                    "src": "2217:9:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2216:35:63"
            },
            "scope": 23097,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23050,
            "nodeType": "FunctionDefinition",
            "src": "2310:140:63",
            "nodes": [],
            "body": {
              "id": 23049,
              "nodeType": "Block",
              "src": "2394:56:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23047,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23045,
                      "name": "targetedArtifacts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23043,
                      "src": "2404:18:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                        "typeString": "string memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23046,
                      "name": "_targetedArtifacts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22900,
                      "src": "2425:18:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                        "typeString": "string storage ref[] storage ref"
                      }
                    },
                    "src": "2404:39:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      "typeString": "string memory[] memory"
                    }
                  },
                  "id": 23048,
                  "nodeType": "ExpressionStatement",
                  "src": "2404:39:63"
                }
              ]
            },
            "functionSelector": "85226c81",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifacts",
            "nameLocation": "2319:15:63",
            "parameters": {
              "id": 23040,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2334:2:63"
            },
            "returnParameters": {
              "id": 23044,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23043,
                  "mutability": "mutable",
                  "name": "targetedArtifacts_",
                  "nameLocation": "2374:18:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 23050,
                  "src": "2358:34:63",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23041,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2358:6:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 23042,
                    "nodeType": "ArrayTypeName",
                    "src": "2358:8:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2357:36:63"
            },
            "scope": 23097,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23062,
            "nodeType": "FunctionDefinition",
            "src": "2456:178:63",
            "nodes": [],
            "body": {
              "id": 23061,
              "nodeType": "Block",
              "src": "2562:72:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23059,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23057,
                      "name": "targetedArtifactSelectors_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23055,
                      "src": "2572:26:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23058,
                      "name": "_targetedArtifactSelectors",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22904,
                      "src": "2601:26:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage",
                        "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                      }
                    },
                    "src": "2572:55:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                    }
                  },
                  "id": 23060,
                  "nodeType": "ExpressionStatement",
                  "src": "2572:55:63"
                }
              ]
            },
            "functionSelector": "66d9a9a0",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifactSelectors",
            "nameLocation": "2465:23:63",
            "parameters": {
              "id": 23051,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2488:2:63"
            },
            "returnParameters": {
              "id": 23056,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23055,
                  "mutability": "mutable",
                  "name": "targetedArtifactSelectors_",
                  "nameLocation": "2534:26:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 23062,
                  "src": "2512:48:63",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23053,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 23052,
                        "name": "FuzzSelector",
                        "nameLocations": [
                          "2512:12:63"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 22882,
                        "src": "2512:12:63"
                      },
                      "referencedDeclaration": 22882,
                      "src": "2512:12:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FuzzSelector_$22882_storage_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector"
                      }
                    },
                    "id": 23054,
                    "nodeType": "ArrayTypeName",
                    "src": "2512:14:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2511:50:63"
            },
            "scope": 23097,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23073,
            "nodeType": "FunctionDefinition",
            "src": "2640:141:63",
            "nodes": [],
            "body": {
              "id": 23072,
              "nodeType": "Block",
              "src": "2725:56:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23070,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23068,
                      "name": "targetedContracts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23066,
                      "src": "2735:18:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23069,
                      "name": "_targetedContracts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22891,
                      "src": "2756:18:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2735:39:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 23071,
                  "nodeType": "ExpressionStatement",
                  "src": "2735:39:63"
                }
              ]
            },
            "functionSelector": "3f7286f4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetContracts",
            "nameLocation": "2649:15:63",
            "parameters": {
              "id": 23063,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2664:2:63"
            },
            "returnParameters": {
              "id": 23067,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23066,
                  "mutability": "mutable",
                  "name": "targetedContracts_",
                  "nameLocation": "2705:18:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 23073,
                  "src": "2688:35:63",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23064,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2688:7:63",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 23065,
                    "nodeType": "ArrayTypeName",
                    "src": "2688:9:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2687:37:63"
            },
            "scope": 23097,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23085,
            "nodeType": "FunctionDefinition",
            "src": "2787:146:63",
            "nodes": [],
            "body": {
              "id": 23084,
              "nodeType": "Block",
              "src": "2877:56:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23082,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23080,
                      "name": "targetedSelectors_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23078,
                      "src": "2887:18:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23081,
                      "name": "_targetedSelectors",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22908,
                      "src": "2908:18:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage",
                        "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                      }
                    },
                    "src": "2887:39:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                    }
                  },
                  "id": 23083,
                  "nodeType": "ExpressionStatement",
                  "src": "2887:39:63"
                }
              ]
            },
            "functionSelector": "916a17c6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSelectors",
            "nameLocation": "2796:15:63",
            "parameters": {
              "id": 23074,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2811:2:63"
            },
            "returnParameters": {
              "id": 23079,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23078,
                  "mutability": "mutable",
                  "name": "targetedSelectors_",
                  "nameLocation": "2857:18:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 23085,
                  "src": "2835:40:63",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23076,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 23075,
                        "name": "FuzzSelector",
                        "nameLocations": [
                          "2835:12:63"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 22882,
                        "src": "2835:12:63"
                      },
                      "referencedDeclaration": 22882,
                      "src": "2835:12:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FuzzSelector_$22882_storage_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector"
                      }
                    },
                    "id": 23077,
                    "nodeType": "ArrayTypeName",
                    "src": "2835:14:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22882_storage_$dyn_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2834:42:63"
            },
            "scope": 23097,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 23096,
            "nodeType": "FunctionDefinition",
            "src": "2939:133:63",
            "nodes": [],
            "body": {
              "id": 23095,
              "nodeType": "Block",
              "src": "3020:52:63",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 23093,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 23091,
                      "name": "targetedSenders_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23089,
                      "src": "3030:16:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 23092,
                      "name": "_targetedSenders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22894,
                      "src": "3049:16:63",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "3030:35:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 23094,
                  "nodeType": "ExpressionStatement",
                  "src": "3030:35:63"
                }
              ]
            },
            "functionSelector": "3e5e3c23",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSenders",
            "nameLocation": "2948:13:63",
            "parameters": {
              "id": 23086,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2961:2:63"
            },
            "returnParameters": {
              "id": 23090,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23089,
                  "mutability": "mutable",
                  "name": "targetedSenders_",
                  "nameLocation": "3002:16:63",
                  "nodeType": "VariableDeclaration",
                  "scope": 23096,
                  "src": "2985:33:63",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 23087,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2985:7:63",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 23088,
                    "nodeType": "ArrayTypeName",
                    "src": "2985:9:63",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2984:35:63"
            },
            "scope": 23097,
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
          23097
        ],
        "name": "StdInvariant",
        "nameLocation": "118:12:63",
        "scope": 23098,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 63
} as const;
