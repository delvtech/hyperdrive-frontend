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
    "id": 22392,
    "exportedSymbols": {
      "StdInvariant": [
        22391
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:3043:57",
    "nodes": [
      {
        "id": 22169,
        "nodeType": "PragmaDirective",
        "src": "32:31:57",
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
        "id": 22170,
        "nodeType": "PragmaDirective",
        "src": "65:33:57",
        "nodes": [],
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ]
      },
      {
        "id": 22391,
        "nodeType": "ContractDefinition",
        "src": "100:2974:57",
        "nodes": [
          {
            "id": 22176,
            "nodeType": "StructDefinition",
            "src": "137:77:57",
            "nodes": [],
            "canonicalName": "StdInvariant.FuzzSelector",
            "members": [
              {
                "constant": false,
                "id": 22172,
                "mutability": "mutable",
                "name": "addr",
                "nameLocation": "175:4:57",
                "nodeType": "VariableDeclaration",
                "scope": 22176,
                "src": "167:12:57",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 22171,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "167:7:57",
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
                "id": 22175,
                "mutability": "mutable",
                "name": "selectors",
                "nameLocation": "198:9:57",
                "nodeType": "VariableDeclaration",
                "scope": 22176,
                "src": "189:18:57",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                  "typeString": "bytes4[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 22173,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "189:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "id": 22174,
                  "nodeType": "ArrayTypeName",
                  "src": "189:8:57",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes4_$dyn_storage_ptr",
                    "typeString": "bytes4[]"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "FuzzSelector",
            "nameLocation": "144:12:57",
            "scope": 22391,
            "visibility": "public"
          },
          {
            "id": 22179,
            "nodeType": "VariableDeclaration",
            "src": "220:36:57",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedContracts",
            "nameLocation": "238:18:57",
            "scope": 22391,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 22177,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "220:7:57",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 22178,
              "nodeType": "ArrayTypeName",
              "src": "220:9:57",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22182,
            "nodeType": "VariableDeclaration",
            "src": "262:34:57",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedSenders",
            "nameLocation": "280:16:57",
            "scope": 22391,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 22180,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "262:7:57",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 22181,
              "nodeType": "ArrayTypeName",
              "src": "262:9:57",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22185,
            "nodeType": "VariableDeclaration",
            "src": "302:36:57",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedContracts",
            "nameLocation": "320:18:57",
            "scope": 22391,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 22183,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "302:7:57",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 22184,
              "nodeType": "ArrayTypeName",
              "src": "302:9:57",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22188,
            "nodeType": "VariableDeclaration",
            "src": "344:34:57",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedSenders",
            "nameLocation": "362:16:57",
            "scope": 22391,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 22186,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "344:7:57",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 22187,
              "nodeType": "ArrayTypeName",
              "src": "344:9:57",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22191,
            "nodeType": "VariableDeclaration",
            "src": "385:35:57",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_excludedArtifacts",
            "nameLocation": "402:18:57",
            "scope": 22391,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 22189,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "385:6:57",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 22190,
              "nodeType": "ArrayTypeName",
              "src": "385:8:57",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22194,
            "nodeType": "VariableDeclaration",
            "src": "426:35:57",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedArtifacts",
            "nameLocation": "443:18:57",
            "scope": 22391,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
              "typeString": "string[]"
            },
            "typeName": {
              "baseType": {
                "id": 22192,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "426:6:57",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "id": 22193,
              "nodeType": "ArrayTypeName",
              "src": "426:8:57",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                "typeString": "string[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22198,
            "nodeType": "VariableDeclaration",
            "src": "468:49:57",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedArtifactSelectors",
            "nameLocation": "491:26:57",
            "scope": 22391,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage",
              "typeString": "struct StdInvariant.FuzzSelector[]"
            },
            "typeName": {
              "baseType": {
                "id": 22196,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 22195,
                  "name": "FuzzSelector",
                  "nameLocations": [
                    "468:12:57"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 22176,
                  "src": "468:12:57"
                },
                "referencedDeclaration": 22176,
                "src": "468:12:57",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_FuzzSelector_$22176_storage_ptr",
                  "typeString": "struct StdInvariant.FuzzSelector"
                }
              },
              "id": 22197,
              "nodeType": "ArrayTypeName",
              "src": "468:14:57",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage_ptr",
                "typeString": "struct StdInvariant.FuzzSelector[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22202,
            "nodeType": "VariableDeclaration",
            "src": "523:41:57",
            "nodes": [],
            "constant": false,
            "mutability": "mutable",
            "name": "_targetedSelectors",
            "nameLocation": "546:18:57",
            "scope": 22391,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage",
              "typeString": "struct StdInvariant.FuzzSelector[]"
            },
            "typeName": {
              "baseType": {
                "id": 22200,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 22199,
                  "name": "FuzzSelector",
                  "nameLocations": [
                    "523:12:57"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 22176,
                  "src": "523:12:57"
                },
                "referencedDeclaration": 22176,
                "src": "523:12:57",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_FuzzSelector_$22176_storage_ptr",
                  "typeString": "struct StdInvariant.FuzzSelector"
                }
              },
              "id": 22201,
              "nodeType": "ArrayTypeName",
              "src": "523:14:57",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage_ptr",
                "typeString": "struct StdInvariant.FuzzSelector[]"
              }
            },
            "visibility": "private"
          },
          {
            "id": 22214,
            "nodeType": "FunctionDefinition",
            "src": "649:126:57",
            "nodes": [],
            "body": {
              "id": 22213,
              "nodeType": "Block",
              "src": "713:62:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22210,
                        "name": "newExcludedContract_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22204,
                        "src": "747:20:57",
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
                        "id": 22207,
                        "name": "_excludedContracts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22179,
                        "src": "723:18:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 22209,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "742:4:57",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "723:23:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 22211,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "723:45:57",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22212,
                  "nodeType": "ExpressionStatement",
                  "src": "723:45:57"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeContract",
            "nameLocation": "658:15:57",
            "parameters": {
              "id": 22205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22204,
                  "mutability": "mutable",
                  "name": "newExcludedContract_",
                  "nameLocation": "682:20:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22214,
                  "src": "674:28:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 22203,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "674:7:57",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "673:30:57"
            },
            "returnParameters": {
              "id": 22206,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "713:0:57"
            },
            "scope": 22391,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22226,
            "nodeType": "FunctionDefinition",
            "src": "781:118:57",
            "nodes": [],
            "body": {
              "id": 22225,
              "nodeType": "Block",
              "src": "841:58:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22222,
                        "name": "newExcludedSender_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22216,
                        "src": "873:18:57",
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
                        "id": 22219,
                        "name": "_excludedSenders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22182,
                        "src": "851:16:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 22221,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "868:4:57",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "851:21:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 22223,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "851:41:57",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22224,
                  "nodeType": "ExpressionStatement",
                  "src": "851:41:57"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeSender",
            "nameLocation": "790:13:57",
            "parameters": {
              "id": 22217,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22216,
                  "mutability": "mutable",
                  "name": "newExcludedSender_",
                  "nameLocation": "812:18:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22226,
                  "src": "804:26:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 22215,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "804:7:57",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "803:28:57"
            },
            "returnParameters": {
              "id": 22218,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "841:0:57"
            },
            "scope": 22391,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22238,
            "nodeType": "FunctionDefinition",
            "src": "905:132:57",
            "nodes": [],
            "body": {
              "id": 22237,
              "nodeType": "Block",
              "src": "975:62:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22234,
                        "name": "newExcludedArtifact_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22228,
                        "src": "1009:20:57",
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
                        "id": 22231,
                        "name": "_excludedArtifacts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22191,
                        "src": "985:18:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 22233,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1004:4:57",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "985:23:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                        "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                      }
                    },
                    "id": 22235,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "985:45:57",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22236,
                  "nodeType": "ExpressionStatement",
                  "src": "985:45:57"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeArtifact",
            "nameLocation": "914:15:57",
            "parameters": {
              "id": 22229,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22228,
                  "mutability": "mutable",
                  "name": "newExcludedArtifact_",
                  "nameLocation": "944:20:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22238,
                  "src": "930:34:57",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22227,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "930:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "929:36:57"
            },
            "returnParameters": {
              "id": 22230,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "975:0:57"
            },
            "scope": 22391,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22250,
            "nodeType": "FunctionDefinition",
            "src": "1043:131:57",
            "nodes": [],
            "body": {
              "id": 22249,
              "nodeType": "Block",
              "src": "1112:62:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22246,
                        "name": "newTargetedArtifact_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22240,
                        "src": "1146:20:57",
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
                        "id": 22243,
                        "name": "_targetedArtifacts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22194,
                        "src": "1122:18:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                          "typeString": "string storage ref[] storage ref"
                        }
                      },
                      "id": 22245,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1141:4:57",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1122:23:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_string_storage_$dyn_storage_ptr_$_t_string_storage_$returns$__$attached_to$_t_array$_t_string_storage_$dyn_storage_ptr_$",
                        "typeString": "function (string storage ref[] storage pointer,string storage ref)"
                      }
                    },
                    "id": 22247,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1122:45:57",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22248,
                  "nodeType": "ExpressionStatement",
                  "src": "1122:45:57"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifact",
            "nameLocation": "1052:14:57",
            "parameters": {
              "id": 22241,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22240,
                  "mutability": "mutable",
                  "name": "newTargetedArtifact_",
                  "nameLocation": "1081:20:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22250,
                  "src": "1067:34:57",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 22239,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1067:6:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1066:36:57"
            },
            "returnParameters": {
              "id": 22242,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1112:0:57"
            },
            "scope": 22391,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22263,
            "nodeType": "FunctionDefinition",
            "src": "1180:169:57",
            "nodes": [],
            "body": {
              "id": 22262,
              "nodeType": "Block",
              "src": "1271:78:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22259,
                        "name": "newTargetedArtifactSelector_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22253,
                        "src": "1313:28:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FuzzSelector_$22176_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_FuzzSelector_$22176_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      ],
                      "expression": {
                        "id": 22256,
                        "name": "_targetedArtifactSelectors",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22198,
                        "src": "1281:26:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage",
                          "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                        }
                      },
                      "id": 22258,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1308:4:57",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1281:31:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$22176_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                      }
                    },
                    "id": 22260,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1281:61:57",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22261,
                  "nodeType": "ExpressionStatement",
                  "src": "1281:61:57"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifactSelector",
            "nameLocation": "1189:22:57",
            "parameters": {
              "id": 22254,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22253,
                  "mutability": "mutable",
                  "name": "newTargetedArtifactSelector_",
                  "nameLocation": "1232:28:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22263,
                  "src": "1212:48:57",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FuzzSelector_$22176_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector"
                  },
                  "typeName": {
                    "id": 22252,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 22251,
                      "name": "FuzzSelector",
                      "nameLocations": [
                        "1212:12:57"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 22176,
                      "src": "1212:12:57"
                    },
                    "referencedDeclaration": 22176,
                    "src": "1212:12:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FuzzSelector_$22176_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1211:50:57"
            },
            "returnParameters": {
              "id": 22255,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1271:0:57"
            },
            "scope": 22391,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22275,
            "nodeType": "FunctionDefinition",
            "src": "1355:125:57",
            "nodes": [],
            "body": {
              "id": 22274,
              "nodeType": "Block",
              "src": "1418:62:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22271,
                        "name": "newTargetedContract_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22265,
                        "src": "1452:20:57",
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
                        "id": 22268,
                        "name": "_targetedContracts",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22185,
                        "src": "1428:18:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 22270,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1447:4:57",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1428:23:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 22272,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1428:45:57",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22273,
                  "nodeType": "ExpressionStatement",
                  "src": "1428:45:57"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetContract",
            "nameLocation": "1364:14:57",
            "parameters": {
              "id": 22266,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22265,
                  "mutability": "mutable",
                  "name": "newTargetedContract_",
                  "nameLocation": "1387:20:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22275,
                  "src": "1379:28:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 22264,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1379:7:57",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1378:30:57"
            },
            "returnParameters": {
              "id": 22267,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1418:0:57"
            },
            "scope": 22391,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22288,
            "nodeType": "FunctionDefinition",
            "src": "1486:137:57",
            "nodes": [],
            "body": {
              "id": 22287,
              "nodeType": "Block",
              "src": "1561:62:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22284,
                        "name": "newTargetedSelector_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22278,
                        "src": "1595:20:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_FuzzSelector_$22176_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_FuzzSelector_$22176_memory_ptr",
                          "typeString": "struct StdInvariant.FuzzSelector memory"
                        }
                      ],
                      "expression": {
                        "id": 22281,
                        "name": "_targetedSelectors",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22202,
                        "src": "1571:18:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage",
                          "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                        }
                      },
                      "id": 22283,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1590:4:57",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1571:23:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage_ptr_$_t_struct$_FuzzSelector_$22176_storage_$returns$__$attached_to$_t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage_ptr_$",
                        "typeString": "function (struct StdInvariant.FuzzSelector storage ref[] storage pointer,struct StdInvariant.FuzzSelector storage ref)"
                      }
                    },
                    "id": 22285,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1571:45:57",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22286,
                  "nodeType": "ExpressionStatement",
                  "src": "1571:45:57"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSelector",
            "nameLocation": "1495:14:57",
            "parameters": {
              "id": 22279,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22278,
                  "mutability": "mutable",
                  "name": "newTargetedSelector_",
                  "nameLocation": "1530:20:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22288,
                  "src": "1510:40:57",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_FuzzSelector_$22176_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector"
                  },
                  "typeName": {
                    "id": 22277,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 22276,
                      "name": "FuzzSelector",
                      "nameLocations": [
                        "1510:12:57"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 22176,
                      "src": "1510:12:57"
                    },
                    "referencedDeclaration": 22176,
                    "src": "1510:12:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_FuzzSelector_$22176_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1509:42:57"
            },
            "returnParameters": {
              "id": 22280,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1561:0:57"
            },
            "scope": 22391,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22300,
            "nodeType": "FunctionDefinition",
            "src": "1629:117:57",
            "nodes": [],
            "body": {
              "id": 22299,
              "nodeType": "Block",
              "src": "1688:58:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 22296,
                        "name": "newTargetedSender_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22290,
                        "src": "1720:18:57",
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
                        "id": 22293,
                        "name": "_targetedSenders",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22188,
                        "src": "1698:16:57",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 22295,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1715:4:57",
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "src": "1698:21:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_array$_t_address_$dyn_storage_ptr_$_t_address_$returns$__$attached_to$_t_array$_t_address_$dyn_storage_ptr_$",
                        "typeString": "function (address[] storage pointer,address)"
                      }
                    },
                    "id": 22297,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1698:41:57",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 22298,
                  "nodeType": "ExpressionStatement",
                  "src": "1698:41:57"
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSender",
            "nameLocation": "1638:12:57",
            "parameters": {
              "id": 22291,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22290,
                  "mutability": "mutable",
                  "name": "newTargetedSender_",
                  "nameLocation": "1659:18:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22300,
                  "src": "1651:26:57",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 22289,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1651:7:57",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1650:28:57"
            },
            "returnParameters": {
              "id": 22292,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1688:0:57"
            },
            "scope": 22391,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 22311,
            "nodeType": "FunctionDefinition",
            "src": "1875:141:57",
            "nodes": [],
            "body": {
              "id": 22310,
              "nodeType": "Block",
              "src": "1960:56:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 22308,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 22306,
                      "name": "excludedArtifacts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22304,
                      "src": "1970:18:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                        "typeString": "string memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 22307,
                      "name": "_excludedArtifacts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22191,
                      "src": "1991:18:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                        "typeString": "string storage ref[] storage ref"
                      }
                    },
                    "src": "1970:39:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      "typeString": "string memory[] memory"
                    }
                  },
                  "id": 22309,
                  "nodeType": "ExpressionStatement",
                  "src": "1970:39:57"
                }
              ]
            },
            "functionSelector": "b5508aa9",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeArtifacts",
            "nameLocation": "1884:16:57",
            "parameters": {
              "id": 22301,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1900:2:57"
            },
            "returnParameters": {
              "id": 22305,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22304,
                  "mutability": "mutable",
                  "name": "excludedArtifacts_",
                  "nameLocation": "1940:18:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22311,
                  "src": "1924:34:57",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22302,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1924:6:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 22303,
                    "nodeType": "ArrayTypeName",
                    "src": "1924:8:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1923:36:57"
            },
            "scope": 22391,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 22322,
            "nodeType": "FunctionDefinition",
            "src": "2022:142:57",
            "nodes": [],
            "body": {
              "id": 22321,
              "nodeType": "Block",
              "src": "2108:56:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 22319,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 22317,
                      "name": "excludedContracts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22315,
                      "src": "2118:18:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 22318,
                      "name": "_excludedContracts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22179,
                      "src": "2139:18:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2118:39:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 22320,
                  "nodeType": "ExpressionStatement",
                  "src": "2118:39:57"
                }
              ]
            },
            "functionSelector": "e20c9f71",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeContracts",
            "nameLocation": "2031:16:57",
            "parameters": {
              "id": 22312,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2047:2:57"
            },
            "returnParameters": {
              "id": 22316,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22315,
                  "mutability": "mutable",
                  "name": "excludedContracts_",
                  "nameLocation": "2088:18:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22322,
                  "src": "2071:35:57",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22313,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2071:7:57",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 22314,
                    "nodeType": "ArrayTypeName",
                    "src": "2071:9:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2070:37:57"
            },
            "scope": 22391,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 22333,
            "nodeType": "FunctionDefinition",
            "src": "2170:134:57",
            "nodes": [],
            "body": {
              "id": 22332,
              "nodeType": "Block",
              "src": "2252:52:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 22330,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 22328,
                      "name": "excludedSenders_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22326,
                      "src": "2262:16:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 22329,
                      "name": "_excludedSenders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22182,
                      "src": "2281:16:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2262:35:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 22331,
                  "nodeType": "ExpressionStatement",
                  "src": "2262:35:57"
                }
              ]
            },
            "functionSelector": "1ed7831c",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "excludeSenders",
            "nameLocation": "2179:14:57",
            "parameters": {
              "id": 22323,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2193:2:57"
            },
            "returnParameters": {
              "id": 22327,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22326,
                  "mutability": "mutable",
                  "name": "excludedSenders_",
                  "nameLocation": "2234:16:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22333,
                  "src": "2217:33:57",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22324,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2217:7:57",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 22325,
                    "nodeType": "ArrayTypeName",
                    "src": "2217:9:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2216:35:57"
            },
            "scope": 22391,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 22344,
            "nodeType": "FunctionDefinition",
            "src": "2310:140:57",
            "nodes": [],
            "body": {
              "id": 22343,
              "nodeType": "Block",
              "src": "2394:56:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 22341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 22339,
                      "name": "targetedArtifacts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22337,
                      "src": "2404:18:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                        "typeString": "string memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 22340,
                      "name": "_targetedArtifacts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22194,
                      "src": "2425:18:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_string_storage_$dyn_storage",
                        "typeString": "string storage ref[] storage ref"
                      }
                    },
                    "src": "2404:39:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                      "typeString": "string memory[] memory"
                    }
                  },
                  "id": 22342,
                  "nodeType": "ExpressionStatement",
                  "src": "2404:39:57"
                }
              ]
            },
            "functionSelector": "85226c81",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifacts",
            "nameLocation": "2319:15:57",
            "parameters": {
              "id": 22334,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2334:2:57"
            },
            "returnParameters": {
              "id": 22338,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22337,
                  "mutability": "mutable",
                  "name": "targetedArtifacts_",
                  "nameLocation": "2374:18:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22344,
                  "src": "2358:34:57",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_ptr_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22335,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2358:6:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 22336,
                    "nodeType": "ArrayTypeName",
                    "src": "2358:8:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2357:36:57"
            },
            "scope": 22391,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 22356,
            "nodeType": "FunctionDefinition",
            "src": "2456:178:57",
            "nodes": [],
            "body": {
              "id": 22355,
              "nodeType": "Block",
              "src": "2562:72:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 22353,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 22351,
                      "name": "targetedArtifactSelectors_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22349,
                      "src": "2572:26:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 22352,
                      "name": "_targetedArtifactSelectors",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22198,
                      "src": "2601:26:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage",
                        "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                      }
                    },
                    "src": "2572:55:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                    }
                  },
                  "id": 22354,
                  "nodeType": "ExpressionStatement",
                  "src": "2572:55:57"
                }
              ]
            },
            "functionSelector": "66d9a9a0",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetArtifactSelectors",
            "nameLocation": "2465:23:57",
            "parameters": {
              "id": 22345,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2488:2:57"
            },
            "returnParameters": {
              "id": 22350,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22349,
                  "mutability": "mutable",
                  "name": "targetedArtifactSelectors_",
                  "nameLocation": "2534:26:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22356,
                  "src": "2512:48:57",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22347,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 22346,
                        "name": "FuzzSelector",
                        "nameLocations": [
                          "2512:12:57"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 22176,
                        "src": "2512:12:57"
                      },
                      "referencedDeclaration": 22176,
                      "src": "2512:12:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FuzzSelector_$22176_storage_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector"
                      }
                    },
                    "id": 22348,
                    "nodeType": "ArrayTypeName",
                    "src": "2512:14:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2511:50:57"
            },
            "scope": 22391,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 22367,
            "nodeType": "FunctionDefinition",
            "src": "2640:141:57",
            "nodes": [],
            "body": {
              "id": 22366,
              "nodeType": "Block",
              "src": "2725:56:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 22364,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 22362,
                      "name": "targetedContracts_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22360,
                      "src": "2735:18:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 22363,
                      "name": "_targetedContracts",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22185,
                      "src": "2756:18:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "2735:39:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 22365,
                  "nodeType": "ExpressionStatement",
                  "src": "2735:39:57"
                }
              ]
            },
            "functionSelector": "3f7286f4",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetContracts",
            "nameLocation": "2649:15:57",
            "parameters": {
              "id": 22357,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2664:2:57"
            },
            "returnParameters": {
              "id": 22361,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22360,
                  "mutability": "mutable",
                  "name": "targetedContracts_",
                  "nameLocation": "2705:18:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22367,
                  "src": "2688:35:57",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22358,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2688:7:57",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 22359,
                    "nodeType": "ArrayTypeName",
                    "src": "2688:9:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2687:37:57"
            },
            "scope": 22391,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 22379,
            "nodeType": "FunctionDefinition",
            "src": "2787:146:57",
            "nodes": [],
            "body": {
              "id": 22378,
              "nodeType": "Block",
              "src": "2877:56:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 22376,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 22374,
                      "name": "targetedSelectors_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22372,
                      "src": "2887:18:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_memory_ptr_$dyn_memory_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 22375,
                      "name": "_targetedSelectors",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22202,
                      "src": "2908:18:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage",
                        "typeString": "struct StdInvariant.FuzzSelector storage ref[] storage ref"
                      }
                    },
                    "src": "2887:39:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_memory_ptr_$dyn_memory_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector memory[] memory"
                    }
                  },
                  "id": 22377,
                  "nodeType": "ExpressionStatement",
                  "src": "2887:39:57"
                }
              ]
            },
            "functionSelector": "916a17c6",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSelectors",
            "nameLocation": "2796:15:57",
            "parameters": {
              "id": 22368,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2811:2:57"
            },
            "returnParameters": {
              "id": 22373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22372,
                  "mutability": "mutable",
                  "name": "targetedSelectors_",
                  "nameLocation": "2857:18:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22379,
                  "src": "2835:40:57",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_memory_ptr_$dyn_memory_ptr",
                    "typeString": "struct StdInvariant.FuzzSelector[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22370,
                      "nodeType": "UserDefinedTypeName",
                      "pathNode": {
                        "id": 22369,
                        "name": "FuzzSelector",
                        "nameLocations": [
                          "2835:12:57"
                        ],
                        "nodeType": "IdentifierPath",
                        "referencedDeclaration": 22176,
                        "src": "2835:12:57"
                      },
                      "referencedDeclaration": 22176,
                      "src": "2835:12:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_FuzzSelector_$22176_storage_ptr",
                        "typeString": "struct StdInvariant.FuzzSelector"
                      }
                    },
                    "id": 22371,
                    "nodeType": "ArrayTypeName",
                    "src": "2835:14:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_FuzzSelector_$22176_storage_$dyn_storage_ptr",
                      "typeString": "struct StdInvariant.FuzzSelector[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2834:42:57"
            },
            "scope": 22391,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 22390,
            "nodeType": "FunctionDefinition",
            "src": "2939:133:57",
            "nodes": [],
            "body": {
              "id": 22389,
              "nodeType": "Block",
              "src": "3020:52:57",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 22387,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 22385,
                      "name": "targetedSenders_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22383,
                      "src": "3030:16:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 22386,
                      "name": "_targetedSenders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22188,
                      "src": "3049:16:57",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                        "typeString": "address[] storage ref"
                      }
                    },
                    "src": "3030:35:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "id": 22388,
                  "nodeType": "ExpressionStatement",
                  "src": "3030:35:57"
                }
              ]
            },
            "functionSelector": "3e5e3c23",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "targetSenders",
            "nameLocation": "2948:13:57",
            "parameters": {
              "id": 22380,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2961:2:57"
            },
            "returnParameters": {
              "id": 22384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 22383,
                  "mutability": "mutable",
                  "name": "targetedSenders_",
                  "nameLocation": "3002:16:57",
                  "nodeType": "VariableDeclaration",
                  "scope": 22390,
                  "src": "2985:33:57",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 22381,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2985:7:57",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 22382,
                    "nodeType": "ArrayTypeName",
                    "src": "2985:9:57",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2984:35:57"
            },
            "scope": 22391,
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
          22391
        ],
        "name": "StdInvariant",
        "nameLocation": "118:12:57",
        "scope": 22392,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 57
}