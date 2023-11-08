export const HyperdriveMath = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e9179543be49d713b1ebd5676032a396d7c7cce1a9c745060dd122f0216b170a64736f6c63430008130033",
    "sourceMap": "599:29863:34:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;599:29863:34;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e9179543be49d713b1ebd5676032a396d7c7cce1a9c745060dd122f0216b170a64736f6c63430008130033",
    "sourceMap": "599:29863:34:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"Hyperdrive\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Math for the Hyperdrive pricing model.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/HyperdriveMath.sol\":\"HyperdriveMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@aave/=lib/aave-v3-core/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IDataProvider.sol\":{\"keccak256\":\"0xb5540e954a8d9311a4ddc94f1b1a893f419965c4059e5f64d3f966fa5d7bf843\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4322256d8ef1c32e16441b7be365169cbbfa72c6d952536ed0c2a4dab5befd15\",\"dweb:/ipfs/QmT1Zx7tHjgW52qb1e5C9KTjTbZaoniFxuyvZb3cWedUu7\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0x4642a027efffb3aa6cdc85e31796fb3b1bc4fff4316e6390874e6f4add37b86c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3720a6c1c427dcfcbdeeec15cbdb682115e44e0a9136af7e0ad9e5af2ea40672\",\"dweb:/ipfs/QmP4bmaHw8MfX9MQLhhgnVQ9U9BTQAR3e5cCCE9RcoeX7w\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x5f4ebd8ae035c05b0a1f3f740dba21a1414306796082b814bcaa2e190ab845b7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1353dab25f7e01c7169f602b7d013ff90c77fe36d62d382e179649a10ae41e78\",\"dweb:/ipfs/QmXQdQBcx6rKeVcoV5s7NG52DrqVvhBhgMNQwTxddAstE5\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IHyperdriveWrite.sol\":{\"keccak256\":\"0xd83e23e1894f3f4812d4812c5775c7a5267f3bfb80148b11f3ede3174ea936bc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ae5e91bb578ae9271426728ba69689ad659c6450853aa5ef0c52dd6d7c433206\",\"dweb:/ipfs/QmR5VU1UmZ8BN3azCs3zmHkCqJHzDKTUnVecdPjNQr8vYt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xe3d64871148bdae5a714107b8b1a55f39cd4ede601436d2777a165d20d768a1a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://9ebc0bfda35e9b7299c43f0efff38012b8074fcca867b781c0cedeede10cf3d0\",\"dweb:/ipfs/QmbHRLezFhWavHakK5G26DB4ud5PueU6fNvZf3L3TwXnPb\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xcdc60ba02194150741a78cb0c52c306f5f577c5c814c63e98a13d46c02d2d9cc\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f5866cb2c8c4342dba88c0e4d78296fef0e170b18b3613c796c29dc31a5ca87\",\"dweb:/ipfs/QmZcoDTYhhYSB5ds3cNPJpdZTxrz6cF8M2vNVeuAcT8gw6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x2e55fa961123a8bb7284c8388af9bd1302a7153441ffe641804ea79021bdca05\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c7dc03bbab02976609dec59c201e5b57a2998d1c626cef58d7a9fa7c2b06b939\",\"dweb:/ipfs/QmSifWr9cVWaUEmyKpGFcgpKCYdoBYgWtQBLgemtwo4a7x\"]},\"contracts/src/interfaces/IMultiTokenWrite.sol\":{\"keccak256\":\"0xa5ba8812e06fb6d38e1872603c8b80321cfd2f96cecbe7b67b92cb33e93b3fc8\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://73afa34919c7d457e925b4be83abb1b1ed2ed731a382ebffad95a3005c04bd5a\",\"dweb:/ipfs/QmauMxmgtYTS7RJQw1mS7Pwe5FUMDPHE2N1MBhFUjk6HPe\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0x0108762fdecfae06d7b8d76bb52b1a5757669cc2a4e5f3ad701499295ed635bd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a94cdbab2bdbb0212597f70cebea86fcf69be0702f6d6fe76571ee43992d7d6b\",\"dweb:/ipfs/QmXyncXgKixNzP7rgqoCA2dzehjPTAsEbtAKZGW6CQADFE\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6\",\"dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe\",\"dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x00c839ff53d07d19db2e7cfa1e5133f9ee90a8d64b0e2e57f50446a2d1a3a0e0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3dac621d015a68a5251b1e5d41dda0faf252699bf6e8bcf46a958b29964d9dd1\",\"dweb:/ipfs/QmP9axjgZv4cezAhALoTemM62sdLtMDJ9MGTxECnNwHgSJ\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x35e258421ae206f3db37281cea70871b4c3553914734aa76139a41af60ac1abb\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ef94b6bc4ee356db612a1849c615f7dd4b15542d6c8584c86bb9243a7913cf0\",\"dweb:/ipfs/QmaxFj5NFpAjjitZtHPNS9PPtCuBATaRz9ktDDRCQCQ83y\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x8a63ea9ec07788740e51046ca14c61f411aedb901e89749c9d55fa56ed43086a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://3035ae3f172ed9e172e1ba4d83bdc70279f63be51ce9218c530132def66ff577\",\"dweb:/ipfs/QmTQ3zfC3YUNeY3KUVFiHgTWDuxfmcEMgpGC6HMoTpgZJL\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xa6dfb97ce947b7c846b054ee7d45d12383359778f4f3743654ae0a34fa421b26\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b97e7e5a77ea47c08ba422291df887eba76c80982f52a6e94a30106e9377a94f\",\"dweb:/ipfs/Qme7N2XRC7mcDxB8wZxNWPk6T8S2qsnmhAqXeUj4CNvsGD\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [],
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
        "contracts/src/libraries/HyperdriveMath.sol": "HyperdriveMath"
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
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0xa425f4064f7e95fc5da7763b26627ef0be68db76763bde67cd54cfda489a19ed",
        "urls": [
          "bzz-raw://abc4b8f6f8c66a0d966b1dc366d689fc2844a60d866ed3f19cdd3852a0c274f6",
          "dweb:/ipfs/QmUSo1URvRru11TYPMGSdQR6FDRZk7SPh8tcze3T6XL4gL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f",
        "urls": [
          "bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5",
          "dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0xbd61fe3be6d0c8742f09a8174a5a2757e9070805b49d3fc7217f120b83c0ce0f",
        "urls": [
          "bzz-raw://5b6524a56a3062a3d9b47c2ad2712f90643a84971cd155f8f00fd31ef7a432fe",
          "dweb:/ipfs/QmXYtLBzjaVkh4WhTxTE1GEoqjcyidw1peyAenfAd5vPPr"
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
    "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
    "id": 9919,
    "exportedSymbols": {
      "FixedPointMath": [
        9066
      ],
      "HyperdriveMath": [
        9918
      ],
      "IHyperdrive": [
        7431
      ],
      "ONE": [
        8318
      ],
      "SafeCast": [
        9994
      ],
      "YieldSpaceMath": [
        10632
      ]
    },
    "nodeType": "SourceUnit",
    "src": "40:30423:34",
    "nodes": [
      {
        "id": 9068,
        "nodeType": "PragmaDirective",
        "src": "40:23:34",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 9070,
        "nodeType": "ImportDirective",
        "src": "65:60:34",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9919,
        "sourceUnit": 7432,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9069,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7431,
              "src": "74:11:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9073,
        "nodeType": "ImportDirective",
        "src": "126:59:34",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "./FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9919,
        "sourceUnit": 9067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9071,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9066,
              "src": "135:14:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 9072,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8318,
              "src": "151:3:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9075,
        "nodeType": "ImportDirective",
        "src": "186:54:34",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/YieldSpaceMath.sol",
        "file": "./YieldSpaceMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9919,
        "sourceUnit": 10633,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9074,
              "name": "YieldSpaceMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10632,
              "src": "195:14:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9077,
        "nodeType": "ImportDirective",
        "src": "241:42:34",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/SafeCast.sol",
        "file": "./SafeCast.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9919,
        "sourceUnit": 9995,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9076,
              "name": "SafeCast",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9994,
              "src": "250:8:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9918,
        "nodeType": "ContractDefinition",
        "src": "599:29863:34",
        "nodes": [
          {
            "id": 9081,
            "nodeType": "UsingForDirective",
            "src": "628:33:34",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 9079,
              "name": "FixedPointMath",
              "nameLocations": [
                "634:14:34"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "634:14:34"
            },
            "typeName": {
              "id": 9080,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "653:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 9084,
            "nodeType": "UsingForDirective",
            "src": "666:32:34",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 9082,
              "name": "FixedPointMath",
              "nameLocations": [
                "672:14:34"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9066,
              "src": "672:14:34"
            },
            "typeName": {
              "id": 9083,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "691:6:34",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 9087,
            "nodeType": "UsingForDirective",
            "src": "703:27:34",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 9085,
              "name": "SafeCast",
              "nameLocations": [
                "709:8:34"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9994,
              "src": "709:8:34"
            },
            "typeName": {
              "id": 9086,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "722:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 9113,
            "nodeType": "FunctionDefinition",
            "src": "1246:449:34",
            "nodes": [],
            "body": {
              "id": 9112,
              "nodeType": "Block",
              "src": "1460:235:34",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 9110,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9101,
                      "name": "spotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9099,
                      "src": "1563:9:34",
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
                          "id": 9108,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9096,
                          "src": "1675:12:34",
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
                          "arguments": [
                            {
                              "id": 9104,
                              "name": "_effectiveShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9090,
                              "src": "1618:23:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 9105,
                              "name": "_bondReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9092,
                              "src": "1643:13:34",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 9102,
                              "name": "_initialSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9094,
                              "src": "1575:18:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 9103,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1607:10:34",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8346,
                            "src": "1575:42:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9106,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1575:82:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9107,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1671:3:34",
                        "memberName": "pow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8491,
                        "src": "1575:99:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1575:113:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1563:125:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9111,
                  "nodeType": "ExpressionStatement",
                  "src": "1563:125:34"
                }
              ]
            },
            "documentation": {
              "id": 9088,
              "nodeType": "StructuredDocumentation",
              "src": "736:505:34",
              "text": "@dev Calculates the spot price of bonds in terms of base.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _initialSharePrice The initial share price.\n @param _timeStretch The time stretch parameter.\n @return spotPrice The spot price of bonds in terms of base."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSpotPrice",
            "nameLocation": "1255:18:34",
            "parameters": {
              "id": 9097,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9090,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "1291:23:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9113,
                  "src": "1283:31:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9089,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1283:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9092,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "1332:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9113,
                  "src": "1324:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9091,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1324:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9094,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "1363:18:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9113,
                  "src": "1355:26:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9093,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1355:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9096,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "1399:12:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9113,
                  "src": "1391:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9095,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1391:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1273:144:34"
            },
            "returnParameters": {
              "id": 9100,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9099,
                  "mutability": "mutable",
                  "name": "spotPrice",
                  "nameLocation": "1449:9:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9113,
                  "src": "1441:17:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9098,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1441:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1440:19:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9151,
            "nodeType": "FunctionDefinition",
            "src": "2254:774:34",
            "nodes": [],
            "body": {
              "id": 9150,
              "nodeType": "Block",
              "src": "2495:533:34",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    9130
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9130,
                      "mutability": "mutable",
                      "name": "spotPrice",
                      "nameLocation": "2726:9:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 9150,
                      "src": "2718:17:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9129,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2718:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9137,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 9132,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9116,
                        "src": "2770:23:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9133,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9118,
                        "src": "2807:13:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9134,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9120,
                        "src": "2834:18:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9135,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9124,
                        "src": "2866:12:34",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 9131,
                      "name": "calculateSpotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9113,
                      "src": "2738:18:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 9136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2738:150:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2718:170:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 9145,
                            "name": "_positionDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9122,
                            "src": "2979:17:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "333635",
                            "id": 9146,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2998:8:34",
                            "subdenomination": "days",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_31536000_by_1",
                              "typeString": "int_const 31536000"
                            },
                            "value": "365"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            {
                              "typeIdentifier": "t_rational_31536000_by_1",
                              "typeString": "int_const 31536000"
                            }
                          ],
                          "expression": {
                            "id": 9143,
                            "name": "spotPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9130,
                            "src": "2960:9:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 9144,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "2970:8:34",
                          "memberName": "mulDivUp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8396,
                          "src": "2960:18:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 9147,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2960:47:34",
                        "tryCall": false,
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
                            "id": 9140,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 9138,
                              "name": "ONE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 8318,
                              "src": "2918:3:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 9139,
                              "name": "spotPrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9130,
                              "src": "2924:9:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2918:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 9141,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "2917:17:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 9142,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2935:7:34",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8382,
                      "src": "2917:25:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 9148,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2917:104:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9128,
                  "id": 9149,
                  "nodeType": "Return",
                  "src": "2898:123:34"
                }
              ]
            },
            "documentation": {
              "id": 9114,
              "nodeType": "StructuredDocumentation",
              "src": "1701:548:34",
              "text": "@dev Calculates the spot APR of the pool.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _initialSharePrice The pool's initial share price.\n @param _positionDuration The amount of time until maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @return apr The pool's spot APR."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSpotAPR",
            "nameLocation": "2263:16:34",
            "parameters": {
              "id": 9125,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9116,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "2297:23:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9151,
                  "src": "2289:31:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9115,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2289:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9118,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "2338:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9151,
                  "src": "2330:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9117,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2330:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9120,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "2369:18:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9151,
                  "src": "2361:26:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9119,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2361:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9122,
                  "mutability": "mutable",
                  "name": "_positionDuration",
                  "nameLocation": "2405:17:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9151,
                  "src": "2397:25:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9121,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2397:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9124,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "2440:12:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9151,
                  "src": "2432:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9123,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2432:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2279:179:34"
            },
            "returnParameters": {
              "id": 9128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9127,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "2490:3:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9151,
                  "src": "2482:11:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9126,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2482:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2481:13:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9195,
            "nodeType": "FunctionDefinition",
            "src": "4023:611:34",
            "nodes": [],
            "body": {
              "id": 9194,
              "nodeType": "Block",
              "src": "4276:358:34",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    9168
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9168,
                      "mutability": "mutable",
                      "name": "t",
                      "nameLocation": "4359:1:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 9194,
                      "src": "4351:9:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9167,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4351:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9173,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "333635",
                        "id": 9171,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "4389:8:34",
                        "subdenomination": "days",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_31536000_by_1",
                          "typeString": "int_const 31536000"
                        },
                        "value": "365"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_31536000_by_1",
                          "typeString": "int_const 31536000"
                        }
                      ],
                      "expression": {
                        "id": 9169,
                        "name": "_positionDuration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9160,
                        "src": "4363:17:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 9170,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4381:7:34",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8382,
                      "src": "4363:25:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 9172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4363:35:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4351:47:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "id": 9189,
                                "name": "_timeStretch",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9162,
                                "src": "4599:12:34",
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
                                "id": 9187,
                                "name": "ONE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8318,
                                "src": "4589:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9188,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4593:5:34",
                              "memberName": "divUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8432,
                              "src": "4589:9:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 9190,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4589:23:34",
                            "tryCall": false,
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
                                "id": 9184,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 9179,
                                  "name": "ONE",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8318,
                                  "src": "4562:3:34",
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
                                      "id": 9182,
                                      "name": "t",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9168,
                                      "src": "4581:1:34",
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
                                      "id": 9180,
                                      "name": "_apr",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9158,
                                      "src": "4568:4:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "id": 9181,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "4573:7:34",
                                    "memberName": "mulDown",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 8364,
                                    "src": "4568:12:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                      "typeString": "function (uint256,uint256) pure returns (uint256)"
                                    }
                                  },
                                  "id": 9183,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4568:15:34",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "4562:21:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 9185,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "4561:23:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 9186,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4585:3:34",
                          "memberName": "pow",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8491,
                          "src": "4561:27:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 9191,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4561:52:34",
                        "tryCall": false,
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
                        "arguments": [
                          {
                            "id": 9176,
                            "name": "_effectiveShareReserves",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9154,
                            "src": "4511:23:34",
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
                            "id": 9174,
                            "name": "_initialSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9156,
                            "src": "4484:18:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 9175,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4503:7:34",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8364,
                          "src": "4484:26:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 9177,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "4484:51:34",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 9178,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4536:7:34",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8364,
                      "src": "4484:59:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 9192,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4484:143:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9166,
                  "id": 9193,
                  "nodeType": "Return",
                  "src": "4465:162:34"
                }
              ]
            },
            "documentation": {
              "id": 9152,
              "nodeType": "StructuredDocumentation",
              "src": "3034:984:34",
              "text": "@dev Calculates the initial bond reserves assuming that the initial LP\n      receives LP shares amounting to c * z + y. Throughout the rest of\n      the codebase, the bond reserves used include the LP share\n      adjustment specified in YieldSpace. The bond reserves returned by\n      this function are unadjusted which makes it easier to calculate the\n      initial LP shares.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _initialSharePrice The pool's initial share price.\n @param _apr The pool's APR.\n @param _positionDuration The amount of time until maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @return bondReserves The bond reserves (without adjustment) that make\n         the pool have a specified APR."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateInitialBondReserves",
            "nameLocation": "4032:28:34",
            "parameters": {
              "id": 9163,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9154,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "4078:23:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9195,
                  "src": "4070:31:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9153,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4070:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9156,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "4119:18:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9195,
                  "src": "4111:26:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9155,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4111:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9158,
                  "mutability": "mutable",
                  "name": "_apr",
                  "nameLocation": "4155:4:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9195,
                  "src": "4147:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9157,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4147:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9160,
                  "mutability": "mutable",
                  "name": "_positionDuration",
                  "nameLocation": "4177:17:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9195,
                  "src": "4169:25:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9159,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4169:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9162,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "4212:12:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9195,
                  "src": "4204:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9161,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4204:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4060:170:34"
            },
            "returnParameters": {
              "id": 9166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9165,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "4262:12:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9195,
                  "src": "4254:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9164,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4254:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4253:22:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9221,
            "nodeType": "FunctionDefinition",
            "src": "5221:277:34",
            "nodes": [],
            "body": {
              "id": 9220,
              "nodeType": "Block",
              "src": "5361:137:34",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9217,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9207,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8318,
                          "src": "5419:3:34",
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
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 9215,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [
                                  {
                                    "id": 9212,
                                    "name": "_startingSpotPrice",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9198,
                                    "src": "5451:18:34",
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
                                    "id": 9210,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 8318,
                                    "src": "5441:3:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 9211,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "5445:5:34",
                                  "memberName": "divUp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 8432,
                                  "src": "5441:9:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 9213,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5441:29:34",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 9214,
                                "name": "ONE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8318,
                                "src": "5473:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "5441:35:34",
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
                              "id": 9208,
                              "name": "_curveFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9200,
                              "src": "5425:9:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 9209,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5435:5:34",
                            "memberName": "mulUp",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8414,
                            "src": "5425:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5425:52:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "5419:58:34",
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
                        "id": 9205,
                        "name": "ONE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8318,
                        "src": "5390:3:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 9206,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5394:7:34",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8382,
                      "src": "5390:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 9218,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5390:101:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9204,
                  "id": 9219,
                  "nodeType": "Return",
                  "src": "5371:120:34"
                }
              ]
            },
            "documentation": {
              "id": 9196,
              "nodeType": "StructuredDocumentation",
              "src": "4640:576:34",
              "text": "@dev Since traders pay a curve fee when they open longs on Hyperdrive,\n      it is possible for traders to receive a negative interest rate even\n      if curve's spot price is less than or equal to 1.\n      Given the curve fee `phi_c` and the starting spot price `p_0`, the\n      maximum spot price is given by:\n      p_max = 1 / (1 + phi_c * (1 / p_0 - 1))\n @param _startingSpotPrice The spot price at the start of the trade.\n @param _curveFee The curve fee.\n @return The maximum spot price."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLongMaxSpotPrice",
            "nameLocation": "5230:29:34",
            "parameters": {
              "id": 9201,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9198,
                  "mutability": "mutable",
                  "name": "_startingSpotPrice",
                  "nameLocation": "5277:18:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9221,
                  "src": "5269:26:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9197,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5269:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9200,
                  "mutability": "mutable",
                  "name": "_curveFee",
                  "nameLocation": "5313:9:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9221,
                  "src": "5305:17:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9199,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5305:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5259:69:34"
            },
            "returnParameters": {
              "id": 9204,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9203,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9221,
                  "src": "5352:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9202,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5352:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5351:9:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9241,
            "nodeType": "FunctionDefinition",
            "src": "6077:213:34",
            "nodes": [],
            "body": {
              "id": 9240,
              "nodeType": "Block",
              "src": "6219:71:34",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9238,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9231,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 8318,
                      "src": "6236:3:34",
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
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 9236,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 9234,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8318,
                            "src": "6258:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 9235,
                            "name": "_startingSpotPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9224,
                            "src": "6264:18:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6258:24:34",
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
                          "id": 9232,
                          "name": "_curveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9226,
                          "src": "6242:9:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9233,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6252:5:34",
                        "memberName": "mulUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8414,
                        "src": "6242:15:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9237,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6242:41:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6236:47:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9230,
                  "id": 9239,
                  "nodeType": "Return",
                  "src": "6229:54:34"
                }
              ]
            },
            "documentation": {
              "id": 9222,
              "nodeType": "StructuredDocumentation",
              "src": "5504:568:34",
              "text": "@dev Since traders pay a curve fee when they close shorts on Hyperdrive,\n      it is possible for traders to receive a negative interest rate even\n      if curve's spot price is less than or equal to 1.\n      Given the curve fee `phi_c` and the starting spot price `p_0`, the\n      maximum spot price is given by:\n      p_max = 1 - phi_c * (1 - p_0)\n @param _startingSpotPrice The spot price at the start of the trade.\n @param _curveFee The curve fee.\n @return The maximum spot price."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseShortMaxSpotPrice",
            "nameLocation": "6086:31:34",
            "parameters": {
              "id": 9227,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9224,
                  "mutability": "mutable",
                  "name": "_startingSpotPrice",
                  "nameLocation": "6135:18:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9241,
                  "src": "6127:26:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9223,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6127:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9226,
                  "mutability": "mutable",
                  "name": "_curveFee",
                  "nameLocation": "6171:9:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9241,
                  "src": "6163:17:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9225,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6163:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6117:69:34"
            },
            "returnParameters": {
              "id": 9230,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9229,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9241,
                  "src": "6210:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9228,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6210:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6209:9:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9272,
            "nodeType": "FunctionDefinition",
            "src": "6975:872:34",
            "nodes": [],
            "body": {
              "id": 9271,
              "nodeType": "Block",
              "src": "7237:610:34",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9261,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9244,
                        "src": "7432:23:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9262,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9246,
                        "src": "7473:13:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9263,
                        "name": "_shareAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9248,
                        "src": "7504:12:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9266,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9264,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8318,
                          "src": "7743:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 9265,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9250,
                          "src": "7749:12:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "7743:18:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9267,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9252,
                        "src": "7779:11:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9268,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9254,
                        "src": "7808:18:34",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 9259,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10632,
                        "src": "7365:14:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$10632_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 9260,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7380:34:34",
                      "memberName": "calculateBondsOutGivenSharesInDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10092,
                      "src": "7365:49:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 9269,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7365:475:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9258,
                  "id": 9270,
                  "nodeType": "Return",
                  "src": "7346:494:34"
                }
              ]
            },
            "documentation": {
              "id": 9242,
              "nodeType": "StructuredDocumentation",
              "src": "6296:674:34",
              "text": "@dev Calculates the number of bonds a user will receive when opening a\n      long position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _shareAmount The amount of shares the user is depositing.\n @param _timeStretch The time stretch parameter.\n @param _sharePrice The share price.\n @param _initialSharePrice The initial share price.\n @return bondReservesDelta The bonds paid by the reserves in the trade."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLong",
            "nameLocation": "6984:17:34",
            "parameters": {
              "id": 9255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9244,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "7019:23:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9272,
                  "src": "7011:31:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9243,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7011:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9246,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "7060:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9272,
                  "src": "7052:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9245,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7052:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9248,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "7091:12:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9272,
                  "src": "7083:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9247,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7083:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9250,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "7121:12:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9272,
                  "src": "7113:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9249,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7113:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9252,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "7151:11:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9272,
                  "src": "7143:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9251,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7143:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9254,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "7180:18:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9272,
                  "src": "7172:26:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9253,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7172:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7001:203:34"
            },
            "returnParameters": {
              "id": 9258,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9257,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9272,
                  "src": "7228:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9256,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7228:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7227:9:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9337,
            "nodeType": "FunctionDefinition",
            "src": "8791:1862:34",
            "nodes": [],
            "body": {
              "id": 9336,
              "nodeType": "Block",
              "src": "9230:1423:34",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 9304,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9296,
                      "name": "shareProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9294,
                      "src": "9684:13:34",
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
                          "id": 9301,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 9299,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8318,
                            "src": "9734:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 9300,
                            "name": "_normalizedTimeRemaining",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9281,
                            "src": "9740:24:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9734:30:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 9302,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9285,
                          "src": "9778:11:34",
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 9297,
                          "name": "_amountIn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9279,
                          "src": "9700:9:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9298,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9710:10:34",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8346,
                        "src": "9700:20:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9303,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9700:99:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9684:115:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9305,
                  "nodeType": "ExpressionStatement",
                  "src": "9684:115:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9308,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9306,
                      "name": "_normalizedTimeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9281,
                      "src": "9813:24:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 9307,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "9840:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "9813:28:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9335,
                  "nodeType": "IfStatement",
                  "src": "9809:838:34",
                  "trueBody": {
                    "id": 9334,
                    "nodeType": "Block",
                    "src": "9843:804:34",
                    "statements": [
                      {
                        "expression": {
                          "id": 9314,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9309,
                            "name": "bondCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9292,
                            "src": "9912:14:34",
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
                                "id": 9312,
                                "name": "_normalizedTimeRemaining",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9281,
                                "src": "9947:24:34",
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
                                "id": 9310,
                                "name": "_amountIn",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9279,
                                "src": "9929:9:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9311,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9939:7:34",
                              "memberName": "mulDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8364,
                              "src": "9929:17:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 9313,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9929:43:34",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9912:60:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9315,
                        "nodeType": "ExpressionStatement",
                        "src": "9912:60:34"
                      },
                      {
                        "expression": {
                          "id": 9328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9316,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9290,
                            "src": "10095:15:34",
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
                                "id": 9319,
                                "name": "_effectiveShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9275,
                                "src": "10180:23:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 9320,
                                "name": "_bondReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9277,
                                "src": "10221:13:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 9321,
                                "name": "bondCurveDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9292,
                                "src": "10252:14:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 9324,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 9322,
                                  "name": "ONE",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8318,
                                  "src": "10493:3:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 9323,
                                  "name": "_timeStretch",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9283,
                                  "src": "10499:12:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "10493:18:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 9325,
                                "name": "_sharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9285,
                                "src": "10529:11:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 9326,
                                "name": "_initialSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9287,
                                "src": "10558:18:34",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 9317,
                                "name": "YieldSpaceMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10632,
                                "src": "10113:14:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$10632_$",
                                  "typeString": "type(library YieldSpaceMath)"
                                }
                              },
                              "id": 9318,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10128:34:34",
                              "memberName": "calculateSharesOutGivenBondsInDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10310,
                              "src": "10113:49:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 9327,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10113:477:34",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10095:495:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9329,
                        "nodeType": "ExpressionStatement",
                        "src": "10095:495:34"
                      },
                      {
                        "expression": {
                          "id": 9332,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9330,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9294,
                            "src": "10604:13:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 9331,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9290,
                            "src": "10621:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10604:32:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9333,
                        "nodeType": "ExpressionStatement",
                        "src": "10604:32:34"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 9273,
              "nodeType": "StructuredDocumentation",
              "src": "7853:933:34",
              "text": "@dev Calculates the amount of shares a user will receive when closing a\n      long position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _amountIn The amount of bonds the user is closing.\n @param _normalizedTimeRemaining The normalized time remaining of the\n        position.\n @param _timeStretch The time stretch parameter.\n @param _sharePrice The share price.\n @param _initialSharePrice The share price when the pool was deployed.\n @return shareCurveDelta The shares paid by the reserves in the trade.\n @return bondCurveDelta The bonds paid to the reserves in the trade.\n @return shareProceeds The shares that the user will receive."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseLong",
            "nameLocation": "8800:18:34",
            "parameters": {
              "id": 9288,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9275,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "8836:23:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "8828:31:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9274,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8828:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9277,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "8877:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "8869:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9276,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8869:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9279,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "8908:9:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "8900:17:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9278,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8900:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9281,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "8935:24:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "8927:32:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9280,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8927:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9283,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "8977:12:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "8969:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9282,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8969:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9285,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "9007:11:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "8999:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9284,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8999:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9287,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "9036:18:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "9028:26:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9286,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9028:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8818:242:34"
            },
            "returnParameters": {
              "id": 9295,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9290,
                  "mutability": "mutable",
                  "name": "shareCurveDelta",
                  "nameLocation": "9129:15:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "9121:23:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9289,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9121:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9292,
                  "mutability": "mutable",
                  "name": "bondCurveDelta",
                  "nameLocation": "9166:14:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "9158:22:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9291,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9158:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9294,
                  "mutability": "mutable",
                  "name": "shareProceeds",
                  "nameLocation": "9202:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9337,
                  "src": "9194:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9293,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9194:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9107:118:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9368,
            "nodeType": "FunctionDefinition",
            "src": "11325:846:34",
            "nodes": [],
            "body": {
              "id": 9367,
              "nodeType": "Block",
              "src": "11585:586:34",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9357,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9340,
                        "src": "11759:23:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9358,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9342,
                        "src": "11800:13:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9359,
                        "name": "_amountIn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9344,
                        "src": "11831:9:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9362,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9360,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 8318,
                          "src": "12067:3:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 9361,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9346,
                          "src": "12073:12:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "12067:18:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9363,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9348,
                        "src": "12103:11:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9364,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9350,
                        "src": "12132:18:34",
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 9355,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10632,
                        "src": "11692:14:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$10632_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 9356,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11707:34:34",
                      "memberName": "calculateSharesOutGivenBondsInDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10310,
                      "src": "11692:49:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 9365,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11692:472:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9354,
                  "id": 9366,
                  "nodeType": "Return",
                  "src": "11673:491:34"
                }
              ]
            },
            "documentation": {
              "id": 9338,
              "nodeType": "StructuredDocumentation",
              "src": "10659:661:34",
              "text": "@dev Calculates the amount of shares that will be received given a\n      specified amount of bonds.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bonds reserves.\n @param _amountIn The amount of bonds the user is providing.\n @param _timeStretch The time stretch parameter.\n @param _sharePrice The share price.\n @param _initialSharePrice The initial share price.\n @return The shares paid by the reserves in the trade."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenShort",
            "nameLocation": "11334:18:34",
            "parameters": {
              "id": 9351,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9340,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "11370:23:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9368,
                  "src": "11362:31:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9339,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11362:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9342,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "11411:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9368,
                  "src": "11403:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9341,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11403:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9344,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "11442:9:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9368,
                  "src": "11434:17:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9343,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11434:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9346,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "11469:12:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9368,
                  "src": "11461:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9345,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11461:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9348,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "11499:11:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9368,
                  "src": "11491:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9347,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11491:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9350,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "11528:18:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9368,
                  "src": "11520:26:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9349,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11520:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11352:200:34"
            },
            "returnParameters": {
              "id": 9354,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9353,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9368,
                  "src": "11576:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9352,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "11576:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "11575:9:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9433,
            "nodeType": "FunctionDefinition",
            "src": "13107:1882:34",
            "nodes": [],
            "body": {
              "id": 9432,
              "nodeType": "Block",
              "src": "13547:1442:34",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 9400,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9392,
                      "name": "sharePayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9390,
                      "src": "14100:12:34",
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
                          "id": 9397,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 9395,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8318,
                            "src": "14150:3:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 9396,
                            "name": "_normalizedTimeRemaining",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9377,
                            "src": "14156:24:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14150:30:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 9398,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9381,
                          "src": "14194:11:34",
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 9393,
                          "name": "_amountOut",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9375,
                          "src": "14115:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9394,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14126:10:34",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8346,
                        "src": "14115:21:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9399,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14115:100:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14100:115:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9401,
                  "nodeType": "ExpressionStatement",
                  "src": "14100:115:34"
                },
                {
                  "expression": {
                    "id": 9407,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9402,
                      "name": "bondCurveDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9388,
                      "src": "14225:14:34",
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
                          "id": 9405,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9377,
                          "src": "14261:24:34",
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
                          "id": 9403,
                          "name": "_amountOut",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9375,
                          "src": "14242:10:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9404,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14253:7:34",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8364,
                        "src": "14242:18:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9406,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14242:44:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14225:61:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9408,
                  "nodeType": "ExpressionStatement",
                  "src": "14225:61:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9411,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9409,
                      "name": "bondCurveDelta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9388,
                      "src": "14300:14:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 9410,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "14317:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "14300:18:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9431,
                  "nodeType": "IfStatement",
                  "src": "14296:687:34",
                  "trueBody": {
                    "id": 9430,
                    "nodeType": "Block",
                    "src": "14320:663:34",
                    "statements": [
                      {
                        "expression": {
                          "id": 9424,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9412,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9386,
                            "src": "14434:15:34",
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
                                "id": 9415,
                                "name": "_effectiveShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9371,
                                "src": "14517:23:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 9416,
                                "name": "_bondReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9373,
                                "src": "14558:13:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 9417,
                                "name": "bondCurveDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9388,
                                "src": "14589:14:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 9420,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 9418,
                                  "name": "ONE",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8318,
                                  "src": "14830:3:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 9419,
                                  "name": "_timeStretch",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9379,
                                  "src": "14836:12:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "14830:18:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 9421,
                                "name": "_sharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9381,
                                "src": "14866:11:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 9422,
                                "name": "_initialSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9383,
                                "src": "14895:18:34",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 9413,
                                "name": "YieldSpaceMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10632,
                                "src": "14452:14:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$10632_$",
                                  "typeString": "type(library YieldSpaceMath)"
                                }
                              },
                              "id": 9414,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "14467:32:34",
                              "memberName": "calculateSharesInGivenBondsOutUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10179,
                              "src": "14452:47:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 9423,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14452:475:34",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14434:493:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9425,
                        "nodeType": "ExpressionStatement",
                        "src": "14434:493:34"
                      },
                      {
                        "expression": {
                          "id": 9428,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9426,
                            "name": "sharePayment",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9390,
                            "src": "14941:12:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 9427,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9386,
                            "src": "14957:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "14941:31:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9429,
                        "nodeType": "ExpressionStatement",
                        "src": "14941:31:34"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 9369,
              "nodeType": "StructuredDocumentation",
              "src": "12177:925:34",
              "text": "@dev Calculates the amount of base that a user will receive when closing\n      a short position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bonds reserves.\n @param _amountOut The amount of the asset that is received.\n @param _normalizedTimeRemaining The amount of time remaining until\n        maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @param _sharePrice The share price.\n @param _initialSharePrice The initial share price.\n @return shareCurveDelta The shares paid to the reserves in the trade.\n @return bondCurveDelta The bonds paid by the reserves in the trade.\n @return sharePayment The shares that the user must pay."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseShort",
            "nameLocation": "13116:19:34",
            "parameters": {
              "id": 9384,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9371,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "13153:23:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9433,
                  "src": "13145:31:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9370,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13145:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9373,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "13194:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9433,
                  "src": "13186:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9372,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13186:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9375,
                  "mutability": "mutable",
                  "name": "_amountOut",
                  "nameLocation": "13225:10:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9433,
                  "src": "13217:18:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9374,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13217:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9377,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "13253:24:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9433,
                  "src": "13245:32:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9376,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13245:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9379,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "13295:12:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9433,
                  "src": "13287:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9378,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13287:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9381,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "13325:11:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9433,
                  "src": "13317:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9380,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13317:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9383,
                  "mutability": "mutable",
                  "name": "_initialSharePrice",
                  "nameLocation": "13354:18:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9433,
                  "src": "13346:26:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9382,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13346:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13135:243:34"
            },
            "returnParameters": {
              "id": 9391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9386,
                  "mutability": "mutable",
                  "name": "shareCurveDelta",
                  "nameLocation": "13447:15:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9433,
                  "src": "13439:23:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9385,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13439:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9388,
                  "mutability": "mutable",
                  "name": "bondCurveDelta",
                  "nameLocation": "13484:14:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9433,
                  "src": "13476:22:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9387,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13476:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9390,
                  "mutability": "mutable",
                  "name": "sharePayment",
                  "nameLocation": "13520:12:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9433,
                  "src": "13512:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9389,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13512:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13425:117:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9537,
            "nodeType": "FunctionDefinition",
            "src": "16838:2717:34",
            "nodes": [],
            "body": {
              "id": 9536,
              "nodeType": "Block",
              "src": "17182:2373:34",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    9462
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9462,
                      "mutability": "mutable",
                      "name": "shareAdjustmentDelta",
                      "nameLocation": "18114:20:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 9536,
                      "src": "18107:27:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 9461,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "18107:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9463,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "18107:27:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9466,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9464,
                      "name": "_closeSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9446,
                      "src": "18148:16:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 9465,
                      "name": "_openSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9444,
                      "src": "18167:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "18148:34:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 9527,
                    "nodeType": "Block",
                    "src": "19229:134:34",
                    "statements": [
                      {
                        "expression": {
                          "id": 9525,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9515,
                            "name": "shareAdjustmentDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9462,
                            "src": "19243:20:34",
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
                            "id": 9524,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 9518,
                                  "name": "_shareReservesDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9438,
                                  "src": "19289:19:34",
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
                                "id": 9517,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "19282:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 9516,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "19282:6:34",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 9519,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "19282:27:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "id": 9522,
                                  "name": "_shareCurveDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9440,
                                  "src": "19335:16:34",
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
                                "id": 9521,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "19328:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 9520,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "19328:6:34",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 9523,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "19328:24:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "19282:70:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "19243:109:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 9526,
                        "nodeType": "ExpressionStatement",
                        "src": "19243:109:34"
                      }
                    ]
                  },
                  "id": 9528,
                  "nodeType": "IfStatement",
                  "src": "18144:1219:34",
                  "trueBody": {
                    "id": 9514,
                    "nodeType": "Block",
                    "src": "18184:1039:34",
                    "statements": [
                      {
                        "condition": {
                          "id": 9467,
                          "name": "_isLong",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9448,
                          "src": "18383:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 9477,
                        "nodeType": "IfStatement",
                        "src": "18379:181:34",
                        "trueBody": {
                          "id": 9476,
                          "nodeType": "Block",
                          "src": "18392:168:34",
                          "statements": [
                            {
                              "expression": {
                                "id": 9474,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "id": 9468,
                                  "name": "_shareProceeds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9436,
                                  "src": "18410:14:34",
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
                                      "id": 9471,
                                      "name": "_closeSharePrice",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9446,
                                      "src": "18474:16:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "id": 9472,
                                      "name": "_openSharePrice",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9444,
                                      "src": "18512:15:34",
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
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "id": 9469,
                                      "name": "_shareProceeds",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9436,
                                      "src": "18427:14:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "id": 9470,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "18442:10:34",
                                    "memberName": "mulDivDown",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 8346,
                                    "src": "18427:25:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                      "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                    }
                                  },
                                  "id": 9473,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "18427:118:34",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "18410:135:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9475,
                              "nodeType": "ExpressionStatement",
                              "src": "18410:135:34"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 9484,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9478,
                            "name": "_shareReservesDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9438,
                            "src": "18613:19:34",
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
                                "id": 9481,
                                "name": "_closeSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9446,
                                "src": "18683:16:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 9482,
                                "name": "_openSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9444,
                                "src": "18717:15:34",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 9479,
                                "name": "_shareReservesDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9438,
                                "src": "18635:19:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9480,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "18655:10:34",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8346,
                              "src": "18635:30:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 9483,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "18635:111:34",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "18613:133:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9485,
                        "nodeType": "ExpressionStatement",
                        "src": "18613:133:34"
                      },
                      {
                        "expression": {
                          "id": 9496,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9486,
                            "name": "shareAdjustmentDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9462,
                            "src": "18815:20:34",
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
                            "id": 9495,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 9489,
                                  "name": "_shareReservesDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9438,
                                  "src": "18861:19:34",
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
                                "id": 9488,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "18854:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 9487,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "18854:6:34",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 9490,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "18854:27:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "id": 9493,
                                  "name": "_shareCurveDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9440,
                                  "src": "18907:16:34",
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
                                "id": 9492,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "18900:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 9491,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "18900:6:34",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 9494,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "18900:24:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "18854:70:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "18815:109:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 9497,
                        "nodeType": "ExpressionStatement",
                        "src": "18815:109:34"
                      },
                      {
                        "expression": {
                          "id": 9504,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9498,
                            "name": "_shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9440,
                            "src": "18938:16:34",
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
                                "id": 9501,
                                "name": "_closeSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9446,
                                "src": "19002:16:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 9502,
                                "name": "_openSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9444,
                                "src": "19036:15:34",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 9499,
                                "name": "_shareCurveDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9440,
                                "src": "18957:16:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9500,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "18974:10:34",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8346,
                              "src": "18957:27:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 9503,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "18957:108:34",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "18938:127:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9505,
                        "nodeType": "ExpressionStatement",
                        "src": "18938:127:34"
                      },
                      {
                        "expression": {
                          "id": 9512,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9506,
                            "name": "_totalGovernanceFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9442,
                            "src": "19079:19:34",
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
                                "id": 9509,
                                "name": "_closeSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9446,
                                "src": "19149:16:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 9510,
                                "name": "_openSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9444,
                                "src": "19183:15:34",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 9507,
                                "name": "_totalGovernanceFee",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9442,
                                "src": "19101:19:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9508,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "19121:10:34",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8346,
                              "src": "19101:30:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 9511,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "19101:111:34",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "19079:133:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9513,
                        "nodeType": "ExpressionStatement",
                        "src": "19079:133:34"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 9529,
                        "name": "_shareProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9436,
                        "src": "19394:14:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9530,
                        "name": "_shareReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9438,
                        "src": "19422:19:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9531,
                        "name": "_shareCurveDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9440,
                        "src": "19455:16:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 9532,
                        "name": "shareAdjustmentDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9462,
                        "src": "19485:20:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 9533,
                        "name": "_totalGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9442,
                        "src": "19519:19:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 9534,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "19380:168:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                    }
                  },
                  "functionReturnParameters": 9460,
                  "id": 9535,
                  "nodeType": "Return",
                  "src": "19373:175:34"
                }
              ]
            },
            "documentation": {
              "id": 9434,
              "nodeType": "StructuredDocumentation",
              "src": "14995:1838:34",
              "text": "@dev If negative interest accrued over the term, we scale the share\n      proceeds by the negative interest amount. Shorts should be\n      responsible for negative interest, but negative interest can exceed\n      the margin that shorts provide. This leaves us with no choice but\n      to attribute the negative interest to longs. Along with scaling the\n      share proceeds, we also scale the fee amounts.\n      In order for our AMM invariant to be maintained, the effective\n      share reserves need to be adjusted by the same amount as the share\n      reserves delta calculated with YieldSpace including fees. We reduce\n      the share reserves by `min(c_1 / c_0, 1) * shareReservesDelta` and\n      the share adjustment by the `shareAdjustmentDelta`. We can solve\n      these equations simultaneously to find the share adjustment delta\n      as:\n      shareAdjustmentDelta = min(c_1 / c_0, 1) * sharePayment -\n                             shareReservesDelta\n @param _shareProceeds The proceeds in shares from the trade.\n @param _shareReservesDelta The change in share reserves from the trade.\n @param _shareCurveDelta The curve portion of the change in share reserves.\n @param _totalGovernanceFee The total governance fee.\n @param _openSharePrice The share price at the beginning of the term.\n @param _closeSharePrice The share price at the end of the term.\n @param _isLong A flag indicating whether or not the trade is a long.\n @return The adjusted share proceeds.\n @return The adjusted share reserves delta.\n @return The adjusted share close proceeds.\n @return The share adjustment delta.\n @return The adjusted total governance fee."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateNegativeInterestOnClose",
            "nameLocation": "16847:32:34",
            "parameters": {
              "id": 9449,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9436,
                  "mutability": "mutable",
                  "name": "_shareProceeds",
                  "nameLocation": "16897:14:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9537,
                  "src": "16889:22:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9435,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16889:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9438,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "16929:19:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9537,
                  "src": "16921:27:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9437,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16921:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9440,
                  "mutability": "mutable",
                  "name": "_shareCurveDelta",
                  "nameLocation": "16966:16:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9537,
                  "src": "16958:24:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9439,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16958:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9442,
                  "mutability": "mutable",
                  "name": "_totalGovernanceFee",
                  "nameLocation": "17000:19:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9537,
                  "src": "16992:27:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9441,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16992:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9444,
                  "mutability": "mutable",
                  "name": "_openSharePrice",
                  "nameLocation": "17037:15:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9537,
                  "src": "17029:23:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9443,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17029:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9446,
                  "mutability": "mutable",
                  "name": "_closeSharePrice",
                  "nameLocation": "17070:16:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9537,
                  "src": "17062:24:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9445,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17062:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9448,
                  "mutability": "mutable",
                  "name": "_isLong",
                  "nameLocation": "17101:7:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9537,
                  "src": "17096:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 9447,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "17096:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16879:235:34"
            },
            "returnParameters": {
              "id": 9460,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9451,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9537,
                  "src": "17138:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9450,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17138:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9453,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9537,
                  "src": "17147:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9452,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17147:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9455,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9537,
                  "src": "17156:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9454,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17156:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9457,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9537,
                  "src": "17165:6:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9456,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17165:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9459,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9537,
                  "src": "17173:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9458,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17173:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17137:44:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9560,
            "nodeType": "StructDefinition",
            "src": "19561:410:34",
            "nodes": [],
            "canonicalName": "HyperdriveMath.PresentValueParams",
            "members": [
              {
                "constant": false,
                "id": 9539,
                "mutability": "mutable",
                "name": "shareReserves",
                "nameLocation": "19605:13:34",
                "nodeType": "VariableDeclaration",
                "scope": 9560,
                "src": "19597:21:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9538,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19597:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9541,
                "mutability": "mutable",
                "name": "shareAdjustment",
                "nameLocation": "19635:15:34",
                "nodeType": "VariableDeclaration",
                "scope": 9560,
                "src": "19628:22:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                },
                "typeName": {
                  "id": 9540,
                  "name": "int256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19628:6:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9543,
                "mutability": "mutable",
                "name": "bondReserves",
                "nameLocation": "19668:12:34",
                "nodeType": "VariableDeclaration",
                "scope": 9560,
                "src": "19660:20:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9542,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19660:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9545,
                "mutability": "mutable",
                "name": "sharePrice",
                "nameLocation": "19698:10:34",
                "nodeType": "VariableDeclaration",
                "scope": 9560,
                "src": "19690:18:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9544,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19690:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9547,
                "mutability": "mutable",
                "name": "initialSharePrice",
                "nameLocation": "19726:17:34",
                "nodeType": "VariableDeclaration",
                "scope": 9560,
                "src": "19718:25:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9546,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19718:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9549,
                "mutability": "mutable",
                "name": "minimumShareReserves",
                "nameLocation": "19761:20:34",
                "nodeType": "VariableDeclaration",
                "scope": 9560,
                "src": "19753:28:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9548,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19753:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9551,
                "mutability": "mutable",
                "name": "timeStretch",
                "nameLocation": "19799:11:34",
                "nodeType": "VariableDeclaration",
                "scope": 9560,
                "src": "19791:19:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9550,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19791:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9553,
                "mutability": "mutable",
                "name": "longsOutstanding",
                "nameLocation": "19828:16:34",
                "nodeType": "VariableDeclaration",
                "scope": 9560,
                "src": "19820:24:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9552,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19820:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9555,
                "mutability": "mutable",
                "name": "longAverageTimeRemaining",
                "nameLocation": "19862:24:34",
                "nodeType": "VariableDeclaration",
                "scope": 9560,
                "src": "19854:32:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9554,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19854:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9557,
                "mutability": "mutable",
                "name": "shortsOutstanding",
                "nameLocation": "19904:17:34",
                "nodeType": "VariableDeclaration",
                "scope": 9560,
                "src": "19896:25:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9556,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19896:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9559,
                "mutability": "mutable",
                "name": "shortAverageTimeRemaining",
                "nameLocation": "19939:25:34",
                "nodeType": "VariableDeclaration",
                "scope": 9560,
                "src": "19931:33:34",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 9558,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "19931:7:34",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "PresentValueParams",
            "nameLocation": "19568:18:34",
            "scope": 9918,
            "visibility": "public"
          },
          {
            "id": 9802,
            "nodeType": "FunctionDefinition",
            "src": "20164:5466:34",
            "nodes": [],
            "body": {
              "id": 9801,
              "nodeType": "Block",
              "src": "20276:5354:34",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    9570
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9570,
                      "mutability": "mutable",
                      "name": "netCurveTrade",
                      "nameLocation": "20424:13:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 9801,
                      "src": "20417:20:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 9569,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "20417:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9590,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 9589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 9576,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9564,
                                "src": "20493:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 9577,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "20501:24:34",
                              "memberName": "longAverageTimeRemaining",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9555,
                              "src": "20493:32:34",
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
                              "expression": {
                                "id": 9573,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9564,
                                "src": "20460:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 9574,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "20468:16:34",
                              "memberName": "longsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9553,
                              "src": "20460:24:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 9575,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "20485:7:34",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8364,
                            "src": "20460:32:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9578,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "20460:66:34",
                          "tryCall": false,
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
                        "id": 9572,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "20440:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 9571,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "20440:6:34",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 9579,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "20440:96:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 9585,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9564,
                                "src": "20630:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 9586,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "20638:25:34",
                              "memberName": "shortAverageTimeRemaining",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9559,
                              "src": "20630:33:34",
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
                              "expression": {
                                "id": 9582,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9564,
                                "src": "20575:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 9583,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "20583:17:34",
                              "memberName": "shortsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9557,
                              "src": "20575:25:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 9584,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "20601:7:34",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8364,
                            "src": "20575:33:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9587,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "20575:106:34",
                          "tryCall": false,
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
                        "id": 9581,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "20551:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 9580,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "20551:6:34",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 9588,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "20551:144:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "20440:255:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "20417:278:34"
                },
                {
                  "assignments": [
                    9592
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9592,
                      "mutability": "mutable",
                      "name": "effectiveShareReserves",
                      "nameLocation": "20713:22:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 9801,
                      "src": "20705:30:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9591,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "20705:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9599,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 9594,
                          "name": "_params",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9564,
                          "src": "20783:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                            "typeString": "struct HyperdriveMath.PresentValueParams memory"
                          }
                        },
                        "id": 9595,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20791:13:34",
                        "memberName": "shareReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9539,
                        "src": "20783:21:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "id": 9596,
                          "name": "_params",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9564,
                          "src": "20818:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                            "typeString": "struct HyperdriveMath.PresentValueParams memory"
                          }
                        },
                        "id": 9597,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "20826:15:34",
                        "memberName": "shareAdjustment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9541,
                        "src": "20818:23:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
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
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 9593,
                      "name": "calculateEffectiveShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9917,
                      "src": "20738:31:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 9598,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "20738:113:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "20705:146:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 9602,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9600,
                      "name": "netCurveTrade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9570,
                      "src": "20865:13:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 9601,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "20881:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "20865:17:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 9660,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 9658,
                        "name": "netCurveTrade",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9570,
                        "src": "22586:13:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 9659,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "22602:1:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "22586:17:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 9730,
                    "nodeType": "IfStatement",
                    "src": "22582:1950:34",
                    "trueBody": {
                      "id": 9729,
                      "nodeType": "Block",
                      "src": "22605:1927:34",
                      "statements": [
                        {
                          "expression": {
                            "id": 9664,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 9661,
                              "name": "netCurveTrade",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9570,
                              "src": "23391:13:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "id": 9663,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "UnaryOperation",
                              "operator": "-",
                              "prefix": true,
                              "src": "23407:14:34",
                              "subExpression": {
                                "id": 9662,
                                "name": "netCurveTrade",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9570,
                                "src": "23408:13:34",
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
                            "src": "23391:30:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "id": 9665,
                          "nodeType": "ExpressionStatement",
                          "src": "23391:30:34"
                        },
                        {
                          "assignments": [
                            9667
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 9667,
                              "mutability": "mutable",
                              "name": "maxCurveTrade",
                              "nameLocation": "23490:13:34",
                              "nodeType": "VariableDeclaration",
                              "scope": 9729,
                              "src": "23482:21:34",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 9666,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "23482:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "visibility": "internal"
                            }
                          ],
                          "id": 9682,
                          "initialValue": {
                            "arguments": [
                              {
                                "id": 9670,
                                "name": "effectiveShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9592,
                                "src": "23554:22:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 9671,
                                  "name": "_params",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9564,
                                  "src": "23594:7:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                    "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                  }
                                },
                                "id": 9672,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "23602:12:34",
                                "memberName": "bondReserves",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 9543,
                                "src": "23594:20:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 9676,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 9673,
                                  "name": "ONE",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 8318,
                                  "src": "23632:3:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "expression": {
                                    "id": 9674,
                                    "name": "_params",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9564,
                                    "src": "23638:7:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                      "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                    }
                                  },
                                  "id": 9675,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "23646:11:34",
                                  "memberName": "timeStretch",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 9551,
                                  "src": "23638:19:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "23632:25:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 9677,
                                  "name": "_params",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9564,
                                  "src": "23675:7:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                    "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                  }
                                },
                                "id": 9678,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "23683:10:34",
                                "memberName": "sharePrice",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 9545,
                                "src": "23675:18:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 9679,
                                  "name": "_params",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9564,
                                  "src": "23711:7:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                    "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                  }
                                },
                                "id": 9680,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "23719:17:34",
                                "memberName": "initialSharePrice",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 9547,
                                "src": "23711:25:34",
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 9668,
                                "name": "YieldSpaceMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10632,
                                "src": "23506:14:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$10632_$",
                                  "typeString": "type(library YieldSpaceMath)"
                                }
                              },
                              "id": 9669,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "23521:15:34",
                              "memberName": "calculateMaxBuy",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10488,
                              "src": "23506:30:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 9681,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "23506:244:34",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "23482:268:34"
                        },
                        {
                          "expression": {
                            "id": 9691,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 9683,
                              "name": "maxCurveTrade",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9667,
                              "src": "23764:13:34",
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
                                  "arguments": [
                                    {
                                      "id": 9688,
                                      "name": "netCurveTrade",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9570,
                                      "src": "23806:13:34",
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
                                    "id": 9687,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "23798:7:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_uint256_$",
                                      "typeString": "type(uint256)"
                                    },
                                    "typeName": {
                                      "id": 9686,
                                      "name": "uint256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "23798:7:34",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 9689,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "23798:22:34",
                                  "tryCall": false,
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
                                  "id": 9684,
                                  "name": "maxCurveTrade",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9667,
                                  "src": "23780:13:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 9685,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "23794:3:34",
                                "memberName": "min",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 9011,
                                "src": "23780:17:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 9690,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "23780:41:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "23764:57:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 9692,
                          "nodeType": "ExpressionStatement",
                          "src": "23764:57:34"
                        },
                        {
                          "condition": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 9695,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 9693,
                              "name": "maxCurveTrade",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9667,
                              "src": "23886:13:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": ">",
                            "rightExpression": {
                              "hexValue": "30",
                              "id": 9694,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "23902:1:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            "src": "23886:17:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "id": 9717,
                          "nodeType": "IfStatement",
                          "src": "23882:563:34",
                          "trueBody": {
                            "id": 9716,
                            "nodeType": "Block",
                            "src": "23905:540:34",
                            "statements": [
                              {
                                "expression": {
                                  "id": 9714,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "expression": {
                                      "id": 9696,
                                      "name": "_params",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9564,
                                      "src": "24036:7:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                        "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                      }
                                    },
                                    "id": 9698,
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": true,
                                    "memberLocation": "24044:13:34",
                                    "memberName": "shareReserves",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 9539,
                                    "src": "24036:21:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "+=",
                                  "rightHandSide": {
                                    "arguments": [
                                      {
                                        "id": 9701,
                                        "name": "effectiveShareReserves",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9592,
                                        "src": "24155:22:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      {
                                        "expression": {
                                          "id": 9702,
                                          "name": "_params",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 9564,
                                          "src": "24203:7:34",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                            "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                          }
                                        },
                                        "id": 9703,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "24211:12:34",
                                        "memberName": "bondReserves",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 9543,
                                        "src": "24203:20:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      {
                                        "id": 9704,
                                        "name": "maxCurveTrade",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9667,
                                        "src": "24249:13:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      {
                                        "commonType": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        "id": 9708,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftExpression": {
                                          "id": 9705,
                                          "name": "ONE",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 8318,
                                          "src": "24288:3:34",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "nodeType": "BinaryOperation",
                                        "operator": "-",
                                        "rightExpression": {
                                          "expression": {
                                            "id": 9706,
                                            "name": "_params",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 9564,
                                            "src": "24294:7:34",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                              "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                            }
                                          },
                                          "id": 9707,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "24302:11:34",
                                          "memberName": "timeStretch",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 9551,
                                          "src": "24294:19:34",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        "src": "24288:25:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      {
                                        "expression": {
                                          "id": 9709,
                                          "name": "_params",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 9564,
                                          "src": "24339:7:34",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                            "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                          }
                                        },
                                        "id": 9710,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "24347:10:34",
                                        "memberName": "sharePrice",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 9545,
                                        "src": "24339:18:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      {
                                        "expression": {
                                          "id": 9711,
                                          "name": "_params",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 9564,
                                          "src": "24383:7:34",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                            "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                          }
                                        },
                                        "id": 9712,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "24391:17:34",
                                        "memberName": "initialSharePrice",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 9547,
                                        "src": "24383:25:34",
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
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "expression": {
                                        "id": 9699,
                                        "name": "YieldSpaceMath",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10632,
                                        "src": "24061:14:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$10632_$",
                                          "typeString": "type(library YieldSpaceMath)"
                                        }
                                      },
                                      "id": 9700,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "24097:32:34",
                                      "memberName": "calculateSharesInGivenBondsOutUp",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 10179,
                                      "src": "24061:68:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 9713,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "24061:369:34",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "24036:394:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 9715,
                                "nodeType": "ExpressionStatement",
                                "src": "24036:394:34"
                              }
                            ]
                          }
                        },
                        {
                          "expression": {
                            "id": 9727,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "expression": {
                                "id": 9718,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9564,
                                "src": "24458:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 9720,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "memberLocation": "24466:13:34",
                              "memberName": "shareReserves",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9539,
                              "src": "24458:21:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "+=",
                            "rightHandSide": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 9726,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "arguments": [
                                  {
                                    "id": 9723,
                                    "name": "netCurveTrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9570,
                                    "src": "24491:13:34",
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
                                  "id": 9722,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "24483:7:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 9721,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "24483:7:34",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 9724,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "24483:22:34",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 9725,
                                "name": "maxCurveTrade",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9667,
                                "src": "24508:13:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "24483:38:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "24458:63:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 9728,
                          "nodeType": "ExpressionStatement",
                          "src": "24458:63:34"
                        }
                      ]
                    }
                  },
                  "id": 9731,
                  "nodeType": "IfStatement",
                  "src": "20861:3671:34",
                  "trueBody": {
                    "id": 9657,
                    "nodeType": "Block",
                    "src": "20884:1692:34",
                    "statements": [
                      {
                        "assignments": [
                          9604
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 9604,
                            "mutability": "mutable",
                            "name": "maxCurveTrade",
                            "nameLocation": "21558:13:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 9657,
                            "src": "21550:21:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 9603,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "21550:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 9621,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 9607,
                              "name": "effectiveShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9592,
                              "src": "21623:22:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 9608,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9564,
                                "src": "21663:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 9609,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "21671:12:34",
                              "memberName": "bondReserves",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9543,
                              "src": "21663:20:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 9610,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9564,
                                "src": "21701:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 9611,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "21709:20:34",
                              "memberName": "minimumShareReserves",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9549,
                              "src": "21701:28:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 9615,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 9612,
                                "name": "ONE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8318,
                                "src": "21747:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "expression": {
                                  "id": 9613,
                                  "name": "_params",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9564,
                                  "src": "21753:7:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                    "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                  }
                                },
                                "id": 9614,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "21761:11:34",
                                "memberName": "timeStretch",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 9551,
                                "src": "21753:19:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "21747:25:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 9616,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9564,
                                "src": "21790:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 9617,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "21798:10:34",
                              "memberName": "sharePrice",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9545,
                              "src": "21790:18:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 9618,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9564,
                                "src": "21826:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 9619,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "21834:17:34",
                              "memberName": "initialSharePrice",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9547,
                              "src": "21826:25:34",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "id": 9605,
                              "name": "YieldSpaceMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10632,
                              "src": "21574:14:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$10632_$",
                                "typeString": "type(library YieldSpaceMath)"
                              }
                            },
                            "id": 9606,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "21589:16:34",
                            "memberName": "calculateMaxSell",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10563,
                            "src": "21574:31:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9620,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "21574:291:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "21550:315:34"
                      },
                      {
                        "expression": {
                          "id": 9630,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9622,
                            "name": "maxCurveTrade",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9604,
                            "src": "21879:13:34",
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
                                "arguments": [
                                  {
                                    "id": 9627,
                                    "name": "netCurveTrade",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9570,
                                    "src": "21921:13:34",
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
                                  "id": 9626,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "21913:7:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_uint256_$",
                                    "typeString": "type(uint256)"
                                  },
                                  "typeName": {
                                    "id": 9625,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "21913:7:34",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 9628,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "21913:22:34",
                                "tryCall": false,
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
                                "id": 9623,
                                "name": "maxCurveTrade",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9604,
                                "src": "21895:13:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9624,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "21909:3:34",
                              "memberName": "min",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9011,
                              "src": "21895:17:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 9629,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "21895:41:34",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "21879:57:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9631,
                        "nodeType": "ExpressionStatement",
                        "src": "21879:57:34"
                      },
                      {
                        "condition": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 9634,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 9632,
                            "name": "maxCurveTrade",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9604,
                            "src": "22005:13:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">",
                          "rightExpression": {
                            "hexValue": "30",
                            "id": 9633,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "22021:1:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "22005:17:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 9656,
                        "nodeType": "IfStatement",
                        "src": "22001:565:34",
                        "trueBody": {
                          "id": 9655,
                          "nodeType": "Block",
                          "src": "22024:542:34",
                          "statements": [
                            {
                              "expression": {
                                "id": 9653,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "expression": {
                                    "id": 9635,
                                    "name": "_params",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9564,
                                    "src": "22155:7:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                      "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                    }
                                  },
                                  "id": 9637,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberLocation": "22163:13:34",
                                  "memberName": "shareReserves",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 9539,
                                  "src": "22155:21:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "-=",
                                "rightHandSide": {
                                  "arguments": [
                                    {
                                      "id": 9640,
                                      "name": "effectiveShareReserves",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9592,
                                      "src": "22276:22:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "expression": {
                                        "id": 9641,
                                        "name": "_params",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9564,
                                        "src": "22324:7:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                        }
                                      },
                                      "id": 9642,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "22332:12:34",
                                      "memberName": "bondReserves",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 9543,
                                      "src": "22324:20:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "id": 9643,
                                      "name": "maxCurveTrade",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9604,
                                      "src": "22370:13:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "id": 9647,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "id": 9644,
                                        "name": "ONE",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 8318,
                                        "src": "22409:3:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "expression": {
                                          "id": 9645,
                                          "name": "_params",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 9564,
                                          "src": "22415:7:34",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                            "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                          }
                                        },
                                        "id": 9646,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "22423:11:34",
                                        "memberName": "timeStretch",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 9551,
                                        "src": "22415:19:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "22409:25:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "expression": {
                                        "id": 9648,
                                        "name": "_params",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9564,
                                        "src": "22460:7:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                        }
                                      },
                                      "id": 9649,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "22468:10:34",
                                      "memberName": "sharePrice",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 9545,
                                      "src": "22460:18:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "expression": {
                                        "id": 9650,
                                        "name": "_params",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 9564,
                                        "src": "22504:7:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                        }
                                      },
                                      "id": 9651,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "22512:17:34",
                                      "memberName": "initialSharePrice",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 9547,
                                      "src": "22504:25:34",
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
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    ],
                                    "expression": {
                                      "id": 9638,
                                      "name": "YieldSpaceMath",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 10632,
                                      "src": "22180:14:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$10632_$",
                                        "typeString": "type(library YieldSpaceMath)"
                                      }
                                    },
                                    "id": 9639,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "22216:34:34",
                                    "memberName": "calculateSharesOutGivenBondsInDown",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 10310,
                                    "src": "22180:70:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                      "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                                    }
                                  },
                                  "id": 9652,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "22180:371:34",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "22155:396:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9654,
                              "nodeType": "ExpressionStatement",
                              "src": "22155:396:34"
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    9733
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9733,
                      "mutability": "mutable",
                      "name": "netFlatTrade",
                      "nameLocation": "24672:12:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 9801,
                      "src": "24665:19:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 9732,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "24665:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9761,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 9760,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 9742,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 9739,
                                "name": "ONE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8318,
                                "src": "24761:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "expression": {
                                  "id": 9740,
                                  "name": "_params",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9564,
                                  "src": "24767:7:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                    "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                  }
                                },
                                "id": 9741,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "24775:25:34",
                                "memberName": "shortAverageTimeRemaining",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 9559,
                                "src": "24767:33:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "24761:39:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 9743,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9564,
                                "src": "24818:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 9744,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "24826:10:34",
                              "memberName": "sharePrice",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9545,
                              "src": "24818:18:34",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "expression": {
                                "id": 9736,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9564,
                                "src": "24707:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 9737,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "24715:17:34",
                              "memberName": "shortsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9557,
                              "src": "24707:25:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 9738,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "24733:10:34",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8346,
                            "src": "24707:36:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9745,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "24707:143:34",
                          "tryCall": false,
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
                        "id": 9735,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "24687:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 9734,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "24687:6:34",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 9746,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "24687:173:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 9755,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 9752,
                                "name": "ONE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 8318,
                                "src": "24956:3:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "expression": {
                                  "id": 9753,
                                  "name": "_params",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9564,
                                  "src": "24962:7:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                    "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                  }
                                },
                                "id": 9754,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "24970:24:34",
                                "memberName": "longAverageTimeRemaining",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 9555,
                                "src": "24962:32:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "24956:38:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "expression": {
                                "id": 9756,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9564,
                                "src": "25016:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 9757,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "25024:10:34",
                              "memberName": "sharePrice",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9545,
                              "src": "25016:18:34",
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
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "expression": {
                                "id": 9749,
                                "name": "_params",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9564,
                                "src": "24899:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                                  "typeString": "struct HyperdriveMath.PresentValueParams memory"
                                }
                              },
                              "id": 9750,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "24907:16:34",
                              "memberName": "longsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9553,
                              "src": "24899:24:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 9751,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "24924:10:34",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 8346,
                            "src": "24899:35:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 9758,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "24899:153:34",
                          "tryCall": false,
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
                        "id": 9748,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "24875:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 9747,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "24875:6:34",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 9759,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "24875:191:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "24687:379:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "24665:401:34"
                },
                {
                  "assignments": [
                    9763
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9763,
                      "mutability": "mutable",
                      "name": "updatedShareReserves",
                      "nameLocation": "25083:20:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 9801,
                      "src": "25076:27:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 9762,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "25076:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9771,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 9770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 9766,
                            "name": "_params",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9564,
                            "src": "25113:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                              "typeString": "struct HyperdriveMath.PresentValueParams memory"
                            }
                          },
                          "id": 9767,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "25121:13:34",
                          "memberName": "shareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9539,
                          "src": "25113:21:34",
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
                        "id": 9765,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "25106:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 9764,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "25106:6:34",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 9768,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "25106:29:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "id": 9769,
                      "name": "netFlatTrade",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9733,
                      "src": "25150:12:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "25106:56:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "25076:86:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 9778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9772,
                      "name": "updatedShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9763,
                      "src": "25176:20:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 9775,
                            "name": "_params",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9564,
                            "src": "25206:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                              "typeString": "struct HyperdriveMath.PresentValueParams memory"
                            }
                          },
                          "id": 9776,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "25214:20:34",
                          "memberName": "minimumShareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9549,
                          "src": "25206:28:34",
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
                        "id": 9774,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "25199:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 9773,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "25199:6:34",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 9777,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "25199:36:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "25176:59:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9785,
                  "nodeType": "IfStatement",
                  "src": "25172:131:34",
                  "trueBody": {
                    "id": 9784,
                    "nodeType": "Block",
                    "src": "25237:66:34",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 9779,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7431,
                              "src": "25258:11:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7431_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 9781,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "25270:20:34",
                            "memberName": "NegativePresentValue",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7330,
                            "src": "25258:32:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 9782,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "25258:34:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9783,
                        "nodeType": "RevertStatement",
                        "src": "25251:41:34"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 9793,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 9786,
                        "name": "_params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9564,
                        "src": "25312:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                        }
                      },
                      "id": 9788,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "25320:13:34",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9539,
                      "src": "25312:21:34",
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
                          "id": 9791,
                          "name": "updatedShareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9763,
                          "src": "25344:20:34",
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
                        "id": 9790,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "25336:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 9789,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "25336:7:34",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 9792,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "25336:29:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "25312:53:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9794,
                  "nodeType": "ExpressionStatement",
                  "src": "25312:53:34"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 9795,
                        "name": "_params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9564,
                        "src": "25571:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                        }
                      },
                      "id": 9796,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "25579:13:34",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9539,
                      "src": "25571:21:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "expression": {
                        "id": 9797,
                        "name": "_params",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9564,
                        "src": "25595:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                          "typeString": "struct HyperdriveMath.PresentValueParams memory"
                        }
                      },
                      "id": 9798,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "25603:20:34",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9549,
                      "src": "25595:28:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "25571:52:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9568,
                  "id": 9800,
                  "nodeType": "Return",
                  "src": "25564:59:34"
                }
              ]
            },
            "documentation": {
              "id": 9561,
              "nodeType": "StructuredDocumentation",
              "src": "19977:182:34",
              "text": "@dev Calculates the present value LPs capital in the pool.\n @param _params The parameters for the present value calculation.\n @return The present value of the pool."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculatePresentValue",
            "nameLocation": "20173:21:34",
            "parameters": {
              "id": 9565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9564,
                  "mutability": "mutable",
                  "name": "_params",
                  "nameLocation": "20230:7:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9802,
                  "src": "20204:33:34",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PresentValueParams_$9560_memory_ptr",
                    "typeString": "struct HyperdriveMath.PresentValueParams"
                  },
                  "typeName": {
                    "id": 9563,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 9562,
                      "name": "PresentValueParams",
                      "nameLocations": [
                        "20204:18:34"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 9560,
                      "src": "20204:18:34"
                    },
                    "referencedDeclaration": 9560,
                    "src": "20204:18:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PresentValueParams_$9560_storage_ptr",
                      "typeString": "struct HyperdriveMath.PresentValueParams"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20194:49:34"
            },
            "returnParameters": {
              "id": 9568,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9567,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9802,
                  "src": "20267:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9566,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20267:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20266:9:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9853,
            "nodeType": "FunctionDefinition",
            "src": "26919:1230:34",
            "nodes": [],
            "body": {
              "id": 9852,
              "nodeType": "Block",
              "src": "27184:965:34",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    9821
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9821,
                      "mutability": "mutable",
                      "name": "bondFactor",
                      "nameLocation": "27490:10:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 9852,
                      "src": "27482:18:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 9820,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "27482:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9830,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 9824,
                        "name": "_closeSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9811,
                        "src": "27539:16:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "arguments": [
                          {
                            "id": 9827,
                            "name": "_sharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9813,
                            "src": "27667:11:34",
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
                            "id": 9825,
                            "name": "_openSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9809,
                            "src": "27645:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 9826,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "27661:5:34",
                          "memberName": "mulUp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 8414,
                          "src": "27645:21:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 9828,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "27645:34:34",
                        "tryCall": false,
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 9822,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9805,
                        "src": "27503:11:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 9823,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "27515:10:34",
                      "memberName": "mulDivDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 8346,
                      "src": "27503:22:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 9829,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "27503:186:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "27482:207:34"
                },
                {
                  "expression": {
                    "id": 9837,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9831,
                      "name": "bondFactor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9821,
                      "src": "27896:10:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "+=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 9834,
                          "name": "_flatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9815,
                          "src": "27933:8:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 9835,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9813,
                          "src": "27943:11:34",
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 9832,
                          "name": "_bondAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9805,
                          "src": "27910:11:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9833,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "27922:10:34",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 8346,
                        "src": "27910:22:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 9836,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "27910:45:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "27896:59:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9838,
                  "nodeType": "ExpressionStatement",
                  "src": "27896:59:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9841,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9839,
                      "name": "bondFactor",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9821,
                      "src": "27970:10:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 9840,
                      "name": "_shareAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9807,
                      "src": "27983:12:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "27970:25:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9849,
                  "nodeType": "IfStatement",
                  "src": "27966:147:34",
                  "trueBody": {
                    "id": 9848,
                    "nodeType": "Block",
                    "src": "27997:116:34",
                    "statements": [
                      {
                        "expression": {
                          "id": 9846,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9842,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9818,
                            "src": "28061:13:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 9845,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 9843,
                              "name": "bondFactor",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9821,
                              "src": "28077:10:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 9844,
                              "name": "_shareAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9807,
                              "src": "28090:12:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "28077:25:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "28061:41:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9847,
                        "nodeType": "ExpressionStatement",
                        "src": "28061:41:34"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 9850,
                    "name": "shareProceeds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 9818,
                    "src": "28129:13:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9819,
                  "id": 9851,
                  "nodeType": "Return",
                  "src": "28122:20:34"
                }
              ]
            },
            "documentation": {
              "id": 9803,
              "nodeType": "StructuredDocumentation",
              "src": "25636:1278:34",
              "text": "@dev Calculates the proceeds in shares of closing a short position. This\n      takes into account the trading profits, the interest that was\n      earned by the short, and the amount of margin that was released\n      by closing the short. The math for the short's proceeds in base is\n      given by:\n      proceeds = dy - c * dz + (c1 - c0) * (dy / c0)\n               = dy - c * dz + (c1 / c0) * dy - dy\n               = (c1 / c0) * dy - c * dz\n      We convert the proceeds to shares by dividing by the current share\n      price. In the event that the interest is negative and outweighs the\n      trading profits and margin released, the short's proceeds are\n      marked to zero.\n @param _bondAmount The amount of bonds underlying the closed short.\n @param _shareAmount The amount of shares that it costs to close the\n                     short.\n @param _openSharePrice The share price at the short's open.\n @param _closeSharePrice The share price at the short's close.\n @param _sharePrice The current share price.\n @param _flatFee The flat fee currently within the pool\n @return shareProceeds The short proceeds in shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateShortProceeds",
            "nameLocation": "26928:22:34",
            "parameters": {
              "id": 9816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9805,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "26968:11:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9853,
                  "src": "26960:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9804,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26960:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9807,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "26997:12:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9853,
                  "src": "26989:20:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9806,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "26989:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9809,
                  "mutability": "mutable",
                  "name": "_openSharePrice",
                  "nameLocation": "27027:15:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9853,
                  "src": "27019:23:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9808,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27019:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9811,
                  "mutability": "mutable",
                  "name": "_closeSharePrice",
                  "nameLocation": "27060:16:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9853,
                  "src": "27052:24:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9810,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27052:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9813,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "27094:11:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9853,
                  "src": "27086:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9812,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27086:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9815,
                  "mutability": "mutable",
                  "name": "_flatFee",
                  "nameLocation": "27123:8:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9853,
                  "src": "27115:16:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9814,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27115:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "26950:187:34"
            },
            "returnParameters": {
              "id": 9819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9818,
                  "mutability": "mutable",
                  "name": "shareProceeds",
                  "nameLocation": "27169:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9853,
                  "src": "27161:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9817,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "27161:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "27160:23:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9886,
            "nodeType": "FunctionDefinition",
            "src": "28895:640:34",
            "nodes": [],
            "body": {
              "id": 9885,
              "nodeType": "Block",
              "src": "29104:431:34",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9869,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 9867,
                      "name": "_closeSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9860,
                      "src": "29178:16:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 9868,
                      "name": "_openSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9858,
                      "src": "29197:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "29178:34:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9884,
                  "nodeType": "IfStatement",
                  "src": "29174:355:34",
                  "trueBody": {
                    "id": 9883,
                    "nodeType": "Block",
                    "src": "29214:315:34",
                    "statements": [
                      {
                        "expression": {
                          "id": 9881,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 9870,
                            "name": "shareInterest",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9865,
                            "src": "29282:13:34",
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
                                "id": 9875,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 9873,
                                  "name": "_closeSharePrice",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9860,
                                  "src": "29338:16:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 9874,
                                  "name": "_openSharePrice",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9858,
                                  "src": "29357:15:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "29338:34:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 9878,
                                    "name": "_sharePrice",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9862,
                                    "src": "29492:11:34",
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
                                    "id": 9876,
                                    "name": "_openSharePrice",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9858,
                                    "src": "29470:15:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 9877,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "29486:5:34",
                                  "memberName": "mulUp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 8414,
                                  "src": "29470:21:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 9879,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "29470:34:34",
                                "tryCall": false,
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 9871,
                                "name": "_bondAmount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9856,
                                "src": "29298:11:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 9872,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "29310:10:34",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 8346,
                              "src": "29298:22:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 9880,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "29298:220:34",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "29282:236:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 9882,
                        "nodeType": "ExpressionStatement",
                        "src": "29282:236:34"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 9854,
              "nodeType": "StructuredDocumentation",
              "src": "28155:735:34",
              "text": "@dev Calculates the interest in shares earned by a short position. The\n      math for the short's interest in shares is given by:\n      interest = ((c1 / c0 - 1) * dy) / c\n               = (((c1 - c0) / c0) * dy) / c\n               = ((c1 - c0) / (c0 * c)) * dy\n      In the event that the interest is negative, we mark the interest\n      to zero.\n @param _bondAmount The amount of bonds underlying the closed short.\n @param _openSharePrice The share price at the short's open.\n @param _closeSharePrice The share price at the short's close.\n @param _sharePrice The current share price.\n @return shareInterest The short interest in shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateShortInterest",
            "nameLocation": "28904:22:34",
            "parameters": {
              "id": 9863,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9856,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "28944:11:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9886,
                  "src": "28936:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9855,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28936:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9858,
                  "mutability": "mutable",
                  "name": "_openSharePrice",
                  "nameLocation": "28973:15:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9886,
                  "src": "28965:23:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9857,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28965:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9860,
                  "mutability": "mutable",
                  "name": "_closeSharePrice",
                  "nameLocation": "29006:16:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9886,
                  "src": "28998:24:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9859,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "28998:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9862,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "29040:11:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9886,
                  "src": "29032:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9861,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29032:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "28926:131:34"
            },
            "returnParameters": {
              "id": 9866,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9865,
                  "mutability": "mutable",
                  "name": "shareInterest",
                  "nameLocation": "29089:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9886,
                  "src": "29081:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9864,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29081:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29080:23:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 9917,
            "nodeType": "FunctionDefinition",
            "src": "30120:340:34",
            "nodes": [],
            "body": {
              "id": 9916,
              "nodeType": "Block",
              "src": "30264:196:34",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    9897
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 9897,
                      "mutability": "mutable",
                      "name": "effectiveShareReserves",
                      "nameLocation": "30281:22:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 9916,
                      "src": "30274:29:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 9896,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "30274:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 9904,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 9903,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 9900,
                          "name": "_shareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9889,
                          "src": "30313:14:34",
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
                        "id": 9899,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "30306:6:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 9898,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "30306:6:34",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 9901,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "30306:22:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 9902,
                      "name": "_shareAdjustment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9891,
                      "src": "30343:16:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "30306:53:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "30274:85:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 9908,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 9906,
                          "name": "effectiveShareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9897,
                          "src": "30377:22:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 9907,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "30403:1:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "30377:27:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 9905,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "30369:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 9909,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "30369:36:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 9910,
                  "nodeType": "ExpressionStatement",
                  "src": "30369:36:34"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 9913,
                        "name": "effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9897,
                        "src": "30430:22:34",
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
                      "id": 9912,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "30422:7:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 9911,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "30422:7:34",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 9914,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "30422:31:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 9895,
                  "id": 9915,
                  "nodeType": "Return",
                  "src": "30415:38:34"
                }
              ]
            },
            "documentation": {
              "id": 9887,
              "nodeType": "StructuredDocumentation",
              "src": "29541:574:34",
              "text": "@dev Calculates the effective share reserves. The effective share\n      reserves are the share reserves minus the share adjustment or\n      z - zeta. We use the effective share reserves as the z-parameter\n      to the YieldSpace pricing model. The share adjustment is used to\n      hold the pricing mechanism invariant under the flat component of\n      flat+curve trades.\n @param _shareReserves The pool's share reserves.\n @param _shareAdjustment The pool's share adjustment.\n @return The effective share reserves."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateEffectiveShareReserves",
            "nameLocation": "30129:31:34",
            "parameters": {
              "id": 9892,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9889,
                  "mutability": "mutable",
                  "name": "_shareReserves",
                  "nameLocation": "30178:14:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9917,
                  "src": "30170:22:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9888,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30170:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 9891,
                  "mutability": "mutable",
                  "name": "_shareAdjustment",
                  "nameLocation": "30209:16:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 9917,
                  "src": "30202:23:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 9890,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30202:6:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30160:71:34"
            },
            "returnParameters": {
              "id": 9895,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9894,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 9917,
                  "src": "30255:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 9893,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "30255:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "30254:9:34"
            },
            "scope": 9918,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "HyperdriveMath",
        "contractDependencies": [],
        "contractKind": "library",
        "documentation": {
          "id": 9078,
          "nodeType": "StructuredDocumentation",
          "src": "285:314:34",
          "text": "@author DELV\n @title Hyperdrive\n @notice Math for the Hyperdrive pricing model.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          9918
        ],
        "name": "HyperdriveMath",
        "nameLocation": "607:14:34",
        "scope": 9919,
        "usedErrors": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 34
} as const;
