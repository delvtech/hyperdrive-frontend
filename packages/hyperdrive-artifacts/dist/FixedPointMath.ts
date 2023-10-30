{
  "abi": [
    {
      "inputs": [],
      "name": "ONE_18",
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
    "object": "0x608e610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063d33fee44146038575b600080fd5b6046670de0b6b3a764000081565b60405190815260200160405180910390f3fea2646970667358221220193571049ba178831928c528056b5078cde5e8be53f5b8508cad697cf7a8db3e64736f6c63430008130033",
    "sourceMap": "464:14900:32:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;464:14900:32;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063d33fee44146038575b600080fd5b6046670de0b6b3a764000081565b60405190815260200160405180910390f3fea2646970667358221220193571049ba178831928c528056b5078cde5e8be53f5b8508cad697cf7a8db3e64736f6c63430008130033",
    "sourceMap": "464:14900:32:-:0;;;;;;;;;;;;;;;;;;;;;;;;532:37;;565:4;532:37;;;;;168:25:165;;;156:2;141:18;532:37:32;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "ONE_18()": "d33fee44"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ONE_18\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"FixedPointMath\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"A fixed-point math library.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/FixedPointMath.sol\":\"FixedPointMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\",\"lib/openzeppelin-contracts:openzeppelin/=lib/openzeppelin-contracts/contracts/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e\",\"dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467\",\"dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
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
          "name": "ONE_18",
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
        "contracts/src/libraries/FixedPointMath.sol": "FixedPointMath"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x3336dbc3128174594baa25c95f3be485aa61a77a06afbb75e2708987247a5bb5",
        "urls": [
          "bzz-raw://2e189558d4f78633d90ecdb3ff8d775109394a98cb18d19507642cb56c43dc1e",
          "dweb:/ipfs/QmZMVsor78To4nbXwLDBaZKD8m68PT53C9mxvR8iUkM5i5"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3",
        "urls": [
          "bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993",
          "dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveWrite.sol": {
        "keccak256": "0xe2ba8031ab98a81026010af00de9935b79ade6701dc486fd1c02d67f4eb81bf8",
        "urls": [
          "bzz-raw://2e6acf863128f355e6ad26130037797a08321054ac8e202274debf6730162467",
          "dweb:/ipfs/Qmbf6882o3a7mci1j4w2XJtUDfsJvECGF6Yz3PG8q4LQgk"
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
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd",
        "urls": [
          "bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b",
          "dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE"
        ],
        "license": "Apache-2.0"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0",
        "urls": [
          "bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1",
          "dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb",
        "urls": [
          "bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0",
          "dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a",
        "urls": [
          "bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577",
          "dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26",
        "urls": [
          "bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f",
          "dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
    "id": 8487,
    "exportedSymbols": {
      "FixedPointMath": [
        8486
      ],
      "IHyperdrive": [
        7103
      ],
      "ONE": [
        7738
      ]
    },
    "nodeType": "SourceUnit",
    "src": "40:15325:32",
    "nodes": [
      {
        "id": 7733,
        "nodeType": "PragmaDirective",
        "src": "40:23:32",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 7735,
        "nodeType": "ImportDirective",
        "src": "65:60:32",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 8487,
        "sourceUnit": 7104,
        "symbolAliases": [
          {
            "foreign": {
              "id": 7734,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7103,
              "src": "74:11:32",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 7738,
        "nodeType": "VariableDeclaration",
        "src": "127:27:32",
        "nodes": [],
        "constant": true,
        "mutability": "constant",
        "name": "ONE",
        "nameLocation": "144:3:32",
        "scope": 8487,
        "stateVariable": false,
        "storageLocation": "default",
        "typeDescriptions": {
          "typeIdentifier": "t_uint256",
          "typeString": "uint256"
        },
        "typeName": {
          "id": 7736,
          "name": "uint256",
          "nodeType": "ElementaryTypeName",
          "src": "127:7:32",
          "typeDescriptions": {
            "typeIdentifier": "t_uint256",
            "typeString": "uint256"
          }
        },
        "value": {
          "hexValue": "31653138",
          "id": 7737,
          "isConstant": false,
          "isLValue": false,
          "isPure": true,
          "kind": "number",
          "lValueRequested": false,
          "nodeType": "Literal",
          "src": "150:4:32",
          "typeDescriptions": {
            "typeIdentifier": "t_rational_1000000000000000000_by_1",
            "typeString": "int_const 1000000000000000000"
          },
          "value": "1e18"
        },
        "visibility": "internal"
      },
      {
        "id": 8486,
        "nodeType": "ContractDefinition",
        "src": "464:14900:32",
        "nodes": [
          {
            "id": 7742,
            "nodeType": "UsingForDirective",
            "src": "493:33:32",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 7740,
              "name": "FixedPointMath",
              "nameLocations": [
                "499:14:32"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8486,
              "src": "499:14:32"
            },
            "typeName": {
              "id": 7741,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "518:7:32",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 7745,
            "nodeType": "VariableDeclaration",
            "src": "532:37:32",
            "nodes": [],
            "constant": true,
            "functionSelector": "d33fee44",
            "mutability": "constant",
            "name": "ONE_18",
            "nameLocation": "556:6:32",
            "scope": 8486,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7743,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "532:7:32",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31653138",
              "id": 7744,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "565:4:32",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "value": "1e18"
            },
            "visibility": "public"
          },
          {
            "id": 7752,
            "nodeType": "VariableDeclaration",
            "src": "575:52:32",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_UINT256",
            "nameLocation": "601:11:32",
            "scope": 8486,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 7746,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "575:7:32",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "commonType": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...9935"
              },
              "id": 7751,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "commonType": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                },
                "id": 7749,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "hexValue": "32",
                  "id": 7747,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "615:1:32",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_2_by_1",
                    "typeString": "int_const 2"
                  },
                  "value": "2"
                },
                "nodeType": "BinaryOperation",
                "operator": "**",
                "rightExpression": {
                  "hexValue": "323536",
                  "id": 7748,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "620:3:32",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_256_by_1",
                    "typeString": "int_const 256"
                  },
                  "value": "256"
                },
                "src": "615:8:32",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "-",
              "rightExpression": {
                "hexValue": "31",
                "id": 7750,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "626:1:32",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "src": "615:12:32",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...9935"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 7766,
            "nodeType": "FunctionDefinition",
            "src": "984:556:32",
            "nodes": [],
            "body": {
              "id": 7765,
              "nodeType": "Block",
              "src": "1111:429:32",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "1173:361:32",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1386:44:32",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1411:1:32",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1414:1:32",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1404:6:32"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1404:12:32"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1404:12:32"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "1315:11:32"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "1339:1:32"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "1345:1:32"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1352:11:32"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1365:1:32"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "1348:3:32"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "1348:19:32"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "1342:2:32"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1342:26:32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "1335:3:32"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1335:34:32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "1328:6:32"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1328:42:32"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "1311:3:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1311:60:32"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1287:6:32"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1287:98:32"
                        },
                        "nodeType": "YulIf",
                        "src": "1284:146:32"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1492:32:32",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "1505:1:32"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "1508:1:32"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "1501:3:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1501:9:32"
                            },
                            {
                              "name": "denominator",
                              "nodeType": "YulIdentifier",
                              "src": "1512:11:32"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "1497:3:32"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1497:27:32"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "1492:1:32"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 7752,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1352:11:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7759,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1315:11:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7759,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1512:11:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7755,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1345:1:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7755,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1505:1:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7757,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1339:1:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7757,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1365:1:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7757,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1508:1:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7762,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1492:1:32",
                      "valueSize": 1
                    }
                  ],
                  "id": 7764,
                  "nodeType": "InlineAssembly",
                  "src": "1164:370:32"
                }
              ]
            },
            "documentation": {
              "id": 7753,
              "nodeType": "StructuredDocumentation",
              "src": "634:345:32",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @param denominator Fixed point number in 1e18 format.\n @return z The result of x * y / denominator rounded down."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivDown",
            "nameLocation": "993:10:32",
            "parameters": {
              "id": 7760,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7755,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1021:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7766,
                  "src": "1013:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7754,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1013:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7757,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1040:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7766,
                  "src": "1032:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7756,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1032:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7759,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "1059:11:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7766,
                  "src": "1051:19:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7758,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1051:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1003:73:32"
            },
            "returnParameters": {
              "id": 7763,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7762,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "1108:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7766,
                  "src": "1100:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7761,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1100:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1099:11:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 7784,
            "nodeType": "FunctionDefinition",
            "src": "1814:119:32",
            "nodes": [],
            "body": {
              "id": 7783,
              "nodeType": "Block",
              "src": "1885:48:32",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 7777,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7769,
                            "src": "1914:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 7778,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7771,
                            "src": "1917:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "31653138",
                            "id": 7779,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1920:4:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            }
                          ],
                          "id": 7776,
                          "name": "mulDivDown",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7766,
                          "src": "1903:10:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 7780,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1903:22:32",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 7781,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1902:24:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7775,
                  "id": 7782,
                  "nodeType": "Return",
                  "src": "1895:31:32"
                }
              ]
            },
            "documentation": {
              "id": 7767,
              "nodeType": "StructuredDocumentation",
              "src": "1546:263:32",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return Result of a * b rounded down."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDown",
            "nameLocation": "1823:7:32",
            "parameters": {
              "id": 7772,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7769,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1839:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7784,
                  "src": "1831:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7768,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1831:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7771,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1850:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7784,
                  "src": "1842:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7770,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1842:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1830:22:32"
            },
            "returnParameters": {
              "id": 7775,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7774,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7784,
                  "src": "1876:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7773,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1876:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1875:9:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 7802,
            "nodeType": "FunctionDefinition",
            "src": "2207:165:32",
            "nodes": [],
            "body": {
              "id": 7801,
              "nodeType": "Block",
              "src": "2278:94:32",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 7795,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7787,
                            "src": "2307:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "31653138",
                            "id": 7796,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2310:4:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          },
                          {
                            "id": 7797,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7789,
                            "src": "2316:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 7794,
                          "name": "mulDivDown",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7766,
                          "src": "2296:10:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 7798,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2296:22:32",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 7799,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2295:24:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7793,
                  "id": 7800,
                  "nodeType": "Return",
                  "src": "2288:31:32"
                }
              ]
            },
            "documentation": {
              "id": 7785,
              "nodeType": "StructuredDocumentation",
              "src": "1939:263:32",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return Result of a / b rounded down."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divDown",
            "nameLocation": "2216:7:32",
            "parameters": {
              "id": 7790,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7787,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2232:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7802,
                  "src": "2224:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7786,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2224:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7789,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2243:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7802,
                  "src": "2235:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7788,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2235:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2223:22:32"
            },
            "returnParameters": {
              "id": 7793,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7792,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7802,
                  "src": "2269:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7791,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2269:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2268:9:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 7816,
            "nodeType": "FunctionDefinition",
            "src": "2726:748:32",
            "nodes": [],
            "body": {
              "id": 7815,
              "nodeType": "Block",
              "src": "2851:623:32",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "2913:555:32",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3126:44:32",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3151:1:32",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3154:1:32",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "3144:6:32"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3144:12:32"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "3144:12:32"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "3055:11:32"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "3079:1:32"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "3085:1:32"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "3092:11:32"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "3105:1:32"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "3088:3:32"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "3088:19:32"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "3082:2:32"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3082:26:32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "3075:3:32"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3075:34:32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "3068:6:32"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3068:42:32"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "3051:3:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3051:60:32"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "3027:6:32"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3027:98:32"
                        },
                        "nodeType": "YulIf",
                        "src": "3024:146:32"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3339:119:32",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "x",
                                          "nodeType": "YulIdentifier",
                                          "src": "3376:1:32"
                                        },
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "3379:1:32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "3372:3:32"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3372:9:32"
                                    },
                                    {
                                      "name": "denominator",
                                      "nodeType": "YulIdentifier",
                                      "src": "3383:11:32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mod",
                                    "nodeType": "YulIdentifier",
                                    "src": "3368:3:32"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3368:27:32"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3397:1:32",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "3365:2:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3365:34:32"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "3425:1:32"
                                    },
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "3428:1:32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mul",
                                    "nodeType": "YulIdentifier",
                                    "src": "3421:3:32"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3421:9:32"
                                },
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "3432:11:32"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "3417:3:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3417:27:32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3344:3:32"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3344:114:32"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "3339:1:32"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 7752,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3092:11:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7809,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3055:11:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7809,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3383:11:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7809,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3432:11:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7805,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3085:1:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7805,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3376:1:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7805,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3425:1:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7807,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3079:1:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7807,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3105:1:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7807,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3379:1:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7807,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3428:1:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7812,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3339:1:32",
                      "valueSize": 1
                    }
                  ],
                  "id": 7814,
                  "nodeType": "InlineAssembly",
                  "src": "2904:564:32"
                }
              ]
            },
            "documentation": {
              "id": 7803,
              "nodeType": "StructuredDocumentation",
              "src": "2378:343:32",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @param denominator Fixed point number in 1e18 format.\n @return z The result of x * y / denominator rounded up."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivUp",
            "nameLocation": "2735:8:32",
            "parameters": {
              "id": 7810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7805,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "2761:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7816,
                  "src": "2753:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7804,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2753:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7807,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "2780:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7816,
                  "src": "2772:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7806,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2772:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7809,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "2799:11:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7816,
                  "src": "2791:19:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7808,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2791:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2743:73:32"
            },
            "returnParameters": {
              "id": 7813,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7812,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "2848:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7816,
                  "src": "2840:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7811,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2840:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2839:11:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 7834,
            "nodeType": "FunctionDefinition",
            "src": "3750:115:32",
            "nodes": [],
            "body": {
              "id": 7833,
              "nodeType": "Block",
              "src": "3819:46:32",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 7827,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7819,
                            "src": "3846:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 7828,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7821,
                            "src": "3849:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "31653138",
                            "id": 7829,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3852:4:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            }
                          ],
                          "id": 7826,
                          "name": "mulDivUp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7816,
                          "src": "3837:8:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 7830,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3837:20:32",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 7831,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "3836:22:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7825,
                  "id": 7832,
                  "nodeType": "Return",
                  "src": "3829:29:32"
                }
              ]
            },
            "documentation": {
              "id": 7817,
              "nodeType": "StructuredDocumentation",
              "src": "3480:265:32",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return The result of a * b rounded up."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulUp",
            "nameLocation": "3759:5:32",
            "parameters": {
              "id": 7822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7819,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3773:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7834,
                  "src": "3765:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7818,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3765:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7821,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3784:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7834,
                  "src": "3776:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7820,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3776:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3764:22:32"
            },
            "returnParameters": {
              "id": 7825,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7824,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7834,
                  "src": "3810:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7823,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3810:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3809:9:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 7852,
            "nodeType": "FunctionDefinition",
            "src": "4141:115:32",
            "nodes": [],
            "body": {
              "id": 7851,
              "nodeType": "Block",
              "src": "4210:46:32",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 7845,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7837,
                            "src": "4237:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "31653138",
                            "id": 7846,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4240:4:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          },
                          {
                            "id": 7847,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7839,
                            "src": "4246:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 7844,
                          "name": "mulDivUp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7816,
                          "src": "4228:8:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 7848,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4228:20:32",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 7849,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4227:22:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7843,
                  "id": 7850,
                  "nodeType": "Return",
                  "src": "4220:29:32"
                }
              ]
            },
            "documentation": {
              "id": 7835,
              "nodeType": "StructuredDocumentation",
              "src": "3871:265:32",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return The result of a / b rounded up."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divUp",
            "nameLocation": "4150:5:32",
            "parameters": {
              "id": 7840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7837,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4164:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7852,
                  "src": "4156:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7836,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4156:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7839,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4175:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7852,
                  "src": "4167:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7838,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4167:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4155:22:32"
            },
            "returnParameters": {
              "id": 7843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7842,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7852,
                  "src": "4201:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7841,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4201:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4200:9:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 7911,
            "nodeType": "FunctionDefinition",
            "src": "4671:846:32",
            "nodes": [],
            "body": {
              "id": 7910,
              "nodeType": "Block",
              "src": "4738:779:32",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7864,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 7862,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7857,
                      "src": "4795:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 7863,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4800:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4795:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7868,
                  "nodeType": "IfStatement",
                  "src": "4791:50:32",
                  "trueBody": {
                    "id": 7867,
                    "nodeType": "Block",
                    "src": "4803:38:32",
                    "statements": [
                      {
                        "expression": {
                          "id": 7865,
                          "name": "ONE_18",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7745,
                          "src": "4824:6:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 7861,
                        "id": 7866,
                        "nodeType": "Return",
                        "src": "4817:13:32"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 7871,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 7869,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7855,
                      "src": "4894:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 7870,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4899:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4894:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 7875,
                  "nodeType": "IfStatement",
                  "src": "4890:45:32",
                  "trueBody": {
                    "id": 7874,
                    "nodeType": "Block",
                    "src": "4902:33:32",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 7872,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4923:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 7861,
                        "id": 7873,
                        "nodeType": "Return",
                        "src": "4916:8:32"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    7877
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7877,
                      "mutability": "mutable",
                      "name": "y_int256",
                      "nameLocation": "5080:8:32",
                      "nodeType": "VariableDeclaration",
                      "scope": 7910,
                      "src": "5073:15:32",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 7876,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5073:6:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 7882,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 7880,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 7857,
                        "src": "5098:1:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 7879,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5091:6:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 7878,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5091:6:32",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 7881,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5091:9:32",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5073:27:32"
                },
                {
                  "assignments": [
                    7884
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7884,
                      "mutability": "mutable",
                      "name": "lnx",
                      "nameLocation": "5270:3:32",
                      "nodeType": "VariableDeclaration",
                      "scope": 7910,
                      "src": "5263:10:32",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 7883,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5263:6:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 7891,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 7888,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7855,
                            "src": "5287:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 7887,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5280:6:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 7886,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5280:6:32",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 7889,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5280:9:32",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 7885,
                      "name": "_ln",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8350,
                      "src": "5276:3:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (int256) pure returns (int256)"
                      }
                    },
                    "id": 7890,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5276:14:32",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5263:27:32"
                },
                {
                  "assignments": [
                    7893
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 7893,
                      "mutability": "mutable",
                      "name": "ylnx",
                      "nameLocation": "5307:4:32",
                      "nodeType": "VariableDeclaration",
                      "scope": 7910,
                      "src": "5300:11:32",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 7892,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5300:6:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 7894,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5300:11:32"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "5346:50:32",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5360:26:32",
                        "value": {
                          "arguments": [
                            {
                              "name": "y_int256",
                              "nodeType": "YulIdentifier",
                              "src": "5372:8:32"
                            },
                            {
                              "name": "lnx",
                              "nodeType": "YulIdentifier",
                              "src": "5382:3:32"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "5368:3:32"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5368:18:32"
                        },
                        "variableNames": [
                          {
                            "name": "ylnx",
                            "nodeType": "YulIdentifier",
                            "src": "5360:4:32"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 7884,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5382:3:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7877,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5372:8:32",
                      "valueSize": 1
                    },
                    {
                      "declaration": 7893,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5360:4:32",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 7895,
                  "nodeType": "InlineAssembly",
                  "src": "5321:75:32"
                },
                {
                  "expression": {
                    "id": 7901,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 7896,
                      "name": "ylnx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 7893,
                      "src": "5405:4:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "/=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 7899,
                          "name": "ONE_18",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7745,
                          "src": "5420:6:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 7898,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5413:6:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 7897,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5413:6:32",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 7900,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5413:14:32",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "5405:22:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 7902,
                  "nodeType": "ExpressionStatement",
                  "src": "5405:22:32"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 7906,
                            "name": "ylnx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7893,
                            "src": "5504:4:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          ],
                          "id": 7905,
                          "name": "exp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8108,
                          "src": "5500:3:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                            "typeString": "function (int256) pure returns (int256)"
                          }
                        },
                        "id": 7907,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5500:9:32",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 7904,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5492:7:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 7903,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5492:7:32",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 7908,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5492:18:32",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 7861,
                  "id": 7909,
                  "nodeType": "Return",
                  "src": "5485:25:32"
                }
              ]
            },
            "documentation": {
              "id": 7853,
              "nodeType": "StructuredDocumentation",
              "src": "4262:404:32",
              "text": "@dev Exponentiation (x^y) with unsigned 18 decimal fixed point base and exponent.\n @dev Partially inspired by Balancer LogExpMath library (https://github.com/balancer-labs/balancer-v2-monorepo/blob/master/pkg/solidity-utils/contracts/math/LogExpMath.sol)\n @param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @return The result of x^y."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pow",
            "nameLocation": "4680:3:32",
            "parameters": {
              "id": 7858,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7855,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "4692:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7911,
                  "src": "4684:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7854,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4684:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 7857,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "4703:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 7911,
                  "src": "4695:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7856,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4695:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4683:22:32"
            },
            "returnParameters": {
              "id": 7861,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7860,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 7911,
                  "src": "4729:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 7859,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4729:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4728:9:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8108,
            "nodeType": "FunctionDefinition",
            "src": "5773:3347:32",
            "nodes": [],
            "body": {
              "id": 8107,
              "nodeType": "Block",
              "src": "5829:3291:32",
              "nodes": [],
              "statements": [
                {
                  "id": 8106,
                  "nodeType": "UncheckedBlock",
                  "src": "5839:3275:32",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 7922,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 7919,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7914,
                          "src": "5996:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 7921,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "-",
                          "prefix": true,
                          "src": "6001:21:32",
                          "subExpression": {
                            "hexValue": "3432313339363738383534343532373637353531",
                            "id": 7920,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6002:20:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_42139678854452767551_by_1",
                              "typeString": "int_const 42139678854452767551"
                            },
                            "value": "42139678854452767551"
                          },
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_minus_42139678854452767551_by_1",
                            "typeString": "int_const -42139678854452767551"
                          }
                        },
                        "src": "5996:26:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 7925,
                      "nodeType": "IfStatement",
                      "src": "5992:40:32",
                      "trueBody": {
                        "expression": {
                          "hexValue": "30",
                          "id": 7923,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6031:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 7918,
                        "id": 7924,
                        "nodeType": "Return",
                        "src": "6024:8:32"
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 7928,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 7926,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7914,
                          "src": "6226:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "hexValue": "313335333035393939333638383933323331353839",
                          "id": 7927,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6231:21:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_135305999368893231589_by_1",
                            "typeString": "int_const 135305999368893231589"
                          },
                          "value": "135305999368893231589"
                        },
                        "src": "6226:26:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 7934,
                      "nodeType": "IfStatement",
                      "src": "6222:99:32",
                      "trueBody": {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 7929,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "6277:11:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 7931,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6289:30:32",
                            "memberName": "FixedPointMath_InvalidExponent",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7088,
                            "src": "6277:42:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 7932,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6277:44:32",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 7933,
                        "nodeType": "RevertStatement",
                        "src": "6270:51:32"
                      }
                    },
                    {
                      "expression": {
                        "id": 7944,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 7935,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7914,
                          "src": "6578:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 7943,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 7938,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 7936,
                                  "name": "x",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 7914,
                                  "src": "6583:1:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<<",
                                "rightExpression": {
                                  "hexValue": "3738",
                                  "id": 7937,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6588:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_78_by_1",
                                    "typeString": "int_const 78"
                                  },
                                  "value": "78"
                                },
                                "src": "6583:7:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 7939,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "6582:9:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_rational_3814697265625_by_1",
                              "typeString": "int_const 3814697265625"
                            },
                            "id": 7942,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "leftExpression": {
                              "hexValue": "35",
                              "id": 7940,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6594:1:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_5_by_1",
                                "typeString": "int_const 5"
                              },
                              "value": "5"
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "**",
                            "rightExpression": {
                              "hexValue": "3138",
                              "id": 7941,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6599:2:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            },
                            "src": "6594:7:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_3814697265625_by_1",
                              "typeString": "int_const 3814697265625"
                            }
                          },
                          "src": "6582:19:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6578:23:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 7945,
                      "nodeType": "ExpressionStatement",
                      "src": "6578:23:32"
                    },
                    {
                      "assignments": [
                        7947
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 7947,
                          "mutability": "mutable",
                          "name": "k",
                          "nameLocation": "6937:1:32",
                          "nodeType": "VariableDeclaration",
                          "scope": 8106,
                          "src": "6930:8:32",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 7946,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6930:6:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 7961,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 7960,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "components": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 7957,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 7953,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 7950,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 7948,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7914,
                                        "src": "6943:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "<<",
                                      "rightExpression": {
                                        "hexValue": "3936",
                                        "id": 7949,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "6948:2:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_96_by_1",
                                          "typeString": "int_const 96"
                                        },
                                        "value": "96"
                                      },
                                      "src": "6943:7:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 7951,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "6942:9:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "/",
                                "rightExpression": {
                                  "hexValue": "3534393136373737343637373037343733333531313431343731313238",
                                  "id": 7952,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6954:29:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_54916777467707473351141471128_by_1",
                                    "typeString": "int_const 54916777467707473351141471128"
                                  },
                                  "value": "54916777467707473351141471128"
                                },
                                "src": "6942:41:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "commonType": {
                                  "typeIdentifier": "t_rational_39614081257132168796771975168_by_1",
                                  "typeString": "int_const 39614081257132168796771975168"
                                },
                                "id": 7956,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "32",
                                  "id": 7954,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6986:1:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_2_by_1",
                                    "typeString": "int_const 2"
                                  },
                                  "value": "2"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "**",
                                "rightExpression": {
                                  "hexValue": "3935",
                                  "id": 7955,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6991:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_95_by_1",
                                    "typeString": "int_const 95"
                                  },
                                  "value": "95"
                                },
                                "src": "6986:7:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_39614081257132168796771975168_by_1",
                                  "typeString": "int_const 39614081257132168796771975168"
                                }
                              },
                              "src": "6942:51:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 7958,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "6941:53:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">>",
                        "rightExpression": {
                          "hexValue": "3936",
                          "id": 7959,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7014:2:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_96_by_1",
                            "typeString": "int_const 96"
                          },
                          "value": "96"
                        },
                        "src": "6941:75:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "6930:86:32"
                    },
                    {
                      "expression": {
                        "id": 7968,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 7962,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7914,
                          "src": "7030:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 7967,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 7963,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7914,
                            "src": "7034:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 7966,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 7964,
                              "name": "k",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7947,
                              "src": "7038:1:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "hexValue": "3534393136373737343637373037343733333531313431343731313238",
                              "id": 7965,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7042:29:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_54916777467707473351141471128_by_1",
                                "typeString": "int_const 54916777467707473351141471128"
                              },
                              "value": "54916777467707473351141471128"
                            },
                            "src": "7038:33:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "7034:37:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7030:41:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 7969,
                      "nodeType": "ExpressionStatement",
                      "src": "7030:41:32"
                    },
                    {
                      "assignments": [
                        7971
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 7971,
                          "mutability": "mutable",
                          "name": "y",
                          "nameLocation": "7279:1:32",
                          "nodeType": "VariableDeclaration",
                          "scope": 8106,
                          "src": "7272:8:32",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 7970,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7272:6:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 7975,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 7974,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 7972,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7914,
                          "src": "7283:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31333436333836363136353435373936343738393230393530373733333238",
                          "id": 7973,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7287:31:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1346386616545796478920950773328_by_1",
                            "typeString": "int_const 1346386616545796478920950773328"
                          },
                          "value": "1346386616545796478920950773328"
                        },
                        "src": "7283:35:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "7272:46:32"
                    },
                    {
                      "expression": {
                        "id": 7986,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 7976,
                          "name": "y",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7971,
                          "src": "7332:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 7985,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 7982,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 7979,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 7977,
                                        "name": "y",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7971,
                                        "src": "7338:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 7978,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7914,
                                        "src": "7342:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7338:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 7980,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7337:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 7981,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7348:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7337:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 7983,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7336:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3537313535343231323237353532333531303832323234333039373538343432",
                            "id": 7984,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7354:32:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_57155421227552351082224309758442_by_1",
                              "typeString": "int_const 57155421227552351082224309758442"
                            },
                            "value": "57155421227552351082224309758442"
                          },
                          "src": "7336:50:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7332:54:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 7987,
                      "nodeType": "ExpressionStatement",
                      "src": "7332:54:32"
                    },
                    {
                      "assignments": [
                        7989
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 7989,
                          "mutability": "mutable",
                          "name": "p",
                          "nameLocation": "7407:1:32",
                          "nodeType": "VariableDeclaration",
                          "scope": 8106,
                          "src": "7400:8:32",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 7988,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7400:6:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 7995,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 7994,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 7992,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 7990,
                            "name": "y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7971,
                            "src": "7411:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 7991,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7914,
                            "src": "7415:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "7411:5:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "3934323031353439313934353530343932323534333536303432353034383132",
                          "id": 7993,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7419:32:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_94201549194550492254356042504812_by_1",
                            "typeString": "int_const 94201549194550492254356042504812"
                          },
                          "value": "94201549194550492254356042504812"
                        },
                        "src": "7411:40:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "7400:51:32"
                    },
                    {
                      "expression": {
                        "id": 8006,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 7996,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7989,
                          "src": "7465:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8005,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8002,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 7999,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 7997,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7989,
                                        "src": "7471:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 7998,
                                        "name": "y",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7971,
                                        "src": "7475:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7471:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8000,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7470:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8001,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7481:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7470:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8003,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7469:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3238373139303231363434303239373236313533393536393434363830343132323430",
                            "id": 8004,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7487:35:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_28719021644029726153956944680412240_by_1",
                              "typeString": "int_const 2871...(27 digits omitted)...2240"
                            },
                            "value": "28719021644029726153956944680412240"
                          },
                          "src": "7469:53:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7465:57:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8007,
                      "nodeType": "ExpressionStatement",
                      "src": "7465:57:32"
                    },
                    {
                      "expression": {
                        "id": 8017,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8008,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7989,
                          "src": "7536:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8016,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 8011,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 8009,
                              "name": "p",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7989,
                              "src": "7540:1:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 8010,
                              "name": "x",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7914,
                              "src": "7544:1:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "7540:5:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_rational_347437083999162433888837515002539729507623920905942392673140736_by_1",
                                  "typeString": "int_const 3474...(55 digits omitted)...0736"
                                },
                                "id": 8014,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "34333835323732353231343534383437393034363539303736393835363933323736",
                                  "id": 8012,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7549:34:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_4385272521454847904659076985693276_by_1",
                                    "typeString": "int_const 4385...(26 digits omitted)...3276"
                                  },
                                  "value": "4385272521454847904659076985693276"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<<",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8013,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7587:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7549:40:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_347437083999162433888837515002539729507623920905942392673140736_by_1",
                                  "typeString": "int_const 3474...(55 digits omitted)...0736"
                                }
                              }
                            ],
                            "id": 8015,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7548:42:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_347437083999162433888837515002539729507623920905942392673140736_by_1",
                              "typeString": "int_const 3474...(55 digits omitted)...0736"
                            }
                          },
                          "src": "7540:50:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7536:54:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8018,
                      "nodeType": "ExpressionStatement",
                      "src": "7536:54:32"
                    },
                    {
                      "assignments": [
                        8020
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 8020,
                          "mutability": "mutable",
                          "name": "q",
                          "nameLocation": "7709:1:32",
                          "nodeType": "VariableDeclaration",
                          "scope": 8106,
                          "src": "7702:8:32",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 8019,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7702:6:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 8024,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8023,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8021,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7914,
                          "src": "7713:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "32383535393839333934393037323233323633393336343834303539393030",
                          "id": 8022,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7717:31:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2855989394907223263936484059900_by_1",
                            "typeString": "int_const 2855989394907223263936484059900"
                          },
                          "value": "2855989394907223263936484059900"
                        },
                        "src": "7713:35:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "7702:46:32"
                    },
                    {
                      "expression": {
                        "id": 8035,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8025,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8020,
                          "src": "7762:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8034,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8031,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8028,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8026,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8020,
                                        "src": "7768:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8027,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7914,
                                        "src": "7772:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7768:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8029,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7767:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8030,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7778:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7767:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8032,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7766:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3530303230363033363532353335373833303139393631383331383831393435",
                            "id": 8033,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7784:32:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_50020603652535783019961831881945_by_1",
                              "typeString": "int_const 50020603652535783019961831881945"
                            },
                            "value": "50020603652535783019961831881945"
                          },
                          "src": "7766:50:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7762:54:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8036,
                      "nodeType": "ExpressionStatement",
                      "src": "7762:54:32"
                    },
                    {
                      "expression": {
                        "id": 8047,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8037,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8020,
                          "src": "7830:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8046,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8043,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8040,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8038,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8020,
                                        "src": "7836:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8039,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7914,
                                        "src": "7840:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7836:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8041,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7835:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8042,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7846:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7835:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8044,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7834:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "353333383435303333353833343236373033323833363333343333373235333830",
                            "id": 8045,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7852:33:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_533845033583426703283633433725380_by_1",
                              "typeString": "int_const 5338...(25 digits omitted)...5380"
                            },
                            "value": "533845033583426703283633433725380"
                          },
                          "src": "7834:51:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7830:55:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8048,
                      "nodeType": "ExpressionStatement",
                      "src": "7830:55:32"
                    },
                    {
                      "expression": {
                        "id": 8059,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8049,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8020,
                          "src": "7899:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8058,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8055,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8052,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8050,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8020,
                                        "src": "7905:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8051,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7914,
                                        "src": "7909:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7905:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8053,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7904:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8054,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7915:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7904:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8056,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7903:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "33363034383537323536393330363935343237303733363531393138303931343239",
                            "id": 8057,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7921:34:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_3604857256930695427073651918091429_by_1",
                              "typeString": "int_const 3604...(26 digits omitted)...1429"
                            },
                            "value": "3604857256930695427073651918091429"
                          },
                          "src": "7903:52:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7899:56:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8060,
                      "nodeType": "ExpressionStatement",
                      "src": "7899:56:32"
                    },
                    {
                      "expression": {
                        "id": 8071,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8061,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8020,
                          "src": "7969:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8070,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8067,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8064,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8062,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8020,
                                        "src": "7975:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8063,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7914,
                                        "src": "7979:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7975:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8065,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7974:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8066,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7985:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7974:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8068,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7973:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "3134343233363038353637333530343633313830383837333732393632383037353733",
                            "id": 8069,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7991:35:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_14423608567350463180887372962807573_by_1",
                              "typeString": "int_const 1442...(27 digits omitted)...7573"
                            },
                            "value": "14423608567350463180887372962807573"
                          },
                          "src": "7973:53:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7969:57:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8072,
                      "nodeType": "ExpressionStatement",
                      "src": "7969:57:32"
                    },
                    {
                      "expression": {
                        "id": 8083,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8073,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8020,
                          "src": "8040:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8082,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8079,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8076,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8074,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8020,
                                        "src": "8046:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8075,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 7914,
                                        "src": "8050:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "8046:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8077,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "8045:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8078,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "8056:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "8045:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8080,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "8044:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3236343439313838343938333535353838333339393334383033373233393736303233",
                            "id": 8081,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8062:35:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_26449188498355588339934803723976023_by_1",
                              "typeString": "int_const 2644...(27 digits omitted)...6023"
                            },
                            "value": "26449188498355588339934803723976023"
                          },
                          "src": "8044:53:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "8040:57:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8084,
                      "nodeType": "ExpressionStatement",
                      "src": "8040:57:32"
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "8168:318:32",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "8457:15:32",
                            "value": {
                              "arguments": [
                                {
                                  "name": "p",
                                  "nodeType": "YulIdentifier",
                                  "src": "8467:1:32"
                                },
                                {
                                  "name": "q",
                                  "nodeType": "YulIdentifier",
                                  "src": "8470:1:32"
                                }
                              ],
                              "functionName": {
                                "name": "sdiv",
                                "nodeType": "YulIdentifier",
                                "src": "8462:4:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8462:10:32"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "8457:1:32"
                              }
                            ]
                          }
                        ]
                      },
                      "documentation": "@solidity memory-safe-assembly",
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 7989,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "8467:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8020,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "8470:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 7917,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "8457:1:32",
                          "valueSize": 1
                        }
                      ],
                      "id": 8085,
                      "nodeType": "InlineAssembly",
                      "src": "8159:327:32"
                    },
                    {
                      "expression": {
                        "id": 8104,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8086,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7917,
                          "src": "8937:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 8102,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "components": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 8094,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "arguments": [
                                        {
                                          "id": 8091,
                                          "name": "r",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 7917,
                                          "src": "8974:1:32",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_int256",
                                            "typeString": "int256"
                                          }
                                        ],
                                        "id": 8090,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "8966:7:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint256_$",
                                          "typeString": "type(uint256)"
                                        },
                                        "typeName": {
                                          "id": 8089,
                                          "name": "uint256",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "8966:7:32",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 8092,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "8966:10:32",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "*",
                                    "rightExpression": {
                                      "hexValue": "33383232383333303734393633323336343533303432373338323538393032313538303033313535343136363135363637",
                                      "id": 8093,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8999:49:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_3822833074963236453042738258902158003155416615667_by_1",
                                        "typeString": "int_const 3822...(41 digits omitted)...5667"
                                      },
                                      "value": "3822833074963236453042738258902158003155416615667"
                                    },
                                    "src": "8966:82:32",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 8095,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "8965:84:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">>",
                              "rightExpression": {
                                "arguments": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    },
                                    "id": 8100,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "313935",
                                      "id": 8098,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "9081:3:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_195_by_1",
                                        "typeString": "int_const 195"
                                      },
                                      "value": "195"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "id": 8099,
                                      "name": "k",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 7947,
                                      "src": "9087:1:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "src": "9081:7:32",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  ],
                                  "id": 8097,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "9073:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 8096,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "9073:7:32",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 8101,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9073:16:32",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "8965:124:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 8088,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8941:6:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": {
                              "id": 8087,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "8941:6:32",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 8103,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8941:162:32",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "8937:166:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8105,
                      "nodeType": "ExpressionStatement",
                      "src": "8937:166:32"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 7912,
              "nodeType": "StructuredDocumentation",
              "src": "5523:245:32",
              "text": "@dev Computes e^x in 1e18 fixed point.\n @dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SignedWadMath.sol)\n @param x Fixed point number in 1e18 format.\n @return r The result of e^x."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "exp",
            "nameLocation": "5782:3:32",
            "parameters": {
              "id": 7915,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7914,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "5793:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8108,
                  "src": "5786:8:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 7913,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5786:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5785:10:32"
            },
            "returnParameters": {
              "id": 7918,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 7917,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "5826:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8108,
                  "src": "5819:8:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 7916,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5819:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5818:10:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8130,
            "nodeType": "FunctionDefinition",
            "src": "9412:160:32",
            "nodes": [],
            "body": {
              "id": 8129,
              "nodeType": "Block",
              "src": "9465:107:32",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 8118,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 8116,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8111,
                      "src": "9479:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 8117,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9484:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9479:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 8124,
                  "nodeType": "IfStatement",
                  "src": "9475:67:32",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 8119,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7103,
                          "src": "9494:11:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 8121,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9506:34:32",
                        "memberName": "FixedPointMath_NegativeOrZeroInput",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7092,
                        "src": "9494:46:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 8122,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9494:48:32",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 8123,
                    "nodeType": "RevertStatement",
                    "src": "9487:55:32"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 8126,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8111,
                        "src": "9563:1:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 8125,
                      "name": "_ln",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8350,
                      "src": "9559:3:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (int256) pure returns (int256)"
                      }
                    },
                    "id": 8127,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9559:6:32",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 8115,
                  "id": 8128,
                  "nodeType": "Return",
                  "src": "9552:13:32"
                }
              ]
            },
            "documentation": {
              "id": 8109,
              "nodeType": "StructuredDocumentation",
              "src": "9126:281:32",
              "text": "@dev Computes ln(x) in 1e18 fixed point.\n @dev Reverts if x is negative\n @dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SignedWadMath.sol)\n @param x Fixed point number in 1e18 format.\n @return Result of ln(x)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ln",
            "nameLocation": "9421:2:32",
            "parameters": {
              "id": 8112,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8111,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9431:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8130,
                  "src": "9424:8:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8110,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9424:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9423:10:32"
            },
            "returnParameters": {
              "id": 8115,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8114,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8130,
                  "src": "9457:6:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8113,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9457:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9456:8:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8350,
            "nodeType": "FunctionDefinition",
            "src": "9632:3592:32",
            "nodes": [],
            "body": {
              "id": 8349,
              "nodeType": "Block",
              "src": "9687:3537:32",
              "nodes": [],
              "statements": [
                {
                  "id": 8348,
                  "nodeType": "UncheckedBlock",
                  "src": "9697:3521:32",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8139,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8137,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8132,
                          "src": "9725:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 8138,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9730:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9725:6:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 8145,
                      "nodeType": "IfStatement",
                      "src": "9721:60:32",
                      "trueBody": {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 8140,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7103,
                              "src": "9740:11:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7103_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 8142,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9752:27:32",
                            "memberName": "FixedPointMath_InvalidInput",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7090,
                            "src": "9740:39:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 8143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9740:41:32",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 8144,
                        "nodeType": "RevertStatement",
                        "src": "9733:48:32"
                      }
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "10131:489:32",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "10149:54:32",
                            "value": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10158:1:32",
                                  "type": "",
                                  "value": "7"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10164:34:32",
                                      "type": "",
                                      "value": "0xffffffffffffffffffffffffffffffff"
                                    },
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "10200:1:32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nodeType": "YulIdentifier",
                                    "src": "10161:2:32"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10161:41:32"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "10154:3:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10154:49:32"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10149:1:32"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10220:53:32",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10228:1:32"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10235:1:32",
                                      "type": "",
                                      "value": "6"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10241:18:32",
                                          "type": "",
                                          "value": "0xffffffffffffffff"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10265:1:32"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10268:1:32"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10261:3:32"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10261:9:32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10238:2:32"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10238:33:32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10231:3:32"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10231:41:32"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10225:2:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10225:48:32"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10220:1:32"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10290:45:32",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10298:1:32"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10305:1:32",
                                      "type": "",
                                      "value": "5"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10311:10:32",
                                          "type": "",
                                          "value": "0xffffffff"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10327:1:32"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10330:1:32"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10323:3:32"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10323:9:32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10308:2:32"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10308:25:32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10301:3:32"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10301:33:32"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10295:2:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10295:40:32"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10290:1:32"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10352:41:32",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10360:1:32"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10367:1:32",
                                      "type": "",
                                      "value": "4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10373:6:32",
                                          "type": "",
                                          "value": "0xffff"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10385:1:32"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10388:1:32"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10381:3:32"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10381:9:32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10370:2:32"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10370:21:32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10363:3:32"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10363:29:32"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10357:2:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10357:36:32"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10352:1:32"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10410:39:32",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10418:1:32"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10425:1:32",
                                      "type": "",
                                      "value": "3"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10431:4:32",
                                          "type": "",
                                          "value": "0xff"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10441:1:32"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10444:1:32"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10437:3:32"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10437:9:32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10428:2:32"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10428:19:32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10421:3:32"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10421:27:32"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10415:2:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10415:34:32"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10410:1:32"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10466:38:32",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10474:1:32"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10481:1:32",
                                      "type": "",
                                      "value": "2"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10487:3:32",
                                          "type": "",
                                          "value": "0xf"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10496:1:32"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10499:1:32"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10492:3:32"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10492:9:32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10484:2:32"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10484:18:32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10477:3:32"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10477:26:32"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10471:2:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10471:33:32"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10466:1:32"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10521:38:32",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10529:1:32"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10536:1:32",
                                      "type": "",
                                      "value": "1"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10542:3:32",
                                          "type": "",
                                          "value": "0x3"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10551:1:32"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10554:1:32"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10547:3:32"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10547:9:32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10539:2:32"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10539:18:32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10532:3:32"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10532:26:32"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10526:2:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10526:33:32"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10521:1:32"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10576:30:32",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10584:1:32"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10590:3:32",
                                      "type": "",
                                      "value": "0x1"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "r",
                                          "nodeType": "YulIdentifier",
                                          "src": "10599:1:32"
                                        },
                                        {
                                          "name": "x",
                                          "nodeType": "YulIdentifier",
                                          "src": "10602:1:32"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shr",
                                        "nodeType": "YulIdentifier",
                                        "src": "10595:3:32"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10595:9:32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nodeType": "YulIdentifier",
                                    "src": "10587:2:32"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10587:18:32"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10581:2:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10581:25:32"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10576:1:32"
                              }
                            ]
                          }
                        ]
                      },
                      "documentation": "@solidity memory-safe-assembly",
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10149:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10220:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10228:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10265:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10290:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10298:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10327:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10352:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10360:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10385:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10410:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10418:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10441:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10466:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10474:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10496:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10521:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10529:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10551:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10576:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10584:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10599:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8132,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10200:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8132,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10268:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8132,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10330:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8132,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10388:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8132,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10444:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8132,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10499:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8132,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10554:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8132,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10602:1:32",
                          "valueSize": 1
                        }
                      ],
                      "id": 8146,
                      "nodeType": "InlineAssembly",
                      "src": "10122:498:32"
                    },
                    {
                      "assignments": [
                        8148
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 8148,
                          "mutability": "mutable",
                          "name": "k",
                          "nameLocation": "10739:1:32",
                          "nodeType": "VariableDeclaration",
                          "scope": 8348,
                          "src": "10732:8:32",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 8147,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10732:6:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 8152,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8151,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8149,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8135,
                          "src": "10743:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "3936",
                          "id": 8150,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10747:2:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_96_by_1",
                            "typeString": "int_const 96"
                          },
                          "value": "96"
                        },
                        "src": "10743:6:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "10732:17:32"
                    },
                    {
                      "expression": {
                        "id": 8160,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8153,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8132,
                          "src": "10763:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "<<=",
                        "rightHandSide": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              "id": 8158,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "313539",
                                "id": 8156,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10777:3:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_159_by_1",
                                  "typeString": "int_const 159"
                                },
                                "value": "159"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 8157,
                                "name": "k",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8148,
                                "src": "10783:1:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "src": "10777:7:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            ],
                            "id": 8155,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10769:7:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 8154,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "10769:7:32",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 8159,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10769:16:32",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "10763:22:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8161,
                      "nodeType": "ExpressionStatement",
                      "src": "10763:22:32"
                    },
                    {
                      "expression": {
                        "id": 8172,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8162,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8132,
                          "src": "10799:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 8170,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [
                                  {
                                    "id": 8167,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 8132,
                                    "src": "10818:1:32",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  ],
                                  "id": 8166,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "10810:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 8165,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "10810:7:32",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 8168,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "10810:10:32",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": ">>",
                              "rightExpression": {
                                "hexValue": "313539",
                                "id": 8169,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10824:3:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_159_by_1",
                                  "typeString": "int_const 159"
                                },
                                "value": "159"
                              },
                              "src": "10810:17:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 8164,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10803:6:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": {
                              "id": 8163,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "10803:6:32",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 8171,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10803:25:32",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "10799:29:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8173,
                      "nodeType": "ExpressionStatement",
                      "src": "10799:29:32"
                    },
                    {
                      "assignments": [
                        8175
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 8175,
                          "mutability": "mutable",
                          "name": "p",
                          "nameLocation": "10992:1:32",
                          "nodeType": "VariableDeclaration",
                          "scope": 8348,
                          "src": "10985:8:32",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 8174,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10985:6:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 8179,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8178,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8176,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8132,
                          "src": "10996:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "33323733323835343539363338353233383438363332323534303636323936",
                          "id": 8177,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11000:31:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3273285459638523848632254066296_by_1",
                            "typeString": "int_const 3273285459638523848632254066296"
                          },
                          "value": "3273285459638523848632254066296"
                        },
                        "src": "10996:35:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "10985:46:32"
                    },
                    {
                      "expression": {
                        "id": 8190,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8180,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8175,
                          "src": "11045:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8189,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8186,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8183,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8181,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8175,
                                        "src": "11051:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8182,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8132,
                                        "src": "11055:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11051:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8184,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11050:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8185,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11061:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11050:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8187,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11049:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3234383238313537303831383333313633383932363538303839343435353234",
                            "id": 8188,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11067:32:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_24828157081833163892658089445524_by_1",
                              "typeString": "int_const 24828157081833163892658089445524"
                            },
                            "value": "24828157081833163892658089445524"
                          },
                          "src": "11049:50:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11045:54:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8191,
                      "nodeType": "ExpressionStatement",
                      "src": "11045:54:32"
                    },
                    {
                      "expression": {
                        "id": 8202,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8192,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8175,
                          "src": "11113:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8201,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8198,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8195,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8193,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8175,
                                        "src": "11119:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8194,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8132,
                                        "src": "11123:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11119:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8196,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11118:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8197,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11129:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11118:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8199,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11117:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3433343536343835373235373339303337393538373430333735373433333933",
                            "id": 8200,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11135:32:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_43456485725739037958740375743393_by_1",
                              "typeString": "int_const 43456485725739037958740375743393"
                            },
                            "value": "43456485725739037958740375743393"
                          },
                          "src": "11117:50:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11113:54:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8203,
                      "nodeType": "ExpressionStatement",
                      "src": "11113:54:32"
                    },
                    {
                      "expression": {
                        "id": 8214,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8204,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8175,
                          "src": "11181:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8213,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8210,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8207,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8205,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8175,
                                        "src": "11187:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8206,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8132,
                                        "src": "11191:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11187:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8208,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11186:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8209,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11197:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11186:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8211,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11185:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "3131313131353039313039343430393637303532303233383535353236393637",
                            "id": 8212,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11203:32:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_11111509109440967052023855526967_by_1",
                              "typeString": "int_const 11111509109440967052023855526967"
                            },
                            "value": "11111509109440967052023855526967"
                          },
                          "src": "11185:50:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11181:54:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8215,
                      "nodeType": "ExpressionStatement",
                      "src": "11181:54:32"
                    },
                    {
                      "expression": {
                        "id": 8226,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8216,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8175,
                          "src": "11249:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8225,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8222,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8219,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8217,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8175,
                                        "src": "11255:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8218,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8132,
                                        "src": "11259:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11255:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8220,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11254:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8221,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11265:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11254:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8223,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11253:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "3435303233373039363637323534303633373633333336353334353135383537",
                            "id": 8224,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11271:32:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_45023709667254063763336534515857_by_1",
                              "typeString": "int_const 45023709667254063763336534515857"
                            },
                            "value": "45023709667254063763336534515857"
                          },
                          "src": "11253:50:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11249:54:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8227,
                      "nodeType": "ExpressionStatement",
                      "src": "11249:54:32"
                    },
                    {
                      "expression": {
                        "id": 8238,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8228,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8175,
                          "src": "11317:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8237,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8234,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8231,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8229,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8175,
                                        "src": "11323:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8230,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8132,
                                        "src": "11327:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11323:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8232,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11322:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8233,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11333:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11322:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8235,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11321:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "3134373036373733343137333738363038373836373034363336313834353236",
                            "id": 8236,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11339:32:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_14706773417378608786704636184526_by_1",
                              "typeString": "int_const 14706773417378608786704636184526"
                            },
                            "value": "14706773417378608786704636184526"
                          },
                          "src": "11321:50:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11317:54:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8239,
                      "nodeType": "ExpressionStatement",
                      "src": "11317:54:32"
                    },
                    {
                      "expression": {
                        "id": 8249,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8240,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8175,
                          "src": "11385:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8248,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 8243,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 8241,
                              "name": "p",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8175,
                              "src": "11389:1:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 8242,
                              "name": "x",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8132,
                              "src": "11393:1:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11389:5:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_rational_62999401287715976015676079709131874438408901006995465699328_by_1",
                                  "typeString": "int_const 6299...(51 digits omitted)...9328"
                                },
                                "id": 8246,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "373935313634323335363531333530343236323538323439373837343938",
                                  "id": 8244,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11398:30:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_795164235651350426258249787498_by_1",
                                    "typeString": "int_const 795164235651350426258249787498"
                                  },
                                  "value": "795164235651350426258249787498"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<<",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8245,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11432:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11398:36:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_62999401287715976015676079709131874438408901006995465699328_by_1",
                                  "typeString": "int_const 6299...(51 digits omitted)...9328"
                                }
                              }
                            ],
                            "id": 8247,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11397:38:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_62999401287715976015676079709131874438408901006995465699328_by_1",
                              "typeString": "int_const 6299...(51 digits omitted)...9328"
                            }
                          },
                          "src": "11389:46:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11385:50:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8250,
                      "nodeType": "ExpressionStatement",
                      "src": "11385:50:32"
                    },
                    {
                      "assignments": [
                        8252
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 8252,
                          "mutability": "mutable",
                          "name": "q",
                          "nameLocation": "11595:1:32",
                          "nodeType": "VariableDeclaration",
                          "scope": 8348,
                          "src": "11588:8:32",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 8251,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11588:6:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 8256,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8255,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8253,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8132,
                          "src": "11599:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "35353733303335323333343430363733343636333030343531383133393336",
                          "id": 8254,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11603:31:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_5573035233440673466300451813936_by_1",
                            "typeString": "int_const 5573035233440673466300451813936"
                          },
                          "value": "5573035233440673466300451813936"
                        },
                        "src": "11599:35:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "11588:46:32"
                    },
                    {
                      "expression": {
                        "id": 8267,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8257,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8252,
                          "src": "11648:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8266,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8263,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8260,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8258,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8252,
                                        "src": "11654:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8259,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8132,
                                        "src": "11658:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11654:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8261,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11653:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8262,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11664:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11653:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8264,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11652:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3731363934383734373939333137383833373634303930353631343534393538",
                            "id": 8265,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11670:32:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_71694874799317883764090561454958_by_1",
                              "typeString": "int_const 71694874799317883764090561454958"
                            },
                            "value": "71694874799317883764090561454958"
                          },
                          "src": "11652:50:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11648:54:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8268,
                      "nodeType": "ExpressionStatement",
                      "src": "11648:54:32"
                    },
                    {
                      "expression": {
                        "id": 8279,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8269,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8252,
                          "src": "11716:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8278,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8275,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8272,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8270,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8252,
                                        "src": "11722:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8271,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8132,
                                        "src": "11726:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11722:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8273,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11721:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8274,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11732:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11721:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8276,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11720:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "323833343437303336313732393234353735373237313936343531333036393536",
                            "id": 8277,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11738:33:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_283447036172924575727196451306956_by_1",
                              "typeString": "int_const 2834...(25 digits omitted)...6956"
                            },
                            "value": "283447036172924575727196451306956"
                          },
                          "src": "11720:51:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11716:55:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8280,
                      "nodeType": "ExpressionStatement",
                      "src": "11716:55:32"
                    },
                    {
                      "expression": {
                        "id": 8291,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8281,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8252,
                          "src": "11785:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8290,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8287,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8284,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8282,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8252,
                                        "src": "11791:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8283,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8132,
                                        "src": "11795:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11791:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8285,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11790:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8286,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11801:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11790:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8288,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11789:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "343031363836363930333934303237363633363531363234323038373639353533",
                            "id": 8289,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11807:33:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_401686690394027663651624208769553_by_1",
                              "typeString": "int_const 4016...(25 digits omitted)...9553"
                            },
                            "value": "401686690394027663651624208769553"
                          },
                          "src": "11789:51:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11785:55:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8292,
                      "nodeType": "ExpressionStatement",
                      "src": "11785:55:32"
                    },
                    {
                      "expression": {
                        "id": 8303,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8293,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8252,
                          "src": "11854:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8302,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8299,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8296,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8294,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8252,
                                        "src": "11860:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8295,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8132,
                                        "src": "11864:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11860:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8297,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11859:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8298,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11870:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11859:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8300,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11858:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "323034303438343537353930333932303132333632343835303631383136363232",
                            "id": 8301,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11876:33:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_204048457590392012362485061816622_by_1",
                              "typeString": "int_const 2040...(25 digits omitted)...6622"
                            },
                            "value": "204048457590392012362485061816622"
                          },
                          "src": "11858:51:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11854:55:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8304,
                      "nodeType": "ExpressionStatement",
                      "src": "11854:55:32"
                    },
                    {
                      "expression": {
                        "id": 8315,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8305,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8252,
                          "src": "11923:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8314,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8311,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8308,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8306,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8252,
                                        "src": "11929:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8307,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8132,
                                        "src": "11933:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11929:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8309,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11928:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8310,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11939:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11928:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8312,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11927:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3331383533383939363938353031353731343032363533333539343237313338",
                            "id": 8313,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11945:32:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_31853899698501571402653359427138_by_1",
                              "typeString": "int_const 31853899698501571402653359427138"
                            },
                            "value": "31853899698501571402653359427138"
                          },
                          "src": "11927:50:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11923:54:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8316,
                      "nodeType": "ExpressionStatement",
                      "src": "11923:54:32"
                    },
                    {
                      "expression": {
                        "id": 8327,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8317,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8252,
                          "src": "11991:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8326,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "components": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8323,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "components": [
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      },
                                      "id": 8320,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8318,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8252,
                                        "src": "11997:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8319,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8132,
                                        "src": "12001:1:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11997:5:32",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8321,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11996:7:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8322,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12007:2:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11996:13:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8324,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11995:15:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "393039343239393731323434333837333030323737333736353538333735",
                            "id": 8325,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12013:30:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_909429971244387300277376558375_by_1",
                              "typeString": "int_const 909429971244387300277376558375"
                            },
                            "value": "909429971244387300277376558375"
                          },
                          "src": "11995:48:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11991:52:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8328,
                      "nodeType": "ExpressionStatement",
                      "src": "11991:52:32"
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "12113:295:32",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "12379:15:32",
                            "value": {
                              "arguments": [
                                {
                                  "name": "p",
                                  "nodeType": "YulIdentifier",
                                  "src": "12389:1:32"
                                },
                                {
                                  "name": "q",
                                  "nodeType": "YulIdentifier",
                                  "src": "12392:1:32"
                                }
                              ],
                              "functionName": {
                                "name": "sdiv",
                                "nodeType": "YulIdentifier",
                                "src": "12384:4:32"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12384:10:32"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "12379:1:32"
                              }
                            ]
                          }
                        ]
                      },
                      "documentation": "@solidity memory-safe-assembly",
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 8175,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "12389:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8252,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "12392:1:32",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8135,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "12379:1:32",
                          "valueSize": 1
                        }
                      ],
                      "id": 8329,
                      "nodeType": "InlineAssembly",
                      "src": "12104:304:32"
                    },
                    {
                      "expression": {
                        "id": 8332,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8330,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8135,
                          "src": "12769:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "hexValue": "31363737323032313130393936373138353838333432383230393637303637343433393633353136313636",
                          "id": 8331,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12774:43:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1677202110996718588342820967067443963516166_by_1",
                            "typeString": "int_const 1677...(35 digits omitted)...6166"
                          },
                          "value": "1677202110996718588342820967067443963516166"
                        },
                        "src": "12769:48:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8333,
                      "nodeType": "ExpressionStatement",
                      "src": "12769:48:32"
                    },
                    {
                      "expression": {
                        "id": 8338,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8334,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8135,
                          "src": "12876:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8337,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3136353937353737353532363835363134323231343837323835393538313933393437343639313933383230353539323139383738313737393038303933343939323038333731",
                            "id": 8335,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12897:71:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16597577552685614221487285958193947469193820559219878177908093499208371_by_1",
                              "typeString": "int_const 1659...(63 digits omitted)...8371"
                            },
                            "value": "16597577552685614221487285958193947469193820559219878177908093499208371"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 8336,
                            "name": "k",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8148,
                            "src": "12987:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "12897:91:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "12876:112:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8339,
                      "nodeType": "ExpressionStatement",
                      "src": "12876:112:32"
                    },
                    {
                      "expression": {
                        "id": 8342,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8340,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8135,
                          "src": "13056:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "hexValue": "363030393230313739383239373331383631373336373032373739333231363231343539353935343732323538303439303734313031353637333737383833303230303138333038",
                          "id": 8341,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13061:72:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_600920179829731861736702779321621459595472258049074101567377883020018308_by_1",
                            "typeString": "int_const 6009...(64 digits omitted)...8308"
                          },
                          "value": "600920179829731861736702779321621459595472258049074101567377883020018308"
                        },
                        "src": "13056:77:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8343,
                      "nodeType": "ExpressionStatement",
                      "src": "13056:77:32"
                    },
                    {
                      "expression": {
                        "id": 8346,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8344,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8135,
                          "src": "13198:1:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": ">>=",
                        "rightHandSide": {
                          "hexValue": "313734",
                          "id": 8345,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13204:3:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_174_by_1",
                            "typeString": "int_const 174"
                          },
                          "value": "174"
                        },
                        "src": "13198:9:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8347,
                      "nodeType": "ExpressionStatement",
                      "src": "13198:9:32"
                    }
                  ]
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_ln",
            "nameLocation": "9641:3:32",
            "parameters": {
              "id": 8133,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8132,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9652:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8350,
                  "src": "9645:8:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8131,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9645:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9644:10:32"
            },
            "returnParameters": {
              "id": 8136,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8135,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "9684:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8350,
                  "src": "9677:8:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8134,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9677:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9676:10:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 8413,
            "nodeType": "FunctionDefinition",
            "src": "13582:678:32",
            "nodes": [],
            "body": {
              "id": 8412,
              "nodeType": "Block",
              "src": "13793:467:32",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 8366,
                    "name": "_isAdding",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8361,
                    "src": "13807:9:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 8410,
                    "nodeType": "Block",
                    "src": "14011:243:32",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 8388,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 8386,
                            "name": "_totalWeight",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8355,
                            "src": "14029:12:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 8387,
                            "name": "_deltaWeight",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8359,
                            "src": "14045:12:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14029:28:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 8391,
                        "nodeType": "IfStatement",
                        "src": "14025:42:32",
                        "trueBody": {
                          "expression": {
                            "hexValue": "30",
                            "id": 8389,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14066:1:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "functionReturnParameters": 8365,
                          "id": 8390,
                          "nodeType": "Return",
                          "src": "14059:8:32"
                        }
                      },
                      {
                        "expression": {
                          "id": 8408,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 8392,
                            "name": "average",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8364,
                            "src": "14081:7:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 8406,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 8404,
                                  "name": "_totalWeight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8355,
                                  "src": "14198:12:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 8405,
                                  "name": "_deltaWeight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8359,
                                  "src": "14213:12:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "14198:27:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "components": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 8401,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "arguments": [
                                        {
                                          "id": 8395,
                                          "name": "_average",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8353,
                                          "src": "14113:8:32",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "id": 8393,
                                          "name": "_totalWeight",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8355,
                                          "src": "14092:12:32",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "id": 8394,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "14105:7:32",
                                        "memberName": "mulDown",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7784,
                                        "src": "14092:20:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      "id": 8396,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "14092:30:32",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "arguments": [
                                        {
                                          "id": 8399,
                                          "name": "_delta",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8357,
                                          "src": "14162:6:32",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "id": 8397,
                                          "name": "_deltaWeight",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8359,
                                          "src": "14141:12:32",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "id": 8398,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "14154:7:32",
                                        "memberName": "mulDown",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7784,
                                        "src": "14141:20:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      "id": 8400,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "14141:28:32",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "14092:77:32",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 8402,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "14091:79:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 8403,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "14171:5:32",
                              "memberName": "divUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7852,
                              "src": "14091:85:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 8407,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14091:152:32",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14081:162:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 8409,
                        "nodeType": "ExpressionStatement",
                        "src": "14081:162:32"
                      }
                    ]
                  },
                  "id": 8411,
                  "nodeType": "IfStatement",
                  "src": "13803:451:32",
                  "trueBody": {
                    "id": 8385,
                    "nodeType": "Block",
                    "src": "13818:187:32",
                    "statements": [
                      {
                        "expression": {
                          "id": 8383,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 8367,
                            "name": "average",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8364,
                            "src": "13832:7:32",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 8381,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 8379,
                                  "name": "_totalWeight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8355,
                                  "src": "13949:12:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "id": 8380,
                                  "name": "_deltaWeight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8359,
                                  "src": "13964:12:32",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "13949:27:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "components": [
                                  {
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 8376,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "arguments": [
                                        {
                                          "id": 8370,
                                          "name": "_average",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8353,
                                          "src": "13864:8:32",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "id": 8368,
                                          "name": "_totalWeight",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8355,
                                          "src": "13843:12:32",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "id": 8369,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "13856:7:32",
                                        "memberName": "mulDown",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7784,
                                        "src": "13843:20:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      "id": 8371,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "13843:30:32",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "+",
                                    "rightExpression": {
                                      "arguments": [
                                        {
                                          "id": 8374,
                                          "name": "_delta",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8357,
                                          "src": "13913:6:32",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        ],
                                        "expression": {
                                          "id": 8372,
                                          "name": "_deltaWeight",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8359,
                                          "src": "13892:12:32",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "id": 8373,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "13905:7:32",
                                        "memberName": "mulDown",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 7784,
                                        "src": "13892:20:32",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      "id": 8375,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "13892:28:32",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "13843:77:32",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 8377,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "13842:79:32",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 8378,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "13922:5:32",
                              "memberName": "divUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7852,
                              "src": "13842:85:32",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 8382,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13842:152:32",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "13832:162:32",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 8384,
                        "nodeType": "ExpressionStatement",
                        "src": "13832:162:32"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 8351,
              "nodeType": "StructuredDocumentation",
              "src": "13230:347:32",
              "text": "@dev Updates a weighted average by adding or removing a weighted delta.\n @param _totalWeight The total weight before the update.\n @param _deltaWeight The weight of the new value.\n @param _average The weighted average before the update.\n @param _delta The new value.\n @return average The new weighted average."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateWeightedAverage",
            "nameLocation": "13591:21:32",
            "parameters": {
              "id": 8362,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8353,
                  "mutability": "mutable",
                  "name": "_average",
                  "nameLocation": "13630:8:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8413,
                  "src": "13622:16:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8352,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13622:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8355,
                  "mutability": "mutable",
                  "name": "_totalWeight",
                  "nameLocation": "13656:12:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8413,
                  "src": "13648:20:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8354,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13648:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8357,
                  "mutability": "mutable",
                  "name": "_delta",
                  "nameLocation": "13686:6:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8413,
                  "src": "13678:14:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8356,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13678:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8359,
                  "mutability": "mutable",
                  "name": "_deltaWeight",
                  "nameLocation": "13710:12:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8413,
                  "src": "13702:20:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8358,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13702:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8361,
                  "mutability": "mutable",
                  "name": "_isAdding",
                  "nameLocation": "13737:9:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8413,
                  "src": "13732:14:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8360,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "13732:4:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13612:140:32"
            },
            "returnParameters": {
              "id": 8365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8364,
                  "mutability": "mutable",
                  "name": "average",
                  "nameLocation": "13784:7:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8413,
                  "src": "13776:15:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8363,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13776:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13775:17:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8431,
            "nodeType": "FunctionDefinition",
            "src": "14433:104:32",
            "nodes": [],
            "body": {
              "id": 8430,
              "nodeType": "Block",
              "src": "14500:37:32",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 8425,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 8423,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8416,
                        "src": "14517:1:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 8424,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8418,
                        "src": "14521:1:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "14517:5:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 8427,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8416,
                      "src": "14529:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 8428,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "14517:13:32",
                    "trueExpression": {
                      "id": 8426,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8418,
                      "src": "14525:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 8422,
                  "id": 8429,
                  "nodeType": "Return",
                  "src": "14510:20:32"
                }
              ]
            },
            "documentation": {
              "id": 8414,
              "nodeType": "StructuredDocumentation",
              "src": "14266:162:32",
              "text": "@dev Calculates the minimum of two values.\n @param a The first value.\n @param b The second value.\n @return The minimum of the two values."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "min",
            "nameLocation": "14442:3:32",
            "parameters": {
              "id": 8419,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8416,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "14454:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8431,
                  "src": "14446:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8415,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14446:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8418,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "14465:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8431,
                  "src": "14457:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8417,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14457:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14445:22:32"
            },
            "returnParameters": {
              "id": 8422,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8421,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8431,
                  "src": "14491:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8420,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14491:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14490:9:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8449,
            "nodeType": "FunctionDefinition",
            "src": "14710:104:32",
            "nodes": [],
            "body": {
              "id": 8448,
              "nodeType": "Block",
              "src": "14777:37:32",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 8443,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 8441,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8434,
                        "src": "14794:1:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 8442,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8436,
                        "src": "14798:1:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "14794:5:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 8445,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8436,
                      "src": "14806:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 8446,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "14794:13:32",
                    "trueExpression": {
                      "id": 8444,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8434,
                      "src": "14802:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 8440,
                  "id": 8447,
                  "nodeType": "Return",
                  "src": "14787:20:32"
                }
              ]
            },
            "documentation": {
              "id": 8432,
              "nodeType": "StructuredDocumentation",
              "src": "14543:162:32",
              "text": "@dev Calculates the maximum of two values.\n @param a The first value.\n @param b The second value.\n @return The maximum of the two values."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "max",
            "nameLocation": "14719:3:32",
            "parameters": {
              "id": 8437,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8434,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "14731:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8449,
                  "src": "14723:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8433,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14723:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8436,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "14742:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8449,
                  "src": "14734:9:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8435,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14734:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14722:22:32"
            },
            "returnParameters": {
              "id": 8440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8439,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8449,
                  "src": "14768:7:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8438,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14768:7:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14767:9:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8467,
            "nodeType": "FunctionDefinition",
            "src": "14987:101:32",
            "nodes": [],
            "body": {
              "id": 8466,
              "nodeType": "Block",
              "src": "15051:37:32",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 8461,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 8459,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8452,
                        "src": "15068:1:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 8460,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8454,
                        "src": "15072:1:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "15068:5:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 8463,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8452,
                      "src": "15080:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 8464,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "15068:13:32",
                    "trueExpression": {
                      "id": 8462,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8454,
                      "src": "15076:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 8458,
                  "id": 8465,
                  "nodeType": "Return",
                  "src": "15061:20:32"
                }
              ]
            },
            "documentation": {
              "id": 8450,
              "nodeType": "StructuredDocumentation",
              "src": "14820:162:32",
              "text": "@dev Calculates the minimum of two values.\n @param a The first value.\n @param b The second value.\n @return The minimum of the two values."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "min",
            "nameLocation": "14996:3:32",
            "parameters": {
              "id": 8455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8452,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "15007:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8467,
                  "src": "15000:8:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8451,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15000:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8454,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "15017:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8467,
                  "src": "15010:8:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8453,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15010:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14999:20:32"
            },
            "returnParameters": {
              "id": 8458,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8457,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8467,
                  "src": "15043:6:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8456,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15043:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15042:8:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8485,
            "nodeType": "FunctionDefinition",
            "src": "15261:101:32",
            "nodes": [],
            "body": {
              "id": 8484,
              "nodeType": "Block",
              "src": "15325:37:32",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 8479,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 8477,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8470,
                        "src": "15342:1:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 8478,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8472,
                        "src": "15346:1:32",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "15342:5:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 8481,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8472,
                      "src": "15354:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 8482,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "15342:13:32",
                    "trueExpression": {
                      "id": 8480,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8470,
                      "src": "15350:1:32",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 8476,
                  "id": 8483,
                  "nodeType": "Return",
                  "src": "15335:20:32"
                }
              ]
            },
            "documentation": {
              "id": 8468,
              "nodeType": "StructuredDocumentation",
              "src": "15094:162:32",
              "text": "@dev Calculates the maximum of two values.\n @param a The first value.\n @param b The second value.\n @return The maximum of the two values."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "max",
            "nameLocation": "15270:3:32",
            "parameters": {
              "id": 8473,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8470,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "15281:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8485,
                  "src": "15274:8:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8469,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15274:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8472,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "15291:1:32",
                  "nodeType": "VariableDeclaration",
                  "scope": 8485,
                  "src": "15284:8:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8471,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15284:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15273:20:32"
            },
            "returnParameters": {
              "id": 8476,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8475,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8485,
                  "src": "15317:6:32",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8474,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15317:6:32",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15316:8:32"
            },
            "scope": 8486,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "FixedPointMath",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 7739,
          "nodeType": "StructuredDocumentation",
          "src": "157:307:32",
          "text": "@author DELV\n @title FixedPointMath\n @notice A fixed-point math library.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          8486
        ],
        "name": "FixedPointMath",
        "nameLocation": "472:14:32",
        "scope": 8487,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 32
}