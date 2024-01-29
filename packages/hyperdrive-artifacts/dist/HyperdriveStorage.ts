export const HyperdriveStorage = 
{
  "abi": [
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
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
  "methodIdentifiers": {},
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}}},\"stateVariables\":{\"_balanceOf\":{\"details\":\"Allows loading of each balance.\"},\"_baseToken\":{\"details\":\"The base asset.\"},\"_checkpointDuration\":{\"details\":\"The amount of seconds between vault share price checkpoints.\"},\"_checkpoints\":{\"details\":\"Hyperdrive positions are bucketed into checkpoints, which allows us      to avoid poking in any period that has LP or trading activity. The      checkpoints contain the starting vault share price from the      checkpoint as well as aggregate volume values.\"},\"_curveFee\":{\"details\":\"The LP fee applied to the curve portion of a trade.\"},\"_feeCollector\":{\"details\":\"The address which collects governance fees.\"},\"_flatFee\":{\"details\":\"The LP fee applied to the flat portion of a trade.\"},\"_governance\":{\"details\":\"The address that can pause the contract.\"},\"_governanceFeesAccrued\":{\"details\":\"Governance fees that haven't been collected yet denominated in shares.\"},\"_governanceLPFee\":{\"details\":\"The portion of the LP fee that goes to governance.\"},\"_governanceZombieFee\":{\"details\":\"The portion of the zombie interest that goes to governance.\"},\"_initialVaultSharePrice\":{\"details\":\"The vault share price at the time the pool was created.\"},\"_isApprovedForAll\":{\"details\":\"Uniform approval for all tokens.\"},\"_linkerCodeHash\":{\"details\":\"The bytecode hash of the contract which forwards purely ERC20 calls      to this contract.\"},\"_linkerFactory\":{\"details\":\"The forwarder factory that deploys ERC20 forwarders for this      instance.\"},\"_marketState\":{\"details\":\"The state of the market. This includes the reserves, buffers, and      other data used to price trades and maintain solvency.\"},\"_minimumShareReserves\":{\"details\":\"The minimum amount of share reserves that must be maintained at all      times. This is used to enforce practical limits on the share      reserves to avoid numerical issues that can occur if the share      reserves become very small or equal to zero.\"},\"_minimumTransactionAmount\":{\"details\":\"The minimum amount of tokens that a position can be opened or      closed with.\"},\"_nonces\":{\"details\":\"A mapping to track the permitForAll signature nonces.\"},\"_pausers\":{\"details\":\"Addresses approved in this mapping can pause all deposits into the      contract and other non essential functionality.\"},\"_perTokenApprovals\":{\"details\":\"Additional optional per token approvals. This is non-standard for      ERC1155, but it's necessary to replicate the ERC20 interface.\"},\"_positionDuration\":{\"details\":\"The amount of seconds that elapse before a bond can be redeemed.\"},\"_timeStretch\":{\"details\":\"A parameter that decreases slippage around a target rate.\"},\"_totalSupply\":{\"details\":\"Allows loading of each total supply.\"},\"_withdrawPool\":{\"details\":\"The state corresponding to the withdraw pool.\"}},\"title\":\"HyperdriveStorage\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates Hyperdrive's storage.\"}},\"notice\":\"Hyperdrive's storage contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveStorage.sol\":\"HyperdriveStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
          "name": "ReentrancyGuardReentrantCall"
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {
          "constructor": {
            "params": {
              "_config": "The configuration of the Hyperdrive pool."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "constructor": {
            "notice": "Instantiates Hyperdrive's storage."
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
        "contracts/src/internal/HyperdriveStorage.sol": "HyperdriveStorage"
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
      "contracts/src/internal/HyperdriveStorage.sol": {
        "keccak256": "0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f",
        "urls": [
          "bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d",
          "dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb"
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
      },
      "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol": {
        "keccak256": "0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236",
        "urls": [
          "bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02",
          "dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
    "id": 13188,
    "exportedSymbols": {
      "FixedPointMath": [
        14294
      ],
      "HyperdriveMath": [
        15024
      ],
      "HyperdriveStorage": [
        13187
      ],
      "IERC20": [
        6740
      ],
      "IHyperdrive": [
        7411
      ],
      "ONE": [
        13529
      ],
      "ReentrancyGuard": [
        67106
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:6825:70",
    "nodes": [
      {
        "id": 12981,
        "nodeType": "PragmaDirective",
        "src": "39:23:70",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 12983,
        "nodeType": "ImportDirective",
        "src": "64:73:70",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol",
        "file": "openzeppelin/utils/ReentrancyGuard.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13188,
        "sourceUnit": 67107,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12982,
              "name": "ReentrancyGuard",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 67106,
              "src": "73:15:70",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12985,
        "nodeType": "ImportDirective",
        "src": "138:50:70",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "../interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13188,
        "sourceUnit": 6741,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12984,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6740,
              "src": "147:6:70",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12987,
        "nodeType": "ImportDirective",
        "src": "189:60:70",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13188,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12986,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "198:11:70",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12990,
        "nodeType": "ImportDirective",
        "src": "250:70:70",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13188,
        "sourceUnit": 14295,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12988,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 14294,
              "src": "259:14:70",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 12989,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13529,
              "src": "275:3:70",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 12992,
        "nodeType": "ImportDirective",
        "src": "321:65:70",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "../libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 13188,
        "sourceUnit": 15025,
        "symbolAliases": [
          {
            "foreign": {
              "id": 12991,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 15024,
              "src": "330:14:70",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 13187,
        "nodeType": "ContractDefinition",
        "src": "701:6162:70",
        "nodes": [
          {
            "id": 12998,
            "nodeType": "UsingForDirective",
            "src": "762:33:70",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 12996,
              "name": "FixedPointMath",
              "nameLocations": [
                "768:14:70"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14294,
              "src": "768:14:70"
            },
            "typeName": {
              "id": 12997,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "787:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 13002,
            "nodeType": "VariableDeclaration",
            "src": "850:36:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 12999,
              "nodeType": "StructuredDocumentation",
              "src": "821:24:70",
              "text": "@dev The base asset."
            },
            "mutability": "immutable",
            "name": "_baseToken",
            "nameLocation": "876:10:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20_$6740",
              "typeString": "contract IERC20"
            },
            "typeName": {
              "id": 13001,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 13000,
                "name": "IERC20",
                "nameLocations": [
                  "850:6:70"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 6740,
                "src": "850:6:70"
              },
              "referencedDeclaration": 6740,
              "src": "850:6:70",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$6740",
                "typeString": "contract IERC20"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13005,
            "nodeType": "VariableDeclaration",
            "src": "985:46:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13003,
              "nodeType": "StructuredDocumentation",
              "src": "911:69:70",
              "text": "@dev The amount of seconds between vault share price checkpoints."
            },
            "mutability": "immutable",
            "name": "_checkpointDuration",
            "nameLocation": "1012:19:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13004,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "985:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13008,
            "nodeType": "VariableDeclaration",
            "src": "1116:44:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13006,
              "nodeType": "StructuredDocumentation",
              "src": "1038:73:70",
              "text": "@dev The amount of seconds that elapse before a bond can be redeemed."
            },
            "mutability": "immutable",
            "name": "_positionDuration",
            "nameLocation": "1143:17:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13007,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1116:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13011,
            "nodeType": "VariableDeclaration",
            "src": "1238:39:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13009,
              "nodeType": "StructuredDocumentation",
              "src": "1167:66:70",
              "text": "@dev A parameter that decreases slippage around a target rate."
            },
            "mutability": "immutable",
            "name": "_timeStretch",
            "nameLocation": "1265:12:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13010,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1238:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13014,
            "nodeType": "VariableDeclaration",
            "src": "1367:36:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13012,
              "nodeType": "StructuredDocumentation",
              "src": "1302:60:70",
              "text": "@dev The LP fee applied to the curve portion of a trade."
            },
            "mutability": "immutable",
            "name": "_curveFee",
            "nameLocation": "1394:9:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13013,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1367:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13017,
            "nodeType": "VariableDeclaration",
            "src": "1474:35:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13015,
              "nodeType": "StructuredDocumentation",
              "src": "1410:59:70",
              "text": "@dev The LP fee applied to the flat portion of a trade."
            },
            "mutability": "immutable",
            "name": "_flatFee",
            "nameLocation": "1501:8:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13016,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1474:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13020,
            "nodeType": "VariableDeclaration",
            "src": "1580:43:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13018,
              "nodeType": "StructuredDocumentation",
              "src": "1516:59:70",
              "text": "@dev The portion of the LP fee that goes to governance."
            },
            "mutability": "immutable",
            "name": "_governanceLPFee",
            "nameLocation": "1607:16:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13019,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1580:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13023,
            "nodeType": "VariableDeclaration",
            "src": "1703:47:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13021,
              "nodeType": "StructuredDocumentation",
              "src": "1630:68:70",
              "text": "@dev The portion of the zombie interest that goes to governance."
            },
            "mutability": "immutable",
            "name": "_governanceZombieFee",
            "nameLocation": "1730:20:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13022,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1703:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13026,
            "nodeType": "VariableDeclaration",
            "src": "1852:50:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13024,
              "nodeType": "StructuredDocumentation",
              "src": "1783:64:70",
              "text": "@dev The vault share price at the time the pool was created."
            },
            "mutability": "immutable",
            "name": "_initialVaultSharePrice",
            "nameLocation": "1879:23:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13025,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1852:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13029,
            "nodeType": "VariableDeclaration",
            "src": "2198:48:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13027,
              "nodeType": "StructuredDocumentation",
              "src": "1909:284:70",
              "text": "@dev The minimum amount of share reserves that must be maintained at all\n      times. This is used to enforce practical limits on the share\n      reserves to avoid numerical issues that can occur if the share\n      reserves become very small or equal to zero."
            },
            "mutability": "immutable",
            "name": "_minimumShareReserves",
            "nameLocation": "2225:21:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13028,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2198:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13032,
            "nodeType": "VariableDeclaration",
            "src": "2354:52:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13030,
              "nodeType": "StructuredDocumentation",
              "src": "2253:96:70",
              "text": "@dev The minimum amount of tokens that a position can be opened or\n      closed with."
            },
            "mutability": "immutable",
            "name": "_minimumTransactionAmount",
            "nameLocation": "2381:25:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13031,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2354:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13036,
            "nodeType": "VariableDeclaration",
            "src": "2560:45:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13033,
              "nodeType": "StructuredDocumentation",
              "src": "2413:142:70",
              "text": "@dev The state of the market. This includes the reserves, buffers, and\n      other data used to price trades and maintain solvency."
            },
            "mutability": "mutable",
            "name": "_marketState",
            "nameLocation": "2593:12:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_MarketState_$7116_storage",
              "typeString": "struct IHyperdrive.MarketState"
            },
            "typeName": {
              "id": 13035,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 13034,
                "name": "IHyperdrive.MarketState",
                "nameLocations": [
                  "2560:11:70",
                  "2572:11:70"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 7116,
                "src": "2560:23:70"
              },
              "referencedDeclaration": 7116,
              "src": "2560:23:70",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_MarketState_$7116_storage_ptr",
                "typeString": "struct IHyperdrive.MarketState"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13040,
            "nodeType": "VariableDeclaration",
            "src": "2671:47:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13037,
              "nodeType": "StructuredDocumentation",
              "src": "2612:54:70",
              "text": "@dev The state corresponding to the withdraw pool."
            },
            "mutability": "mutable",
            "name": "_withdrawPool",
            "nameLocation": "2705:13:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_WithdrawPool_$7127_storage",
              "typeString": "struct IHyperdrive.WithdrawPool"
            },
            "typeName": {
              "id": 13039,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 13038,
                "name": "IHyperdrive.WithdrawPool",
                "nameLocations": [
                  "2671:11:70",
                  "2683:12:70"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 7127,
                "src": "2671:24:70"
              },
              "referencedDeclaration": 7127,
              "src": "2671:24:70",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_WithdrawPool_$7127_storage_ptr",
                "typeString": "struct IHyperdrive.WithdrawPool"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13046,
            "nodeType": "VariableDeclaration",
            "src": "3019:100:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13041,
              "nodeType": "StructuredDocumentation",
              "src": "2725:289:70",
              "text": "@dev Hyperdrive positions are bucketed into checkpoints, which allows us\n      to avoid poking in any period that has LP or trading activity. The\n      checkpoints contain the starting vault share price from the\n      checkpoint as well as aggregate volume values."
            },
            "mutability": "mutable",
            "name": "_checkpoints",
            "nameLocation": "3107:12:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7120_storage_$",
              "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
            },
            "typeName": {
              "id": 13045,
              "keyName": "checkpointNumber",
              "keyNameLocation": "3035:16:70",
              "keyType": {
                "id": 13042,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "3027:7:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "3019:70:70",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$7120_storage_$",
                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
              },
              "valueName": "checkpoint",
              "valueNameLocation": "3078:10:70",
              "valueType": {
                "id": 13044,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 13043,
                  "name": "IHyperdrive.Checkpoint",
                  "nameLocations": [
                    "3055:11:70",
                    "3067:10:70"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 7120,
                  "src": "3055:22:70"
                },
                "referencedDeclaration": 7120,
                "src": "3055:22:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Checkpoint_$7120_storage_ptr",
                  "typeString": "struct IHyperdrive.Checkpoint"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13049,
            "nodeType": "VariableDeclaration",
            "src": "3202:40:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13047,
              "nodeType": "StructuredDocumentation",
              "src": "3145:52:70",
              "text": "@dev The address which collects governance fees."
            },
            "mutability": "immutable",
            "name": "_feeCollector",
            "nameLocation": "3229:13:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 13048,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "3202:7:70",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13052,
            "nodeType": "VariableDeclaration",
            "src": "3303:28:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13050,
              "nodeType": "StructuredDocumentation",
              "src": "3249:49:70",
              "text": "@dev The address that can pause the contract."
            },
            "mutability": "mutable",
            "name": "_governance",
            "nameLocation": "3320:11:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 13051,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "3303:7:70",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13055,
            "nodeType": "VariableDeclaration",
            "src": "3422:39:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13053,
              "nodeType": "StructuredDocumentation",
              "src": "3338:79:70",
              "text": "@dev Governance fees that haven't been collected yet denominated in shares."
            },
            "mutability": "mutable",
            "name": "_governanceFeesAccrued",
            "nameLocation": "3439:22:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 13054,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3422:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13060,
            "nodeType": "VariableDeclaration",
            "src": "3609:56:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13056,
              "nodeType": "StructuredDocumentation",
              "src": "3468:136:70",
              "text": "@dev Addresses approved in this mapping can pause all deposits into the\n      contract and other non essential functionality."
            },
            "mutability": "mutable",
            "name": "_pausers",
            "nameLocation": "3657:8:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 13059,
              "keyName": "user",
              "keyNameLocation": "3625:4:70",
              "keyType": {
                "id": 13057,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3617:7:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "3609:38:70",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueName": "isPauser",
              "valueNameLocation": "3638:8:70",
              "valueType": {
                "id": 13058,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "3633:4:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13063,
            "nodeType": "VariableDeclaration",
            "src": "3793:41:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13061,
              "nodeType": "StructuredDocumentation",
              "src": "3696:92:70",
              "text": "@dev The forwarder factory that deploys ERC20 forwarders for this\n      instance."
            },
            "mutability": "immutable",
            "name": "_linkerFactory",
            "nameLocation": "3820:14:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 13062,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "3793:7:70",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13066,
            "nodeType": "VariableDeclaration",
            "src": "3953:42:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13064,
              "nodeType": "StructuredDocumentation",
              "src": "3841:107:70",
              "text": "@dev The bytecode hash of the contract which forwards purely ERC20 calls\n      to this contract."
            },
            "mutability": "immutable",
            "name": "_linkerCodeHash",
            "nameLocation": "3980:15:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 13065,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "3953:7:70",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13073,
            "nodeType": "VariableDeclaration",
            "src": "4047:96:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13067,
              "nodeType": "StructuredDocumentation",
              "src": "4002:40:70",
              "text": "@dev Allows loading of each balance."
            },
            "mutability": "mutable",
            "name": "_balanceOf",
            "nameLocation": "4133:10:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(uint256 => mapping(address => uint256))"
            },
            "typeName": {
              "id": 13072,
              "keyName": "tokenId",
              "keyNameLocation": "4063:7:70",
              "keyType": {
                "id": 13068,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4055:7:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "4047:68:70",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(uint256 => mapping(address => uint256))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 13071,
                "keyName": "user",
                "keyNameLocation": "4090:4:70",
                "keyType": {
                  "id": 13069,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "4082:7:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "4074:40:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueName": "balance",
                "valueNameLocation": "4106:7:70",
                "valueType": {
                  "id": 13070,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "4098:7:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13078,
            "nodeType": "VariableDeclaration",
            "src": "4200:64:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13074,
              "nodeType": "StructuredDocumentation",
              "src": "4150:45:70",
              "text": "@dev Allows loading of each total supply."
            },
            "mutability": "mutable",
            "name": "_totalSupply",
            "nameLocation": "4252:12:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 13077,
              "keyName": "tokenId",
              "keyNameLocation": "4216:7:70",
              "keyType": {
                "id": 13075,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4208:7:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "4200:42:70",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "supply",
              "valueNameLocation": "4235:6:70",
              "valueType": {
                "id": 13076,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4227:7:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13085,
            "nodeType": "VariableDeclaration",
            "src": "4317:102:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13079,
              "nodeType": "StructuredDocumentation",
              "src": "4271:41:70",
              "text": "@dev Uniform approval for all tokens."
            },
            "mutability": "mutable",
            "name": "_isApprovedForAll",
            "nameLocation": "4402:17:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
              "typeString": "mapping(address => mapping(address => bool))"
            },
            "typeName": {
              "id": 13084,
              "keyName": "from",
              "keyNameLocation": "4333:4:70",
              "keyType": {
                "id": 13080,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "4325:7:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "4317:67:70",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                "typeString": "mapping(address => mapping(address => bool))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 13083,
                "keyName": "caller",
                "keyNameLocation": "4357:6:70",
                "keyType": {
                  "id": 13081,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "4349:7:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "4341:42:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueName": "isApproved",
                "valueNameLocation": "4372:10:70",
                "valueType": {
                  "id": 13082,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "4367:4:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13094,
            "nodeType": "VariableDeclaration",
            "src": "4580:132:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13086,
              "nodeType": "StructuredDocumentation",
              "src": "4426:149:70",
              "text": "@dev Additional optional per token approvals. This is non-standard for\n      ERC1155, but it's necessary to replicate the ERC20 interface."
            },
            "mutability": "mutable",
            "name": "_perTokenApprovals",
            "nameLocation": "4694:18:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
              "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
            },
            "typeName": {
              "id": 13093,
              "keyName": "tokenId",
              "keyNameLocation": "4596:7:70",
              "keyType": {
                "id": 13087,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4588:7:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "4580:96:70",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 13092,
                "keyName": "from",
                "keyNameLocation": "4623:4:70",
                "keyType": {
                  "id": 13088,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "4615:7:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "4607:68:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 13091,
                  "keyName": "caller",
                  "keyNameLocation": "4647:6:70",
                  "keyType": {
                    "id": 13089,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4639:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "4631:43:70",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueName": "approved",
                  "valueNameLocation": "4665:8:70",
                  "valueType": {
                    "id": 13090,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4657:7:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13099,
            "nodeType": "VariableDeclaration",
            "src": "4786:55:70",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 13095,
              "nodeType": "StructuredDocumentation",
              "src": "4719:62:70",
              "text": "@dev A mapping to track the permitForAll signature nonces."
            },
            "mutability": "mutable",
            "name": "_nonces",
            "nameLocation": "4834:7:70",
            "scope": 13187,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 13098,
              "keyName": "user",
              "keyNameLocation": "4802:4:70",
              "keyType": {
                "id": 13096,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "4794:7:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "4786:38:70",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "nonce",
              "valueNameLocation": "4818:5:70",
              "valueType": {
                "id": 13097,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4810:7:70",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 13186,
            "nodeType": "FunctionDefinition",
            "src": "4989:1872:70",
            "nodes": [],
            "body": {
              "id": 13185,
              "nodeType": "Block",
              "src": "5040:1821:70",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 13109,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13106,
                      "name": "_baseToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13002,
                      "src": "5096:10:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$6740",
                        "typeString": "contract IERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13107,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13103,
                        "src": "5109:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 13108,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5117:9:70",
                      "memberName": "baseToken",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7180,
                      "src": "5109:17:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$6740",
                        "typeString": "contract IERC20"
                      }
                    },
                    "src": "5096:30:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$6740",
                      "typeString": "contract IERC20"
                    }
                  },
                  "id": 13110,
                  "nodeType": "ExpressionStatement",
                  "src": "5096:30:70"
                },
                {
                  "expression": {
                    "id": 13114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13111,
                      "name": "_initialVaultSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13026,
                      "src": "5190:23:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13112,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13103,
                        "src": "5216:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 13113,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5224:22:70",
                      "memberName": "initialVaultSharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7189,
                      "src": "5216:30:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5190:56:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13115,
                  "nodeType": "ExpressionStatement",
                  "src": "5190:56:70"
                },
                {
                  "expression": {
                    "id": 13119,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13116,
                      "name": "_minimumShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13029,
                      "src": "5645:21:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13117,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13103,
                        "src": "5669:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 13118,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5677:20:70",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7192,
                      "src": "5669:28:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5645:52:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13120,
                  "nodeType": "ExpressionStatement",
                  "src": "5645:52:70"
                },
                {
                  "expression": {
                    "id": 13124,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13121,
                      "name": "_minimumTransactionAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13032,
                      "src": "5957:25:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13122,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13103,
                        "src": "5985:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 13123,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5993:24:70",
                      "memberName": "minimumTransactionAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7195,
                      "src": "5985:32:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5957:60:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13125,
                  "nodeType": "ExpressionStatement",
                  "src": "5957:60:70"
                },
                {
                  "expression": {
                    "id": 13129,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13126,
                      "name": "_checkpointDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13005,
                      "src": "6178:19:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13127,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13103,
                        "src": "6200:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 13128,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6208:18:70",
                      "memberName": "checkpointDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7201,
                      "src": "6200:26:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6178:48:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13130,
                  "nodeType": "ExpressionStatement",
                  "src": "6178:48:70"
                },
                {
                  "expression": {
                    "id": 13134,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13131,
                      "name": "_positionDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13008,
                      "src": "6236:17:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13132,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13103,
                        "src": "6256:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 13133,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6264:16:70",
                      "memberName": "positionDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7198,
                      "src": "6256:24:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6236:44:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13135,
                  "nodeType": "ExpressionStatement",
                  "src": "6236:44:70"
                },
                {
                  "expression": {
                    "id": 13139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13136,
                      "name": "_timeStretch",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13011,
                      "src": "6290:12:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13137,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13103,
                        "src": "6305:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 13138,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6313:11:70",
                      "memberName": "timeStretch",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7204,
                      "src": "6305:19:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6290:34:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13140,
                  "nodeType": "ExpressionStatement",
                  "src": "6290:34:70"
                },
                {
                  "expression": {
                    "id": 13145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13141,
                      "name": "_curveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13014,
                      "src": "6377:9:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "expression": {
                          "id": 13142,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13103,
                          "src": "6389:7:70",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 13143,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6397:4:70",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7214,
                        "src": "6389:12:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$7140_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 13144,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6402:5:70",
                      "memberName": "curve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7130,
                      "src": "6389:18:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6377:30:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13146,
                  "nodeType": "ExpressionStatement",
                  "src": "6377:30:70"
                },
                {
                  "expression": {
                    "id": 13151,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13147,
                      "name": "_flatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13017,
                      "src": "6417:8:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "expression": {
                          "id": 13148,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13103,
                          "src": "6428:7:70",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 13149,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6436:4:70",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7214,
                        "src": "6428:12:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$7140_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 13150,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6441:4:70",
                      "memberName": "flat",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7133,
                      "src": "6428:17:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6417:28:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13152,
                  "nodeType": "ExpressionStatement",
                  "src": "6417:28:70"
                },
                {
                  "expression": {
                    "id": 13157,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13153,
                      "name": "_governanceLPFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13020,
                      "src": "6455:16:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "expression": {
                          "id": 13154,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13103,
                          "src": "6474:7:70",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 13155,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6482:4:70",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7214,
                        "src": "6474:12:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$7140_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 13156,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6487:12:70",
                      "memberName": "governanceLP",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7136,
                      "src": "6474:25:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6455:44:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13158,
                  "nodeType": "ExpressionStatement",
                  "src": "6455:44:70"
                },
                {
                  "expression": {
                    "id": 13163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13159,
                      "name": "_governanceZombieFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13023,
                      "src": "6509:20:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "expression": {
                          "id": 13160,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 13103,
                          "src": "6532:7:70",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 13161,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6540:4:70",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7214,
                        "src": "6532:12:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$7140_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 13162,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6545:16:70",
                      "memberName": "governanceZombie",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7139,
                      "src": "6532:29:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6509:52:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 13164,
                  "nodeType": "ExpressionStatement",
                  "src": "6509:52:70"
                },
                {
                  "expression": {
                    "id": 13168,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13165,
                      "name": "_linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13063,
                      "src": "6621:14:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13166,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13103,
                        "src": "6638:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 13167,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6646:13:70",
                      "memberName": "linkerFactory",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7183,
                      "src": "6638:21:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6621:38:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 13169,
                  "nodeType": "ExpressionStatement",
                  "src": "6621:38:70"
                },
                {
                  "expression": {
                    "id": 13173,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13170,
                      "name": "_linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13066,
                      "src": "6669:15:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13171,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13103,
                        "src": "6687:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 13172,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6695:14:70",
                      "memberName": "linkerCodeHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7186,
                      "src": "6687:22:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "6669:40:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 13174,
                  "nodeType": "ExpressionStatement",
                  "src": "6669:40:70"
                },
                {
                  "expression": {
                    "id": 13178,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13175,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13052,
                      "src": "6776:11:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13176,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13103,
                        "src": "6790:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 13177,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6798:10:70",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7207,
                      "src": "6790:18:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6776:32:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 13179,
                  "nodeType": "ExpressionStatement",
                  "src": "6776:32:70"
                },
                {
                  "expression": {
                    "id": 13183,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 13180,
                      "name": "_feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13049,
                      "src": "6818:13:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 13181,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13103,
                        "src": "6834:7:70",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 13182,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6842:12:70",
                      "memberName": "feeCollector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7210,
                      "src": "6834:20:70",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6818:36:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 13184,
                  "nodeType": "ExpressionStatement",
                  "src": "6818:36:70"
                }
              ]
            },
            "documentation": {
              "id": 13100,
              "nodeType": "StructuredDocumentation",
              "src": "4873:111:70",
              "text": "@notice Instantiates Hyperdrive's storage.\n @param _config The configuration of the Hyperdrive pool."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 13104,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13103,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "5031:7:70",
                  "nodeType": "VariableDeclaration",
                  "scope": 13186,
                  "src": "5001:37:70",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 13102,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 13101,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "5001:11:70",
                        "5013:10:70"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7215,
                      "src": "5001:22:70"
                    },
                    "referencedDeclaration": 7215,
                    "src": "5001:22:70",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5000:39:70"
            },
            "returnParameters": {
              "id": 13105,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5040:0:70"
            },
            "scope": 13187,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 12994,
              "name": "ReentrancyGuard",
              "nameLocations": [
                "740:15:70"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 67106,
              "src": "740:15:70"
            },
            "id": 12995,
            "nodeType": "InheritanceSpecifier",
            "src": "740:15:70"
          }
        ],
        "canonicalName": "HyperdriveStorage",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 12993,
          "nodeType": "StructuredDocumentation",
          "src": "388:313:70",
          "text": "@author DELV\n @title HyperdriveStorage\n @notice Hyperdrive's storage contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          13187,
          67106
        ],
        "name": "HyperdriveStorage",
        "nameLocation": "719:17:70",
        "scope": 13188,
        "usedErrors": [
          67051
        ],
        "usedEvents": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 70
} as const;
