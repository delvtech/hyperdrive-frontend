export const ERC4626Base = 
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"__pool\":\"The ERC4626 compatible yield source.\"}}},\"stateVariables\":{\"_isSweepable\":{\"details\":\"A mapping from addresses to their status as a sweep target. This      mapping does not change after construction.\"},\"_pool\":{\"details\":\"The yield source contract for this hyperdrive.\"}},\"title\":\"ERC4626Base\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates the ERC4626 Hyperdrive base contract.\"}},\"notice\":\"The base contract for the ERC4626 Hyperdrive implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/ERC4626Base.sol\":\"ERC4626Base\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/instances/ERC4626Base.sol\":{\"keccak256\":\"0xc5e11f70a3e769fd322e4f02858a46f92c8434623a9af5c2454e0efba7fd9e7f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://658dd5495159b0e0c00d5d9b6ac8bd7b699cfbf0f429b3c6fdd6b8505010ce37\",\"dweb:/ipfs/QmSVi7t74sawCx4AqA1Mr9zLLps8R8vGbqfkTs4V9jVjgx\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xe7076ded0fe36ac72c946258bc3183bebb6f1567cd0ce5d55720de84988f5312\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b84d02ec55ccbee1491ce25a2b890e7c371dd251cb69c2cc818179e49ddef780\",\"dweb:/ipfs/QmcXWYPF2Hy6w3TLqmegYiUj5pL9i9PqH44USV4Px9sk2k\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0xcea74eaf829d241754f74a8c2223fef0ec83459252d2aaedcd860bae538620c9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://464f58076e112b73957147b2abb52c85b1b806b306fa2d490d0e74f993ffe5a8\",\"dweb:/ipfs/QmNf3EACwEDsB7X1G1geLeqenR1xJHd9zGvSeZJ9f2nSmp\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0xa63f6d3d8b87fcf27202f4ea8609762ef695b9919e4907522930738eb2dcde7e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db88312fa9fed33207e1974d91f714ed8cbbe4a4a1d0e54a6ee5c15a8949f4fb\",\"dweb:/ipfs/QmSYCCuc6Xkh6oibhW5ovdQRhvT5nV4Hxj3Q2xEhjzYyWE\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0xf62872798e8bb605416caed4df67bc933e7df0ac28db4a14104a481584ad7787\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0d4650a2428a4b5eb302c1e2c596f4ae4358be4ea098694152e7223aa6a579d8\",\"dweb:/ipfs/QmYoopLx1zWyXKEt7bzCVSpQPHTbtDQRoc3yJ7kqThThYw\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x402cde9d7823ea9762f43ce326703c64c441c5feb278bedcb9e1401d0a8b733b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e12e56585cf119a544a5382df36d725daf89a21660663d1e6dd9de839fc8ff17\",\"dweb:/ipfs/QmNSyGK8eagodGUUPniBptVyC9by2n9Ff3PUxF4FHNQYXc\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0xb9ab7ab09e4e95f5e187418921f41f3b6d652c5a0889624b660495491ffc4148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7a05317c1fd4996fece6de20a672006163f31f9ae32fa23a855bbe8e89f573f2\",\"dweb:/ipfs/Qmf5kG78Za6KjSyRXeE8dFqdAE4T3BxhRQUXFKUkuuGGqK\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xe150223822098026c7ce734cd68848e45b47b92b024d34bc25886e9c6af6ec67\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6590e590f4af53d55e81e06ba8d53346cfce71ce1fa8d1833141f273d74c8a8f\",\"dweb:/ipfs/QmTM582joUpK7KBDWvwWEBi4XT3Qt9x8VLkhwPYj8Qu93o\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xd87293bc10dfe09707a042bf05091baf40ba344bdca141bd99b62256a7611817\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8f6eadd454c6671c26bd22095c31a3bbaea7083df9aa6548dbaba32a4907e336\",\"dweb:/ipfs/QmY1jMW9DuAk9CSfVS6MsG5onqjZHKzdBrv2TcHvj9yKj4\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x077931150bcba5b99dedcd9038f3fbeef9c9230046dc4649c457d75d4be32a5c\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://2a48e4046f7ae8acb965d0f8d79767f4f4c70c1a6a8d3cf635482587412d33fd\",\"dweb:/ipfs/QmcY8FbffppqTMBiMwniXG9R8i8eQoVJuLqqTXgpuiXyUr\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x2f9511684820be7510155adfe3c2c2ef7e2583472946bae37f379bac801fc263\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7e9a84e4168448e3320a6682c8ba248c8b51757df173b86507e9aba4b6167247\",\"dweb:/ipfs/QmSonetYBP22Fnc8HrcaTxAA1Zg2PCR5ptPiEp22sA77Ka\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
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
        "methods": {
          "constructor": {
            "params": {
              "__pool": "The ERC4626 compatible yield source."
            }
          }
        },
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {
          "constructor": {
            "notice": "Instantiates the ERC4626 Hyperdrive base contract."
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
        "contracts/src/instances/ERC4626Base.sol": "ERC4626Base"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/instances/ERC4626Base.sol": {
        "keccak256": "0xc5e11f70a3e769fd322e4f02858a46f92c8434623a9af5c2454e0efba7fd9e7f",
        "urls": [
          "bzz-raw://658dd5495159b0e0c00d5d9b6ac8bd7b699cfbf0f429b3c6fdd6b8505010ce37",
          "dweb:/ipfs/QmSVi7t74sawCx4AqA1Mr9zLLps8R8vGbqfkTs4V9jVjgx"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4",
        "urls": [
          "bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36",
          "dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626.sol": {
        "keccak256": "0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf",
        "urls": [
          "bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc",
          "dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia"
        ],
        "license": "GPL-2.0-or-later"
      },
      "contracts/src/interfaces/IERC4626Hyperdrive.sol": {
        "keccak256": "0xe7076ded0fe36ac72c946258bc3183bebb6f1567cd0ce5d55720de84988f5312",
        "urls": [
          "bzz-raw://b84d02ec55ccbee1491ce25a2b890e7c371dd251cb69c2cc818179e49ddef780",
          "dweb:/ipfs/QmcXWYPF2Hy6w3TLqmegYiUj5pL9i9PqH44USV4Px9sk2k"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626HyperdriveCore.sol": {
        "keccak256": "0xcea74eaf829d241754f74a8c2223fef0ec83459252d2aaedcd860bae538620c9",
        "urls": [
          "bzz-raw://464f58076e112b73957147b2abb52c85b1b806b306fa2d490d0e74f993ffe5a8",
          "dweb:/ipfs/QmNf3EACwEDsB7X1G1geLeqenR1xJHd9zGvSeZJ9f2nSmp"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626HyperdriveRead.sol": {
        "keccak256": "0xa63f6d3d8b87fcf27202f4ea8609762ef695b9919e4907522930738eb2dcde7e",
        "urls": [
          "bzz-raw://db88312fa9fed33207e1974d91f714ed8cbbe4a4a1d0e54a6ee5c15a8949f4fb",
          "dweb:/ipfs/QmSYCCuc6Xkh6oibhW5ovdQRhvT5nV4Hxj3Q2xEhjzYyWE"
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
      "lib/solmate/src/tokens/ERC20.sol": {
        "keccak256": "0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10",
        "urls": [
          "bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35",
          "dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/ReentrancyGuard.sol": {
        "keccak256": "0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01",
        "urls": [
          "bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800",
          "dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j"
        ],
        "license": "AGPL-3.0-only"
      },
      "lib/solmate/src/utils/SafeTransferLib.sol": {
        "keccak256": "0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a",
        "urls": [
          "bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4",
          "dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU"
        ],
        "license": "AGPL-3.0-only"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/instances/ERC4626Base.sol",
    "id": 2847,
    "exportedSymbols": {
      "ERC20": [
        63690
      ],
      "ERC4626Base": [
        2846
      ],
      "FixedPointMath": [
        11134
      ],
      "HyperdriveBase": [
        6406
      ],
      "IERC4626": [
        4097
      ],
      "IERC4626Hyperdrive": [
        4112
      ],
      "IHyperdrive": [
        4675
      ],
      "ONE": [
        10389
      ],
      "SafeTransferLib": [
        63999
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:5452:7",
    "nodes": [
      {
        "id": 2629,
        "nodeType": "PragmaDirective",
        "src": "39:23:7",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 2631,
        "nodeType": "ImportDirective",
        "src": "64:49:7",
        "nodes": [],
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "file": "solmate/tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2847,
        "sourceUnit": 63691,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2630,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63690,
              "src": "73:5:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2633,
        "nodeType": "ImportDirective",
        "src": "114:68:7",
        "nodes": [],
        "absolutePath": "lib/solmate/src/utils/SafeTransferLib.sol",
        "file": "solmate/utils/SafeTransferLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2847,
        "sourceUnit": 64000,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2632,
              "name": "SafeTransferLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 63999,
              "src": "123:15:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2635,
        "nodeType": "ImportDirective",
        "src": "183:54:7",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626.sol",
        "file": "../interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2847,
        "sourceUnit": 4098,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2634,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4097,
              "src": "192:8:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2637,
        "nodeType": "ImportDirective",
        "src": "238:60:7",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2847,
        "sourceUnit": 4676,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2636,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4675,
              "src": "247:11:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2639,
        "nodeType": "ImportDirective",
        "src": "299:74:7",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626Hyperdrive.sol",
        "file": "../interfaces/IERC4626Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2847,
        "sourceUnit": 4113,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2638,
              "name": "IERC4626Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 4112,
              "src": "308:18:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2641,
        "nodeType": "ImportDirective",
        "src": "374:64:7",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
        "file": "../internal/HyperdriveBase.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2847,
        "sourceUnit": 6407,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2640,
              "name": "HyperdriveBase",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 6406,
              "src": "383:14:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2644,
        "nodeType": "ImportDirective",
        "src": "439:70:7",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2847,
        "sourceUnit": 11135,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2642,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 11134,
              "src": "448:14:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 2643,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10389,
              "src": "464:3:7",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2846,
        "nodeType": "ContractDefinition",
        "src": "848:4642:7",
        "nodes": [
          {
            "id": 2650,
            "nodeType": "UsingForDirective",
            "src": "902:33:7",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 2648,
              "name": "FixedPointMath",
              "nameLocations": [
                "908:14:7"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 11134,
              "src": "908:14:7"
            },
            "typeName": {
              "id": 2649,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "927:7:7",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 2654,
            "nodeType": "UsingForDirective",
            "src": "940:32:7",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 2651,
              "name": "SafeTransferLib",
              "nameLocations": [
                "946:15:7"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 63999,
              "src": "946:15:7"
            },
            "typeName": {
              "id": 2653,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 2652,
                "name": "ERC20",
                "nameLocations": [
                  "966:5:7"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 63690,
                "src": "966:5:7"
              },
              "referencedDeclaration": 63690,
              "src": "966:5:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$63690",
                "typeString": "contract ERC20"
              }
            }
          },
          {
            "id": 2658,
            "nodeType": "VariableDeclaration",
            "src": "1038:33:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 2655,
              "nodeType": "StructuredDocumentation",
              "src": "978:55:7",
              "text": "@dev The yield source contract for this hyperdrive."
            },
            "mutability": "immutable",
            "name": "_pool",
            "nameLocation": "1066:5:7",
            "scope": 2846,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC4626_$4097",
              "typeString": "contract IERC4626"
            },
            "typeName": {
              "id": 2657,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 2656,
                "name": "IERC4626",
                "nameLocations": [
                  "1038:8:7"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4097,
                "src": "1038:8:7"
              },
              "referencedDeclaration": 4097,
              "src": "1038:8:7",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC4626_$4097",
                "typeString": "contract IERC4626"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 2663,
            "nodeType": "VariableDeclaration",
            "src": "1213:62:7",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 2659,
              "nodeType": "StructuredDocumentation",
              "src": "1078:130:7",
              "text": "@dev A mapping from addresses to their status as a sweep target. This\n      mapping does not change after construction."
            },
            "mutability": "mutable",
            "name": "_isSweepable",
            "nameLocation": "1263:12:7",
            "scope": 2846,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 2662,
              "keyName": "target",
              "keyNameLocation": "1229:6:7",
              "keyType": {
                "id": 2660,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1221:7:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1213:40:7",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueName": "canSweep",
              "valueNameLocation": "1244:8:7",
              "valueType": {
                "id": 2661,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1239:4:7",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 2675,
            "nodeType": "FunctionDefinition",
            "src": "1408:102:7",
            "nodes": [],
            "body": {
              "id": 2674,
              "nodeType": "Block",
              "src": "1437:73:7",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 2672,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2670,
                      "name": "_pool",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2658,
                      "src": "1489:5:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC4626_$4097",
                        "typeString": "contract IERC4626"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2671,
                      "name": "__pool",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2667,
                      "src": "1497:6:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC4626_$4097",
                        "typeString": "contract IERC4626"
                      }
                    },
                    "src": "1489:14:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$4097",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "id": 2673,
                  "nodeType": "ExpressionStatement",
                  "src": "1489:14:7"
                }
              ]
            },
            "documentation": {
              "id": 2664,
              "nodeType": "StructuredDocumentation",
              "src": "1282:121:7",
              "text": "@notice Instantiates the ERC4626 Hyperdrive base contract.\n @param __pool The ERC4626 compatible yield source."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 2668,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2667,
                  "mutability": "mutable",
                  "name": "__pool",
                  "nameLocation": "1429:6:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 2675,
                  "src": "1420:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$4097",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 2666,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2665,
                      "name": "IERC4626",
                      "nameLocations": [
                        "1420:8:7"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4097,
                      "src": "1420:8:7"
                    },
                    "referencedDeclaration": 4097,
                    "src": "1420:8:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$4097",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1419:17:7"
            },
            "returnParameters": {
              "id": 2669,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1437:0:7"
            },
            "scope": 2846,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 2761,
            "nodeType": "FunctionDefinition",
            "src": "2227:1135:7",
            "nodes": [],
            "body": {
              "id": 2760,
              "nodeType": "Block",
              "src": "2392:970:7",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 2689,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2681,
                      "src": "2406:8:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 2690,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2415:6:7",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 4508,
                    "src": "2406:15:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 2753,
                    "nodeType": "Block",
                    "src": "2846:471:7",
                    "statements": [
                      {
                        "expression": {
                          "id": 2735,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2733,
                            "name": "sharesMinted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2685,
                            "src": "3068:12:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 2734,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2678,
                            "src": "3083:7:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3068:22:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2736,
                        "nodeType": "ExpressionStatement",
                        "src": "3068:22:7"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 2744,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "3221:3:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 2745,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3225:6:7",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "3221:10:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 2748,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "3257:4:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC4626Base_$2846",
                                    "typeString": "contract ERC4626Base"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ERC4626Base_$2846",
                                    "typeString": "contract ERC4626Base"
                                  }
                                ],
                                "id": 2747,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3249:7:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 2746,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3249:7:7",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 2749,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3249:13:7",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 2750,
                              "name": "sharesMinted",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2685,
                              "src": "3280:12:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
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
                                      "id": 2740,
                                      "name": "_pool",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2658,
                                      "src": "3179:5:7",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$4097",
                                        "typeString": "contract IERC4626"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC4626_$4097",
                                        "typeString": "contract IERC4626"
                                      }
                                    ],
                                    "id": 2739,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3171:7:7",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 2738,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3171:7:7",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 2741,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3171:14:7",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 2737,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63690,
                                "src": "3165:5:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$63690_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 2742,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3165:21:7",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$63690",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 2743,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3187:16:7",
                            "memberName": "safeTransferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 63958,
                            "src": "3165:38:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$63690_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$63690_$",
                              "typeString": "function (contract ERC20,address,address,uint256)"
                            }
                          },
                          "id": 2751,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3165:141:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2752,
                        "nodeType": "ExpressionStatement",
                        "src": "3165:141:7"
                      }
                    ]
                  },
                  "id": 2754,
                  "nodeType": "IfStatement",
                  "src": "2402:915:7",
                  "trueBody": {
                    "id": 2732,
                    "nodeType": "Block",
                    "src": "2423:417:7",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 2698,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "2550:3:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 2699,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2554:6:7",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "2550:10:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 2702,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "2586:4:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC4626Base_$2846",
                                    "typeString": "contract ERC4626Base"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ERC4626Base_$2846",
                                    "typeString": "contract ERC4626Base"
                                  }
                                ],
                                "id": 2701,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2578:7:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 2700,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2578:7:7",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 2703,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2578:13:7",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 2704,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2678,
                              "src": "2609:7:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
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
                                      "id": 2694,
                                      "name": "_baseToken",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9815,
                                      "src": "2503:10:7",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$3872",
                                        "typeString": "contract IERC20"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC20_$3872",
                                        "typeString": "contract IERC20"
                                      }
                                    ],
                                    "id": 2693,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2495:7:7",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 2692,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2495:7:7",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 2695,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2495:19:7",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 2691,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63690,
                                "src": "2489:5:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$63690_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 2696,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2489:26:7",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$63690",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 2697,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2516:16:7",
                            "memberName": "safeTransferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 63958,
                            "src": "2489:43:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$63690_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$63690_$",
                              "typeString": "function (contract ERC20,address,address,uint256)"
                            }
                          },
                          "id": 2705,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2489:141:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2706,
                        "nodeType": "ExpressionStatement",
                        "src": "2489:141:7"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 2716,
                                  "name": "_pool",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2658,
                                  "src": "2747:5:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IERC4626_$4097",
                                    "typeString": "contract IERC4626"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IERC4626_$4097",
                                    "typeString": "contract IERC4626"
                                  }
                                ],
                                "id": 2715,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2739:7:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 2714,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2739:7:7",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 2717,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2739:14:7",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 2718,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2678,
                              "src": "2755:7:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
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
                                      "id": 2710,
                                      "name": "_baseToken",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9815,
                                      "src": "2714:10:7",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$3872",
                                        "typeString": "contract IERC20"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC20_$3872",
                                        "typeString": "contract IERC20"
                                      }
                                    ],
                                    "id": 2709,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2706:7:7",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 2708,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2706:7:7",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 2711,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2706:19:7",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 2707,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63690,
                                "src": "2700:5:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$63690_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 2712,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2700:26:7",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$63690",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 2713,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2727:11:7",
                            "memberName": "safeApprove",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 63998,
                            "src": "2700:38:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$63690_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$63690_$",
                              "typeString": "function (contract ERC20,address,uint256)"
                            }
                          },
                          "id": 2719,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2700:63:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2720,
                        "nodeType": "ExpressionStatement",
                        "src": "2700:63:7"
                      },
                      {
                        "expression": {
                          "id": 2730,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2721,
                            "name": "sharesMinted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2685,
                            "src": "2777:12:7",
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
                                "id": 2724,
                                "name": "_amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2678,
                                "src": "2806:7:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 2727,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "2823:4:7",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_ERC4626Base_$2846",
                                      "typeString": "contract ERC4626Base"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ERC4626Base_$2846",
                                      "typeString": "contract ERC4626Base"
                                    }
                                  ],
                                  "id": 2726,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2815:7:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 2725,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2815:7:7",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 2728,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2815:13:7",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "id": 2722,
                                "name": "_pool",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2658,
                                "src": "2792:5:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC4626_$4097",
                                  "typeString": "contract IERC4626"
                                }
                              },
                              "id": 2723,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2798:7:7",
                              "memberName": "deposit",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3982,
                              "src": "2792:13:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (uint256,address) external returns (uint256)"
                              }
                            },
                            "id": 2729,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2792:37:7",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2777:52:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2731,
                        "nodeType": "ExpressionStatement",
                        "src": "2777:52:7"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 2758,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2755,
                      "name": "sharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2687,
                      "src": "3326:10:7",
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
                        "id": 2756,
                        "name": "_pricePerShare",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          2828
                        ],
                        "referencedDeclaration": 2828,
                        "src": "3339:14:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 2757,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3339:16:7",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3326:29:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 2759,
                  "nodeType": "ExpressionStatement",
                  "src": "3326:29:7"
                }
              ]
            },
            "baseFunctions": [
              5659
            ],
            "documentation": {
              "id": 2676,
              "nodeType": "StructuredDocumentation",
              "src": "1542:680:7",
              "text": "@notice Accepts a trader's deposit in either base or vault shares. If\n         the deposit is settled in base, the base is deposited into the\n         yield source immediately.\n @param _amount The amount of token to transfer. It will be in either\n          base or shares depending on the `asBase` option.\n @param _options The options that configure the deposit. The only option\n        used in this implementation is \"asBase\" which determines if\n        the deposit is settled in base or vault shares.\n @return sharesMinted The shares this deposit creates.\n @return sharePrice The share price at time of deposit."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "2236:8:7",
            "overrides": {
              "id": 2683,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2332:8:7"
            },
            "parameters": {
              "id": 2682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2678,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "2262:7:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 2761,
                  "src": "2254:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2254:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2681,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "2308:8:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 2761,
                  "src": "2279:37:7",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 2680,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2679,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "2279:11:7",
                        "2291:7:7"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4512,
                      "src": "2279:19:7"
                    },
                    "referencedDeclaration": 4512,
                    "src": "2279:19:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$4512_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2244:78:7"
            },
            "returnParameters": {
              "id": 2688,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2685,
                  "mutability": "mutable",
                  "name": "sharesMinted",
                  "nameLocation": "2358:12:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 2761,
                  "src": "2350:20:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2684,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2350:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2687,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2380:10:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 2761,
                  "src": "2372:18:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2686,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2372:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2349:42:7"
            },
            "scope": 2846,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 2815,
            "nodeType": "FunctionDefinition",
            "src": "4129:794:7",
            "nodes": [],
            "body": {
              "id": 2814,
              "nodeType": "Block",
              "src": "4278:645:7",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2775,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 2773,
                      "name": "_shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2764,
                      "src": "4365:7:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2774,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "4376:1:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "4365:12:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2779,
                  "nodeType": "IfStatement",
                  "src": "4361:51:7",
                  "trueBody": {
                    "id": 2778,
                    "nodeType": "Block",
                    "src": "4379:33:7",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 2776,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4400:1:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 2772,
                        "id": 2777,
                        "nodeType": "Return",
                        "src": "4393:8:7"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "expression": {
                      "id": 2780,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2767,
                      "src": "4426:8:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 2781,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "4435:6:7",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 4508,
                    "src": "4426:15:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 2812,
                    "nodeType": "Block",
                    "src": "4731:186:7",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 2803,
                                "name": "_options",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2767,
                                "src": "4837:8:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                                  "typeString": "struct IHyperdrive.Options calldata"
                                }
                              },
                              "id": 2804,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4846:11:7",
                              "memberName": "destination",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 4505,
                              "src": "4837:20:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 2805,
                              "name": "_shares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2764,
                              "src": "4859:7:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
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
                                      "id": 2799,
                                      "name": "_pool",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2658,
                                      "src": "4816:5:7",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$4097",
                                        "typeString": "contract IERC4626"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC4626_$4097",
                                        "typeString": "contract IERC4626"
                                      }
                                    ],
                                    "id": 2798,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "4808:7:7",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 2797,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "4808:7:7",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 2800,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4808:14:7",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 2796,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 63690,
                                "src": "4802:5:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$63690_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 2801,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4802:21:7",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$63690",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 2802,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4824:12:7",
                            "memberName": "safeTransfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 63978,
                            "src": "4802:34:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$63690_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$63690_$",
                              "typeString": "function (contract ERC20,address,uint256)"
                            }
                          },
                          "id": 2806,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4802:65:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2807,
                        "nodeType": "ExpressionStatement",
                        "src": "4802:65:7"
                      },
                      {
                        "expression": {
                          "id": 2810,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2808,
                            "name": "amountWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2771,
                            "src": "4881:15:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 2809,
                            "name": "_shares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2764,
                            "src": "4899:7:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4881:25:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2811,
                        "nodeType": "ExpressionStatement",
                        "src": "4881:25:7"
                      }
                    ]
                  },
                  "id": 2813,
                  "nodeType": "IfStatement",
                  "src": "4422:495:7",
                  "trueBody": {
                    "id": 2795,
                    "nodeType": "Block",
                    "src": "4443:282:7",
                    "statements": [
                      {
                        "expression": {
                          "id": 2793,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2782,
                            "name": "amountWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2771,
                            "src": "4576:15:7",
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
                                "id": 2785,
                                "name": "_shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2764,
                                "src": "4624:7:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 2786,
                                  "name": "_options",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2767,
                                  "src": "4649:8:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                                    "typeString": "struct IHyperdrive.Options calldata"
                                  }
                                },
                                "id": 2787,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "4658:11:7",
                                "memberName": "destination",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 4505,
                                "src": "4649:20:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 2790,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "4695:4:7",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_ERC4626Base_$2846",
                                      "typeString": "contract ERC4626Base"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ERC4626Base_$2846",
                                      "typeString": "contract ERC4626Base"
                                    }
                                  ],
                                  "id": 2789,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4687:7:7",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 2788,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4687:7:7",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 2791,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4687:13:7",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "expression": {
                                "id": 2783,
                                "name": "_pool",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2658,
                                "src": "4594:5:7",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC4626_$4097",
                                  "typeString": "contract IERC4626"
                                }
                              },
                              "id": 2784,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4600:6:7",
                              "memberName": "redeem",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 4016,
                              "src": "4594:12:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (uint256,address,address) external returns (uint256)"
                              }
                            },
                            "id": 2792,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4594:120:7",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4576:138:7",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2794,
                        "nodeType": "ExpressionStatement",
                        "src": "4576:138:7"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              5670
            ],
            "documentation": {
              "id": 2762,
              "nodeType": "StructuredDocumentation",
              "src": "3368:756:7",
              "text": "@notice Processes a trader's withdrawal in either base or vault shares.\n         If the withdrawal is settled in base, the base will need to be\n         withdrawn from the yield source.\n @param _shares The amount of shares to withdraw from Hyperdrive.\n @param _options The options that configure the withdrawal. The options\n        used in this implementation are \"destination\" which specifies the\n        recipient of the withdrawal and \"asBase\" which determines\n        if the withdrawal is settled in base or vault shares.\n @return amountWithdrawn The amount withdrawn from the yield source.\n         it will be in either base or shares depending on the `asBase`\n         option."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "4138:9:7",
            "overrides": {
              "id": 2769,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4235:8:7"
            },
            "parameters": {
              "id": 2768,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2764,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "4165:7:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 2815,
                  "src": "4157:15:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2763,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4157:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2767,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "4211:8:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 2815,
                  "src": "4182:37:7",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$4512_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 2766,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2765,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "4182:11:7",
                        "4194:7:7"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 4512,
                      "src": "4182:19:7"
                    },
                    "referencedDeclaration": 4512,
                    "src": "4182:19:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$4512_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4147:78:7"
            },
            "returnParameters": {
              "id": 2772,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2771,
                  "mutability": "mutable",
                  "name": "amountWithdrawn",
                  "nameLocation": "4261:15:7",
                  "nodeType": "VariableDeclaration",
                  "scope": 2815,
                  "src": "4253:23:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2770,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4253:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4252:25:7"
            },
            "scope": 2846,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 2828,
            "nodeType": "FunctionDefinition",
            "src": "5108:117:7",
            "nodes": [],
            "body": {
              "id": 2827,
              "nodeType": "Block",
              "src": "5175:50:7",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2824,
                        "name": "ONE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10389,
                        "src": "5214:3:7",
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
                        "id": 2822,
                        "name": "_pool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2658,
                        "src": "5192:5:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC4626_$4097",
                          "typeString": "contract IERC4626"
                        }
                      },
                      "id": 2823,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5198:15:7",
                      "memberName": "convertToAssets",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 4032,
                      "src": "5192:21:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view external returns (uint256)"
                      }
                    },
                    "id": 2825,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5192:26:7",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2821,
                  "id": 2826,
                  "nodeType": "Return",
                  "src": "5185:33:7"
                }
              ]
            },
            "baseFunctions": [
              5676
            ],
            "documentation": {
              "id": 2816,
              "nodeType": "StructuredDocumentation",
              "src": "4929:174:7",
              "text": "@notice Loads the share price from the yield source.\n @return The current share price.\n @dev must remain consistent with the impl inside of the DataProvider"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "5117:14:7",
            "overrides": {
              "id": 2818,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "5148:8:7"
            },
            "parameters": {
              "id": 2817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5131:2:7"
            },
            "returnParameters": {
              "id": 2821,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2820,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2828,
                  "src": "5166:7:7",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2819,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5166:7:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5165:9:7"
            },
            "scope": 2846,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 2845,
            "nodeType": "FunctionDefinition",
            "src": "5343:145:7",
            "nodes": [],
            "body": {
              "id": 2844,
              "nodeType": "Block",
              "src": "5396:92:7",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2836,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 2833,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "5410:3:7",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2834,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5414:5:7",
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "5410:9:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2835,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5423:1:7",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5410:14:7",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2843,
                  "nodeType": "IfStatement",
                  "src": "5406:76:7",
                  "trueBody": {
                    "id": 2842,
                    "nodeType": "Block",
                    "src": "5426:56:7",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2837,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4675,
                              "src": "5447:11:7",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$4675_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2839,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5459:10:7",
                            "memberName": "NotPayable",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4551,
                            "src": "5447:22:7",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2840,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5447:24:7",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2841,
                        "nodeType": "RevertStatement",
                        "src": "5440:31:7"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              5646
            ],
            "documentation": {
              "id": 2829,
              "nodeType": "StructuredDocumentation",
              "src": "5231:107:7",
              "text": "@dev Ensure that ether wasn't sent because ERC4626 vaults don't support\n      deposits of ether."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkMessageValue",
            "nameLocation": "5352:18:7",
            "overrides": {
              "id": 2831,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "5387:8:7"
            },
            "parameters": {
              "id": 2830,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5370:2:7"
            },
            "returnParameters": {
              "id": 2832,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5396:0:7"
            },
            "scope": 2846,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 2646,
              "name": "HyperdriveBase",
              "nameLocations": [
                "881:14:7"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 6406,
              "src": "881:14:7"
            },
            "id": 2647,
            "nodeType": "InheritanceSpecifier",
            "src": "881:14:7"
          }
        ],
        "canonicalName": "ERC4626Base",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 2645,
          "nodeType": "StructuredDocumentation",
          "src": "511:337:7",
          "text": "@author DELV\n @title ERC4626Base\n @notice The base contract for the ERC4626 Hyperdrive implementation.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          2846,
          6406,
          10066,
          63914
        ],
        "name": "ERC4626Base",
        "nameLocation": "866:11:7",
        "scope": 2847,
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
  "id": 7
} as const;
