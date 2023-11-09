export const IERC165 = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
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
    "supportsInterface(bytes4)": "01ffc9a7"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC165 standard, as defined in the https://eips.ethereum.org/EIPS/eip-165[EIP]. Implementers can declare support of contract interfaces, which can then be queried by others ({ERC165Checker}). For an implementation, see {ERC165}.\",\"kind\":\"dev\",\"methods\":{\"supportsInterface(bytes4)\":{\"details\":\"Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":\"IERC165\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]}},\"version\":1}",
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
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "supportsInterface(bytes4)": {
            "details": "Returns true if this contract implements the interface defined by `interfaceId`. See the corresponding https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section] to learn more about how these ids are created. This function call must use less than 30 000 gas."
          }
        },
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
        "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": "IERC165"
      },
      "libraries": {}
    },
    "sources": {
      "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol": {
        "keccak256": "0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1",
        "urls": [
          "bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f",
          "dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol",
    "id": 60987,
    "exportedSymbols": {
      "IERC165": [
        60986
      ]
    },
    "nodeType": "SourceUnit",
    "src": "100:753:93",
    "nodes": [
      {
        "id": 60976,
        "nodeType": "PragmaDirective",
        "src": "100:23:93",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ]
      },
      {
        "id": 60986,
        "nodeType": "ContractDefinition",
        "src": "405:447:93",
        "nodes": [
          {
            "id": 60985,
            "nodeType": "FunctionDefinition",
            "src": "774:76:93",
            "nodes": [],
            "documentation": {
              "id": 60978,
              "nodeType": "StructuredDocumentation",
              "src": "429:340:93",
              "text": " @dev Returns true if this contract implements the interface defined by\n `interfaceId`. See the corresponding\n https://eips.ethereum.org/EIPS/eip-165#how-interfaces-are-identified[EIP section]\n to learn more about how these ids are created.\n This function call must use less than 30 000 gas."
            },
            "functionSelector": "01ffc9a7",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "783:17:93",
            "parameters": {
              "id": 60981,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60980,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "808:11:93",
                  "nodeType": "VariableDeclaration",
                  "scope": 60985,
                  "src": "801:18:93",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 60979,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "801:6:93",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "800:20:93"
            },
            "returnParameters": {
              "id": 60984,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 60983,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 60985,
                  "src": "844:4:93",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 60982,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "844:4:93",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "843:6:93"
            },
            "scope": 60986,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IERC165",
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": {
          "id": 60977,
          "nodeType": "StructuredDocumentation",
          "src": "125:279:93",
          "text": " @dev Interface of the ERC165 standard, as defined in the\n https://eips.ethereum.org/EIPS/eip-165[EIP].\n Implementers can declare support of contract interfaces, which can then be\n queried by others ({ERC165Checker}).\n For an implementation, see {ERC165}."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          60986
        ],
        "name": "IERC165",
        "nameLocation": "415:7:93",
        "scope": 60987,
        "usedErrors": []
      }
    ],
    "license": "MIT"
  },
  "id": 93
} as const;
