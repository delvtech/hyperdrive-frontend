export const IHyperdriveRegistry = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_hyperdriveInstance",
          "type": "address"
        }
      ],
      "name": "getHyperdriveInfo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
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
    "getHyperdriveInfo(address)": "32ddcb88"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_hyperdriveInstance\",\"type\":\"address\"}],\"name\":\"getHyperdriveInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"getHyperdriveInfo(address)\":{\"params\":{\"_hyperdriveInstance\":\"The hyperdrive instance address.\"},\"returns\":{\"_0\":\"The uint256 value set by governance.\"}}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"getHyperdriveInfo(address)\":{\"notice\":\"Allows anyone to get the info for a hyperdrive instance.\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveRegistry.sol\":\"IHyperdriveRegistry\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IHyperdriveRegistry.sol\":{\"keccak256\":\"0x690370b026b4649bdbe7d5d946da709a105a06c714a26776bb4a94fc058158ea\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://664e92c4dc43d2d94b60fb2eb304236446ef15082cab6dd14b9a3faad721802f\",\"dweb:/ipfs/QmNmtBUb8hKrpYDVpUJTzTmwWMd46drQnSwRnC6ndskxnm\"]}},\"version\":1}",
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
              "name": "_hyperdriveInstance",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getHyperdriveInfo",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "getHyperdriveInfo(address)": {
            "params": {
              "_hyperdriveInstance": "The hyperdrive instance address."
            },
            "returns": {
              "_0": "The uint256 value set by governance."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "getHyperdriveInfo(address)": {
            "notice": "Allows anyone to get the info for a hyperdrive instance."
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
        "contracts/src/interfaces/IHyperdriveRegistry.sol": "IHyperdriveRegistry"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IHyperdriveRegistry.sol": {
        "keccak256": "0x690370b026b4649bdbe7d5d946da709a105a06c714a26776bb4a94fc058158ea",
        "urls": [
          "bzz-raw://664e92c4dc43d2d94b60fb2eb304236446ef15082cab6dd14b9a3faad721802f",
          "dweb:/ipfs/QmNmtBUb8hKrpYDVpUJTzTmwWMd46drQnSwRnC6ndskxnm"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IHyperdriveRegistry.sol",
    "id": 4956,
    "exportedSymbols": {
      "IHyperdriveRegistry": [
        4955
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:360:33",
    "nodes": [
      {
        "id": 4946,
        "nodeType": "PragmaDirective",
        "src": "39:23:33",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 4955,
        "nodeType": "ContractDefinition",
        "src": "64:334:33",
        "nodes": [
          {
            "id": 4954,
            "nodeType": "FunctionDefinition",
            "src": "294:102:33",
            "nodes": [],
            "documentation": {
              "id": 4947,
              "nodeType": "StructuredDocumentation",
              "src": "100:189:33",
              "text": "@notice Allows anyone to get the info for a hyperdrive instance.\n @param _hyperdriveInstance The hyperdrive instance address.\n @return The uint256 value set by governance."
            },
            "functionSelector": "32ddcb88",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getHyperdriveInfo",
            "nameLocation": "303:17:33",
            "parameters": {
              "id": 4950,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4949,
                  "mutability": "mutable",
                  "name": "_hyperdriveInstance",
                  "nameLocation": "338:19:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 4954,
                  "src": "330:27:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4948,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:7:33",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "320:43:33"
            },
            "returnParameters": {
              "id": 4953,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4952,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 4954,
                  "src": "387:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4951,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "387:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "386:9:33"
            },
            "scope": 4955,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IHyperdriveRegistry",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          4955
        ],
        "name": "IHyperdriveRegistry",
        "nameLocation": "74:19:33",
        "scope": 4956,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 33
} as const;
