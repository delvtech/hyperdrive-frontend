export const HyperdriveMath = 
{
  "abi": [],
  "bytecode": {
    "object": "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220cb19d64175c895ae1a75b2e1e5ecca5ba97c0c5b80968af29a2996d9b49d877e64736f6c63430008140033",
    "sourceMap": "599:31382:74:-:0;;;;;;;;;;;;;;;-1:-1:-1;;;599:31382:74;;;;;;;;;;;;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220cb19d64175c895ae1a75b2e1e5ecca5ba97c0c5b80968af29a2996d9b49d877e64736f6c63430008140033",
    "sourceMap": "599:31382:74:-:0;;;;;;;;",
    "linkReferences": {}
  },
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"Hyperdrive\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Math for the Hyperdrive pricing model.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/libraries/HyperdriveMath.sol\":\"HyperdriveMath\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
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
        "contracts/src/libraries/HyperdriveMath.sol": "HyperdriveMath"
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
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16",
        "urls": [
          "bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240",
          "dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97",
        "urls": [
          "bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1",
          "dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveEvents.sol": {
        "keccak256": "0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd",
        "urls": [
          "bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f",
          "dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveRead.sol": {
        "keccak256": "0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597",
        "urls": [
          "bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477",
          "dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr"
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
      },
      "contracts/src/libraries/Errors.sol": {
        "keccak256": "0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0",
        "urls": [
          "bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88",
          "dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf",
        "urls": [
          "bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d",
          "dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744",
        "urls": [
          "bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a",
          "dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/SafeCast.sol": {
        "keccak256": "0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b",
        "urls": [
          "bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1",
          "dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/YieldSpaceMath.sol": {
        "keccak256": "0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346",
        "urls": [
          "bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6",
          "dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk"
        ],
        "license": "Apache-2.0"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
    "id": 15025,
    "exportedSymbols": {
      "FixedPointMath": [
        14294
      ],
      "HyperdriveMath": [
        15024
      ],
      "IHyperdrive": [
        7411
      ],
      "ONE": [
        13529
      ],
      "SafeCast": [
        17708
      ],
      "YieldSpaceMath": [
        18569
      ]
    },
    "nodeType": "SourceUnit",
    "src": "40:31942:74",
    "nodes": [
      {
        "id": 14296,
        "nodeType": "PragmaDirective",
        "src": "40:23:74",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 14298,
        "nodeType": "ImportDirective",
        "src": "65:60:74",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 15025,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14297,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "74:11:74",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14301,
        "nodeType": "ImportDirective",
        "src": "126:59:74",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "./FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 15025,
        "sourceUnit": 14295,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14299,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 14294,
              "src": "135:14:74",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 14300,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13529,
              "src": "151:3:74",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14303,
        "nodeType": "ImportDirective",
        "src": "186:42:74",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/SafeCast.sol",
        "file": "./SafeCast.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 15025,
        "sourceUnit": 17709,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14302,
              "name": "SafeCast",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 17708,
              "src": "195:8:74",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 14305,
        "nodeType": "ImportDirective",
        "src": "229:54:74",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/YieldSpaceMath.sol",
        "file": "./YieldSpaceMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 15025,
        "sourceUnit": 18570,
        "symbolAliases": [
          {
            "foreign": {
              "id": 14304,
              "name": "YieldSpaceMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 18569,
              "src": "238:14:74",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 15024,
        "nodeType": "ContractDefinition",
        "src": "599:31382:74",
        "nodes": [
          {
            "id": 14309,
            "nodeType": "UsingForDirective",
            "src": "628:33:74",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 14307,
              "name": "FixedPointMath",
              "nameLocations": [
                "634:14:74"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14294,
              "src": "634:14:74"
            },
            "typeName": {
              "id": 14308,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "653:7:74",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 14312,
            "nodeType": "UsingForDirective",
            "src": "666:32:74",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 14310,
              "name": "FixedPointMath",
              "nameLocations": [
                "672:14:74"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14294,
              "src": "672:14:74"
            },
            "typeName": {
              "id": 14311,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "691:6:74",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 14315,
            "nodeType": "UsingForDirective",
            "src": "703:27:74",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 14313,
              "name": "SafeCast",
              "nameLocations": [
                "709:8:74"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 17708,
              "src": "709:8:74"
            },
            "typeName": {
              "id": 14314,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "722:7:74",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 14407,
            "nodeType": "FunctionDefinition",
            "src": "1366:1813:74",
            "nodes": [],
            "body": {
              "id": 14406,
              "nodeType": "Block",
              "src": "1491:1688:74",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14326
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14326,
                      "mutability": "mutable",
                      "name": "timeStretch",
                      "nameLocation": "1631:11:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 14406,
                      "src": "1623:19:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14325,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1623:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14342,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 14339,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 14337,
                              "name": "_apr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14318,
                              "src": "1714:4:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "*",
                            "rightExpression": {
                              "hexValue": "313030",
                              "id": 14338,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1721:3:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_100_by_1",
                                "typeString": "int_const 100"
                              },
                              "value": "100"
                            },
                            "src": "1714:10:74",
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
                                "hexValue": "302e3034363635653138",
                                "id": 14334,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1694:10:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_46650000000000000_by_1",
                                  "typeString": "int_const 46650000000000000"
                                },
                                "value": "0.04665e18"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_rational_46650000000000000_by_1",
                                  "typeString": "int_const 46650000000000000"
                                }
                              ],
                              "id": 14333,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1686:7:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint256_$",
                                "typeString": "type(uint256)"
                              },
                              "typeName": {
                                "id": 14332,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "1686:7:74",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 14335,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1686:19:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 14336,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1706:7:74",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13572,
                          "src": "1686:27:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 14340,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1686:39:74",
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
                            "hexValue": "352e3234353932653138",
                            "id": 14329,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1653:10:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_5245920000000000000_by_1",
                              "typeString": "int_const 5245920000000000000"
                            },
                            "value": "5.24592e18"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_5245920000000000000_by_1",
                              "typeString": "int_const 5245920000000000000"
                            }
                          ],
                          "id": 14328,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1645:7:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 14327,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "1645:7:74",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 14330,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1645:19:74",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14331,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1665:7:74",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13590,
                      "src": "1645:27:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1645:90:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1623:112:74"
                },
                {
                  "expression": {
                    "id": 14348,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14343,
                      "name": "timeStretch",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14326,
                      "src": "1745:11:74",
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
                          "id": 14346,
                          "name": "timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14326,
                          "src": "1771:11:74",
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
                          "id": 14344,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13529,
                          "src": "1759:3:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14345,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1763:7:74",
                        "memberName": "divDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13590,
                        "src": "1759:11:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 14347,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1759:24:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1745:38:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14349,
                  "nodeType": "ExpressionStatement",
                  "src": "1745:38:74"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 14352,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 14350,
                      "name": "_positionDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14320,
                      "src": "1874:17:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "333635",
                      "id": 14351,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1895:8:74",
                      "subdenomination": "days",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_31536000_by_1",
                        "typeString": "int_const 31536000"
                      },
                      "value": "365"
                    },
                    "src": "1874:29:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 14356,
                  "nodeType": "IfStatement",
                  "src": "1870:78:74",
                  "trueBody": {
                    "id": 14355,
                    "nodeType": "Block",
                    "src": "1905:43:74",
                    "statements": [
                      {
                        "expression": {
                          "id": 14353,
                          "name": "timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14326,
                          "src": "1926:11:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 14324,
                        "id": 14354,
                        "nodeType": "Return",
                        "src": "1919:18:74"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    14358
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14358,
                      "mutability": "mutable",
                      "name": "targetSpotPrice",
                      "nameLocation": "2774:15:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 14406,
                      "src": "2766:23:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14357,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2766:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14369,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 14367,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 14361,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13529,
                          "src": "2817:3:74",
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
                              "id": 14364,
                              "name": "_positionDuration",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14320,
                              "src": "2839:17:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "333635",
                              "id": 14365,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2858:8:74",
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
                              "id": 14362,
                              "name": "_apr",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14318,
                              "src": "2823:4:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 14363,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2828:10:74",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13554,
                            "src": "2823:15:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 14366,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2823:44:74",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "2817:50:74",
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
                        "id": 14359,
                        "name": "ONE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13529,
                        "src": "2792:3:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14360,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2796:7:74",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13590,
                      "src": "2792:11:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14368,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2792:85:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2766:111:74"
                },
                {
                  "assignments": [
                    14371
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14371,
                      "mutability": "mutable",
                      "name": "benchmarkReserveRatio",
                      "nameLocation": "2895:21:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 14406,
                      "src": "2887:29:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14370,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2887:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14382,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 14375,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13529,
                            "src": "2973:3:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 14376,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13529,
                            "src": "2978:3:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 14377,
                            "name": "_apr",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14318,
                            "src": "2983:4:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "333635",
                            "id": 14378,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2989:8:74",
                            "subdenomination": "days",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_31536000_by_1",
                              "typeString": "int_const 31536000"
                            },
                            "value": "365"
                          },
                          {
                            "id": 14379,
                            "name": "timeStretch",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14326,
                            "src": "2999:11:74",
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
                              "typeIdentifier": "t_rational_31536000_by_1",
                              "typeString": "int_const 31536000"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 14374,
                          "name": "calculateInitialBondReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14569,
                          "src": "2944:28:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 14380,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2944:67:74",
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
                        "id": 14372,
                        "name": "ONE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13529,
                        "src": "2919:3:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14373,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "2923:7:74",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13590,
                      "src": "2919:11:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14381,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2919:102:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2887:134:74"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 14402,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "-",
                            "prefix": true,
                            "src": "3122:35:74",
                            "subExpression": {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "arguments": [
                                    {
                                      "id": 14398,
                                      "name": "benchmarkReserveRatio",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 14371,
                                      "src": "3130:21:74",
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
                                    "id": 14397,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3123:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_int256_$",
                                      "typeString": "type(int256)"
                                    },
                                    "typeName": {
                                      "id": 14396,
                                      "name": "int256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3123:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 14399,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3123:29:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "id": 14400,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3153:2:74",
                                "memberName": "ln",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 14118,
                                "src": "3123:32:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                  "typeString": "function (int256) pure returns (int256)"
                                }
                              },
                              "id": 14401,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3123:34:74",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
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
                          "id": 14395,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3114:7:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 14394,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3114:7:74",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 14403,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3114:44:74",
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
                            "id": 14391,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "UnaryOperation",
                            "operator": "-",
                            "prefix": true,
                            "src": "3058:29:74",
                            "subExpression": {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "expression": {
                                  "arguments": [
                                    {
                                      "id": 14387,
                                      "name": "targetSpotPrice",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 14358,
                                      "src": "3066:15:74",
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
                                    "id": 14386,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3059:6:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_int256_$",
                                      "typeString": "type(int256)"
                                    },
                                    "typeName": {
                                      "id": 14385,
                                      "name": "int256",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3059:6:74",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 14388,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3059:23:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_int256",
                                    "typeString": "int256"
                                  }
                                },
                                "id": 14389,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "3083:2:74",
                                "memberName": "ln",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 14118,
                                "src": "3059:26:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                  "typeString": "function (int256) pure returns (int256)"
                                }
                              },
                              "id": 14390,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3059:28:74",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
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
                          "id": 14384,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3050:7:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 14383,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "3050:7:74",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 14392,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3050:38:74",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14393,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "3089:7:74",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13590,
                      "src": "3050:46:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3050:122:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14324,
                  "id": 14405,
                  "nodeType": "Return",
                  "src": "3031:141:74"
                }
              ]
            },
            "documentation": {
              "id": 14316,
              "nodeType": "StructuredDocumentation",
              "src": "736:625:74",
              "text": "@dev Calculates the time stretch parameter for the YieldSpace curve.\n      This parameter modifies the curvature in order to support a larger\n      or smaller range of APRs. The lower the time stretch, the flatter\n      the curve will be and the narrower the range of feasible APRs. The\n      higher the time stretch, the higher the curvature will be and the\n      wider the range of feasible APRs.\n @param _apr The target APR to use when calculating the time stretch.\n @param _positionDuration The position duration in seconds.\n @return The time stretch parameter."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateTimeStretch",
            "nameLocation": "1375:20:74",
            "parameters": {
              "id": 14321,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14318,
                  "mutability": "mutable",
                  "name": "_apr",
                  "nameLocation": "1413:4:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14407,
                  "src": "1405:12:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14317,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1405:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14320,
                  "mutability": "mutable",
                  "name": "_positionDuration",
                  "nameLocation": "1435:17:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14407,
                  "src": "1427:25:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14319,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1427:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1395:63:74"
            },
            "returnParameters": {
              "id": 14324,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14323,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14407,
                  "src": "1482:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14322,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1482:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1481:9:74"
            },
            "scope": 15024,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14433,
            "nodeType": "FunctionDefinition",
            "src": "3774:531:74",
            "nodes": [],
            "body": {
              "id": 14432,
              "nodeType": "Block",
              "src": "3993:312:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 14430,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14421,
                      "name": "spotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14419,
                      "src": "4168:9:74",
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
                          "id": 14428,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14416,
                          "src": "4285:12:74",
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
                              "id": 14424,
                              "name": "_effectiveShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14410,
                              "src": "4228:23:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 14425,
                              "name": "_bondReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14412,
                              "src": "4253:13:74",
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
                              "id": 14422,
                              "name": "_initialVaultSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14414,
                              "src": "4180:23:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 14423,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4217:10:74",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13554,
                            "src": "4180:47:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 14426,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4180:87:74",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14427,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4281:3:74",
                        "memberName": "pow",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13699,
                        "src": "4180:104:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 14429,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4180:118:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4168:130:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14431,
                  "nodeType": "ExpressionStatement",
                  "src": "4168:130:74"
                }
              ]
            },
            "documentation": {
              "id": 14408,
              "nodeType": "StructuredDocumentation",
              "src": "3185:584:74",
              "text": "@dev Calculates the spot price of bonds in terms of base. This\n      calculation underestimates the pool's spot price.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _initialVaultSharePrice The initial vault share price.\n @param _timeStretch The time stretch parameter.\n @return spotPrice The spot price of bonds in terms of base."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSpotPrice",
            "nameLocation": "3783:18:74",
            "parameters": {
              "id": 14417,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14410,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "3819:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14433,
                  "src": "3811:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14409,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3811:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14412,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "3860:13:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14433,
                  "src": "3852:21:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14411,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3852:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14414,
                  "mutability": "mutable",
                  "name": "_initialVaultSharePrice",
                  "nameLocation": "3891:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14433,
                  "src": "3883:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14413,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3883:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14416,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "3932:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14433,
                  "src": "3924:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14415,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3924:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3801:149:74"
            },
            "returnParameters": {
              "id": 14420,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14419,
                  "mutability": "mutable",
                  "name": "spotPrice",
                  "nameLocation": "3982:9:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14433,
                  "src": "3974:17:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14418,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3974:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3973:19:74"
            },
            "scope": 15024,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14471,
            "nodeType": "FunctionDefinition",
            "src": "4941:945:74",
            "nodes": [],
            "body": {
              "id": 14470,
              "nodeType": "Block",
              "src": "5187:699:74",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14450
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14450,
                      "mutability": "mutable",
                      "name": "spotPrice",
                      "nameLocation": "5511:9:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 14470,
                      "src": "5503:17:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14449,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5503:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14457,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14452,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14436,
                        "src": "5555:23:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14453,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14438,
                        "src": "5592:13:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14454,
                        "name": "_initialVaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14440,
                        "src": "5619:23:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14455,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14444,
                        "src": "5656:12:74",
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
                      "id": 14451,
                      "name": "calculateSpotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14433,
                      "src": "5523:18:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5523:155:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5503:175:74"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 14465,
                            "name": "_positionDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14442,
                            "src": "5837:17:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "hexValue": "333635",
                            "id": 14466,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "5856:8:74",
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
                            "id": 14463,
                            "name": "spotPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14450,
                            "src": "5818:9:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 14464,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5828:8:74",
                          "memberName": "mulDivUp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13604,
                          "src": "5818:18:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 14467,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "5818:47:74",
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
                            "id": 14460,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 14458,
                              "name": "ONE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13529,
                              "src": "5708:3:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 14459,
                              "name": "spotPrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14450,
                              "src": "5714:9:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "5708:15:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 14461,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "5707:17:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14462,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5725:7:74",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13590,
                      "src": "5707:25:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14468,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5707:172:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14448,
                  "id": 14469,
                  "nodeType": "Return",
                  "src": "5688:191:74"
                }
              ]
            },
            "documentation": {
              "id": 14434,
              "nodeType": "StructuredDocumentation",
              "src": "4311:625:74",
              "text": "@dev Calculates the spot APR of the pool. This calculation\n      underestimates the pool's spot APR.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _initialVaultSharePrice The pool's initial vault share price.\n @param _positionDuration The amount of time until maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @return apr The pool's spot APR."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateSpotAPR",
            "nameLocation": "4950:16:74",
            "parameters": {
              "id": 14445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14436,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "4984:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14471,
                  "src": "4976:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14435,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4976:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14438,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "5025:13:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14471,
                  "src": "5017:21:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14437,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5017:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14440,
                  "mutability": "mutable",
                  "name": "_initialVaultSharePrice",
                  "nameLocation": "5056:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14471,
                  "src": "5048:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14439,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5048:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14442,
                  "mutability": "mutable",
                  "name": "_positionDuration",
                  "nameLocation": "5097:17:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14471,
                  "src": "5089:25:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14441,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5089:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14444,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "5132:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14471,
                  "src": "5124:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14443,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5124:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4966:184:74"
            },
            "returnParameters": {
              "id": 14448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14447,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "5182:3:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14471,
                  "src": "5174:11:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14446,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5174:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5173:13:74"
            },
            "scope": 15024,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14502,
            "nodeType": "FunctionDefinition",
            "src": "6471:340:74",
            "nodes": [],
            "body": {
              "id": 14501,
              "nodeType": "Block",
              "src": "6615:196:74",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14482
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14482,
                      "mutability": "mutable",
                      "name": "effectiveShareReserves",
                      "nameLocation": "6632:22:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 14501,
                      "src": "6625:29:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 14481,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6625:6:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14489,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 14488,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "id": 14485,
                          "name": "_shareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14474,
                          "src": "6664:14:74",
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
                        "id": 14484,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "6657:6:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 14483,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "6657:6:74",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 14486,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6657:22:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "id": 14487,
                      "name": "_shareAdjustment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14476,
                      "src": "6694:16:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "6657:53:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6625:85:74"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        },
                        "id": 14493,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 14491,
                          "name": "effectiveShareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14482,
                          "src": "6728:22:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">=",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 14492,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6754:1:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "6728:27:74",
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
                      "id": 14490,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "6720:7:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 14494,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6720:36:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 14495,
                  "nodeType": "ExpressionStatement",
                  "src": "6720:36:74"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 14498,
                        "name": "effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14482,
                        "src": "6781:22:74",
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
                      "id": 14497,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "6773:7:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 14496,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6773:7:74",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 14499,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6773:31:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14480,
                  "id": 14500,
                  "nodeType": "Return",
                  "src": "6766:38:74"
                }
              ]
            },
            "documentation": {
              "id": 14472,
              "nodeType": "StructuredDocumentation",
              "src": "5892:574:74",
              "text": "@dev Calculates the effective share reserves. The effective share\n      reserves are the share reserves minus the share adjustment or\n      z - zeta. We use the effective share reserves as the z-parameter\n      to the YieldSpace pricing model. The share adjustment is used to\n      hold the pricing mechanism invariant under the flat component of\n      flat+curve trades.\n @param _shareReserves The pool's share reserves.\n @param _shareAdjustment The pool's share adjustment.\n @return The effective share reserves."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateEffectiveShareReserves",
            "nameLocation": "6480:31:74",
            "parameters": {
              "id": 14477,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14474,
                  "mutability": "mutable",
                  "name": "_shareReserves",
                  "nameLocation": "6529:14:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14502,
                  "src": "6521:22:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14473,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6521:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14476,
                  "mutability": "mutable",
                  "name": "_shareAdjustment",
                  "nameLocation": "6560:16:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14502,
                  "src": "6553:23:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 14475,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6553:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6511:71:74"
            },
            "returnParameters": {
              "id": 14480,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14479,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14502,
                  "src": "6606:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14478,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6606:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6605:9:74"
            },
            "scope": 15024,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14569,
            "nodeType": "FunctionDefinition",
            "src": "7896:1272:74",
            "nodes": [],
            "body": {
              "id": 14568,
              "nodeType": "Block",
              "src": "8154:1014:74",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14519
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14519,
                      "mutability": "mutable",
                      "name": "t",
                      "nameLocation": "8366:1:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 14568,
                      "src": "8358:9:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14518,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8358:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14524,
                  "initialValue": {
                    "arguments": [
                      {
                        "hexValue": "333635",
                        "id": 14522,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "8396:8:74",
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
                        "id": 14520,
                        "name": "_positionDuration",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14511,
                        "src": "8370:17:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14521,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8388:7:74",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13590,
                      "src": "8370:25:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14523,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8370:35:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8358:47:74"
                },
                {
                  "assignments": [
                    14526
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14526,
                      "mutability": "mutable",
                      "name": "inner",
                      "nameLocation": "8553:5:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 14568,
                      "src": "8545:13:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14525,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8545:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14533,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 14532,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 14527,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13529,
                      "src": "8561:3:74",
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
                          "id": 14530,
                          "name": "t",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14519,
                          "src": "8580:1:74",
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
                          "id": 14528,
                          "name": "_apr",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14509,
                          "src": "8567:4:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14529,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8572:7:74",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13572,
                        "src": "8567:12:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 14531,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8567:15:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8561:21:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8545:37:74"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 14536,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 14534,
                      "name": "inner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14526,
                      "src": "8596:5:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "id": 14535,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13529,
                      "src": "8605:3:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8596:12:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 14558,
                    "nodeType": "Block",
                    "src": "8756:136:74",
                    "statements": [
                      {
                        "expression": {
                          "id": 14556,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14548,
                            "name": "inner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14526,
                            "src": "8839:5:74",
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
                                    "id": 14553,
                                    "name": "_timeStretch",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14513,
                                    "src": "8867:12:74",
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
                                    "id": 14551,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "8857:3:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 14552,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8861:5:74",
                                  "memberName": "divUp",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13640,
                                  "src": "8857:9:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 14554,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8857:23:74",
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
                                "id": 14549,
                                "name": "inner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14526,
                                "src": "8847:5:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 14550,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8853:3:74",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "8847:9:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 14555,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8847:34:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8839:42:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14557,
                        "nodeType": "ExpressionStatement",
                        "src": "8839:42:74"
                      }
                    ]
                  },
                  "id": 14559,
                  "nodeType": "IfStatement",
                  "src": "8592:300:74",
                  "trueBody": {
                    "id": 14547,
                    "nodeType": "Block",
                    "src": "8610:140:74",
                    "statements": [
                      {
                        "expression": {
                          "id": 14545,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14537,
                            "name": "inner",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14526,
                            "src": "8695:5:74",
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
                                    "id": 14542,
                                    "name": "_timeStretch",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 14513,
                                    "src": "8725:12:74",
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
                                    "id": 14540,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "8713:3:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 14541,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8717:7:74",
                                  "memberName": "divDown",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 13590,
                                  "src": "8713:11:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 14543,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "8713:25:74",
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
                                "id": 14538,
                                "name": "inner",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14526,
                                "src": "8703:5:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 14539,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8709:3:74",
                              "memberName": "pow",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13699,
                              "src": "8703:9:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 14544,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8703:36:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "8695:44:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14546,
                        "nodeType": "ExpressionStatement",
                        "src": "8695:44:74"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 14565,
                        "name": "inner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14526,
                        "src": "9142:5:74",
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
                            "id": 14562,
                            "name": "_effectiveShareReserves",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14505,
                            "src": "9092:23:74",
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
                            "id": 14560,
                            "name": "_initialVaultSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14507,
                            "src": "9060:23:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 14561,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "9084:7:74",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13572,
                          "src": "9060:31:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 14563,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "9060:56:74",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14564,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9117:7:74",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13572,
                      "src": "9060:64:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14566,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9060:101:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14517,
                  "id": 14567,
                  "nodeType": "Return",
                  "src": "9041:120:74"
                }
              ]
            },
            "documentation": {
              "id": 14503,
              "nodeType": "StructuredDocumentation",
              "src": "6817:1074:74",
              "text": "@dev Calculates the initial bond reserves assuming that the initial LP\n      receives LP shares amounting to c * z + y. Throughout the rest of\n      the codebase, the bond reserves used include the LP share\n      adjustment specified in YieldSpace. The bond reserves returned by\n      this function are unadjusted which makes it easier to calculate the\n      initial LP shares. This calculation underestimates the pool's\n      initial bond reserves.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _initialVaultSharePrice The pool's initial vault share price.\n @param _apr The pool's APR.\n @param _positionDuration The amount of time until maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @return bondReserves The bond reserves (without adjustment) that make\n         the pool have a specified APR."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateInitialBondReserves",
            "nameLocation": "7905:28:74",
            "parameters": {
              "id": 14514,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14505,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "7951:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14569,
                  "src": "7943:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14504,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7943:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14507,
                  "mutability": "mutable",
                  "name": "_initialVaultSharePrice",
                  "nameLocation": "7992:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14569,
                  "src": "7984:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14506,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7984:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14509,
                  "mutability": "mutable",
                  "name": "_apr",
                  "nameLocation": "8033:4:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14569,
                  "src": "8025:12:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14508,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8025:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14511,
                  "mutability": "mutable",
                  "name": "_positionDuration",
                  "nameLocation": "8055:17:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14569,
                  "src": "8047:25:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14510,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8047:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14513,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "8090:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14569,
                  "src": "8082:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14512,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8082:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7933:175:74"
            },
            "returnParameters": {
              "id": 14517,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14516,
                  "mutability": "mutable",
                  "name": "bondReserves",
                  "nameLocation": "8140:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14569,
                  "src": "8132:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14515,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8132:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8131:22:74"
            },
            "scope": 15024,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14620,
            "nodeType": "FunctionDefinition",
            "src": "10657:1618:74",
            "nodes": [],
            "body": {
              "id": 14619,
              "nodeType": "Block",
              "src": "10939:1336:74",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14588
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14588,
                      "mutability": "mutable",
                      "name": "totalValue",
                      "nameLocation": "11366:10:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 14619,
                      "src": "11358:18:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14587,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "11358:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14597,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14595,
                        "name": "_vaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14580,
                        "src": "11477:16:74",
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
                            "id": 14591,
                            "name": "_closeVaultSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14578,
                            "src": "11413:21:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 14592,
                            "name": "_openVaultSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14576,
                            "src": "11436:20:74",
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
                            "id": 14589,
                            "name": "_bondAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14572,
                            "src": "11379:11:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 14590,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11404:8:74",
                          "memberName": "mulDivUp",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13604,
                          "src": "11379:33:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 14593,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "11379:78:74",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14594,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "11471:5:74",
                      "memberName": "divUp",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13640,
                      "src": "11379:97:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14596,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "11379:115:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "11358:136:74"
                },
                {
                  "expression": {
                    "id": 14604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14598,
                      "name": "totalValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14588,
                      "src": "11728:10:74",
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
                          "id": 14601,
                          "name": "_flatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14582,
                          "src": "11763:8:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14602,
                          "name": "_vaultSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14580,
                          "src": "11773:16:74",
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
                          "id": 14599,
                          "name": "_bondAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14572,
                          "src": "11742:11:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14600,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "11754:8:74",
                        "memberName": "mulDivUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13604,
                        "src": "11742:20:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 14603,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "11742:48:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "11728:62:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14605,
                  "nodeType": "ExpressionStatement",
                  "src": "11728:62:74"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 14608,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 14606,
                      "name": "totalValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14588,
                      "src": "12093:10:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 14607,
                      "name": "_shareAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14574,
                      "src": "12106:12:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "12093:25:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 14616,
                  "nodeType": "IfStatement",
                  "src": "12089:149:74",
                  "trueBody": {
                    "id": 14615,
                    "nodeType": "Block",
                    "src": "12120:118:74",
                    "statements": [
                      {
                        "expression": {
                          "id": 14613,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14609,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14585,
                            "src": "12186:13:74",
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
                            "id": 14612,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 14610,
                              "name": "totalValue",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14588,
                              "src": "12202:10:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 14611,
                              "name": "_shareAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14574,
                              "src": "12215:12:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "12202:25:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "12186:41:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14614,
                        "nodeType": "ExpressionStatement",
                        "src": "12186:41:74"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 14617,
                    "name": "shareProceeds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14585,
                    "src": "12255:13:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14586,
                  "id": 14618,
                  "nodeType": "Return",
                  "src": "12248:20:74"
                }
              ]
            },
            "documentation": {
              "id": 14570,
              "nodeType": "StructuredDocumentation",
              "src": "9174:1478:74",
              "text": "@dev Calculates the proceeds in shares of closing a short position. This\n      takes into account the trading profits, the interest that was\n      earned by the short, the flat fee the short pays, and the amount of\n      margin that was released by closing the short. The math for the\n      short's proceeds in base is given by:\n      proceeds = (1 + flat_fee) * dy - c * dz + (c1 - c0) * (dy / c0)\n               = (1 + flat_fee) * dy - c * dz + (c1 / c0) * dy - dy\n               = (c1 / c0 + flat_fee) * dy - c * dz\n      We convert the proceeds to shares by dividing by the current vault\n      share price. In the event that the interest is negative and\n      outweighs the trading profits and margin released, the short's\n      proceeds are marked to zero.\n      This variant of the calculation overestimates the short proceeds.\n @param _bondAmount The amount of bonds underlying the closed short.\n @param _shareAmount The amount of shares that it costs to close the\n                     short.\n @param _openVaultSharePrice The vault share price at the short's open.\n @param _closeVaultSharePrice The vault share price at the short's close.\n @param _vaultSharePrice The current vault share price.\n @param _flatFee The flat fee currently within the pool\n @return shareProceeds The short proceeds in shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateShortProceedsUp",
            "nameLocation": "10666:24:74",
            "parameters": {
              "id": 14583,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14572,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "10708:11:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14620,
                  "src": "10700:19:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14571,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10700:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14574,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "10737:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14620,
                  "src": "10729:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14573,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10729:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14576,
                  "mutability": "mutable",
                  "name": "_openVaultSharePrice",
                  "nameLocation": "10767:20:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14620,
                  "src": "10759:28:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14575,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10759:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14578,
                  "mutability": "mutable",
                  "name": "_closeVaultSharePrice",
                  "nameLocation": "10805:21:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14620,
                  "src": "10797:29:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14577,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10797:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14580,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "10844:16:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14620,
                  "src": "10836:24:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14579,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10836:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14582,
                  "mutability": "mutable",
                  "name": "_flatFee",
                  "nameLocation": "10878:8:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14620,
                  "src": "10870:16:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14581,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10870:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10690:202:74"
            },
            "returnParameters": {
              "id": 14586,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14585,
                  "mutability": "mutable",
                  "name": "shareProceeds",
                  "nameLocation": "10924:13:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14620,
                  "src": "10916:21:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14584,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10916:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10915:23:74"
            },
            "scope": 15024,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14671,
            "nodeType": "FunctionDefinition",
            "src": "13765:1632:74",
            "nodes": [],
            "body": {
              "id": 14670,
              "nodeType": "Block",
              "src": "14049:1348:74",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14639
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14639,
                      "mutability": "mutable",
                      "name": "totalValue",
                      "nameLocation": "14479:10:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 14670,
                      "src": "14471:18:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 14638,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "14471:7:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14648,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 14646,
                        "name": "_vaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14631,
                        "src": "14594:16:74",
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
                            "id": 14642,
                            "name": "_closeVaultSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14629,
                            "src": "14528:21:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "id": 14643,
                            "name": "_openVaultSharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14627,
                            "src": "14551:20:74",
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
                            "id": 14640,
                            "name": "_bondAmount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14623,
                            "src": "14492:11:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 14641,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "14517:10:74",
                          "memberName": "mulDivDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 13554,
                          "src": "14492:35:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 14644,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "14492:80:74",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14645,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "14586:7:74",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13590,
                      "src": "14492:101:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14647,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "14492:119:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "14471:140:74"
                },
                {
                  "expression": {
                    "id": 14655,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14649,
                      "name": "totalValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14639,
                      "src": "14848:10:74",
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
                          "id": 14652,
                          "name": "_flatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14633,
                          "src": "14885:8:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14653,
                          "name": "_vaultSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14631,
                          "src": "14895:16:74",
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
                          "id": 14650,
                          "name": "_bondAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14623,
                          "src": "14862:11:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14651,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "14874:10:74",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13554,
                        "src": "14862:22:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 14654,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "14862:50:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "14848:64:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14656,
                  "nodeType": "ExpressionStatement",
                  "src": "14848:64:74"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 14659,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 14657,
                      "name": "totalValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14639,
                      "src": "15215:10:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 14658,
                      "name": "_shareAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14625,
                      "src": "15228:12:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "15215:25:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 14667,
                  "nodeType": "IfStatement",
                  "src": "15211:149:74",
                  "trueBody": {
                    "id": 14666,
                    "nodeType": "Block",
                    "src": "15242:118:74",
                    "statements": [
                      {
                        "expression": {
                          "id": 14664,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14660,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14636,
                            "src": "15308:13:74",
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
                            "id": 14663,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 14661,
                              "name": "totalValue",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14639,
                              "src": "15324:10:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 14662,
                              "name": "_shareAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14625,
                              "src": "15337:12:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "15324:25:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "15308:41:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14665,
                        "nodeType": "ExpressionStatement",
                        "src": "15308:41:74"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 14668,
                    "name": "shareProceeds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 14636,
                    "src": "15377:13:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14637,
                  "id": 14669,
                  "nodeType": "Return",
                  "src": "15370:20:74"
                }
              ]
            },
            "documentation": {
              "id": 14621,
              "nodeType": "StructuredDocumentation",
              "src": "12281:1479:74",
              "text": "@dev Calculates the proceeds in shares of closing a short position. This\n      takes into account the trading profits, the interest that was\n      earned by the short, the flat fee the short pays, and the amount of\n      margin that was released by closing the short. The math for the\n      short's proceeds in base is given by:\n      proceeds = (1 + flat_fee) * dy - c * dz + (c1 - c0) * (dy / c0)\n               = (1 + flat_fee) * dy - c * dz + (c1 / c0) * dy - dy\n               = (c1 / c0 + flat_fee) * dy - c * dz\n      We convert the proceeds to shares by dividing by the current vault\n      share price. In the event that the interest is negative and\n      outweighs the trading profits and margin released, the short's\n      proceeds are marked to zero.\n      This variant of the calculation underestimates the short proceeds.\n @param _bondAmount The amount of bonds underlying the closed short.\n @param _shareAmount The amount of shares that it costs to close the\n                     short.\n @param _openVaultSharePrice The vault share price at the short's open.\n @param _closeVaultSharePrice The vault share price at the short's close.\n @param _vaultSharePrice The current vault share price.\n @param _flatFee The flat fee currently within the pool\n @return shareProceeds The short proceeds in shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateShortProceedsDown",
            "nameLocation": "13774:26:74",
            "parameters": {
              "id": 14634,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14623,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "13818:11:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14671,
                  "src": "13810:19:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14622,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13810:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14625,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "13847:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14671,
                  "src": "13839:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14624,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13839:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14627,
                  "mutability": "mutable",
                  "name": "_openVaultSharePrice",
                  "nameLocation": "13877:20:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14671,
                  "src": "13869:28:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14626,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13869:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14629,
                  "mutability": "mutable",
                  "name": "_closeVaultSharePrice",
                  "nameLocation": "13915:21:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14671,
                  "src": "13907:29:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14628,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13907:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14631,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "13954:16:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14671,
                  "src": "13946:24:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14630,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13946:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14633,
                  "mutability": "mutable",
                  "name": "_flatFee",
                  "nameLocation": "13988:8:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14671,
                  "src": "13980:16:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14632,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13980:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13800:202:74"
            },
            "returnParameters": {
              "id": 14637,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14636,
                  "mutability": "mutable",
                  "name": "shareProceeds",
                  "nameLocation": "14034:13:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14671,
                  "src": "14026:21:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14635,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14026:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14025:23:74"
            },
            "scope": 15024,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14707,
            "nodeType": "FunctionDefinition",
            "src": "16119:541:74",
            "nodes": [],
            "body": {
              "id": 14706,
              "nodeType": "Block",
              "src": "16285:375:74",
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
                        "id": 14703,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 14688,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13529,
                          "src": "16493:3:74",
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
                              "id": 14701,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 14699,
                                "name": "ONE",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 13529,
                                "src": "16603:3:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 14700,
                                "name": "_flatFee",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14678,
                                "src": "16609:8:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "16603:14:74",
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
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "id": 14696,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "arguments": [
                                      {
                                        "id": 14693,
                                        "name": "_startingSpotPrice",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 14674,
                                        "src": "16545:18:74",
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
                                        "id": 14691,
                                        "name": "ONE",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 13529,
                                        "src": "16535:3:74",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "id": 14692,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberLocation": "16539:5:74",
                                      "memberName": "divUp",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": 13640,
                                      "src": "16535:9:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                                      }
                                    },
                                    "id": 14694,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "16535:29:74",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "-",
                                  "rightExpression": {
                                    "id": 14695,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 13529,
                                    "src": "16567:3:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "16535:35:74",
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
                                  "id": 14689,
                                  "name": "_curveFee",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14676,
                                  "src": "16519:9:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 14690,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "16529:5:74",
                                "memberName": "mulUp",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 13622,
                                "src": "16519:15:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 14697,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "16519:52:74",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 14698,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "16572:5:74",
                            "memberName": "mulUp",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 13622,
                            "src": "16519:58:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 14702,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16519:120:74",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "16493:146:74",
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
                            "id": 14685,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 14683,
                              "name": "ONE",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 13529,
                              "src": "16384:3:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 14684,
                              "name": "_flatFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14678,
                              "src": "16390:8:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "16384:14:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 14686,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "16383:16:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 14687,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16400:7:74",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13590,
                      "src": "16383:24:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14704,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16383:270:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14682,
                  "id": 14705,
                  "nodeType": "Return",
                  "src": "16364:289:74"
                }
              ]
            },
            "documentation": {
              "id": 14672,
              "nodeType": "StructuredDocumentation",
              "src": "15403:711:74",
              "text": "@dev Since traders pay a curve fee when they open longs on Hyperdrive,\n      it is possible for traders to receive a negative interest rate even\n      if curve's spot price is less than or equal to 1.\n      Given the curve fee `phi_c` and the starting spot price `p_0`, the\n      maximum spot price is given by:\n      p_max = (1 - phi_f) / (1 + phi_c * (1 / p_0 - 1) * (1 - phi_f))\n      We underestimate the maximum spot price to be conservative.\n @param _startingSpotPrice The spot price at the start of the trade.\n @param _curveFee The curve fee.\n @param _flatFee The flat fee.\n @return The maximum spot price."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLongMaxSpotPrice",
            "nameLocation": "16128:29:74",
            "parameters": {
              "id": 14679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14674,
                  "mutability": "mutable",
                  "name": "_startingSpotPrice",
                  "nameLocation": "16175:18:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "16167:26:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14673,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16167:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14676,
                  "mutability": "mutable",
                  "name": "_curveFee",
                  "nameLocation": "16211:9:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "16203:17:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14675,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16203:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14678,
                  "mutability": "mutable",
                  "name": "_flatFee",
                  "nameLocation": "16238:8:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "16230:16:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16230:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16157:95:74"
            },
            "returnParameters": {
              "id": 14682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14681,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14707,
                  "src": "16276:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14680,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16276:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16275:9:74"
            },
            "scope": 15024,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14727,
            "nodeType": "FunctionDefinition",
            "src": "17312:284:74",
            "nodes": [],
            "body": {
              "id": 14726,
              "nodeType": "Block",
              "src": "17454:142:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 14724,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 14717,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13529,
                      "src": "17542:3:74",
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
                          "id": 14722,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 14720,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13529,
                            "src": "17564:3:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 14721,
                            "name": "_startingSpotPrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14710,
                            "src": "17570:18:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "17564:24:74",
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
                          "id": 14718,
                          "name": "_curveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14712,
                          "src": "17548:9:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14719,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17558:5:74",
                        "memberName": "mulUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13622,
                        "src": "17548:15:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 14723,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "17548:41:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "17542:47:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14716,
                  "id": 14725,
                  "nodeType": "Return",
                  "src": "17535:54:74"
                }
              ]
            },
            "documentation": {
              "id": 14708,
              "nodeType": "StructuredDocumentation",
              "src": "16666:641:74",
              "text": "@dev Since traders pay a curve fee when they close shorts on Hyperdrive,\n      it is possible for traders to receive a negative interest rate even\n      if curve's spot price is less than or equal to 1.\n      Given the curve fee `phi_c` and the starting spot price `p_0`, the\n      maximum spot price is given by:\n      p_max = 1 - phi_c * (1 - p_0)\n      We underestimate the maximum spot price to be conservative.\n @param _startingSpotPrice The spot price at the start of the trade.\n @param _curveFee The curve fee.\n @return The maximum spot price."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseShortMaxSpotPrice",
            "nameLocation": "17321:31:74",
            "parameters": {
              "id": 14713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14710,
                  "mutability": "mutable",
                  "name": "_startingSpotPrice",
                  "nameLocation": "17370:18:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14727,
                  "src": "17362:26:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14709,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17362:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14712,
                  "mutability": "mutable",
                  "name": "_curveFee",
                  "nameLocation": "17406:9:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14727,
                  "src": "17398:17:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14711,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17398:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17352:69:74"
            },
            "returnParameters": {
              "id": 14716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14715,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14727,
                  "src": "17445:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14714,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "17445:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "17444:9:74"
            },
            "scope": 15024,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14758,
            "nodeType": "FunctionDefinition",
            "src": "18303:892:74",
            "nodes": [],
            "body": {
              "id": 14757,
              "nodeType": "Block",
              "src": "18575:620:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 14747,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14730,
                        "src": "18770:23:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14748,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14732,
                        "src": "18811:13:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14749,
                        "name": "_shareAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14734,
                        "src": "18842:12:74",
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
                        "id": 14752,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 14750,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13529,
                          "src": "19081:3:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 14751,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14736,
                          "src": "19087:12:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "19081:18:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14753,
                        "name": "_vaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14738,
                        "src": "19117:16:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14754,
                        "name": "_initialVaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14740,
                        "src": "19151:23:74",
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
                        "id": 14745,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18569,
                        "src": "18703:14:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$18569_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 14746,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "18718:34:74",
                      "memberName": "calculateBondsOutGivenSharesInDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 17834,
                      "src": "18703:49:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14755,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "18703:485:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14744,
                  "id": 14756,
                  "nodeType": "Return",
                  "src": "18684:504:74"
                }
              ]
            },
            "documentation": {
              "id": 14728,
              "nodeType": "StructuredDocumentation",
              "src": "17602:696:74",
              "text": "@dev Calculates the number of bonds a user will receive when opening a\n      long position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _shareAmount The amount of shares the user is depositing.\n @param _timeStretch The time stretch parameter.\n @param _vaultSharePrice The vault share price.\n @param _initialVaultSharePrice The initial vault share price.\n @return bondReservesDelta The bonds paid by the reserves in the trade."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenLong",
            "nameLocation": "18312:17:74",
            "parameters": {
              "id": 14741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14730,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "18347:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14758,
                  "src": "18339:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14729,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18339:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14732,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "18388:13:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14758,
                  "src": "18380:21:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14731,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18380:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14734,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "18419:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14758,
                  "src": "18411:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14733,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18411:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14736,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "18449:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14758,
                  "src": "18441:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14735,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18441:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14738,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "18479:16:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14758,
                  "src": "18471:24:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14737,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18471:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14740,
                  "mutability": "mutable",
                  "name": "_initialVaultSharePrice",
                  "nameLocation": "18513:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14758,
                  "src": "18505:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14739,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18505:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18329:213:74"
            },
            "returnParameters": {
              "id": 14744,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14743,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14758,
                  "src": "18566:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14742,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18566:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18565:9:74"
            },
            "scope": 15024,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14823,
            "nodeType": "FunctionDefinition",
            "src": "20176:2126:74",
            "nodes": [],
            "body": {
              "id": 14822,
              "nodeType": "Block",
              "src": "20625:1677:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 14790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14782,
                      "name": "shareProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14780,
                      "src": "21200:13:74",
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
                          "id": 14787,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 14785,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13529,
                            "src": "21250:3:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 14786,
                            "name": "_normalizedTimeRemaining",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14767,
                            "src": "21256:24:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "21250:30:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14788,
                          "name": "_vaultSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14771,
                          "src": "21294:16:74",
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
                          "id": 14783,
                          "name": "_amountIn",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14765,
                          "src": "21216:9:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14784,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21226:10:74",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13554,
                        "src": "21216:20:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 14789,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "21216:104:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "21200:120:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14791,
                  "nodeType": "ExpressionStatement",
                  "src": "21200:120:74"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 14794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 14792,
                      "name": "_normalizedTimeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14767,
                      "src": "21334:24:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 14793,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "21361:1:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "21334:28:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 14821,
                  "nodeType": "IfStatement",
                  "src": "21330:966:74",
                  "trueBody": {
                    "id": 14820,
                    "nodeType": "Block",
                    "src": "21364:932:74",
                    "statements": [
                      {
                        "expression": {
                          "id": 14800,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14795,
                            "name": "bondCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14778,
                            "src": "21553:14:74",
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
                                "id": 14798,
                                "name": "_normalizedTimeRemaining",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14767,
                                "src": "21588:24:74",
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
                                "id": 14796,
                                "name": "_amountIn",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14765,
                                "src": "21570:9:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 14797,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "21580:7:74",
                              "memberName": "mulDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13572,
                              "src": "21570:17:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 14799,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "21570:43:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "21553:60:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14801,
                        "nodeType": "ExpressionStatement",
                        "src": "21553:60:74"
                      },
                      {
                        "expression": {
                          "id": 14814,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14802,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14776,
                            "src": "21734:15:74",
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
                                "id": 14805,
                                "name": "_effectiveShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14761,
                                "src": "21819:23:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 14806,
                                "name": "_bondReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14763,
                                "src": "21860:13:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 14807,
                                "name": "bondCurveDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14778,
                                "src": "21891:14:74",
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
                                "id": 14810,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 14808,
                                  "name": "ONE",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13529,
                                  "src": "22132:3:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 14809,
                                  "name": "_timeStretch",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14769,
                                  "src": "22138:12:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "22132:18:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 14811,
                                "name": "_vaultSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14771,
                                "src": "22168:16:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 14812,
                                "name": "_initialVaultSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14773,
                                "src": "22202:23:74",
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
                                "id": 14803,
                                "name": "YieldSpaceMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18569,
                                "src": "21752:14:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$18569_$",
                                  "typeString": "type(library YieldSpaceMath)"
                                }
                              },
                              "id": 14804,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "21767:34:74",
                              "memberName": "calculateSharesOutGivenBondsInDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 18133,
                              "src": "21752:49:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 14813,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "21752:487:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "21734:505:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14815,
                        "nodeType": "ExpressionStatement",
                        "src": "21734:505:74"
                      },
                      {
                        "expression": {
                          "id": 14818,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14816,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14780,
                            "src": "22253:13:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 14817,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14776,
                            "src": "22270:15:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "22253:32:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14819,
                        "nodeType": "ExpressionStatement",
                        "src": "22253:32:74"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 14759,
              "nodeType": "StructuredDocumentation",
              "src": "19201:970:74",
              "text": "@dev Calculates the amount of shares a user will receive when closing a\n      long position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bond reserves.\n @param _amountIn The amount of bonds the user is closing.\n @param _normalizedTimeRemaining The normalized time remaining of the\n        position.\n @param _timeStretch The time stretch parameter.\n @param _vaultSharePrice The vault share price.\n @param _initialVaultSharePrice The vault share price when the pool was\n        deployed.\n @return shareCurveDelta The shares paid by the reserves in the trade.\n @return bondCurveDelta The bonds paid to the reserves in the trade.\n @return shareProceeds The shares that the user will receive."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseLong",
            "nameLocation": "20185:18:74",
            "parameters": {
              "id": 14774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14761,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "20221:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14823,
                  "src": "20213:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14760,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20213:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14763,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "20262:13:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14823,
                  "src": "20254:21:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14762,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20254:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14765,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "20293:9:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14823,
                  "src": "20285:17:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14764,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20285:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14767,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "20320:24:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14823,
                  "src": "20312:32:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14766,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20312:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14769,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "20362:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14823,
                  "src": "20354:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14768,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20354:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14771,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "20392:16:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14823,
                  "src": "20384:24:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14770,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20384:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14773,
                  "mutability": "mutable",
                  "name": "_initialVaultSharePrice",
                  "nameLocation": "20426:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14823,
                  "src": "20418:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14772,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20418:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20203:252:74"
            },
            "returnParameters": {
              "id": 14781,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14776,
                  "mutability": "mutable",
                  "name": "shareCurveDelta",
                  "nameLocation": "20524:15:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14823,
                  "src": "20516:23:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14775,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20516:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14778,
                  "mutability": "mutable",
                  "name": "bondCurveDelta",
                  "nameLocation": "20561:14:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14823,
                  "src": "20553:22:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14777,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20553:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14780,
                  "mutability": "mutable",
                  "name": "shareProceeds",
                  "nameLocation": "20597:13:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14823,
                  "src": "20589:21:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14779,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20589:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20502:118:74"
            },
            "scope": 15024,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14854,
            "nodeType": "FunctionDefinition",
            "src": "22996:866:74",
            "nodes": [],
            "body": {
              "id": 14853,
              "nodeType": "Block",
              "src": "23266:596:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 14843,
                        "name": "_effectiveShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14826,
                        "src": "23440:23:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14844,
                        "name": "_bondReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14828,
                        "src": "23481:13:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14845,
                        "name": "_amountIn",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14830,
                        "src": "23512:9:74",
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
                        "id": 14848,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 14846,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13529,
                          "src": "23748:3:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 14847,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14832,
                          "src": "23754:12:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "23748:18:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14849,
                        "name": "_vaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14834,
                        "src": "23784:16:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 14850,
                        "name": "_initialVaultSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14836,
                        "src": "23818:23:74",
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
                        "id": 14841,
                        "name": "YieldSpaceMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18569,
                        "src": "23373:14:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$18569_$",
                          "typeString": "type(library YieldSpaceMath)"
                        }
                      },
                      "id": 14842,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "23388:34:74",
                      "memberName": "calculateSharesOutGivenBondsInDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 18133,
                      "src": "23373:49:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 14851,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "23373:482:74",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 14840,
                  "id": 14852,
                  "nodeType": "Return",
                  "src": "23354:501:74"
                }
              ]
            },
            "documentation": {
              "id": 14824,
              "nodeType": "StructuredDocumentation",
              "src": "22308:683:74",
              "text": "@dev Calculates the amount of shares that will be received given a\n      specified amount of bonds.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bonds reserves.\n @param _amountIn The amount of bonds the user is providing.\n @param _timeStretch The time stretch parameter.\n @param _vaultSharePrice The vault share price.\n @param _initialVaultSharePrice The initial vault share price.\n @return The shares paid by the reserves in the trade."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateOpenShort",
            "nameLocation": "23005:18:74",
            "parameters": {
              "id": 14837,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14826,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "23041:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14854,
                  "src": "23033:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14825,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23033:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14828,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "23082:13:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14854,
                  "src": "23074:21:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14827,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23074:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14830,
                  "mutability": "mutable",
                  "name": "_amountIn",
                  "nameLocation": "23113:9:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14854,
                  "src": "23105:17:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14829,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23105:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14832,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "23140:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14854,
                  "src": "23132:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14831,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23132:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14834,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "23170:16:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14854,
                  "src": "23162:24:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14833,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23162:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14836,
                  "mutability": "mutable",
                  "name": "_initialVaultSharePrice",
                  "nameLocation": "23204:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14854,
                  "src": "23196:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14835,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23196:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23023:210:74"
            },
            "returnParameters": {
              "id": 14840,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14839,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 14854,
                  "src": "23257:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14838,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23257:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23256:9:74"
            },
            "scope": 15024,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 14919,
            "nodeType": "FunctionDefinition",
            "src": "24820:2130:74",
            "nodes": [],
            "body": {
              "id": 14918,
              "nodeType": "Block",
              "src": "25270:1680:74",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 14886,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 14878,
                      "name": "sharePayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14876,
                      "src": "25932:12:74",
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
                          "id": 14883,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 14881,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 13529,
                            "src": "25980:3:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 14882,
                            "name": "_normalizedTimeRemaining",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14863,
                            "src": "25986:24:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "25980:30:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 14884,
                          "name": "_vaultSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14867,
                          "src": "26024:16:74",
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
                          "id": 14879,
                          "name": "_amountOut",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14861,
                          "src": "25947:10:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14880,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "25958:8:74",
                        "memberName": "mulDivUp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 13604,
                        "src": "25947:19:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 14885,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "25947:103:74",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "25932:118:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 14887,
                  "nodeType": "ExpressionStatement",
                  "src": "25932:118:74"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 14890,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 14888,
                      "name": "_normalizedTimeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14863,
                      "src": "26064:24:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 14889,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "26091:1:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "26064:28:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 14917,
                  "nodeType": "IfStatement",
                  "src": "26060:884:74",
                  "trueBody": {
                    "id": 14916,
                    "nodeType": "Block",
                    "src": "26094:850:74",
                    "statements": [
                      {
                        "expression": {
                          "id": 14896,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14891,
                            "name": "bondCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14874,
                            "src": "26209:14:74",
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
                                "id": 14894,
                                "name": "_normalizedTimeRemaining",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14863,
                                "src": "26243:24:74",
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
                                "id": 14892,
                                "name": "_amountOut",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14861,
                                "src": "26226:10:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 14893,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "26237:5:74",
                              "memberName": "mulUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13622,
                              "src": "26226:16:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 14895,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "26226:42:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "26209:59:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14897,
                        "nodeType": "ExpressionStatement",
                        "src": "26209:59:74"
                      },
                      {
                        "expression": {
                          "id": 14910,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14898,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14872,
                            "src": "26385:15:74",
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
                                "id": 14901,
                                "name": "_effectiveShareReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14857,
                                "src": "26468:23:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 14902,
                                "name": "_bondReserves",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14859,
                                "src": "26509:13:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 14903,
                                "name": "bondCurveDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14874,
                                "src": "26540:14:74",
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
                                "id": 14906,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 14904,
                                  "name": "ONE",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 13529,
                                  "src": "26781:3:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "id": 14905,
                                  "name": "_timeStretch",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14865,
                                  "src": "26787:12:74",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "26781:18:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 14907,
                                "name": "_vaultSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14867,
                                "src": "26817:16:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 14908,
                                "name": "_initialVaultSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14869,
                                "src": "26851:23:74",
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
                                "id": 14899,
                                "name": "YieldSpaceMath",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 18569,
                                "src": "26403:14:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_YieldSpaceMath_$18569_$",
                                  "typeString": "type(library YieldSpaceMath)"
                                }
                              },
                              "id": 14900,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "26418:32:74",
                              "memberName": "calculateSharesInGivenBondsOutUp",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 17960,
                              "src": "26403:47:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256,uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 14909,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "26403:485:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "26385:503:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14911,
                        "nodeType": "ExpressionStatement",
                        "src": "26385:503:74"
                      },
                      {
                        "expression": {
                          "id": 14914,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14912,
                            "name": "sharePayment",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14876,
                            "src": "26902:12:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 14913,
                            "name": "shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14872,
                            "src": "26918:15:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "26902:31:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14915,
                        "nodeType": "ExpressionStatement",
                        "src": "26902:31:74"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 14855,
              "nodeType": "StructuredDocumentation",
              "src": "23868:947:74",
              "text": "@dev Calculates the amount of base that a user will receive when closing\n      a short position.\n @param _effectiveShareReserves The pool's effective share reserves. The\n        effective share reserves are a modified version of the share\n        reserves used when pricing trades.\n @param _bondReserves The pool's bonds reserves.\n @param _amountOut The amount of the asset that is received.\n @param _normalizedTimeRemaining The amount of time remaining until\n        maturity in seconds.\n @param _timeStretch The time stretch parameter.\n @param _vaultSharePrice The vault share price.\n @param _initialVaultSharePrice The initial vault share price.\n @return shareCurveDelta The shares paid to the reserves in the trade.\n @return bondCurveDelta The bonds paid by the reserves in the trade.\n @return sharePayment The shares that the user must pay."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateCloseShort",
            "nameLocation": "24829:19:74",
            "parameters": {
              "id": 14870,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14857,
                  "mutability": "mutable",
                  "name": "_effectiveShareReserves",
                  "nameLocation": "24866:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14919,
                  "src": "24858:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14856,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24858:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14859,
                  "mutability": "mutable",
                  "name": "_bondReserves",
                  "nameLocation": "24907:13:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14919,
                  "src": "24899:21:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14858,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24899:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14861,
                  "mutability": "mutable",
                  "name": "_amountOut",
                  "nameLocation": "24938:10:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14919,
                  "src": "24930:18:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14860,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24930:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14863,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "24966:24:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14919,
                  "src": "24958:32:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14862,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "24958:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14865,
                  "mutability": "mutable",
                  "name": "_timeStretch",
                  "nameLocation": "25008:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14919,
                  "src": "25000:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14864,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25000:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14867,
                  "mutability": "mutable",
                  "name": "_vaultSharePrice",
                  "nameLocation": "25038:16:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14919,
                  "src": "25030:24:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14866,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25030:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14869,
                  "mutability": "mutable",
                  "name": "_initialVaultSharePrice",
                  "nameLocation": "25072:23:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14919,
                  "src": "25064:31:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14868,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25064:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "24848:253:74"
            },
            "returnParameters": {
              "id": 14877,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14872,
                  "mutability": "mutable",
                  "name": "shareCurveDelta",
                  "nameLocation": "25170:15:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14919,
                  "src": "25162:23:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14871,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25162:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14874,
                  "mutability": "mutable",
                  "name": "bondCurveDelta",
                  "nameLocation": "25207:14:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14919,
                  "src": "25199:22:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14873,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25199:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14876,
                  "mutability": "mutable",
                  "name": "sharePayment",
                  "nameLocation": "25243:12:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 14919,
                  "src": "25235:20:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14875,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "25235:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "25148:117:74"
            },
            "scope": 15024,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 15023,
            "nodeType": "FunctionDefinition",
            "src": "29038:2941:74",
            "nodes": [],
            "body": {
              "id": 15022,
              "nodeType": "Block",
              "src": "29392:2587:74",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    14948
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 14948,
                      "mutability": "mutable",
                      "name": "shareAdjustmentDelta",
                      "nameLocation": "30324:20:74",
                      "nodeType": "VariableDeclaration",
                      "scope": 15022,
                      "src": "30317:27:74",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 14947,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "30317:6:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 14949,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "30317:27:74"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 14952,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 14950,
                      "name": "_closeVaultSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14932,
                      "src": "30358:21:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 14951,
                      "name": "_openVaultSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14930,
                      "src": "30382:20:74",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "30358:44:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 15013,
                    "nodeType": "Block",
                    "src": "31653:134:74",
                    "statements": [
                      {
                        "expression": {
                          "id": 15011,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 15001,
                            "name": "shareAdjustmentDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14948,
                            "src": "31667:20:74",
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
                            "id": 15010,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 15004,
                                  "name": "_shareReservesDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14924,
                                  "src": "31713:19:74",
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
                                "id": 15003,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "31706:6:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 15002,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "31706:6:74",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 15005,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "31706:27:74",
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
                                  "id": 15008,
                                  "name": "_shareCurveDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14926,
                                  "src": "31759:16:74",
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
                                "id": 15007,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "31752:6:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 15006,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "31752:6:74",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 15009,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "31752:24:74",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "31706:70:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "31667:109:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 15012,
                        "nodeType": "ExpressionStatement",
                        "src": "31667:109:74"
                      }
                    ]
                  },
                  "id": 15014,
                  "nodeType": "IfStatement",
                  "src": "30354:1433:74",
                  "trueBody": {
                    "id": 15000,
                    "nodeType": "Block",
                    "src": "30404:1243:74",
                    "statements": [
                      {
                        "condition": {
                          "id": 14953,
                          "name": "_isLong",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14934,
                          "src": "30687:7:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 14963,
                        "nodeType": "IfStatement",
                        "src": "30683:191:74",
                        "trueBody": {
                          "id": 14962,
                          "nodeType": "Block",
                          "src": "30696:178:74",
                          "statements": [
                            {
                              "expression": {
                                "id": 14960,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "id": 14954,
                                  "name": "_shareProceeds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14922,
                                  "src": "30714:14:74",
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
                                      "id": 14957,
                                      "name": "_closeVaultSharePrice",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 14932,
                                      "src": "30778:21:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    {
                                      "id": 14958,
                                      "name": "_openVaultSharePrice",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 14930,
                                      "src": "30821:20:74",
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
                                      "id": 14955,
                                      "name": "_shareProceeds",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 14922,
                                      "src": "30731:14:74",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "id": 14956,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "30746:10:74",
                                    "memberName": "mulDivDown",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 13554,
                                    "src": "30731:25:74",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                      "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                                    }
                                  },
                                  "id": 14959,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "30731:128:74",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "30714:145:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 14961,
                              "nodeType": "ExpressionStatement",
                              "src": "30714:145:74"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "id": 14970,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14964,
                            "name": "_shareReservesDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14924,
                            "src": "31007:19:74",
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
                                "id": 14967,
                                "name": "_closeVaultSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14932,
                                "src": "31077:21:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 14968,
                                "name": "_openVaultSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14930,
                                "src": "31116:20:74",
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
                                "id": 14965,
                                "name": "_shareReservesDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14924,
                                "src": "31029:19:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 14966,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "31049:10:74",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13554,
                              "src": "31029:30:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 14969,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "31029:121:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "31007:143:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14971,
                        "nodeType": "ExpressionStatement",
                        "src": "31007:143:74"
                      },
                      {
                        "expression": {
                          "id": 14982,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14972,
                            "name": "shareAdjustmentDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14948,
                            "src": "31219:20:74",
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
                            "id": 14981,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "id": 14975,
                                  "name": "_shareReservesDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14924,
                                  "src": "31265:19:74",
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
                                "id": 14974,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "31258:6:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 14973,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "31258:6:74",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 14976,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "31258:27:74",
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
                                  "id": 14979,
                                  "name": "_shareCurveDelta",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 14926,
                                  "src": "31311:16:74",
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
                                "id": 14978,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "31304:6:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 14977,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "31304:6:74",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 14980,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "31304:24:74",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "31258:70:74",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          },
                          "src": "31219:109:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        "id": 14983,
                        "nodeType": "ExpressionStatement",
                        "src": "31219:109:74"
                      },
                      {
                        "expression": {
                          "id": 14990,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14984,
                            "name": "_shareCurveDelta",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14926,
                            "src": "31342:16:74",
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
                                "id": 14987,
                                "name": "_closeVaultSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14932,
                                "src": "31406:21:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 14988,
                                "name": "_openVaultSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14930,
                                "src": "31445:20:74",
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
                                "id": 14985,
                                "name": "_shareCurveDelta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14926,
                                "src": "31361:16:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 14986,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "31378:10:74",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13554,
                              "src": "31361:27:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 14989,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "31361:118:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "31342:137:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14991,
                        "nodeType": "ExpressionStatement",
                        "src": "31342:137:74"
                      },
                      {
                        "expression": {
                          "id": 14998,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 14992,
                            "name": "_totalGovernanceFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 14928,
                            "src": "31493:19:74",
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
                                "id": 14995,
                                "name": "_closeVaultSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14932,
                                "src": "31563:21:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 14996,
                                "name": "_openVaultSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14930,
                                "src": "31602:20:74",
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
                                "id": 14993,
                                "name": "_totalGovernanceFee",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 14928,
                                "src": "31515:19:74",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 14994,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "31535:10:74",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 13554,
                              "src": "31515:30:74",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 14997,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "31515:121:74",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "31493:143:74",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 14999,
                        "nodeType": "ExpressionStatement",
                        "src": "31493:143:74"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "components": [
                      {
                        "id": 15015,
                        "name": "_shareProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14922,
                        "src": "31818:14:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 15016,
                        "name": "_shareReservesDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14924,
                        "src": "31846:19:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 15017,
                        "name": "_shareCurveDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14926,
                        "src": "31879:16:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 15018,
                        "name": "shareAdjustmentDelta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14948,
                        "src": "31909:20:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      {
                        "id": 15019,
                        "name": "_totalGovernanceFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14928,
                        "src": "31943:19:74",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 15020,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "31804:168:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$",
                      "typeString": "tuple(uint256,uint256,uint256,int256,uint256)"
                    }
                  },
                  "functionReturnParameters": 14946,
                  "id": 15021,
                  "nodeType": "Return",
                  "src": "31797:175:74"
                }
              ]
            },
            "documentation": {
              "id": 14920,
              "nodeType": "StructuredDocumentation",
              "src": "26956:2077:74",
              "text": "@dev If negative interest accrued over the term, we scale the share\n      proceeds by the negative interest amount. Shorts should be\n      responsible for negative interest, but negative interest can exceed\n      the margin that shorts provide. This leaves us with no choice but\n      to attribute the negative interest to longs. Along with scaling the\n      share proceeds, we also scale the fee amounts.\n      In order for our AMM invariant to be maintained, the effective\n      share reserves need to be adjusted by the same amount as the share\n      reserves delta calculated with YieldSpace including fees. We reduce\n      the share reserves by `min(c_1 / c_0, 1) * shareReservesDelta` and\n      the share adjustment by the `shareAdjustmentDelta`. We can solve\n      these equations simultaneously to find the share adjustment delta\n      as:\n      shareAdjustmentDelta = min(c_1 / c_0, 1) * sharePayment -\n                             shareReservesDelta\n      We underestimate the share proceeds to avoid sandwiches, and we\n      round the share reserves delta and share adjustment in the same\n      direction for consistency.\n @param _shareProceeds The proceeds in shares from the trade.\n @param _shareReservesDelta The change in share reserves from the trade.\n @param _shareCurveDelta The curve portion of the change in share reserves.\n @param _totalGovernanceFee The total governance fee.\n @param _openVaultSharePrice The vault share price at the beginning of\n        the term.\n @param _closeVaultSharePrice The vault share price at the end of the term.\n @param _isLong A flag indicating whether or not the trade is a long.\n @return The adjusted share proceeds.\n @return The adjusted share reserves delta.\n @return The adjusted share close proceeds.\n @return The share adjustment delta.\n @return The adjusted total governance fee."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "calculateNegativeInterestOnClose",
            "nameLocation": "29047:32:74",
            "parameters": {
              "id": 14935,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14922,
                  "mutability": "mutable",
                  "name": "_shareProceeds",
                  "nameLocation": "29097:14:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 15023,
                  "src": "29089:22:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14921,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29089:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14924,
                  "mutability": "mutable",
                  "name": "_shareReservesDelta",
                  "nameLocation": "29129:19:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 15023,
                  "src": "29121:27:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14923,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29121:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14926,
                  "mutability": "mutable",
                  "name": "_shareCurveDelta",
                  "nameLocation": "29166:16:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 15023,
                  "src": "29158:24:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14925,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29158:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14928,
                  "mutability": "mutable",
                  "name": "_totalGovernanceFee",
                  "nameLocation": "29200:19:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 15023,
                  "src": "29192:27:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14927,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29192:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14930,
                  "mutability": "mutable",
                  "name": "_openVaultSharePrice",
                  "nameLocation": "29237:20:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 15023,
                  "src": "29229:28:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14929,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29229:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14932,
                  "mutability": "mutable",
                  "name": "_closeVaultSharePrice",
                  "nameLocation": "29275:21:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 15023,
                  "src": "29267:29:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14931,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29267:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14934,
                  "mutability": "mutable",
                  "name": "_isLong",
                  "nameLocation": "29311:7:74",
                  "nodeType": "VariableDeclaration",
                  "scope": 15023,
                  "src": "29306:12:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 14933,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "29306:4:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29079:245:74"
            },
            "returnParameters": {
              "id": 14946,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 14937,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 15023,
                  "src": "29348:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14936,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29348:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14939,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 15023,
                  "src": "29357:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14938,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29357:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14941,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 15023,
                  "src": "29366:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14940,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29366:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14943,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 15023,
                  "src": "29375:6:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 14942,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29375:6:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 14945,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 15023,
                  "src": "29383:7:74",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 14944,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "29383:7:74",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "29347:44:74"
            },
            "scope": 15024,
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
          "id": 14306,
          "nodeType": "StructuredDocumentation",
          "src": "285:314:74",
          "text": "@author DELV\n @title Hyperdrive\n @notice Math for the Hyperdrive pricing model.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          15024
        ],
        "name": "HyperdriveMath",
        "nameLocation": "607:14:74",
        "scope": 15025,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 74
} as const;
