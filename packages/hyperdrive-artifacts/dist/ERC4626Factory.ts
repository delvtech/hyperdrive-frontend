{
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "contract ERC20",
          "name": "asset",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "contract ERC4626",
          "name": "vault",
          "type": "address"
        }
      ],
      "name": "CreateERC4626",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "contract ERC20",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "computeERC4626Address",
      "outputs": [
        {
          "internalType": "contract ERC4626",
          "name": "vault",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract ERC20",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "createERC4626",
      "outputs": [
        {
          "internalType": "contract ERC4626",
          "name": "vault",
          "type": "address"
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
    "computeERC4626Address(address)": "80cfde3c",
    "createERC4626(address)": "abeccaa4"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"contract ERC20\",\"name\":\"asset\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"contract ERC4626\",\"name\":\"vault\",\"type\":\"address\"}],\"name\":\"CreateERC4626\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"contract ERC20\",\"name\":\"asset\",\"type\":\"address\"}],\"name\":\"computeERC4626Address\",\"outputs\":[{\"internalType\":\"contract ERC4626\",\"name\":\"vault\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract ERC20\",\"name\":\"asset\",\"type\":\"address\"}],\"name\":\"createERC4626\",\"outputs\":[{\"internalType\":\"contract ERC4626\",\"name\":\"vault\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"zefram.eth\",\"details\":\"Uses CREATE2 deterministic deployment, so there can only be a single vault for each asset.\",\"events\":{\"CreateERC4626(address,address)\":{\"params\":{\"asset\":\"The base asset used by the vault\",\"vault\":\"The vault that was created\"}}},\"kind\":\"dev\",\"methods\":{\"computeERC4626Address(address)\":{\"params\":{\"asset\":\"The base asset used by the vault\"},\"returns\":{\"vault\":\"The vault corresponding to the asset\"}},\"createERC4626(address)\":{\"details\":\"Uses CREATE2 deterministic deployment, so there can only be a single vault for each asset. Will revert if a vault has already been deployed for the asset.\",\"params\":{\"asset\":\"The base asset used by the vault\"},\"returns\":{\"vault\":\"The vault that was created\"}}},\"title\":\"ERC4626Factory\",\"version\":1},\"userdoc\":{\"events\":{\"CreateERC4626(address,address)\":{\"notice\":\"Emitted when a new ERC4626 vault has been created\"}},\"kind\":\"user\",\"methods\":{\"computeERC4626Address(address)\":{\"notice\":\"Computes the address of the ERC4626 vault corresponding to an asset. Returns a valid result regardless of whether the vault has already been deployed.\"},\"createERC4626(address)\":{\"notice\":\"Creates an ERC4626 vault for an asset\"}},\"notice\":\"Abstract base contract for deploying ERC4626 wrappers\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"lib/yield-daddy/src/base/ERC4626Factory.sol\":\"ERC4626Factory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"lib/solmate/src/mixins/ERC4626.sol\":{\"keccak256\":\"0xa404f6f45bd53f24a90cc5ffe95e16b52e3f2dfd88f0d7a1edcb35f815919a7b\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://9f01e32d713e05cc58c1563e9938a1c5e096b1da9f52c7ea8424f2317b94adc1\",\"dweb:/ipfs/QmVt5SsbA3kezM5pyovupN7iZLy6QVqY5qQRZKLFqxKJUs\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/Bytes32AddressLib.sol\":{\"keccak256\":\"0xe709c9f2c6fb8bfe1158fa31967c0a2109844c52079fe4e327baec82fb87acb6\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://9633ab7c471e653dfb37c78b6475db47924c9ee731118545b5bc28aad97f2434\",\"dweb:/ipfs/Qmbt9gLb3hrs21nQxwSiG1ciE56Y73LLt1iPDfnmkcz27E\"]},\"lib/solmate/src/utils/FixedPointMathLib.sol\":{\"keccak256\":\"0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9\",\"dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]},\"lib/yield-daddy/src/base/ERC4626Factory.sol\":{\"keccak256\":\"0x84317f4b0f013d7406bf4ed58ad60e01d0f317faa8793404c2b825900f7ffe06\",\"license\":\"AGPL-3.0\",\"urls\":[\"bzz-raw://5dc99858968ceb4da6ff7a3c0a7c4e1fccf614763a8fc9f04b4d5b3de372bb16\",\"dweb:/ipfs/Qmd8czni6sRePUnjhof36VgX2eZFDFTC58Y7wYk73KzSHC\"]}},\"version\":1}",
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
              "internalType": "contract ERC20",
              "name": "asset",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "contract ERC4626",
              "name": "vault",
              "type": "address",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CreateERC4626",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "contract ERC20",
              "name": "asset",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "computeERC4626Address",
          "outputs": [
            {
              "internalType": "contract ERC4626",
              "name": "vault",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "contract ERC20",
              "name": "asset",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createERC4626",
          "outputs": [
            {
              "internalType": "contract ERC4626",
              "name": "vault",
              "type": "address"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "computeERC4626Address(address)": {
            "params": {
              "asset": "The base asset used by the vault"
            },
            "returns": {
              "vault": "The vault corresponding to the asset"
            }
          },
          "createERC4626(address)": {
            "details": "Uses CREATE2 deterministic deployment, so there can only be a single vault for each asset. Will revert if a vault has already been deployed for the asset.",
            "params": {
              "asset": "The base asset used by the vault"
            },
            "returns": {
              "vault": "The vault that was created"
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "computeERC4626Address(address)": {
            "notice": "Computes the address of the ERC4626 vault corresponding to an asset. Returns a valid result regardless of whether the vault has already been deployed."
          },
          "createERC4626(address)": {
            "notice": "Creates an ERC4626 vault for an asset"
          }
        },
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
        "lib/yield-daddy/src/base/ERC4626Factory.sol": "ERC4626Factory"
      },
      "libraries": {}
    },
    "sources": {
      "lib/solmate/src/mixins/ERC4626.sol": {
        "keccak256": "0xa404f6f45bd53f24a90cc5ffe95e16b52e3f2dfd88f0d7a1edcb35f815919a7b",
        "urls": [
          "bzz-raw://9f01e32d713e05cc58c1563e9938a1c5e096b1da9f52c7ea8424f2317b94adc1",
          "dweb:/ipfs/QmVt5SsbA3kezM5pyovupN7iZLy6QVqY5qQRZKLFqxKJUs"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/tokens/ERC20.sol": {
        "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        "urls": [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/Bytes32AddressLib.sol": {
        "keccak256": "0xe709c9f2c6fb8bfe1158fa31967c0a2109844c52079fe4e327baec82fb87acb6",
        "urls": [
          "bzz-raw://9633ab7c471e653dfb37c78b6475db47924c9ee731118545b5bc28aad97f2434",
          "dweb:/ipfs/Qmbt9gLb3hrs21nQxwSiG1ciE56Y73LLt1iPDfnmkcz27E"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/FixedPointMathLib.sol": {
        "keccak256": "0x1b62af9baf5b8e991ed7531bc87f45550ba9d61e8dbff5caf237ccaf3a3fd843",
        "urls": [
          "bzz-raw://b7b38b977c5305b18ceefbeed4c9ceaaaefa419b520de62de6604ea661f8c0a9",
          "dweb:/ipfs/QmecMRzgfMyDVa2pvBqMMDLYBappaj7Aa3qcMoQYEQrhWi"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/SafeTransferLib.sol": {
        "keccak256": "0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a",
        "urls": [
          "bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4",
          "dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/yield-daddy/src/base/ERC4626Factory.sol": {
        "keccak256": "0x84317f4b0f013d7406bf4ed58ad60e01d0f317faa8793404c2b825900f7ffe06",
        "urls": [
          "bzz-raw://5dc99858968ceb4da6ff7a3c0a7c4e1fccf614763a8fc9f04b4d5b3de372bb16",
          "dweb:/ipfs/Qmd8czni6sRePUnjhof36VgX2eZFDFTC58Y7wYk73KzSHC"
        ],
        "license": "AGPL-3.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "lib/yield-daddy/src/base/ERC4626Factory.sol",
    "id": 64675,
    "exportedSymbols": {
      "Bytes32AddressLib": [
        63289
      ],
      "ERC20": [
        63250
      ],
      "ERC4626": [
        62862
      ],
      "ERC4626Factory": [
        64674
      ]
    },
    "nodeType": "SourceUnit",
    "src": "37:3124:103",
    "nodes": [
      {
        "id": 64604,
        "nodeType": "PragmaDirective",
        "src": "37:24:103",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".13"
        ]
      },
      {
        "id": 64606,
        "nodeType": "ImportDirective",
        "src": "63:47:103",
        "nodes": [],
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "file": "solmate/tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 64675,
        "sourceUnit": 63251,
        "symbolAliases": [
          {
            "foreign": {
              "id": 64605,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63250,
              "src": "71:5:103",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 64608,
        "nodeType": "ImportDirective",
        "src": "111:51:103",
        "nodes": [],
        "absolutePath": "lib/solmate/src/mixins/ERC4626.sol",
        "file": "solmate/mixins/ERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 64675,
        "sourceUnit": 62863,
        "symbolAliases": [
          {
            "foreign": {
              "id": 64607,
              "name": "ERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 62862,
              "src": "119:7:103",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 64610,
        "nodeType": "ImportDirective",
        "src": "163:70:103",
        "nodes": [],
        "absolutePath": "lib/solmate/src/utils/Bytes32AddressLib.sol",
        "file": "solmate/utils/Bytes32AddressLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 64675,
        "sourceUnit": 63290,
        "symbolAliases": [
          {
            "foreign": {
              "id": 64609,
              "name": "Bytes32AddressLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63289,
              "src": "171:17:103",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 64674,
        "nodeType": "ContractDefinition",
        "src": "454:2706:103",
        "nodes": [
          {
            "id": 64614,
            "nodeType": "UsingForDirective",
            "src": "676:36:103",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 64612,
              "name": "Bytes32AddressLib",
              "nameLocations": [
                "682:17:103"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 63289,
              "src": "682:17:103"
            },
            "typeName": {
              "id": 64613,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "704:7:103",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            }
          },
          {
            "id": 64623,
            "nodeType": "EventDefinition",
            "src": "1062:56:103",
            "nodes": [],
            "anonymous": false,
            "documentation": {
              "id": 64615,
              "nodeType": "StructuredDocumentation",
              "src": "894:163:103",
              "text": "@notice Emitted when a new ERC4626 vault has been created\n @param asset The base asset used by the vault\n @param vault The vault that was created"
            },
            "eventSelector": "cbd4e5d1362721c7fd10daaabb1a046344447d4798be55684b8a6b4fc1765d72",
            "name": "CreateERC4626",
            "nameLocation": "1068:13:103",
            "parameters": {
              "id": 64622,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64618,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "1096:5:103",
                  "nodeType": "VariableDeclaration",
                  "scope": 64623,
                  "src": "1082:19:103",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$63250",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "id": 64617,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 64616,
                      "name": "ERC20",
                      "nameLocations": [
                        "1082:5:103"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63250,
                      "src": "1082:5:103"
                    },
                    "referencedDeclaration": 63250,
                    "src": "1082:5:103",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$63250",
                      "typeString": "contract ERC20"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 64621,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "1111:5:103",
                  "nodeType": "VariableDeclaration",
                  "scope": 64623,
                  "src": "1103:13:103",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC4626_$62862",
                    "typeString": "contract ERC4626"
                  },
                  "typeName": {
                    "id": 64620,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 64619,
                      "name": "ERC4626",
                      "nameLocations": [
                        "1103:7:103"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62862,
                      "src": "1103:7:103"
                    },
                    "referencedDeclaration": 62862,
                    "src": "1103:7:103",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC4626_$62862",
                      "typeString": "contract ERC4626"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1081:36:103"
            }
          },
          {
            "id": 64633,
            "nodeType": "FunctionDefinition",
            "src": "1645:77:103",
            "nodes": [],
            "documentation": {
              "id": 64624,
              "nodeType": "StructuredDocumentation",
              "src": "1312:328:103",
              "text": "@notice Creates an ERC4626 vault for an asset\n @dev Uses CREATE2 deterministic deployment, so there can only be a single\n vault for each asset. Will revert if a vault has already been deployed for the asset.\n @param asset The base asset used by the vault\n @return vault The vault that was created"
            },
            "functionSelector": "abeccaa4",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "createERC4626",
            "nameLocation": "1654:13:103",
            "parameters": {
              "id": 64628,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64627,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "1674:5:103",
                  "nodeType": "VariableDeclaration",
                  "scope": 64633,
                  "src": "1668:11:103",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$63250",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "id": 64626,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 64625,
                      "name": "ERC20",
                      "nameLocations": [
                        "1668:5:103"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63250,
                      "src": "1668:5:103"
                    },
                    "referencedDeclaration": 63250,
                    "src": "1668:5:103",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$63250",
                      "typeString": "contract ERC20"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1667:13:103"
            },
            "returnParameters": {
              "id": 64632,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64631,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "1715:5:103",
                  "nodeType": "VariableDeclaration",
                  "scope": 64633,
                  "src": "1707:13:103",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC4626_$62862",
                    "typeString": "contract ERC4626"
                  },
                  "typeName": {
                    "id": 64630,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 64629,
                      "name": "ERC4626",
                      "nameLocations": [
                        "1707:7:103"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62862,
                      "src": "1707:7:103"
                    },
                    "referencedDeclaration": 62862,
                    "src": "1707:7:103",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC4626_$62862",
                      "typeString": "contract ERC4626"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1706:15:103"
            },
            "scope": 64674,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 64643,
            "nodeType": "FunctionDefinition",
            "src": "2016:90:103",
            "nodes": [],
            "documentation": {
              "id": 64634,
              "nodeType": "StructuredDocumentation",
              "src": "1728:283:103",
              "text": "@notice Computes the address of the ERC4626 vault corresponding to an asset. Returns\n a valid result regardless of whether the vault has already been deployed.\n @param asset The base asset used by the vault\n @return vault The vault corresponding to the asset"
            },
            "functionSelector": "80cfde3c",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "computeERC4626Address",
            "nameLocation": "2025:21:103",
            "parameters": {
              "id": 64638,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64637,
                  "mutability": "mutable",
                  "name": "asset",
                  "nameLocation": "2053:5:103",
                  "nodeType": "VariableDeclaration",
                  "scope": 64643,
                  "src": "2047:11:103",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$63250",
                    "typeString": "contract ERC20"
                  },
                  "typeName": {
                    "id": 64636,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 64635,
                      "name": "ERC20",
                      "nameLocations": [
                        "2047:5:103"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 63250,
                      "src": "2047:5:103"
                    },
                    "referencedDeclaration": 63250,
                    "src": "2047:5:103",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC20_$63250",
                      "typeString": "contract ERC20"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2046:13:103"
            },
            "returnParameters": {
              "id": 64642,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64641,
                  "mutability": "mutable",
                  "name": "vault",
                  "nameLocation": "2099:5:103",
                  "nodeType": "VariableDeclaration",
                  "scope": 64643,
                  "src": "2091:13:103",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC4626_$62862",
                    "typeString": "contract ERC4626"
                  },
                  "typeName": {
                    "id": 64640,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 64639,
                      "name": "ERC4626",
                      "nameLocations": [
                        "2091:7:103"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 62862,
                      "src": "2091:7:103"
                    },
                    "referencedDeclaration": 62862,
                    "src": "2091:7:103",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_ERC4626_$62862",
                      "typeString": "contract ERC4626"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2090:15:103"
            },
            "scope": 64674,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "external"
          },
          {
            "id": 64673,
            "nodeType": "FunctionDefinition",
            "src": "2784:374:103",
            "nodes": [],
            "body": {
              "id": 64672,
              "nodeType": "Block",
              "src": "2878:280:103",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "hexValue": "30784646",
                                    "id": 64656,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2929:4:103",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_rational_255_by_1",
                                      "typeString": "int_const 255"
                                    },
                                    "value": "0xFF"
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_255_by_1",
                                      "typeString": "int_const 255"
                                    }
                                  ],
                                  "id": 64655,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2922:6:103",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes1_$",
                                    "typeString": "type(bytes1)"
                                  },
                                  "typeName": {
                                    "id": 64654,
                                    "name": "bytes1",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2922:6:103",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 64657,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2922:12:103",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 64660,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "2944:4:103",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_ERC4626Factory_$64674",
                                      "typeString": "contract ERC4626Factory"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ERC4626Factory_$64674",
                                      "typeString": "contract ERC4626Factory"
                                    }
                                  ],
                                  "id": 64659,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2936:7:103",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 64658,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2936:7:103",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 64661,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2936:13:103",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "hexValue": "30",
                                    "id": 64664,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "kind": "number",
                                    "lValueRequested": false,
                                    "nodeType": "Literal",
                                    "src": "2959:1:103",
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
                                  "id": 64663,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2951:7:103",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_bytes32_$",
                                    "typeString": "type(bytes32)"
                                  },
                                  "typeName": {
                                    "id": 64662,
                                    "name": "bytes32",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2951:7:103",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 64665,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2951:10:103",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "id": 64666,
                                "name": "bytecodeHash",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 64646,
                                "src": "2963:12:103",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes1",
                                  "typeString": "bytes1"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "id": 64652,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "2905:3:103",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 64653,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberLocation": "2909:12:103",
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "src": "2905:16:103",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 64667,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2905:71:103",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 64651,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "2895:9:103",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 64668,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2895:82:103",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "id": 64669,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3089:15:103",
                      "memberName": "fromLast20Bytes",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 63272,
                      "src": "2895:209:103",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_bytes32_$returns$_t_address_$attached_to$_t_bytes32_$",
                        "typeString": "function (bytes32) pure returns (address)"
                      }
                    },
                    "id": 64670,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2895:211:103",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 64650,
                  "id": 64671,
                  "nodeType": "Return",
                  "src": "2888:218:103"
                }
              ]
            },
            "documentation": {
              "id": 64644,
              "nodeType": "StructuredDocumentation",
              "src": "2300:479:103",
              "text": "@notice Computes the address of a contract deployed by this factory using CREATE2, given\n the bytecode hash of the contract. Can also be used to predict addresses of contracts yet to\n be deployed.\n @dev Always uses bytes32(0) as the salt\n @param bytecodeHash The keccak256 hash of the creation code of the contract being deployed concatenated\n with the ABI-encoded constructor arguments.\n @return The address of the deployed contract"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_computeCreate2Address",
            "nameLocation": "2793:22:103",
            "parameters": {
              "id": 64647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64646,
                  "mutability": "mutable",
                  "name": "bytecodeHash",
                  "nameLocation": "2824:12:103",
                  "nodeType": "VariableDeclaration",
                  "scope": 64673,
                  "src": "2816:20:103",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 64645,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2816:7:103",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2815:22:103"
            },
            "returnParameters": {
              "id": 64650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 64649,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 64673,
                  "src": "2869:7:103",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 64648,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2869:7:103",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2868:9:103"
            },
            "scope": 64674,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [],
        "canonicalName": "ERC4626Factory",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 64611,
          "nodeType": "StructuredDocumentation",
          "src": "235:219:103",
          "text": "@title ERC4626Factory\n @author zefram.eth\n @notice Abstract base contract for deploying ERC4626 wrappers\n @dev Uses CREATE2 deterministic deployment, so there can only be a single\n vault for each asset."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          64674
        ],
        "name": "ERC4626Factory",
        "nameLocation": "472:14:103",
        "scope": 64675,
        "usedErrors": []
      }
    ],
    "license": "AGPL-3.0"
  },
  "id": 103
}