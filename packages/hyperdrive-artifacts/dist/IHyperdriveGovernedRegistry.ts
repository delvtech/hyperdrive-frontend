export const IHyperdriveGovernedRegistry = 
{
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "governance",
          "type": "address"
        }
      ],
      "name": "GovernanceUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "hyperdrive",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "data",
          "type": "uint256"
        }
      ],
      "name": "HyperdriveInfoUpdated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_hyperdriveInstance",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_data",
          "type": "uint256"
        }
      ],
      "name": "setHyperdriveInfo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_governance",
          "type": "address"
        }
      ],
      "name": "updateGovernance",
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
    "setHyperdriveInfo(address,uint256)": "be44e71a",
    "updateGovernance(address)": "b2561263"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"HyperdriveInfoUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_data\",\"type\":\"uint256\"}],\"name\":\"setHyperdriveInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"setHyperdriveInfo(address,uint256)\":{\"params\":{\"_data\":\"The uint256 value to be set to convey information about the instance.\",\"_hyperdriveInstance\":\"The hyperdrive instance address.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}}},\"version\":1},\"userdoc\":{\"events\":{\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveInfoUpdated(address,uint256)\":{\"notice\":\"Emitted when hyperdrive info is updated.\"}},\"kind\":\"user\",\"methods\":{\"setHyperdriveInfo(address,uint256)\":{\"notice\":\"Allows governance set arbitrary info for a hyperdrive instance.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":\"IHyperdriveGovernedRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":{\"keccak256\":\"0x1a442f311b166a99e67d7811b9b6af6f6cb66b6a6e31d47ebb59cc5820402170\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73b34b30e45b1ecd86c7dac2117427924293918372152d6b9d977e5cfe25fbcb\",\"dweb:/ipfs/QmTAwDbaYUFfBAtvrsgR1NpPJ7Q8SkHmPJaniy2i8rJFui\"]}},\"version\":1}",
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
              "name": "governance",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "GovernanceUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "hyperdrive",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "data",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "HyperdriveInfoUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_hyperdriveInstance",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_data",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "setHyperdriveInfo"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_governance",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "updateGovernance"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "setHyperdriveInfo(address,uint256)": {
            "params": {
              "_data": "The uint256 value to be set to convey information about the instance.",
              "_hyperdriveInstance": "The hyperdrive instance address."
            }
          },
          "updateGovernance(address)": {
            "params": {
              "_governance": "The new governance address."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "setHyperdriveInfo(address,uint256)": {
            "notice": "Allows governance set arbitrary info for a hyperdrive instance."
          },
          "updateGovernance(address)": {
            "notice": "Allows governance to transfer the governance role."
          }
        },
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
        "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": "IHyperdriveGovernedRegistry"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": {
        "keccak256": "0x1a442f311b166a99e67d7811b9b6af6f6cb66b6a6e31d47ebb59cc5820402170",
        "urls": [
          "bzz-raw://73b34b30e45b1ecd86c7dac2117427924293918372152d6b9d977e5cfe25fbcb",
          "dweb:/ipfs/QmTAwDbaYUFfBAtvrsgR1NpPJ7Q8SkHmPJaniy2i8rJFui"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol",
    "id": 4878,
    "exportedSymbols": {
      "IHyperdriveGovernedRegistry": [
        4877
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:844:31",
    "nodes": [
      {
        "id": 4850,
        "nodeType": "PragmaDirective",
        "src": "39:23:31",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 4877,
        "nodeType": "ContractDefinition",
        "src": "64:818:31",
        "nodes": [
          {
            "id": 4855,
            "nodeType": "EventDefinition",
            "src": "164:52:31",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 4851,
              "nodeType": "StructuredDocumentation",
              "src": "108:51:31",
              "text": "@notice Emitted when governance is transferred."
            },
            "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
            "name": "GovernanceUpdated",
            "nameLocation": "170:17:31",
            "parameters": {
              "id": 4854,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4853,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "governance",
                  "nameLocation": "204:10:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 4855,
                  "src": "188:26:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4852,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "188:7:31",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "187:28:31"
            }
          },
          {
            "id": 4862,
            "nodeType": "EventDefinition",
            "src": "279:70:31",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 4856,
              "nodeType": "StructuredDocumentation",
              "src": "222:52:31",
              "text": "@notice Emitted when hyperdrive info is updated."
            },
            "eventSelector": "f0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356",
            "name": "HyperdriveInfoUpdated",
            "nameLocation": "285:21:31",
            "parameters": {
              "id": 4861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4858,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "hyperdrive",
                  "nameLocation": "323:10:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 4862,
                  "src": "307:26:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4857,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "307:7:31",
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
                  "id": 4860,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "343:4:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 4862,
                  "src": "335:12:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4859,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "335:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "306:42:31"
            }
          },
          {
            "id": 4868,
            "nodeType": "FunctionDefinition",
            "src": "477:56:31",
            "nodes": [],
            "documentation": {
              "id": 4863,
              "nodeType": "StructuredDocumentation",
              "src": "355:117:31",
              "text": "@notice Allows governance to transfer the governance role.\n @param _governance The new governance address."
            },
            "functionSelector": "b2561263",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "updateGovernance",
            "nameLocation": "486:16:31",
            "parameters": {
              "id": 4866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4865,
                  "mutability": "mutable",
                  "name": "_governance",
                  "nameLocation": "511:11:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 4868,
                  "src": "503:19:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4864,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "503:7:31",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "502:21:31"
            },
            "returnParameters": {
              "id": 4867,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "532:0:31"
            },
            "scope": 4877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 4876,
            "nodeType": "FunctionDefinition",
            "src": "778:102:31",
            "nodes": [],
            "documentation": {
              "id": 4869,
              "nodeType": "StructuredDocumentation",
              "src": "539:234:31",
              "text": "@notice Allows governance set arbitrary info for a hyperdrive instance.\n @param _hyperdriveInstance The hyperdrive instance address.\n @param _data The uint256 value to be set to convey information about the instance."
            },
            "functionSelector": "be44e71a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setHyperdriveInfo",
            "nameLocation": "787:17:31",
            "parameters": {
              "id": 4874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4871,
                  "mutability": "mutable",
                  "name": "_hyperdriveInstance",
                  "nameLocation": "822:19:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 4876,
                  "src": "814:27:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4870,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "814:7:31",
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
                  "id": 4873,
                  "mutability": "mutable",
                  "name": "_data",
                  "nameLocation": "859:5:31",
                  "nodeType": "VariableDeclaration",
                  "scope": 4876,
                  "src": "851:13:31",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4872,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "851:7:31",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "804:66:31"
            },
            "returnParameters": {
              "id": 4875,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "879:0:31"
            },
            "scope": 4877,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IHyperdriveGovernedRegistry",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          4877
        ],
        "name": "IHyperdriveGovernedRegistry",
        "nameLocation": "74:27:31",
        "scope": 4878,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 31
} as const;
