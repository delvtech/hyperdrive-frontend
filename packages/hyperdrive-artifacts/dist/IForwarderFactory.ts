export const IForwarderFactory = 
{
  "abi": [
    {
      "inputs": [],
      "name": "getDeployDetails",
      "outputs": [
        {
          "internalType": "contract IMultiToken",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
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
    "getDeployDetails()": "600eb4ba"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"getDeployDetails\",\"outputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IForwarderFactory.sol\":\"IForwarderFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IForwarderFactory.sol\":{\"keccak256\":\"0x939624fbf6490ff4e9309638d1ed36ba68cfd6a147763810dcbb2bb1efd326af\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://aba4213925b95149b6524719699e6f1642a99e7e13070cc9348b11f704a23ba3\",\"dweb:/ipfs/QmPjwGGY3UDYzw56ccvxz7cq6oSTphKqEDPvVdrX7qAPaF\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "getDeployDetails",
          "outputs": [
            {
              "internalType": "contract IMultiToken",
              "name": "",
              "type": "address"
            },
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
        "contracts/src/interfaces/IForwarderFactory.sol": "IForwarderFactory"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IForwarderFactory.sol": {
        "keccak256": "0x939624fbf6490ff4e9309638d1ed36ba68cfd6a147763810dcbb2bb1efd326af",
        "urls": [
          "bzz-raw://aba4213925b95149b6524719699e6f1642a99e7e13070cc9348b11f704a23ba3",
          "dweb:/ipfs/QmPjwGGY3UDYzw56ccvxz7cq6oSTphKqEDPvVdrX7qAPaF"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a",
        "urls": [
          "bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0",
          "dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc",
        "urls": [
          "bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87",
          "dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05",
        "urls": [
          "bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939",
          "dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenWrite.sol": {
        "keccak256": "0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8",
        "urls": [
          "bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a",
          "dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IForwarderFactory.sol",
    "id": 6730,
    "exportedSymbols": {
      "IForwarderFactory": [
        6729
      ],
      "IMultiToken": [
        7467
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:180:19",
    "nodes": [
      {
        "id": 6718,
        "nodeType": "PragmaDirective",
        "src": "39:23:19",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 6720,
        "nodeType": "ImportDirective",
        "src": "64:48:19",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IMultiToken.sol",
        "file": "./IMultiToken.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6730,
        "sourceUnit": 7468,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6719,
              "name": "IMultiToken",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7467,
              "src": "73:11:19",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6729,
        "nodeType": "ContractDefinition",
        "src": "114:104:19",
        "nodes": [
          {
            "id": 6728,
            "nodeType": "FunctionDefinition",
            "src": "148:68:19",
            "nodes": [],
            "functionSelector": "600eb4ba",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getDeployDetails",
            "nameLocation": "157:16:19",
            "parameters": {
              "id": 6721,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "173:2:19"
            },
            "returnParameters": {
              "id": 6727,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6724,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6728,
                  "src": "194:11:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IMultiToken_$7467",
                    "typeString": "contract IMultiToken"
                  },
                  "typeName": {
                    "id": 6723,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6722,
                      "name": "IMultiToken",
                      "nameLocations": [
                        "194:11:19"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7467,
                      "src": "194:11:19"
                    },
                    "referencedDeclaration": 7467,
                    "src": "194:11:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IMultiToken_$7467",
                      "typeString": "contract IMultiToken"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6726,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6728,
                  "src": "207:7:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6725,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "207:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "193:22:19"
            },
            "scope": 6729,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IForwarderFactory",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          6729
        ],
        "name": "IForwarderFactory",
        "nameLocation": "124:17:19",
        "scope": 6730,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 19
} as const;
