export const HyperdriveBase = 
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{},\"title\":\"HyperdriveBase\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"notice\":\"The Hyperdrive base contract that provides a set of helper methods         and defines the functions that must be overridden by implementations.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/internal/HyperdriveBase.sol\":\"HyperdriveBase\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xb9ab7ab09e4e95f5e187418921f41f3b6d652c5a0889624b660495491ffc4148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7a05317c1fd4996fece6de20a672006163f31f9ae32fa23a855bbe8e89f573f2\",\"dweb:/ipfs/Qmf5kG78Za6KjSyRXeE8dFqdAE4T3BxhRQUXFKUkuuGGqK\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xe150223822098026c7ce734cd68848e45b47b92b024d34bc25886e9c6af6ec67\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6590e590f4af53d55e81e06ba8d53346cfce71ce1fa8d1833141f273d74c8a8f\",\"dweb:/ipfs/QmTM582joUpK7KBDWvwWEBi4XT3Qt9x8VLkhwPYj8Qu93o\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xd87293bc10dfe09707a042bf05091baf40ba344bdca141bd99b62256a7611817\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f6eadd454c6671c26bd22095c31a3bbaea7083df9aa6548dbaba32a4907e336\",\"dweb:/ipfs/QmY1jMW9DuAk9CSfVS6MsG5onqjZHKzdBrv2TcHvj9yKj4\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x077931150bcba5b99dedcd9038f3fbeef9c9230046dc4649c457d75d4be32a5c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2a48e4046f7ae8acb965d0f8d79767f4f4c70c1a6a8d3cf635482587412d33fd\",\"dweb:/ipfs/QmcY8FbffppqTMBiMwniXG9R8i8eQoVJuLqqTXgpuiXyUr\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x2f9511684820be7510155adfe3c2c2ef7e2583472946bae37f379bac801fc263\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7e9a84e4168448e3320a6682c8ba248c8b51757df173b86507e9aba4b6167247\",\"dweb:/ipfs/QmSonetYBP22Fnc8HrcaTxAA1Zg2PCR5ptPiEp22sA77Ka\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]}},\"version\":1}",
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
        "contracts/src/internal/HyperdriveBase.sol": "HyperdriveBase"
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
      "contracts/src/internal/HyperdriveBase.sol": {
        "keccak256": "0xb9ab7ab09e4e95f5e187418921f41f3b6d652c5a0889624b660495491ffc4148",
        "urls": [
          "bzz-raw://7a05317c1fd4996fece6de20a672006163f31f9ae32fa23a855bbe8e89f573f2",
          "dweb:/ipfs/Qmf5kG78Za6KjSyRXeE8dFqdAE4T3BxhRQUXFKUkuuGGqK"
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
        "keccak256": "0xd87293bc10dfe09707a042bf05091baf40ba344bdca141bd99b62256a7611817",
        "urls": [
          "bzz-raw://8f6eadd454c6671c26bd22095c31a3bbaea7083df9aa6548dbaba32a4907e336",
          "dweb:/ipfs/QmY1jMW9DuAk9CSfVS6MsG5onqjZHKzdBrv2TcHvj9yKj4"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/libraries/LPMath.sol": {
        "keccak256": "0x077931150bcba5b99dedcd9038f3fbeef9c9230046dc4649c457d75d4be32a5c",
        "urls": [
          "bzz-raw://2a48e4046f7ae8acb965d0f8d79767f4f4c70c1a6a8d3cf635482587412d33fd",
          "dweb:/ipfs/QmcY8FbffppqTMBiMwniXG9R8i8eQoVJuLqqTXgpuiXyUr"
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
    "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
    "id": 6407,
    "exportedSymbols": {
      "AssetId": [
        10382
      ],
      "FixedPointMath": [
        11134
      ],
      "HyperdriveBase": [
        6406
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
      "LPMath": [
        14276
      ],
      "ONE": [
        10389
      ],
      "SafeCast": [
        14352
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:23778:43",
    "nodes": [
      {
        "id": 5466,
        "nodeType": "PragmaDirective",
        "src": "39:23:43",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 5468,
        "nodeType": "ImportDirective",
        "src": "64:50:43",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC20.sol",
        "file": "../interfaces/IERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6407,
        "sourceUnit": 3873,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5467,
              "name": "IERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3872,
              "src": "73:6:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5470,
        "nodeType": "ImportDirective",
        "src": "115:60:43",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6407,
        "sourceUnit": 4676,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5469,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4675,
              "src": "124:11:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5472,
        "nodeType": "ImportDirective",
        "src": "176:51:43",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/AssetId.sol",
        "file": "../libraries/AssetId.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6407,
        "sourceUnit": 10383,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5471,
              "name": "AssetId",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10382,
              "src": "185:7:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5475,
        "nodeType": "ImportDirective",
        "src": "228:70:43",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6407,
        "sourceUnit": 11135,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5473,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11134,
              "src": "237:14:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 5474,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10389,
              "src": "253:3:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5477,
        "nodeType": "ImportDirective",
        "src": "299:65:43",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/HyperdriveMath.sol",
        "file": "../libraries/HyperdriveMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6407,
        "sourceUnit": 11699,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5476,
              "name": "HyperdriveMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11698,
              "src": "308:14:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5479,
        "nodeType": "ImportDirective",
        "src": "365:49:43",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/LPMath.sol",
        "file": "../libraries/LPMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6407,
        "sourceUnit": 14277,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5478,
              "name": "LPMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 14276,
              "src": "374:6:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5481,
        "nodeType": "ImportDirective",
        "src": "415:53:43",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/SafeCast.sol",
        "file": "../libraries/SafeCast.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6407,
        "sourceUnit": 14353,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5480,
              "name": "SafeCast",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 14352,
              "src": "424:8:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5483,
        "nodeType": "ImportDirective",
        "src": "469:60:43",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveStorage.sol",
        "file": "./HyperdriveStorage.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 6407,
        "sourceUnit": 10067,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5482,
              "name": "HyperdriveStorage",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10066,
              "src": "478:17:43",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 6406,
        "nodeType": "ContractDefinition",
        "src": "959:22857:43",
        "nodes": [
          {
            "id": 5489,
            "nodeType": "UsingForDirective",
            "src": "1019:33:43",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 5487,
              "name": "FixedPointMath",
              "nameLocations": [
                "1025:14:43"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11134,
              "src": "1025:14:43"
            },
            "typeName": {
              "id": 5488,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1044:7:43",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 5492,
            "nodeType": "UsingForDirective",
            "src": "1057:32:43",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 5490,
              "name": "FixedPointMath",
              "nameLocations": [
                "1063:14:43"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11134,
              "src": "1063:14:43"
            },
            "typeName": {
              "id": 5491,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "1082:6:43",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 5495,
            "nodeType": "UsingForDirective",
            "src": "1094:27:43",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 5493,
              "name": "SafeCast",
              "nameLocations": [
                "1100:8:43"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14352,
              "src": "1100:8:43"
            },
            "typeName": {
              "id": 5494,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "1113:7:43",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 5498,
            "nodeType": "UsingForDirective",
            "src": "1126:26:43",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 5496,
              "name": "SafeCast",
              "nameLocations": [
                "1132:8:43"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14352,
              "src": "1132:8:43"
            },
            "typeName": {
              "id": 5497,
              "name": "int256",
              "nodeType": "ElementaryTypeName",
              "src": "1145:6:43",
              "typeDescriptions": {
                "typeIdentifier": "t_int256",
                "typeString": "int256"
              }
            }
          },
          {
            "id": 5510,
            "nodeType": "EventDefinition",
            "src": "1158:160:43",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "d93ddcd36a9d44373680f40bd3bcafe3c7e738748e10c90213e70453cff44231",
            "name": "Initialize",
            "nameLocation": "1164:10:43",
            "parameters": {
              "id": 5509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5500,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "1200:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5510,
                  "src": "1184:24:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5499,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1184:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5502,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "1226:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5510,
                  "src": "1218:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5501,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1218:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5504,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1252:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5510,
                  "src": "1244:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5503,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1244:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5506,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1280:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5510,
                  "src": "1272:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5505,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1272:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5508,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "apr",
                  "nameLocation": "1308:3:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5510,
                  "src": "1300:11:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5507,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1300:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1174:143:43"
            }
          },
          {
            "id": 5522,
            "nodeType": "EventDefinition",
            "src": "1324:171:43",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "d92dda7384b5f0fa573be9bbf63d63ac81a5bbb08ebc31f00c0f066e50239609",
            "name": "AddLiquidity",
            "nameLocation": "1330:12:43",
            "parameters": {
              "id": 5521,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5512,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "1368:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5522,
                  "src": "1352:24:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5511,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1352:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5514,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "1394:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5522,
                  "src": "1386:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5513,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1386:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5516,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1420:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5522,
                  "src": "1412:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5515,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1412:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5518,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1448:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5522,
                  "src": "1440:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5517,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1440:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5520,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "1476:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5522,
                  "src": "1468:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5519,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1468:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1342:152:43"
            }
          },
          {
            "id": 5536,
            "nodeType": "EventDefinition",
            "src": "1501:213:43",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "ae97bda5fb1ee457c0490e5804bc10c54ab31a1fd9b01e2f85a1855072150be8",
            "name": "RemoveLiquidity",
            "nameLocation": "1507:15:43",
            "parameters": {
              "id": 5535,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5524,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "1548:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5536,
                  "src": "1532:24:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5523,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1532:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5526,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpAmount",
                  "nameLocation": "1574:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5536,
                  "src": "1566:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5525,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1566:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5528,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1600:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5536,
                  "src": "1592:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5527,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1592:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5530,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1628:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5536,
                  "src": "1620:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5529,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1620:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5532,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "withdrawalShareAmount",
                  "nameLocation": "1656:21:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5536,
                  "src": "1648:29:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5531,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1648:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5534,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "1695:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5536,
                  "src": "1687:20:43",
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
                    "src": "1687:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1522:191:43"
            }
          },
          {
            "id": 5546,
            "nodeType": "EventDefinition",
            "src": "1720:164:43",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "7986a4c20efd1390450c45fb0b11e794754bdce25f47ab5488efc8104169f754",
            "name": "RedeemWithdrawalShares",
            "nameLocation": "1726:22:43",
            "parameters": {
              "id": 5545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5538,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "provider",
                  "nameLocation": "1774:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5546,
                  "src": "1758:24:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5537,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1758:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5540,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "withdrawalShareAmount",
                  "nameLocation": "1800:21:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5546,
                  "src": "1792:29:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5539,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1792:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5542,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "1839:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5546,
                  "src": "1831:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5541,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1831:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5544,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "1867:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5546,
                  "src": "1859:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5543,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1859:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1748:135:43"
            }
          },
          {
            "id": 5560,
            "nodeType": "EventDefinition",
            "src": "1890:200:43",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8daa42046d321d073674dbdf323d82d84f6020561cd24ffb2c3dd3e263cda686",
            "name": "OpenLong",
            "nameLocation": "1896:8:43",
            "parameters": {
              "id": 5559,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5548,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "1930:6:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5560,
                  "src": "1914:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5547,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1914:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5550,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "1962:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5560,
                  "src": "1946:23:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5549,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1946:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5552,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "1987:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5560,
                  "src": "1979:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5551,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1979:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5554,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "2017:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5560,
                  "src": "2009:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5553,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2009:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5556,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2045:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5560,
                  "src": "2037:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5555,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2037:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5558,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "2073:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5560,
                  "src": "2065:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5557,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2065:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1904:185:43"
            }
          },
          {
            "id": 5574,
            "nodeType": "EventDefinition",
            "src": "2096:201:43",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "80aa5907299c704704d0d55e06e3c04e3b331a7c40d5a6b2b3031b0ea12fef95",
            "name": "OpenShort",
            "nameLocation": "2102:9:43",
            "parameters": {
              "id": 5573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5562,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "2137:6:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5574,
                  "src": "2121:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5561,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2121:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5564,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "2169:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5574,
                  "src": "2153:23:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5563,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2153:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5566,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "2194:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5574,
                  "src": "2186:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5565,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2186:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5568,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "2224:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5574,
                  "src": "2216:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5567,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2216:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5570,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2252:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5574,
                  "src": "2244:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5569,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2244:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5572,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "2280:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5574,
                  "src": "2272:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5571,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2272:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2111:185:43"
            }
          },
          {
            "id": 5588,
            "nodeType": "EventDefinition",
            "src": "2303:201:43",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "4c68e40241b8ae371bc7dae7035400158b60d0b7d69b35477b693759bb2c0ca0",
            "name": "CloseLong",
            "nameLocation": "2309:9:43",
            "parameters": {
              "id": 5587,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5576,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "2344:6:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5588,
                  "src": "2328:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5575,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2328:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5578,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "2376:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5588,
                  "src": "2360:23:43",
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
                    "src": "2360:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5580,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "2401:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5588,
                  "src": "2393:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5579,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2393:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5582,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "2431:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5588,
                  "src": "2423:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5581,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2423:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5584,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2459:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5588,
                  "src": "2451:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5583,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2451:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5586,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "2487:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5588,
                  "src": "2479:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5585,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2479:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2318:185:43"
            }
          },
          {
            "id": 5602,
            "nodeType": "EventDefinition",
            "src": "2510:202:43",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "32f37298489a8da0fde394937191ad6035015dd8a04bc97c304d59858e3bfd67",
            "name": "CloseShort",
            "nameLocation": "2516:10:43",
            "parameters": {
              "id": 5601,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5590,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "trader",
                  "nameLocation": "2552:6:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5602,
                  "src": "2536:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5589,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2536:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5592,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "assetId",
                  "nameLocation": "2584:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5602,
                  "src": "2568:23:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5591,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2568:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5594,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturityTime",
                  "nameLocation": "2609:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5602,
                  "src": "2601:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5593,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2601:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5596,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "baseAmount",
                  "nameLocation": "2639:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5602,
                  "src": "2631:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5595,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2631:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5598,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2667:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5602,
                  "src": "2659:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5597,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2659:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5600,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "bondAmount",
                  "nameLocation": "2695:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5602,
                  "src": "2687:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5599,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2687:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2526:185:43"
            }
          },
          {
            "id": 5614,
            "nodeType": "EventDefinition",
            "src": "2718:188:43",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "5012836090f6cac0f5b321be3188c3cd9c82c8252a23afea128ea014a6fd1551",
            "name": "CreateCheckpoint",
            "nameLocation": "2724:16:43",
            "parameters": {
              "id": 5613,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5604,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "checkpointTime",
                  "nameLocation": "2766:14:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5614,
                  "src": "2750:30:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5603,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2750:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5606,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2798:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5614,
                  "src": "2790:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5605,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2790:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5608,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturedShorts",
                  "nameLocation": "2826:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5614,
                  "src": "2818:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5607,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2818:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5610,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "maturedLongs",
                  "nameLocation": "2857:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5614,
                  "src": "2849:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5609,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2849:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5612,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "2887:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5614,
                  "src": "2879:20:43",
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
                    "src": "2879:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2740:165:43"
            }
          },
          {
            "id": 5626,
            "nodeType": "EventDefinition",
            "src": "2912:162:43",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "c3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62",
            "name": "TransferSingle",
            "nameLocation": "2918:14:43",
            "parameters": {
              "id": 5625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5616,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "2958:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5626,
                  "src": "2942:24:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5615,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2942:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5618,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "2992:4:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5626,
                  "src": "2976:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5617,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2976:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5620,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "3022:2:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5626,
                  "src": "3006:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5619,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3006:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5622,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "3042:2:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5626,
                  "src": "3034:10:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5621,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3034:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5624,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3062:5:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5626,
                  "src": "3054:13:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5623,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3054:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2932:141:43"
            }
          },
          {
            "id": 5634,
            "nodeType": "EventDefinition",
            "src": "3080:108:43",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
            "name": "Approval",
            "nameLocation": "3086:8:43",
            "parameters": {
              "id": 5633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5628,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "3120:5:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5634,
                  "src": "3104:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5627,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3104:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5630,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "spender",
                  "nameLocation": "3151:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5634,
                  "src": "3135:23:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5629,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3135:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5632,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "value",
                  "nameLocation": "3176:5:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5634,
                  "src": "3168:13:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5631,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3168:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3094:93:43"
            }
          },
          {
            "id": 5642,
            "nodeType": "EventDefinition",
            "src": "3194:117:43",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31",
            "name": "ApprovalForAll",
            "nameLocation": "3200:14:43",
            "parameters": {
              "id": 5641,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5636,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "account",
                  "nameLocation": "3240:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5642,
                  "src": "3224:23:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5635,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3224:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5638,
                  "indexed": true,
                  "mutability": "mutable",
                  "name": "operator",
                  "nameLocation": "3273:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5642,
                  "src": "3257:24:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5637,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3257:7:43",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5640,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "approved",
                  "nameLocation": "3296:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5642,
                  "src": "3291:13:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5639,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "3291:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "3214:96:43"
            }
          },
          {
            "id": 5646,
            "nodeType": "FunctionDefinition",
            "src": "3494:52:43",
            "nodes": [],
            "documentation": {
              "id": 5643,
              "nodeType": "StructuredDocumentation",
              "src": "3343:146:43",
              "text": "@dev A YieldSource dependent check that prevents ether from being\n         transferred to Hyperdrive instances that don't accept ether."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_checkMessageValue",
            "nameLocation": "3503:18:43",
            "parameters": {
              "id": 5644,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3521:2:43"
            },
            "returnParameters": {
              "id": 5645,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3545:0:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 5659,
            "nodeType": "FunctionDefinition",
            "src": "4071:164:43",
            "nodes": [],
            "documentation": {
              "id": 5647,
              "nodeType": "StructuredDocumentation",
              "src": "3552:514:43",
              "text": "@dev Transfers base from the user and commits it to the yield source.\n @param _amount The amount of base to deposit.\n @param _options The options that configure how the withdrawal is\n        settled. In particular, the currency used in the deposit is\n        specified here. Aside from those options, yield sources can\n        choose to implement additional options.\n @return sharesMinted The shares created by this deposit.\n @return sharePrice The share price."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "4080:8:43",
            "parameters": {
              "id": 5653,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5649,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "4106:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5659,
                  "src": "4098:15:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5648,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4098:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5652,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "4152:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5659,
                  "src": "4123:37:43",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 5651,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5650,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "4123:11:43",
                        "4135:7:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4512,
                      "src": "4123:19:43"
                    },
                    "referencedDeclaration": 4512,
                    "src": "4123:19:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$4512_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4088:78:43"
            },
            "returnParameters": {
              "id": 5658,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5655,
                  "mutability": "mutable",
                  "name": "sharesMinted",
                  "nameLocation": "4201:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5659,
                  "src": "4193:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5654,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4193:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5657,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "4223:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5659,
                  "src": "4215:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5656,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4215:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4192:42:43"
            },
            "scope": 6406,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 5670,
            "nodeType": "FunctionDefinition",
            "src": "4803:148:43",
            "nodes": [],
            "documentation": {
              "id": 5660,
              "nodeType": "StructuredDocumentation",
              "src": "4241:557:43",
              "text": "@dev Withdraws shares from the yield source and sends the base\n         released to the destination.\n @param _shares The shares to withdraw from the yield source.\n @param _options The options that configure how the withdrawal is\n        settled. In particular, the destination and currency used in the\n        withdrawal are specified here. Aside from those options, yield\n        sources can choose to implement additional options.\n @return amountWithdrawn The amount of base released by the withdrawal."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "4812:9:43",
            "parameters": {
              "id": 5666,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5662,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "4839:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5670,
                  "src": "4831:15:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5661,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4831:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5665,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "4885:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5670,
                  "src": "4856:37:43",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 5664,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5663,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "4856:11:43",
                        "4868:7:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4512,
                      "src": "4856:19:43"
                    },
                    "referencedDeclaration": 4512,
                    "src": "4856:19:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$4512_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4821:78:43"
            },
            "returnParameters": {
              "id": 5669,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5668,
                  "mutability": "mutable",
                  "name": "amountWithdrawn",
                  "nameLocation": "4934:15:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5670,
                  "src": "4926:23:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5667,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4926:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4925:25:43"
            },
            "scope": 6406,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 5676,
            "nodeType": "FunctionDefinition",
            "src": "5067:109:43",
            "nodes": [],
            "documentation": {
              "id": 5671,
              "nodeType": "StructuredDocumentation",
              "src": "4957:105:43",
              "text": "@dev Loads the share price from the yield source.\n @return sharePrice The current share price."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "5076:14:43",
            "parameters": {
              "id": 5672,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5090:2:43"
            },
            "returnParameters": {
              "id": 5675,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5674,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "5164:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5676,
                  "src": "5156:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5673,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5156:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5155:20:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 5689,
            "nodeType": "ModifierDefinition",
            "src": "5269:105:43",
            "nodes": [],
            "body": {
              "id": 5688,
              "nodeType": "Block",
              "src": "5292:82:43",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 5679,
                      "name": "_marketState",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 9849,
                      "src": "5306:12:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                        "typeString": "struct IHyperdrive.MarketState storage ref"
                      }
                    },
                    "id": 5680,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5319:8:43",
                    "memberName": "isPaused",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 4359,
                    "src": "5306:21:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5686,
                  "nodeType": "IfStatement",
                  "src": "5302:54:43",
                  "trueBody": {
                    "errorCall": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 5681,
                          "name": "IHyperdrive",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4675,
                          "src": "5336:11:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                            "typeString": "type(contract IHyperdrive)"
                          }
                        },
                        "id": 5683,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "5348:6:43",
                        "memberName": "Paused",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4555,
                        "src": "5336:18:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_error_pure$__$returns$__$",
                          "typeString": "function () pure"
                        }
                      },
                      "id": 5684,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "5336:20:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5685,
                    "nodeType": "RevertStatement",
                    "src": "5329:27:43"
                  }
                },
                {
                  "id": 5687,
                  "nodeType": "PlaceholderStatement",
                  "src": "5366:1:43"
                }
              ]
            },
            "documentation": {
              "id": 5677,
              "nodeType": "StructuredDocumentation",
              "src": "5201:63:43",
              "text": "@dev Blocks a function execution if the contract is paused."
            },
            "name": "isNotPaused",
            "nameLocation": "5278:11:43",
            "parameters": {
              "id": 5678,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5289:2:43"
            },
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5699,
            "nodeType": "FunctionDefinition",
            "src": "5655:144:43",
            "nodes": [],
            "documentation": {
              "id": 5690,
              "nodeType": "StructuredDocumentation",
              "src": "5404:246:43",
              "text": "@dev Creates a new checkpoint if necessary.\n @param _checkpointTime The time of the checkpoint to create.\n @param _sharePrice The current share price.\n @return openSharePrice The open share price of the latest checkpoint."
            },
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "_applyCheckpoint",
            "nameLocation": "5664:16:43",
            "parameters": {
              "id": 5695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5692,
                  "mutability": "mutable",
                  "name": "_checkpointTime",
                  "nameLocation": "5698:15:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5699,
                  "src": "5690:23:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5691,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5690:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5694,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "5731:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5699,
                  "src": "5723:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5693,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5723:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5680:68:43"
            },
            "returnParameters": {
              "id": 5698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5697,
                  "mutability": "mutable",
                  "name": "openSharePrice",
                  "nameLocation": "5783:14:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5699,
                  "src": "5775:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5696,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5775:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5774:24:43"
            },
            "scope": 6406,
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          },
          {
            "id": 5732,
            "nodeType": "FunctionDefinition",
            "src": "6032:368:43",
            "nodes": [],
            "body": {
              "id": 5731,
              "nodeType": "Block",
              "src": "6148:252:43",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    5708
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5708,
                      "mutability": "mutable",
                      "name": "latestCheckpoint",
                      "nameLocation": "6166:16:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 5731,
                      "src": "6158:24:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5707,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6158:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5711,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 5709,
                      "name": "_latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5787,
                      "src": "6185:17:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                        "typeString": "function () view returns (uint256)"
                      }
                    },
                    "id": 5710,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6185:19:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6158:46:43"
                },
                {
                  "expression": {
                    "id": 5721,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5712,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5705,
                      "src": "6214:13:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5715,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 5713,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5702,
                          "src": "6230:13:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 5714,
                          "name": "latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5708,
                          "src": "6246:16:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6230:32:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 5719,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6324:1:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 5720,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "6230:95:43",
                      "trueExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5718,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 5716,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5702,
                          "src": "6277:13:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 5717,
                          "name": "latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5708,
                          "src": "6293:16:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6277:32:43",
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
                    "src": "6214:111:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5722,
                  "nodeType": "ExpressionStatement",
                  "src": "6214:111:43"
                },
                {
                  "expression": {
                    "id": 5729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5723,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5705,
                      "src": "6335:13:43",
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
                          "id": 5727,
                          "name": "_positionDuration",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9821,
                          "src": "6375:17:43",
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
                              "id": 5724,
                              "name": "timeRemaining",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5705,
                              "src": "6352:13:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 5725,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "6351:15:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5726,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6367:7:43",
                        "memberName": "divDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10450,
                        "src": "6351:23:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 5728,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6351:42:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6335:58:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5730,
                  "nodeType": "ExpressionStatement",
                  "src": "6335:58:43"
                }
              ]
            },
            "documentation": {
              "id": 5700,
              "nodeType": "StructuredDocumentation",
              "src": "5826:201:43",
              "text": "@dev Calculates the normalized time remaining of a position.\n @param _maturityTime The maturity time of the position.\n @return timeRemaining The normalized time remaining (in [0, 1])."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateTimeRemaining",
            "nameLocation": "6041:23:43",
            "parameters": {
              "id": 5703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5702,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "6082:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5732,
                  "src": "6074:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5701,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6074:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6064:37:43"
            },
            "returnParameters": {
              "id": 5706,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5705,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "6133:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5732,
                  "src": "6125:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5704,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6125:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6124:23:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5769,
            "nodeType": "FunctionDefinition",
            "src": "6600:386:43",
            "nodes": [],
            "body": {
              "id": 5768,
              "nodeType": "Block",
              "src": "6722:264:43",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    5741
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5741,
                      "mutability": "mutable",
                      "name": "latestCheckpoint",
                      "nameLocation": "6740:16:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 5768,
                      "src": "6732:24:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5740,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "6732:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5746,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5745,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "id": 5742,
                        "name": "_latestCheckpoint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5787,
                        "src": "6759:17:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 5743,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6759:19:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "id": 5744,
                      "name": "ONE",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10389,
                      "src": "6781:3:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6759:25:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "6732:52:43"
                },
                {
                  "expression": {
                    "id": 5756,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5747,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5738,
                      "src": "6794:13:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5750,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 5748,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5735,
                          "src": "6810:13:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "id": 5749,
                          "name": "latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5741,
                          "src": "6826:16:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6810:32:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "hexValue": "30",
                        "id": 5754,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "6904:1:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "id": 5755,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "6810:95:43",
                      "trueExpression": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5753,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 5751,
                          "name": "_maturityTime",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5735,
                          "src": "6857:13:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 5752,
                          "name": "latestCheckpoint",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5741,
                          "src": "6873:16:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "6857:32:43",
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
                    "src": "6794:111:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5757,
                  "nodeType": "ExpressionStatement",
                  "src": "6794:111:43"
                },
                {
                  "expression": {
                    "id": 5766,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5758,
                      "name": "timeRemaining",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5738,
                      "src": "6915:13:43",
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
                          "id": 5764,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 5762,
                            "name": "_positionDuration",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9821,
                            "src": "6955:17:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "id": 5763,
                            "name": "ONE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10389,
                            "src": "6975:3:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "6955:23:43",
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
                              "id": 5759,
                              "name": "timeRemaining",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5738,
                              "src": "6932:13:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "id": 5760,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "6931:15:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5761,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "6947:7:43",
                        "memberName": "divDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10450,
                        "src": "6931:23:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 5765,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "6931:48:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "6915:64:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5767,
                  "nodeType": "ExpressionStatement",
                  "src": "6915:64:43"
                }
              ]
            },
            "documentation": {
              "id": 5733,
              "nodeType": "StructuredDocumentation",
              "src": "6406:189:43",
              "text": "@dev Calculates the normalized time remaining of a position when the\n      maturity time is scaled up 18 decimals.\n @param _maturityTime The maturity time of the position."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateTimeRemainingScaled",
            "nameLocation": "6609:29:43",
            "parameters": {
              "id": 5736,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5735,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "6656:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5769,
                  "src": "6648:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5734,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6648:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6638:37:43"
            },
            "returnParameters": {
              "id": 5739,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5738,
                  "mutability": "mutable",
                  "name": "timeRemaining",
                  "nameLocation": "6707:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5769,
                  "src": "6699:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5737,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6699:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6698:23:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5787,
            "nodeType": "FunctionDefinition",
            "src": "7099:223:43",
            "nodes": [],
            "body": {
              "id": 5786,
              "nodeType": "Block",
              "src": "7205:117:43",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5784,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5775,
                      "name": "latestCheckpoint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5773,
                      "src": "7215:16:43",
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
                      "id": 5783,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "expression": {
                          "id": 5776,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "7246:5:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 5777,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7252:9:43",
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "7246:15:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "-",
                      "rightExpression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 5781,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "expression": {
                                "id": 5778,
                                "name": "block",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -4,
                                "src": "7277:5:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_block",
                                  "typeString": "block"
                                }
                              },
                              "id": 5779,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "7283:9:43",
                              "memberName": "timestamp",
                              "nodeType": "MemberAccess",
                              "src": "7277:15:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "%",
                            "rightExpression": {
                              "id": 5780,
                              "name": "_checkpointDuration",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9818,
                              "src": "7295:19:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "7277:37:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "id": 5782,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "7276:39:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "7246:69:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "7215:100:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5785,
                  "nodeType": "ExpressionStatement",
                  "src": "7215:100:43"
                }
              ]
            },
            "documentation": {
              "id": 5770,
              "nodeType": "StructuredDocumentation",
              "src": "6992:102:43",
              "text": "@dev Gets the most recent checkpoint time.\n @return latestCheckpoint The latest checkpoint."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_latestCheckpoint",
            "nameLocation": "7108:17:43",
            "parameters": {
              "id": 5771,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7125:2:43"
            },
            "returnParameters": {
              "id": 5774,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5773,
                  "mutability": "mutable",
                  "name": "latestCheckpoint",
                  "nameLocation": "7183:16:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5787,
                  "src": "7175:24:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5772,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7175:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7174:26:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5802,
            "nodeType": "FunctionDefinition",
            "src": "7503:253:43",
            "nodes": [],
            "body": {
              "id": 5801,
              "nodeType": "Block",
              "src": "7570:186:43",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "expression": {
                          "id": 5795,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9849,
                          "src": "7663:12:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 5796,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7676:13:43",
                        "memberName": "shareReserves",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4329,
                        "src": "7663:26:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        }
                      },
                      {
                        "expression": {
                          "id": 5797,
                          "name": "_marketState",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9849,
                          "src": "7707:12:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                            "typeString": "struct IHyperdrive.MarketState storage ref"
                          }
                        },
                        "id": 5798,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "7720:15:43",
                        "memberName": "shareAdjustment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4335,
                        "src": "7707:28:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint128",
                          "typeString": "uint128"
                        },
                        {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      ],
                      "expression": {
                        "id": 5793,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11698,
                        "src": "7599:14:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$11698_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 5794,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "7614:31:43",
                      "memberName": "calculateEffectiveShareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11250,
                      "src": "7599:46:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_int256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,int256) pure returns (uint256)"
                      }
                    },
                    "id": 5799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7599:150:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5792,
                  "id": 5800,
                  "nodeType": "Return",
                  "src": "7580:169:43"
                }
              ]
            },
            "documentation": {
              "id": 5788,
              "nodeType": "StructuredDocumentation",
              "src": "7328:170:43",
              "text": "@dev Gets the effective share reserves.\n @return The effective share reserves. This is the share reserves used\n         by the YieldSpace pricing model."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_effectiveShareReserves",
            "nameLocation": "7512:23:43",
            "parameters": {
              "id": 5789,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7535:2:43"
            },
            "returnParameters": {
              "id": 5792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5791,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5802,
                  "src": "7561:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5790,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "7561:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "7560:9:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5837,
            "nodeType": "FunctionDefinition",
            "src": "8094:827:43",
            "nodes": [],
            "body": {
              "id": 5836,
              "nodeType": "Block",
              "src": "8187:734:43",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 5834,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "baseExpression": {
                            "id": 5812,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9891,
                            "src": "8474:12:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 5820,
                          "indexExpression": {
                            "arguments": [
                              {
                                "expression": {
                                  "expression": {
                                    "id": 5815,
                                    "name": "AssetId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10382,
                                    "src": "8555:7:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_AssetId_$10382_$",
                                      "typeString": "type(library AssetId)"
                                    }
                                  },
                                  "id": 5816,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8563:13:43",
                                  "memberName": "AssetIdPrefix",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 10088,
                                  "src": "8555:21:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$10088_$",
                                    "typeString": "type(enum AssetId.AssetIdPrefix)"
                                  }
                                },
                                "id": 5817,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "8577:4:43",
                                "memberName": "Long",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 10085,
                                "src": "8555:26:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_enum$_AssetIdPrefix_$10088",
                                  "typeString": "enum AssetId.AssetIdPrefix"
                                }
                              },
                              {
                                "id": 5818,
                                "name": "_maturityTime",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5805,
                                "src": "8607:13:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_enum$_AssetIdPrefix_$10088",
                                  "typeString": "enum AssetId.AssetIdPrefix"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 5813,
                                "name": "AssetId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10382,
                                "src": "8508:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_AssetId_$10382_$",
                                  "typeString": "type(library AssetId)"
                                }
                              },
                              "id": 5814,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8516:13:43",
                              "memberName": "encodeAssetId",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10111,
                              "src": "8508:21:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$10088_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 5819,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8508:134:43",
                            "tryCall": false,
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
                          "src": "8474:186:43",
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
                        "id": 5811,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8450:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 5810,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "8450:6:43",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 5821,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8450:224:43",
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
                          "baseExpression": {
                            "id": 5824,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9891,
                            "src": "8713:12:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 5832,
                          "indexExpression": {
                            "arguments": [
                              {
                                "expression": {
                                  "expression": {
                                    "id": 5827,
                                    "name": "AssetId",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10382,
                                    "src": "8794:7:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_AssetId_$10382_$",
                                      "typeString": "type(library AssetId)"
                                    }
                                  },
                                  "id": 5828,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "8802:13:43",
                                  "memberName": "AssetIdPrefix",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 10088,
                                  "src": "8794:21:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_enum$_AssetIdPrefix_$10088_$",
                                    "typeString": "type(enum AssetId.AssetIdPrefix)"
                                  }
                                },
                                "id": 5829,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberLocation": "8816:5:43",
                                "memberName": "Short",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 10086,
                                "src": "8794:27:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_enum$_AssetIdPrefix_$10088",
                                  "typeString": "enum AssetId.AssetIdPrefix"
                                }
                              },
                              {
                                "id": 5830,
                                "name": "_maturityTime",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5805,
                                "src": "8847:13:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_enum$_AssetIdPrefix_$10088",
                                  "typeString": "enum AssetId.AssetIdPrefix"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "id": 5825,
                                "name": "AssetId",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10382,
                                "src": "8747:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_AssetId_$10382_$",
                                  "typeString": "type(library AssetId)"
                                }
                              },
                              "id": 5826,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "8755:13:43",
                              "memberName": "encodeAssetId",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 10111,
                              "src": "8747:21:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_enum$_AssetIdPrefix_$10088_$_t_uint256_$returns$_t_uint256_$",
                                "typeString": "function (enum AssetId.AssetIdPrefix,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 5831,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "8747:135:43",
                            "tryCall": false,
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
                          "src": "8713:187:43",
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
                        "id": 5823,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "8689:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 5822,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "8689:6:43",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 5833,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "8689:225:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "8450:464:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 5809,
                  "id": 5835,
                  "nodeType": "Return",
                  "src": "8431:483:43"
                }
              ]
            },
            "documentation": {
              "id": 5803,
              "nodeType": "StructuredDocumentation",
              "src": "7762:327:43",
              "text": "@dev Gets the amount of non-netted longs with a given maturity.\n @param _maturityTime The maturity time of the longs.\n @return The amount of non-netted longs. This is a signed value that\n         can be negative. This is convenient for updating the long\n         exposure when closing positions."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_nonNettedLongs",
            "nameLocation": "8103:15:43",
            "parameters": {
              "id": 5806,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5805,
                  "mutability": "mutable",
                  "name": "_maturityTime",
                  "nameLocation": "8136:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5837,
                  "src": "8128:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5804,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8128:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8118:37:43"
            },
            "returnParameters": {
              "id": 5809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5808,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5837,
                  "src": "8179:6:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 5807,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "8179:6:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "8178:8:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5910,
            "nodeType": "FunctionDefinition",
            "src": "9121:1395:43",
            "nodes": [],
            "body": {
              "id": 5909,
              "nodeType": "Block",
              "src": "9337:1179:43",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    5854
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5854,
                      "mutability": "mutable",
                      "name": "presentValueParams",
                      "nameLocation": "9392:18:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 5909,
                      "src": "9347:63:43",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                        "typeString": "struct LPMath.PresentValueParams"
                      },
                      "typeName": {
                        "id": 5853,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 5852,
                          "name": "LPMath.PresentValueParams",
                          "nameLocations": [
                            "9347:6:43",
                            "9354:18:43"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 11871,
                          "src": "9347:25:43"
                        },
                        "referencedDeclaration": 11871,
                        "src": "9347:25:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PresentValueParams_$11871_storage_ptr",
                          "typeString": "struct LPMath.PresentValueParams"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5858,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 5856,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5844,
                        "src": "9436:11:43",
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
                      "id": 5855,
                      "name": "_getPresentValueParams",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5948,
                      "src": "9413:22:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$11871_memory_ptr_$",
                        "typeString": "function (uint256) view returns (struct LPMath.PresentValueParams memory)"
                      }
                    },
                    "id": 5857,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9413:35:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                      "typeString": "struct LPMath.PresentValueParams memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9347:101:43"
                },
                {
                  "assignments": [
                    5860
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5860,
                      "mutability": "mutable",
                      "name": "startingPresentValue",
                      "nameLocation": "9466:20:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 5909,
                      "src": "9458:28:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5859,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9458:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5865,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 5863,
                        "name": "presentValueParams",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5854,
                        "src": "9531:18:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                          "typeString": "struct LPMath.PresentValueParams memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                          "typeString": "struct LPMath.PresentValueParams memory"
                        }
                      ],
                      "expression": {
                        "id": 5861,
                        "name": "LPMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14276,
                        "src": "9489:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_LPMath_$14276_$",
                          "typeString": "type(library LPMath)"
                        }
                      },
                      "id": 5862,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "9496:21:43",
                      "memberName": "calculatePresentValue",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11900,
                      "src": "9489:28:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$11871_memory_ptr_$returns$_t_uint256_$",
                        "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256)"
                      }
                    },
                    "id": 5864,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "9489:70:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9458:101:43"
                },
                {
                  "assignments": [
                    5867
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5867,
                      "mutability": "mutable",
                      "name": "netCurveTrade",
                      "nameLocation": "9576:13:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 5909,
                      "src": "9569:20:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 5866,
                        "name": "int256",
                        "nodeType": "ElementaryTypeName",
                        "src": "9569:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5887,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 5886,
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
                                "id": 5873,
                                "name": "presentValueParams",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5854,
                                "src": "9673:18:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                                  "typeString": "struct LPMath.PresentValueParams memory"
                                }
                              },
                              "id": 5874,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9692:24:43",
                              "memberName": "longAverageTimeRemaining",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11866,
                              "src": "9673:43:43",
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
                                "id": 5870,
                                "name": "presentValueParams",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5854,
                                "src": "9612:18:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                                  "typeString": "struct LPMath.PresentValueParams memory"
                                }
                              },
                              "id": 5871,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9631:16:43",
                              "memberName": "longsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11864,
                              "src": "9612:35:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 5872,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9648:7:43",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10432,
                            "src": "9612:43:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 5875,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9612:118:43",
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
                        "id": 5869,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9592:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 5868,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "9592:6:43",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 5876,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9592:148:43",
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
                                "id": 5882,
                                "name": "presentValueParams",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5854,
                                "src": "9845:18:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                                  "typeString": "struct LPMath.PresentValueParams memory"
                                }
                              },
                              "id": 5883,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9864:25:43",
                              "memberName": "shortAverageTimeRemaining",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11870,
                              "src": "9845:44:43",
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
                                "id": 5879,
                                "name": "presentValueParams",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5854,
                                "src": "9779:18:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                                  "typeString": "struct LPMath.PresentValueParams memory"
                                }
                              },
                              "id": 5880,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "9798:17:43",
                              "memberName": "shortsOutstanding",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 11868,
                              "src": "9779:36:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 5881,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "9816:7:43",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10432,
                            "src": "9779:44:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 5884,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "9779:128:43",
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
                        "id": 5878,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "9755:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 5877,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "9755:6:43",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 5885,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "9755:166:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "9592:329:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "9569:352:43"
                },
                {
                  "expression": {
                    "id": 5907,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5888,
                      "name": "params",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5848,
                      "src": "9931:6:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$12274_memory_ptr",
                        "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 5891,
                          "name": "presentValueParams",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5854,
                          "src": "10008:18:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                            "typeString": "struct LPMath.PresentValueParams memory"
                          }
                        },
                        {
                          "id": 5892,
                          "name": "startingPresentValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5860,
                          "src": "10062:20:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "baseExpression": {
                            "id": 5893,
                            "name": "_totalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9891,
                            "src": "10117:12:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                              "typeString": "mapping(uint256 => uint256)"
                            }
                          },
                          "id": 5896,
                          "indexExpression": {
                            "expression": {
                              "id": 5894,
                              "name": "AssetId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10382,
                              "src": "10130:7:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_AssetId_$10382_$",
                                "typeString": "type(library AssetId)"
                              }
                            },
                            "id": 5895,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberLocation": "10138:12:43",
                            "memberName": "_LP_ASSET_ID",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10074,
                            "src": "10130:20:43",
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
                          "src": "10117:34:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 5897,
                          "name": "_withdrawalSharesTotalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5842,
                          "src": "10194:28:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 5898,
                          "name": "_idle",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5840,
                          "src": "10242:5:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 5899,
                          "name": "netCurveTrade",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5867,
                          "src": "10276:13:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "expression": {
                            "id": 5900,
                            "name": "presentValueParams",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5854,
                            "src": "10326:18:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                              "typeString": "struct LPMath.PresentValueParams memory"
                            }
                          },
                          "id": 5901,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10345:13:43",
                          "memberName": "shareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 11850,
                          "src": "10326:32:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 5902,
                            "name": "presentValueParams",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5854,
                            "src": "10397:18:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                              "typeString": "struct LPMath.PresentValueParams memory"
                            }
                          },
                          "id": 5903,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10416:15:43",
                          "memberName": "shareAdjustment",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 11852,
                          "src": "10397:34:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
                          }
                        },
                        {
                          "expression": {
                            "id": 5904,
                            "name": "presentValueParams",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5854,
                            "src": "10467:18:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                              "typeString": "struct LPMath.PresentValueParams memory"
                            }
                          },
                          "id": 5905,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10486:12:43",
                          "memberName": "bondReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 11854,
                          "src": "10467:31:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                            "typeString": "struct LPMath.PresentValueParams memory"
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
                            "typeIdentifier": "t_int256",
                            "typeString": "int256"
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
                        "expression": {
                          "id": 5889,
                          "name": "LPMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14276,
                          "src": "9940:6:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_LPMath_$14276_$",
                            "typeString": "type(library LPMath)"
                          }
                        },
                        "id": 5890,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "9947:26:43",
                        "memberName": "DistributeExcessIdleParams",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 12274,
                        "src": "9940:33:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_DistributeExcessIdleParams_$12274_storage_ptr_$",
                          "typeString": "type(struct LPMath.DistributeExcessIdleParams storage pointer)"
                        }
                      },
                      "id": 5906,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "9988:18:43",
                        "10040:20:43",
                        "10096:19:43",
                        "10165:27:43",
                        "10236:4:43",
                        "10261:13:43",
                        "10303:21:43",
                        "10372:23:43",
                        "10445:20:43"
                      ],
                      "names": [
                        "presentValueParams",
                        "startingPresentValue",
                        "activeLpTotalSupply",
                        "withdrawalSharesTotalSupply",
                        "idle",
                        "netCurveTrade",
                        "originalShareReserves",
                        "originalShareAdjustment",
                        "originalBondReserves"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "9940:569:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$12274_memory_ptr",
                        "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                      }
                    },
                    "src": "9931:578:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$12274_memory_ptr",
                      "typeString": "struct LPMath.DistributeExcessIdleParams memory"
                    }
                  },
                  "id": 5908,
                  "nodeType": "ExpressionStatement",
                  "src": "9931:578:43"
                }
              ]
            },
            "documentation": {
              "id": 5838,
              "nodeType": "StructuredDocumentation",
              "src": "8927:189:43",
              "text": "@dev Gets the distribute excess idle parameters from the current state.\n @param _sharePrice The current share price.\n @return params The distribute excess idle parameters."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getDistributeExcessIdleParams",
            "nameLocation": "9130:30:43",
            "parameters": {
              "id": 5845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5840,
                  "mutability": "mutable",
                  "name": "_idle",
                  "nameLocation": "9178:5:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5910,
                  "src": "9170:13:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5839,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9170:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5842,
                  "mutability": "mutable",
                  "name": "_withdrawalSharesTotalSupply",
                  "nameLocation": "9201:28:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5910,
                  "src": "9193:36:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5841,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9193:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5844,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "9247:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5910,
                  "src": "9239:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5843,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "9239:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9160:104:43"
            },
            "returnParameters": {
              "id": 5849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5848,
                  "mutability": "mutable",
                  "name": "params",
                  "nameLocation": "9329:6:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5910,
                  "src": "9288:47:43",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$12274_memory_ptr",
                    "typeString": "struct LPMath.DistributeExcessIdleParams"
                  },
                  "typeName": {
                    "id": 5847,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5846,
                      "name": "LPMath.DistributeExcessIdleParams",
                      "nameLocations": [
                        "9288:6:43",
                        "9295:26:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 12274,
                      "src": "9288:33:43"
                    },
                    "referencedDeclaration": 12274,
                    "src": "9288:33:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_DistributeExcessIdleParams_$12274_storage_ptr",
                      "typeString": "struct LPMath.DistributeExcessIdleParams"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "9287:49:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5948,
            "nodeType": "FunctionDefinition",
            "src": "10698:945:43",
            "nodes": [],
            "body": {
              "id": 5947,
              "nodeType": "Block",
              "src": "10829:814:43",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5945,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5919,
                      "name": "params",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5917,
                      "src": "10839:6:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                        "typeString": "struct LPMath.PresentValueParams memory"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 5922,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9849,
                            "src": "10903:12:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 5923,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10916:13:43",
                          "memberName": "shareReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4329,
                          "src": "10903:26:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "expression": {
                            "id": 5924,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9849,
                            "src": "10960:12:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 5925,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "10973:15:43",
                          "memberName": "shareAdjustment",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4335,
                          "src": "10960:28:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        {
                          "expression": {
                            "id": 5926,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9849,
                            "src": "11016:12:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 5927,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11029:12:43",
                          "memberName": "bondReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4332,
                          "src": "11016:25:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "id": 5928,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5913,
                          "src": "11067:11:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 5929,
                          "name": "_initialSharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9839,
                          "src": "11111:18:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 5930,
                          "name": "_minimumShareReserves",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9842,
                          "src": "11165:21:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 5931,
                          "name": "_timeStretch",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9824,
                          "src": "11213:12:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 5932,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9849,
                            "src": "11257:12:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 5933,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11270:16:43",
                          "memberName": "longsOutstanding",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4344,
                          "src": "11257:29:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 5935,
                                "name": "_marketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9849,
                                "src": "11373:12:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                                  "typeString": "struct IHyperdrive.MarketState storage ref"
                                }
                              },
                              "id": 5936,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "11386:23:43",
                              "memberName": "longAverageMaturityTime",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 4350,
                              "src": "11373:36:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            ],
                            "id": 5934,
                            "name": "_calculateTimeRemainingScaled",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5769,
                            "src": "11326:29:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256) view returns (uint256)"
                            }
                          },
                          "id": 5937,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11326:97:43",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 5938,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9849,
                            "src": "11456:12:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 5939,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "11469:17:43",
                          "memberName": "shortsOutstanding",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4347,
                          "src": "11456:30:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        {
                          "arguments": [
                            {
                              "expression": {
                                "id": 5941,
                                "name": "_marketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9849,
                                "src": "11574:12:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                                  "typeString": "struct IHyperdrive.MarketState storage ref"
                                }
                              },
                              "id": 5942,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "11587:24:43",
                              "memberName": "shortAverageMaturityTime",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 4353,
                              "src": "11574:37:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            ],
                            "id": 5940,
                            "name": "_calculateTimeRemainingScaled",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5769,
                            "src": "11527:29:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (uint256) view returns (uint256)"
                            }
                          },
                          "id": 5943,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "11527:98:43",
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
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          },
                          {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
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
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 5920,
                          "name": "LPMath",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 14276,
                          "src": "10848:6:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_LPMath_$14276_$",
                            "typeString": "type(library LPMath)"
                          }
                        },
                        "id": 5921,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "10855:18:43",
                        "memberName": "PresentValueParams",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 11871,
                        "src": "10848:25:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_PresentValueParams_$11871_storage_ptr_$",
                          "typeString": "type(struct LPMath.PresentValueParams storage pointer)"
                        }
                      },
                      "id": 5944,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [
                        "10888:13:43",
                        "10943:15:43",
                        "11002:12:43",
                        "11055:10:43",
                        "11092:17:43",
                        "11143:20:43",
                        "11200:11:43",
                        "11239:16:43",
                        "11300:24:43",
                        "11437:17:43",
                        "11500:25:43"
                      ],
                      "names": [
                        "shareReserves",
                        "shareAdjustment",
                        "bondReserves",
                        "sharePrice",
                        "initialSharePrice",
                        "minimumShareReserves",
                        "timeStretch",
                        "longsOutstanding",
                        "longAverageTimeRemaining",
                        "shortsOutstanding",
                        "shortAverageTimeRemaining"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "10848:788:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                        "typeString": "struct LPMath.PresentValueParams memory"
                      }
                    },
                    "src": "10839:797:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                      "typeString": "struct LPMath.PresentValueParams memory"
                    }
                  },
                  "id": 5946,
                  "nodeType": "ExpressionStatement",
                  "src": "10839:797:43"
                }
              ]
            },
            "documentation": {
              "id": 5911,
              "nodeType": "StructuredDocumentation",
              "src": "10522:171:43",
              "text": "@dev Gets the present value parameters from the current state.\n @param _sharePrice The current share price.\n @return params The present value parameters."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_getPresentValueParams",
            "nameLocation": "10707:22:43",
            "parameters": {
              "id": 5914,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5913,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "10747:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5948,
                  "src": "10739:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5912,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "10739:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10729:35:43"
            },
            "returnParameters": {
              "id": 5918,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5917,
                  "mutability": "mutable",
                  "name": "params",
                  "nameLocation": "10821:6:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5948,
                  "src": "10788:39:43",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                    "typeString": "struct LPMath.PresentValueParams"
                  },
                  "typeName": {
                    "id": 5916,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5915,
                      "name": "LPMath.PresentValueParams",
                      "nameLocations": [
                        "10788:6:43",
                        "10795:18:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 11871,
                      "src": "10788:25:43"
                    },
                    "referencedDeclaration": 11871,
                    "src": "10788:25:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PresentValueParams_$11871_storage_ptr",
                      "typeString": "struct LPMath.PresentValueParams"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "10787:41:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5981,
            "nodeType": "FunctionDefinition",
            "src": "12118:678:43",
            "nodes": [],
            "body": {
              "id": 5980,
              "nodeType": "Block",
              "src": "12280:516:43",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    5961
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5961,
                      "mutability": "mutable",
                      "name": "endingSpotPrice",
                      "nameLocation": "12507:15:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 5980,
                      "src": "12499:23:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5960,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "12499:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5975,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5967,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 5964,
                            "name": "_effectiveShareReserves",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5802,
                            "src": "12572:23:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                              "typeString": "function () view returns (uint256)"
                            }
                          },
                          "id": 5965,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "12572:25:43",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "id": 5966,
                          "name": "_shareCurveDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5951,
                          "src": "12600:16:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "12572:44:43",
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
                        "id": 5971,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 5968,
                            "name": "_marketState",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9849,
                            "src": "12630:12:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                              "typeString": "struct IHyperdrive.MarketState storage ref"
                            }
                          },
                          "id": 5969,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "12643:12:43",
                          "memberName": "bondReserves",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4332,
                          "src": "12630:25:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 5970,
                          "name": "_bondCurveDelta",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5953,
                          "src": "12658:15:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "12630:43:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 5972,
                        "name": "_initialSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9839,
                        "src": "12687:18:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 5973,
                        "name": "_timeStretch",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9824,
                        "src": "12719:12:43",
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
                      "expression": {
                        "id": 5962,
                        "name": "HyperdriveMath",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11698,
                        "src": "12525:14:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_HyperdriveMath_$11698_$",
                          "typeString": "type(library HyperdriveMath)"
                        }
                      },
                      "id": 5963,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "12540:18:43",
                      "memberName": "calculateSpotPrice",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11181,
                      "src": "12525:33:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 5974,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "12525:216:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "12499:242:43"
                },
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 5976,
                      "name": "endingSpotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5961,
                      "src": "12758:15:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "id": 5977,
                      "name": "_maxSpotPrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5955,
                      "src": "12776:13:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "12758:31:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5959,
                  "id": 5979,
                  "nodeType": "Return",
                  "src": "12751:38:43"
                }
              ]
            },
            "documentation": {
              "id": 5949,
              "nodeType": "StructuredDocumentation",
              "src": "11649:464:43",
              "text": "@dev Checks if any of the bonds the trader purchased on the curve\n      were purchased above price of 1 base per bonds.\n @param _shareCurveDelta The amount of shares the trader pays the curve.\n @param _bondCurveDelta The amount of bonds the trader receives from the\n        curve.\n @param _maxSpotPrice The maximum allowable spot price for the trade.\n @return A flag indicating whether the trade was negative interest."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_isNegativeInterest",
            "nameLocation": "12127:19:43",
            "parameters": {
              "id": 5956,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5951,
                  "mutability": "mutable",
                  "name": "_shareCurveDelta",
                  "nameLocation": "12164:16:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5981,
                  "src": "12156:24:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5950,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12156:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5953,
                  "mutability": "mutable",
                  "name": "_bondCurveDelta",
                  "nameLocation": "12198:15:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5981,
                  "src": "12190:23:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5952,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12190:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5955,
                  "mutability": "mutable",
                  "name": "_maxSpotPrice",
                  "nameLocation": "12231:13:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 5981,
                  "src": "12223:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5954,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "12223:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12146:104:43"
            },
            "returnParameters": {
              "id": 5959,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5958,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5981,
                  "src": "12274:4:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5957,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "12274:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "12273:6:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6017,
            "nodeType": "FunctionDefinition",
            "src": "13117:290:43",
            "nodes": [],
            "body": {
              "id": 6016,
              "nodeType": "Block",
              "src": "13187:220:43",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 6014,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "id": 6006,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "arguments": [
                          {
                            "components": [
                              {
                                "arguments": [
                                  {
                                    "id": 5997,
                                    "name": "_sharePrice",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 5984,
                                    "src": "13268:11:43",
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
                                        "expression": {
                                          "id": 5993,
                                          "name": "_marketState",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 9849,
                                          "src": "13232:12:43",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                                            "typeString": "struct IHyperdrive.MarketState storage ref"
                                          }
                                        },
                                        "id": 5994,
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "memberLocation": "13245:13:43",
                                        "memberName": "shareReserves",
                                        "nodeType": "MemberAccess",
                                        "referencedDeclaration": 4329,
                                        "src": "13232:26:43",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint128",
                                          "typeString": "uint128"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint128",
                                          "typeString": "uint128"
                                        }
                                      ],
                                      "id": 5992,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "13224:7:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_uint256_$",
                                        "typeString": "type(uint256)"
                                      },
                                      "typeName": {
                                        "id": 5991,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "13224:7:43",
                                        "typeDescriptions": {}
                                      }
                                    },
                                    "id": 5995,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "nameLocations": [],
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "13224:35:43",
                                    "tryCall": false,
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 5996,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "13260:7:43",
                                  "memberName": "mulDown",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 10432,
                                  "src": "13224:43:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 5998,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "13224:56:43",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 5999,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "13223:58:43",
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
                          "id": 5990,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13216:6:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int256_$",
                            "typeString": "type(int256)"
                          },
                          "typeName": {
                            "id": 5989,
                            "name": "int256",
                            "nodeType": "ElementaryTypeName",
                            "src": "13216:6:43",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 6000,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13216:66:43",
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
                            "expression": {
                              "id": 6003,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9849,
                              "src": "13308:12:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 6004,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "13321:12:43",
                            "memberName": "longExposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4341,
                            "src": "13308:25:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          ],
                          "id": 6002,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "13301:6:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_int128_$",
                            "typeString": "type(int128)"
                          },
                          "typeName": {
                            "id": 6001,
                            "name": "int128",
                            "nodeType": "ElementaryTypeName",
                            "src": "13301:6:43",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 6005,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "13301:33:43",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      "src": "13216:118:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "id": 6011,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5984,
                              "src": "13387:11:43",
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
                              "id": 6009,
                              "name": "_minimumShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9842,
                              "src": "13357:21:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 6010,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "13379:7:43",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10432,
                            "src": "13357:29:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 6012,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "13357:42:43",
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
                        "id": 6008,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "13350:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 6007,
                          "name": "int256",
                          "nodeType": "ElementaryTypeName",
                          "src": "13350:6:43",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 6013,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "13350:50:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "13216:184:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5988,
                  "id": 6015,
                  "nodeType": "Return",
                  "src": "13197:203:43"
                }
              ]
            },
            "documentation": {
              "id": 5982,
              "nodeType": "StructuredDocumentation",
              "src": "12802:310:43",
              "text": "@dev Check solvency by verifying that the share reserves are greater\n      than the exposure plus the minimum share reserves.\n @param _sharePrice The current share price.\n @return True if the share reserves are greater than the exposure plus\n         the minimum share reserves."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_isSolvent",
            "nameLocation": "13126:10:43",
            "parameters": {
              "id": 5985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5984,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "13145:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6017,
                  "src": "13137:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5983,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13137:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13136:21:43"
            },
            "returnParameters": {
              "id": 5988,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5987,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6017,
                  "src": "13181:4:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5986,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "13181:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13180:6:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6076,
            "nodeType": "FunctionDefinition",
            "src": "13578:580:43",
            "nodes": [],
            "body": {
              "id": 6075,
              "nodeType": "Block",
              "src": "13647:511:43",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    6026
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6026,
                      "mutability": "mutable",
                      "name": "delta",
                      "nameLocation": "13889:5:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 6075,
                      "src": "13882:12:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      },
                      "typeName": {
                        "id": 6025,
                        "name": "int128",
                        "nodeType": "ElementaryTypeName",
                        "src": "13882:6:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6045,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "components": [
                          {
                            "commonType": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            "id": 6041,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "hexValue": "30",
                                      "id": 6031,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "13916:1:43",
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
                                    "expression": {
                                      "id": 6029,
                                      "name": "_after",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6022,
                                      "src": "13905:6:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "id": 6030,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "13912:3:43",
                                    "memberName": "max",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 11133,
                                    "src": "13905:10:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                      "typeString": "function (int256,int256) pure returns (int256)"
                                    }
                                  },
                                  "id": 6032,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "13905:13:43",
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
                                "id": 6028,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "13898:6:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 6027,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "13898:6:43",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6033,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13898:21:43",
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
                                      "hexValue": "30",
                                      "id": 6038,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "13941:1:43",
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
                                    "expression": {
                                      "id": 6036,
                                      "name": "_before",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6020,
                                      "src": "13929:7:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_int256",
                                        "typeString": "int256"
                                      }
                                    },
                                    "id": 6037,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberLocation": "13937:3:43",
                                    "memberName": "max",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": 11133,
                                    "src": "13929:11:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_int256_$_t_int256_$returns$_t_int256_$attached_to$_t_int256_$",
                                      "typeString": "function (int256,int256) pure returns (int256)"
                                    }
                                  },
                                  "id": 6039,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "13929:14:43",
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
                                "id": 6035,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "13922:6:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_int256_$",
                                  "typeString": "type(int256)"
                                },
                                "typeName": {
                                  "id": 6034,
                                  "name": "int256",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "13922:6:43",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6040,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "13922:22:43",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_int256",
                                "typeString": "int256"
                              }
                            },
                            "src": "13898:46:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          }
                        ],
                        "id": 6042,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "13897:48:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "id": 6043,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "13959:8:43",
                      "memberName": "toInt128",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 14351,
                      "src": "13897:70:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_int256_$returns$_t_int128_$attached_to$_t_int256_$",
                        "typeString": "function (int256) pure returns (int128)"
                      }
                    },
                    "id": 6044,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "13897:72:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "13882:87:43"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int128",
                      "typeString": "int128"
                    },
                    "id": 6048,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 6046,
                      "name": "delta",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6026,
                      "src": "13983:5:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 6047,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "13991:1:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "13983:9:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_int128",
                        "typeString": "int128"
                      },
                      "id": 6061,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 6059,
                        "name": "delta",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6026,
                        "src": "14072:5:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int128",
                          "typeString": "int128"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 6060,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "14080:1:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "14072:9:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 6073,
                    "nodeType": "IfStatement",
                    "src": "14068:84:43",
                    "trueBody": {
                      "id": 6072,
                      "nodeType": "Block",
                      "src": "14083:69:43",
                      "statements": [
                        {
                          "expression": {
                            "id": 6070,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "expression": {
                                "id": 6062,
                                "name": "_marketState",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 9849,
                                "src": "14097:12:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                                  "typeString": "struct IHyperdrive.MarketState storage ref"
                                }
                              },
                              "id": 6064,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "memberLocation": "14110:12:43",
                              "memberName": "longExposure",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 4341,
                              "src": "14097:25:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "-=",
                            "rightHandSide": {
                              "arguments": [
                                {
                                  "id": 6068,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "-",
                                  "prefix": true,
                                  "src": "14134:6:43",
                                  "subExpression": {
                                    "id": 6067,
                                    "name": "delta",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6026,
                                    "src": "14135:5:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_int128",
                                      "typeString": "int128"
                                    }
                                  },
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
                                "id": 6066,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "14126:7:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint128_$",
                                  "typeString": "type(uint128)"
                                },
                                "typeName": {
                                  "id": 6065,
                                  "name": "uint128",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "14126:7:43",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 6069,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "14126:15:43",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint128",
                                "typeString": "uint128"
                              }
                            },
                            "src": "14097:44:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "id": 6071,
                          "nodeType": "ExpressionStatement",
                          "src": "14097:44:43"
                        }
                      ]
                    }
                  },
                  "id": 6074,
                  "nodeType": "IfStatement",
                  "src": "13979:173:43",
                  "trueBody": {
                    "id": 6058,
                    "nodeType": "Block",
                    "src": "13994:68:43",
                    "statements": [
                      {
                        "expression": {
                          "id": 6056,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 6049,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9849,
                              "src": "14008:12:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 6051,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "14021:12:43",
                            "memberName": "longExposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4341,
                            "src": "14008:25:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "id": 6054,
                                "name": "delta",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6026,
                                "src": "14045:5:43",
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
                              "id": 6053,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "14037:7:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_uint128_$",
                                "typeString": "type(uint128)"
                              },
                              "typeName": {
                                "id": 6052,
                                "name": "uint128",
                                "nodeType": "ElementaryTypeName",
                                "src": "14037:7:43",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 6055,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14037:14:43",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "src": "14008:43:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "id": 6057,
                        "nodeType": "ExpressionStatement",
                        "src": "14008:43:43"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 6018,
              "nodeType": "StructuredDocumentation",
              "src": "13413:160:43",
              "text": "@dev Updates the global long exposure.\n @param _before The long exposure before the update.\n @param _after The long exposure after the update."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_updateLongExposure",
            "nameLocation": "13587:19:43",
            "parameters": {
              "id": 6023,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6020,
                  "mutability": "mutable",
                  "name": "_before",
                  "nameLocation": "13614:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6076,
                  "src": "13607:14:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 6019,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13607:6:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6022,
                  "mutability": "mutable",
                  "name": "_after",
                  "nameLocation": "13630:6:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6076,
                  "src": "13623:13:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 6021,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "13623:6:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "13606:31:43"
            },
            "returnParameters": {
              "id": 6024,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "13647:0:43"
            },
            "scope": 6406,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6148,
            "nodeType": "FunctionDefinition",
            "src": "14480:1376:43",
            "nodes": [],
            "body": {
              "id": 6147,
              "nodeType": "Block",
              "src": "14616:1240:43",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 6092,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 6088,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 6086,
                        "name": "_newSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6083,
                        "src": "14630:14:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "id": 6087,
                        "name": "_oldSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6081,
                        "src": "14647:14:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "14630:31:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "&&",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 6091,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 6089,
                        "name": "_oldSharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6081,
                        "src": "14665:14:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 6090,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "14682:1:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "14665:18:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "14630:53:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6146,
                  "nodeType": "IfStatement",
                  "src": "14626:1224:43",
                  "trueBody": {
                    "id": 6145,
                    "nodeType": "Block",
                    "src": "14685:1165:43",
                    "statements": [
                      {
                        "assignments": [
                          6094
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 6094,
                            "mutability": "mutable",
                            "name": "zombieInterest",
                            "nameLocation": "14812:14:43",
                            "nodeType": "VariableDeclaration",
                            "scope": 6145,
                            "src": "14804:22:43",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 6093,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "14804:7:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 6102,
                        "initialValue": {
                          "arguments": [
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 6099,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 6097,
                                "name": "_newSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6083,
                                "src": "14865:14:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 6098,
                                "name": "_oldSharePrice",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6081,
                                "src": "14882:14:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "14865:31:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            {
                              "id": 6100,
                              "name": "_newSharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6083,
                              "src": "14914:14:43",
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
                              "id": 6095,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6079,
                              "src": "14829:7:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 6096,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "14837:10:43",
                            "memberName": "mulDivDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10414,
                            "src": "14829:18:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 6101,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "14829:113:43",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "14804:138:43"
                      },
                      {
                        "expression": {
                          "id": 6109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 6103,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9849,
                              "src": "14956:12:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 6105,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "14969:19:43",
                            "memberName": "zombieShareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4338,
                            "src": "14956:32:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "expression": {
                                "id": 6106,
                                "name": "zombieInterest",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6094,
                                "src": "14992:14:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 6107,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "15007:9:43",
                              "memberName": "toUint128",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 14311,
                              "src": "14992:24:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256) pure returns (uint128)"
                              }
                            },
                            "id": 6108,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "14992:26:43",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "src": "14956:62:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "id": 6110,
                        "nodeType": "ExpressionStatement",
                        "src": "14956:62:43"
                      },
                      {
                        "assignments": [
                          6112
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 6112,
                            "mutability": "mutable",
                            "name": "governanceZombieFeeCollected",
                            "nameLocation": "15193:28:43",
                            "nodeType": "VariableDeclaration",
                            "scope": 6145,
                            "src": "15185:36:43",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 6111,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "15185:7:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "visibility": "internal"
                          }
                        ],
                        "id": 6117,
                        "initialValue": {
                          "arguments": [
                            {
                              "id": 6115,
                              "name": "_governanceZombieFee",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9836,
                              "src": "15264:20:43",
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
                              "id": 6113,
                              "name": "zombieInterest",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6094,
                              "src": "15224:14:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 6114,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "15239:7:43",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10432,
                            "src": "15224:22:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 6116,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "15224:74:43",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "15185:113:43"
                      },
                      {
                        "expression": {
                          "id": 6120,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6118,
                            "name": "_governanceFeesAccrued",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9868,
                            "src": "15312:22:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "id": 6119,
                            "name": "governanceZombieFeeCollected",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6112,
                            "src": "15338:28:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "15312:54:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6121,
                        "nodeType": "ExpressionStatement",
                        "src": "15312:54:43"
                      },
                      {
                        "expression": {
                          "id": 6124,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6122,
                            "name": "zombieInterest",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6094,
                            "src": "15643:14:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "-=",
                          "rightHandSide": {
                            "id": 6123,
                            "name": "governanceZombieFeeCollected",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6112,
                            "src": "15661:28:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "15643:46:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6125,
                        "nodeType": "ExpressionStatement",
                        "src": "15643:46:43"
                      },
                      {
                        "expression": {
                          "id": 6132,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 6126,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9849,
                              "src": "15703:12:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 6128,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "15716:13:43",
                            "memberName": "shareReserves",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4329,
                            "src": "15703:26:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "expression": {
                                "id": 6129,
                                "name": "zombieInterest",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6094,
                                "src": "15733:14:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 6130,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "15748:9:43",
                              "memberName": "toUint128",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 14311,
                              "src": "15733:24:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                "typeString": "function (uint256) pure returns (uint128)"
                              }
                            },
                            "id": 6131,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "15733:26:43",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          },
                          "src": "15703:56:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint128",
                            "typeString": "uint128"
                          }
                        },
                        "id": 6133,
                        "nodeType": "ExpressionStatement",
                        "src": "15703:56:43"
                      },
                      {
                        "expression": {
                          "id": 6143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "expression": {
                              "id": 6134,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9849,
                              "src": "15773:12:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 6136,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "memberLocation": "15786:15:43",
                            "memberName": "shareAdjustment",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4335,
                            "src": "15773:28:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_int128",
                              "typeString": "int128"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "+=",
                          "rightHandSide": {
                            "arguments": [
                              {
                                "arguments": [],
                                "expression": {
                                  "argumentTypes": [],
                                  "expression": {
                                    "id": 6139,
                                    "name": "zombieInterest",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6094,
                                    "src": "15812:14:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 6140,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberLocation": "15827:9:43",
                                  "memberName": "toUint128",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 14311,
                                  "src": "15812:24:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$returns$_t_uint128_$attached_to$_t_uint256_$",
                                    "typeString": "function (uint256) pure returns (uint128)"
                                  }
                                },
                                "id": 6141,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "15812:26:43",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              ],
                              "id": 6138,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "15805:6:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_int128_$",
                                "typeString": "type(int128)"
                              },
                              "typeName": {
                                "id": 6137,
                                "name": "int128",
                                "nodeType": "ElementaryTypeName",
                                "src": "15805:6:43",
                                "typeDescriptions": {}
                              }
                            },
                            "id": 6142,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "15805:34:43",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_int128",
                              "typeString": "int128"
                            }
                          },
                          "src": "15773:66:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_int128",
                            "typeString": "int128"
                          }
                        },
                        "id": 6144,
                        "nodeType": "ExpressionStatement",
                        "src": "15773:66:43"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 6077,
              "nodeType": "StructuredDocumentation",
              "src": "14164:311:43",
              "text": "@dev Collect the interest earned by closed positions\n      that haven't been redeemed.\n @param _amount The amount in shares that earned the zombie interest.\n @param _oldSharePrice The share price at the time of the last checkpoint.\n @param _newSharePrice The current share price."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_collectZombieInterest",
            "nameLocation": "14489:22:43",
            "parameters": {
              "id": 6084,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6079,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "14529:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6148,
                  "src": "14521:15:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6078,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14521:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6081,
                  "mutability": "mutable",
                  "name": "_oldSharePrice",
                  "nameLocation": "14554:14:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6148,
                  "src": "14546:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6080,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14546:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6083,
                  "mutability": "mutable",
                  "name": "_newSharePrice",
                  "nameLocation": "14586:14:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6148,
                  "src": "14578:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6082,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "14578:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "14511:95:43"
            },
            "returnParameters": {
              "id": 6085,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "14616:0:43"
            },
            "scope": 6406,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6187,
            "nodeType": "FunctionDefinition",
            "src": "16125:490:43",
            "nodes": [],
            "body": {
              "id": 6186,
              "nodeType": "Block",
              "src": "16240:375:43",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    6157
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6157,
                      "mutability": "mutable",
                      "name": "longExposure",
                      "nameLocation": "16258:12:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 6186,
                      "src": "16250:20:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6156,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "16250:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6166,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 6164,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6151,
                        "src": "16329:11:43",
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
                            "expression": {
                              "id": 6160,
                              "name": "_marketState",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9849,
                              "src": "16281:12:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                                "typeString": "struct IHyperdrive.MarketState storage ref"
                              }
                            },
                            "id": 6161,
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "16294:12:43",
                            "memberName": "longExposure",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4341,
                            "src": "16281:25:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint128",
                              "typeString": "uint128"
                            }
                          ],
                          "id": 6159,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "16273:7:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": {
                            "id": 6158,
                            "name": "uint256",
                            "nodeType": "ElementaryTypeName",
                            "src": "16273:7:43",
                            "typeDescriptions": {}
                          }
                        },
                        "id": 6162,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "16273:34:43",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 6163,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16308:7:43",
                      "memberName": "divDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10450,
                      "src": "16273:42:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 6165,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "16273:77:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "16250:100:43"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6172,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 6167,
                        "name": "_marketState",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9849,
                        "src": "16364:12:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                          "typeString": "struct IHyperdrive.MarketState storage ref"
                        }
                      },
                      "id": 6168,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "16377:13:43",
                      "memberName": "shareReserves",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4329,
                      "src": "16364:26:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">",
                    "rightExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 6171,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 6169,
                        "name": "longExposure",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6157,
                        "src": "16393:12:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "id": 6170,
                        "name": "_minimumShareReserves",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9842,
                        "src": "16408:21:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "16393:36:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "16364:65:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6183,
                  "nodeType": "IfStatement",
                  "src": "16360:222:43",
                  "trueBody": {
                    "id": 6182,
                    "nodeType": "Block",
                    "src": "16431:151:43",
                    "statements": [
                      {
                        "expression": {
                          "id": 6180,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 6173,
                            "name": "idleShares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6154,
                            "src": "16445:10:43",
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
                            "id": 6179,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 6177,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "expression": {
                                  "id": 6174,
                                  "name": "_marketState",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9849,
                                  "src": "16474:12:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_MarketState_$4360_storage",
                                    "typeString": "struct IHyperdrive.MarketState storage ref"
                                  }
                                },
                                "id": 6175,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "16487:13:43",
                                "memberName": "shareReserves",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 4329,
                                "src": "16474:26:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint128",
                                  "typeString": "uint128"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "-",
                              "rightExpression": {
                                "id": 6176,
                                "name": "longExposure",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 6157,
                                "src": "16519:12:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "src": "16474:57:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "-",
                            "rightExpression": {
                              "id": 6178,
                              "name": "_minimumShareReserves",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 9842,
                              "src": "16550:21:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "16474:97:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "16445:126:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6181,
                        "nodeType": "ExpressionStatement",
                        "src": "16445:126:43"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 6184,
                    "name": "idleShares",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6154,
                    "src": "16598:10:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 6155,
                  "id": 6185,
                  "nodeType": "Return",
                  "src": "16591:17:43"
                }
              ]
            },
            "documentation": {
              "id": 6149,
              "nodeType": "StructuredDocumentation",
              "src": "15862:258:43",
              "text": "@dev Calculates the number of share reserves that are not reserved by\n      open positions.\n @param _sharePrice The current share price.\n @return idleShares The amount of shares that are available for LPs to\n         withdraw."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateIdleShareReserves",
            "nameLocation": "16134:27:43",
            "parameters": {
              "id": 6152,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6151,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "16179:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6187,
                  "src": "16171:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6150,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16171:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16161:35:43"
            },
            "returnParameters": {
              "id": 6155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6154,
                  "mutability": "mutable",
                  "name": "idleShares",
                  "nameLocation": "16228:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6187,
                  "src": "16220:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6153,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16220:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16219:20:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6242,
            "nodeType": "FunctionDefinition",
            "src": "16803:631:43",
            "nodes": [],
            "body": {
              "id": 6241,
              "nodeType": "Block",
              "src": "16915:519:43",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    6196
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6196,
                      "mutability": "mutable",
                      "name": "presentValue",
                      "nameLocation": "16933:12:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 6241,
                      "src": "16925:20:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6195,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "16925:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6211,
                  "initialValue": {
                    "condition": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 6199,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 6197,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6190,
                        "src": "16948:11:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": ">",
                      "rightExpression": {
                        "hexValue": "30",
                        "id": 6198,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "16962:1:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      },
                      "src": "16948:15:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseExpression": {
                      "hexValue": "30",
                      "id": 6209,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "17113:1:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "id": 6210,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "Conditional",
                    "src": "16948:166:43",
                    "trueExpression": {
                      "arguments": [
                        {
                          "id": 6207,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6190,
                          "src": "17086:11:43",
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
                                  "id": 6203,
                                  "name": "_sharePrice",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6190,
                                  "src": "17047:11:43",
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
                                "id": 6202,
                                "name": "_getPresentValueParams",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5948,
                                "src": "17024:22:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_struct$_PresentValueParams_$11871_memory_ptr_$",
                                  "typeString": "function (uint256) view returns (struct LPMath.PresentValueParams memory)"
                                }
                              },
                              "id": 6204,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "17024:35:43",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                                "typeString": "struct LPMath.PresentValueParams memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_struct$_PresentValueParams_$11871_memory_ptr",
                                "typeString": "struct LPMath.PresentValueParams memory"
                              }
                            ],
                            "expression": {
                              "id": 6200,
                              "name": "LPMath",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 14276,
                              "src": "16978:6:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_LPMath_$14276_$",
                                "typeString": "type(library LPMath)"
                              }
                            },
                            "id": 6201,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "17002:21:43",
                            "memberName": "calculatePresentValue",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 11900,
                            "src": "16978:45:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_struct$_PresentValueParams_$11871_memory_ptr_$returns$_t_uint256_$",
                              "typeString": "function (struct LPMath.PresentValueParams memory) pure returns (uint256)"
                            }
                          },
                          "id": 6205,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "16978:82:43",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6206,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "17078:7:43",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10432,
                        "src": "16978:107:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 6208,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "16978:120:43",
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
                  "src": "16925:189:43"
                },
                {
                  "assignments": [
                    6213
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6213,
                      "mutability": "mutable",
                      "name": "lpTotalSupply",
                      "nameLocation": "17132:13:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 6241,
                      "src": "17124:21:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6212,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "17124:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6226,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6225,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 6222,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "baseExpression": {
                          "id": 6214,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9891,
                          "src": "17148:12:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 6217,
                        "indexExpression": {
                          "expression": {
                            "id": 6215,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10382,
                            "src": "17161:7:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$10382_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 6216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "17169:12:43",
                          "memberName": "_LP_ASSET_ID",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10074,
                          "src": "17161:20:43",
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
                        "src": "17148:34:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "+",
                      "rightExpression": {
                        "baseExpression": {
                          "id": 6218,
                          "name": "_totalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9891,
                          "src": "17197:12:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 6221,
                        "indexExpression": {
                          "expression": {
                            "id": 6219,
                            "name": "AssetId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10382,
                            "src": "17210:7:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_AssetId_$10382_$",
                              "typeString": "type(library AssetId)"
                            }
                          },
                          "id": 6220,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "17218:26:43",
                          "memberName": "_WITHDRAWAL_SHARE_ASSET_ID",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10083,
                          "src": "17210:34:43",
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
                        "src": "17197:48:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "17148:97:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "expression": {
                        "id": 6223,
                        "name": "_withdrawPool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9853,
                        "src": "17260:13:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_WithdrawPool_$4371_storage",
                          "typeString": "struct IHyperdrive.WithdrawPool storage ref"
                        }
                      },
                      "id": 6224,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "17274:15:43",
                      "memberName": "readyToWithdraw",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4367,
                      "src": "17260:29:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint128",
                        "typeString": "uint128"
                      }
                    },
                    "src": "17148:141:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "17124:165:43"
                },
                {
                  "expression": {
                    "id": 6237,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6227,
                      "name": "lpSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6193,
                      "src": "17299:12:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "condition": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 6230,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 6228,
                          "name": "lpTotalSupply",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6213,
                          "src": "17314:13:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "hexValue": "30",
                          "id": 6229,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "17331:1:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "17314:18:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseExpression": {
                        "arguments": [
                          {
                            "id": 6234,
                            "name": "lpTotalSupply",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6213,
                            "src": "17384:13:43",
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
                            "id": 6232,
                            "name": "presentValue",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6196,
                            "src": "17363:12:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 6233,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "17376:7:43",
                          "memberName": "divDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10450,
                          "src": "17363:20:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 6235,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "17363:35:43",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 6236,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "Conditional",
                      "src": "17314:84:43",
                      "trueExpression": {
                        "hexValue": "30",
                        "id": 6231,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "17347:1:43",
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
                    "src": "17299:99:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6238,
                  "nodeType": "ExpressionStatement",
                  "src": "17299:99:43"
                },
                {
                  "expression": {
                    "id": 6239,
                    "name": "lpSharePrice",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 6193,
                    "src": "17415:12:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 6194,
                  "id": 6240,
                  "nodeType": "Return",
                  "src": "17408:19:43"
                }
              ]
            },
            "documentation": {
              "id": 6188,
              "nodeType": "StructuredDocumentation",
              "src": "16621:177:43",
              "text": "@dev Calculates the LP share price.\n @param _sharePrice The current vault share price.\n @return lpSharePrice The LP share price in units of (base / lp shares)."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateLPSharePrice",
            "nameLocation": "16812:22:43",
            "parameters": {
              "id": 6191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6190,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "16852:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6242,
                  "src": "16844:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6189,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16844:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16834:35:43"
            },
            "returnParameters": {
              "id": 6194,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6193,
                  "mutability": "mutable",
                  "name": "lpSharePrice",
                  "nameLocation": "16901:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6242,
                  "src": "16893:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6192,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "16893:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "16892:22:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6283,
            "nodeType": "FunctionDefinition",
            "src": "17979:1503:43",
            "nodes": [],
            "body": {
              "id": 6282,
              "nodeType": "Block",
              "src": "18176:1306:43",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 6273,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6256,
                      "name": "curveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6252,
                      "src": "19104:8:43",
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
                          "id": 6271,
                          "name": "_shareAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6245,
                          "src": "19234:12:43",
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
                              "id": 6268,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6249,
                              "src": "19200:11:43",
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
                                  "id": 6265,
                                  "name": "_curveFee",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9827,
                                  "src": "19168:9:43",
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
                                      "id": 6262,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "arguments": [
                                          {
                                            "id": 6259,
                                            "name": "_spotPrice",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6247,
                                            "src": "19128:10:43",
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
                                            "id": 6257,
                                            "name": "ONE",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 10389,
                                            "src": "19116:3:43",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          },
                                          "id": 6258,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "memberLocation": "19120:7:43",
                                          "memberName": "divDown",
                                          "nodeType": "MemberAccess",
                                          "referencedDeclaration": 10450,
                                          "src": "19116:11:43",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                                          }
                                        },
                                        "id": 6260,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "nameLocations": [],
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "19116:23:43",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "-",
                                      "rightExpression": {
                                        "id": 6261,
                                        "name": "ONE",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 10389,
                                        "src": "19142:3:43",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "src": "19116:29:43",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    }
                                  ],
                                  "id": 6263,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "19115:31:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 6264,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "19160:7:43",
                                "memberName": "mulDown",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 10432,
                                "src": "19115:52:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 6266,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "19115:63:43",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 6267,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "19192:7:43",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10432,
                            "src": "19115:84:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 6269,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "19115:97:43",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6270,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19226:7:43",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10432,
                        "src": "19115:118:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 6272,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19115:132:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "19104:143:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6274,
                  "nodeType": "ExpressionStatement",
                  "src": "19104:143:43"
                },
                {
                  "expression": {
                    "id": 6280,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6275,
                      "name": "governanceCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6254,
                      "src": "19420:18:43",
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
                          "id": 6278,
                          "name": "_governanceLPFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9833,
                          "src": "19458:16:43",
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
                          "id": 6276,
                          "name": "curveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6252,
                          "src": "19441:8:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6277,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "19450:7:43",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10432,
                        "src": "19441:16:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 6279,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "19441:34:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "19420:55:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6281,
                  "nodeType": "ExpressionStatement",
                  "src": "19420:55:43"
                }
              ]
            },
            "documentation": {
              "id": 6243,
              "nodeType": "StructuredDocumentation",
              "src": "17440:534:43",
              "text": "@dev Calculates the fees that go to the LPs and governance.\n @param _shareAmount The amount of shares exchanged for bonds.\n @param _spotPrice The price without slippage of bonds in terms of base\n         (base/bonds).\n @param _sharePrice The current price of shares in terms of base\n        (base/shares).\n @return curveFee The curve fee. The fee is in terms of bonds.\n @return governanceCurveFee The curve fee that goes to governance. The\n         fee is in terms of bonds."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateFeesGivenShares",
            "nameLocation": "17988:25:43",
            "parameters": {
              "id": 6250,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6245,
                  "mutability": "mutable",
                  "name": "_shareAmount",
                  "nameLocation": "18031:12:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6283,
                  "src": "18023:20:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6244,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18023:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6247,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "18061:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6283,
                  "src": "18053:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6246,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18053:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6249,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "18089:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6283,
                  "src": "18081:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6248,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18081:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18013:93:43"
            },
            "returnParameters": {
              "id": 6255,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6252,
                  "mutability": "mutable",
                  "name": "curveFee",
                  "nameLocation": "18138:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6283,
                  "src": "18130:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6251,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18130:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6254,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "18156:18:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6283,
                  "src": "18148:26:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6253,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "18148:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "18129:46:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6353,
            "nodeType": "FunctionDefinition",
            "src": "20173:2413:43",
            "nodes": [],
            "body": {
              "id": 6352,
              "nodeType": "Block",
              "src": "20541:2045:43",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 6317,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6303,
                      "name": "curveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6295,
                      "src": "21199:8:43",
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
                          "id": 6314,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6288,
                          "src": "21317:24:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 6315,
                          "name": "_sharePrice",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6292,
                          "src": "21343:11:43",
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
                          "arguments": [
                            {
                              "id": 6311,
                              "name": "_bondAmount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6286,
                              "src": "21280:11:43",
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
                                  "id": 6308,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "id": 6306,
                                    "name": "ONE",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 10389,
                                    "src": "21241:3:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "-",
                                  "rightExpression": {
                                    "id": 6307,
                                    "name": "_spotPrice",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6290,
                                    "src": "21247:10:43",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "src": "21241:16:43",
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
                                  "id": 6304,
                                  "name": "_curveFee",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 9827,
                                  "src": "21210:9:43",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 6305,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "21233:7:43",
                                "memberName": "mulDown",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 10432,
                                "src": "21210:30:43",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                                  "typeString": "function (uint256,uint256) pure returns (uint256)"
                                }
                              },
                              "id": 6309,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "21210:48:43",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 6310,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "21272:7:43",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10432,
                            "src": "21210:69:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 6312,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "21210:82:43",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6313,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21306:10:43",
                        "memberName": "mulDivDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10414,
                        "src": "21210:106:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 6316,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "21210:145:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "21199:156:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6318,
                  "nodeType": "ExpressionStatement",
                  "src": "21199:156:43"
                },
                {
                  "expression": {
                    "id": 6324,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6319,
                      "name": "governanceCurveFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6299,
                      "src": "21540:18:43",
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
                          "id": 6322,
                          "name": "_governanceLPFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9833,
                          "src": "21578:16:43",
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
                          "id": 6320,
                          "name": "curveFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6295,
                          "src": "21561:8:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6321,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "21570:7:43",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10432,
                        "src": "21561:16:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 6323,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "21561:34:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "21540:55:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6325,
                  "nodeType": "ExpressionStatement",
                  "src": "21540:55:43"
                },
                {
                  "assignments": [
                    6327
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 6327,
                      "mutability": "mutable",
                      "name": "flat",
                      "nameLocation": "22044:4:43",
                      "nodeType": "VariableDeclaration",
                      "scope": 6352,
                      "src": "22036:12:43",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 6326,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "22036:7:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 6335,
                  "initialValue": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 6332,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "id": 6330,
                          "name": "ONE",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10389,
                          "src": "22087:3:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "id": 6331,
                          "name": "_normalizedTimeRemaining",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6288,
                          "src": "22093:24:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "22087:30:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 6333,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6292,
                        "src": "22131:11:43",
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
                        "id": 6328,
                        "name": "_bondAmount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6286,
                        "src": "22051:11:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 6329,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "22063:10:43",
                      "memberName": "mulDivDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10414,
                      "src": "22051:22:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 6334,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "22051:101:43",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "22036:116:43"
                },
                {
                  "expression": {
                    "id": 6341,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6336,
                      "name": "flatFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6297,
                      "src": "22162:7:43",
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
                          "id": 6339,
                          "name": "_flatFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 9830,
                          "src": "22185:8:43",
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
                          "id": 6337,
                          "name": "flat",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6327,
                          "src": "22172:4:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 6338,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "22177:7:43",
                        "memberName": "mulDown",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 10432,
                        "src": "22172:12:43",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                          "typeString": "function (uint256,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 6340,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "22172:22:43",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "22162:32:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6342,
                  "nodeType": "ExpressionStatement",
                  "src": "22162:32:43"
                },
                {
                  "expression": {
                    "id": 6350,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 6343,
                      "name": "totalGovernanceFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6301,
                      "src": "22480:18:43",
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
                      "id": 6349,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "id": 6344,
                        "name": "governanceCurveFee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6299,
                        "src": "22513:18:43",
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
                            "id": 6347,
                            "name": "_governanceLPFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 9833,
                            "src": "22562:16:43",
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
                            "id": 6345,
                            "name": "flatFee",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6297,
                            "src": "22546:7:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "id": 6346,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "22554:7:43",
                          "memberName": "mulDown",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10432,
                          "src": "22546:15:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                            "typeString": "function (uint256,uint256) pure returns (uint256)"
                          }
                        },
                        "id": 6348,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "22546:33:43",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "22513:66:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "22480:99:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6351,
                  "nodeType": "ExpressionStatement",
                  "src": "22480:99:43"
                }
              ]
            },
            "documentation": {
              "id": 6284,
              "nodeType": "StructuredDocumentation",
              "src": "19488:680:43",
              "text": "@dev Calculates the fees that go to the LPs and governance.\n @param _bondAmount The amount of bonds being exchanged for shares.\n @param _normalizedTimeRemaining The normalized amount of time until maturity.\n @param _spotPrice The price without slippage of bonds in terms of base\n        (base/bonds).\n @param _sharePrice The current price of shares in terms of base (base/shares).\n @return curveFee The curve fee. The fee is in terms of shares.\n @return flatFee The flat fee. The fee is in terms of shares.\n @return governanceCurveFee The curve fee that goes to governance. The\n         fee is in terms of shares."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_calculateFeesGivenBonds",
            "nameLocation": "20182:24:43",
            "parameters": {
              "id": 6293,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6286,
                  "mutability": "mutable",
                  "name": "_bondAmount",
                  "nameLocation": "20224:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "20216:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6285,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20216:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6288,
                  "mutability": "mutable",
                  "name": "_normalizedTimeRemaining",
                  "nameLocation": "20253:24:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "20245:32:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6287,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20245:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6290,
                  "mutability": "mutable",
                  "name": "_spotPrice",
                  "nameLocation": "20295:10:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "20287:18:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6289,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20287:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6292,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "20323:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "20315:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6291,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20315:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20206:134:43"
            },
            "returnParameters": {
              "id": 6302,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6295,
                  "mutability": "mutable",
                  "name": "curveFee",
                  "nameLocation": "20409:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "20401:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6294,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20401:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6297,
                  "mutability": "mutable",
                  "name": "flatFee",
                  "nameLocation": "20439:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "20431:15:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6296,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20431:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6299,
                  "mutability": "mutable",
                  "name": "governanceCurveFee",
                  "nameLocation": "20468:18:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "20460:26:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6298,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20460:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6301,
                  "mutability": "mutable",
                  "name": "totalGovernanceFee",
                  "nameLocation": "20508:18:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6353,
                  "src": "20500:26:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6300,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "20500:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "20387:149:43"
            },
            "scope": 6406,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6379,
            "nodeType": "FunctionDefinition",
            "src": "22900:315:43",
            "nodes": [],
            "body": {
              "id": 6378,
              "nodeType": "Block",
              "src": "23073:142:43",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 6366,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6361,
                      "src": "23087:8:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 6367,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "23096:6:43",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 4508,
                    "src": "23087:15:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 6376,
                    "nodeType": "Block",
                    "src": "23149:60:43",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 6373,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6358,
                              "src": "23186:11:43",
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
                              "id": 6371,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6356,
                              "src": "23170:7:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 6372,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "23178:7:43",
                            "memberName": "mulDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10432,
                            "src": "23170:15:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 6374,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "23170:28:43",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 6365,
                        "id": 6375,
                        "nodeType": "Return",
                        "src": "23163:35:43"
                      }
                    ]
                  },
                  "id": 6377,
                  "nodeType": "IfStatement",
                  "src": "23083:126:43",
                  "trueBody": {
                    "id": 6370,
                    "nodeType": "Block",
                    "src": "23104:39:43",
                    "statements": [
                      {
                        "expression": {
                          "id": 6368,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6356,
                          "src": "23125:7:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 6365,
                        "id": 6369,
                        "nodeType": "Return",
                        "src": "23118:14:43"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 6354,
              "nodeType": "StructuredDocumentation",
              "src": "22592:303:43",
              "text": "@dev Converts input to base if necessary according to what is specified\n      in options.\n @param _amount The amount to convert.\n @param _sharePrice The current share price.\n @param _options The options that configure the conversion.\n @return The converted amount."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_convertToBaseFromOption",
            "nameLocation": "22909:24:43",
            "parameters": {
              "id": 6362,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6356,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "22951:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6379,
                  "src": "22943:15:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6355,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22943:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6358,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "22976:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6379,
                  "src": "22968:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6357,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "22968:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6361,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "23026:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6379,
                  "src": "22997:37:43",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 6360,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6359,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "22997:11:43",
                        "23009:7:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4512,
                      "src": "22997:19:43"
                    },
                    "referencedDeclaration": 4512,
                    "src": "22997:19:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$4512_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "22933:107:43"
            },
            "returnParameters": {
              "id": 6365,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6364,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6379,
                  "src": "23064:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6363,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23064:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23063:9:43"
            },
            "scope": 6406,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 6405,
            "nodeType": "FunctionDefinition",
            "src": "23499:315:43",
            "nodes": [],
            "body": {
              "id": 6404,
              "nodeType": "Block",
              "src": "23672:142:43",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 6392,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6387,
                      "src": "23686:8:43",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 6393,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "23695:6:43",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 4508,
                    "src": "23686:15:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 6402,
                    "nodeType": "Block",
                    "src": "23748:60:43",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 6399,
                              "name": "_sharePrice",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6384,
                              "src": "23785:11:43",
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
                              "id": 6397,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6382,
                              "src": "23769:7:43",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "id": 6398,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "23777:7:43",
                            "memberName": "divDown",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 10450,
                            "src": "23769:15:43",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                              "typeString": "function (uint256,uint256) pure returns (uint256)"
                            }
                          },
                          "id": 6400,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "23769:28:43",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 6391,
                        "id": 6401,
                        "nodeType": "Return",
                        "src": "23762:35:43"
                      }
                    ]
                  },
                  "id": 6403,
                  "nodeType": "IfStatement",
                  "src": "23682:126:43",
                  "trueBody": {
                    "id": 6396,
                    "nodeType": "Block",
                    "src": "23703:39:43",
                    "statements": [
                      {
                        "expression": {
                          "id": 6394,
                          "name": "_amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6382,
                          "src": "23724:7:43",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "functionReturnParameters": 6391,
                        "id": 6395,
                        "nodeType": "Return",
                        "src": "23717:14:43"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": {
              "id": 6380,
              "nodeType": "StructuredDocumentation",
              "src": "23221:273:43",
              "text": "@dev Converts input to what is specified in the options from base.\n @param _amount The amount to convert.\n @param _sharePrice The current share price.\n @param _options The options that configure the conversion.\n @return The converted amount."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_convertToOptionFromBase",
            "nameLocation": "23508:24:43",
            "parameters": {
              "id": 6388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6382,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "23550:7:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6405,
                  "src": "23542:15:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6381,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23542:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6384,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "23575:11:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6405,
                  "src": "23567:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6383,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23567:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6387,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "23625:8:43",
                  "nodeType": "VariableDeclaration",
                  "scope": 6405,
                  "src": "23596:37:43",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 6386,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 6385,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "23596:11:43",
                        "23608:7:43"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4512,
                      "src": "23596:19:43"
                    },
                    "referencedDeclaration": 4512,
                    "src": "23596:19:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$4512_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23532:107:43"
            },
            "returnParameters": {
              "id": 6391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6390,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 6405,
                  "src": "23663:7:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 6389,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "23663:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "23662:9:43"
            },
            "scope": 6406,
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 5485,
              "name": "HyperdriveStorage",
              "nameLocations": [
                "995:17:43"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10066,
              "src": "995:17:43"
            },
            "id": 5486,
            "nodeType": "InheritanceSpecifier",
            "src": "995:17:43"
          }
        ],
        "canonicalName": "HyperdriveBase",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 5484,
          "nodeType": "StructuredDocumentation",
          "src": "531:428:43",
          "text": "@author DELV\n @title HyperdriveBase\n @notice The Hyperdrive base contract that provides a set of helper methods\n         and defines the functions that must be overridden by implementations.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          6406,
          10066,
          63914
        ],
        "name": "HyperdriveBase",
        "nameLocation": "977:14:43",
        "scope": 6407,
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
  "id": 43
} as const;
