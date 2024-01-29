export const IHyperdriveGovernedRegistry = 
{
  "abi": [
    {
      "inputs": [],
      "name": "Unauthorized",
      "type": "error"
    },
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"Unauthorized\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"hyperdrive\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"data\",\"type\":\"uint256\"}],\"name\":\"HyperdriveInfoUpdated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_data\",\"type\":\"uint256\"}],\"name\":\"setHyperdriveInfo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_governance\",\"type\":\"address\"}],\"name\":\"updateGovernance\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"setHyperdriveInfo(address,uint256)\":{\"params\":{\"_data\":\"The uint256 value to be set to convey information about the instance.\",\"_hyperdriveInstance\":\"The hyperdrive instance address.\"}},\"updateGovernance(address)\":{\"params\":{\"_governance\":\"The new governance address.\"}}},\"version\":1},\"userdoc\":{\"errors\":{\"Unauthorized()\":[{\"notice\":\"Thrown when caller is not governance.\"}]},\"events\":{\"GovernanceUpdated(address)\":{\"notice\":\"Emitted when governance is transferred.\"},\"HyperdriveInfoUpdated(address,uint256)\":{\"notice\":\"Emitted when hyperdrive info is updated.\"}},\"kind\":\"user\",\"methods\":{\"setHyperdriveInfo(address,uint256)\":{\"notice\":\"Allows governance set arbitrary info for a hyperdrive instance.\"},\"updateGovernance(address)\":{\"notice\":\"Allows governance to transfer the governance role.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":\"IHyperdriveGovernedRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveGovernedRegistry.sol\":{\"keccak256\":\"0x635a358f9e69308cf7e3087e233dfaa503c9b846e0f2f22d365f1c7bb2592965\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8be6d8d101f22a89e5c9a409f20c8d9630f72aa59ff60edf3f232f070eb94ad1\",\"dweb:/ipfs/QmVf9dG9Adt26pJFy5UwJ27y94WEcEdMqaskJivXF458AP\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "Unauthorized"
        },
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
        "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
        "aave-v3-core/=lib/aave-v3-core/",
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
        "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": "IHyperdriveGovernedRegistry"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol": {
        "keccak256": "0x635a358f9e69308cf7e3087e233dfaa503c9b846e0f2f22d365f1c7bb2592965",
        "urls": [
          "bzz-raw://8be6d8d101f22a89e5c9a409f20c8d9630f72aa59ff60edf3f232f070eb94ad1",
          "dweb:/ipfs/QmVf9dG9Adt26pJFy5UwJ27y94WEcEdMqaskJivXF458AP"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IHyperdriveGovernedRegistry.sol",
    "id": 7998,
    "exportedSymbols": {
      "IHyperdriveGovernedRegistry": [
        7997
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:925:50",
    "nodes": [
      {
        "id": 7967,
        "nodeType": "PragmaDirective",
        "src": "39:23:50",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 7997,
        "nodeType": "ContractDefinition",
        "src": "64:899:50",
        "nodes": [
          {
            "id": 7972,
            "nodeType": "EventDefinition",
            "src": "164:52:50",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 7968,
              "nodeType": "StructuredDocumentation",
              "src": "108:51:50",
              "text": "@notice Emitted when governance is transferred."
            },
            "eventSelector": "9d3e522e1e47a2f6009739342b9cc7b252a1888154e843ab55ee1c81745795ab",
            "name": "GovernanceUpdated",
            "nameLocation": "170:17:50",
            "parameters": {
              "id": 7971,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7970,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "governance",
                  "nameLocation": "204:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 7972,
                  "src": "188:26:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7969,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "188:7:50",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "187:28:50"
            }
          },
          {
            "id": 7979,
            "nodeType": "EventDefinition",
            "src": "279:70:50",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 7973,
              "nodeType": "StructuredDocumentation",
              "src": "222:52:50",
              "text": "@notice Emitted when hyperdrive info is updated."
            },
            "eventSelector": "f0ddd07f037f75a9ab309993d576264e5074e0d60be48db5629946f0fec5d356",
            "name": "HyperdriveInfoUpdated",
            "nameLocation": "285:21:50",
            "parameters": {
              "id": 7978,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7975,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "hyperdrive",
                  "nameLocation": "323:10:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 7979,
                  "src": "307:26:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7974,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "307:7:50",
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
                  "id": 7977,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "343:4:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 7979,
                  "src": "335:12:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7976,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "335:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "306:42:50"
            }
          },
          {
            "id": 7982,
            "nodeType": "ErrorDefinition",
            "src": "409:21:50",
            "nodes": [],
            "documentation": {
              "id": 7980,
              "nodeType": "StructuredDocumentation",
              "src": "355:49:50",
              "text": "@notice Thrown when caller is not governance."
            },
            "errorSelector": "82b42900",
            "name": "Unauthorized",
            "nameLocation": "415:12:50",
            "parameters": {
              "id": 7981,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "427:2:50"
            }
          },
          {
            "id": 7988,
            "nodeType": "FunctionDefinition",
            "src": "558:56:50",
            "nodes": [],
            "documentation": {
              "id": 7983,
              "nodeType": "StructuredDocumentation",
              "src": "436:117:50",
              "text": "@notice Allows governance to transfer the governance role.\n @param _governance The new governance address."
            },
            "functionSelector": "b2561263",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "updateGovernance",
            "nameLocation": "567:16:50",
            "parameters": {
              "id": 7986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7985,
                  "mutability": "mutable",
                  "name": "_governance",
                  "nameLocation": "592:11:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 7988,
                  "src": "584:19:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7984,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "584:7:50",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "583:21:50"
            },
            "returnParameters": {
              "id": 7987,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "613:0:50"
            },
            "scope": 7997,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 7996,
            "nodeType": "FunctionDefinition",
            "src": "859:102:50",
            "nodes": [],
            "documentation": {
              "id": 7989,
              "nodeType": "StructuredDocumentation",
              "src": "620:234:50",
              "text": "@notice Allows governance set arbitrary info for a hyperdrive instance.\n @param _hyperdriveInstance The hyperdrive instance address.\n @param _data The uint256 value to be set to convey information about the instance."
            },
            "functionSelector": "be44e71a",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "setHyperdriveInfo",
            "nameLocation": "868:17:50",
            "parameters": {
              "id": 7994,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7991,
                  "mutability": "mutable",
                  "name": "_hyperdriveInstance",
                  "nameLocation": "903:19:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 7996,
                  "src": "895:27:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 7990,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "895:7:50",
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
                  "id": 7993,
                  "mutability": "mutable",
                  "name": "_data",
                  "nameLocation": "940:5:50",
                  "nodeType": "VariableDeclaration",
                  "scope": 7996,
                  "src": "932:13:50",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7992,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "932:7:50",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "885:66:50"
            },
            "returnParameters": {
              "id": 7995,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "960:0:50"
            },
            "scope": 7997,
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
          7997
        ],
        "name": "IHyperdriveGovernedRegistry",
        "nameLocation": "74:27:50",
        "scope": 7998,
        "usedErrors": [
          7982
        ],
        "usedEvents": [
          7972,
          7979
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 50
} as const;
