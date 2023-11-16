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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.19+commit.7dd6d404\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"InvalidCheckpointDuration\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidFeeAmounts\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidMinimumShareReserves\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InvalidPositionDuration\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"sharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"__pool\":\"The ERC4626 compatible yield source.\"}}},\"stateVariables\":{\"_isSweepable\":{\"details\":\"A mapping from addresses to their status as a sweep target. This      mapping does not change after construction.\"},\"_pool\":{\"details\":\"The yield source contract for this hyperdrive.\"}},\"title\":\"ERC4626Base\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates the ERC4626 Hyperdrive base contract.\"}},\"notice\":\"The base contract for the ERC4626 Hyperdrive implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/ERC4626Base.sol\":\"ERC4626Base\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":aave-v3-core/=lib/aave-v3-core/\",\":create3-factory/=lib/yield-daddy/lib/create3-factory/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":forge-std/=lib/forge-std/src/\",\":solmate/=lib/solmate/src/\",\":yield-daddy/=lib/yield-daddy/\"]},\"sources\":{\"contracts/src/instances/ERC4626Base.sol\":{\"keccak256\":\"0x186f72e49a6542caa25f799fa9072c2b1b4a81cc7ab3475fbaad29fb56bb0229\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://5dba800fe086f6ef89913f8a329887d4c9cb4d283be553e9534013882a7fcc44\",\"dweb:/ipfs/QmNts4c5uyZGmCjHeSREQpayigYkmro2xzRXVcSTqzH9r3\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfb57fe2ee4d8d1c6a8e2aa3b007da6f0e53d65388245b0b7d876234077ee95b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e4303c41b9752b51c6eaa9b16aa11e5bffb34fc80c5c8761302539cd5922ae36\",\"dweb:/ipfs/QmZjVYBikfgPDX47hmbGJpG6kvm3Gyt6nKkFbZH6r8U4cL\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0xaf48462596aa9c7544086c0a5e53adc7bf8f713662a5fb270ffb4e4db16e23cf\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://b2e5e6d94edba7e97dce8b5e061d40955d39fa586579d170f66cbecdbd2348dc\",\"dweb:/ipfs/QmeUkSbHaBmCeZnmup5RujvxRAyhw1u9vpRRpzeuU2wiia\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xe7076ded0fe36ac72c946258bc3183bebb6f1567cd0ce5d55720de84988f5312\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b84d02ec55ccbee1491ce25a2b890e7c371dd251cb69c2cc818179e49ddef780\",\"dweb:/ipfs/QmcXWYPF2Hy6w3TLqmegYiUj5pL9i9PqH44USV4Px9sk2k\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0xcea74eaf829d241754f74a8c2223fef0ec83459252d2aaedcd860bae538620c9\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://464f58076e112b73957147b2abb52c85b1b806b306fa2d490d0e74f993ffe5a8\",\"dweb:/ipfs/QmNf3EACwEDsB7X1G1geLeqenR1xJHd9zGvSeZJ9f2nSmp\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0xa63f6d3d8b87fcf27202f4ea8609762ef695b9919e4907522930738eb2dcde7e\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://db88312fa9fed33207e1974d91f714ed8cbbe4a4a1d0e54a6ee5c15a8949f4fb\",\"dweb:/ipfs/QmSYCCuc6Xkh6oibhW5ovdQRhvT5nV4Hxj3Q2xEhjzYyWE\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x833d56790728bfab7d35507b8584dc7ce607b26512a382e887483f61d528f6c5\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3dd009d6ff5a89d1173f7330916e81a31ffd139bf6848b3f4400673652554a70\",\"dweb:/ipfs/QmXkVovZSWqhRqrt8y9FFfHt1HWhnUuP9TMecQyd89yEQ3\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x84c73d8c4b67da41635f57fce2f30b8f04fc826ff6fb54c605de23d376f3403d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://e6d636dff5c24916ae35a76695d741de2f14ee46876ea67c5393618bb7f9cf85\",\"dweb:/ipfs/QmUwxh8JeAqSFA8Z2qabVx3YWRSz7PJ9V2TQgnfctAgqPF\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x837939af4a9224c5f4ea564e9b33a5612442b7d7d50b7f8bb32be6bb3ce239b3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3bfebedcb31d2edf86a69f0dfbcc5aa7b96edc2d8197b4a4681a200cb6ffe993\",\"dweb:/ipfs/Qmeq4oAGxKv3mvRRWkqYBjfdozPkhi3MqBRFNnNkmAwCtt\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xcf3a4002275ea64e381f0a4aded3683e12960396ef79ba9dd153e2d1e395baad\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c9990491f7a5151fd696a45e6e5b0282a1dedf58521861dfb8c64db8cb60f5b6\",\"dweb:/ipfs/QmaywmqqQhz7DeYqZdoeykagr5h4ZhQRv6GasHqvdWqzSy\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xdb7f24663cff7307a468ef5e4c6f3e4d01ec0475157b3bbb3405890c3e9ab87d\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://7f631a9a395fba5b07c3d9308fccac18d5aa59d890efe23442ed2a4da9871ae8\",\"dweb:/ipfs/QmV2a4wiAPfWzSST3faYt58i2tqEyoqCLAJV8aNCdJyxVE\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0x476240ea4328bae9ab820b6f0f40afb11c74ee52d26bdbef69e4ece28dc10bdb\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://843f73cb21eaec4e26952fd6cbde5e6815e3a28c438df9e026e249200d25076f\",\"dweb:/ipfs/QmXzE7gsRKMaRGQfTDodA1RXxNxUuBj8RT7grTYjZUdbe6\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0x9b92d81f2f038fcd4bb5d069ab2b754efc153234c451d4ee4caa6d74aaca16b4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8686fddc99564c6b6524ea68a6b7ff081a9988fc795fc13197bb59ddaa2041c6\",\"dweb:/ipfs/QmarJYJAgoH6Z4H1BmdPoRgqLubRu5S6NDXBNV2fDApPuW\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x328a01b0720b9a6494a2d6be1113539d41da589a382525578d4241fc077e9646\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://4b9d7b56fd8056ae9264da99f8e0764ef16f17dca179218cf9375cf3236ec9fc\",\"dweb:/ipfs/Qmf11fXRipobZfMWTTxaScrYz9tZFUsdVxH5eZ4aLVQQC8\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xda130fbf6651046517801d119593b7f81e7a2a824f82cb15b1852495fa7fb148\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://c10ab3e768804fc8eee91502f34dd1e1d2d2e7d90d8ec0a26fac40d83ed940db\",\"dweb:/ipfs/QmNMqyFM6xC49uRAMeY3MhoQ9yK2ZHdQLt3QxrsNK9Kfkw\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xcf8493b00dd39c50754a63f66dc612f3cd466cbac8c7ea5ed0c5ea68aa99267a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1a1986d6bc80e465dde116a70d3a30027b3e75969117a9b3517c6866c2e5e73a\",\"dweb:/ipfs/QmSASHifHWyKBycGAm1pUs9dw26Uf6A61V9nkEQnFj9mya\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xac200bd4172e6369dc6ad06bef96e3d4ce7df36a97e80ee8f1a033e622c99639\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://0add90b8957805ae8e99581b76d81dec07bdf7586fdf2a05f31d2ce91f09439d\",\"dweb:/ipfs/QmRRBbguna6QmMUvANobcSfH6HM3DydFjNXSWZZr1VDKH8\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0xccfb106f6bd8829c369c19d08ef4f8ffc8ebbf5c51a9e148141733ff9bbc49f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d11ddba27aace6aefe451d75b4403ceb10f0a71cd61163e8f812728820107e62\",\"dweb:/ipfs/QmdSZJtY5LaJVnHYRwKAofo6oiihqpazC22Q1X9aL9uNbx\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x077e800ae4f47bda111e72f8c40d50a57b10a1c5bce81f2e83bb57f94752159f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8e9433729a73747a65ececae27a8f634300a4e02a66577f796f596e5894a4bb5\",\"dweb:/ipfs/QmT2fC2xaRoFuDBURAtcwqvpqXvw1AQybSgb4khVBzit2S\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x42a910bd6ee869fc53f18f2991cbf75a667d663ed41b4a11e18b328546ede7db\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://77345fdb9b99d0b04fa7cf719857eae63362e20db6b99da35ac886a13bf3b56a\",\"dweb:/ipfs/QmXatm27fhzsApgrMq978mye2u8fk62D89pUgV4WsjQeyH\"]},\"lib/solmate/src/tokens/ERC20.sol\":{\"keccak256\":\"0xcdfd8db76b2a3415620e4d18cc5545f3d50de792dbf2c3dd5adb40cbe6f94b10\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://57b3ab70cde374af1cf2c9888636e8de6cf660f087b1c9abd805e9271e19fa35\",\"dweb:/ipfs/QmNrLDBAHYFjpjSd12jerm1AdBkDqEYUUaXgnT854BUZ97\"]},\"lib/solmate/src/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xb282dd78aa7375d6b200b9a5d8dd214b2e5df1004f8217a4b4c2b07f0c5bfd01\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://5fca62eb8d3dbd2b3b7e4bb051f6da16f4d0ff9cee61c39cebb80f031f6a8800\",\"dweb:/ipfs/QmbrsXPK91iBFwHKwJs2HLRud2KzMoBDRiWYMUtyV5H57j\"]},\"lib/solmate/src/utils/SafeTransferLib.sol\":{\"keccak256\":\"0xbadf3d708cf532b12f75f78a1d423135954b63774a6d4ba15914a551d348db8a\",\"license\":\"AGPL-3.0-only\",\"urls\":[\"bzz-raw://88ac8256bd520d1b8e6f9c4ac9e8777bffdc4a6c8afb1a848f596665779a55b4\",\"dweb:/ipfs/QmXx7X1dxe6f5VM91vgQ5BA4r2eF97GWDcQDrgHytcvfjU\"]}},\"version\":1}",
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
        "keccak256": "0x186f72e49a6542caa25f799fa9072c2b1b4a81cc7ab3475fbaad29fb56bb0229",
        "urls": [
          "bzz-raw://5dba800fe086f6ef89913f8a329887d4c9cb4d283be553e9534013882a7fcc44",
          "dweb:/ipfs/QmNts4c5uyZGmCjHeSREQpayigYkmro2xzRXVcSTqzH9r3"
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
    "id": 2469,
    "exportedSymbols": {
      "ERC20": [
        60340
      ],
      "ERC4626Base": [
        2468
      ],
      "FixedPointMath": [
        10533
      ],
      "HyperdriveBase": [
        5354
      ],
      "IERC4626": [
        3255
      ],
      "IERC4626Hyperdrive": [
        3270
      ],
      "IHyperdrive": [
        3759
      ],
      "ONE": [
        9788
      ],
      "SafeTransferLib": [
        60649
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:5288:5",
    "nodes": [
      {
        "id": 2267,
        "nodeType": "PragmaDirective",
        "src": "39:23:5",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".19"
        ]
      },
      {
        "id": 2269,
        "nodeType": "ImportDirective",
        "src": "64:49:5",
        "nodes": [],
        "absolutePath": "lib/solmate/src/tokens/ERC20.sol",
        "file": "solmate/tokens/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2469,
        "sourceUnit": 60341,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2268,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 60340,
              "src": "73:5:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2271,
        "nodeType": "ImportDirective",
        "src": "114:68:5",
        "nodes": [],
        "absolutePath": "lib/solmate/src/utils/SafeTransferLib.sol",
        "file": "solmate/utils/SafeTransferLib.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2469,
        "sourceUnit": 60650,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2270,
              "name": "SafeTransferLib",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 60649,
              "src": "123:15:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2273,
        "nodeType": "ImportDirective",
        "src": "183:54:5",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626.sol",
        "file": "../interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2469,
        "sourceUnit": 3256,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2272,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3255,
              "src": "192:8:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2275,
        "nodeType": "ImportDirective",
        "src": "238:60:5",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2469,
        "sourceUnit": 3760,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2274,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3759,
              "src": "247:11:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2277,
        "nodeType": "ImportDirective",
        "src": "299:74:5",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626Hyperdrive.sol",
        "file": "../interfaces/IERC4626Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2469,
        "sourceUnit": 3271,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2276,
              "name": "IERC4626Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 3270,
              "src": "308:18:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2279,
        "nodeType": "ImportDirective",
        "src": "374:64:5",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
        "file": "../internal/HyperdriveBase.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2469,
        "sourceUnit": 5355,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2278,
              "name": "HyperdriveBase",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 5354,
              "src": "383:14:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2282,
        "nodeType": "ImportDirective",
        "src": "439:70:5",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 2469,
        "sourceUnit": 10534,
        "symbolAliases": [
          {
            "foreign": {
              "id": 2280,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 10533,
              "src": "448:14:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 2281,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9788,
              "src": "464:3:5",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 2468,
        "nodeType": "ContractDefinition",
        "src": "848:4478:5",
        "nodes": [
          {
            "id": 2288,
            "nodeType": "UsingForDirective",
            "src": "902:33:5",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 2286,
              "name": "FixedPointMath",
              "nameLocations": [
                "908:14:5"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 10533,
              "src": "908:14:5"
            },
            "typeName": {
              "id": 2287,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "927:7:5",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 2292,
            "nodeType": "UsingForDirective",
            "src": "940:32:5",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 2289,
              "name": "SafeTransferLib",
              "nameLocations": [
                "946:15:5"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 60649,
              "src": "946:15:5"
            },
            "typeName": {
              "id": 2291,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 2290,
                "name": "ERC20",
                "nameLocations": [
                  "966:5:5"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 60340,
                "src": "966:5:5"
              },
              "referencedDeclaration": 60340,
              "src": "966:5:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$60340",
                "typeString": "contract ERC20"
              }
            }
          },
          {
            "id": 2296,
            "nodeType": "VariableDeclaration",
            "src": "1038:33:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 2293,
              "nodeType": "StructuredDocumentation",
              "src": "978:55:5",
              "text": "@dev The yield source contract for this hyperdrive."
            },
            "mutability": "immutable",
            "name": "_pool",
            "nameLocation": "1066:5:5",
            "scope": 2468,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC4626_$3255",
              "typeString": "contract IERC4626"
            },
            "typeName": {
              "id": 2295,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 2294,
                "name": "IERC4626",
                "nameLocations": [
                  "1038:8:5"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 3255,
                "src": "1038:8:5"
              },
              "referencedDeclaration": 3255,
              "src": "1038:8:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC4626_$3255",
                "typeString": "contract IERC4626"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 2301,
            "nodeType": "VariableDeclaration",
            "src": "1213:62:5",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 2297,
              "nodeType": "StructuredDocumentation",
              "src": "1078:130:5",
              "text": "@dev A mapping from addresses to their status as a sweep target. This\n      mapping does not change after construction."
            },
            "mutability": "mutable",
            "name": "_isSweepable",
            "nameLocation": "1263:12:5",
            "scope": 2468,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 2300,
              "keyName": "target",
              "keyNameLocation": "1229:6:5",
              "keyType": {
                "id": 2298,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1221:7:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1213:40:5",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueName": "canSweep",
              "valueNameLocation": "1244:8:5",
              "valueType": {
                "id": 2299,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1239:4:5",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "id": 2313,
            "nodeType": "FunctionDefinition",
            "src": "1408:102:5",
            "nodes": [],
            "body": {
              "id": 2312,
              "nodeType": "Block",
              "src": "1437:73:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 2310,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2308,
                      "name": "_pool",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2296,
                      "src": "1489:5:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC4626_$3255",
                        "typeString": "contract IERC4626"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2309,
                      "name": "__pool",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2305,
                      "src": "1497:6:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC4626_$3255",
                        "typeString": "contract IERC4626"
                      }
                    },
                    "src": "1489:14:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$3255",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "id": 2311,
                  "nodeType": "ExpressionStatement",
                  "src": "1489:14:5"
                }
              ]
            },
            "documentation": {
              "id": 2302,
              "nodeType": "StructuredDocumentation",
              "src": "1282:121:5",
              "text": "@notice Instantiates the ERC4626 Hyperdrive base contract.\n @param __pool The ERC4626 compatible yield source."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 2306,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2305,
                  "mutability": "mutable",
                  "name": "__pool",
                  "nameLocation": "1429:6:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2313,
                  "src": "1420:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$3255",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 2304,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2303,
                      "name": "IERC4626",
                      "nameLocations": [
                        "1420:8:5"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3255,
                      "src": "1420:8:5"
                    },
                    "referencedDeclaration": 3255,
                    "src": "1420:8:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$3255",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1419:17:5"
            },
            "returnParameters": {
              "id": 2307,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1437:0:5"
            },
            "scope": 2468,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 2390,
            "nodeType": "FunctionDefinition",
            "src": "2227:1105:5",
            "nodes": [],
            "body": {
              "id": 2389,
              "nodeType": "Block",
              "src": "2392:940:5",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 2327,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2319,
                      "src": "2406:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 2328,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2415:6:5",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 3604,
                    "src": "2406:15:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 2387,
                    "nodeType": "Block",
                    "src": "2812:514:5",
                    "statements": [
                      {
                        "expression": {
                          "id": 2364,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2362,
                            "name": "sharesMinted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2323,
                            "src": "3034:12:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 2363,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2316,
                            "src": "3049:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3034:22:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2365,
                        "nodeType": "ExpressionStatement",
                        "src": "3034:22:5"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 2373,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "3187:3:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 2374,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3191:6:5",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "3187:10:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 2377,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "3223:4:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC4626Base_$2468",
                                    "typeString": "contract ERC4626Base"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ERC4626Base_$2468",
                                    "typeString": "contract ERC4626Base"
                                  }
                                ],
                                "id": 2376,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3215:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 2375,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3215:7:5",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 2378,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3215:13:5",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 2379,
                              "name": "sharesMinted",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2323,
                              "src": "3246:12:5",
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
                                      "id": 2369,
                                      "name": "_pool",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2296,
                                      "src": "3145:5:5",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$3255",
                                        "typeString": "contract IERC4626"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC4626_$3255",
                                        "typeString": "contract IERC4626"
                                      }
                                    ],
                                    "id": 2368,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3137:7:5",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 2367,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3137:7:5",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 2370,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3137:14:5",
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
                                "id": 2366,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60340,
                                "src": "3131:5:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$60340_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 2371,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3131:21:5",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$60340",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 2372,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3153:16:5",
                            "memberName": "safeTransferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 60608,
                            "src": "3131:38:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$60340_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$60340_$",
                              "typeString": "function (contract ERC20,address,address,uint256)"
                            }
                          },
                          "id": 2380,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3131:141:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2381,
                        "nodeType": "ExpressionStatement",
                        "src": "3131:141:5"
                      },
                      {
                        "expression": {
                          "id": 2385,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2382,
                            "name": "sharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2325,
                            "src": "3286:10:5",
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
                              "id": 2383,
                              "name": "_pricePerShare",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                2450
                              ],
                              "referencedDeclaration": 2450,
                              "src": "3299:14:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 2384,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3299:16:5",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3286:29:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2386,
                        "nodeType": "ExpressionStatement",
                        "src": "3286:29:5"
                      }
                    ]
                  },
                  "id": 2388,
                  "nodeType": "IfStatement",
                  "src": "2402:924:5",
                  "trueBody": {
                    "id": 2361,
                    "nodeType": "Block",
                    "src": "2423:383:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 2336,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "2550:3:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 2337,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2554:6:5",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "2550:10:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 2340,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "2586:4:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC4626Base_$2468",
                                    "typeString": "contract ERC4626Base"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ERC4626Base_$2468",
                                    "typeString": "contract ERC4626Base"
                                  }
                                ],
                                "id": 2339,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2578:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 2338,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2578:7:5",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 2341,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2578:13:5",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 2342,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2316,
                              "src": "2609:7:5",
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
                                      "id": 2332,
                                      "name": "_baseToken",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 9215,
                                      "src": "2503:10:5",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$3030",
                                        "typeString": "contract IERC20"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC20_$3030",
                                        "typeString": "contract IERC20"
                                      }
                                    ],
                                    "id": 2331,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2495:7:5",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 2330,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2495:7:5",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 2333,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2495:19:5",
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
                                "id": 2329,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60340,
                                "src": "2489:5:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$60340_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 2334,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2489:26:5",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$60340",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 2335,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2516:16:5",
                            "memberName": "safeTransferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 60608,
                            "src": "2489:43:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$60340_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$60340_$",
                              "typeString": "function (contract ERC20,address,address,uint256)"
                            }
                          },
                          "id": 2343,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2489:141:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2344,
                        "nodeType": "ExpressionStatement",
                        "src": "2489:141:5"
                      },
                      {
                        "expression": {
                          "id": 2354,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2345,
                            "name": "sharesMinted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2323,
                            "src": "2700:12:5",
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
                                "id": 2348,
                                "name": "_amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2316,
                                "src": "2729:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 2351,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "2746:4:5",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_ERC4626Base_$2468",
                                      "typeString": "contract ERC4626Base"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ERC4626Base_$2468",
                                      "typeString": "contract ERC4626Base"
                                    }
                                  ],
                                  "id": 2350,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2738:7:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 2349,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2738:7:5",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 2352,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2738:13:5",
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
                                "id": 2346,
                                "name": "_pool",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2296,
                                "src": "2715:5:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC4626_$3255",
                                  "typeString": "contract IERC4626"
                                }
                              },
                              "id": 2347,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2721:7:5",
                              "memberName": "deposit",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3140,
                              "src": "2715:13:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (uint256,address) external returns (uint256)"
                              }
                            },
                            "id": 2353,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2715:37:5",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2700:52:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2355,
                        "nodeType": "ExpressionStatement",
                        "src": "2700:52:5"
                      },
                      {
                        "expression": {
                          "id": 2359,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2356,
                            "name": "sharePrice",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2325,
                            "src": "2766:10:5",
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
                              "id": 2357,
                              "name": "_pricePerShare",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [
                                2450
                              ],
                              "referencedDeclaration": 2450,
                              "src": "2779:14:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                                "typeString": "function () view returns (uint256)"
                              }
                            },
                            "id": 2358,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2779:16:5",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2766:29:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2360,
                        "nodeType": "ExpressionStatement",
                        "src": "2766:29:5"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              4699
            ],
            "documentation": {
              "id": 2314,
              "nodeType": "StructuredDocumentation",
              "src": "1542:680:5",
              "text": "@notice Accepts a trader's deposit in either base or vault shares. If\n         the deposit is settled in base, the base is deposited into the\n         yield source immediately.\n @param _amount The amount of token to transfer. It will be in either\n          base or shares depending on the `asBase` option.\n @param _options The options that configure the deposit. The only option\n        used in this implementation is \"asBase\" which determines if\n        the deposit is settled in base or vault shares.\n @return sharesMinted The shares this deposit creates.\n @return sharePrice The share price at time of deposit."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "2236:8:5",
            "overrides": {
              "id": 2321,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2332:8:5"
            },
            "parameters": {
              "id": 2320,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2316,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "2262:7:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2390,
                  "src": "2254:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2315,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2254:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2319,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "2308:8:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2390,
                  "src": "2279:37:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 2318,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2317,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "2279:11:5",
                        "2291:7:5"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3608,
                      "src": "2279:19:5"
                    },
                    "referencedDeclaration": 3608,
                    "src": "2279:19:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$3608_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2244:78:5"
            },
            "returnParameters": {
              "id": 2326,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2323,
                  "mutability": "mutable",
                  "name": "sharesMinted",
                  "nameLocation": "2358:12:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2390,
                  "src": "2350:20:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2322,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2350:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2325,
                  "mutability": "mutable",
                  "name": "sharePrice",
                  "nameLocation": "2380:10:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2390,
                  "src": "2372:18:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2324,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2372:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2349:42:5"
            },
            "scope": 2468,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 2437,
            "nodeType": "FunctionDefinition",
            "src": "4099:660:5",
            "nodes": [],
            "body": {
              "id": 2436,
              "nodeType": "Block",
              "src": "4248:511:5",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 2402,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2396,
                      "src": "4262:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 2403,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "4271:6:5",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 3604,
                    "src": "4262:15:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 2434,
                    "nodeType": "Block",
                    "src": "4567:186:5",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 2425,
                                "name": "_options",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2396,
                                "src": "4673:8:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                                  "typeString": "struct IHyperdrive.Options calldata"
                                }
                              },
                              "id": 2426,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4682:11:5",
                              "memberName": "destination",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3601,
                              "src": "4673:20:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 2427,
                              "name": "_shares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 2393,
                              "src": "4695:7:5",
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
                                      "id": 2421,
                                      "name": "_pool",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 2296,
                                      "src": "4652:5:5",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$3255",
                                        "typeString": "contract IERC4626"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC4626_$3255",
                                        "typeString": "contract IERC4626"
                                      }
                                    ],
                                    "id": 2420,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "4644:7:5",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 2419,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "4644:7:5",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 2422,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "4644:14:5",
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
                                "id": 2418,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 60340,
                                "src": "4638:5:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$60340_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 2423,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "4638:21:5",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$60340",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 2424,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "4660:12:5",
                            "memberName": "safeTransfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 60628,
                            "src": "4638:34:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_ERC20_$60340_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_ERC20_$60340_$",
                              "typeString": "function (contract ERC20,address,uint256)"
                            }
                          },
                          "id": 2428,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4638:65:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2429,
                        "nodeType": "ExpressionStatement",
                        "src": "4638:65:5"
                      },
                      {
                        "expression": {
                          "id": 2432,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2430,
                            "name": "amountWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2400,
                            "src": "4717:15:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 2431,
                            "name": "_shares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2393,
                            "src": "4735:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4717:25:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2433,
                        "nodeType": "ExpressionStatement",
                        "src": "4717:25:5"
                      }
                    ]
                  },
                  "id": 2435,
                  "nodeType": "IfStatement",
                  "src": "4258:495:5",
                  "trueBody": {
                    "id": 2417,
                    "nodeType": "Block",
                    "src": "4279:282:5",
                    "statements": [
                      {
                        "expression": {
                          "id": 2415,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 2404,
                            "name": "amountWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 2400,
                            "src": "4412:15:5",
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
                                "id": 2407,
                                "name": "_shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2393,
                                "src": "4460:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 2408,
                                  "name": "_options",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 2396,
                                  "src": "4485:8:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                                    "typeString": "struct IHyperdrive.Options calldata"
                                  }
                                },
                                "id": 2409,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "4494:11:5",
                                "memberName": "destination",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 3601,
                                "src": "4485:20:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 2412,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "4531:4:5",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_ERC4626Base_$2468",
                                      "typeString": "contract ERC4626Base"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ERC4626Base_$2468",
                                      "typeString": "contract ERC4626Base"
                                    }
                                  ],
                                  "id": 2411,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "4523:7:5",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 2410,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "4523:7:5",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 2413,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4523:13:5",
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
                                "id": 2405,
                                "name": "_pool",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2296,
                                "src": "4430:5:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC4626_$3255",
                                  "typeString": "contract IERC4626"
                                }
                              },
                              "id": 2406,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "4436:6:5",
                              "memberName": "redeem",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 3174,
                              "src": "4430:12:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (uint256,address,address) external returns (uint256)"
                              }
                            },
                            "id": 2414,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "4430:120:5",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4412:138:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 2416,
                        "nodeType": "ExpressionStatement",
                        "src": "4412:138:5"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              4710
            ],
            "documentation": {
              "id": 2391,
              "nodeType": "StructuredDocumentation",
              "src": "3338:756:5",
              "text": "@notice Processes a trader's withdrawal in either base or vault shares.\n         If the withdrawal is settled in base, the base will need to be\n         withdrawn from the yield source.\n @param _shares The amount of shares to withdraw from Hyperdrive.\n @param _options The options that configure the withdrawal. The options\n        used in this implementation are \"destination\" which specifies the\n        recipient of the withdrawal and \"asBase\" which determines\n        if the withdrawal is settled in base or vault shares.\n @return amountWithdrawn The amount withdrawn from the yield source.\n         it will be in either base or shares depending on the `asBase`\n         option."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "4108:9:5",
            "overrides": {
              "id": 2398,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4205:8:5"
            },
            "parameters": {
              "id": 2397,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2393,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "4135:7:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2437,
                  "src": "4127:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2392,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4127:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2396,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "4181:8:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2437,
                  "src": "4152:37:5",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$3608_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 2395,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 2394,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "4152:11:5",
                        "4164:7:5"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 3608,
                      "src": "4152:19:5"
                    },
                    "referencedDeclaration": 3608,
                    "src": "4152:19:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$3608_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4117:78:5"
            },
            "returnParameters": {
              "id": 2401,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2400,
                  "mutability": "mutable",
                  "name": "amountWithdrawn",
                  "nameLocation": "4231:15:5",
                  "nodeType": "VariableDeclaration",
                  "scope": 2437,
                  "src": "4223:23:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2399,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4223:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4222:25:5"
            },
            "scope": 2468,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 2450,
            "nodeType": "FunctionDefinition",
            "src": "4944:117:5",
            "nodes": [],
            "body": {
              "id": 2449,
              "nodeType": "Block",
              "src": "5011:50:5",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2446,
                        "name": "ONE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 9788,
                        "src": "5050:3:5",
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
                        "id": 2444,
                        "name": "_pool",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2296,
                        "src": "5028:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC4626_$3255",
                          "typeString": "contract IERC4626"
                        }
                      },
                      "id": 2445,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5034:15:5",
                      "memberName": "convertToAssets",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3190,
                      "src": "5028:21:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view external returns (uint256)"
                      }
                    },
                    "id": 2447,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5028:26:5",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2443,
                  "id": 2448,
                  "nodeType": "Return",
                  "src": "5021:33:5"
                }
              ]
            },
            "baseFunctions": [
              4716
            ],
            "documentation": {
              "id": 2438,
              "nodeType": "StructuredDocumentation",
              "src": "4765:174:5",
              "text": "@notice Loads the share price from the yield source.\n @return The current share price.\n @dev must remain consistent with the impl inside of the DataProvider"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerShare",
            "nameLocation": "4953:14:5",
            "overrides": {
              "id": 2440,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4984:8:5"
            },
            "parameters": {
              "id": 2439,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4967:2:5"
            },
            "returnParameters": {
              "id": 2443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2442,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2450,
                  "src": "5002:7:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2441,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "5002:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "5001:9:5"
            },
            "scope": 2468,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 2467,
            "nodeType": "FunctionDefinition",
            "src": "5179:145:5",
            "nodes": [],
            "body": {
              "id": 2466,
              "nodeType": "Block",
              "src": "5232:92:5",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 2458,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 2455,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "5246:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 2456,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "5250:5:5",
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "5246:9:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 2457,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5259:1:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5246:14:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 2465,
                  "nodeType": "IfStatement",
                  "src": "5242:76:5",
                  "trueBody": {
                    "id": 2464,
                    "nodeType": "Block",
                    "src": "5262:56:5",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 2459,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3759,
                              "src": "5283:11:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$3759_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 2461,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5295:10:5",
                            "memberName": "NotPayable",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3647,
                            "src": "5283:22:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 2462,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5283:24:5",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 2463,
                        "nodeType": "RevertStatement",
                        "src": "5276:31:5"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              4686
            ],
            "documentation": {
              "id": 2451,
              "nodeType": "StructuredDocumentation",
              "src": "5067:107:5",
              "text": "@dev Ensure that ether wasn't sent because ERC4626 vaults don't support\n      deposits of ether."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkMessageValue",
            "nameLocation": "5188:18:5",
            "overrides": {
              "id": 2453,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "5223:8:5"
            },
            "parameters": {
              "id": 2452,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5206:2:5"
            },
            "returnParameters": {
              "id": 2454,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5232:0:5"
            },
            "scope": 2468,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 2284,
              "name": "HyperdriveBase",
              "nameLocations": [
                "881:14:5"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 5354,
              "src": "881:14:5"
            },
            "id": 2285,
            "nodeType": "InheritanceSpecifier",
            "src": "881:14:5"
          }
        ],
        "canonicalName": "ERC4626Base",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 2283,
          "nodeType": "StructuredDocumentation",
          "src": "511:337:5",
          "text": "@author DELV\n @title ERC4626Base\n @notice The base contract for the ERC4626 Hyperdrive implementation.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          2468,
          5354,
          9465,
          60564
        ],
        "name": "ERC4626Base",
        "nameLocation": "866:11:5",
        "scope": 2469,
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
  "id": 5
} as const;
