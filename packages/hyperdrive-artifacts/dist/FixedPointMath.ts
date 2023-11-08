export const FixedPointMath = 
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
    "object": "0x608e610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063d33fee44146038575b600080fd5b6046670de0b6b3a764000081565b60405190815260200160405180910390f3fea264697066735822122011db60662ae2d7b10448fc179b5b1cb123620d15f6f98105a096db09d30bc2e164736f6c63430008130033",
    "sourceMap": "464:14900:33:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;464:14900:33;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063d33fee44146038575b600080fd5b6046670de0b6b3a764000081565b60405190815260200160405180910390f3fea264697066735822122011db60662ae2d7b10448fc179b5b1cb123620d15f6f98105a096db09d30bc2e164736f6c63430008130033",
    "sourceMap": "464:14900:33:-:0;;;;;;;;;;;;;;;;;;;;;;;;532:37;;565:4;532:37;;;;;168:25:167;;;156:2;141:18;532:37:33;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "ONE_18()": "d33fee44"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ONE_18\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"FixedPointMath\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"A fixed-point math library.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/FixedPointMath.sol\":\"FixedPointMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
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
        "openzeppelin/=lib/openzeppelin-contracts/contracts/",
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
        "contracts/src/libraries/FixedPointMath.sol": "FixedPointMath"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IDataProvider.sol": {
        "keccak256": "0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843",
        "urls": [
          "bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15",
          "dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c",
        "urls": [
          "bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672",
          "dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w"
        ],
        "license": "MIT"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7",
        "urls": [
          "bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78",
          "dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5"
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
        "keccak256": "0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc",
        "urls": [
          "bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206",
          "dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt"
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
    "id": 9067,
    "exportedSymbols": {
      "FixedPointMath": [
        9066
      ],
      "IHyperdrive": [
        7431
      ],
      "ONE": [
        8318
      ]
    },
    "nodeType": "SourceUnit",
    "src": "40:15325:33",
    "nodes": [
      {
        "id": 8313,
        "nodeType": "PragmaDirective",
        "src": "40:23:33",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 8315,
        "nodeType": "ImportDirective",
        "src": "65:60:33",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9067,
        "sourceUnit": 7432,
        "symbolAliases": [
          {
            "foreign": {
              "id": 8314,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "74:11:33",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 8318,
        "nodeType": "VariableDeclaration",
        "src": "127:27:33",
        "nodes": [],
        "constant": true,
        "mutability": "constant",
        "name": "ONE",
        "nameLocation": "144:3:33",
        "scope": 9067,
        "stateVariable": false,
        "storageLocation": "default",
        "typeDescriptions": {
          "typeIdentifier": "t_uint256",
          "typeString": "uint256"
        },
        "typeName": {
          "id": 8316,
          "name": "uint256",
          "nodeType": "ElementaryTypeName",
          "src": "127:7:33",
          "typeDescriptions": {
            "typeIdentifier": "t_uint256",
            "typeString": "uint256"
          }
        },
        "value": {
          "hexValue": "31653138",
          "id": 8317,
          "isConstant": false,
          "isLValue": false,
          "isPure": true,
          "kind": "number",
          "lValueRequested": false,
          "nodeType": "Literal",
          "src": "150:4:33",
          "typeDescriptions": {
            "typeIdentifier": "t_rational_1000000000000000000_by_1",
            "typeString": "int_const 1000000000000000000"
          },
          "value": "1e18"
        },
        "visibility": "internal"
      },
      {
        "id": 9066,
        "nodeType": "ContractDefinition",
        "src": "464:14900:33",
        "nodes": [
          {
            "id": 8322,
            "nodeType": "UsingForDirective",
            "src": "493:33:33",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 8320,
              "name": "FixedPointMath",
              "nameLocations": [
                "499:14:33"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "499:14:33"
            },
            "typeName": {
              "id": 8321,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "518:7:33",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 8325,
            "nodeType": "VariableDeclaration",
            "src": "532:37:33",
            "nodes": [],
            "constant": true,
            "functionSelector": "d33fee44",
            "mutability": "constant",
            "name": "ONE_18",
            "nameLocation": "556:6:33",
            "scope": 9066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 8323,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "532:7:33",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31653138",
              "id": 8324,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "565:4:33",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1000000000000000000_by_1",
                "typeString": "int_const 1000000000000000000"
              },
              "value": "1e18"
            },
            "visibility": "public"
          },
          {
            "id": 8332,
            "nodeType": "VariableDeclaration",
            "src": "575:52:33",
            "nodes": [],
            "constant": true,
            "mutability": "constant",
            "name": "MAX_UINT256",
            "nameLocation": "601:11:33",
            "scope": 9066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 8326,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "575:7:33",
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
              "id": 8331,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "commonType": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                },
                "id": 8329,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "leftExpression": {
                  "hexValue": "32",
                  "id": 8327,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "615:1:33",
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
                  "id": 8328,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "620:3:33",
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_256_by_1",
                    "typeString": "int_const 256"
                  },
                  "value": "256"
                },
                "src": "615:8:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639936_by_1",
                  "typeString": "int_const 1157...(70 digits omitted)...9936"
                }
              },
              "nodeType": "BinaryOperation",
              "operator": "-",
              "rightExpression": {
                "hexValue": "31",
                "id": 8330,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "626:1:33",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_1_by_1",
                  "typeString": "int_const 1"
                },
                "value": "1"
              },
              "src": "615:12:33",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_115792089237316195423570985008687907853269984665640564039457584007913129639935_by_1",
                "typeString": "int_const 1157...(70 digits omitted)...9935"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 8346,
            "nodeType": "FunctionDefinition",
            "src": "984:556:33",
            "nodes": [],
            "body": {
              "id": 8345,
              "nodeType": "Block",
              "src": "1111:429:33",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "1173:361:33",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1386:44:33",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1411:1:33",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1414:1:33",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "1404:6:33"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1404:12:33"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "1404:12:33"
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
                                  "src": "1315:11:33"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "1339:1:33"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "1345:1:33"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1352:11:33"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "1365:1:33"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "1348:3:33"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "1348:19:33"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "1342:2:33"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1342:26:33"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "1335:3:33"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1335:34:33"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "1328:6:33"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1328:42:33"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "1311:3:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1311:60:33"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1287:6:33"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1287:98:33"
                        },
                        "nodeType": "YulIf",
                        "src": "1284:146:33"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1492:32:33",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "x",
                                  "nodeType": "YulIdentifier",
                                  "src": "1505:1:33"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "1508:1:33"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "1501:3:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1501:9:33"
                            },
                            {
                              "name": "denominator",
                              "nodeType": "YulIdentifier",
                              "src": "1512:11:33"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "1497:3:33"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1497:27:33"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "1492:1:33"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 8332,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1352:11:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8339,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1315:11:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8339,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1512:11:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8335,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1345:1:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8335,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1505:1:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8337,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1339:1:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8337,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1365:1:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8337,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1508:1:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8342,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "1492:1:33",
                      "valueSize": 1
                    }
                  ],
                  "id": 8344,
                  "nodeType": "InlineAssembly",
                  "src": "1164:370:33"
                }
              ]
            },
            "documentation": {
              "id": 8333,
              "nodeType": "StructuredDocumentation",
              "src": "634:345:33",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @param denominator Fixed point number in 1e18 format.\n @return z The result of x * y / denominator rounded down."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivDown",
            "nameLocation": "993:10:33",
            "parameters": {
              "id": 8340,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8335,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "1021:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8346,
                  "src": "1013:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8334,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1013:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8337,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "1040:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8346,
                  "src": "1032:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8336,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1032:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8339,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "1059:11:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8346,
                  "src": "1051:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8338,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1051:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1003:73:33"
            },
            "returnParameters": {
              "id": 8343,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8342,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "1108:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8346,
                  "src": "1100:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8341,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1100:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1099:11:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8364,
            "nodeType": "FunctionDefinition",
            "src": "1814:119:33",
            "nodes": [],
            "body": {
              "id": 8363,
              "nodeType": "Block",
              "src": "1885:48:33",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 8357,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8349,
                            "src": "1914:1:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 8358,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8351,
                            "src": "1917:1:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "31653138",
                            "id": 8359,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1920:4:33",
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
                          "id": 8356,
                          "name": "mulDivDown",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8346,
                          "src": "1903:10:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 8360,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1903:22:33",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 8361,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1902:24:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 8355,
                  "id": 8362,
                  "nodeType": "Return",
                  "src": "1895:31:33"
                }
              ]
            },
            "documentation": {
              "id": 8347,
              "nodeType": "StructuredDocumentation",
              "src": "1546:263:33",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return Result of a * b rounded down."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDown",
            "nameLocation": "1823:7:33",
            "parameters": {
              "id": 8352,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8349,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "1839:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8364,
                  "src": "1831:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8348,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1831:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8351,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "1850:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8364,
                  "src": "1842:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8350,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1842:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1830:22:33"
            },
            "returnParameters": {
              "id": 8355,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8354,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8364,
                  "src": "1876:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8353,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1876:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1875:9:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8382,
            "nodeType": "FunctionDefinition",
            "src": "2207:165:33",
            "nodes": [],
            "body": {
              "id": 8381,
              "nodeType": "Block",
              "src": "2278:94:33",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 8375,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8367,
                            "src": "2307:1:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "31653138",
                            "id": 8376,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2310:4:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          },
                          {
                            "id": 8377,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8369,
                            "src": "2316:1:33",
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
                          "id": 8374,
                          "name": "mulDivDown",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8346,
                          "src": "2296:10:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 8378,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2296:22:33",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 8379,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2295:24:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 8373,
                  "id": 8380,
                  "nodeType": "Return",
                  "src": "2288:31:33"
                }
              ]
            },
            "documentation": {
              "id": 8365,
              "nodeType": "StructuredDocumentation",
              "src": "1939:263:33",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return Result of a / b rounded down."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divDown",
            "nameLocation": "2216:7:33",
            "parameters": {
              "id": 8370,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8367,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "2232:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8382,
                  "src": "2224:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8366,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2224:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8369,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "2243:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8382,
                  "src": "2235:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8368,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2235:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2223:22:33"
            },
            "returnParameters": {
              "id": 8373,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8372,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8382,
                  "src": "2269:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8371,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2269:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2268:9:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8396,
            "nodeType": "FunctionDefinition",
            "src": "2726:748:33",
            "nodes": [],
            "body": {
              "id": 8395,
              "nodeType": "Block",
              "src": "2851:623:33",
              "nodes": [],
              "statements": [
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "2913:555:33",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3126:44:33",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3151:1:33",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "3154:1:33",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "3144:6:33"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3144:12:33"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "3144:12:33"
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
                                  "src": "3055:11:33"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "3079:1:33"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "3085:1:33"
                                            },
                                            {
                                              "arguments": [
                                                {
                                                  "name": "MAX_UINT256",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "3092:11:33"
                                                },
                                                {
                                                  "name": "y",
                                                  "nodeType": "YulIdentifier",
                                                  "src": "3105:1:33"
                                                }
                                              ],
                                              "functionName": {
                                                "name": "div",
                                                "nodeType": "YulIdentifier",
                                                "src": "3088:3:33"
                                              },
                                              "nodeType": "YulFunctionCall",
                                              "src": "3088:19:33"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "gt",
                                            "nodeType": "YulIdentifier",
                                            "src": "3082:2:33"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "3082:26:33"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "3075:3:33"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3075:34:33"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "3068:6:33"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3068:42:33"
                                }
                              ],
                              "functionName": {
                                "name": "mul",
                                "nodeType": "YulIdentifier",
                                "src": "3051:3:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3051:60:33"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "3027:6:33"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3027:98:33"
                        },
                        "nodeType": "YulIf",
                        "src": "3024:146:33"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3339:119:33",
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
                                          "src": "3376:1:33"
                                        },
                                        {
                                          "name": "y",
                                          "nodeType": "YulIdentifier",
                                          "src": "3379:1:33"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "3372:3:33"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "3372:9:33"
                                    },
                                    {
                                      "name": "denominator",
                                      "nodeType": "YulIdentifier",
                                      "src": "3383:11:33"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mod",
                                    "nodeType": "YulIdentifier",
                                    "src": "3368:3:33"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3368:27:33"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3397:1:33",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "3365:2:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3365:34:33"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "3425:1:33"
                                    },
                                    {
                                      "name": "y",
                                      "nodeType": "YulIdentifier",
                                      "src": "3428:1:33"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "mul",
                                    "nodeType": "YulIdentifier",
                                    "src": "3421:3:33"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3421:9:33"
                                },
                                {
                                  "name": "denominator",
                                  "nodeType": "YulIdentifier",
                                  "src": "3432:11:33"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "3417:3:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3417:27:33"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3344:3:33"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3344:114:33"
                        },
                        "variableNames": [
                          {
                            "name": "z",
                            "nodeType": "YulIdentifier",
                            "src": "3339:1:33"
                          }
                        ]
                      }
                    ]
                  },
                  "documentation": "@solidity memory-safe-assembly",
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 8332,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3092:11:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8389,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3055:11:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8389,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3383:11:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8389,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3432:11:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8385,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3085:1:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8385,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3376:1:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8385,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3425:1:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8387,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3079:1:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8387,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3105:1:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8387,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3379:1:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8387,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3428:1:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8392,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "3339:1:33",
                      "valueSize": 1
                    }
                  ],
                  "id": 8394,
                  "nodeType": "InlineAssembly",
                  "src": "2904:564:33"
                }
              ]
            },
            "documentation": {
              "id": 8383,
              "nodeType": "StructuredDocumentation",
              "src": "2378:343:33",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @param denominator Fixed point number in 1e18 format.\n @return z The result of x * y / denominator rounded up."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulDivUp",
            "nameLocation": "2735:8:33",
            "parameters": {
              "id": 8390,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8385,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "2761:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8396,
                  "src": "2753:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8384,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2753:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8387,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "2780:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8396,
                  "src": "2772:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8386,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2772:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8389,
                  "mutability": "mutable",
                  "name": "denominator",
                  "nameLocation": "2799:11:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8396,
                  "src": "2791:19:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8388,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2791:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2743:73:33"
            },
            "returnParameters": {
              "id": 8393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8392,
                  "mutability": "mutable",
                  "name": "z",
                  "nameLocation": "2848:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8396,
                  "src": "2840:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8391,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2840:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2839:11:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8414,
            "nodeType": "FunctionDefinition",
            "src": "3750:115:33",
            "nodes": [],
            "body": {
              "id": 8413,
              "nodeType": "Block",
              "src": "3819:46:33",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 8407,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8399,
                            "src": "3846:1:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 8408,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8401,
                            "src": "3849:1:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "31653138",
                            "id": 8409,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "3852:4:33",
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
                          "id": 8406,
                          "name": "mulDivUp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8396,
                          "src": "3837:8:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 8410,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3837:20:33",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 8411,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "3836:22:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 8405,
                  "id": 8412,
                  "nodeType": "Return",
                  "src": "3829:29:33"
                }
              ]
            },
            "documentation": {
              "id": 8397,
              "nodeType": "StructuredDocumentation",
              "src": "3480:265:33",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return The result of a * b rounded up."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mulUp",
            "nameLocation": "3759:5:33",
            "parameters": {
              "id": 8402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8399,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "3773:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8414,
                  "src": "3765:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8398,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3765:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8401,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "3784:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8414,
                  "src": "3776:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8400,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3776:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3764:22:33"
            },
            "returnParameters": {
              "id": 8405,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8404,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8414,
                  "src": "3810:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8403,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3810:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3809:9:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8432,
            "nodeType": "FunctionDefinition",
            "src": "4141:115:33",
            "nodes": [],
            "body": {
              "id": 8431,
              "nodeType": "Block",
              "src": "4210:46:33",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "arguments": [
                          {
                            "id": 8425,
                            "name": "a",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8417,
                            "src": "4237:1:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "31653138",
                            "id": 8426,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4240:4:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "value": "1e18"
                          },
                          {
                            "id": 8427,
                            "name": "b",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8419,
                            "src": "4246:1:33",
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
                          "id": 8424,
                          "name": "mulDivUp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8396,
                          "src": "4228:8:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 8428,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4228:20:33",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 8429,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "4227:22:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 8423,
                  "id": 8430,
                  "nodeType": "Return",
                  "src": "4220:29:33"
                }
              ]
            },
            "documentation": {
              "id": 8415,
              "nodeType": "StructuredDocumentation",
              "src": "3871:265:33",
              "text": "@dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/FixedPointMathLib.sol)\n @param a Fixed point number in 1e18 format.\n @param b Fixed point number in 1e18 format.\n @return The result of a / b rounded up."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "divUp",
            "nameLocation": "4150:5:33",
            "parameters": {
              "id": 8420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8417,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "4164:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8432,
                  "src": "4156:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8416,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4156:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8419,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "4175:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8432,
                  "src": "4167:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8418,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4167:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4155:22:33"
            },
            "returnParameters": {
              "id": 8423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8422,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8432,
                  "src": "4201:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8421,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4201:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4200:9:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8491,
            "nodeType": "FunctionDefinition",
            "src": "4671:846:33",
            "nodes": [],
            "body": {
              "id": 8490,
              "nodeType": "Block",
              "src": "4738:779:33",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 8444,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 8442,
                      "name": "y",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8437,
                      "src": "4795:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 8443,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4800:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4795:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 8448,
                  "nodeType": "IfStatement",
                  "src": "4791:50:33",
                  "trueBody": {
                    "id": 8447,
                    "nodeType": "Block",
                    "src": "4803:38:33",
                    "statements": [
                      {
                        "expression": {
                          "id": 8445,
                          "name": "ONE_18",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8325,
                          "src": "4824:6:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 8441,
                        "id": 8446,
                        "nodeType": "Return",
                        "src": "4817:13:33"
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
                    "id": 8451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 8449,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8435,
                      "src": "4894:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 8450,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4899:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4894:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 8455,
                  "nodeType": "IfStatement",
                  "src": "4890:45:33",
                  "trueBody": {
                    "id": 8454,
                    "nodeType": "Block",
                    "src": "4902:33:33",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 8452,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4923:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 8441,
                        "id": 8453,
                        "nodeType": "Return",
                        "src": "4916:8:33"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    8457
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8457,
                      "mutability": "mutable",
                      "name": "y_int256",
                      "nameLocation": "5080:8:33",
                      "nodeType": "VariableDeclaration",
                      "scope": 8490,
                      "src": "5073:15:33",
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
                        "src": "5073:6:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 8462,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 8460,
                        "name": "y",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8437,
                        "src": "5098:1:33",
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
                      "id": 8459,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5091:6:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 8458,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5091:6:33",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 8461,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5091:9:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5073:27:33"
                },
                {
                  "assignments": [
                    8464
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8464,
                      "mutability": "mutable",
                      "name": "lnx",
                      "nameLocation": "5270:3:33",
                      "nodeType": "VariableDeclaration",
                      "scope": 8490,
                      "src": "5263:10:33",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 8463,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5263:6:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 8471,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 8468,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8435,
                            "src": "5287:1:33",
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
                          "id": 8467,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "5280:6:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 8466,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "5280:6:33",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 8469,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5280:9:33",
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
                      "id": 8465,
                      "name": "_ln",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8930,
                      "src": "5276:3:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (int256) pure returns (int256)"
                      }
                    },
                    "id": 8470,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5276:14:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5263:27:33"
                },
                {
                  "assignments": [
                    8473
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 8473,
                      "mutability": "mutable",
                      "name": "ylnx",
                      "nameLocation": "5307:4:33",
                      "nodeType": "VariableDeclaration",
                      "scope": 8490,
                      "src": "5300:11:33",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 8472,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5300:6:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 8474,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5300:11:33"
                },
                {
                  "AST": {
                    "nodeType": "YulBlock",
                    "src": "5346:50:33",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5360:26:33",
                        "value": {
                          "arguments": [
                            {
                              "name": "y_int256",
                              "nodeType": "YulIdentifier",
                              "src": "5372:8:33"
                            },
                            {
                              "name": "lnx",
                              "nodeType": "YulIdentifier",
                              "src": "5382:3:33"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "5368:3:33"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5368:18:33"
                        },
                        "variableNames": [
                          {
                            "name": "ylnx",
                            "nodeType": "YulIdentifier",
                            "src": "5360:4:33"
                          }
                        ]
                      }
                    ]
                  },
                  "evmVersion": "paris",
                  "externalReferences": [
                    {
                      "declaration": 8464,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5382:3:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8457,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5372:8:33",
                      "valueSize": 1
                    },
                    {
                      "declaration": 8473,
                      "isOffset": false,
                      "isSlot": false,
                      "src": "5360:4:33",
                      "valueSize": 1
                    }
                  ],
                  "flags": [
                    "memory-safe"
                  ],
                  "id": 8475,
                  "nodeType": "InlineAssembly",
                  "src": "5321:75:33"
                },
                {
                  "expression": {
                    "id": 8481,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 8476,
                      "name": "ylnx",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8473,
                      "src": "5405:4:33",
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
                          "id": 8479,
                          "name": "ONE_18",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8325,
                          "src": "5420:6:33",
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
                        "id": 8478,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "5413:6:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 8477,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "5413:6:33",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 8480,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5413:14:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "5405:22:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 8482,
                  "nodeType": "ExpressionStatement",
                  "src": "5405:22:33"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 8486,
                            "name": "ylnx",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8473,
                            "src": "5504:4:33",
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
                          "id": 8485,
                          "name": "exp",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8688,
                          "src": "5500:3:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                            "typeString": "function (int256) pure returns (int256)"
                          }
                        },
                        "id": 8487,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5500:9:33",
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
                      "id": 8484,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "5492:7:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 8483,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5492:7:33",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 8488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5492:18:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 8441,
                  "id": 8489,
                  "nodeType": "Return",
                  "src": "5485:25:33"
                }
              ]
            },
            "documentation": {
              "id": 8433,
              "nodeType": "StructuredDocumentation",
              "src": "4262:404:33",
              "text": "@dev Exponentiation (x^y) with unsigned 18 decimal fixed point base and exponent.\n @dev Partially inspired by Balancer LogExpMath library (https://github.com/balancer-labs/balancer-v2-monorepo/blob/master/pkg/solidity-utils/contracts/math/LogExpMath.sol)\n @param x Fixed point number in 1e18 format.\n @param y Fixed point number in 1e18 format.\n @return The result of x^y."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pow",
            "nameLocation": "4680:3:33",
            "parameters": {
              "id": 8438,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8435,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "4692:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8491,
                  "src": "4684:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8434,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4684:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8437,
                  "mutability": "mutable",
                  "name": "y",
                  "nameLocation": "4703:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8491,
                  "src": "4695:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8436,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4695:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4683:22:33"
            },
            "returnParameters": {
              "id": 8441,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8440,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8491,
                  "src": "4729:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8439,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4729:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4728:9:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8688,
            "nodeType": "FunctionDefinition",
            "src": "5773:3347:33",
            "nodes": [],
            "body": {
              "id": 8687,
              "nodeType": "Block",
              "src": "5829:3291:33",
              "nodes": [],
              "statements": [
                {
                  "id": 8686,
                  "nodeType": "UncheckedBlock",
                  "src": "5839:3275:33",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8502,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8499,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8494,
                          "src": "5996:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "id": 8501,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "UnaryOperation",
                          "operator": "-",
                          "prefix": true,
                          "src": "6001:21:33",
                          "subExpression": {
                            "hexValue": "3432313339363738383534343532373637353531",
                            "id": 8500,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6002:20:33",
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
                        "src": "5996:26:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 8505,
                      "nodeType": "IfStatement",
                      "src": "5992:40:33",
                      "trueBody": {
                        "expression": {
                          "hexValue": "30",
                          "id": 8503,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6031:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 8498,
                        "id": 8504,
                        "nodeType": "Return",
                        "src": "6024:8:33"
                      }
                    },
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8508,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8506,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8494,
                          "src": "6226:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "hexValue": "313335333035393939333638383933323331353839",
                          "id": 8507,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6231:21:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_135305999368893231589_by_1",
                            "typeString": "int_const 135305999368893231589"
                          },
                          "value": "135305999368893231589"
                        },
                        "src": "6226:26:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 8514,
                      "nodeType": "IfStatement",
                      "src": "6222:99:33",
                      "trueBody": {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 8509,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "6277:11:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 8511,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6289:30:33",
                            "memberName": "FixedPointMath_InvalidExponent",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7416,
                            "src": "6277:42:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 8512,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6277:44:33",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 8513,
                        "nodeType": "RevertStatement",
                        "src": "6270:51:33"
                      }
                    },
                    {
                      "expression": {
                        "id": 8524,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8515,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8494,
                          "src": "6578:1:33",
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
                          "id": 8523,
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
                                "id": 8518,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 8516,
                                  "name": "x",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8494,
                                  "src": "6583:1:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<<",
                                "rightExpression": {
                                  "hexValue": "3738",
                                  "id": 8517,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6588:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_78_by_1",
                                    "typeString": "int_const 78"
                                  },
                                  "value": "78"
                                },
                                "src": "6583:7:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8519,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "6582:9:33",
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
                            "id": 8522,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "leftExpression": {
                              "hexValue": "35",
                              "id": 8520,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6594:1:33",
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
                              "id": 8521,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "6599:2:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            },
                            "src": "6594:7:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_3814697265625_by_1",
                              "typeString": "int_const 3814697265625"
                            }
                          },
                          "src": "6582:19:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "6578:23:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8525,
                      "nodeType": "ExpressionStatement",
                      "src": "6578:23:33"
                    },
                    {
                      "assignments": [
                        8527
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 8527,
                          "mutability": "mutable",
                          "name": "k",
                          "nameLocation": "6937:1:33",
                          "nodeType": "VariableDeclaration",
                          "scope": 8686,
                          "src": "6930:8:33",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 8526,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "6930:6:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 8541,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8540,
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
                              "id": 8537,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "commonType": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                },
                                "id": 8533,
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
                                      "id": 8530,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8528,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8494,
                                        "src": "6943:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "<<",
                                      "rightExpression": {
                                        "hexValue": "3936",
                                        "id": 8529,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "6948:2:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_96_by_1",
                                          "typeString": "int_const 96"
                                        },
                                        "value": "96"
                                      },
                                      "src": "6943:7:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8531,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "6942:9:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "/",
                                "rightExpression": {
                                  "hexValue": "3534393136373737343637373037343733333531313431343731313238",
                                  "id": 8532,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6954:29:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_54916777467707473351141471128_by_1",
                                    "typeString": "int_const 54916777467707473351141471128"
                                  },
                                  "value": "54916777467707473351141471128"
                                },
                                "src": "6942:41:33",
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
                                "id": 8536,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "32",
                                  "id": 8534,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6986:1:33",
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
                                  "id": 8535,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "6991:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_95_by_1",
                                    "typeString": "int_const 95"
                                  },
                                  "value": "95"
                                },
                                "src": "6986:7:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_39614081257132168796771975168_by_1",
                                  "typeString": "int_const 39614081257132168796771975168"
                                }
                              },
                              "src": "6942:51:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            }
                          ],
                          "id": 8538,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "6941:53:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">>",
                        "rightExpression": {
                          "hexValue": "3936",
                          "id": 8539,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7014:2:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_96_by_1",
                            "typeString": "int_const 96"
                          },
                          "value": "96"
                        },
                        "src": "6941:75:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "6930:86:33"
                    },
                    {
                      "expression": {
                        "id": 8548,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8542,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8494,
                          "src": "7030:1:33",
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
                          "id": 8547,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 8543,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8494,
                            "src": "7034:1:33",
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
                            "id": 8546,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 8544,
                              "name": "k",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8527,
                              "src": "7038:1:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "hexValue": "3534393136373737343637373037343733333531313431343731313238",
                              "id": 8545,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "7042:29:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_54916777467707473351141471128_by_1",
                                "typeString": "int_const 54916777467707473351141471128"
                              },
                              "value": "54916777467707473351141471128"
                            },
                            "src": "7038:33:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "7034:37:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7030:41:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8549,
                      "nodeType": "ExpressionStatement",
                      "src": "7030:41:33"
                    },
                    {
                      "assignments": [
                        8551
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 8551,
                          "mutability": "mutable",
                          "name": "y",
                          "nameLocation": "7279:1:33",
                          "nodeType": "VariableDeclaration",
                          "scope": 8686,
                          "src": "7272:8:33",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 8550,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7272:6:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 8555,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8554,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8552,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8494,
                          "src": "7283:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "31333436333836363136353435373936343738393230393530373733333238",
                          "id": 8553,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7287:31:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1346386616545796478920950773328_by_1",
                            "typeString": "int_const 1346386616545796478920950773328"
                          },
                          "value": "1346386616545796478920950773328"
                        },
                        "src": "7283:35:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "7272:46:33"
                    },
                    {
                      "expression": {
                        "id": 8566,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8556,
                          "name": "y",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8551,
                          "src": "7332:1:33",
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
                          "id": 8565,
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
                                "id": 8562,
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
                                      "id": 8559,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8557,
                                        "name": "y",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8551,
                                        "src": "7338:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8558,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8494,
                                        "src": "7342:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7338:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8560,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7337:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8561,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7348:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7337:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8563,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7336:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3537313535343231323237353532333531303832323234333039373538343432",
                            "id": 8564,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7354:32:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_57155421227552351082224309758442_by_1",
                              "typeString": "int_const 57155421227552351082224309758442"
                            },
                            "value": "57155421227552351082224309758442"
                          },
                          "src": "7336:50:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7332:54:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8567,
                      "nodeType": "ExpressionStatement",
                      "src": "7332:54:33"
                    },
                    {
                      "assignments": [
                        8569
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 8569,
                          "mutability": "mutable",
                          "name": "p",
                          "nameLocation": "7407:1:33",
                          "nodeType": "VariableDeclaration",
                          "scope": 8686,
                          "src": "7400:8:33",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 8568,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7400:6:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 8575,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8574,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "commonType": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "id": 8572,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 8570,
                            "name": "y",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8551,
                            "src": "7411:1:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "id": 8571,
                            "name": "x",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8494,
                            "src": "7415:1:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "7411:5:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "3934323031353439313934353530343932323534333536303432353034383132",
                          "id": 8573,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7419:32:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_94201549194550492254356042504812_by_1",
                            "typeString": "int_const 94201549194550492254356042504812"
                          },
                          "value": "94201549194550492254356042504812"
                        },
                        "src": "7411:40:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "7400:51:33"
                    },
                    {
                      "expression": {
                        "id": 8586,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8576,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8569,
                          "src": "7465:1:33",
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
                          "id": 8585,
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
                                "id": 8582,
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
                                      "id": 8579,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8577,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8569,
                                        "src": "7471:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8578,
                                        "name": "y",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8551,
                                        "src": "7475:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7471:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8580,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7470:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8581,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7481:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7470:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8583,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7469:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3238373139303231363434303239373236313533393536393434363830343132323430",
                            "id": 8584,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7487:35:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_28719021644029726153956944680412240_by_1",
                              "typeString": "int_const 2871...(27 digits omitted)...2240"
                            },
                            "value": "28719021644029726153956944680412240"
                          },
                          "src": "7469:53:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7465:57:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8587,
                      "nodeType": "ExpressionStatement",
                      "src": "7465:57:33"
                    },
                    {
                      "expression": {
                        "id": 8597,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8588,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8569,
                          "src": "7536:1:33",
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
                          "id": 8596,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 8591,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 8589,
                              "name": "p",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8569,
                              "src": "7540:1:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 8590,
                              "name": "x",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8494,
                              "src": "7544:1:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "7540:5:33",
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
                                "id": 8594,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "34333835323732353231343534383437393034363539303736393835363933323736",
                                  "id": 8592,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7549:34:33",
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
                                  "id": 8593,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7587:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7549:40:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_347437083999162433888837515002539729507623920905942392673140736_by_1",
                                  "typeString": "int_const 3474...(55 digits omitted)...0736"
                                }
                              }
                            ],
                            "id": 8595,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7548:42:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_347437083999162433888837515002539729507623920905942392673140736_by_1",
                              "typeString": "int_const 3474...(55 digits omitted)...0736"
                            }
                          },
                          "src": "7540:50:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7536:54:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8598,
                      "nodeType": "ExpressionStatement",
                      "src": "7536:54:33"
                    },
                    {
                      "assignments": [
                        8600
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 8600,
                          "mutability": "mutable",
                          "name": "q",
                          "nameLocation": "7709:1:33",
                          "nodeType": "VariableDeclaration",
                          "scope": 8686,
                          "src": "7702:8:33",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 8599,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "7702:6:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 8604,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8603,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8601,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8494,
                          "src": "7713:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "32383535393839333934393037323233323633393336343834303539393030",
                          "id": 8602,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7717:31:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_2855989394907223263936484059900_by_1",
                            "typeString": "int_const 2855989394907223263936484059900"
                          },
                          "value": "2855989394907223263936484059900"
                        },
                        "src": "7713:35:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "7702:46:33"
                    },
                    {
                      "expression": {
                        "id": 8615,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8605,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8600,
                          "src": "7762:1:33",
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
                          "id": 8614,
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
                                "id": 8611,
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
                                      "id": 8608,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8606,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8600,
                                        "src": "7768:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8607,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8494,
                                        "src": "7772:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7768:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8609,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7767:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8610,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7778:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7767:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8612,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7766:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3530303230363033363532353335373833303139393631383331383831393435",
                            "id": 8613,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7784:32:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_50020603652535783019961831881945_by_1",
                              "typeString": "int_const 50020603652535783019961831881945"
                            },
                            "value": "50020603652535783019961831881945"
                          },
                          "src": "7766:50:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7762:54:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8616,
                      "nodeType": "ExpressionStatement",
                      "src": "7762:54:33"
                    },
                    {
                      "expression": {
                        "id": 8627,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8617,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8600,
                          "src": "7830:1:33",
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
                          "id": 8626,
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
                                "id": 8623,
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
                                      "id": 8620,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8618,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8600,
                                        "src": "7836:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8619,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8494,
                                        "src": "7840:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7836:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8621,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7835:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8622,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7846:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7835:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8624,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7834:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "353333383435303333353833343236373033323833363333343333373235333830",
                            "id": 8625,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7852:33:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_533845033583426703283633433725380_by_1",
                              "typeString": "int_const 5338...(25 digits omitted)...5380"
                            },
                            "value": "533845033583426703283633433725380"
                          },
                          "src": "7834:51:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7830:55:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8628,
                      "nodeType": "ExpressionStatement",
                      "src": "7830:55:33"
                    },
                    {
                      "expression": {
                        "id": 8639,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8629,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8600,
                          "src": "7899:1:33",
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
                          "id": 8638,
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
                                "id": 8635,
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
                                      "id": 8632,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8630,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8600,
                                        "src": "7905:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8631,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8494,
                                        "src": "7909:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7905:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8633,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7904:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8634,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7915:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7904:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8636,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7903:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "33363034383537323536393330363935343237303733363531393138303931343239",
                            "id": 8637,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7921:34:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_3604857256930695427073651918091429_by_1",
                              "typeString": "int_const 3604...(26 digits omitted)...1429"
                            },
                            "value": "3604857256930695427073651918091429"
                          },
                          "src": "7903:52:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7899:56:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8640,
                      "nodeType": "ExpressionStatement",
                      "src": "7899:56:33"
                    },
                    {
                      "expression": {
                        "id": 8651,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8641,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8600,
                          "src": "7969:1:33",
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
                          "id": 8650,
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
                                "id": 8647,
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
                                      "id": 8644,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8642,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8600,
                                        "src": "7975:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8643,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8494,
                                        "src": "7979:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "7975:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8645,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "7974:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8646,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "7985:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "7974:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8648,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "7973:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "3134343233363038353637333530343633313830383837333732393632383037353733",
                            "id": 8649,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "7991:35:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_14423608567350463180887372962807573_by_1",
                              "typeString": "int_const 1442...(27 digits omitted)...7573"
                            },
                            "value": "14423608567350463180887372962807573"
                          },
                          "src": "7973:53:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "7969:57:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8652,
                      "nodeType": "ExpressionStatement",
                      "src": "7969:57:33"
                    },
                    {
                      "expression": {
                        "id": 8663,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8653,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8600,
                          "src": "8040:1:33",
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
                          "id": 8662,
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
                                "id": 8659,
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
                                      "id": 8656,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8654,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8600,
                                        "src": "8046:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8655,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8494,
                                        "src": "8050:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "8046:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8657,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "8045:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8658,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "8056:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "8045:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8660,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "8044:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3236343439313838343938333535353838333339393334383033373233393736303233",
                            "id": 8661,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "8062:35:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_26449188498355588339934803723976023_by_1",
                              "typeString": "int_const 2644...(27 digits omitted)...6023"
                            },
                            "value": "26449188498355588339934803723976023"
                          },
                          "src": "8044:53:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "8040:57:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8664,
                      "nodeType": "ExpressionStatement",
                      "src": "8040:57:33"
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "8168:318:33",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "8457:15:33",
                            "value": {
                              "arguments": [
                                {
                                  "name": "p",
                                  "nodeType": "YulIdentifier",
                                  "src": "8467:1:33"
                                },
                                {
                                  "name": "q",
                                  "nodeType": "YulIdentifier",
                                  "src": "8470:1:33"
                                }
                              ],
                              "functionName": {
                                "name": "sdiv",
                                "nodeType": "YulIdentifier",
                                "src": "8462:4:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8462:10:33"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "8457:1:33"
                              }
                            ]
                          }
                        ]
                      },
                      "documentation": "@solidity memory-safe-assembly",
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 8569,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "8467:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8600,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "8470:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8497,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "8457:1:33",
                          "valueSize": 1
                        }
                      ],
                      "id": 8665,
                      "nodeType": "InlineAssembly",
                      "src": "8159:327:33"
                    },
                    {
                      "expression": {
                        "id": 8684,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8666,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8497,
                          "src": "8937:1:33",
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
                              "id": 8682,
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
                                    "id": 8674,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "arguments": [
                                        {
                                          "id": 8671,
                                          "name": "r",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8497,
                                          "src": "8974:1:33",
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
                                        "id": 8670,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "8966:7:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_uint256_$",
                                          "typeString": "type(uint256)"
                                        },
                                        "typeName": {
                                          "id": 8669,
                                          "name": "uint256",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "8966:7:33",
                                          "typeDescriptions": {}
                                        }
                                      },
                                      "id": 8672,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "8966:10:33",
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
                                      "id": 8673,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "8999:49:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_3822833074963236453042738258902158003155416615667_by_1",
                                        "typeString": "int_const 3822...(41 digits omitted)...5667"
                                      },
                                      "value": "3822833074963236453042738258902158003155416615667"
                                    },
                                    "src": "8966:82:33",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 8675,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "8965:84:33",
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
                                    "id": 8680,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "hexValue": "313935",
                                      "id": 8678,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "9081:3:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_195_by_1",
                                        "typeString": "int_const 195"
                                      },
                                      "value": "195"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "id": 8679,
                                      "name": "k",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 8527,
                                      "src": "9087:1:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "src": "9081:7:33",
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
                                  "id": 8677,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "9073:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 8676,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "9073:7:33",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 8681,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "9073:16:33",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "8965:124:33",
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
                            "id": 8668,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "8941:6:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": {
                              "id": 8667,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "8941:6:33",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 8683,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "8941:162:33",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "8937:166:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8685,
                      "nodeType": "ExpressionStatement",
                      "src": "8937:166:33"
                    }
                  ]
                }
              ]
            },
            "documentation": {
              "id": 8492,
              "nodeType": "StructuredDocumentation",
              "src": "5523:245:33",
              "text": "@dev Computes e^x in 1e18 fixed point.\n @dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SignedWadMath.sol)\n @param x Fixed point number in 1e18 format.\n @return r The result of e^x."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "exp",
            "nameLocation": "5782:3:33",
            "parameters": {
              "id": 8495,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8494,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "5793:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8688,
                  "src": "5786:8:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8493,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5786:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5785:10:33"
            },
            "returnParameters": {
              "id": 8498,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8497,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "5826:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8688,
                  "src": "5819:8:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8496,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5819:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5818:10:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8710,
            "nodeType": "FunctionDefinition",
            "src": "9412:160:33",
            "nodes": [],
            "body": {
              "id": 8709,
              "nodeType": "Block",
              "src": "9465:107:33",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 8698,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 8696,
                      "name": "x",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8691,
                      "src": "9479:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 8697,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9484:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9479:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 8704,
                  "nodeType": "IfStatement",
                  "src": "9475:67:33",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 8699,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 7431,
                          "src": "9494:11:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 8701,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9506:34:33",
                        "memberName": "FixedPointMath_NegativeOrZeroInput",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7420,
                        "src": "9494:46:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 8702,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9494:48:33",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 8703,
                    "nodeType": "RevertStatement",
                    "src": "9487:55:33"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 8706,
                        "name": "x",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8691,
                        "src": "9563:1:33",
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
                      "id": 8705,
                      "name": "_ln",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8930,
                      "src": "9559:3:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$",
                        "typeString": "function (int256) pure returns (int256)"
                      }
                    },
                    "id": 8707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9559:6:33",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 8695,
                  "id": 8708,
                  "nodeType": "Return",
                  "src": "9552:13:33"
                }
              ]
            },
            "documentation": {
              "id": 8689,
              "nodeType": "StructuredDocumentation",
              "src": "9126:281:33",
              "text": "@dev Computes ln(x) in 1e18 fixed point.\n @dev Reverts if x is negative\n @dev Credit to Solmate (https://github.com/transmissions11/solmate/blob/main/src/utils/SignedWadMath.sol)\n @param x Fixed point number in 1e18 format.\n @return Result of ln(x)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ln",
            "nameLocation": "9421:2:33",
            "parameters": {
              "id": 8692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8691,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9431:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8710,
                  "src": "9424:8:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8690,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9424:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9423:10:33"
            },
            "returnParameters": {
              "id": 8695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8694,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8710,
                  "src": "9457:6:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8693,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9457:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9456:8:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 8930,
            "nodeType": "FunctionDefinition",
            "src": "9632:3592:33",
            "nodes": [],
            "body": {
              "id": 8929,
              "nodeType": "Block",
              "src": "9687:3537:33",
              "nodes": [],
              "statements": [
                {
                  "id": 8928,
                  "nodeType": "UncheckedBlock",
                  "src": "9697:3521:33",
                  "statements": [
                    {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8719,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8717,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8712,
                          "src": "9725:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 8718,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "9730:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "9725:6:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "id": 8725,
                      "nodeType": "IfStatement",
                      "src": "9721:60:33",
                      "trueBody": {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 8720,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "9740:11:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 8722,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9752:27:33",
                            "memberName": "FixedPointMath_InvalidInput",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7418,
                            "src": "9740:39:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 8723,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9740:41:33",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 8724,
                        "nodeType": "RevertStatement",
                        "src": "9733:48:33"
                      }
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "10131:489:33",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "10149:54:33",
                            "value": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10158:1:33",
                                  "type": "",
                                  "value": "7"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10164:34:33",
                                      "type": "",
                                      "value": "0xffffffffffffffffffffffffffffffff"
                                    },
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "10200:1:33"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nodeType": "YulIdentifier",
                                    "src": "10161:2:33"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10161:41:33"
                                }
                              ],
                              "functionName": {
                                "name": "shl",
                                "nodeType": "YulIdentifier",
                                "src": "10154:3:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10154:49:33"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10149:1:33"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10220:53:33",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10228:1:33"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10235:1:33",
                                      "type": "",
                                      "value": "6"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10241:18:33",
                                          "type": "",
                                          "value": "0xffffffffffffffff"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10265:1:33"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10268:1:33"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10261:3:33"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10261:9:33"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10238:2:33"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10238:33:33"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10231:3:33"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10231:41:33"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10225:2:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10225:48:33"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10220:1:33"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10290:45:33",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10298:1:33"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10305:1:33",
                                      "type": "",
                                      "value": "5"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10311:10:33",
                                          "type": "",
                                          "value": "0xffffffff"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10327:1:33"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10330:1:33"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10323:3:33"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10323:9:33"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10308:2:33"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10308:25:33"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10301:3:33"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10301:33:33"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10295:2:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10295:40:33"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10290:1:33"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10352:41:33",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10360:1:33"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10367:1:33",
                                      "type": "",
                                      "value": "4"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10373:6:33",
                                          "type": "",
                                          "value": "0xffff"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10385:1:33"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10388:1:33"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10381:3:33"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10381:9:33"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10370:2:33"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10370:21:33"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10363:3:33"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10363:29:33"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10357:2:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10357:36:33"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10352:1:33"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10410:39:33",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10418:1:33"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10425:1:33",
                                      "type": "",
                                      "value": "3"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10431:4:33",
                                          "type": "",
                                          "value": "0xff"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10441:1:33"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10444:1:33"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10437:3:33"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10437:9:33"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10428:2:33"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10428:19:33"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10421:3:33"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10421:27:33"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10415:2:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10415:34:33"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10410:1:33"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10466:38:33",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10474:1:33"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10481:1:33",
                                      "type": "",
                                      "value": "2"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10487:3:33",
                                          "type": "",
                                          "value": "0xf"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10496:1:33"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10499:1:33"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10492:3:33"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10492:9:33"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10484:2:33"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10484:18:33"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10477:3:33"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10477:26:33"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10471:2:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10471:33:33"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10466:1:33"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10521:38:33",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10529:1:33"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10536:1:33",
                                      "type": "",
                                      "value": "1"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "10542:3:33",
                                          "type": "",
                                          "value": "0x3"
                                        },
                                        {
                                          "arguments": [
                                            {
                                              "name": "r",
                                              "nodeType": "YulIdentifier",
                                              "src": "10551:1:33"
                                            },
                                            {
                                              "name": "x",
                                              "nodeType": "YulIdentifier",
                                              "src": "10554:1:33"
                                            }
                                          ],
                                          "functionName": {
                                            "name": "shr",
                                            "nodeType": "YulIdentifier",
                                            "src": "10547:3:33"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "10547:9:33"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "lt",
                                        "nodeType": "YulIdentifier",
                                        "src": "10539:2:33"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10539:18:33"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "shl",
                                    "nodeType": "YulIdentifier",
                                    "src": "10532:3:33"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10532:26:33"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10526:2:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10526:33:33"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10521:1:33"
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "10576:30:33",
                            "value": {
                              "arguments": [
                                {
                                  "name": "r",
                                  "nodeType": "YulIdentifier",
                                  "src": "10584:1:33"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "10590:3:33",
                                      "type": "",
                                      "value": "0x1"
                                    },
                                    {
                                      "arguments": [
                                        {
                                          "name": "r",
                                          "nodeType": "YulIdentifier",
                                          "src": "10599:1:33"
                                        },
                                        {
                                          "name": "x",
                                          "nodeType": "YulIdentifier",
                                          "src": "10602:1:33"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "shr",
                                        "nodeType": "YulIdentifier",
                                        "src": "10595:3:33"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "10595:9:33"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nodeType": "YulIdentifier",
                                    "src": "10587:2:33"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "10587:18:33"
                                }
                              ],
                              "functionName": {
                                "name": "or",
                                "nodeType": "YulIdentifier",
                                "src": "10581:2:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10581:25:33"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "10576:1:33"
                              }
                            ]
                          }
                        ]
                      },
                      "documentation": "@solidity memory-safe-assembly",
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10149:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10220:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10228:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10265:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10290:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10298:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10327:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10352:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10360:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10385:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10410:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10418:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10441:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10466:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10474:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10496:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10521:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10529:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10551:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10576:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10584:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10599:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8712,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10200:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8712,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10268:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8712,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10330:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8712,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10388:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8712,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10444:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8712,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10499:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8712,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10554:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8712,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "10602:1:33",
                          "valueSize": 1
                        }
                      ],
                      "id": 8726,
                      "nodeType": "InlineAssembly",
                      "src": "10122:498:33"
                    },
                    {
                      "assignments": [
                        8728
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 8728,
                          "mutability": "mutable",
                          "name": "k",
                          "nameLocation": "10739:1:33",
                          "nodeType": "VariableDeclaration",
                          "scope": 8928,
                          "src": "10732:8:33",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 8727,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10732:6:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 8732,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8731,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8729,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8715,
                          "src": "10743:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "hexValue": "3936",
                          "id": 8730,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "10747:2:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_96_by_1",
                            "typeString": "int_const 96"
                          },
                          "value": "96"
                        },
                        "src": "10743:6:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "10732:17:33"
                    },
                    {
                      "expression": {
                        "id": 8740,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8733,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8712,
                          "src": "10763:1:33",
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
                              "id": 8738,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "hexValue": "313539",
                                "id": 8736,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10777:3:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_159_by_1",
                                  "typeString": "int_const 159"
                                },
                                "value": "159"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 8737,
                                "name": "k",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8728,
                                "src": "10783:1:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              },
                              "src": "10777:7:33",
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
                            "id": 8735,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10769:7:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_uint256_$",
                              "typeString": "type(uint256)"
                            },
                            "typeName": {
                              "id": 8734,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "10769:7:33",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 8739,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10769:16:33",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "10763:22:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8741,
                      "nodeType": "ExpressionStatement",
                      "src": "10763:22:33"
                    },
                    {
                      "expression": {
                        "id": 8752,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8742,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8712,
                          "src": "10799:1:33",
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
                              "id": 8750,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [
                                  {
                                    "id": 8747,
                                    "name": "x",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 8712,
                                    "src": "10818:1:33",
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
                                  "id": 8746,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "10810:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 8745,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "10810:7:33",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 8748,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "10810:10:33",
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
                                "id": 8749,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "10824:3:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_159_by_1",
                                  "typeString": "int_const 159"
                                },
                                "value": "159"
                              },
                              "src": "10810:17:33",
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
                            "id": 8744,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "10803:6:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int256_$",
                              "typeString": "type(int256)"
                            },
                            "typeName": {
                              "id": 8743,
                              "name": "int256",
                              "nodeType": "ElementaryTypeName",
                              "src": "10803:6:33",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 8751,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "10803:25:33",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "10799:29:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8753,
                      "nodeType": "ExpressionStatement",
                      "src": "10799:29:33"
                    },
                    {
                      "assignments": [
                        8755
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 8755,
                          "mutability": "mutable",
                          "name": "p",
                          "nameLocation": "10992:1:33",
                          "nodeType": "VariableDeclaration",
                          "scope": 8928,
                          "src": "10985:8:33",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 8754,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "10985:6:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 8759,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8758,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8756,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8712,
                          "src": "10996:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "33323733323835343539363338353233383438363332323534303636323936",
                          "id": 8757,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11000:31:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3273285459638523848632254066296_by_1",
                            "typeString": "int_const 3273285459638523848632254066296"
                          },
                          "value": "3273285459638523848632254066296"
                        },
                        "src": "10996:35:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "10985:46:33"
                    },
                    {
                      "expression": {
                        "id": 8770,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8760,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8755,
                          "src": "11045:1:33",
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
                          "id": 8769,
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
                                "id": 8766,
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
                                      "id": 8763,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8761,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8755,
                                        "src": "11051:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8762,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8712,
                                        "src": "11055:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11051:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8764,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11050:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8765,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11061:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11050:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8767,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11049:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3234383238313537303831383333313633383932363538303839343435353234",
                            "id": 8768,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11067:32:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_24828157081833163892658089445524_by_1",
                              "typeString": "int_const 24828157081833163892658089445524"
                            },
                            "value": "24828157081833163892658089445524"
                          },
                          "src": "11049:50:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11045:54:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8771,
                      "nodeType": "ExpressionStatement",
                      "src": "11045:54:33"
                    },
                    {
                      "expression": {
                        "id": 8782,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8772,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8755,
                          "src": "11113:1:33",
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
                          "id": 8781,
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
                                "id": 8778,
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
                                      "id": 8775,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8773,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8755,
                                        "src": "11119:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8774,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8712,
                                        "src": "11123:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11119:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8776,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11118:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8777,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11129:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11118:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8779,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11117:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3433343536343835373235373339303337393538373430333735373433333933",
                            "id": 8780,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11135:32:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_43456485725739037958740375743393_by_1",
                              "typeString": "int_const 43456485725739037958740375743393"
                            },
                            "value": "43456485725739037958740375743393"
                          },
                          "src": "11117:50:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11113:54:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8783,
                      "nodeType": "ExpressionStatement",
                      "src": "11113:54:33"
                    },
                    {
                      "expression": {
                        "id": 8794,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8784,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8755,
                          "src": "11181:1:33",
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
                          "id": 8793,
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
                                "id": 8790,
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
                                      "id": 8787,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8785,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8755,
                                        "src": "11187:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8786,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8712,
                                        "src": "11191:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11187:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8788,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11186:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8789,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11197:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11186:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8791,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11185:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "3131313131353039313039343430393637303532303233383535353236393637",
                            "id": 8792,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11203:32:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_11111509109440967052023855526967_by_1",
                              "typeString": "int_const 11111509109440967052023855526967"
                            },
                            "value": "11111509109440967052023855526967"
                          },
                          "src": "11185:50:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11181:54:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8795,
                      "nodeType": "ExpressionStatement",
                      "src": "11181:54:33"
                    },
                    {
                      "expression": {
                        "id": 8806,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8796,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8755,
                          "src": "11249:1:33",
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
                          "id": 8805,
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
                                "id": 8802,
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
                                      "id": 8799,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8797,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8755,
                                        "src": "11255:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8798,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8712,
                                        "src": "11259:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11255:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8800,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11254:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8801,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11265:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11254:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8803,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11253:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "3435303233373039363637323534303633373633333336353334353135383537",
                            "id": 8804,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11271:32:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_45023709667254063763336534515857_by_1",
                              "typeString": "int_const 45023709667254063763336534515857"
                            },
                            "value": "45023709667254063763336534515857"
                          },
                          "src": "11253:50:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11249:54:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8807,
                      "nodeType": "ExpressionStatement",
                      "src": "11249:54:33"
                    },
                    {
                      "expression": {
                        "id": 8818,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8808,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8755,
                          "src": "11317:1:33",
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
                          "id": 8817,
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
                                "id": 8814,
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
                                      "id": 8811,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8809,
                                        "name": "p",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8755,
                                        "src": "11323:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8810,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8712,
                                        "src": "11327:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11323:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8812,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11322:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8813,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11333:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11322:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8815,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11321:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "hexValue": "3134373036373733343137333738363038373836373034363336313834353236",
                            "id": 8816,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11339:32:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_14706773417378608786704636184526_by_1",
                              "typeString": "int_const 14706773417378608786704636184526"
                            },
                            "value": "14706773417378608786704636184526"
                          },
                          "src": "11321:50:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11317:54:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8819,
                      "nodeType": "ExpressionStatement",
                      "src": "11317:54:33"
                    },
                    {
                      "expression": {
                        "id": 8829,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8820,
                          "name": "p",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8755,
                          "src": "11385:1:33",
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
                          "id": 8828,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 8823,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 8821,
                              "name": "p",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8755,
                              "src": "11389:1:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "id": 8822,
                              "name": "x",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8712,
                              "src": "11393:1:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "11389:5:33",
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
                                "id": 8826,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "hexValue": "373935313634323335363531333530343236323538323439373837343938",
                                  "id": 8824,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11398:30:33",
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
                                  "id": 8825,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11432:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11398:36:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_62999401287715976015676079709131874438408901006995465699328_by_1",
                                  "typeString": "int_const 6299...(51 digits omitted)...9328"
                                }
                              }
                            ],
                            "id": 8827,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11397:38:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_62999401287715976015676079709131874438408901006995465699328_by_1",
                              "typeString": "int_const 6299...(51 digits omitted)...9328"
                            }
                          },
                          "src": "11389:46:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11385:50:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8830,
                      "nodeType": "ExpressionStatement",
                      "src": "11385:50:33"
                    },
                    {
                      "assignments": [
                        8832
                      ],
                      "declarations": [
                        {
                          "constant": false,
                          "id": 8832,
                          "mutability": "mutable",
                          "name": "q",
                          "nameLocation": "11595:1:33",
                          "nodeType": "VariableDeclaration",
                          "scope": 8928,
                          "src": "11588:8:33",
                          "stateVariable": false,
                          "storageLocation": "default",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          },
                          "typeName": {
                            "id": 8831,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "11588:6:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "visibility": "internal"
                        }
                      ],
                      "id": 8836,
                      "initialValue": {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 8835,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 8833,
                          "name": "x",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8712,
                          "src": "11599:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "35353733303335323333343430363733343636333030343531383133393336",
                          "id": 8834,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "11603:31:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_5573035233440673466300451813936_by_1",
                            "typeString": "int_const 5573035233440673466300451813936"
                          },
                          "value": "5573035233440673466300451813936"
                        },
                        "src": "11599:35:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "VariableDeclarationStatement",
                      "src": "11588:46:33"
                    },
                    {
                      "expression": {
                        "id": 8847,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8837,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8832,
                          "src": "11648:1:33",
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
                          "id": 8846,
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
                                "id": 8843,
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
                                      "id": 8840,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8838,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8832,
                                        "src": "11654:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8839,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8712,
                                        "src": "11658:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11654:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8841,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11653:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8842,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11664:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11653:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8844,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11652:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3731363934383734373939333137383833373634303930353631343534393538",
                            "id": 8845,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11670:32:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_71694874799317883764090561454958_by_1",
                              "typeString": "int_const 71694874799317883764090561454958"
                            },
                            "value": "71694874799317883764090561454958"
                          },
                          "src": "11652:50:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11648:54:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8848,
                      "nodeType": "ExpressionStatement",
                      "src": "11648:54:33"
                    },
                    {
                      "expression": {
                        "id": 8859,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8849,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8832,
                          "src": "11716:1:33",
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
                          "id": 8858,
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
                                "id": 8855,
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
                                      "id": 8852,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8850,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8832,
                                        "src": "11722:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8851,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8712,
                                        "src": "11726:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11722:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8853,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11721:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8854,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11732:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11721:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8856,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11720:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "323833343437303336313732393234353735373237313936343531333036393536",
                            "id": 8857,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11738:33:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_283447036172924575727196451306956_by_1",
                              "typeString": "int_const 2834...(25 digits omitted)...6956"
                            },
                            "value": "283447036172924575727196451306956"
                          },
                          "src": "11720:51:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11716:55:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8860,
                      "nodeType": "ExpressionStatement",
                      "src": "11716:55:33"
                    },
                    {
                      "expression": {
                        "id": 8871,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8861,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8832,
                          "src": "11785:1:33",
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
                          "id": 8870,
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
                                "id": 8867,
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
                                      "id": 8864,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8862,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8832,
                                        "src": "11791:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8863,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8712,
                                        "src": "11795:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11791:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8865,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11790:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8866,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11801:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11790:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8868,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11789:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "343031363836363930333934303237363633363531363234323038373639353533",
                            "id": 8869,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11807:33:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_401686690394027663651624208769553_by_1",
                              "typeString": "int_const 4016...(25 digits omitted)...9553"
                            },
                            "value": "401686690394027663651624208769553"
                          },
                          "src": "11789:51:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11785:55:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8872,
                      "nodeType": "ExpressionStatement",
                      "src": "11785:55:33"
                    },
                    {
                      "expression": {
                        "id": 8883,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8873,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8832,
                          "src": "11854:1:33",
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
                          "id": 8882,
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
                                "id": 8879,
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
                                      "id": 8876,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8874,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8832,
                                        "src": "11860:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8875,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8712,
                                        "src": "11864:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11860:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8877,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11859:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8878,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11870:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11859:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8880,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11858:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "323034303438343537353930333932303132333632343835303631383136363232",
                            "id": 8881,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11876:33:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_204048457590392012362485061816622_by_1",
                              "typeString": "int_const 2040...(25 digits omitted)...6622"
                            },
                            "value": "204048457590392012362485061816622"
                          },
                          "src": "11858:51:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11854:55:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8884,
                      "nodeType": "ExpressionStatement",
                      "src": "11854:55:33"
                    },
                    {
                      "expression": {
                        "id": 8895,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8885,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8832,
                          "src": "11923:1:33",
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
                          "id": 8894,
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
                                "id": 8891,
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
                                      "id": 8888,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8886,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8832,
                                        "src": "11929:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8887,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8712,
                                        "src": "11933:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11929:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8889,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11928:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8890,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "11939:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11928:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8892,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11927:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "3331383533383939363938353031353731343032363533333539343237313338",
                            "id": 8893,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "11945:32:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_31853899698501571402653359427138_by_1",
                              "typeString": "int_const 31853899698501571402653359427138"
                            },
                            "value": "31853899698501571402653359427138"
                          },
                          "src": "11927:50:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11923:54:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8896,
                      "nodeType": "ExpressionStatement",
                      "src": "11923:54:33"
                    },
                    {
                      "expression": {
                        "id": 8907,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8897,
                          "name": "q",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8832,
                          "src": "11991:1:33",
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
                          "id": 8906,
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
                                "id": 8903,
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
                                      "id": 8900,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 8898,
                                        "name": "q",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8832,
                                        "src": "11997:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "*",
                                      "rightExpression": {
                                        "id": 8899,
                                        "name": "x",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8712,
                                        "src": "12001:1:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      },
                                      "src": "11997:5:33",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    }
                                  ],
                                  "id": 8901,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "11996:7:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "hexValue": "3936",
                                  "id": 8902,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "12007:2:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_96_by_1",
                                    "typeString": "int_const 96"
                                  },
                                  "value": "96"
                                },
                                "src": "11996:13:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_int256",
                                  "typeString": "int256"
                                }
                              }
                            ],
                            "id": 8904,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "11995:15:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "+",
                          "rightExpression": {
                            "hexValue": "393039343239393731323434333837333030323737333736353538333735",
                            "id": 8905,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12013:30:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_909429971244387300277376558375_by_1",
                              "typeString": "int_const 909429971244387300277376558375"
                            },
                            "value": "909429971244387300277376558375"
                          },
                          "src": "11995:48:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "11991:52:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8908,
                      "nodeType": "ExpressionStatement",
                      "src": "11991:52:33"
                    },
                    {
                      "AST": {
                        "nodeType": "YulBlock",
                        "src": "12113:295:33",
                        "statements": [
                          {
                            "nodeType": "YulAssignment",
                            "src": "12379:15:33",
                            "value": {
                              "arguments": [
                                {
                                  "name": "p",
                                  "nodeType": "YulIdentifier",
                                  "src": "12389:1:33"
                                },
                                {
                                  "name": "q",
                                  "nodeType": "YulIdentifier",
                                  "src": "12392:1:33"
                                }
                              ],
                              "functionName": {
                                "name": "sdiv",
                                "nodeType": "YulIdentifier",
                                "src": "12384:4:33"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12384:10:33"
                            },
                            "variableNames": [
                              {
                                "name": "r",
                                "nodeType": "YulIdentifier",
                                "src": "12379:1:33"
                              }
                            ]
                          }
                        ]
                      },
                      "documentation": "@solidity memory-safe-assembly",
                      "evmVersion": "paris",
                      "externalReferences": [
                        {
                          "declaration": 8755,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "12389:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8832,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "12392:1:33",
                          "valueSize": 1
                        },
                        {
                          "declaration": 8715,
                          "isOffset": false,
                          "isSlot": false,
                          "src": "12379:1:33",
                          "valueSize": 1
                        }
                      ],
                      "id": 8909,
                      "nodeType": "InlineAssembly",
                      "src": "12104:304:33"
                    },
                    {
                      "expression": {
                        "id": 8912,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8910,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8715,
                          "src": "12769:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "*=",
                        "rightHandSide": {
                          "hexValue": "31363737323032313130393936373138353838333432383230393637303637343433393633353136313636",
                          "id": 8911,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "12774:43:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1677202110996718588342820967067443963516166_by_1",
                            "typeString": "int_const 1677...(35 digits omitted)...6166"
                          },
                          "value": "1677202110996718588342820967067443963516166"
                        },
                        "src": "12769:48:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8913,
                      "nodeType": "ExpressionStatement",
                      "src": "12769:48:33"
                    },
                    {
                      "expression": {
                        "id": 8918,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8914,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8715,
                          "src": "12876:1:33",
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
                          "id": 8917,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "hexValue": "3136353937353737353532363835363134323231343837323835393538313933393437343639313933383230353539323139383738313737393038303933343939323038333731",
                            "id": 8915,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "12897:71:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_16597577552685614221487285958193947469193820559219878177908093499208371_by_1",
                              "typeString": "int_const 1659...(63 digits omitted)...8371"
                            },
                            "value": "16597577552685614221487285958193947469193820559219878177908093499208371"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 8916,
                            "name": "k",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8728,
                            "src": "12987:1:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "12897:91:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "src": "12876:112:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8919,
                      "nodeType": "ExpressionStatement",
                      "src": "12876:112:33"
                    },
                    {
                      "expression": {
                        "id": 8922,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8920,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8715,
                          "src": "13056:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": "+=",
                        "rightHandSide": {
                          "hexValue": "363030393230313739383239373331383631373336373032373739333231363231343539353935343732323538303439303734313031353637333737383833303230303138333038",
                          "id": 8921,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13061:72:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_600920179829731861736702779321621459595472258049074101567377883020018308_by_1",
                            "typeString": "int_const 6009...(64 digits omitted)...8308"
                          },
                          "value": "600920179829731861736702779321621459595472258049074101567377883020018308"
                        },
                        "src": "13056:77:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8923,
                      "nodeType": "ExpressionStatement",
                      "src": "13056:77:33"
                    },
                    {
                      "expression": {
                        "id": 8926,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftHandSide": {
                          "id": 8924,
                          "name": "r",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8715,
                          "src": "13198:1:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "Assignment",
                        "operator": ">>=",
                        "rightHandSide": {
                          "hexValue": "313734",
                          "id": 8925,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "13204:3:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_174_by_1",
                            "typeString": "int_const 174"
                          },
                          "value": "174"
                        },
                        "src": "13198:9:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 8927,
                      "nodeType": "ExpressionStatement",
                      "src": "13198:9:33"
                    }
                  ]
                }
              ]
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_ln",
            "nameLocation": "9641:3:33",
            "parameters": {
              "id": 8713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8712,
                  "mutability": "mutable",
                  "name": "x",
                  "nameLocation": "9652:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8930,
                  "src": "9645:8:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8711,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9645:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9644:10:33"
            },
            "returnParameters": {
              "id": 8716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8715,
                  "mutability": "mutable",
                  "name": "r",
                  "nameLocation": "9684:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8930,
                  "src": "9677:8:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8714,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9677:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9676:10:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "id": 8993,
            "nodeType": "FunctionDefinition",
            "src": "13582:678:33",
            "nodes": [],
            "body": {
              "id": 8992,
              "nodeType": "Block",
              "src": "13793:467:33",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "id": 8946,
                    "name": "_isAdding",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 8941,
                    "src": "13807:9:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 8990,
                    "nodeType": "Block",
                    "src": "14011:243:33",
                    "statements": [
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 8968,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 8966,
                            "name": "_totalWeight",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8935,
                            "src": "14029:12:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "id": 8967,
                            "name": "_deltaWeight",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8939,
                            "src": "14045:12:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14029:28:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 8971,
                        "nodeType": "IfStatement",
                        "src": "14025:42:33",
                        "trueBody": {
                          "expression": {
                            "hexValue": "30",
                            "id": 8969,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "14066:1:33",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "functionReturnParameters": 8945,
                          "id": 8970,
                          "nodeType": "Return",
                          "src": "14059:8:33"
                        }
                      },
                      {
                        "expression": {
                          "id": 8988,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 8972,
                            "name": "average",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8944,
                            "src": "14081:7:33",
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
                                "id": 8986,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 8984,
                                  "name": "_totalWeight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8935,
                                  "src": "14198:12:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 8985,
                                  "name": "_deltaWeight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8939,
                                  "src": "14213:12:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "14198:27:33",
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
                                    "id": 8981,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "arguments": [
                                        {
                                          "id": 8975,
                                          "name": "_average",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8933,
                                          "src": "14113:8:33",
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
                                          "id": 8973,
                                          "name": "_totalWeight",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8935,
                                          "src": "14092:12:33",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "id": 8974,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "14105:7:33",
                                        "memberName": "mulDown",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 8364,
                                        "src": "14092:20:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      "id": 8976,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "14092:30:33",
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
                                          "id": 8979,
                                          "name": "_delta",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8937,
                                          "src": "14162:6:33",
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
                                          "id": 8977,
                                          "name": "_deltaWeight",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8939,
                                          "src": "14141:12:33",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "id": 8978,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "14154:7:33",
                                        "memberName": "mulDown",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 8364,
                                        "src": "14141:20:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      "id": 8980,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "14141:28:33",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "14092:77:33",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 8982,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "14091:79:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 8983,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "14171:5:33",
                              "memberName": "divUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8432,
                              "src": "14091:85:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 8987,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14091:152:33",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14081:162:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 8989,
                        "nodeType": "ExpressionStatement",
                        "src": "14081:162:33"
                      }
                    ]
                  },
                  "id": 8991,
                  "nodeType": "IfStatement",
                  "src": "13803:451:33",
                  "trueBody": {
                    "id": 8965,
                    "nodeType": "Block",
                    "src": "13818:187:33",
                    "statements": [
                      {
                        "expression": {
                          "id": 8963,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 8947,
                            "name": "average",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8944,
                            "src": "13832:7:33",
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
                                "id": 8961,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 8959,
                                  "name": "_totalWeight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8935,
                                  "src": "13949:12:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "+",
                                "rightExpression": {
                                  "id": 8960,
                                  "name": "_deltaWeight",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8939,
                                  "src": "13964:12:33",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "13949:27:33",
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
                                    "id": 8956,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "arguments": [
                                        {
                                          "id": 8950,
                                          "name": "_average",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8933,
                                          "src": "13864:8:33",
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
                                          "id": 8948,
                                          "name": "_totalWeight",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8935,
                                          "src": "13843:12:33",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "id": 8949,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "13856:7:33",
                                        "memberName": "mulDown",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 8364,
                                        "src": "13843:20:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      "id": 8951,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "13843:30:33",
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
                                          "id": 8954,
                                          "name": "_delta",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8937,
                                          "src": "13913:6:33",
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
                                          "id": 8952,
                                          "name": "_deltaWeight",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8939,
                                          "src": "13892:12:33",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "id": 8953,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "13905:7:33",
                                        "memberName": "mulDown",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 8364,
                                        "src": "13892:20:33",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                                        }
                                      },
                                      "id": 8955,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "13892:28:33",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "src": "13843:77:33",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "id": 8957,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "13842:79:33",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 8958,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "13922:5:33",
                              "memberName": "divUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8432,
                              "src": "13842:85:33",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 8962,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "13842:152:33",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "13832:162:33",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 8964,
                        "nodeType": "ExpressionStatement",
                        "src": "13832:162:33"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 8931,
              "nodeType": "StructuredDocumentation",
              "src": "13230:347:33",
              "text": "@dev Updates a weighted average by adding or removing a weighted delta.\n @param _totalWeight The total weight before the update.\n @param _deltaWeight The weight of the new value.\n @param _average The weighted average before the update.\n @param _delta The new value.\n @return average The new weighted average."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "updateWeightedAverage",
            "nameLocation": "13591:21:33",
            "parameters": {
              "id": 8942,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8933,
                  "mutability": "mutable",
                  "name": "_average",
                  "nameLocation": "13630:8:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8993,
                  "src": "13622:16:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8932,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13622:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8935,
                  "mutability": "mutable",
                  "name": "_totalWeight",
                  "nameLocation": "13656:12:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8993,
                  "src": "13648:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8934,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13648:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8937,
                  "mutability": "mutable",
                  "name": "_delta",
                  "nameLocation": "13686:6:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8993,
                  "src": "13678:14:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8936,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13678:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8939,
                  "mutability": "mutable",
                  "name": "_deltaWeight",
                  "nameLocation": "13710:12:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8993,
                  "src": "13702:20:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8938,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13702:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8941,
                  "mutability": "mutable",
                  "name": "_isAdding",
                  "nameLocation": "13737:9:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8993,
                  "src": "13732:14:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8940,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "13732:4:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13612:140:33"
            },
            "returnParameters": {
              "id": 8945,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8944,
                  "mutability": "mutable",
                  "name": "average",
                  "nameLocation": "13784:7:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 8993,
                  "src": "13776:15:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8943,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13776:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13775:17:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9011,
            "nodeType": "FunctionDefinition",
            "src": "14433:104:33",
            "nodes": [],
            "body": {
              "id": 9010,
              "nodeType": "Block",
              "src": "14500:37:33",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9005,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 9003,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8996,
                        "src": "14517:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 9004,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8998,
                        "src": "14521:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "14517:5:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 9007,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8996,
                      "src": "14529:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 9008,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "14517:13:33",
                    "trueExpression": {
                      "id": 9006,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8998,
                      "src": "14525:1:33",
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
                  "functionReturnParameters": 9002,
                  "id": 9009,
                  "nodeType": "Return",
                  "src": "14510:20:33"
                }
              ]
            },
            "documentation": {
              "id": 8994,
              "nodeType": "StructuredDocumentation",
              "src": "14266:162:33",
              "text": "@dev Calculates the minimum of two values.\n @param a The first value.\n @param b The second value.\n @return The minimum of the two values."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "min",
            "nameLocation": "14442:3:33",
            "parameters": {
              "id": 8999,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8996,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "14454:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9011,
                  "src": "14446:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8995,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14446:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8998,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "14465:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9011,
                  "src": "14457:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8997,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14457:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14445:22:33"
            },
            "returnParameters": {
              "id": 9002,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9001,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9011,
                  "src": "14491:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9000,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14491:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14490:9:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9029,
            "nodeType": "FunctionDefinition",
            "src": "14710:104:33",
            "nodes": [],
            "body": {
              "id": 9028,
              "nodeType": "Block",
              "src": "14777:37:33",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9023,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 9021,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9014,
                        "src": "14794:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 9022,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9016,
                        "src": "14798:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "14794:5:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 9025,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9016,
                      "src": "14806:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 9026,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "14794:13:33",
                    "trueExpression": {
                      "id": 9024,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9014,
                      "src": "14802:1:33",
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
                  "functionReturnParameters": 9020,
                  "id": 9027,
                  "nodeType": "Return",
                  "src": "14787:20:33"
                }
              ]
            },
            "documentation": {
              "id": 9012,
              "nodeType": "StructuredDocumentation",
              "src": "14543:162:33",
              "text": "@dev Calculates the maximum of two values.\n @param a The first value.\n @param b The second value.\n @return The maximum of the two values."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "max",
            "nameLocation": "14719:3:33",
            "parameters": {
              "id": 9017,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9014,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "14731:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9029,
                  "src": "14723:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9013,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14723:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9016,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "14742:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9029,
                  "src": "14734:9:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9015,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14734:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14722:22:33"
            },
            "returnParameters": {
              "id": 9020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9019,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9029,
                  "src": "14768:7:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9018,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14768:7:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14767:9:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9047,
            "nodeType": "FunctionDefinition",
            "src": "14987:101:33",
            "nodes": [],
            "body": {
              "id": 9046,
              "nodeType": "Block",
              "src": "15051:37:33",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 9041,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 9039,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9032,
                        "src": "15068:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 9040,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9034,
                        "src": "15072:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "15068:5:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 9043,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9032,
                      "src": "15080:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 9044,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "15068:13:33",
                    "trueExpression": {
                      "id": 9042,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9034,
                      "src": "15076:1:33",
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
                  "functionReturnParameters": 9038,
                  "id": 9045,
                  "nodeType": "Return",
                  "src": "15061:20:33"
                }
              ]
            },
            "documentation": {
              "id": 9030,
              "nodeType": "StructuredDocumentation",
              "src": "14820:162:33",
              "text": "@dev Calculates the minimum of two values.\n @param a The first value.\n @param b The second value.\n @return The minimum of the two values."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "min",
            "nameLocation": "14996:3:33",
            "parameters": {
              "id": 9035,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9032,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "15007:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9047,
                  "src": "15000:8:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9031,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15000:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9034,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "15017:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9047,
                  "src": "15010:8:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9033,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15010:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14999:20:33"
            },
            "returnParameters": {
              "id": 9038,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9037,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9047,
                  "src": "15043:6:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9036,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15043:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15042:8:33"
            },
            "scope": 9066,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9065,
            "nodeType": "FunctionDefinition",
            "src": "15261:101:33",
            "nodes": [],
            "body": {
              "id": 9064,
              "nodeType": "Block",
              "src": "15325:37:33",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 9059,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 9057,
                        "name": "a",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9050,
                        "src": "15342:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 9058,
                        "name": "b",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9052,
                        "src": "15346:1:33",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "src": "15342:5:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "id": 9061,
                      "name": "b",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9052,
                      "src": "15354:1:33",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 9062,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "15342:13:33",
                    "trueExpression": {
                      "id": 9060,
                      "name": "a",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9050,
                      "src": "15350:1:33",
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
                  "functionReturnParameters": 9056,
                  "id": 9063,
                  "nodeType": "Return",
                  "src": "15335:20:33"
                }
              ]
            },
            "documentation": {
              "id": 9048,
              "nodeType": "StructuredDocumentation",
              "src": "15094:162:33",
              "text": "@dev Calculates the maximum of two values.\n @param a The first value.\n @param b The second value.\n @return The maximum of the two values."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "max",
            "nameLocation": "15270:3:33",
            "parameters": {
              "id": 9053,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9050,
                  "mutability": "mutable",
                  "name": "a",
                  "nameLocation": "15281:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9065,
                  "src": "15274:8:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9049,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15274:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9052,
                  "mutability": "mutable",
                  "name": "b",
                  "nameLocation": "15291:1:33",
                  "nodeType": "VariableDeclaration",
                  "scope": 9065,
                  "src": "15284:8:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9051,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15284:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15273:20:33"
            },
            "returnParameters": {
              "id": 9056,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9055,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9065,
                  "src": "15317:6:33",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9054,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "15317:6:33",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "15316:8:33"
            },
            "scope": 9066,
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
          "id": 8319,
          "nodeType": "StructuredDocumentation",
          "src": "157:307:33",
          "text": "@author DELV\n @title FixedPointMath\n @notice A fixed-point math library.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          9066
        ],
        "name": "FixedPointMath",
        "nameLocation": "472:14:33",
        "scope": 9067,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 33
} as const;
