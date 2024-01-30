export const IERC20ForwarderFactory = 
{
  "abi": [
    {
      "inputs": [],
      "name": "InvalidForwarderAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ERC20LINK_HASH",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IMultiToken",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "create",
      "outputs": [
        {
          "internalType": "contract IERC20Forwarder",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
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
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract IMultiToken",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getForwarder",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
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
    "ERC20LINK_HASH()": "d13053bb",
    "create(address,uint256)": "0ecaea73",
    "getDeployDetails()": "600eb4ba",
    "getForwarder(address,uint256)": "0710fd58"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidForwarderAddress\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ERC20LINK_HASH\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"create\",\"outputs\":[{\"internalType\":\"contract IERC20Forwarder\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getDeployDetails\",\"outputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IMultiToken\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"getForwarder\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"errors\":{\"InvalidForwarderAddress()\":[{\"notice\":\"Errors ///\"}]},\"kind\":\"user\",\"methods\":{\"create(address,uint256)\":{\"notice\":\"Functions ///\"}},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IERC20ForwarderFactory.sol\":\"IERC20ForwarderFactory\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IERC20Forwarder.sol\":{\"keccak256\":\"0x4d392c32d11b103cdb3e12261fdd78f24b145dacd32264fcefbfcf20cb24458d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b4e89e8782eaa4955a823723ed2b783c791f7045b02714282850ce23c9e488db\",\"dweb:/ipfs/QmVG8PZs2tz3JDfFs6qxCbUCB8umuXuGqQHtPb3ZLbVyMS\"]},\"contracts/src/interfaces/IERC20ForwarderFactory.sol\":{\"keccak256\":\"0x693a41720ae052ada1f3ad23a07b1e32b8d65d7c672ab9891552d88569765a7a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://037cf6e35352e54f550ab4e782ae728fc20b1286c5a779d89fd2de764ac06d30\",\"dweb:/ipfs/QmNfEFohT398Y8ZQqoQxqewk6swocZWzBrx2Z1wB9tbjaL\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]}},\"version\":1}",
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
          "name": "InvalidForwarderAddress"
        },
        {
          "inputs": [],
          "stateMutability": "pure",
          "type": "function",
          "name": "ERC20LINK_HASH",
          "outputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "contract IMultiToken",
              "name": "_token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "create",
          "outputs": [
            {
              "internalType": "contract IERC20Forwarder",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
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
        },
        {
          "inputs": [
            {
              "internalType": "contract IMultiToken",
              "name": "_token",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getForwarder",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
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
        "methods": {
          "create(address,uint256)": {
            "notice": "Functions ///"
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
        "contracts/src/interfaces/IERC20ForwarderFactory.sol": "IERC20ForwarderFactory"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3",
        "urls": [
          "bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398",
          "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20Forwarder.sol": {
        "keccak256": "0x4d392c32d11b103cdb3e12261fdd78f24b145dacd32264fcefbfcf20cb24458d",
        "urls": [
          "bzz-raw://b4e89e8782eaa4955a823723ed2b783c791f7045b02714282850ce23c9e488db",
          "dweb:/ipfs/QmVG8PZs2tz3JDfFs6qxCbUCB8umuXuGqQHtPb3ZLbVyMS"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20ForwarderFactory.sol": {
        "keccak256": "0x693a41720ae052ada1f3ad23a07b1e32b8d65d7c672ab9891552d88569765a7a",
        "urls": [
          "bzz-raw://037cf6e35352e54f550ab4e782ae728fc20b1286c5a779d89fd2de764ac06d30",
          "dweb:/ipfs/QmNfEFohT398Y8ZQqoQxqewk6swocZWzBrx2Z1wB9tbjaL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f",
        "urls": [
          "bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7",
          "dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a",
        "urls": [
          "bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3",
          "dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenEvents.sol": {
        "keccak256": "0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002",
        "urls": [
          "bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3",
          "dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191",
        "urls": [
          "bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd",
          "dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868",
        "urls": [
          "bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb",
          "dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IERC20ForwarderFactory.sol",
    "id": 6848,
    "exportedSymbols": {
      "IERC20Forwarder": [
        6802
      ],
      "IERC20ForwarderFactory": [
        6847
      ],
      "IMultiToken": [
        8188
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:682:39",
    "nodes": [
      {
        "id": 6804,
        "nodeType": "PragmaDirective",
        "src": "39:23:39",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 6806,
        "nodeType": "ImportDirective",
        "src": "64:56:39",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20Forwarder.sol",
        "file": "./IERC20Forwarder.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6848,
        "sourceUnit": 6803,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6805,
              "name": "IERC20Forwarder",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6802,
              "src": "73:15:39",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6808,
        "nodeType": "ImportDirective",
        "src": "121:48:39",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IMultiToken.sol",
        "file": "./IMultiToken.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6848,
        "sourceUnit": 8189,
        "symbolAliases": [
          {
            "foreign": {
              "id": 6807,
              "name": "IMultiToken",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8188,
              "src": "130:11:39",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6847,
        "nodeType": "ContractDefinition",
        "src": "171:549:39",
        "nodes": [
          {
            "id": 6811,
            "nodeType": "ErrorDefinition",
            "src": "230:32:39",
            "nodes": [],
            "documentation": {
              "id": 6809,
              "nodeType": "StructuredDocumentation",
              "src": "210:15:39",
              "text": "Errors ///"
            },
            "errorSelector": "381dd540",
            "name": "InvalidForwarderAddress",
            "nameLocation": "236:23:39",
            "parameters": {
              "id": 6810,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "259:2:39"
            }
          },
          {
            "id": 6823,
            "nodeType": "FunctionDefinition",
            "src": "291:111:39",
            "nodes": [],
            "documentation": {
              "id": 6812,
              "nodeType": "StructuredDocumentation",
              "src": "268:18:39",
              "text": "Functions ///"
            },
            "functionSelector": "0ecaea73",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "create",
            "nameLocation": "300:6:39",
            "parameters": {
              "id": 6818,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6815,
                  "mutability": "mutable",
                  "name": "_token",
                  "nameLocation": "328:6:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 6823,
                  "src": "316:18:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IMultiToken_$8188",
                    "typeString": "contract IMultiToken"
                  },
                  "typeName": {
                    "id": 6814,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6813,
                      "name": "IMultiToken",
                      "nameLocations": [
                        "316:11:39"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 8188,
                      "src": "316:11:39"
                    },
                    "referencedDeclaration": 8188,
                    "src": "316:11:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IMultiToken_$8188",
                      "typeString": "contract IMultiToken"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6817,
                  "mutability": "mutable",
                  "name": "_tokenId",
                  "nameLocation": "352:8:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 6823,
                  "src": "344:16:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6816,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "344:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "306:60:39"
            },
            "returnParameters": {
              "id": 6822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6821,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6823,
                  "src": "385:15:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC20Forwarder_$6802",
                    "typeString": "contract IERC20Forwarder"
                  },
                  "typeName": {
                    "id": 6820,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6819,
                      "name": "IERC20Forwarder",
                      "nameLocations": [
                        "385:15:39"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 6802,
                      "src": "385:15:39"
                    },
                    "referencedDeclaration": 6802,
                    "src": "385:15:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20Forwarder_$6802",
                      "typeString": "contract IERC20Forwarder"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "384:17:39"
            },
            "scope": 6847,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6831,
            "nodeType": "FunctionDefinition",
            "src": "408:73:39",
            "nodes": [],
            "functionSelector": "600eb4ba",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getDeployDetails",
            "nameLocation": "417:16:39",
            "parameters": {
              "id": 6824,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "433:2:39"
            },
            "returnParameters": {
              "id": 6830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6827,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6831,
                  "src": "459:11:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IMultiToken_$8188",
                    "typeString": "contract IMultiToken"
                  },
                  "typeName": {
                    "id": 6826,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6825,
                      "name": "IMultiToken",
                      "nameLocations": [
                        "459:11:39"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 8188,
                      "src": "459:11:39"
                    },
                    "referencedDeclaration": 8188,
                    "src": "459:11:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IMultiToken_$8188",
                      "typeString": "contract IMultiToken"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6829,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6831,
                  "src": "472:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6828,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "472:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "458:22:39"
            },
            "scope": 6847,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6841,
            "nodeType": "FunctionDefinition",
            "src": "487:114:39",
            "nodes": [],
            "functionSelector": "0710fd58",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getForwarder",
            "nameLocation": "496:12:39",
            "parameters": {
              "id": 6837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6834,
                  "mutability": "mutable",
                  "name": "_token",
                  "nameLocation": "530:6:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 6841,
                  "src": "518:18:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IMultiToken_$8188",
                    "typeString": "contract IMultiToken"
                  },
                  "typeName": {
                    "id": 6833,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6832,
                      "name": "IMultiToken",
                      "nameLocations": [
                        "518:11:39"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 8188,
                      "src": "518:11:39"
                    },
                    "referencedDeclaration": 8188,
                    "src": "518:11:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IMultiToken_$8188",
                      "typeString": "contract IMultiToken"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6836,
                  "mutability": "mutable",
                  "name": "_tokenId",
                  "nameLocation": "554:8:39",
                  "nodeType": "VariableDeclaration",
                  "scope": 6841,
                  "src": "546:16:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6835,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "546:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "508:60:39"
            },
            "returnParameters": {
              "id": 6840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6839,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6841,
                  "src": "592:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 6838,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "592:7:39",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "591:9:39"
            },
            "scope": 6847,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 6846,
            "nodeType": "FunctionDefinition",
            "src": "660:58:39",
            "nodes": [],
            "functionSelector": "d13053bb",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "ERC20LINK_HASH",
            "nameLocation": "669:14:39",
            "parameters": {
              "id": 6842,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "683:2:39"
            },
            "returnParameters": {
              "id": 6845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6844,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6846,
                  "src": "709:7:39",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6843,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "709:7:39",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "708:9:39"
            },
            "scope": 6847,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "IERC20ForwarderFactory",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          6847
        ],
        "name": "IERC20ForwarderFactory",
        "nameLocation": "181:22:39",
        "scope": 6848,
        "usedErrors": [
          6811
        ],
        "usedEvents": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 39
} as const;
