export const HyperdriveStorage = 
{
  "abi": [
    {
      "inputs": [],
      "name": "InvalidCheckpointDuration",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidFeeAmounts",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidMinimumShareReserves",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidPositionDuration",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}}},\"stateVariables\":{\"_balanceOf\":{\"details\":\"Allows loading of each balance.\"},\"_baseToken\":{\"details\":\"The base asset.\"},\"_checkpointDuration\":{\"details\":\"The amount of seconds between share price checkpoints.\"},\"_checkpoints\":{\"details\":\"Hyperdrive positions are bucketed into checkpoints, which allows us      to avoid poking in any period that has LP or trading activity. The      checkpoints contain the starting share price from the checkpoint as      well as aggregate volume values.\"},\"_curveFee\":{\"details\":\"The LP fee applied to the curve portion of a trade.\"},\"_feeCollector\":{\"details\":\"The address which collects governance fees.\"},\"_flatFee\":{\"details\":\"The LP fee applied to the flat portion of a trade.\"},\"_governance\":{\"details\":\"The address that can pause the contract.\"},\"_governanceFee\":{\"details\":\"The portion of the LP fee that goes to governance.\"},\"_governanceFeesAccrued\":{\"details\":\"Governance fees that haven't been collected yet denominated in shares.\"},\"_initialSharePrice\":{\"details\":\"The share price at the time the pool was created.\"},\"_isApprovedForAll\":{\"details\":\"Uniform approval for all tokens.\"},\"_linkerCodeHash\":{\"details\":\"The bytecode hash of the contract which forwards purely ERC20 calls      to this contract.\"},\"_linkerFactory\":{\"details\":\"The forwarder factory that deploys ERC20 forwarders for this      instance.\"},\"_marketState\":{\"details\":\"The state of the market. This includes the reserves, buffers, and      other data used to price trades and maintain solvency.\"},\"_minimumShareReserves\":{\"details\":\"The minimum amount of share reserves that must be maintained at all      times. This is used to enforce practical limits on the share      reserves to avoid numerical issues that can occur if the share      reserves become very small or equal to zero.\"},\"_minimumTransactionAmount\":{\"details\":\"The minimum amount of tokens that a position can be opened or      closed with.\"},\"_nonces\":{\"details\":\"A mapping to track the permitForAll signature nonces.\"},\"_pausers\":{\"details\":\"Addresses approved in this mapping can pause all deposits into the      contract and other non essential functionality.\"},\"_perTokenApprovals\":{\"details\":\"Additional optional per token approvals. This is non-standard for      ERC1155, but it's necessary to replicate the ERC20 interface.\"},\"_positionDuration\":{\"details\":\"The amount of seconds that elapse before a bond can be redeemed.\"},\"_precisionThreshold\":{\"details\":\"The amount of precision expected to lose due to exponentiation      implementation.\"},\"_timeStretch\":{\"details\":\"A parameter that decreases slippage around a target rate.\"},\"_totalSupply\":{\"details\":\"Allows loading of each total supply.\"},\"_withdrawPool\":{\"details\":\"The state corresponding to the withdraw pool.\"}},\"title\":\"HyperdriveStorage\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates Hyperdrive's storage.\"}},\"notice\":\"Hyperdrive's storage contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveStorage.sol\":\"HyperdriveStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70\",\"dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db\",\"dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62\",\"dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a\",\"dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.19+commit.7dd6d404"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidCheckpointDuration"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidFeeAmounts"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidMinimumShareReserves"
        },
        {
          "inputs": [],
          "type": "error",
          "name": "InvalidPositionDuration"
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
        "contracts/src/internal/HyperdriveStorage.sol": "HyperdriveStorage"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4",
        "urls": [
          "bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36",
          "dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdrive.sol": {
        "keccak256": "0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5",
        "urls": [
          "bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70",
          "dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IHyperdriveCore.sol": {
        "keccak256": "0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d",
        "urls": [
          "bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85",
          "dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF"
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
      "contracts/src/interfaces/IMultiToken.sol": {
        "keccak256": "0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad",
        "urls": [
          "bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6",
          "dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenCore.sol": {
        "keccak256": "0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d",
        "urls": [
          "bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8",
          "dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenMetadata.sol": {
        "keccak256": "0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb",
        "urls": [
          "bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f",
          "dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IMultiTokenRead.sol": {
        "keccak256": "0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4",
        "urls": [
          "bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6",
          "dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveStorage.sol": {
        "keccak256": "0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148",
        "urls": [
          "bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db",
          "dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/FixedPointMath.sol": {
        "keccak256": "0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639",
        "urls": [
          "bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d",
          "dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/HyperdriveMath.sol": {
        "keccak256": "0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3",
        "urls": [
          "bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62",
          "dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx"
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
        "keccak256": "0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db",
        "urls": [
          "bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a",
          "dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH"
        ],
        "license": "Apache-2.0"
      },
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        "urls": [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
    "id": 9466,
    "exportedSymbols": {
      "FixedPointMath": [
        10533
      ],
      "HyperdriveMath": [
        11352
      ],
      "HyperdriveStorage": [
        9465
      ],
      "IERC20": [
        3030
      ],
      "IHyperdrive": [
        3759
      ],
      "ONE": [
        9788
      ],
      "ReentrancyGuard": [
        60564
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:7257:40",
    "nodes": [
      {
        "id": 9194,
        "nodeType": "PragmaDirective",
        "src": "39:23:40",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 9196,
        "nodeType": "ImportDirective",
        "src": "64:68:40",
        "nodes": [],
        "absolutePath": "lib/solmate/src/utils/ReentrancyGuard.sol",
        "file": "solmate/utils/ReentrancyGuard.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9466,
        "sourceUnit": 60565,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9195,
              "name": "ReentrancyGuard",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 60564,
              "src": "73:15:40",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9198,
        "nodeType": "ImportDirective",
        "src": "133:50:40",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "../interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9466,
        "sourceUnit": 3031,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9197,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3030,
              "src": "142:6:40",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9200,
        "nodeType": "ImportDirective",
        "src": "184:60:40",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9466,
        "sourceUnit": 3760,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9199,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3759,
              "src": "193:11:40",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9203,
        "nodeType": "ImportDirective",
        "src": "245:70:40",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9466,
        "sourceUnit": 10534,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9201,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10533,
              "src": "254:14:40",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 9202,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9788,
              "src": "270:3:40",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9205,
        "nodeType": "ImportDirective",
        "src": "316:65:40",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "../libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 9466,
        "sourceUnit": 11353,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9204,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11352,
              "src": "325:14:40",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9465,
        "nodeType": "ContractDefinition",
        "src": "696:6599:40",
        "nodes": [
          {
            "id": 9211,
            "nodeType": "UsingForDirective",
            "src": "757:33:40",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 9209,
              "name": "FixedPointMath",
              "nameLocations": [
                "763:14:40"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10533,
              "src": "763:14:40"
            },
            "typeName": {
              "id": 9210,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "782:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 9215,
            "nodeType": "VariableDeclaration",
            "src": "845:36:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9212,
              "nodeType": "StructuredDocumentation",
              "src": "816:24:40",
              "text": "@dev The base asset."
            },
            "mutability": "immutable",
            "name": "_baseToken",
            "nameLocation": "871:10:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20_$3030",
              "typeString": "contract IERC20"
            },
            "typeName": {
              "id": 9214,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 9213,
                "name": "IERC20",
                "nameLocations": [
                  "845:6:40"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 3030,
                "src": "845:6:40"
              },
              "referencedDeclaration": 3030,
              "src": "845:6:40",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$3030",
                "typeString": "contract IERC20"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9218,
            "nodeType": "VariableDeclaration",
            "src": "974:46:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9216,
              "nodeType": "StructuredDocumentation",
              "src": "906:63:40",
              "text": "@dev The amount of seconds between share price checkpoints."
            },
            "mutability": "immutable",
            "name": "_checkpointDuration",
            "nameLocation": "1001:19:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9217,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "974:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9221,
            "nodeType": "VariableDeclaration",
            "src": "1105:44:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9219,
              "nodeType": "StructuredDocumentation",
              "src": "1027:73:40",
              "text": "@dev The amount of seconds that elapse before a bond can be redeemed."
            },
            "mutability": "immutable",
            "name": "_positionDuration",
            "nameLocation": "1132:17:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9220,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1105:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9224,
            "nodeType": "VariableDeclaration",
            "src": "1227:39:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9222,
              "nodeType": "StructuredDocumentation",
              "src": "1156:66:40",
              "text": "@dev A parameter that decreases slippage around a target rate."
            },
            "mutability": "immutable",
            "name": "_timeStretch",
            "nameLocation": "1254:12:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9223,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1227:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9227,
            "nodeType": "VariableDeclaration",
            "src": "1356:36:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9225,
              "nodeType": "StructuredDocumentation",
              "src": "1291:60:40",
              "text": "@dev The LP fee applied to the curve portion of a trade."
            },
            "mutability": "immutable",
            "name": "_curveFee",
            "nameLocation": "1383:9:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9226,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1356:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9230,
            "nodeType": "VariableDeclaration",
            "src": "1463:35:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9228,
              "nodeType": "StructuredDocumentation",
              "src": "1399:59:40",
              "text": "@dev The LP fee applied to the flat portion of a trade."
            },
            "mutability": "immutable",
            "name": "_flatFee",
            "nameLocation": "1490:8:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9229,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1463:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9233,
            "nodeType": "VariableDeclaration",
            "src": "1569:41:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9231,
              "nodeType": "StructuredDocumentation",
              "src": "1505:59:40",
              "text": "@dev The portion of the LP fee that goes to governance."
            },
            "mutability": "immutable",
            "name": "_governanceFee",
            "nameLocation": "1596:14:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9232,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1569:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9236,
            "nodeType": "VariableDeclaration",
            "src": "1706:45:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9234,
              "nodeType": "StructuredDocumentation",
              "src": "1643:58:40",
              "text": "@dev The share price at the time the pool was created."
            },
            "mutability": "immutable",
            "name": "_initialSharePrice",
            "nameLocation": "1733:18:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9235,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1706:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9239,
            "nodeType": "VariableDeclaration",
            "src": "2047:48:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9237,
              "nodeType": "StructuredDocumentation",
              "src": "1758:284:40",
              "text": "@dev The minimum amount of share reserves that must be maintained at all\n      times. This is used to enforce practical limits on the share\n      reserves to avoid numerical issues that can occur if the share\n      reserves become very small or equal to zero."
            },
            "mutability": "immutable",
            "name": "_minimumShareReserves",
            "nameLocation": "2074:21:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9238,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2047:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9242,
            "nodeType": "VariableDeclaration",
            "src": "2203:52:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9240,
              "nodeType": "StructuredDocumentation",
              "src": "2102:96:40",
              "text": "@dev The minimum amount of tokens that a position can be opened or\n      closed with."
            },
            "mutability": "immutable",
            "name": "_minimumTransactionAmount",
            "nameLocation": "2230:25:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9241,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2203:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9245,
            "nodeType": "VariableDeclaration",
            "src": "2367:46:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9243,
              "nodeType": "StructuredDocumentation",
              "src": "2262:100:40",
              "text": "@dev The amount of precision expected to lose due to exponentiation\n      implementation."
            },
            "mutability": "immutable",
            "name": "_precisionThreshold",
            "nameLocation": "2394:19:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9244,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2367:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9249,
            "nodeType": "VariableDeclaration",
            "src": "2567:45:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9246,
              "nodeType": "StructuredDocumentation",
              "src": "2420:142:40",
              "text": "@dev The state of the market. This includes the reserves, buffers, and\n      other data used to price trades and maintain solvency."
            },
            "mutability": "mutable",
            "name": "_marketState",
            "nameLocation": "2600:12:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_MarketState_$3492_storage",
              "typeString": "struct IHyperdrive.MarketState"
            },
            "typeName": {
              "id": 9248,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 9247,
                "name": "IHyperdrive.MarketState",
                "nameLocations": [
                  "2567:11:40",
                  "2579:11:40"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 3492,
                "src": "2567:23:40"
              },
              "referencedDeclaration": 3492,
              "src": "2567:23:40",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_MarketState_$3492_storage_ptr",
                "typeString": "struct IHyperdrive.MarketState"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9253,
            "nodeType": "VariableDeclaration",
            "src": "2678:47:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9250,
              "nodeType": "StructuredDocumentation",
              "src": "2619:54:40",
              "text": "@dev The state corresponding to the withdraw pool."
            },
            "mutability": "mutable",
            "name": "_withdrawPool",
            "nameLocation": "2712:13:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_WithdrawPool_$3506_storage",
              "typeString": "struct IHyperdrive.WithdrawPool"
            },
            "typeName": {
              "id": 9252,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 9251,
                "name": "IHyperdrive.WithdrawPool",
                "nameLocations": [
                  "2678:11:40",
                  "2690:12:40"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 3506,
                "src": "2678:24:40"
              },
              "referencedDeclaration": 3506,
              "src": "2678:24:40",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_WithdrawPool_$3506_storage_ptr",
                "typeString": "struct IHyperdrive.WithdrawPool"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9259,
            "nodeType": "VariableDeclaration",
            "src": "3020:100:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9254,
              "nodeType": "StructuredDocumentation",
              "src": "2732:283:40",
              "text": "@dev Hyperdrive positions are bucketed into checkpoints, which allows us\n      to avoid poking in any period that has LP or trading activity. The\n      checkpoints contain the starting share price from the checkpoint as\n      well as aggregate volume values."
            },
            "mutability": "mutable",
            "name": "_checkpoints",
            "nameLocation": "3108:12:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$3499_storage_$",
              "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
            },
            "typeName": {
              "id": 9258,
              "keyName": "checkpointNumber",
              "keyNameLocation": "3036:16:40",
              "keyType": {
                "id": 9255,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "3028:7:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "3020:70:40",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$3499_storage_$",
                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
              },
              "valueName": "checkpoint",
              "valueNameLocation": "3079:10:40",
              "valueType": {
                "id": 9257,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 9256,
                  "name": "IHyperdrive.Checkpoint",
                  "nameLocations": [
                    "3056:11:40",
                    "3068:10:40"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3499,
                  "src": "3056:22:40"
                },
                "referencedDeclaration": 3499,
                "src": "3056:22:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Checkpoint_$3499_storage_ptr",
                  "typeString": "struct IHyperdrive.Checkpoint"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9262,
            "nodeType": "VariableDeclaration",
            "src": "3203:40:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9260,
              "nodeType": "StructuredDocumentation",
              "src": "3146:52:40",
              "text": "@dev The address which collects governance fees."
            },
            "mutability": "immutable",
            "name": "_feeCollector",
            "nameLocation": "3230:13:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9261,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "3203:7:40",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9265,
            "nodeType": "VariableDeclaration",
            "src": "3304:28:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9263,
              "nodeType": "StructuredDocumentation",
              "src": "3250:49:40",
              "text": "@dev The address that can pause the contract."
            },
            "mutability": "mutable",
            "name": "_governance",
            "nameLocation": "3321:11:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9264,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "3304:7:40",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9268,
            "nodeType": "VariableDeclaration",
            "src": "3423:39:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9266,
              "nodeType": "StructuredDocumentation",
              "src": "3339:79:40",
              "text": "@dev Governance fees that haven't been collected yet denominated in shares."
            },
            "mutability": "mutable",
            "name": "_governanceFeesAccrued",
            "nameLocation": "3440:22:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9267,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3423:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9273,
            "nodeType": "VariableDeclaration",
            "src": "3610:56:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9269,
              "nodeType": "StructuredDocumentation",
              "src": "3469:136:40",
              "text": "@dev Addresses approved in this mapping can pause all deposits into the\n      contract and other non essential functionality."
            },
            "mutability": "mutable",
            "name": "_pausers",
            "nameLocation": "3658:8:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 9272,
              "keyName": "user",
              "keyNameLocation": "3626:4:40",
              "keyType": {
                "id": 9270,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3618:7:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "3610:38:40",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueName": "isPauser",
              "valueNameLocation": "3639:8:40",
              "valueType": {
                "id": 9271,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "3634:4:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9276,
            "nodeType": "VariableDeclaration",
            "src": "3794:41:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9274,
              "nodeType": "StructuredDocumentation",
              "src": "3697:92:40",
              "text": "@dev The forwarder factory that deploys ERC20 forwarders for this\n      instance."
            },
            "mutability": "immutable",
            "name": "_linkerFactory",
            "nameLocation": "3821:14:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9275,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "3794:7:40",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9279,
            "nodeType": "VariableDeclaration",
            "src": "3954:42:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9277,
              "nodeType": "StructuredDocumentation",
              "src": "3842:107:40",
              "text": "@dev The bytecode hash of the contract which forwards purely ERC20 calls\n      to this contract."
            },
            "mutability": "immutable",
            "name": "_linkerCodeHash",
            "nameLocation": "3981:15:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 9278,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "3954:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9286,
            "nodeType": "VariableDeclaration",
            "src": "4048:96:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9280,
              "nodeType": "StructuredDocumentation",
              "src": "4003:40:40",
              "text": "@dev Allows loading of each balance."
            },
            "mutability": "mutable",
            "name": "_balanceOf",
            "nameLocation": "4134:10:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(uint256 => mapping(address => uint256))"
            },
            "typeName": {
              "id": 9285,
              "keyName": "tokenId",
              "keyNameLocation": "4064:7:40",
              "keyType": {
                "id": 9281,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4056:7:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "4048:68:40",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(uint256 => mapping(address => uint256))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 9284,
                "keyName": "user",
                "keyNameLocation": "4091:4:40",
                "keyType": {
                  "id": 9282,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "4083:7:40",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "4075:40:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueName": "balance",
                "valueNameLocation": "4107:7:40",
                "valueType": {
                  "id": 9283,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "4099:7:40",
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
            "id": 9291,
            "nodeType": "VariableDeclaration",
            "src": "4201:64:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9287,
              "nodeType": "StructuredDocumentation",
              "src": "4151:45:40",
              "text": "@dev Allows loading of each total supply."
            },
            "mutability": "mutable",
            "name": "_totalSupply",
            "nameLocation": "4253:12:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 9290,
              "keyName": "tokenId",
              "keyNameLocation": "4217:7:40",
              "keyType": {
                "id": 9288,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4209:7:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "4201:42:40",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "supply",
              "valueNameLocation": "4236:6:40",
              "valueType": {
                "id": 9289,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4228:7:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9298,
            "nodeType": "VariableDeclaration",
            "src": "4318:102:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9292,
              "nodeType": "StructuredDocumentation",
              "src": "4272:41:40",
              "text": "@dev Uniform approval for all tokens."
            },
            "mutability": "mutable",
            "name": "_isApprovedForAll",
            "nameLocation": "4403:17:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
              "typeString": "mapping(address => mapping(address => bool))"
            },
            "typeName": {
              "id": 9297,
              "keyName": "from",
              "keyNameLocation": "4334:4:40",
              "keyType": {
                "id": 9293,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "4326:7:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "4318:67:40",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                "typeString": "mapping(address => mapping(address => bool))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 9296,
                "keyName": "caller",
                "keyNameLocation": "4358:6:40",
                "keyType": {
                  "id": 9294,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "4350:7:40",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "4342:42:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueName": "isApproved",
                "valueNameLocation": "4373:10:40",
                "valueType": {
                  "id": 9295,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "4368:4:40",
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
            "id": 9307,
            "nodeType": "VariableDeclaration",
            "src": "4581:132:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9299,
              "nodeType": "StructuredDocumentation",
              "src": "4427:149:40",
              "text": "@dev Additional optional per token approvals. This is non-standard for\n      ERC1155, but it's necessary to replicate the ERC20 interface."
            },
            "mutability": "mutable",
            "name": "_perTokenApprovals",
            "nameLocation": "4695:18:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
              "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
            },
            "typeName": {
              "id": 9306,
              "keyName": "tokenId",
              "keyNameLocation": "4597:7:40",
              "keyType": {
                "id": 9300,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4589:7:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "4581:96:40",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 9305,
                "keyName": "from",
                "keyNameLocation": "4624:4:40",
                "keyType": {
                  "id": 9301,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "4616:7:40",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "4608:68:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 9304,
                  "keyName": "caller",
                  "keyNameLocation": "4648:6:40",
                  "keyType": {
                    "id": 9302,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4640:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "4632:43:40",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueName": "approved",
                  "valueNameLocation": "4666:8:40",
                  "valueType": {
                    "id": 9303,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4658:7:40",
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
            "id": 9312,
            "nodeType": "VariableDeclaration",
            "src": "4787:55:40",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9308,
              "nodeType": "StructuredDocumentation",
              "src": "4720:62:40",
              "text": "@dev A mapping to track the permitForAll signature nonces."
            },
            "mutability": "mutable",
            "name": "_nonces",
            "nameLocation": "4835:7:40",
            "scope": 9465,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 9311,
              "keyName": "user",
              "keyNameLocation": "4803:4:40",
              "keyType": {
                "id": 9309,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "4795:7:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "4787:38:40",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "nonce",
              "valueNameLocation": "4819:5:40",
              "valueType": {
                "id": 9310,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4811:7:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9464,
            "nodeType": "FunctionDefinition",
            "src": "4990:2303:40",
            "nodes": [],
            "body": {
              "id": 9463,
              "nodeType": "Block",
              "src": "5041:2252:40",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 9322,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9319,
                      "name": "_baseToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9215,
                      "src": "5097:10:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$3030",
                        "typeString": "contract IERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9320,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "5110:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9321,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5118:9:40",
                      "memberName": "baseToken",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3520,
                      "src": "5110:17:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$3030",
                        "typeString": "contract IERC20"
                      }
                    },
                    "src": "5097:30:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$3030",
                      "typeString": "contract IERC20"
                    }
                  },
                  "id": 9323,
                  "nodeType": "ExpressionStatement",
                  "src": "5097:30:40"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9327,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 9324,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "5656:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9325,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5664:20:40",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3532,
                      "src": "5656:28:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "316533",
                      "id": 9326,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5687:3:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000_by_1",
                        "typeString": "int_const 1000"
                      },
                      "value": "1e3"
                    },
                    "src": "5656:34:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9334,
                  "nodeType": "IfStatement",
                  "src": "5652:113:40",
                  "trueBody": {
                    "id": 9333,
                    "nodeType": "Block",
                    "src": "5692:73:40",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 9328,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "5713:11:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 9330,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5725:27:40",
                            "memberName": "InvalidMinimumShareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3631,
                            "src": "5713:39:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 9331,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5713:41:40",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9332,
                        "nodeType": "RevertStatement",
                        "src": "5706:48:40"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 9338,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9335,
                      "name": "_minimumShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9239,
                      "src": "5774:21:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9336,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "5798:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9337,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5806:20:40",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3532,
                      "src": "5798:28:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5774:52:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9339,
                  "nodeType": "ExpressionStatement",
                  "src": "5774:52:40"
                },
                {
                  "expression": {
                    "id": 9343,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9340,
                      "name": "_minimumTransactionAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9242,
                      "src": "5837:25:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9341,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "5865:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9342,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5873:24:40",
                      "memberName": "minimumTransactionAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3535,
                      "src": "5865:32:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5837:60:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9344,
                  "nodeType": "ExpressionStatement",
                  "src": "5837:60:40"
                },
                {
                  "expression": {
                    "id": 9348,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9345,
                      "name": "_precisionThreshold",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9245,
                      "src": "5907:19:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9346,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "5929:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9347,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5937:18:40",
                      "memberName": "precisionThreshold",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3538,
                      "src": "5929:26:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5907:48:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9349,
                  "nodeType": "ExpressionStatement",
                  "src": "5907:48:40"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9353,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 9350,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "6120:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9351,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6128:18:40",
                      "memberName": "checkpointDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3544,
                      "src": "6120:26:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 9352,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6150:1:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6120:31:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9360,
                  "nodeType": "IfStatement",
                  "src": "6116:108:40",
                  "trueBody": {
                    "id": 9359,
                    "nodeType": "Block",
                    "src": "6153:71:40",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 9354,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "6174:11:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 9356,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6186:25:40",
                            "memberName": "InvalidCheckpointDuration",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3625,
                            "src": "6174:37:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 9357,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6174:39:40",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9358,
                        "nodeType": "RevertStatement",
                        "src": "6167:46:40"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 9364,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9361,
                      "name": "_checkpointDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9218,
                      "src": "6233:19:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9362,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "6255:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9363,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6263:18:40",
                      "memberName": "checkpointDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3544,
                      "src": "6255:26:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6233:48:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9365,
                  "nodeType": "ExpressionStatement",
                  "src": "6233:48:40"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 9378,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9370,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 9366,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9316,
                          "src": "6308:7:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 9367,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6316:16:40",
                        "memberName": "positionDuration",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3541,
                        "src": "6308:24:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "expression": {
                          "id": 9368,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9316,
                          "src": "6335:7:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 9369,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6343:18:40",
                        "memberName": "checkpointDuration",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3544,
                        "src": "6335:26:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6308:53:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9377,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9375,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 9371,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9316,
                            "src": "6377:7:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 9372,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6385:16:40",
                          "memberName": "positionDuration",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3541,
                          "src": "6377:24:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "%",
                        "rightExpression": {
                          "expression": {
                            "id": 9373,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9316,
                            "src": "6404:7:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 9374,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6412:18:40",
                          "memberName": "checkpointDuration",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3544,
                          "src": "6404:26:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6377:53:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 9376,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6434:1:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "6377:58:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6308:127:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9385,
                  "nodeType": "IfStatement",
                  "src": "6291:224:40",
                  "trueBody": {
                    "id": 9384,
                    "nodeType": "Block",
                    "src": "6446:69:40",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 9379,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "6467:11:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 9381,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6479:23:40",
                            "memberName": "InvalidPositionDuration",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3633,
                            "src": "6467:35:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 9382,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6467:37:40",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9383,
                        "nodeType": "RevertStatement",
                        "src": "6460:44:40"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 9389,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9386,
                      "name": "_positionDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9221,
                      "src": "6524:17:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9387,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "6544:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9388,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6552:16:40",
                      "memberName": "positionDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3541,
                      "src": "6544:24:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6524:44:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9390,
                  "nodeType": "ExpressionStatement",
                  "src": "6524:44:40"
                },
                {
                  "expression": {
                    "id": 9394,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9391,
                      "name": "_timeStretch",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9224,
                      "src": "6578:12:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9392,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "6593:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9393,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6601:11:40",
                      "memberName": "timeStretch",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3547,
                      "src": "6593:19:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6578:34:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9395,
                  "nodeType": "ExpressionStatement",
                  "src": "6578:34:40"
                },
                {
                  "expression": {
                    "id": 9399,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9396,
                      "name": "_initialSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9236,
                      "src": "6622:18:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9397,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "6643:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9398,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6651:17:40",
                      "memberName": "initialSharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3529,
                      "src": "6643:25:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6622:46:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9400,
                  "nodeType": "ExpressionStatement",
                  "src": "6622:46:40"
                },
                {
                  "expression": {
                    "id": 9404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9401,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9265,
                      "src": "6678:11:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9402,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "6692:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9403,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6700:10:40",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3550,
                      "src": "6692:18:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6678:32:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9405,
                  "nodeType": "ExpressionStatement",
                  "src": "6678:32:40"
                },
                {
                  "expression": {
                    "id": 9409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9406,
                      "name": "_feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9262,
                      "src": "6720:13:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9407,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "6736:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9408,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6744:12:40",
                      "memberName": "feeCollector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3553,
                      "src": "6736:20:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6720:36:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9410,
                  "nodeType": "ExpressionStatement",
                  "src": "6720:36:40"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 9427,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 9421,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9415,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "expression": {
                              "id": 9411,
                              "name": "_config",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9316,
                              "src": "6826:7:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolConfig memory"
                              }
                            },
                            "id": 9412,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6834:4:40",
                            "memberName": "fees",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3557,
                            "src": "6826:12:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$3516_memory_ptr",
                              "typeString": "struct IHyperdrive.Fees memory"
                            }
                          },
                          "id": 9413,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6839:5:40",
                          "memberName": "curve",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3509,
                          "src": "6826:18:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "31653138",
                          "id": 9414,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6847:4:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000000000000000000_by_1",
                            "typeString": "int_const 1000000000000000000"
                          },
                          "value": "1e18"
                        },
                        "src": "6826:25:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
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
                          "expression": {
                            "expression": {
                              "id": 9416,
                              "name": "_config",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9316,
                              "src": "6867:7:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolConfig memory"
                              }
                            },
                            "id": 9417,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6875:4:40",
                            "memberName": "fees",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3557,
                            "src": "6867:12:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$3516_memory_ptr",
                              "typeString": "struct IHyperdrive.Fees memory"
                            }
                          },
                          "id": 9418,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6880:4:40",
                          "memberName": "flat",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3512,
                          "src": "6867:17:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "31653138",
                          "id": 9419,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "6887:4:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000000000000000000_by_1",
                            "typeString": "int_const 1000000000000000000"
                          },
                          "value": "1e18"
                        },
                        "src": "6867:24:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "6826:65:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9426,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "expression": {
                            "id": 9422,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9316,
                            "src": "6907:7:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 9423,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6915:4:40",
                          "memberName": "fees",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3557,
                          "src": "6907:12:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Fees_$3516_memory_ptr",
                            "typeString": "struct IHyperdrive.Fees memory"
                          }
                        },
                        "id": 9424,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6920:10:40",
                        "memberName": "governance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3515,
                        "src": "6907:23:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "31653138",
                        "id": 9425,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6933:4:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000000000000000000_by_1",
                          "typeString": "int_const 1000000000000000000"
                        },
                        "value": "1e18"
                      },
                      "src": "6907:30:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6826:111:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9434,
                  "nodeType": "IfStatement",
                  "src": "6809:202:40",
                  "trueBody": {
                    "id": 9433,
                    "nodeType": "Block",
                    "src": "6948:63:40",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 9428,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "6969:11:40",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 9430,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6981:17:40",
                            "memberName": "InvalidFeeAmounts",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3637,
                            "src": "6969:29:40",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 9431,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6969:31:40",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9432,
                        "nodeType": "RevertStatement",
                        "src": "6962:38:40"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 9439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9435,
                      "name": "_curveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9227,
                      "src": "7020:9:40",
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
                          "id": 9436,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9316,
                          "src": "7032:7:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 9437,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7040:4:40",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3557,
                        "src": "7032:12:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$3516_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 9438,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7045:5:40",
                      "memberName": "curve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3509,
                      "src": "7032:18:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7020:30:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9440,
                  "nodeType": "ExpressionStatement",
                  "src": "7020:30:40"
                },
                {
                  "expression": {
                    "id": 9445,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9441,
                      "name": "_flatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9230,
                      "src": "7060:8:40",
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
                          "id": 9442,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9316,
                          "src": "7071:7:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 9443,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7079:4:40",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3557,
                        "src": "7071:12:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$3516_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 9444,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7084:4:40",
                      "memberName": "flat",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3512,
                      "src": "7071:17:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7060:28:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9446,
                  "nodeType": "ExpressionStatement",
                  "src": "7060:28:40"
                },
                {
                  "expression": {
                    "id": 9451,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9447,
                      "name": "_governanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9233,
                      "src": "7098:14:40",
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
                          "id": 9448,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9316,
                          "src": "7115:7:40",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 9449,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7123:4:40",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3557,
                        "src": "7115:12:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$3516_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 9450,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7128:10:40",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3515,
                      "src": "7115:23:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7098:40:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9452,
                  "nodeType": "ExpressionStatement",
                  "src": "7098:40:40"
                },
                {
                  "expression": {
                    "id": 9456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9453,
                      "name": "_linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9276,
                      "src": "7198:14:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9454,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "7215:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9455,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7223:13:40",
                      "memberName": "linkerFactory",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3523,
                      "src": "7215:21:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7198:38:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 9457,
                  "nodeType": "ExpressionStatement",
                  "src": "7198:38:40"
                },
                {
                  "expression": {
                    "id": 9461,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9458,
                      "name": "_linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9279,
                      "src": "7246:15:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9459,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9316,
                        "src": "7264:7:40",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9460,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7272:14:40",
                      "memberName": "linkerCodeHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3526,
                      "src": "7264:22:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "7246:40:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 9462,
                  "nodeType": "ExpressionStatement",
                  "src": "7246:40:40"
                }
              ]
            },
            "documentation": {
              "id": 9313,
              "nodeType": "StructuredDocumentation",
              "src": "4874:111:40",
              "text": "@notice Instantiates Hyperdrive's storage.\n @param _config The configuration of the Hyperdrive pool."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 9317,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9316,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "5032:7:40",
                  "nodeType": "VariableDeclaration",
                  "scope": 9464,
                  "src": "5002:37:40",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$3558_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 9315,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 9314,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "5002:11:40",
                        "5014:10:40"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3558,
                      "src": "5002:22:40"
                    },
                    "referencedDeclaration": 3558,
                    "src": "5002:22:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$3558_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5001:39:40"
            },
            "returnParameters": {
              "id": 9318,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5041:0:40"
            },
            "scope": 9465,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 9207,
              "name": "ReentrancyGuard",
              "nameLocations": [
                "735:15:40"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60564,
              "src": "735:15:40"
            },
            "id": 9208,
            "nodeType": "InheritanceSpecifier",
            "src": "735:15:40"
          }
        ],
        "canonicalName": "HyperdriveStorage",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 9206,
          "nodeType": "StructuredDocumentation",
          "src": "383:313:40",
          "text": "@author DELV\n @title HyperdriveStorage\n @notice Hyperdrive's storage contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          9465,
          60564
        ],
        "name": "HyperdriveStorage",
        "nameLocation": "714:17:40",
        "scope": 9466,
        "usedErrors": [
          3625,
          3631,
          3633,
          3637
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 40
} as const;
