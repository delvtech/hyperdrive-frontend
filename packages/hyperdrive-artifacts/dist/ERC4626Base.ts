export const ERC4626Base = 
{
  "abi": [
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "internalType": "address",
          "name": "collector",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "fees",
          "type": "uint256"
        }
      ],
      "name": "CollectGovernanceFee",
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
          "name": "vaultSharePrice",
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
          "name": "newGovernance",
          "type": "address"
        }
      ],
      "name": "GovernanceUpdated",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
          "indexed": false,
          "internalType": "bool",
          "name": "isPaused",
          "type": "bool"
        }
      ],
      "name": "PauseStatusUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "newPauser",
          "type": "address"
        }
      ],
      "name": "PauserUpdated",
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
          "name": "vaultSharePrice",
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
          "name": "vaultSharePrice",
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
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"name\":\"ReentrancyGuardReentrantCall\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"AddLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"CloseShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"collector\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"fees\",\"type\":\"uint256\"}],\"name\":\"CollectGovernanceFee\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"checkpointTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedShorts\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturedLongs\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"CreateCheckpoint\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newGovernance\",\"type\":\"address\"}],\"name\":\"GovernanceUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"apr\",\"type\":\"uint256\"}],\"name\":\"Initialize\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenLong\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"trader\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"assetId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"maturityTime\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"bondAmount\",\"type\":\"uint256\"}],\"name\":\"OpenShort\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"}],\"name\":\"PauseStatusUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newPauser\",\"type\":\"address\"}],\"name\":\"PauserUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"}],\"name\":\"RedeemWithdrawalShares\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"provider\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"withdrawalShareAmount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"}],\"name\":\"RemoveLiquidity\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"}],\"devdoc\":{\"author\":\"DELV\",\"custom:disclaimer\":\"The language used in this code is for coding convenience                    only, and is not intended to, and does not, have any                    particular legal or regulatory significance.\",\"errors\":{\"ReentrancyGuardReentrantCall()\":[{\"details\":\"Unauthorized reentrant call.\"}]},\"kind\":\"dev\",\"methods\":{\"constructor\":{\"params\":{\"__vault\":\"The ERC4626 compatible vault.\"}}},\"stateVariables\":{\"_vault\":{\"details\":\"The ERC4626 vault that this pool uses as a yield source.\"}},\"title\":\"ERC4626Base\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"constructor\":{\"notice\":\"Instantiates the ERC4626 Hyperdrive base contract.\"}},\"notice\":\"The base contract for the ERC4626 Hyperdrive implementation.\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/instances/erc4626/ERC4626Base.sol\":\"ERC4626Base\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/instances/erc4626/ERC4626Base.sol\":{\"keccak256\":\"0xcd961bed2634599e8060353f5219cd4cebff4ce3f29c3131cf69543cb280ac18\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d36f480b1e18086ff23ffead15ebbb42eb6bba82ab8f0357e4abcd14850a2a79\",\"dweb:/ipfs/QmNehYBaGMciT2ZepWZ88yq8GftqdW437RRt6587Hcs1qs\"]},\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IERC4626.sol\":{\"keccak256\":\"0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e\",\"license\":\"GPL-2.0-or-later\",\"urls\":[\"bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3\",\"dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP\"]},\"contracts/src/interfaces/IERC4626Hyperdrive.sol\":{\"keccak256\":\"0xc7f5a5cbfc5ba21f72fc7699d616e2483d4589514a14b6e39f624d0f4d9453e7\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://a4d7b144f357e86bfd23c805bb670226aa0c87b078babcd4dd3ec8b8f0b3374f\",\"dweb:/ipfs/QmTYNfB4ABRtPjCVck2uq5wQA8PvxBS45mPkVevc82TTFa\"]},\"contracts/src/interfaces/IERC4626HyperdriveCore.sol\":{\"keccak256\":\"0x9f9ace26856fd355d7934ac123672ca21a1539b7190b37099d48e9e96d3cafa4\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f1297786537a3276eb161aaf55bebbaf117298dd117b7179ac51df49e425844a\",\"dweb:/ipfs/QmeZRUDmVRAYh1f8dDyLxZfBTeUHsAzCot4TGb8zNbjHoz\"]},\"contracts/src/interfaces/IERC4626HyperdriveRead.sol\":{\"keccak256\":\"0xa8e179af6fdc2a33e2e111ff6d4ba084e49b966241f16db30b24183ccfdd5d84\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fedf4075f1dfdc512c10b1ec637fc354bd1f360234dc5d64b1b0b6189c73dc8a\",\"dweb:/ipfs/QmTPrVM7rVu9hWgqhRokVcpwSibD1ZWtYwuL72Wvn8iGDz\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]},\"contracts/src/internal/HyperdriveBase.sol\":{\"keccak256\":\"0x85425352d87169445470983b3ba518d759f022bdbaec6dad3bdd606a96f9b826\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://453da96e4ddc453cace00c54c3bef55ab1b7f7d23c86c33e5aa09c395ee54496\",\"dweb:/ipfs/QmXkvqn4mEq8sw4ofFW4jKR3QCmPJTxGmKh6YWpKp5sU3w\"]},\"contracts/src/internal/HyperdriveStorage.sol\":{\"keccak256\":\"0xfeac73551892783afcce85d23fb910baf2ad729d218756f3597ad23e3dcb077f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://1f659070705bee17efda43c36f71d22b035752f610624c59238cae559c60530d\",\"dweb:/ipfs/QmTEXNYSWa8w3wY2TWzDPNZXxdThMFEbrtRwcQHfyN2CJb\"]},\"contracts/src/libraries/AssetId.sol\":{\"keccak256\":\"0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b\",\"dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst\"]},\"contracts/src/libraries/Errors.sol\":{\"keccak256\":\"0x45f48f5b8caec5b751850b7266abd84c7400debfbad0f112847582bb052058b0\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://46c85e0c750cdb752bec5d67a8a0bc8df071d934c568c880d08a5120a1a11d88\",\"dweb:/ipfs/Qmc2L1ePB1gqBwUiaAUeoG6hvoPtS2hdY6rhEXzX1SfB41\"]},\"contracts/src/libraries/FixedPointMath.sol\":{\"keccak256\":\"0xdcf0c77bc29a0b5b2ce06cccfa6f5e936128e5c0f14a5636bfe21faf95c515bf\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://088172c3f97db68914cdef042d942b0d0c585cce77d004625bfa62a72ac1e95d\",\"dweb:/ipfs/Qmewa9GJtYxBw4fAx4HZJaNuUCKEoQT4c5nmhPyXxVEwwq\"]},\"contracts/src/libraries/HyperdriveMath.sol\":{\"keccak256\":\"0x94662a356f9ab292c0935ff4c29f9b826a17176eb98b472efed7afbfe4d5d744\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://794c5605f8f0716b871a8747fea516d26fd73f0add45a944ac4034de96c60c7a\",\"dweb:/ipfs/QmYSsquDzxupHSwWMsjjooxNxuzQ29ezczFsP2VQ5PYYve\"]},\"contracts/src/libraries/LPMath.sol\":{\"keccak256\":\"0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244\",\"dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY\"]},\"contracts/src/libraries/SafeCast.sol\":{\"keccak256\":\"0x390a002b83e7ed8a99d4ca9b3ea514b2080c237911a3a3d0fa2ad4522a09d60b\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://51ea972cf6d3c79ea6b93c63c85fbba2bd234e71704715a1d9bd897da9d6fcb1\",\"dweb:/ipfs/QmXEGDrLyeAYMZiDVNynVzRzAYgnspcdLfkMeGr81DmJpL\"]},\"contracts/src/libraries/YieldSpaceMath.sol\":{\"keccak256\":\"0x76f69d3104f3f97d67289512325306d7ea2c7b29a787eeef93ffc47e8a80f346\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://6c8df31a46b4287c23c67e0157e6f6a4877608ed3fb1919a9c07f5bd9b81d7f6\",\"dweb:/ipfs/QmPua6efzJGnC7NarnPojk9yF2geqenUaXUNRmPVHJdXWk\"]},\"lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol\":{\"keccak256\":\"0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f\",\"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229\",\"dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c\",\"dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850\",\"dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d\",\"dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi\"]},\"lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0\",\"dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3\"]},\"lib/openzeppelin-contracts/contracts/utils/Address.sol\":{\"keccak256\":\"0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245\",\"dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y\"]},\"lib/openzeppelin-contracts/contracts/utils/Context.sol\":{\"keccak256\":\"0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12\",\"dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF\"]},\"lib/openzeppelin-contracts/contracts/utils/ReentrancyGuard.sol\":{\"keccak256\":\"0xf980daa263b661ab8ddee7d4fd833c7da7e7995e2c359ff1f17e67e4112f2236\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7448ab095d6940130bcf76ba47a2eab14148c83119523b93dd89f6d84edd6c02\",\"dweb:/ipfs/QmawrZ4voKQjH3oomXT3Kuheb3Mnmo2VvVpxg8Ne5UJUrd\"]}},\"version\":1}",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "internalType": "address",
              "name": "collector",
              "type": "address",
              "indexed": true
            },
            {
              "internalType": "uint256",
              "name": "fees",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "CollectGovernanceFee",
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
              "name": "vaultSharePrice",
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
              "name": "newGovernance",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "GovernanceUpdated",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "internalType": "bool",
              "name": "isPaused",
              "type": "bool",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "PauseStatusUpdated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newPauser",
              "type": "address",
              "indexed": true
            }
          ],
          "type": "event",
          "name": "PauserUpdated",
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
              "name": "vaultSharePrice",
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
              "name": "vaultSharePrice",
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
              "__vault": "The ERC4626 compatible vault."
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
        "contracts/src/instances/erc4626/ERC4626Base.sol": "ERC4626Base"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/src/instances/erc4626/ERC4626Base.sol": {
        "keccak256": "0xcd961bed2634599e8060353f5219cd4cebff4ce3f29c3131cf69543cb280ac18",
        "urls": [
          "bzz-raw://d36f480b1e18086ff23ffead15ebbb42eb6bba82ab8f0357e4abcd14850a2a79",
          "dweb:/ipfs/QmNehYBaGMciT2ZepWZ88yq8GftqdW437RRt6587Hcs1qs"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC20.sol": {
        "keccak256": "0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3",
        "urls": [
          "bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398",
          "dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626.sol": {
        "keccak256": "0x7d99427dc97cc1b469d205de5ced0eb15c6e305d0a7ef73d45fe7ef47ce7231e",
        "urls": [
          "bzz-raw://c7726091d2f569ff79057a693324886e2a5558c586684460b51cd20612be59d3",
          "dweb:/ipfs/QmZv6BBe22fZRaC5iYiTuZMD2ZgUXvMBHjwZLikVSoXjDP"
        ],
        "license": "GPL-2.0-or-later"
      },
      "contracts/src/interfaces/IERC4626Hyperdrive.sol": {
        "keccak256": "0xc7f5a5cbfc5ba21f72fc7699d616e2483d4589514a14b6e39f624d0f4d9453e7",
        "urls": [
          "bzz-raw://a4d7b144f357e86bfd23c805bb670226aa0c87b078babcd4dd3ec8b8f0b3374f",
          "dweb:/ipfs/QmTYNfB4ABRtPjCVck2uq5wQA8PvxBS45mPkVevc82TTFa"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626HyperdriveCore.sol": {
        "keccak256": "0x9f9ace26856fd355d7934ac123672ca21a1539b7190b37099d48e9e96d3cafa4",
        "urls": [
          "bzz-raw://f1297786537a3276eb161aaf55bebbaf117298dd117b7179ac51df49e425844a",
          "dweb:/ipfs/QmeZRUDmVRAYh1f8dDyLxZfBTeUHsAzCot4TGb8zNbjHoz"
        ],
        "license": "Apache-2.0"
      },
      "contracts/src/interfaces/IERC4626HyperdriveRead.sol": {
        "keccak256": "0xa8e179af6fdc2a33e2e111ff6d4ba084e49b966241f16db30b24183ccfdd5d84",
        "urls": [
          "bzz-raw://fedf4075f1dfdc512c10b1ec637fc354bd1f360234dc5d64b1b0b6189c73dc8a",
          "dweb:/ipfs/QmTPrVM7rVu9hWgqhRokVcpwSibD1ZWtYwuL72Wvn8iGDz"
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
      "contracts/src/internal/HyperdriveBase.sol": {
        "keccak256": "0x85425352d87169445470983b3ba518d759f022bdbaec6dad3bdd606a96f9b826",
        "urls": [
          "bzz-raw://453da96e4ddc453cace00c54c3bef55ab1b7f7d23c86c33e5aa09c395ee54496",
          "dweb:/ipfs/QmXkvqn4mEq8sw4ofFW4jKR3QCmPJTxGmKh6YWpKp5sU3w"
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
      "contracts/src/libraries/AssetId.sol": {
        "keccak256": "0xc2e36474285afd5b98999d648305f077a05b0e159dd63ef5f44f29cd42eb68c2",
        "urls": [
          "bzz-raw://fbf8aac982e8485dce3f8c7f85b9bbbd46b41d8d0d3deebe1fc927799de60c0b",
          "dweb:/ipfs/QmbUJsi5cqS4M4sVcJ8cDWvbMRSqYzfjRAp8gaP1v2dtst"
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
      "contracts/src/libraries/LPMath.sol": {
        "keccak256": "0x8d9491ad62e48c7148389a72feca73a388076e3386d7ddc6788193be359e1266",
        "urls": [
          "bzz-raw://d340b65b76fc638d119d7d1d6f38fa044c34fc9297dc0c1627c9820218b2e244",
          "dweb:/ipfs/QmZo3nPVg3j2Ga8UXRZFQyTq7RuYuY6F2tYynnVUP4SbDY"
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
      "lib/openzeppelin-contracts/contracts/interfaces/draft-IERC6093.sol": {
        "keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
        "urls": [
          "bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
          "dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol": {
        "keccak256": "0xc3e1fa9d1987f8d349dfb4d6fe93bf2ca014b52ba335cfac30bfe71e357e6f80",
        "urls": [
          "bzz-raw://c5703ccdeb7b1d685e375ed719117e9edf2ab4bc544f24f23b0d50ec82257229",
          "dweb:/ipfs/QmTdwkbQq7owpCiyuzE7eh5LrD2ddrBCZ5WHVsWPi1RrTS"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol": {
        "keccak256": "0xc6a8ff0ea489379b61faa647490411b80102578440ab9d84e9a957cc12164e70",
        "urls": [
          "bzz-raw://0ea104e577e63faea3b69c415637e99e755dcbf64c5833d7140c35a714d6d90c",
          "dweb:/ipfs/Qmau6x4Ns9XdyynRCNNp3RhLqijJjFm7z5fyZazfYFGYdq"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Metadata.sol": {
        "keccak256": "0xaa761817f6cd7892fcf158b3c776b34551cde36f48ff9703d53898bc45a94ea2",
        "urls": [
          "bzz-raw://0ad7c8d4d08938c8dfc43d75a148863fb324b80cf53e0a36f7e5a4ac29008850",
          "dweb:/ipfs/QmcrhfPgVNf5mkdhQvy1pMv51TFokD3Y4Wa5WZhFqVh8UV"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/extensions/IERC20Permit.sol": {
        "keccak256": "0x6008dabfe393240d73d7dd7688033f72740d570aa422254d29a7dce8568f3aff",
        "urls": [
          "bzz-raw://f5196ec75139918c6c7bb4251b36395e668f1fa6d206beba7e7520e74913940d",
          "dweb:/ipfs/QmSyqjksXxmm2mCG6qRd1yuwLykypkSVBbnBnGqJRcuJMi"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol": {
        "keccak256": "0x37bb49513c49c87c4642a891b13b63571bc87013dde806617aa1efb54605f386",
        "urls": [
          "bzz-raw://b3036b3a83b7c48f96641f2a9002b9f2dcb6a5958dd670894ada21ae8229b3d0",
          "dweb:/ipfs/QmUNfSBdoVtjhETaUJCYcaC7pTMgbhht926tJ2uXJbiVd3"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Address.sol": {
        "keccak256": "0xaf28a975a78550e45f65e559a3ad6a5ad43b9b8a37366999abd1b7084eb70721",
        "urls": [
          "bzz-raw://b7bd24e224f67f65bfadf85dc2929fa965456bb2415478bd0125471b5ce35245",
          "dweb:/ipfs/QmRaydGr8BTHs1kvaZfsNU69pKzUAGFrvABn1KiRSbE51y"
        ],
        "license": "MIT"
      },
      "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
        "keccak256": "0x493033a8d1b176a037b2cc6a04dad01a5c157722049bbecf632ca876224dd4b2",
        "urls": [
          "bzz-raw://6a708e8a5bdb1011c2c381c9a5cfd8a9a956d7d0a9dc1bd8bcdaf52f76ef2f12",
          "dweb:/ipfs/Qmax9WHBnVsZP46ZxEMNRQpLQnrdE4dK8LehML1Py8FowF"
        ],
        "license": "MIT"
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
    "absolutePath": "contracts/src/instances/erc4626/ERC4626Base.sol",
    "id": 5662,
    "exportedSymbols": {
      "ERC20": [
        66324
      ],
      "ERC4626Base": [
        5661
      ],
      "FixedPointMath": [
        14294
      ],
      "HyperdriveBase": [
        9507
      ],
      "IERC4626": [
        7013
      ],
      "IERC4626Hyperdrive": [
        7028
      ],
      "IHyperdrive": [
        7411
      ],
      "ONE": [
        13529
      ],
      "SafeERC20": [
        66754
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:6374:23",
    "nodes": [
      {
        "id": 5431,
        "nodeType": "PragmaDirective",
        "src": "39:23:23",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 5433,
        "nodeType": "ImportDirective",
        "src": "64:59:23",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol",
        "file": "openzeppelin/token/ERC20/ERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5662,
        "sourceUnit": 66325,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5432,
              "name": "ERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 66324,
              "src": "73:5:23",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5435,
        "nodeType": "ImportDirective",
        "src": "124:73:23",
        "nodes": [],
        "absolutePath": "lib/openzeppelin-contracts/contracts/token/ERC20/utils/SafeERC20.sol",
        "file": "openzeppelin/token/ERC20/utils/SafeERC20.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5662,
        "sourceUnit": 66755,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5434,
              "name": "SafeERC20",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 66754,
              "src": "133:9:23",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5437,
        "nodeType": "ImportDirective",
        "src": "198:57:23",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626.sol",
        "file": "../../interfaces/IERC4626.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5662,
        "sourceUnit": 7014,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5436,
              "name": "IERC4626",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7013,
              "src": "207:8:23",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5439,
        "nodeType": "ImportDirective",
        "src": "256:63:23",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "../../interfaces/IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5662,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5438,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "265:11:23",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5441,
        "nodeType": "ImportDirective",
        "src": "320:77:23",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IERC4626Hyperdrive.sol",
        "file": "../../interfaces/IERC4626Hyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5662,
        "sourceUnit": 7029,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5440,
              "name": "IERC4626Hyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7028,
              "src": "329:18:23",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5443,
        "nodeType": "ImportDirective",
        "src": "398:67:23",
        "nodes": [],
        "absolutePath": "contracts/src/internal/HyperdriveBase.sol",
        "file": "../../internal/HyperdriveBase.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5662,
        "sourceUnit": 9508,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5442,
              "name": "HyperdriveBase",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 9507,
              "src": "407:14:23",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5446,
        "nodeType": "ImportDirective",
        "src": "466:73:23",
        "nodes": [],
        "absolutePath": "contracts/src/libraries/FixedPointMath.sol",
        "file": "../../libraries/FixedPointMath.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 5662,
        "sourceUnit": 14295,
        "symbolAliases": [
          {
            "foreign": {
              "id": 5444,
              "name": "FixedPointMath",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 14294,
              "src": "475:14:23",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          },
          {
            "foreign": {
              "id": 5445,
              "name": "ONE",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 13529,
              "src": "491:3:23",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 5661,
        "nodeType": "ContractDefinition",
        "src": "878:5534:23",
        "nodes": [
          {
            "id": 5452,
            "nodeType": "UsingForDirective",
            "src": "932:33:23",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 5450,
              "name": "FixedPointMath",
              "nameLocations": [
                "938:14:23"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 14294,
              "src": "938:14:23"
            },
            "typeName": {
              "id": 5451,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "957:7:23",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "id": 5456,
            "nodeType": "UsingForDirective",
            "src": "970:26:23",
            "nodes": [],
            "global": false,
            "libraryName": {
              "id": 5453,
              "name": "SafeERC20",
              "nameLocations": [
                "976:9:23"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 66754,
              "src": "976:9:23"
            },
            "typeName": {
              "id": 5455,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 5454,
                "name": "ERC20",
                "nameLocations": [
                  "990:5:23"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 66324,
                "src": "990:5:23"
              },
              "referencedDeclaration": 66324,
              "src": "990:5:23",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$66324",
                "typeString": "contract ERC20"
              }
            }
          },
          {
            "id": 5460,
            "nodeType": "VariableDeclaration",
            "src": "1072:34:23",
            "nodes": [],
            "constant": false,
            "documentation": {
              "id": 5457,
              "nodeType": "StructuredDocumentation",
              "src": "1002:65:23",
              "text": "@dev The ERC4626 vault that this pool uses as a yield source."
            },
            "mutability": "immutable",
            "name": "_vault",
            "nameLocation": "1100:6:23",
            "scope": 5661,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IERC4626_$7013",
              "typeString": "contract IERC4626"
            },
            "typeName": {
              "id": 5459,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 5458,
                "name": "IERC4626",
                "nameLocations": [
                  "1072:8:23"
                ],
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 7013,
                "src": "1072:8:23"
              },
              "referencedDeclaration": 7013,
              "src": "1072:8:23",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IERC4626_$7013",
                "typeString": "contract IERC4626"
              }
            },
            "visibility": "internal"
          },
          {
            "id": 5472,
            "nodeType": "FunctionDefinition",
            "src": "1233:105:23",
            "nodes": [],
            "body": {
              "id": 5471,
              "nodeType": "Block",
              "src": "1263:75:23",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "id": 5469,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5467,
                      "name": "_vault",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5460,
                      "src": "1315:6:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC4626_$7013",
                        "typeString": "contract IERC4626"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 5468,
                      "name": "__vault",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5464,
                      "src": "1324:7:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IERC4626_$7013",
                        "typeString": "contract IERC4626"
                      }
                    },
                    "src": "1315:16:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$7013",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "id": 5470,
                  "nodeType": "ExpressionStatement",
                  "src": "1315:16:23"
                }
              ]
            },
            "documentation": {
              "id": 5461,
              "nodeType": "StructuredDocumentation",
              "src": "1113:115:23",
              "text": "@notice Instantiates the ERC4626 Hyperdrive base contract.\n @param __vault The ERC4626 compatible vault."
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 5465,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5464,
                  "mutability": "mutable",
                  "name": "__vault",
                  "nameLocation": "1254:7:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 5472,
                  "src": "1245:16:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_IERC4626_$7013",
                    "typeString": "contract IERC4626"
                  },
                  "typeName": {
                    "id": 5463,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5462,
                      "name": "IERC4626",
                      "nameLocations": [
                        "1245:8:23"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7013,
                      "src": "1245:8:23"
                    },
                    "referencedDeclaration": 7013,
                    "src": "1245:8:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IERC4626_$7013",
                      "typeString": "contract IERC4626"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1244:18:23"
            },
            "returnParameters": {
              "id": 5466,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1263:0:23"
            },
            "scope": 5661,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5560,
            "nodeType": "FunctionDefinition",
            "src": "2066:1468:23",
            "nodes": [],
            "body": {
              "id": 5559,
              "nodeType": "Block",
              "src": "2264:1270:23",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "expression": {
                      "id": 5486,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5478,
                      "src": "2278:8:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 5487,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "2287:6:23",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7267,
                    "src": "2278:15:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 5552,
                    "nodeType": "Block",
                    "src": "3007:472:23",
                    "statements": [
                      {
                        "expression": {
                          "id": 5534,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 5532,
                            "name": "sharesMinted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5482,
                            "src": "3229:12:23",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 5533,
                            "name": "_amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5475,
                            "src": "3244:7:23",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3229:22:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5535,
                        "nodeType": "ExpressionStatement",
                        "src": "3229:22:23"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 5543,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "3383:3:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 5544,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "3387:6:23",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "3383:10:23",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 5547,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "3419:4:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC4626Base_$5661",
                                    "typeString": "contract ERC4626Base"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ERC4626Base_$5661",
                                    "typeString": "contract ERC4626Base"
                                  }
                                ],
                                "id": 5546,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3411:7:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 5545,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3411:7:23",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 5548,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3411:13:23",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 5549,
                              "name": "sharesMinted",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5482,
                              "src": "3442:12:23",
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
                                      "id": 5539,
                                      "name": "_vault",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 5460,
                                      "src": "3340:6:23",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$7013",
                                        "typeString": "contract IERC4626"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC4626_$7013",
                                        "typeString": "contract IERC4626"
                                      }
                                    ],
                                    "id": 5538,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "3332:7:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 5537,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "3332:7:23",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 5540,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3332:15:23",
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
                                "id": 5536,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 66324,
                                "src": "3326:5:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$66324_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 5541,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3326:22:23",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$66324",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 5542,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "3349:16:23",
                            "memberName": "safeTransferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 66541,
                            "src": "3326:39:23",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$66402_$",
                              "typeString": "function (contract IERC20,address,address,uint256)"
                            }
                          },
                          "id": 5550,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3326:142:23",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5551,
                        "nodeType": "ExpressionStatement",
                        "src": "3326:142:23"
                      }
                    ]
                  },
                  "id": 5553,
                  "nodeType": "IfStatement",
                  "src": "2274:1205:23",
                  "trueBody": {
                    "id": 5531,
                    "nodeType": "Block",
                    "src": "2295:706:23",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 5495,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "2422:3:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 5496,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2426:6:23",
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "2422:10:23",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "arguments": [
                                {
                                  "id": 5499,
                                  "name": "this",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -28,
                                  "src": "2458:4:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_ERC4626Base_$5661",
                                    "typeString": "contract ERC4626Base"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_ERC4626Base_$5661",
                                    "typeString": "contract ERC4626Base"
                                  }
                                ],
                                "id": 5498,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2450:7:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 5497,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2450:7:23",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 5500,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2450:13:23",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 5501,
                              "name": "_amount",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5475,
                              "src": "2481:7:23",
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
                                      "id": 5491,
                                      "name": "_baseToken",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 13002,
                                      "src": "2375:10:23",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$6740",
                                        "typeString": "contract IERC20"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC20_$6740",
                                        "typeString": "contract IERC20"
                                      }
                                    ],
                                    "id": 5490,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2367:7:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 5489,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2367:7:23",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 5492,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2367:19:23",
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
                                "id": 5488,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 66324,
                                "src": "2361:5:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$66324_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 5493,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2361:26:23",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$66324",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 5494,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2388:16:23",
                            "memberName": "safeTransferFrom",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 66541,
                            "src": "2361:43:23",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_address_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$66402_$",
                              "typeString": "function (contract IERC20,address,address,uint256)"
                            }
                          },
                          "id": 5502,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2361:141:23",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5503,
                        "nodeType": "ExpressionStatement",
                        "src": "2361:141:23"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "id": 5513,
                                  "name": "_vault",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5460,
                                  "src": "2873:6:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_IERC4626_$7013",
                                    "typeString": "contract IERC4626"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_IERC4626_$7013",
                                    "typeString": "contract IERC4626"
                                  }
                                ],
                                "id": 5512,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2865:7:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": {
                                  "id": 5511,
                                  "name": "address",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "2865:7:23",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 5514,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2865:15:23",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "id": 5517,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "id": 5515,
                                "name": "_amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5475,
                                "src": "2898:7:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "+",
                              "rightExpression": {
                                "hexValue": "31",
                                "id": 5516,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2908:1:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_1_by_1",
                                  "typeString": "int_const 1"
                                },
                                "value": "1"
                              },
                              "src": "2898:11:23",
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
                                      "id": 5507,
                                      "name": "_baseToken",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 13002,
                                      "src": "2822:10:23",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC20_$6740",
                                        "typeString": "contract IERC20"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC20_$6740",
                                        "typeString": "contract IERC20"
                                      }
                                    ],
                                    "id": 5506,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2814:7:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 5505,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "2814:7:23",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 5508,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2814:19:23",
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
                                "id": 5504,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 66324,
                                "src": "2808:5:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$66324_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 5509,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2808:26:23",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$66324",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 5510,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "2835:12:23",
                            "memberName": "forceApprove",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 66662,
                            "src": "2808:39:23",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$66402_$",
                              "typeString": "function (contract IERC20,address,uint256)"
                            }
                          },
                          "id": 5518,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2808:115:23",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5519,
                        "nodeType": "ExpressionStatement",
                        "src": "2808:115:23"
                      },
                      {
                        "expression": {
                          "id": 5529,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 5520,
                            "name": "sharesMinted",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5482,
                            "src": "2937:12:23",
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
                                "id": 5523,
                                "name": "_amount",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5475,
                                "src": "2967:7:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 5526,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "2984:4:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_ERC4626Base_$5661",
                                      "typeString": "contract ERC4626Base"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ERC4626Base_$5661",
                                      "typeString": "contract ERC4626Base"
                                    }
                                  ],
                                  "id": 5525,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2976:7:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 5524,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "2976:7:23",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 5527,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2976:13:23",
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
                                "id": 5521,
                                "name": "_vault",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5460,
                                "src": "2952:6:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC4626_$7013",
                                  "typeString": "contract IERC4626"
                                }
                              },
                              "id": 5522,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "2959:7:23",
                              "memberName": "deposit",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6898,
                              "src": "2952:14:23",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (uint256,address) external returns (uint256)"
                              }
                            },
                            "id": 5528,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2952:38:23",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "2937:53:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5530,
                        "nodeType": "ExpressionStatement",
                        "src": "2937:53:23"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "id": 5557,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5554,
                      "name": "vaultSharePrice",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5484,
                      "src": "3488:15:23",
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
                        "id": 5555,
                        "name": "_pricePerVaultShare",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          5643
                        ],
                        "referencedDeclaration": 5643,
                        "src": "3506:19:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$__$returns$_t_uint256_$",
                          "typeString": "function () view returns (uint256)"
                        }
                      },
                      "id": 5556,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3506:21:23",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3488:39:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5558,
                  "nodeType": "ExpressionStatement",
                  "src": "3488:39:23"
                }
              ]
            },
            "baseFunctions": [
              8650
            ],
            "documentation": {
              "id": 5473,
              "nodeType": "StructuredDocumentation",
              "src": "1370:691:23",
              "text": "@notice Accepts a trader's deposit in either base or vault shares. If\n         the deposit is settled in base, the base is deposited into the\n         yield source immediately.\n @param _amount The amount of token to transfer. It will be in either\n          base or shares depending on the `asBase` option.\n @param _options The options that configure the deposit. The only option\n        used in this implementation is \"asBase\" which determines if\n        the deposit is settled in base or vault shares.\n @return sharesMinted The shares this deposit creates.\n @return vaultSharePrice The vault share price at time of deposit."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_deposit",
            "nameLocation": "2075:8:23",
            "overrides": {
              "id": 5480,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "2187:8:23"
            },
            "parameters": {
              "id": 5479,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5475,
                  "mutability": "mutable",
                  "name": "_amount",
                  "nameLocation": "2101:7:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 5560,
                  "src": "2093:15:23",
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
                    "src": "2093:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5478,
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "2147:8:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 5560,
                  "src": "2118:37:23",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 5477,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5476,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "2118:11:23",
                        "2130:7:23"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "2118:19:23"
                    },
                    "referencedDeclaration": 7271,
                    "src": "2118:19:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2083:78:23"
            },
            "returnParameters": {
              "id": 5485,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5482,
                  "mutability": "mutable",
                  "name": "sharesMinted",
                  "nameLocation": "2221:12:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 5560,
                  "src": "2213:20:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5481,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2213:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5484,
                  "mutability": "mutable",
                  "name": "vaultSharePrice",
                  "nameLocation": "2243:15:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 5560,
                  "src": "2235:23:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5483,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2235:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "2212:47:23"
            },
            "scope": 5661,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5630,
            "nodeType": "FunctionDefinition",
            "src": "4345:1482:23",
            "nodes": [],
            "body": {
              "id": 5629,
              "nodeType": "Block",
              "src": "4523:1304:23",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    5575
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5575,
                      "mutability": "mutable",
                      "name": "baseAmount",
                      "nameLocation": "4822:10:23",
                      "nodeType": "VariableDeclaration",
                      "scope": 5629,
                      "src": "4814:18:23",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5574,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4814:7:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 5580,
                  "initialValue": {
                    "arguments": [
                      {
                        "id": 5578,
                        "name": "_sharePrice",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5565,
                        "src": "4851:11:23",
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
                        "id": 5576,
                        "name": "_shares",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5563,
                        "src": "4835:7:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "id": 5577,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "4843:7:23",
                      "memberName": "mulDown",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 13572,
                      "src": "4835:15:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$attached_to$_t_uint256_$",
                        "typeString": "function (uint256,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 5579,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4835:28:23",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4814:49:23"
                },
                {
                  "expression": {
                    "id": 5586,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 5581,
                      "name": "_shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5563,
                      "src": "4873:7:23",
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
                          "id": 5584,
                          "name": "baseAmount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5575,
                          "src": "4906:10:23",
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
                          "id": 5582,
                          "name": "_vault",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5460,
                          "src": "4883:6:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_IERC4626_$7013",
                            "typeString": "contract IERC4626"
                          }
                        },
                        "id": 5583,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "4890:15:23",
                        "memberName": "convertToShares",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 6940,
                        "src": "4883:22:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256) view external returns (uint256)"
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
                      "src": "4883:34:23",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4873:44:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5587,
                  "nodeType": "ExpressionStatement",
                  "src": "4873:44:23"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5590,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 5588,
                      "name": "_shares",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5563,
                      "src": "5005:7:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 5589,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5016:1:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "5005:12:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5594,
                  "nodeType": "IfStatement",
                  "src": "5001:51:23",
                  "trueBody": {
                    "id": 5593,
                    "nodeType": "Block",
                    "src": "5019:33:23",
                    "statements": [
                      {
                        "expression": {
                          "hexValue": "30",
                          "id": 5591,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5040:1:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 5573,
                        "id": 5592,
                        "nodeType": "Return",
                        "src": "5033:8:23"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "expression": {
                      "id": 5595,
                      "name": "_options",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5568,
                      "src": "5203:8:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                        "typeString": "struct IHyperdrive.Options calldata"
                      }
                    },
                    "id": 5596,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberLocation": "5212:6:23",
                    "memberName": "asBase",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7267,
                    "src": "5203:15:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 5627,
                    "nodeType": "Block",
                    "src": "5634:187:23",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "expression": {
                                "id": 5618,
                                "name": "_options",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5568,
                                "src": "5741:8:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                                  "typeString": "struct IHyperdrive.Options calldata"
                                }
                              },
                              "id": 5619,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5750:11:23",
                              "memberName": "destination",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 7264,
                              "src": "5741:20:23",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "id": 5620,
                              "name": "_shares",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5563,
                              "src": "5763:7:23",
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
                                      "id": 5614,
                                      "name": "_vault",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 5460,
                                      "src": "5719:6:23",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_IERC4626_$7013",
                                        "typeString": "contract IERC4626"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_IERC4626_$7013",
                                        "typeString": "contract IERC4626"
                                      }
                                    ],
                                    "id": 5613,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "5711:7:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": {
                                      "id": 5612,
                                      "name": "address",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "5711:7:23",
                                      "typeDescriptions": {}
                                    }
                                  },
                                  "id": 5615,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "nameLocations": [],
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "5711:15:23",
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
                                "id": 5611,
                                "name": "ERC20",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 66324,
                                "src": "5705:5:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_ERC20_$66324_$",
                                  "typeString": "type(contract ERC20)"
                                }
                              },
                              "id": 5616,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "nameLocations": [],
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "5705:22:23",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_ERC20_$66324",
                                "typeString": "contract ERC20"
                              }
                            },
                            "id": 5617,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "5728:12:23",
                            "memberName": "safeTransfer",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 66514,
                            "src": "5705:35:23",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_contract$_IERC20_$66402_$_t_address_$_t_uint256_$returns$__$attached_to$_t_contract$_IERC20_$66402_$",
                              "typeString": "function (contract IERC20,address,uint256)"
                            }
                          },
                          "id": 5621,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "5705:66:23",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5622,
                        "nodeType": "ExpressionStatement",
                        "src": "5705:66:23"
                      },
                      {
                        "expression": {
                          "id": 5625,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 5623,
                            "name": "amountWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5572,
                            "src": "5785:15:23",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "id": 5624,
                            "name": "_shares",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5563,
                            "src": "5803:7:23",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5785:25:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5626,
                        "nodeType": "ExpressionStatement",
                        "src": "5785:25:23"
                      }
                    ]
                  },
                  "id": 5628,
                  "nodeType": "IfStatement",
                  "src": "5199:622:23",
                  "trueBody": {
                    "id": 5610,
                    "nodeType": "Block",
                    "src": "5220:283:23",
                    "statements": [
                      {
                        "expression": {
                          "id": 5608,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 5597,
                            "name": "amountWithdrawn",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5572,
                            "src": "5353:15:23",
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
                                "id": 5600,
                                "name": "_shares",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5563,
                                "src": "5402:7:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "expression": {
                                  "id": 5601,
                                  "name": "_options",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 5568,
                                  "src": "5427:8:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                                    "typeString": "struct IHyperdrive.Options calldata"
                                  }
                                },
                                "id": 5602,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberLocation": "5436:11:23",
                                "memberName": "destination",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 7264,
                                "src": "5427:20:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "arguments": [
                                  {
                                    "id": 5605,
                                    "name": "this",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": -28,
                                    "src": "5473:4:23",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_ERC4626Base_$5661",
                                      "typeString": "contract ERC4626Base"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_ERC4626Base_$5661",
                                      "typeString": "contract ERC4626Base"
                                    }
                                  ],
                                  "id": 5604,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "5465:7:23",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": {
                                    "id": 5603,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "5465:7:23",
                                    "typeDescriptions": {}
                                  }
                                },
                                "id": 5606,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "nameLocations": [],
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "5465:13:23",
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
                                "id": 5598,
                                "name": "_vault",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 5460,
                                "src": "5371:6:23",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_IERC4626_$7013",
                                  "typeString": "contract IERC4626"
                                }
                              },
                              "id": 5599,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberLocation": "5378:6:23",
                              "memberName": "redeem",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 6932,
                              "src": "5371:13:23",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$_t_address_$_t_address_$returns$_t_uint256_$",
                                "typeString": "function (uint256,address,address) external returns (uint256)"
                              }
                            },
                            "id": 5607,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "nameLocations": [],
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "5371:121:23",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "5353:139:23",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5609,
                        "nodeType": "ExpressionStatement",
                        "src": "5353:139:23"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              8663
            ],
            "documentation": {
              "id": 5561,
              "nodeType": "StructuredDocumentation",
              "src": "3540:800:23",
              "text": "@notice Processes a trader's withdrawal in either base or vault shares.\n         If the withdrawal is settled in base, the base will need to be\n         withdrawn from the yield source.\n @param _shares The amount of shares to withdraw from Hyperdrive.\n @param _sharePrice The share price.\n @param _options The options that configure the withdrawal. The options\n        used in this implementation are \"destination\" which specifies the\n        recipient of the withdrawal and \"asBase\" which determines\n        if the withdrawal is settled in base or vault shares.\n @return amountWithdrawn The amount withdrawn from the yield source.\n         it will be in either base or shares depending on the `asBase`\n         option."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_withdraw",
            "nameLocation": "4354:9:23",
            "overrides": {
              "id": 5570,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "4480:8:23"
            },
            "parameters": {
              "id": 5569,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5563,
                  "mutability": "mutable",
                  "name": "_shares",
                  "nameLocation": "4381:7:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 5630,
                  "src": "4373:15:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5562,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4373:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5565,
                  "mutability": "mutable",
                  "name": "_sharePrice",
                  "nameLocation": "4406:11:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 5630,
                  "src": "4398:19:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5564,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4398:7:23",
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
                  "mutability": "mutable",
                  "name": "_options",
                  "nameLocation": "4456:8:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 5630,
                  "src": "4427:37:23",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Options_$7271_calldata_ptr",
                    "typeString": "struct IHyperdrive.Options"
                  },
                  "typeName": {
                    "id": 5567,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 5566,
                      "name": "IHyperdrive.Options",
                      "nameLocations": [
                        "4427:11:23",
                        "4439:7:23"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7271,
                      "src": "4427:19:23"
                    },
                    "referencedDeclaration": 7271,
                    "src": "4427:19:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Options_$7271_storage_ptr",
                      "typeString": "struct IHyperdrive.Options"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4363:107:23"
            },
            "returnParameters": {
              "id": 5573,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5572,
                  "mutability": "mutable",
                  "name": "amountWithdrawn",
                  "nameLocation": "4506:15:23",
                  "nodeType": "VariableDeclaration",
                  "scope": 5630,
                  "src": "4498:23:23",
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
                    "src": "4498:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "4497:25:23"
            },
            "scope": 5661,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5643,
            "nodeType": "FunctionDefinition",
            "src": "6024:123:23",
            "nodes": [],
            "body": {
              "id": 5642,
              "nodeType": "Block",
              "src": "6096:51:23",
              "nodes": [],
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 5639,
                        "name": "ONE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13529,
                        "src": "6136:3:23",
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
                        "id": 5637,
                        "name": "_vault",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5460,
                        "src": "6113:6:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_IERC4626_$7013",
                          "typeString": "contract IERC4626"
                        }
                      },
                      "id": 5638,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6120:15:23",
                      "memberName": "convertToAssets",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6948,
                      "src": "6113:22:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256) view external returns (uint256)"
                      }
                    },
                    "id": 5640,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6113:27:23",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 5636,
                  "id": 5641,
                  "nodeType": "Return",
                  "src": "6106:34:23"
                }
              ]
            },
            "baseFunctions": [
              8669
            ],
            "documentation": {
              "id": 5631,
              "nodeType": "StructuredDocumentation",
              "src": "5833:186:23",
              "text": "@notice Loads the vault share price from the yield source.\n @return The current vault share price.\n @dev must remain consistent with the impl inside of the DataProvider"
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_pricePerVaultShare",
            "nameLocation": "6033:19:23",
            "overrides": {
              "id": 5633,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "6069:8:23"
            },
            "parameters": {
              "id": 5632,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6052:2:23"
            },
            "returnParameters": {
              "id": 5636,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5635,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 5643,
                  "src": "6087:7:23",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5634,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6087:7:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "6086:9:23"
            },
            "scope": 5661,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "id": 5660,
            "nodeType": "FunctionDefinition",
            "src": "6265:145:23",
            "nodes": [],
            "body": {
              "id": 5659,
              "nodeType": "Block",
              "src": "6318:92:23",
              "nodes": [],
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5651,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "id": 5648,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "6332:3:23",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 5649,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberLocation": "6336:5:23",
                      "memberName": "value",
                      "nodeType": "MemberAccess",
                      "src": "6332:9:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 5650,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "6345:1:23",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "6332:14:23",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5658,
                  "nodeType": "IfStatement",
                  "src": "6328:76:23",
                  "trueBody": {
                    "id": 5657,
                    "nodeType": "Block",
                    "src": "6348:56:23",
                    "statements": [
                      {
                        "errorCall": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "expression": {
                              "id": 5652,
                              "name": "IHyperdrive",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 7411,
                              "src": "6369:11:23",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_IHyperdrive_$7411_$",
                                "typeString": "type(contract IHyperdrive)"
                              }
                            },
                            "id": 5654,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberLocation": "6381:10:23",
                            "memberName": "NotPayable",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 7343,
                            "src": "6369:22:23",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_error_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 5655,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "6369:24:23",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 5656,
                        "nodeType": "RevertStatement",
                        "src": "6362:31:23"
                      }
                    ]
                  }
                }
              ]
            },
            "baseFunctions": [
              8637
            ],
            "documentation": {
              "id": 5644,
              "nodeType": "StructuredDocumentation",
              "src": "6153:107:23",
              "text": "@dev Ensure that ether wasn't sent because ERC4626 vaults don't support\n      deposits of ether."
            },
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_checkMessageValue",
            "nameLocation": "6274:18:23",
            "overrides": {
              "id": 5646,
              "nodeType": "OverrideSpecifier",
              "overrides": [],
              "src": "6309:8:23"
            },
            "parameters": {
              "id": 5645,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6292:2:23"
            },
            "returnParameters": {
              "id": 5647,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6318:0:23"
            },
            "scope": 5661,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "abstract": true,
        "baseContracts": [
          {
            "baseName": {
              "id": 5448,
              "name": "HyperdriveBase",
              "nameLocations": [
                "911:14:23"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 9507,
              "src": "911:14:23"
            },
            "id": 5449,
            "nodeType": "InheritanceSpecifier",
            "src": "911:14:23"
          }
        ],
        "canonicalName": "ERC4626Base",
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": {
          "id": 5447,
          "nodeType": "StructuredDocumentation",
          "src": "541:337:23",
          "text": "@author DELV\n @title ERC4626Base\n @notice The base contract for the ERC4626 Hyperdrive implementation.\n @custom:disclaimer The language used in this code is for coding convenience\n                    only, and is not intended to, and does not, have any\n                    particular legal or regulatory significance."
        },
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          5661,
          9507,
          13187,
          67106,
          7814,
          8304
        ],
        "name": "ERC4626Base",
        "nameLocation": "896:11:23",
        "scope": 5662,
        "usedErrors": [
          67051
        ],
        "usedEvents": [
          7691,
          7703,
          7717,
          7727,
          7741,
          7755,
          7769,
          7783,
          7795,
          7801,
          7805,
          7809,
          7813,
          8287,
          8295,
          8303
        ]
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 23
} as const;
