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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"_config\":\"The configuration of the Hyperdrive pool.\"}}},\"stateVariables\":{\"_balanceOf\":{\"details\":\"Allows loading of each balance.\"},\"_baseToken\":{\"details\":\"The base asset.\"},\"_checkpointDuration\":{\"details\":\"The amount of seconds between share price checkpoints.\"},\"_checkpoints\":{\"details\":\"Hyperdrive positions are bucketed into checkpoints, which allows us      to avoid poking in any period that has LP or trading activity. The      checkpoints contain the starting share price from the checkpoint as      well as aggregate volume values.\"},\"_curveFee\":{\"details\":\"The LP fee applied to the curve portion of a trade.\"},\"_feeCollector\":{\"details\":\"The address which collects governance fees.\"},\"_flatFee\":{\"details\":\"The LP fee applied to the flat portion of a trade.\"},\"_governance\":{\"details\":\"The address that can pause the contract.\"},\"_governanceFeesAccrued\":{\"details\":\"Governance fees that haven't been collected yet denominated in shares.\"},\"_governanceLPFee\":{\"details\":\"The portion of the LP fee that goes to governance.\"},\"_governanceZombieFee\":{\"details\":\"The portion of the zombie interest that goes to governance.\"},\"_initialSharePrice\":{\"details\":\"The share price at the time the pool was created.\"},\"_isApprovedForAll\":{\"details\":\"Uniform approval for all tokens.\"},\"_linkerCodeHash\":{\"details\":\"The bytecode hash of the contract which forwards purely ERC20 calls      to this contract.\"},\"_linkerFactory\":{\"details\":\"The forwarder factory that deploys ERC20 forwarders for this      instance.\"},\"_marketState\":{\"details\":\"The state of the market. This includes the reserves, buffers, and      other data used to price trades and maintain solvency.\"},\"_minimumShareReserves\":{\"details\":\"The minimum amount of share reserves that must be maintained at all      times. This is used to enforce practical limits on the share      reserves to avoid numerical issues that can occur if the share      reserves become very small or equal to zero.\"},\"_minimumTransactionAmount\":{\"details\":\"The minimum amount of tokens that a position can be opened or      closed with.\"},\"_nonces\":{\"details\":\"A mapping to track the permitForAll signature nonces.\"},\"_pausers\":{\"details\":\"Addresses approved in this mapping can pause all deposits into the      contract and other non essential functionality.\"},\"_perTokenApprovals\":{\"details\":\"Additional optional per token approvals. This is non-standard for      ERC1155, but it's necessary to replicate the ERC20 interface.\"},\"_positionDuration\":{\"details\":\"The amount of seconds that elapse before a bond can be redeemed.\"},\"_timeStretch\":{\"details\":\"A parameter that decreases slippage around a target rate.\"},\"_totalSupply\":{\"details\":\"Allows loading of each total supply.\"},\"_withdrawPool\":{\"details\":\"The state corresponding to the withdraw pool.\"}},\"title\":\"HyperdriveStorage\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates Hyperdrive's storage.\"}},\"notice\":\"Hyperdrive's storage contract.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveStorage.sol\":\"HyperdriveStorage\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xe150223822098026c7ce734cd68848e45b47b92b024d34bc25886e9c6af6ec67\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6590e590f4af53d55e81e06ba8d53346cfce71ce1fa8d1833141f273d74c8a8f\",\"dweb:/ipfs/QmTM582joUpK7KBDWvwWEBi4XT3Qt9x8VLkhwPYj8Qu93o\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xd87293bc10dfe09707a042bf05091baf40ba344bdca141bd99b62256a7611817\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f6eadd454c6671c26bd22095c31a3bbaea7083df9aa6548dbaba32a4907e336\",\"dweb:/ipfs/QmY1jMW9DuAk9CSfVS6MsG5onqjZHKzdBrv2TcHvj9yKj4\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x2f9511684820be7510155adfe3c2c2ef7e2583472946bae37f379bac801fc263\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7e9a84e4168448e3320a6682c8ba248c8b51757df173b86507e9aba4b6167247\",\"dweb:/ipfs/QmSonetYBP22Fnc8HrcaTxAA1Zg2PCR5ptPiEp22sA77Ka\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
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
        "keccak256": "0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787",
        "urls": [
          "bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8",
          "dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw"
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
        "keccak256": "0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b",
        "urls": [
          "bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17",
          "dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc"
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
        "keccak256": "0xe150223822098026c7ce734cd68848e45b47b92b024d34bc25886e9c6af6ec67",
        "urls": [
          "bzz-raw://6590e590f4af53d55e81e06ba8d53346cfce71ce1fa8d1833141f273d74c8a8f",
          "dweb:/ipfs/QmTM582joUpK7KBDWvwWEBi4XT3Qt9x8VLkhwPYj8Qu93o"
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
        "keccak256": "0xd87293bc10dfe09707a042bf05091baf40ba344bdca141bd99b62256a7611817",
        "urls": [
          "bzz-raw://8f6eadd454c6671c26bd22095c31a3bbaea7083df9aa6548dbaba32a4907e336",
          "dweb:/ipfs/QmY1jMW9DuAk9CSfVS6MsG5onqjZHKzdBrv2TcHvj9yKj4"
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
        "keccak256": "0x2f9511684820be7510155adfe3c2c2ef7e2583472946bae37f379bac801fc263",
        "urls": [
          "bzz-raw://7e9a84e4168448e3320a6682c8ba248c8b51757df173b86507e9aba4b6167247",
          "dweb:/ipfs/QmSonetYBP22Fnc8HrcaTxAA1Zg2PCR5ptPiEp22sA77Ka"
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
    "id": 10067,
    "exportedSymbols": {
      "FixedPointMath": [
        11134
      ],
      "HyperdriveMath": [
        11698
      ],
      "HyperdriveStorage": [
        10066
      ],
      "IERC20": [
        3872
      ],
      "IHyperdrive": [
        4675
      ],
      "ONE": [
        10389
      ],
      "ReentrancyGuard": [
        63914
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:7487:49",
    "nodes": [
      {
        "id": 9794,
        "nodeType": "PragmaDirective",
        "src": "39:23:49",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 9796,
        "nodeType": "ImportDirective",
        "src": "64:68:49",
        "nodes": [],
        "absolutePath": "lib/solmate/src/utils/ReentrancyGuard.sol",
        "file": "solmate/utils/ReentrancyGuard.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 10067,
        "sourceUnit": 63915,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9795,
              "name": "ReentrancyGuard",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63914,
              "src": "73:15:49",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9798,
        "nodeType": "ImportDirective",
        "src": "133:50:49",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "../interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 10067,
        "sourceUnit": 3873,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9797,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3872,
              "src": "142:6:49",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9800,
        "nodeType": "ImportDirective",
        "src": "184:60:49",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 10067,
        "sourceUnit": 4676,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9799,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4675,
              "src": "193:11:49",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9803,
        "nodeType": "ImportDirective",
        "src": "245:70:49",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 10067,
        "sourceUnit": 11135,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9801,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11134,
              "src": "254:14:49",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 9802,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10389,
              "src": "270:3:49",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 9805,
        "nodeType": "ImportDirective",
        "src": "316:65:49",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "../libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 10067,
        "sourceUnit": 11699,
        "symbolAliases": [
          {
            "foreign": {
              "id": 9804,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11698,
              "src": "325:14:49",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 10066,
        "nodeType": "ContractDefinition",
        "src": "696:6829:49",
        "nodes": [
          {
            "id": 9811,
            "nodeType": "UsingForDirective",
            "src": "757:33:49",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 9809,
              "name": "FixedPointMath",
              "nameLocations": [
                "763:14:49"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11134,
              "src": "763:14:49"
            },
            "typeName": {
              "id": 9810,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "782:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 9815,
            "nodeType": "VariableDeclaration",
            "src": "845:36:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9812,
              "nodeType": "StructuredDocumentation",
              "src": "816:24:49",
              "text": "@dev The base asset."
            },
            "mutability": "immutable",
            "name": "_baseToken",
            "nameLocation": "871:10:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC20_$3872",
              "typeString": "contract IERC20"
            },
            "typeName": {
              "id": 9814,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 9813,
                "name": "IERC20",
                "nameLocations": [
                  "845:6:49"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 3872,
                "src": "845:6:49"
              },
              "referencedDeclaration": 3872,
              "src": "845:6:49",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC20_$3872",
                "typeString": "contract IERC20"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9818,
            "nodeType": "VariableDeclaration",
            "src": "974:46:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9816,
              "nodeType": "StructuredDocumentation",
              "src": "906:63:49",
              "text": "@dev The amount of seconds between share price checkpoints."
            },
            "mutability": "immutable",
            "name": "_checkpointDuration",
            "nameLocation": "1001:19:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9817,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "974:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9821,
            "nodeType": "VariableDeclaration",
            "src": "1105:44:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9819,
              "nodeType": "StructuredDocumentation",
              "src": "1027:73:49",
              "text": "@dev The amount of seconds that elapse before a bond can be redeemed."
            },
            "mutability": "immutable",
            "name": "_positionDuration",
            "nameLocation": "1132:17:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9820,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1105:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9824,
            "nodeType": "VariableDeclaration",
            "src": "1227:39:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9822,
              "nodeType": "StructuredDocumentation",
              "src": "1156:66:49",
              "text": "@dev A parameter that decreases slippage around a target rate."
            },
            "mutability": "immutable",
            "name": "_timeStretch",
            "nameLocation": "1254:12:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9823,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1227:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9827,
            "nodeType": "VariableDeclaration",
            "src": "1356:36:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9825,
              "nodeType": "StructuredDocumentation",
              "src": "1291:60:49",
              "text": "@dev The LP fee applied to the curve portion of a trade."
            },
            "mutability": "immutable",
            "name": "_curveFee",
            "nameLocation": "1383:9:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9826,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1356:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9830,
            "nodeType": "VariableDeclaration",
            "src": "1463:35:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9828,
              "nodeType": "StructuredDocumentation",
              "src": "1399:59:49",
              "text": "@dev The LP fee applied to the flat portion of a trade."
            },
            "mutability": "immutable",
            "name": "_flatFee",
            "nameLocation": "1490:8:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9829,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1463:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9833,
            "nodeType": "VariableDeclaration",
            "src": "1569:43:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9831,
              "nodeType": "StructuredDocumentation",
              "src": "1505:59:49",
              "text": "@dev The portion of the LP fee that goes to governance."
            },
            "mutability": "immutable",
            "name": "_governanceLPFee",
            "nameLocation": "1596:16:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9832,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1569:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9836,
            "nodeType": "VariableDeclaration",
            "src": "1692:47:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9834,
              "nodeType": "StructuredDocumentation",
              "src": "1619:68:49",
              "text": "@dev The portion of the zombie interest that goes to governance."
            },
            "mutability": "immutable",
            "name": "_governanceZombieFee",
            "nameLocation": "1719:20:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9835,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1692:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9839,
            "nodeType": "VariableDeclaration",
            "src": "1835:45:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9837,
              "nodeType": "StructuredDocumentation",
              "src": "1772:58:49",
              "text": "@dev The share price at the time the pool was created."
            },
            "mutability": "immutable",
            "name": "_initialSharePrice",
            "nameLocation": "1862:18:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9838,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1835:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9842,
            "nodeType": "VariableDeclaration",
            "src": "2176:48:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9840,
              "nodeType": "StructuredDocumentation",
              "src": "1887:284:49",
              "text": "@dev The minimum amount of share reserves that must be maintained at all\n      times. This is used to enforce practical limits on the share\n      reserves to avoid numerical issues that can occur if the share\n      reserves become very small or equal to zero."
            },
            "mutability": "immutable",
            "name": "_minimumShareReserves",
            "nameLocation": "2203:21:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9841,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2176:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9845,
            "nodeType": "VariableDeclaration",
            "src": "2332:52:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9843,
              "nodeType": "StructuredDocumentation",
              "src": "2231:96:49",
              "text": "@dev The minimum amount of tokens that a position can be opened or\n      closed with."
            },
            "mutability": "immutable",
            "name": "_minimumTransactionAmount",
            "nameLocation": "2359:25:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9844,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "2332:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9849,
            "nodeType": "VariableDeclaration",
            "src": "2538:45:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9846,
              "nodeType": "StructuredDocumentation",
              "src": "2391:142:49",
              "text": "@dev The state of the market. This includes the reserves, buffers, and\n      other data used to price trades and maintain solvency."
            },
            "mutability": "mutable",
            "name": "_marketState",
            "nameLocation": "2571:12:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_MarketState_$4360_storage",
              "typeString": "struct IHyperdrive.MarketState"
            },
            "typeName": {
              "id": 9848,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 9847,
                "name": "IHyperdrive.MarketState",
                "nameLocations": [
                  "2538:11:49",
                  "2550:11:49"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4360,
                "src": "2538:23:49"
              },
              "referencedDeclaration": 4360,
              "src": "2538:23:49",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_MarketState_$4360_storage_ptr",
                "typeString": "struct IHyperdrive.MarketState"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9853,
            "nodeType": "VariableDeclaration",
            "src": "2649:47:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9850,
              "nodeType": "StructuredDocumentation",
              "src": "2590:54:49",
              "text": "@dev The state corresponding to the withdraw pool."
            },
            "mutability": "mutable",
            "name": "_withdrawPool",
            "nameLocation": "2683:13:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_WithdrawPool_$4371_storage",
              "typeString": "struct IHyperdrive.WithdrawPool"
            },
            "typeName": {
              "id": 9852,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 9851,
                "name": "IHyperdrive.WithdrawPool",
                "nameLocations": [
                  "2649:11:49",
                  "2661:12:49"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4371,
                "src": "2649:24:49"
              },
              "referencedDeclaration": 4371,
              "src": "2649:24:49",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_WithdrawPool_$4371_storage_ptr",
                "typeString": "struct IHyperdrive.WithdrawPool"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9859,
            "nodeType": "VariableDeclaration",
            "src": "2991:100:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9854,
              "nodeType": "StructuredDocumentation",
              "src": "2703:283:49",
              "text": "@dev Hyperdrive positions are bucketed into checkpoints, which allows us\n      to avoid poking in any period that has LP or trading activity. The\n      checkpoints contain the starting share price from the checkpoint as\n      well as aggregate volume values."
            },
            "mutability": "mutable",
            "name": "_checkpoints",
            "nameLocation": "3079:12:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$4364_storage_$",
              "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
            },
            "typeName": {
              "id": 9858,
              "keyName": "checkpointNumber",
              "keyNameLocation": "3007:16:49",
              "keyType": {
                "id": 9855,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "2999:7:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "2991:70:49",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$4364_storage_$",
                "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint)"
              },
              "valueName": "checkpoint",
              "valueNameLocation": "3050:10:49",
              "valueType": {
                "id": 9857,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 9856,
                  "name": "IHyperdrive.Checkpoint",
                  "nameLocations": [
                    "3027:11:49",
                    "3039:10:49"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 4364,
                  "src": "3027:22:49"
                },
                "referencedDeclaration": 4364,
                "src": "3027:22:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Checkpoint_$4364_storage_ptr",
                  "typeString": "struct IHyperdrive.Checkpoint"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9862,
            "nodeType": "VariableDeclaration",
            "src": "3174:40:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9860,
              "nodeType": "StructuredDocumentation",
              "src": "3117:52:49",
              "text": "@dev The address which collects governance fees."
            },
            "mutability": "immutable",
            "name": "_feeCollector",
            "nameLocation": "3201:13:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9861,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "3174:7:49",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9865,
            "nodeType": "VariableDeclaration",
            "src": "3275:28:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9863,
              "nodeType": "StructuredDocumentation",
              "src": "3221:49:49",
              "text": "@dev The address that can pause the contract."
            },
            "mutability": "mutable",
            "name": "_governance",
            "nameLocation": "3292:11:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9864,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "3275:7:49",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9868,
            "nodeType": "VariableDeclaration",
            "src": "3394:39:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9866,
              "nodeType": "StructuredDocumentation",
              "src": "3310:79:49",
              "text": "@dev Governance fees that haven't been collected yet denominated in shares."
            },
            "mutability": "mutable",
            "name": "_governanceFeesAccrued",
            "nameLocation": "3411:22:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 9867,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "3394:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9873,
            "nodeType": "VariableDeclaration",
            "src": "3581:56:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9869,
              "nodeType": "StructuredDocumentation",
              "src": "3440:136:49",
              "text": "@dev Addresses approved in this mapping can pause all deposits into the\n      contract and other non essential functionality."
            },
            "mutability": "mutable",
            "name": "_pausers",
            "nameLocation": "3629:8:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 9872,
              "keyName": "user",
              "keyNameLocation": "3597:4:49",
              "keyType": {
                "id": 9870,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "3589:7:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "3581:38:49",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueName": "isPauser",
              "valueNameLocation": "3610:8:49",
              "valueType": {
                "id": 9871,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "3605:4:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9876,
            "nodeType": "VariableDeclaration",
            "src": "3765:41:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9874,
              "nodeType": "StructuredDocumentation",
              "src": "3668:92:49",
              "text": "@dev The forwarder factory that deploys ERC20 forwarders for this\n      instance."
            },
            "mutability": "immutable",
            "name": "_linkerFactory",
            "nameLocation": "3792:14:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9875,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "3765:7:49",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9879,
            "nodeType": "VariableDeclaration",
            "src": "3925:42:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9877,
              "nodeType": "StructuredDocumentation",
              "src": "3813:107:49",
              "text": "@dev The bytecode hash of the contract which forwards purely ERC20 calls\n      to this contract."
            },
            "mutability": "immutable",
            "name": "_linkerCodeHash",
            "nameLocation": "3952:15:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 9878,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "3925:7:49",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9886,
            "nodeType": "VariableDeclaration",
            "src": "4019:96:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9880,
              "nodeType": "StructuredDocumentation",
              "src": "3974:40:49",
              "text": "@dev Allows loading of each balance."
            },
            "mutability": "mutable",
            "name": "_balanceOf",
            "nameLocation": "4105:10:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
              "typeString": "mapping(uint256 => mapping(address => uint256))"
            },
            "typeName": {
              "id": 9885,
              "keyName": "tokenId",
              "keyNameLocation": "4035:7:49",
              "keyType": {
                "id": 9881,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4027:7:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "4019:68:49",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_uint256_$_$",
                "typeString": "mapping(uint256 => mapping(address => uint256))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 9884,
                "keyName": "user",
                "keyNameLocation": "4062:4:49",
                "keyType": {
                  "id": 9882,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "4054:7:49",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "4046:40:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueName": "balance",
                "valueNameLocation": "4078:7:49",
                "valueType": {
                  "id": 9883,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "4070:7:49",
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
            "id": 9891,
            "nodeType": "VariableDeclaration",
            "src": "4172:64:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9887,
              "nodeType": "StructuredDocumentation",
              "src": "4122:45:49",
              "text": "@dev Allows loading of each total supply."
            },
            "mutability": "mutable",
            "name": "_totalSupply",
            "nameLocation": "4224:12:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 9890,
              "keyName": "tokenId",
              "keyNameLocation": "4188:7:49",
              "keyType": {
                "id": 9888,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4180:7:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "4172:42:49",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueName": "supply",
              "valueNameLocation": "4207:6:49",
              "valueType": {
                "id": 9889,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4199:7:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 9898,
            "nodeType": "VariableDeclaration",
            "src": "4289:102:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9892,
              "nodeType": "StructuredDocumentation",
              "src": "4243:41:49",
              "text": "@dev Uniform approval for all tokens."
            },
            "mutability": "mutable",
            "name": "_isApprovedForAll",
            "nameLocation": "4374:17:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
              "typeString": "mapping(address => mapping(address => bool))"
            },
            "typeName": {
              "id": 9897,
              "keyName": "from",
              "keyNameLocation": "4305:4:49",
              "keyType": {
                "id": 9893,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "4297:7:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "4289:67:49",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_bool_$_$",
                "typeString": "mapping(address => mapping(address => bool))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 9896,
                "keyName": "caller",
                "keyNameLocation": "4329:6:49",
                "keyType": {
                  "id": 9894,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "4321:7:49",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "4313:42:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                  "typeString": "mapping(address => bool)"
                },
                "valueName": "isApproved",
                "valueNameLocation": "4344:10:49",
                "valueType": {
                  "id": 9895,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "4339:4:49",
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
            "id": 9907,
            "nodeType": "VariableDeclaration",
            "src": "4552:132:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9899,
              "nodeType": "StructuredDocumentation",
              "src": "4398:149:49",
              "text": "@dev Additional optional per token approvals. This is non-standard for\n      ERC1155, but it's necessary to replicate the ERC20 interface."
            },
            "mutability": "mutable",
            "name": "_perTokenApprovals",
            "nameLocation": "4666:18:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
              "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
            },
            "typeName": {
              "id": 9906,
              "keyName": "tokenId",
              "keyNameLocation": "4568:7:49",
              "keyType": {
                "id": 9900,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4560:7:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "4552:96:49",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$_$",
                "typeString": "mapping(uint256 => mapping(address => mapping(address => uint256)))"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 9905,
                "keyName": "from",
                "keyNameLocation": "4595:4:49",
                "keyType": {
                  "id": 9901,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "4587:7:49",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "4579:68:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_uint256_$_$",
                  "typeString": "mapping(address => mapping(address => uint256))"
                },
                "valueName": "",
                "valueNameLocation": "-1:-1:-1",
                "valueType": {
                  "id": 9904,
                  "keyName": "caller",
                  "keyNameLocation": "4619:6:49",
                  "keyType": {
                    "id": 9902,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4611:7:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "Mapping",
                  "src": "4603:43:49",
                  "typeDescriptions": {
                    "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                    "typeString": "mapping(address => uint256)"
                  },
                  "valueName": "approved",
                  "valueNameLocation": "4637:8:49",
                  "valueType": {
                    "id": 9903,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4629:7:49",
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
            "id": 9912,
            "nodeType": "VariableDeclaration",
            "src": "4758:55:49",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 9908,
              "nodeType": "StructuredDocumentation",
              "src": "4691:62:49",
              "text": "@dev A mapping to track the permitForAll signature nonces."
            },
            "mutability": "mutable",
            "name": "_nonces",
            "nameLocation": "4806:7:49",
            "scope": 10066,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 9911,
              "keyName": "user",
              "keyNameLocation": "4774:4:49",
              "keyType": {
                "id": 9909,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "4766:7:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "4758:38:49",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueName": "nonce",
              "valueNameLocation": "4790:5:49",
              "valueType": {
                "id": 9910,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "4782:7:49",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 10065,
            "nodeType": "FunctionDefinition",
            "src": "4961:2562:49",
            "nodes": [],
            "body": {
              "id": 10064,
              "nodeType": "Block",
              "src": "5012:2511:49",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 9922,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9919,
                      "name": "_baseToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9815,
                      "src": "5068:10:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$3872",
                        "typeString": "contract IERC20"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9920,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9916,
                        "src": "5081:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9921,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5089:9:49",
                      "memberName": "baseToken",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4424,
                      "src": "5081:17:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC20_$3872",
                        "typeString": "contract IERC20"
                      }
                    },
                    "src": "5068:30:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC20_$3872",
                      "typeString": "contract IERC20"
                    }
                  },
                  "id": 9923,
                  "nodeType": "ExpressionStatement",
                  "src": "5068:30:49"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9927,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 9924,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9916,
                        "src": "5627:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9925,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5635:20:49",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4436,
                      "src": "5627:28:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "316533",
                      "id": 9926,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5658:3:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000_by_1",
                        "typeString": "int_const 1000"
                      },
                      "value": "1e3"
                    },
                    "src": "5627:34:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9934,
                  "nodeType": "IfStatement",
                  "src": "5623:113:49",
                  "trueBody": {
                    "id": 9933,
                    "nodeType": "Block",
                    "src": "5663:73:49",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 9928,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "5684:11:49",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 9930,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5696:27:49",
                            "memberName": "InvalidMinimumShareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4533,
                            "src": "5684:39:49",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 9931,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5684:41:49",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9932,
                        "nodeType": "RevertStatement",
                        "src": "5677:48:49"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 9938,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9935,
                      "name": "_minimumShareReserves",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9842,
                      "src": "5745:21:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9936,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9916,
                        "src": "5769:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9937,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5777:20:49",
                      "memberName": "minimumShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4436,
                      "src": "5769:28:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "5745:52:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9939,
                  "nodeType": "ExpressionStatement",
                  "src": "5745:52:49"
                },
                {
                  "expression": {
                    "id": 9943,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9940,
                      "name": "_minimumTransactionAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9845,
                      "src": "6057:25:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9941,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9916,
                        "src": "6085:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9942,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6093:24:49",
                      "memberName": "minimumTransactionAmount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4439,
                      "src": "6085:32:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6057:60:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9944,
                  "nodeType": "ExpressionStatement",
                  "src": "6057:60:49"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 9948,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 9945,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9916,
                        "src": "6282:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9946,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6290:18:49",
                      "memberName": "checkpointDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4445,
                      "src": "6282:26:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 9947,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6312:1:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6282:31:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9955,
                  "nodeType": "IfStatement",
                  "src": "6278:108:49",
                  "trueBody": {
                    "id": 9954,
                    "nodeType": "Block",
                    "src": "6315:71:49",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 9949,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "6336:11:49",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 9951,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6348:25:49",
                            "memberName": "InvalidCheckpointDuration",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4527,
                            "src": "6336:37:49",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 9952,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6336:39:49",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9953,
                        "nodeType": "RevertStatement",
                        "src": "6329:46:49"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 9959,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9956,
                      "name": "_checkpointDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9818,
                      "src": "6395:19:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9957,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9916,
                        "src": "6417:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9958,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6425:18:49",
                      "memberName": "checkpointDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4445,
                      "src": "6417:26:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6395:48:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9960,
                  "nodeType": "ExpressionStatement",
                  "src": "6395:48:49"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 9973,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 9965,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 9961,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9916,
                          "src": "6470:7:49",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 9962,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6478:16:49",
                        "memberName": "positionDuration",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4442,
                        "src": "6470:24:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "expression": {
                          "id": 9963,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9916,
                          "src": "6497:7:49",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 9964,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6505:18:49",
                        "memberName": "checkpointDuration",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4445,
                        "src": "6497:26:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6470:53:49",
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
                      "id": 9972,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 9970,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 9966,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9916,
                            "src": "6539:7:49",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 9967,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6547:16:49",
                          "memberName": "positionDuration",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4442,
                          "src": "6539:24:49",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "%",
                        "rightExpression": {
                          "expression": {
                            "id": 9968,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9916,
                            "src": "6566:7:49",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 9969,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "6574:18:49",
                          "memberName": "checkpointDuration",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4445,
                          "src": "6566:26:49",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6539:53:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 9971,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6596:1:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "6539:58:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6470:127:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 9980,
                  "nodeType": "IfStatement",
                  "src": "6453:224:49",
                  "trueBody": {
                    "id": 9979,
                    "nodeType": "Block",
                    "src": "6608:69:49",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 9974,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "6629:11:49",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 9976,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6641:23:49",
                            "memberName": "InvalidPositionDuration",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4535,
                            "src": "6629:35:49",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 9977,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6629:37:49",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 9978,
                        "nodeType": "RevertStatement",
                        "src": "6622:44:49"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 9984,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9981,
                      "name": "_positionDuration",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9821,
                      "src": "6686:17:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9982,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9916,
                        "src": "6706:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9983,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6714:16:49",
                      "memberName": "positionDuration",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4442,
                      "src": "6706:24:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6686:44:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9985,
                  "nodeType": "ExpressionStatement",
                  "src": "6686:44:49"
                },
                {
                  "expression": {
                    "id": 9989,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9986,
                      "name": "_timeStretch",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9824,
                      "src": "6740:12:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9987,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9916,
                        "src": "6755:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9988,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6763:11:49",
                      "memberName": "timeStretch",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4448,
                      "src": "6755:19:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6740:34:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9990,
                  "nodeType": "ExpressionStatement",
                  "src": "6740:34:49"
                },
                {
                  "expression": {
                    "id": 9994,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9991,
                      "name": "_initialSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9839,
                      "src": "6784:18:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9992,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9916,
                        "src": "6805:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9993,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6813:17:49",
                      "memberName": "initialSharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4433,
                      "src": "6805:25:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6784:46:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 9995,
                  "nodeType": "ExpressionStatement",
                  "src": "6784:46:49"
                },
                {
                  "expression": {
                    "id": 9999,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 9996,
                      "name": "_governance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9865,
                      "src": "6840:11:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 9997,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9916,
                        "src": "6854:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 9998,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6862:10:49",
                      "memberName": "governance",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4451,
                      "src": "6854:18:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6840:32:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 10000,
                  "nodeType": "ExpressionStatement",
                  "src": "6840:32:49"
                },
                {
                  "expression": {
                    "id": 10004,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10001,
                      "name": "_feeCollector",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9862,
                      "src": "6882:13:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 10002,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9916,
                        "src": "6898:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 10003,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6906:12:49",
                      "memberName": "feeCollector",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4454,
                      "src": "6898:20:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "6882:36:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 10005,
                  "nodeType": "ExpressionStatement",
                  "src": "6882:36:49"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 10022,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 10016,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 10010,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "expression": {
                              "id": 10006,
                              "name": "_config",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9916,
                              "src": "6988:7:49",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolConfig memory"
                              }
                            },
                            "id": 10007,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6996:4:49",
                            "memberName": "fees",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4458,
                            "src": "6988:12:49",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                              "typeString": "struct IHyperdrive.Fees memory"
                            }
                          },
                          "id": 10008,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7001:5:49",
                          "memberName": "curve",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4374,
                          "src": "6988:18:49",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "31653138",
                          "id": 10009,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7009:4:49",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000000000000000000_by_1",
                            "typeString": "int_const 1000000000000000000"
                          },
                          "value": "1e18"
                        },
                        "src": "6988:25:49",
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
                        "id": 10015,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "expression": {
                              "id": 10011,
                              "name": "_config",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9916,
                              "src": "7029:7:49",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                                "typeString": "struct IHyperdrive.PoolConfig memory"
                              }
                            },
                            "id": 10012,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7037:4:49",
                            "memberName": "fees",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4458,
                            "src": "7029:12:49",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                              "typeString": "struct IHyperdrive.Fees memory"
                            }
                          },
                          "id": 10013,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7042:4:49",
                          "memberName": "flat",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4377,
                          "src": "7029:17:49",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "hexValue": "31653138",
                          "id": 10014,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "7049:4:49",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1000000000000000000_by_1",
                            "typeString": "int_const 1000000000000000000"
                          },
                          "value": "1e18"
                        },
                        "src": "7029:24:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "6988:65:49",
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
                      "id": 10021,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "expression": {
                            "id": 10017,
                            "name": "_config",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9916,
                            "src": "7069:7:49",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                              "typeString": "struct IHyperdrive.PoolConfig memory"
                            }
                          },
                          "id": 10018,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "7077:4:49",
                          "memberName": "fees",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4458,
                          "src": "7069:12:49",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                            "typeString": "struct IHyperdrive.Fees memory"
                          }
                        },
                        "id": 10019,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7082:12:49",
                        "memberName": "governanceLP",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4380,
                        "src": "7069:25:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "31653138",
                        "id": 10020,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7097:4:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1000000000000000000_by_1",
                          "typeString": "int_const 1000000000000000000"
                        },
                        "value": "1e18"
                      },
                      "src": "7069:32:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "6988:113:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 10029,
                  "nodeType": "IfStatement",
                  "src": "6971:204:49",
                  "trueBody": {
                    "id": 10028,
                    "nodeType": "Block",
                    "src": "7112:63:49",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 10023,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "7133:11:49",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 10025,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "7145:17:49",
                            "memberName": "InvalidFeeAmounts",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4539,
                            "src": "7133:29:49",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 10026,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7133:31:49",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 10027,
                        "nodeType": "RevertStatement",
                        "src": "7126:38:49"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 10034,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10030,
                      "name": "_curveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9827,
                      "src": "7184:9:49",
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
                          "id": 10031,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9916,
                          "src": "7196:7:49",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 10032,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7204:4:49",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4458,
                        "src": "7196:12:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 10033,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7209:5:49",
                      "memberName": "curve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4374,
                      "src": "7196:18:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7184:30:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10035,
                  "nodeType": "ExpressionStatement",
                  "src": "7184:30:49"
                },
                {
                  "expression": {
                    "id": 10040,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10036,
                      "name": "_flatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9830,
                      "src": "7224:8:49",
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
                          "id": 10037,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9916,
                          "src": "7235:7:49",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 10038,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7243:4:49",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4458,
                        "src": "7235:12:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 10039,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7248:4:49",
                      "memberName": "flat",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4377,
                      "src": "7235:17:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7224:28:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10041,
                  "nodeType": "ExpressionStatement",
                  "src": "7224:28:49"
                },
                {
                  "expression": {
                    "id": 10046,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10042,
                      "name": "_governanceLPFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9833,
                      "src": "7262:16:49",
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
                          "id": 10043,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9916,
                          "src": "7281:7:49",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 10044,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7289:4:49",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4458,
                        "src": "7281:12:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 10045,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7294:12:49",
                      "memberName": "governanceLP",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4380,
                      "src": "7281:25:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7262:44:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10047,
                  "nodeType": "ExpressionStatement",
                  "src": "7262:44:49"
                },
                {
                  "expression": {
                    "id": 10052,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10048,
                      "name": "_governanceZombieFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9836,
                      "src": "7316:20:49",
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
                          "id": 10049,
                          "name": "_config",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9916,
                          "src": "7339:7:49",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                            "typeString": "struct IHyperdrive.PoolConfig memory"
                          }
                        },
                        "id": 10050,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7347:4:49",
                        "memberName": "fees",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4458,
                        "src": "7339:12:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Fees_$4384_memory_ptr",
                          "typeString": "struct IHyperdrive.Fees memory"
                        }
                      },
                      "id": 10051,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7352:16:49",
                      "memberName": "governanceZombie",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4383,
                      "src": "7339:29:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7316:52:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 10053,
                  "nodeType": "ExpressionStatement",
                  "src": "7316:52:49"
                },
                {
                  "expression": {
                    "id": 10057,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10054,
                      "name": "_linkerFactory",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9876,
                      "src": "7428:14:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 10055,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9916,
                        "src": "7445:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 10056,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7453:13:49",
                      "memberName": "linkerFactory",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4427,
                      "src": "7445:21:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7428:38:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 10058,
                  "nodeType": "ExpressionStatement",
                  "src": "7428:38:49"
                },
                {
                  "expression": {
                    "id": 10062,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 10059,
                      "name": "_linkerCodeHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9879,
                      "src": "7476:15:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "expression": {
                        "id": 10060,
                        "name": "_config",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9916,
                        "src": "7494:7:49",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                          "typeString": "struct IHyperdrive.PoolConfig memory"
                        }
                      },
                      "id": 10061,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7502:14:49",
                      "memberName": "linkerCodeHash",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4430,
                      "src": "7494:22:49",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "7476:40:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 10063,
                  "nodeType": "ExpressionStatement",
                  "src": "7476:40:49"
                }
              ]
            },
            "documentation": {
              "id": 9913,
              "nodeType": "StructuredDocumentation",
              "src": "4845:111:49",
              "text": "@notice Instantiates Hyperdrive's storage.\n @param _config The configuration of the Hyperdrive pool."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 9917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 9916,
                  "mutability": "mutable",
                  "name": "_config",
                  "nameLocation": "5003:7:49",
                  "nodeType": "VariableDeclaration",
                  "scope": 10065,
                  "src": "4973:37:49",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$4459_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 9915,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 9914,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "4973:11:49",
                        "4985:10:49"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4459,
                      "src": "4973:22:49"
                    },
                    "referencedDeclaration": 4459,
                    "src": "4973:22:49",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$4459_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4972:39:49"
            },
            "returnParameters": {
              "id": 9918,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5012:0:49"
            },
            "scope": 10066,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 9807,
              "name": "ReentrancyGuard",
              "nameLocations": [
                "735:15:49"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 63914,
              "src": "735:15:49"
            },
            "id": 9808,
            "nodeType": "InheritanceSpecifier",
            "src": "735:15:49"
          }
        ],
        "canonicalName": "HyperdriveStorage",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 9806,
          "nodeType": "StructuredDocumentation",
          "src": "383:313:49",
          "text": "@author DELV\n @title HyperdriveStorage\n @notice Hyperdrive's storage contract.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          10066,
          63914
        ],
        "name": "HyperdriveStorage",
        "nameLocation": "714:17:49",
        "scope": 10067,
        "usedErrors": [
          4527,
          4533,
          4535,
          4539
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 49
} as const;
