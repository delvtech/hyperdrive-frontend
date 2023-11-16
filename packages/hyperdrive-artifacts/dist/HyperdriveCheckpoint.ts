export const HyperdriveCheckpoint = 
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
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpSharePrice",
          "type": "uint256"
        }
      ],
      "name": "AddLiquidity",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "CloseLong",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "CloseShort",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "checkpointTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturedShorts",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturedLongs",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpSharePrice",
          "type": "uint256"
        }
      ],
      "name": "CreateCheckpoint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "apr",
          "type": "uint256"
        }
      ],
      "name": "Initialize",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "OpenLong",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "trader",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "maturityTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "bondAmount",
          "type": "uint256"
        }
      ],
      "name": "OpenShort",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "withdrawalShareAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        }
      ],
      "name": "RedeemWithdrawalShares",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "provider",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "baseAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "sharePrice",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "withdrawalShareAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "lpSharePrice",
          "type": "uint256"
        }
      ],
      "name": "RemoveLiquidity",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"Implements the checkpoint accounting for Hyperdrive.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveCheckpoint.sol\":\"HyperdriveCheckpoint\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70\",\"dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc\",\"dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8\"]},\"contracts/src/internal/HyperdriveCheckpoint.sol\":{\"keccak256\":\"0xd846aec9e34732c384a70ae306e8015eeb4a85ba7a68861d3a741310efc9eb57\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://cdd512b5caa814e88813e3a8a03bfc5e460c78c81c4e403bc8e57300ae11a1d2\",\"dweb:/ipfs/QmUAMC52wZ6H86zUPQ7xPYVjAYjYQ97RiAfV1kn27ZYPsz\"]},\"contracts/src/internal/HyperdriveLP.sol\":{\"keccak256\":\"0x6779541f073ba5ce6e0656d10c7d9ef23734d2675b865b4d5310a023c30764ad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5cc569f006ef38723c1cb893b4e08d22ca0a448dc559c8abd18b28bd6967fcb7\",\"dweb:/ipfs/QmdPfZGuM8g3qp4CPsuztZe1wcVrytWkbqHQDbsTVEKBdF\"]},\"contracts/src/internal/HyperdriveLong.sol\":{\"keccak256\":\"0x45ba04560ca590427cc1ad2e98ec0122f9b6496ead2e3d4b3438339c982bd543\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://ee1b36b7ab75044d12e8b91ead75c4377b9da1daa630ea7d1a0c413f963f916a\",\"dweb:/ipfs/QmPsoXubd1sfy7NNn7YWSrYTTrBEreuawVRFFjDrHQmKzZ\"]},\"contracts/src/internal/HyperdriveMultiToken.sol\":{\"keccak256\":\"0x6b85590aeffa0a73aabf0c17a958bdec064a4d59c2e3d7595a8cb2d86fb01277\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d89ad612f8624723adab39bd85311389fe95f685cf496e1a5d116bfafd6588eb\",\"dweb:/ipfs/QmPWVwrfo65BZofeWubpZsM93yzxMFjhPfoNYsaT31yn28\"]},\"contracts/src/internal/HyperdriveShort.sol\":{\"keccak256\":\"0x0dc04dc0f6070d51c2c58587f1d0f0604594e6c5728bf37e46da3a5952a0e0f0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1529824590ac5cdb7d4ffb67449be6a44f3bef9db40646bfa13bb5979e1a2f2d\",\"dweb:/ipfs/QmbXKFyqUaL1vv6wn7avWn463Uf8JgJvVLN6v5rUdJbys7\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db\",\"dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62\",\"dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a\",\"dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
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
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "lpAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "AddLiquidity",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Approval",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "account",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "ApprovalForAll",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CloseLong",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CloseShort",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "checkpointTime",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "maturedShorts",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "maturedLongs",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CreateCheckpoint",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "lpAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "apr",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "Initialize",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "OpenLong",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "trader",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "assetId",
              "type": "uint256",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "maturityTime",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "bondAmount",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "OpenShort",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "withdrawalShareAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RedeemWithdrawalShares",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "provider",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "lpAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "baseAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "sharePrice",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "withdrawalShareAmount",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "RemoveLiquidity",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "from",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "TransferSingle",
          "anonymous": false
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
        "contracts/src/internal/HyperdriveCheckpoint.sol": "HyperdriveCheckpoint"
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
      "contracts/src/internal/HyperdriveBase.sol": {
        "keccak256": "0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646",
        "urls": [
          "bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc",
          "dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveCheckpoint.sol": {
        "keccak256": "0xd846aec9e34732c384a70ae306e8015eeb4a85ba7a68861d3a741310efc9eb57",
        "urls": [
          "bzz-raw://cdd512b5caa814e88813e3a8a03bfc5e460c78c81c4e403bc8e57300ae11a1d2",
          "dweb:/ipfs/QmUAMC52wZ6H86zUPQ7xPYVjAYjYQ97RiAfV1kn27ZYPsz"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLP.sol": {
        "keccak256": "0x6779541f073ba5ce6e0656d10c7d9ef23734d2675b865b4d5310a023c30764ad",
        "urls": [
          "bzz-raw://5cc569f006ef38723c1cb893b4e08d22ca0a448dc559c8abd18b28bd6967fcb7",
          "dweb:/ipfs/QmdPfZGuM8g3qp4CPsuztZe1wcVrytWkbqHQDbsTVEKBdF"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveLong.sol": {
        "keccak256": "0x45ba04560ca590427cc1ad2e98ec0122f9b6496ead2e3d4b3438339c982bd543",
        "urls": [
          "bzz-raw://ee1b36b7ab75044d12e8b91ead75c4377b9da1daa630ea7d1a0c413f963f916a",
          "dweb:/ipfs/QmPsoXubd1sfy7NNn7YWSrYTTrBEreuawVRFFjDrHQmKzZ"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveMultiToken.sol": {
        "keccak256": "0x6b85590aeffa0a73aabf0c17a958bdec064a4d59c2e3d7595a8cb2d86fb01277",
        "urls": [
          "bzz-raw://d89ad612f8624723adab39bd85311389fe95f685cf496e1a5d116bfafd6588eb",
          "dweb:/ipfs/QmPWVwrfo65BZofeWubpZsM93yzxMFjhPfoNYsaT31yn28"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/internal/HyperdriveShort.sol": {
        "keccak256": "0x0dc04dc0f6070d51c2c58587f1d0f0604594e6c5728bf37e46da3a5952a0e0f0",
        "urls": [
          "bzz-raw://1529824590ac5cdb7d4ffb67449be6a44f3bef9db40646bfa13bb5979e1a2f2d",
          "dweb:/ipfs/QmbXKFyqUaL1vv6wn7avWn463Uf8JgJvVLN6v5rUdJbys7"
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
      "contracts/src/libraries/AssetId.sol": {
        "keccak256": "0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a",
        "urls": [
          "bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a",
          "dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya"
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
    "absolutePath": "contracts/src/internal/HyperdriveCheckpoint.sol",
    "id": 5802,
    "exportedSymbols": {
      "AssetId": [
        9781
      ],
      "FixedPointMath": [
        10533
      ],
      "HyperdriveBase": [
        5354
      ],
      "HyperdriveCheckpoint": [
        5801
      ],
      "HyperdriveLong": [
        7805
      ],
      "HyperdriveMath": [
        11352
      ],
      "HyperdriveShort": [
        9192
      ],
      "IHyperdrive": [
        3759
      ],
      "SafeCast": [
        11428
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:10134:34",
    "nodes": [
      {
        "id": 5356,
        "nodeType": "PragmaDirective",
        "src": "39:23:34",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 5358,
        "nodeType": "ImportDirective",
        "src": "64:60:34",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5802,
        "sourceUnit": 3760,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5357,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3759,
              "src": "73:11:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5360,
        "nodeType": "ImportDirective",
        "src": "125:51:34",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "../libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5802,
        "sourceUnit": 9782,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5359,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9781,
              "src": "134:7:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5362,
        "nodeType": "ImportDirective",
        "src": "177:65:34",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5802,
        "sourceUnit": 10534,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5361,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10533,
              "src": "186:14:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5364,
        "nodeType": "ImportDirective",
        "src": "243:65:34",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "../libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5802,
        "sourceUnit": 11353,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5363,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11352,
              "src": "252:14:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5366,
        "nodeType": "ImportDirective",
        "src": "309:53:34",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/SafeCast.sol",
        "file": "../libraries/SafeCast.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5802,
        "sourceUnit": 11429,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5365,
              "name": "SafeCast",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11428,
              "src": "318:8:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5368,
        "nodeType": "ImportDirective",
        "src": "363:54:34",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
        "file": "./HyperdriveBase.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5802,
        "sourceUnit": 5355,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5367,
              "name": "HyperdriveBase",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 5354,
              "src": "372:14:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5370,
        "nodeType": "ImportDirective",
        "src": "418:54:34",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveLong.sol",
        "file": "./HyperdriveLong.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5802,
        "sourceUnit": 7806,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5369,
              "name": "HyperdriveLong",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7805,
              "src": "427:14:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5372,
        "nodeType": "ImportDirective",
        "src": "473:56:34",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveShort.sol",
        "file": "./HyperdriveShort.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5802,
        "sourceUnit": 9193,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5371,
              "name": "HyperdriveShort",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9192,
              "src": "482:15:34",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5801,
        "nodeType": "ContractDefinition",
        "src": "837:9335:34",
        "nodes": [
          {
            "id": 5382,
            "nodeType": "UsingForDirective",
            "src": "945:33:34",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 5380,
              "name": "FixedPointMath",
              "nameLocations": [
                "951:14:34"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10533,
              "src": "951:14:34"
            },
            "typeName": {
              "id": 5381,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "970:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 5385,
            "nodeType": "UsingForDirective",
            "src": "983:27:34",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 5383,
              "name": "SafeCast",
              "nameLocations": [
                "989:8:34"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11428,
              "src": "989:8:34"
            },
            "typeName": {
              "id": 5384,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1002:7:34",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 5472,
            "nodeType": "FunctionDefinition",
            "src": "1164:1527:34",
            "nodes": [],
            "body": {
              "id": 5471,
              "nodeType": "Block",
              "src": "1219:1472:34",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    },
                    "id": 5396,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 5391,
                          "name": "_checkpoints",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9259,
                          "src": "1298:12:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$3499_storage_$",
                            "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                          }
                        },
                        "id": 5393,
                        "indexExpression": {
                          "id": 5392,
                          "name": "_checkpointTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5388,
                          "src": "1311:15:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1298:29:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Checkpoint_$3499_storage",
                          "typeString": "struct IHyperdrive.Checkpoint storage ref"
                        }
                      },
                      "id": 5394,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "1328:10:34",
                      "memberName": "sharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3495,
                      "src": "1298:40:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 5395,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1342:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1298:45:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5399,
                  "nodeType": "IfStatement",
                  "src": "1294:82:34",
                  "trueBody": {
                    "id": 5398,
                    "nodeType": "Block",
                    "src": "1345:31:34",
                    "statements": [
                      {
                        "functionReturnParameters": 5390,
                        "id": 5397,
                        "nodeType": "Return",
                        "src": "1359:7:34"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    5401
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5401,
                      "mutability": "mutable",
                      "name": "latestCheckpoint",
                      "nameLocation": "1563:16:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 5471,
                      "src": "1555:24:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5400,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1555:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5404,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 5402,
                      "name": "_latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4827,
                      "src": "1582:17:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 5403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1582:19:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1555:46:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 5413,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5409,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5407,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 5405,
                          "name": "_checkpointTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5388,
                          "src": "1628:15:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "%",
                        "rightExpression": {
                          "id": 5406,
                          "name": "_checkpointDuration",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9218,
                          "src": "1646:19:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1628:37:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 5408,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1669:1:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "1628:42:34",
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
                      "id": 5412,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 5410,
                        "name": "latestCheckpoint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5401,
                        "src": "1686:16:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "id": 5411,
                        "name": "_checkpointTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5388,
                        "src": "1705:15:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "1686:34:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1628:92:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5420,
                  "nodeType": "IfStatement",
                  "src": "1611:187:34",
                  "trueBody": {
                    "id": 5419,
                    "nodeType": "Block",
                    "src": "1731:67:34",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5414,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "1752:11:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5416,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "1764:21:34",
                            "memberName": "InvalidCheckpointTime",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3623,
                            "src": "1752:33:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5417,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1752:35:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5418,
                        "nodeType": "RevertStatement",
                        "src": "1745:42:34"
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
                    "id": 5423,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 5421,
                      "name": "_checkpointTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5388,
                      "src": "2032:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 5422,
                      "name": "latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5401,
                      "src": "2051:16:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2032:35:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 5469,
                    "nodeType": "Block",
                    "src": "2152:533:34",
                    "statements": [
                      {
                        "body": {
                          "id": 5467,
                          "nodeType": "Block",
                          "src": "2296:379:34",
                          "statements": [
                            {
                              "assignments": [
                                5440
                              ],
                              "declarations": [
                                {
                                  "constant": false,
                                  "id": 5440,
                                  "mutability": "mutable",
                                  "name": "closestSharePrice",
                                  "nameLocation": "2322:17:34",
                                  "nodeType": "VariableDeclaration",
                                  "scope": 5467,
                                  "src": "2314:25:34",
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "typeName": {
                                    "id": 5439,
                                    "name": "uint256",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2314:7:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "visibility": "internal"
                                }
                              ],
                              "id": 5445,
                              "initialValue": {
                                "expression": {
                                  "baseExpression": {
                                    "id": 5441,
                                    "name": "_checkpoints",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 9259,
                                    "src": "2342:12:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$3499_storage_$",
                                      "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                    }
                                  },
                                  "id": 5443,
                                  "indexExpression": {
                                    "id": 5442,
                                    "name": "time",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 5432,
                                    "src": "2355:4:34",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "2342:18:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Checkpoint_$3499_storage",
                                    "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                  }
                                },
                                "id": 5444,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "2361:10:34",
                                "memberName": "sharePrice",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 3495,
                                "src": "2342:29:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              },
                              "nodeType": "VariableDeclarationStatement",
                              "src": "2314:57:34"
                            },
                            {
                              "condition": {
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 5448,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 5446,
                                  "name": "time",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5432,
                                  "src": "2393:4:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "==",
                                "rightExpression": {
                                  "id": 5447,
                                  "name": "latestCheckpoint",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5401,
                                  "src": "2401:16:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "2393:24:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 5455,
                              "nodeType": "IfStatement",
                              "src": "2389:107:34",
                              "trueBody": {
                                "id": 5454,
                                "nodeType": "Block",
                                "src": "2419:77:34",
                                "statements": [
                                  {
                                    "expression": {
                                      "id": 5452,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "id": 5449,
                                        "name": "closestSharePrice",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 5440,
                                        "src": "2441:17:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "=",
                                      "rightHandSide": {
                                        "arguments": [],
                                        "expression": {
                                          "argumentTypes": [],
                                          "id": 5450,
                                          "name": "_pricePerShare",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 4716,
                                          "src": "2461:14:34",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                            "typeString": "function () view returns (uint256)"
                                          }
                                        },
                                        "id": 5451,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2461:16:34",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "2441:36:34",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "id": 5453,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2441:36:34"
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
                                "id": 5458,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "id": 5456,
                                  "name": "closestSharePrice",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5440,
                                  "src": "2517:17:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "!=",
                                "rightExpression": {
                                  "hexValue": "30",
                                  "id": 5457,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2538:1:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                },
                                "src": "2517:22:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 5466,
                              "nodeType": "IfStatement",
                              "src": "2513:148:34",
                              "trueBody": {
                                "id": 5465,
                                "nodeType": "Block",
                                "src": "2541:120:34",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [
                                        {
                                          "id": 5460,
                                          "name": "_checkpointTime",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 5388,
                                          "src": "2580:15:34",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          }
                                        },
                                        {
                                          "id": 5461,
                                          "name": "closestSharePrice",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 5440,
                                          "src": "2597:17:34",
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
                                        "id": 5459,
                                        "name": "_applyCheckpoint",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [
                                          5725
                                        ],
                                        "referencedDeclaration": 5725,
                                        "src": "2563:16:34",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                                          "typeString": "function (uint256,uint256) returns (uint256)"
                                        }
                                      },
                                      "id": 5462,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "nameLocations": [],
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2563:52:34",
                                      "tryCall": false,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "id": 5463,
                                    "nodeType": "ExpressionStatement",
                                    "src": "2563:52:34"
                                  },
                                  {
                                    "id": 5464,
                                    "nodeType": "Break",
                                    "src": "2637:5:34"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        "id": 5468,
                        "initializationExpression": {
                          "assignments": [
                            5432
                          ],
                          "declarations": [
                            {
                              "constant": false,
                              "id": 5432,
                              "mutability": "mutable",
                              "name": "time",
                              "nameLocation": "2196:4:34",
                              "nodeType": "VariableDeclaration",
                              "scope": 5468,
                              "src": "2188:12:34",
                              "stateVariable": false,
                              "storageLocation": "default",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "typeName": {
                                "id": 5431,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "2188:7:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "visibility": "internal"
                            }
                          ],
                          "id": 5434,
                          "initialValue": {
                            "id": 5433,
                            "name": "_checkpointTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5388,
                            "src": "2203:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "VariableDeclarationStatement",
                          "src": "2188:30:34"
                        },
                        "loopExpression": {
                          "expression": {
                            "id": 5437,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "id": 5435,
                              "name": "time",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5432,
                              "src": "2254:4:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "+=",
                            "rightHandSide": {
                              "id": 5436,
                              "name": "_checkpointDuration",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9218,
                              "src": "2262:19:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "2254:27:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 5438,
                          "nodeType": "ExpressionStatement",
                          "src": "2254:27:34"
                        },
                        "nodeType": "ForStatement",
                        "src": "2166:509:34"
                      }
                    ]
                  },
                  "id": 5470,
                  "nodeType": "IfStatement",
                  "src": "2028:657:34",
                  "trueBody": {
                    "id": 5430,
                    "nodeType": "Block",
                    "src": "2069:77:34",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 5425,
                              "name": "latestCheckpoint",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5401,
                              "src": "2100:16:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [],
                              "expression": {
                                "argumentTypes": [],
                                "id": 5426,
                                "name": "_pricePerShare",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4716,
                                "src": "2118:14:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                  "typeString": "function () view returns (uint256)"
                                }
                              },
                              "id": 5427,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2118:16:34",
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
                            "id": 5424,
                            "name": "_applyCheckpoint",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              5725
                            ],
                            "referencedDeclaration": 5725,
                            "src": "2083:16:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256,uint256) returns (uint256)"
                            }
                          },
                          "id": 5428,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2083:52:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5429,
                        "nodeType": "ExpressionStatement",
                        "src": "2083:52:34"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 5386,
              "nodeType": "StructuredDocumentation",
              "src": "1016:143:34",
              "text": "@dev Attempts to mint a checkpoint with the specified checkpoint time.\n @param _checkpointTime The time of the checkpoint to create."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkpoint",
            "nameLocation": "1173:11:34",
            "parameters": {
              "id": 5389,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5388,
                  "mutability": "mutable",
                  "name": "_checkpointTime",
                  "nameLocation": "1193:15:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 5472,
                  "src": "1185:23:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5387,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1185:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1184:25:34"
            },
            "returnParameters": {
              "id": 5390,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1219:0:34"
            },
            "scope": 5801,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5725,
            "nodeType": "FunctionDefinition",
            "src": "2936:4513:34",
            "nodes": [],
            "body": {
              "id": 5724,
              "nodeType": "Block",
              "src": "3066:4383:34",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    5487
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5487,
                      "mutability": "mutable",
                      "name": "checkpoint_",
                      "nameLocation": "3175:11:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 5724,
                      "src": "3144:42:34",
                      "stateVariable": false,
                      "storageLocation": "storage",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Checkpoint_$3499_storage_ptr",
                        "typeString": "struct IHyperdrive.Checkpoint"
                      },
                      "typeName": {
                        "id": 5486,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 5485,
                          "name": "IHyperdrive.Checkpoint",
                          "nameLocations": [
                            "3144:11:34",
                            "3156:10:34"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 3499,
                          "src": "3144:22:34"
                        },
                        "referencedDeclaration": 3499,
                        "src": "3144:22:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Checkpoint_$3499_storage_ptr",
                          "typeString": "struct IHyperdrive.Checkpoint"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5491,
                  "initialValue": {
                    "baseExpression": {
                      "id": 5488,
                      "name": "_checkpoints",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9259,
                      "src": "3189:12:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$3499_storage_$",
                        "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                      }
                    },
                    "id": 5490,
                    "indexExpression": {
                      "id": 5489,
                      "name": "_checkpointTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5475,
                      "src": "3215:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "3189:51:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Checkpoint_$3499_storage",
                      "typeString": "struct IHyperdrive.Checkpoint storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3144:96:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 5500,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      },
                      "id": 5495,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 5492,
                          "name": "checkpoint_",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5487,
                          "src": "3254:11:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Checkpoint_$3499_storage_ptr",
                            "typeString": "struct IHyperdrive.Checkpoint storage pointer"
                          }
                        },
                        "id": 5493,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3266:10:34",
                        "memberName": "sharePrice",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3495,
                        "src": "3254:22:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "!=",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 5494,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3280:1:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "3254:27:34",
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
                      "id": 5499,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 5496,
                        "name": "_checkpointTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5475,
                        "src": "3285:15:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "expression": {
                          "id": 5497,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "3303:5:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 5498,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3309:9:34",
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "3303:15:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "3285:33:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "3254:64:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5505,
                  "nodeType": "IfStatement",
                  "src": "3250:124:34",
                  "trueBody": {
                    "id": 5504,
                    "nodeType": "Block",
                    "src": "3320:54:34",
                    "statements": [
                      {
                        "expression": {
                          "expression": {
                            "id": 5501,
                            "name": "checkpoint_",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5487,
                            "src": "3341:11:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Checkpoint_$3499_storage_ptr",
                              "typeString": "struct IHyperdrive.Checkpoint storage pointer"
                            }
                          },
                          "id": 5502,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "3353:10:34",
                          "memberName": "sharePrice",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3495,
                          "src": "3341:22:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "functionReturnParameters": 5482,
                        "id": 5503,
                        "nodeType": "Return",
                        "src": "3334:29:34"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 5512,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "id": 5506,
                        "name": "checkpoint_",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5487,
                        "src": "3430:11:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Checkpoint_$3499_storage_ptr",
                          "typeString": "struct IHyperdrive.Checkpoint storage pointer"
                        }
                      },
                      "id": 5508,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberLocation": "3442:10:34",
                      "memberName": "sharePrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3495,
                      "src": "3430:22:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 5509,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5477,
                          "src": "3455:11:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5510,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "3467:9:34",
                        "memberName": "toUint128",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 11387,
                        "src": "3455:21:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256) pure returns (uint128)"
                        }
                      },
                      "id": 5511,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3455:23:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "3430:48:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "id": 5513,
                  "nodeType": "ExpressionStatement",
                  "src": "3430:48:34"
                },
                {
                  "assignments": [
                    5515
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5515,
                      "mutability": "mutable",
                      "name": "openSharePrice",
                      "nameLocation": "3950:14:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 5724,
                      "src": "3942:22:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5514,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3942:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5522,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 5516,
                        "name": "_checkpoints",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9259,
                        "src": "3967:12:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$3499_storage_$",
                          "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                        }
                      },
                      "id": 5520,
                      "indexExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5519,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 5517,
                          "name": "_checkpointTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5475,
                          "src": "3993:15:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 5518,
                          "name": "_positionDuration",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9221,
                          "src": "4011:17:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3993:35:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "3967:71:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Checkpoint_$3499_storage",
                        "typeString": "struct IHyperdrive.Checkpoint storage ref"
                      }
                    },
                    "id": 5521,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "4039:10:34",
                    "memberName": "sharePrice",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 3495,
                    "src": "3967:82:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint128",
                      "typeString": "uint128"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3942:107:34"
                },
                {
                  "assignments": [
                    5524
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5524,
                      "mutability": "mutable",
                      "name": "shortAssetId",
                      "nameLocation": "4067:12:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 5724,
                      "src": "4059:20:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5523,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4059:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5532,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "expression": {
                            "id": 5527,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9781,
                            "src": "4117:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 5528,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "4125:13:34",
                          "memberName": "AssetIdPrefix",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9487,
                          "src": "4117:21:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$9487_$",
                            "typeString": "type(enum AssetId.AssetIdPrefix)"
                          }
                        },
                        "id": 5529,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "4139:5:34",
                        "memberName": "Short",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9485,
                        "src": "4117:27:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$9487",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      {
                        "id": 5530,
                        "name": "_checkpointTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5475,
                        "src": "4158:15:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$9487",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 5525,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9781,
                        "src": "4082:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 5526,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4090:13:34",
                      "memberName": "encodeAssetId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9510,
                      "src": "4082:21:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$9487_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 5531,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4082:101:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4059:124:34"
                },
                {
                  "assignments": [
                    5534
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5534,
                      "mutability": "mutable",
                      "name": "maturedShortsAmount",
                      "nameLocation": "4201:19:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 5724,
                      "src": "4193:27:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5533,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4193:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5538,
                  "initialValue": {
                    "baseExpression": {
                      "id": 5535,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9291,
                      "src": "4223:12:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 5537,
                    "indexExpression": {
                      "id": 5536,
                      "name": "shortAssetId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5524,
                      "src": "4236:12:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "4223:26:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4193:56:34"
                },
                {
                  "assignments": [
                    5540
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5540,
                      "mutability": "mutable",
                      "name": "positionsClosed",
                      "nameLocation": "4264:15:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 5724,
                      "src": "4259:20:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 5539,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "4259:4:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5541,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4259:20:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5544,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 5542,
                      "name": "maturedShortsAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5534,
                      "src": "4293:19:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 5543,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4315:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4293:23:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5576,
                  "nodeType": "IfStatement",
                  "src": "4289:667:34",
                  "trueBody": {
                    "id": 5575,
                    "nodeType": "Block",
                    "src": "4318:638:34",
                    "statements": [
                      {
                        "assignments": [
                          5546,
                          5548
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 5546,
                            "mutability": "mutable",
                            "name": "shareProceeds",
                            "nameLocation": "4358:13:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 5575,
                            "src": "4350:21:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 5545,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "4350:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          },
                          {
                            "constant": false,
                            "id": 5548,
                            "mutability": "mutable",
                            "name": "governanceFee",
                            "nameLocation": "4397:13:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 5575,
                            "src": "4389:21:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 5547,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "4389:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 5555,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 5550,
                              "name": "maturedShortsAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5534,
                              "src": "4474:19:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 5551,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5477,
                              "src": "4515:11:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 5552,
                              "name": "openSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5515,
                              "src": "4548:14:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "66616c7365",
                              "id": 5553,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4584:5:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "false"
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
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 5549,
                            "name": "_calculateMaturedProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5800,
                            "src": "4427:25:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256,bool) view returns (uint256,uint256)"
                            }
                          },
                          "id": 5554,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4427:180:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256)"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "4332:275:34"
                      },
                      {
                        "expression": {
                          "id": 5558,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 5556,
                            "name": "_governanceFeesAccrued",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9268,
                            "src": "4621:22:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 5557,
                            "name": "governanceFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5548,
                            "src": "4647:13:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4621:39:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5559,
                        "nodeType": "ExpressionStatement",
                        "src": "4621:39:34"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 5561,
                              "name": "maturedShortsAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5534,
                              "src": "4708:19:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "30",
                              "id": 5562,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "4745:1:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            {
                              "id": 5563,
                              "name": "shareProceeds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5546,
                              "src": "4764:13:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 5566,
                                  "name": "shareProceeds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5546,
                                  "src": "4802:13:34",
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
                                "id": 5565,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "4795:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 5564,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "4795:6:34",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 5567,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4795:21:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 5568,
                              "name": "_checkpointTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5475,
                              "src": "4880:15:34",
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
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 5560,
                            "name": "_applyCloseShort",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 8912,
                            "src": "4674:16:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,int256,uint256)"
                            }
                          },
                          "id": 5569,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4674:235:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5570,
                        "nodeType": "ExpressionStatement",
                        "src": "4674:235:34"
                      },
                      {
                        "expression": {
                          "id": 5573,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 5571,
                            "name": "positionsClosed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5540,
                            "src": "4923:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 5572,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "4941:4:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "4923:22:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 5574,
                        "nodeType": "ExpressionStatement",
                        "src": "4923:22:34"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    5578
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5578,
                      "mutability": "mutable",
                      "name": "longAssetId",
                      "nameLocation": "5082:11:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 5724,
                      "src": "5074:19:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5577,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5074:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5586,
                  "initialValue": {
                    "arguments": [
                      {
                        "expression": {
                          "expression": {
                            "id": 5581,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9781,
                            "src": "5131:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 5582,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "5139:13:34",
                          "memberName": "AssetIdPrefix",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9487,
                          "src": "5131:21:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$9487_$",
                            "typeString": "type(enum AssetId.AssetIdPrefix)"
                          }
                        },
                        "id": 5583,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberLocation": "5153:4:34",
                        "memberName": "Long",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9484,
                        "src": "5131:26:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$9487",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        }
                      },
                      {
                        "id": 5584,
                        "name": "_checkpointTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5475,
                        "src": "5171:15:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_AssetIdPrefix_$9487",
                          "typeString": "enum AssetId.AssetIdPrefix"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 5579,
                        "name": "AssetId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9781,
                        "src": "5096:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                          "typeString": "type(library AssetId)"
                        }
                      },
                      "id": 5580,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5104:13:34",
                      "memberName": "encodeAssetId",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9510,
                      "src": "5096:21:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$9487_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 5585,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5096:100:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5074:122:34"
                },
                {
                  "assignments": [
                    5588
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5588,
                      "mutability": "mutable",
                      "name": "maturedLongsAmount",
                      "nameLocation": "5214:18:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 5724,
                      "src": "5206:26:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5587,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "5206:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5592,
                  "initialValue": {
                    "baseExpression": {
                      "id": 5589,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9291,
                      "src": "5235:12:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                        "typeString": "mapping(uint256 => uint256)"
                      }
                    },
                    "id": 5591,
                    "indexExpression": {
                      "id": 5590,
                      "name": "longAssetId",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5578,
                      "src": "5248:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "5235:25:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "5206:54:34"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5595,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 5593,
                      "name": "maturedLongsAmount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5588,
                      "src": "5274:18:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 5594,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5295:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5274:22:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5631,
                  "nodeType": "IfStatement",
                  "src": "5270:745:34",
                  "trueBody": {
                    "id": 5630,
                    "nodeType": "Block",
                    "src": "5298:717:34",
                    "statements": [
                      {
                        "assignments": [
                          5597,
                          5599
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 5597,
                            "mutability": "mutable",
                            "name": "shareProceeds",
                            "nameLocation": "5338:13:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 5630,
                            "src": "5330:21:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 5596,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5330:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          },
                          {
                            "constant": false,
                            "id": 5599,
                            "mutability": "mutable",
                            "name": "governanceFee",
                            "nameLocation": "5377:13:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 5630,
                            "src": "5369:21:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 5598,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5369:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 5606,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 5601,
                              "name": "maturedLongsAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5588,
                              "src": "5454:18:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 5602,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5477,
                              "src": "5494:11:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 5603,
                              "name": "openSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5515,
                              "src": "5527:14:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "74727565",
                              "id": 5604,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "bool",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5563:4:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "value": "true"
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
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            ],
                            "id": 5600,
                            "name": "_calculateMaturedProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5800,
                            "src": "5407:25:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$_t_uint256_$_t_uint256_$_t_bool_$returns$_t_uint256_$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256,bool) view returns (uint256,uint256)"
                            }
                          },
                          "id": 5605,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5407:178:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$_t_uint256_$_t_uint256_$",
                            "typeString": "tuple(uint256,uint256)"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "5312:273:34"
                      },
                      {
                        "expression": {
                          "id": 5609,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 5607,
                            "name": "_governanceFeesAccrued",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9268,
                            "src": "5599:22:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 5608,
                            "name": "governanceFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5599,
                            "src": "5625:13:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5599:39:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5610,
                        "nodeType": "ExpressionStatement",
                        "src": "5599:39:34"
                      },
                      {
                        "assignments": [
                          5612
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 5612,
                            "mutability": "mutable",
                            "name": "checkpointTime",
                            "nameLocation": "5660:14:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 5630,
                            "src": "5652:22:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 5611,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "5652:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 5614,
                        "initialValue": {
                          "id": 5613,
                          "name": "_checkpointTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5475,
                          "src": "5677:15:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "5652:40:34"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 5616,
                              "name": "maturedLongsAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5588,
                              "src": "5769:18:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "hexValue": "30",
                              "id": 5617,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "5805:1:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            },
                            {
                              "id": 5618,
                              "name": "shareProceeds",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5597,
                              "src": "5824:13:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 5621,
                                  "name": "shareProceeds",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5597,
                                  "src": "5862:13:34",
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
                                "id": 5620,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "5855:6:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 5619,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "5855:6:34",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 5622,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5855:21:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            {
                              "id": 5623,
                              "name": "checkpointTime",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5612,
                              "src": "5940:14:34",
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
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "id": 5615,
                            "name": "_applyCloseLong",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 7577,
                            "src": "5736:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_int256_$_t_uint256_$returns$__$",
                              "typeString": "function (uint256,uint256,uint256,int256,uint256)"
                            }
                          },
                          "id": 5624,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5736:232:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5625,
                        "nodeType": "ExpressionStatement",
                        "src": "5736:232:34"
                      },
                      {
                        "expression": {
                          "id": 5628,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 5626,
                            "name": "positionsClosed",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5540,
                            "src": "5982:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 5627,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6000:4:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "5982:22:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 5629,
                        "nodeType": "ExpressionStatement",
                        "src": "5982:22:34"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "id": 5632,
                    "name": "positionsClosed",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5540,
                    "src": "6097:15:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5669,
                  "nodeType": "IfStatement",
                  "src": "6093:535:34",
                  "trueBody": {
                    "id": 5668,
                    "nodeType": "Block",
                    "src": "6114:514:34",
                    "statements": [
                      {
                        "assignments": [
                          5634
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 5634,
                            "mutability": "mutable",
                            "name": "maturityTime",
                            "nameLocation": "6136:12:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 5668,
                            "src": "6128:20:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 5633,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "6128:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 5638,
                        "initialValue": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 5637,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 5635,
                            "name": "_checkpointTime",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5475,
                            "src": "6151:15:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "-",
                          "rightExpression": {
                            "id": 5636,
                            "name": "_positionDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9221,
                            "src": "6169:17:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6151:35:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6128:58:34"
                      },
                      {
                        "assignments": [
                          5640
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 5640,
                            "mutability": "mutable",
                            "name": "checkpointExposureBefore",
                            "nameLocation": "6207:24:34",
                            "nodeType": "VariableDeclaration",
                            "scope": 5668,
                            "src": "6200:31:34",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int128",
                              "typeString": "int128"
                            },
                            "typeName": {
                              "id": 5639,
                              "name": "int128",
                              "nodeType": "ElementaryTypeName",
                              "src": "6200:6:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 5648,
                        "initialValue": {
                          "arguments": [
                            {
                              "expression": {
                                "baseExpression": {
                                  "id": 5643,
                                  "name": "_checkpoints",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9259,
                                  "src": "6258:12:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$3499_storage_$",
                                    "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                  }
                                },
                                "id": 5645,
                                "indexExpression": {
                                  "id": 5644,
                                  "name": "maturityTime",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5634,
                                  "src": "6271:12:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "6258:26:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Checkpoint_$3499_storage",
                                  "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                }
                              },
                              "id": 5646,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6285:8:34",
                              "memberName": "exposure",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3498,
                              "src": "6258:35:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            ],
                            "id": 5642,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "6234:6:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_int128_$",
                              "typeString": "type(int128)"
                            },
                            "typeName": {
                              "id": 5641,
                              "name": "int128",
                              "nodeType": "ElementaryTypeName",
                              "src": "6234:6:34",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 5647,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6234:73:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "6200:107:34"
                      },
                      {
                        "expression": {
                          "id": 5654,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "baseExpression": {
                                "id": 5649,
                                "name": "_checkpoints",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9259,
                                "src": "6321:12:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$3499_storage_$",
                                  "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                }
                              },
                              "id": 5651,
                              "indexExpression": {
                                "id": 5650,
                                "name": "maturityTime",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5634,
                                "src": "6334:12:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "IndexAccess",
                              "src": "6321:26:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Checkpoint_$3499_storage",
                                "typeString": "struct IHyperdrive.Checkpoint storage ref"
                              }
                            },
                            "id": 5652,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "6348:8:34",
                            "memberName": "exposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3498,
                            "src": "6321:35:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int128",
                              "typeString": "int128"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "30",
                            "id": 5653,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "6359:1:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "6321:39:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        "id": 5655,
                        "nodeType": "ExpressionStatement",
                        "src": "6321:39:34"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 5657,
                              "name": "checkpointExposureBefore",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5640,
                              "src": "6411:24:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            },
                            {
                              "expression": {
                                "baseExpression": {
                                  "id": 5658,
                                  "name": "_checkpoints",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9259,
                                  "src": "6453:12:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Checkpoint_$3499_storage_$",
                                    "typeString": "mapping(uint256 => struct IHyperdrive.Checkpoint storage ref)"
                                  }
                                },
                                "id": 5660,
                                "indexExpression": {
                                  "id": 5659,
                                  "name": "maturityTime",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5634,
                                  "src": "6466:12:34",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "IndexAccess",
                                "src": "6453:26:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Checkpoint_$3499_storage",
                                  "typeString": "struct IHyperdrive.Checkpoint storage ref"
                                }
                              },
                              "id": 5661,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "6480:8:34",
                              "memberName": "exposure",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3498,
                              "src": "6453:35:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              },
                              {
                                "typeIdentifier": "t_int128",
                                "typeString": "int128"
                              }
                            ],
                            "id": 5656,
                            "name": "_updateLongExposure",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5145,
                            "src": "6374:19:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_int256_$_t_int256_$returns$__$",
                              "typeString": "function (int256,int256)"
                            }
                          },
                          "id": 5662,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6374:128:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5663,
                        "nodeType": "ExpressionStatement",
                        "src": "6374:128:34"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 5665,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5477,
                              "src": "6605:11:34",
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
                            "id": 5664,
                            "name": "_distributeExcessIdle",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6850,
                            "src": "6583:21:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                              "typeString": "function (uint256)"
                            }
                          },
                          "id": 5666,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6583:34:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5667,
                        "nodeType": "ExpressionStatement",
                        "src": "6583:34:34"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    5671
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5671,
                      "mutability": "mutable",
                      "name": "presentValue",
                      "nameLocation": "6746:12:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 5724,
                      "src": "6738:20:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5670,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6738:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5686,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5674,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 5672,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5477,
                        "src": "6761:11:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 5673,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6775:1:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "6761:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "hexValue": "30",
                      "id": 5684,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6934:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "id": 5685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "6761:174:34",
                    "trueExpression": {
                      "arguments": [
                        {
                          "id": 5682,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5477,
                          "src": "6907:11:34",
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
                              "arguments": [
                                {
                                  "id": 5678,
                                  "name": "_sharePrice",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5477,
                                  "src": "6868:11:34",
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
                                "id": 5677,
                                "name": "_getPresentValueParams",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4880,
                                "src": "6845:22:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$11027_memory_ptr_$",
                                  "typeString": "function (uint256) view returns (struct HyperdriveMath.PresentValueParams memory)"
                                }
                              },
                              "id": 5679,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "6845:35:34",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                "typeString": "struct HyperdriveMath.PresentValueParams memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_PresentValueParams_$11027_memory_ptr",
                                "typeString": "struct HyperdriveMath.PresentValueParams memory"
                              }
                            ],
                            "expression": {
                              "id": 5675,
                              "name": "HyperdriveMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11352,
                              "src": "6791:14:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$11352_$",
                                "typeString": "type(library HyperdriveMath)"
                              }
                            },
                            "id": 5676,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6823:21:34",
                            "memberName": "calculatePresentValue",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 11269,
                            "src": "6791:53:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$11027_memory_ptr_$returns$_t_uint256_$",
                              "typeString": "function (struct HyperdriveMath.PresentValueParams memory) pure returns (uint256)"
                            }
                          },
                          "id": 5680,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6791:90:34",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5681,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6899:7:34",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9831,
                        "src": "6791:115:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 5683,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6791:128:34",
                      "tryCall": false,
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
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6738:197:34"
                },
                {
                  "assignments": [
                    5688
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5688,
                      "mutability": "mutable",
                      "name": "lpTotalSupply",
                      "nameLocation": "6953:13:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 5724,
                      "src": "6945:21:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5687,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6945:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5701,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5700,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5697,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "baseExpression": {
                          "id": 5689,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9291,
                          "src": "6969:12:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 5692,
                        "indexExpression": {
                          "expression": {
                            "id": 5690,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9781,
                            "src": "6982:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 5691,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "6990:12:34",
                          "memberName": "_LP_ASSET_ID",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9473,
                          "src": "6982:20:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "6969:34:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "baseExpression": {
                          "id": 5693,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9291,
                          "src": "7018:12:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 5696,
                        "indexExpression": {
                          "expression": {
                            "id": 5694,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9781,
                            "src": "7031:7:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$9781_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 5695,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "7039:26:34",
                          "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 9482,
                          "src": "7031:34:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "7018:48:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "6969:97:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "expression": {
                        "id": 5698,
                        "name": "_withdrawPool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9253,
                        "src": "7081:13:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_WithdrawPool_$3506_storage",
                          "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                        }
                      },
                      "id": 5699,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7095:15:34",
                      "memberName": "readyToWithdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3502,
                      "src": "7081:29:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "6969:141:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6945:165:34"
                },
                {
                  "assignments": [
                    5703
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5703,
                      "mutability": "mutable",
                      "name": "lpSharePrice",
                      "nameLocation": "7128:12:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 5724,
                      "src": "7120:20:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5702,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "7120:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5713,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 5706,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 5704,
                        "name": "lpTotalSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5688,
                        "src": "7143:13:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 5705,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "7160:1:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "7143:18:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "arguments": [
                        {
                          "id": 5710,
                          "name": "lpTotalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5688,
                          "src": "7213:13:34",
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
                          "id": 5708,
                          "name": "presentValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5671,
                          "src": "7192:12:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5709,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7205:7:34",
                        "memberName": "divDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9849,
                        "src": "7192:20:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 5711,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7192:35:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 5712,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "7143:84:34",
                    "trueExpression": {
                      "hexValue": "30",
                      "id": 5707,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "7176:1:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "7120:107:34"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 5715,
                        "name": "_checkpointTime",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5475,
                        "src": "7272:15:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 5716,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5477,
                        "src": "7301:11:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 5717,
                        "name": "maturedShortsAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5534,
                        "src": "7326:19:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 5718,
                        "name": "maturedLongsAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5588,
                        "src": "7359:18:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 5719,
                        "name": "lpSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5703,
                        "src": "7391:12:34",
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
                      "id": 5714,
                      "name": "CreateCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4654,
                      "src": "7242:16:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,uint256,uint256)"
                      }
                    },
                    "id": 5720,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7242:171:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5721,
                  "nodeType": "EmitStatement",
                  "src": "7237:176:34"
                },
                {
                  "expression": {
                    "id": 5722,
                    "name": "_sharePrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5477,
                    "src": "7431:11:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5482,
                  "id": 5723,
                  "nodeType": "Return",
                  "src": "7424:18:34"
                }
              ]
            },
            "baseFunctions": [
              4739
            ],
            "documentation": {
              "id": 5473,
              "nodeType": "StructuredDocumentation",
              "src": "2697:234:34",
              "text": "@dev Creates a new checkpoint if necessary.\n @param _checkpointTime The time of the checkpoint to create.\n @param _sharePrice The current share price.\n @return The opening share price of the latest checkpoint."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_applyCheckpoint",
            "nameLocation": "2945:16:34",
            "overrides": {
              "id": 5479,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "3039:8:34"
            },
            "parameters": {
              "id": 5478,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5475,
                  "mutability": "mutable",
                  "name": "_checkpointTime",
                  "nameLocation": "2979:15:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 5725,
                  "src": "2971:23:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5474,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2971:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5477,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "3012:11:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 5725,
                  "src": "3004:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5476,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3004:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2961:68:34"
            },
            "returnParameters": {
              "id": 5482,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5481,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5725,
                  "src": "3057:7:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5480,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3057:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3056:9:34"
            },
            "scope": 5801,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5800,
            "nodeType": "FunctionDefinition",
            "src": "8075:2095:34",
            "nodes": [],
            "body": {
              "id": 5799,
              "nodeType": "Block",
              "src": "8298:1872:34",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5746,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5741,
                      "name": "shareProceeds",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5737,
                      "src": "8519:13:34",
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
                          "id": 5744,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5730,
                          "src": "8555:11:34",
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
                          "id": 5742,
                          "name": "_bondAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5728,
                          "src": "8535:11:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5743,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8547:7:34",
                        "memberName": "divDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9849,
                        "src": "8535:19:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 5745,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8535:32:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8519:48:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5747,
                  "nodeType": "ExpressionStatement",
                  "src": "8519:48:34"
                },
                {
                  "assignments": [
                    5749
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5749,
                      "mutability": "mutable",
                      "name": "flatFee",
                      "nameLocation": "8585:7:34",
                      "nodeType": "VariableDeclaration",
                      "scope": 5799,
                      "src": "8577:15:34",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5748,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "8577:7:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5754,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 5752,
                        "name": "_flatFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9230,
                        "src": "8617:8:34",
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
                        "id": 5750,
                        "name": "shareProceeds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5737,
                        "src": "8595:13:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 5751,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "8609:7:34",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 9831,
                      "src": "8595:21:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 5753,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "8595:31:34",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "8577:49:34"
                },
                {
                  "expression": {
                    "id": 5760,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5755,
                      "name": "governanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5739,
                      "src": "8636:13:34",
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
                          "id": 5758,
                          "name": "_governanceFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9233,
                          "src": "8668:14:34",
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
                          "id": 5756,
                          "name": "flatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5749,
                          "src": "8652:7:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5757,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "8660:7:34",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9831,
                        "src": "8652:15:34",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 5759,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8652:31:34",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "8636:47:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5761,
                  "nodeType": "ExpressionStatement",
                  "src": "8636:47:34"
                },
                {
                  "condition": {
                    "id": 5762,
                    "name": "_isLong",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 5734,
                    "src": "9110:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 5776,
                    "nodeType": "Block",
                    "src": "9598:65:34",
                    "statements": [
                      {
                        "expression": {
                          "id": 5774,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 5770,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5737,
                            "src": "9612:13:34",
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
                            "id": 5773,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 5771,
                              "name": "flatFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5749,
                              "src": "9629:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 5772,
                              "name": "governanceFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5739,
                              "src": "9639:13:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "9629:23:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9612:40:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5775,
                        "nodeType": "ExpressionStatement",
                        "src": "9612:40:34"
                      }
                    ]
                  },
                  "id": 5777,
                  "nodeType": "IfStatement",
                  "src": "9106:557:34",
                  "trueBody": {
                    "id": 5769,
                    "nodeType": "Block",
                    "src": "9119:65:34",
                    "statements": [
                      {
                        "expression": {
                          "id": 5767,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 5763,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5737,
                            "src": "9133:13:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 5766,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "id": 5764,
                              "name": "flatFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5749,
                              "src": "9150:7:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 5765,
                              "name": "governanceFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5739,
                              "src": "9160:13:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "9150:23:34",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9133:40:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5768,
                        "nodeType": "ExpressionStatement",
                        "src": "9133:40:34"
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
                    "id": 5780,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 5778,
                      "name": "_sharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5730,
                      "src": "9862:11:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "id": 5779,
                      "name": "_openSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5732,
                      "src": "9876:15:34",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "9862:29:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5798,
                  "nodeType": "IfStatement",
                  "src": "9858:306:34",
                  "trueBody": {
                    "id": 5797,
                    "nodeType": "Block",
                    "src": "9893:271:34",
                    "statements": [
                      {
                        "expression": {
                          "id": 5787,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 5781,
                            "name": "shareProceeds",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5737,
                            "src": "9907:13:34",
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
                                "id": 5784,
                                "name": "_sharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5730,
                                "src": "9965:11:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 5785,
                                "name": "_openSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5732,
                                "src": "9994:15:34",
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
                                "id": 5782,
                                "name": "shareProceeds",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5737,
                                "src": "9923:13:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 5783,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9937:10:34",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9813,
                              "src": "9923:24:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 5786,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "9923:100:34",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "9907:116:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5788,
                        "nodeType": "ExpressionStatement",
                        "src": "9907:116:34"
                      },
                      {
                        "expression": {
                          "id": 5795,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 5789,
                            "name": "governanceFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5739,
                            "src": "10037:13:34",
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
                                "id": 5792,
                                "name": "_sharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5730,
                                "src": "10095:11:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "id": 5793,
                                "name": "_openSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5732,
                                "src": "10124:15:34",
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
                                "id": 5790,
                                "name": "governanceFee",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5739,
                                "src": "10053:13:34",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 5791,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "10067:10:34",
                              "memberName": "mulDivDown",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9813,
                              "src": "10053:24:34",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 5794,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "10053:100:34",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "10037:116:34",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5796,
                        "nodeType": "ExpressionStatement",
                        "src": "10037:116:34"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 5726,
              "nodeType": "StructuredDocumentation",
              "src": "7455:615:34",
              "text": "@dev Calculates the proceeds of the long holders of a given position at\n      maturity. The long holders will be the LPs if the position is a\n      short.\n @param _bondAmount The bond amount of the position.\n @param _sharePrice The current share price.\n @param _openSharePrice The share price at the beginning of the\n        position's checkpoint.\n @param _isLong A flag indicating whether or not the position is a long.\n @return shareProceeds The proceeds of the long holders in shares.\n @return governanceFee The fee paid to governance in shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateMaturedProceeds",
            "nameLocation": "8084:25:34",
            "parameters": {
              "id": 5735,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5728,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "8127:11:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 5800,
                  "src": "8119:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5727,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8119:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5730,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "8156:11:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 5800,
                  "src": "8148:19:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5729,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8148:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5732,
                  "mutability": "mutable",
                  "name": "_openSharePrice",
                  "nameLocation": "8185:15:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 5800,
                  "src": "8177:23:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5731,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8177:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5734,
                  "mutability": "mutable",
                  "name": "_isLong",
                  "nameLocation": "8215:7:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 5800,
                  "src": "8210:12:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5733,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "8210:4:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8109:119:34"
            },
            "returnParameters": {
              "id": 5740,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5737,
                  "mutability": "mutable",
                  "name": "shareProceeds",
                  "nameLocation": "8260:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 5800,
                  "src": "8252:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5736,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8252:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5739,
                  "mutability": "mutable",
                  "name": "governanceFee",
                  "nameLocation": "8283:13:34",
                  "nodeType": "VariableDeclaration",
                  "scope": 5800,
                  "src": "8275:21:34",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5738,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8275:7:34",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8251:46:34"
            },
            "scope": 5801,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 5374,
              "name": "HyperdriveBase",
              "nameLocations": [
                "883:14:34"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 5354,
              "src": "883:14:34"
            },
            "id": 5375,
            "nodeType": "InheritanceSpecifier",
            "src": "883:14:34"
          },
          {
            "baseName": {
              "id": 5376,
              "name": "HyperdriveLong",
              "nameLocations": [
                "903:14:34"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 7805,
              "src": "903:14:34"
            },
            "id": 5377,
            "nodeType": "InheritanceSpecifier",
            "src": "903:14:34"
          },
          {
            "baseName": {
              "id": 5378,
              "name": "HyperdriveShort",
              "nameLocations": [
                "923:15:34"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9192,
              "src": "923:15:34"
            },
            "id": 5379,
            "nodeType": "InheritanceSpecifier",
            "src": "923:15:34"
          }
        ],
        "canonicalName": "HyperdriveCheckpoint",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 5373,
          "nodeType": "StructuredDocumentation",
          "src": "531:306:34",
          "text": "@author DELV\n @notice Implements the checkpoint accounting for Hyperdrive.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          5801,
          9192,
          7805,
          6967,
          8158,
          5354,
          9465,
          60564
        ],
        "name": "HyperdriveCheckpoint",
        "nameLocation": "855:20:34",
        "scope": 5802,
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
  "id": 34
} as const;
