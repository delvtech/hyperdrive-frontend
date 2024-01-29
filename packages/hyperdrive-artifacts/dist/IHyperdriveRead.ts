export const IHyperdriveRead = 
{
  "abi": [
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "baseToken",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_checkpointTime",
          "type": "uint256"
        }
      ],
      "name": "getCheckpoint",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "vaultSharePrice",
              "type": "uint128"
            }
          ],
          "internalType": "struct IHyperdrive.Checkpoint",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_checkpointTime",
          "type": "uint256"
        }
      ],
      "name": "getCheckpointExposure",
      "outputs": [
        {
          "internalType": "int256",
          "name": "",
          "type": "int256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMarketState",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "shareReserves",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "bondReserves",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "longExposure",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "longsOutstanding",
              "type": "uint128"
            },
            {
              "internalType": "int128",
              "name": "shareAdjustment",
              "type": "int128"
            },
            {
              "internalType": "uint128",
              "name": "shortsOutstanding",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "longAverageMaturityTime",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "shortAverageMaturityTime",
              "type": "uint128"
            },
            {
              "internalType": "bool",
              "name": "isInitialized",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "isPaused",
              "type": "bool"
            },
            {
              "internalType": "uint112",
              "name": "zombieBaseProceeds",
              "type": "uint112"
            },
            {
              "internalType": "uint128",
              "name": "zombieShareReserves",
              "type": "uint128"
            }
          ],
          "internalType": "struct IHyperdrive.MarketState",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPoolConfig",
      "outputs": [
        {
          "components": [
            {
              "internalType": "contract IERC20",
              "name": "baseToken",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "linkerFactory",
              "type": "address"
            },
            {
              "internalType": "bytes32",
              "name": "linkerCodeHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "initialVaultSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "minimumTransactionAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "positionDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "checkpointDuration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "timeStretch",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "governance",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "feeCollector",
              "type": "address"
            },
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "curve",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "flat",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "governanceLP",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "governanceZombie",
                  "type": "uint256"
                }
              ],
              "internalType": "struct IHyperdrive.Fees",
              "name": "fees",
              "type": "tuple"
            }
          ],
          "internalType": "struct IHyperdrive.PoolConfig",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getPoolInfo",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "shareReserves",
              "type": "uint256"
            },
            {
              "internalType": "int256",
              "name": "shareAdjustment",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "zombieBaseProceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "zombieShareReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "bondReserves",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lpTotalSupply",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "vaultSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longsOutstanding",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longAverageMaturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "shortsOutstanding",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "shortAverageMaturityTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "withdrawalSharesReadyToWithdraw",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "withdrawalSharesProceeds",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "lpSharePrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "longExposure",
              "type": "uint256"
            }
          ],
          "internalType": "struct IHyperdrive.PoolInfo",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getUncollectedGovernanceFees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getWithdrawPool",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint128",
              "name": "readyToWithdraw",
              "type": "uint128"
            },
            {
              "internalType": "uint128",
              "name": "proceeds",
              "type": "uint128"
            }
          ],
          "internalType": "struct IHyperdrive.WithdrawPool",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "isPauser",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_slots",
          "type": "uint256[]"
        }
      ],
      "name": "load",
      "outputs": [
        {
          "internalType": "bytes32[]",
          "name": "",
          "type": "bytes32[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "nonces",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "perTokenApprovals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
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
  "methodIdentifiers": {
    "balanceOf(uint256,address)": "3656eec2",
    "baseToken()": "c55dae63",
    "getCheckpoint(uint256)": "20fc4881",
    "getCheckpointExposure(uint256)": "cf210e65",
    "getMarketState()": "d8165743",
    "getPoolConfig()": "b0d96580",
    "getPoolInfo()": "60246c88",
    "getUncollectedGovernanceFees()": "c69e16ad",
    "getWithdrawPool()": "fba56008",
    "isApprovedForAll(address,address)": "e985e9c5",
    "isPauser(address)": "46fbf68e",
    "load(uint256[])": "becee9c3",
    "name(uint256)": "00ad800c",
    "nonces(address)": "7ecebe00",
    "perTokenApprovals(uint256,address,address)": "21ff32a9",
    "symbol(uint256)": "4e41a1fb",
    "totalSupply(uint256)": "bd85b039"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.20+commit.a1b79de6\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseToken\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpoint\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"vaultSharePrice\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.Checkpoint\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_checkpointTime\",\"type\":\"uint256\"}],\"name\":\"getCheckpointExposure\",\"outputs\":[{\"internalType\":\"int256\",\"name\":\"\",\"type\":\"int256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMarketState\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"shareReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"bondReserves\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longExposure\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"int128\",\"name\":\"shareAdjustment\",\"type\":\"int128\"},{\"internalType\":\"uint128\",\"name\":\"shortsOutstanding\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint128\"},{\"internalType\":\"bool\",\"name\":\"isInitialized\",\"type\":\"bool\"},{\"internalType\":\"bool\",\"name\":\"isPaused\",\"type\":\"bool\"},{\"internalType\":\"uint112\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint112\"},{\"internalType\":\"uint128\",\"name\":\"zombieShareReserves\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.MarketState\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolConfig\",\"outputs\":[{\"components\":[{\"internalType\":\"contract IERC20\",\"name\":\"baseToken\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"linkerFactory\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"linkerCodeHash\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"initialVaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"minimumTransactionAmount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"positionDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"checkpointDuration\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"timeStretch\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"governance\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"feeCollector\",\"type\":\"address\"},{\"components\":[{\"internalType\":\"uint256\",\"name\":\"curve\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"flat\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceLP\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"governanceZombie\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.Fees\",\"name\":\"fees\",\"type\":\"tuple\"}],\"internalType\":\"struct IHyperdrive.PoolConfig\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getPoolInfo\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"shareReserves\",\"type\":\"uint256\"},{\"internalType\":\"int256\",\"name\":\"shareAdjustment\",\"type\":\"int256\"},{\"internalType\":\"uint256\",\"name\":\"zombieBaseProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"zombieShareReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"bondReserves\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpTotalSupply\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"vaultSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortsOutstanding\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"shortAverageMaturityTime\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesReadyToWithdraw\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"withdrawalSharesProceeds\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"lpSharePrice\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"longExposure\",\"type\":\"uint256\"}],\"internalType\":\"struct IHyperdrive.PoolInfo\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getUncollectedGovernanceFees\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getWithdrawPool\",\"outputs\":[{\"components\":[{\"internalType\":\"uint128\",\"name\":\"readyToWithdraw\",\"type\":\"uint128\"},{\"internalType\":\"uint128\",\"name\":\"proceeds\",\"type\":\"uint128\"}],\"internalType\":\"struct IHyperdrive.WithdrawPool\",\"name\":\"\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256[]\",\"name\":\"_slots\",\"type\":\"uint256[]\"}],\"name\":\"load\",\"outputs\":[{\"internalType\":\"bytes32[]\",\"name\":\"\",\"type\":\"bytes32[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"nonces\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"perTokenApprovals\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/src/interfaces/IHyperdriveRead.sol\":\"IHyperdriveRead\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":aave-v3-core/=lib/aave-v3-core/\",\":ds-test/=lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\",\":openzeppelin/=lib/openzeppelin-contracts/contracts/\",\":solmate/=lib/solmate/src/\"]},\"sources\":{\"contracts/src/interfaces/IERC20.sol\":{\"keccak256\":\"0xfd51b9727f00a434ea4ced64044c104ed8361fa2ed22600969d1e4ff257b14f3\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://8780b588acc11dd906ff0897adc5b7acdab759fec4d14ce0d52bf002cb90c398\",\"dweb:/ipfs/QmTMaRGveFgN5L3k1h5oAbfp5ccmzT9d36JhChVg9PxJkD\"]},\"contracts/src/interfaces/IHyperdrive.sol\":{\"keccak256\":\"0x81c89ca62586555b915a9609d10014ff9d1f0d82111809d566f614bd9ea2fb16\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://3c4859b122480f504d1f0035ed11983b0d74ea2b16bcf26dfe19365bb4f66240\",\"dweb:/ipfs/QmQEQBxRdsH6zNx2rvzetYZRbB3pMXXWzTuwVPBGVhCHfL\"]},\"contracts/src/interfaces/IHyperdriveCore.sol\":{\"keccak256\":\"0x93cfce28869c1a082c170092b87b04204a91b7898a1e95c3e4270f06fbc76a97\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b8b24e13ff8994550685fec1405bc5d2a5ed6400db061005e72ecff056be51a1\",\"dweb:/ipfs/QmR4RZzyhjYt8xxRPaJWHKhBZdHZPVBHrtNERAZhCaaTFU\"]},\"contracts/src/interfaces/IHyperdriveEvents.sol\":{\"keccak256\":\"0x5c5d6c812fd2cf996d60632c4c8cca7b3d70f5ae4891a3f99c1e10f967f520dd\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://44ef09e50cf76ebab25b90688b19966575cc07fee503ffdb189c3fbbcbfea01f\",\"dweb:/ipfs/QmZEULHXopjaeWbsfXNrEriQomY19s6LXEcae9saeZCpmt\"]},\"contracts/src/interfaces/IHyperdriveRead.sol\":{\"keccak256\":\"0x516967eaae812ff7fff81797190f48fca40838eccfb8243e3f973f2f85b51597\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://50fa3165b126976c218d27f7f276789f8cc680d3136cd631999164a64f03e477\",\"dweb:/ipfs/QmTSCjqQoys2SJNDZrhTdy2M2at8siSb3ZXHjWUoeihQjr\"]},\"contracts/src/interfaces/IMultiToken.sol\":{\"keccak256\":\"0xf5f82b8223e0c1bfcf4f73566a909ba07a9266960dfe2335c1494e06debbbe3f\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://920cf3fd66132a1e98a6a5708ad9a3bb047f4df8848119ab382b51094c1290a7\",\"dweb:/ipfs/QmWL3SyG8L91Coe9DsHz3Ke9tGMvYBf2NgRRDr3Fg5xFzp\"]},\"contracts/src/interfaces/IMultiTokenCore.sol\":{\"keccak256\":\"0xda628a0f7428ad63cb04b6f341c223d7b36803d554e92cd3a793325eae6ad87a\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7dfe92e6fb15eedbba033a96481db1343aeb48039d40d4b5053cc27d3f5e4f3\",\"dweb:/ipfs/QmNeNyjuEd7LkwZMg14fnMsunLXbJRzHYwzC2yEYKi8H3q\"]},\"contracts/src/interfaces/IMultiTokenEvents.sol\":{\"keccak256\":\"0xb5b2a1f90c4e85e1290144b1e0e393027c90f24d6030ee802d0369342d7bf002\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://f7850a790ea32726462f6dd08c87e5250c70155af558b8fdd17dc71d53c5b7f3\",\"dweb:/ipfs/QmWpshz1Ufdqmw8rmZdbdm9ZyEcKHFswLMNaBkBJ3sqNA1\"]},\"contracts/src/interfaces/IMultiTokenMetadata.sol\":{\"keccak256\":\"0xa2e1d420bcae975a3d9aa7918319da2dd047cbc50ad41e0a391048e01b980191\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://335611b957d8ca7c0cee11d6f2268372a7c937bc119c030cb8e274679604b6cd\",\"dweb:/ipfs/QmeoxLRyPVgBXrxetVFEyjsvLNfwAahcHsFdAEzy9otxuU\"]},\"contracts/src/interfaces/IMultiTokenRead.sol\":{\"keccak256\":\"0xf84c46faa4a3323835a80eae3ee969409bf3f5c48ec94a6e486b70cb59a4c868\",\"license\":\"Apache-2.0\",\"urls\":[\"bzz-raw://b1dcc1796eac62773f298b5b77fda8de424d822a7e74825028a0f83c627a5bfb\",\"dweb:/ipfs/QmRbiswdabx3uMgrgkLKe6K6JAQBLafsWqEyZCg3PQbN5Q\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.20+commit.a1b79de6"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "baseToken",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_checkpointTime",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getCheckpoint",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.Checkpoint",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint128",
                  "name": "vaultSharePrice",
                  "type": "uint128"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_checkpointTime",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "getCheckpointExposure",
          "outputs": [
            {
              "internalType": "int256",
              "name": "",
              "type": "int256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getMarketState",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.MarketState",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint128",
                  "name": "shareReserves",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "bondReserves",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "longExposure",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "longsOutstanding",
                  "type": "uint128"
                },
                {
                  "internalType": "int128",
                  "name": "shareAdjustment",
                  "type": "int128"
                },
                {
                  "internalType": "uint128",
                  "name": "shortsOutstanding",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "longAverageMaturityTime",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "shortAverageMaturityTime",
                  "type": "uint128"
                },
                {
                  "internalType": "bool",
                  "name": "isInitialized",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "isPaused",
                  "type": "bool"
                },
                {
                  "internalType": "uint112",
                  "name": "zombieBaseProceeds",
                  "type": "uint112"
                },
                {
                  "internalType": "uint128",
                  "name": "zombieShareReserves",
                  "type": "uint128"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getPoolConfig",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.PoolConfig",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "contract IERC20",
                  "name": "baseToken",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "linkerFactory",
                  "type": "address"
                },
                {
                  "internalType": "bytes32",
                  "name": "linkerCodeHash",
                  "type": "bytes32"
                },
                {
                  "internalType": "uint256",
                  "name": "initialVaultSharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumShareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "minimumTransactionAmount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "positionDuration",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "checkpointDuration",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "timeStretch",
                  "type": "uint256"
                },
                {
                  "internalType": "address",
                  "name": "governance",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "feeCollector",
                  "type": "address"
                },
                {
                  "internalType": "struct IHyperdrive.Fees",
                  "name": "fees",
                  "type": "tuple",
                  "components": [
                    {
                      "internalType": "uint256",
                      "name": "curve",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "flat",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "governanceLP",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "governanceZombie",
                      "type": "uint256"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getPoolInfo",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.PoolInfo",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint256",
                  "name": "shareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "int256",
                  "name": "shareAdjustment",
                  "type": "int256"
                },
                {
                  "internalType": "uint256",
                  "name": "zombieBaseProceeds",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "zombieShareReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "bondReserves",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lpTotalSupply",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vaultSharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longsOutstanding",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longAverageMaturityTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "shortsOutstanding",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "shortAverageMaturityTime",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "withdrawalSharesReadyToWithdraw",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "withdrawalSharesProceeds",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "lpSharePrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "longExposure",
                  "type": "uint256"
                }
              ]
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getUncollectedGovernanceFees",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [],
          "stateMutability": "view",
          "type": "function",
          "name": "getWithdrawPool",
          "outputs": [
            {
              "internalType": "struct IHyperdrive.WithdrawPool",
              "name": "",
              "type": "tuple",
              "components": [
                {
                  "internalType": "uint128",
                  "name": "readyToWithdraw",
                  "type": "uint128"
                },
                {
                  "internalType": "uint128",
                  "name": "proceeds",
                  "type": "uint128"
                }
              ]
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_account",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "isPauser",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256[]",
              "name": "_slots",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "load",
          "outputs": [
            {
              "internalType": "bytes32[]",
              "name": "",
              "type": "bytes32[]"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "nonces",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "spender",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "perTokenApprovals",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "totalSupply",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
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
        "contracts/src/interfaces/IHyperdriveRead.sol": "IHyperdriveRead"
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
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/src/interfaces/IHyperdriveRead.sol",
    "id": 8072,
    "exportedSymbols": {
      "IHyperdrive": [
        7411
      ],
      "IHyperdriveRead": [
        8071
      ],
      "IMultiTokenRead": [
        8377
      ]
    },
    "nodeType": "SourceUnit",
    "src": "39:1133:51",
    "nodes": [
      {
        "id": 7999,
        "nodeType": "PragmaDirective",
        "src": "39:23:51",
        "nodes": [],
        "literals": [
          "solidity",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 8001,
        "nodeType": "ImportDirective",
        "src": "64:48:51",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IHyperdrive.sol",
        "file": "./IHyperdrive.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 8072,
        "sourceUnit": 7412,
        "symbolAliases": [
          {
            "foreign": {
              "id": 8000,
              "name": "IHyperdrive",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 7411,
              "src": "73:11:51",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 8003,
        "nodeType": "ImportDirective",
        "src": "113:56:51",
        "nodes": [],
        "absolutePath": "contracts/src/interfaces/IMultiTokenRead.sol",
        "file": "./IMultiTokenRead.sol",
        "nameLocation": "-1:-1:-1",
        "scope": 8072,
        "sourceUnit": 8378,
        "symbolAliases": [
          {
            "foreign": {
              "id": 8002,
              "name": "IMultiTokenRead",
              "nodeType": "Identifier",
              "overloadedDeclarations": [],
              "referencedDeclaration": 8377,
              "src": "122:15:51",
              "typeDescriptions": {}
            },
            "nameLocation": "-1:-1:-1"
          }
        ],
        "unitAlias": ""
      },
      {
        "id": 8071,
        "nodeType": "ContractDefinition",
        "src": "171:1000:51",
        "nodes": [
          {
            "id": 8010,
            "nodeType": "FunctionDefinition",
            "src": "222:53:51",
            "nodes": [],
            "functionSelector": "c55dae63",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "baseToken",
            "nameLocation": "231:9:51",
            "parameters": {
              "id": 8006,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "240:2:51"
            },
            "returnParameters": {
              "id": 8009,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8008,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8010,
                  "src": "266:7:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8007,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "266:7:51",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "265:9:51"
            },
            "scope": 8071,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8018,
            "nodeType": "FunctionDefinition",
            "src": "281:116:51",
            "nodes": [],
            "functionSelector": "20fc4881",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCheckpoint",
            "nameLocation": "290:13:51",
            "parameters": {
              "id": 8013,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8012,
                  "mutability": "mutable",
                  "name": "_checkpointTime",
                  "nameLocation": "321:15:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 8018,
                  "src": "313:23:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8011,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "313:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "303:39:51"
            },
            "returnParameters": {
              "id": 8017,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8016,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8018,
                  "src": "366:29:51",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Checkpoint_$7120_memory_ptr",
                    "typeString": "struct IHyperdrive.Checkpoint"
                  },
                  "typeName": {
                    "id": 8015,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 8014,
                      "name": "IHyperdrive.Checkpoint",
                      "nameLocations": [
                        "366:11:51",
                        "378:10:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7120,
                      "src": "366:22:51"
                    },
                    "referencedDeclaration": 7120,
                    "src": "366:22:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Checkpoint_$7120_storage_ptr",
                      "typeString": "struct IHyperdrive.Checkpoint"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "365:31:51"
            },
            "scope": 8071,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8025,
            "nodeType": "FunctionDefinition",
            "src": "403:101:51",
            "nodes": [],
            "functionSelector": "cf210e65",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getCheckpointExposure",
            "nameLocation": "412:21:51",
            "parameters": {
              "id": 8021,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8020,
                  "mutability": "mutable",
                  "name": "_checkpointTime",
                  "nameLocation": "451:15:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 8025,
                  "src": "443:23:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8019,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "433:39:51"
            },
            "returnParameters": {
              "id": 8024,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8023,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8025,
                  "src": "496:6:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 8022,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "496:6:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "495:8:51"
            },
            "scope": 8071,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8031,
            "nodeType": "FunctionDefinition",
            "src": "510:107:51",
            "nodes": [],
            "functionSelector": "fba56008",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getWithdrawPool",
            "nameLocation": "519:15:51",
            "parameters": {
              "id": 8026,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "534:2:51"
            },
            "returnParameters": {
              "id": 8030,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8029,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8031,
                  "src": "584:31:51",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_WithdrawPool_$7127_memory_ptr",
                    "typeString": "struct IHyperdrive.WithdrawPool"
                  },
                  "typeName": {
                    "id": 8028,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 8027,
                      "name": "IHyperdrive.WithdrawPool",
                      "nameLocations": [
                        "584:11:51",
                        "596:12:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7127,
                      "src": "584:24:51"
                    },
                    "referencedDeclaration": 7127,
                    "src": "584:24:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_WithdrawPool_$7127_storage_ptr",
                      "typeString": "struct IHyperdrive.WithdrawPool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "583:33:51"
            },
            "scope": 8071,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8037,
            "nodeType": "FunctionDefinition",
            "src": "623:103:51",
            "nodes": [],
            "functionSelector": "b0d96580",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getPoolConfig",
            "nameLocation": "632:13:51",
            "parameters": {
              "id": 8032,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "645:2:51"
            },
            "returnParameters": {
              "id": 8036,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8035,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8037,
                  "src": "695:29:51",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolConfig_$7215_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolConfig"
                  },
                  "typeName": {
                    "id": 8034,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 8033,
                      "name": "IHyperdrive.PoolConfig",
                      "nameLocations": [
                        "695:11:51",
                        "707:10:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7215,
                      "src": "695:22:51"
                    },
                    "referencedDeclaration": 7215,
                    "src": "695:22:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolConfig_$7215_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolConfig"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "694:31:51"
            },
            "scope": 8071,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8043,
            "nodeType": "FunctionDefinition",
            "src": "732:105:51",
            "nodes": [],
            "functionSelector": "d8165743",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getMarketState",
            "nameLocation": "741:14:51",
            "parameters": {
              "id": 8038,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "755:2:51"
            },
            "returnParameters": {
              "id": 8042,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8041,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8043,
                  "src": "805:30:51",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_MarketState_$7116_memory_ptr",
                    "typeString": "struct IHyperdrive.MarketState"
                  },
                  "typeName": {
                    "id": 8040,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 8039,
                      "name": "IHyperdrive.MarketState",
                      "nameLocations": [
                        "805:11:51",
                        "817:11:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7116,
                      "src": "805:23:51"
                    },
                    "referencedDeclaration": 7116,
                    "src": "805:23:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_MarketState_$7116_storage_ptr",
                      "typeString": "struct IHyperdrive.MarketState"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "804:32:51"
            },
            "scope": 8071,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8048,
            "nodeType": "FunctionDefinition",
            "src": "843:72:51",
            "nodes": [],
            "functionSelector": "c69e16ad",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getUncollectedGovernanceFees",
            "nameLocation": "852:28:51",
            "parameters": {
              "id": 8044,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "880:2:51"
            },
            "returnParameters": {
              "id": 8047,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8046,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8048,
                  "src": "906:7:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8045,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "906:7:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "905:9:51"
            },
            "scope": 8071,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8054,
            "nodeType": "FunctionDefinition",
            "src": "921:75:51",
            "nodes": [],
            "functionSelector": "60246c88",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "getPoolInfo",
            "nameLocation": "930:11:51",
            "parameters": {
              "id": 8049,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "941:2:51"
            },
            "returnParameters": {
              "id": 8053,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8052,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8054,
                  "src": "967:27:51",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_PoolInfo_$7261_memory_ptr",
                    "typeString": "struct IHyperdrive.PoolInfo"
                  },
                  "typeName": {
                    "id": 8051,
                    "nodeType": "UserDefinedTypeName",
                    "pathNode": {
                      "id": 8050,
                      "name": "IHyperdrive.PoolInfo",
                      "nameLocations": [
                        "967:11:51",
                        "979:8:51"
                      ],
                      "nodeType": "IdentifierPath",
                      "referencedDeclaration": 7261,
                      "src": "967:20:51"
                    },
                    "referencedDeclaration": 7261,
                    "src": "967:20:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_PoolInfo_$7261_storage_ptr",
                      "typeString": "struct IHyperdrive.PoolInfo"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "966:29:51"
            },
            "scope": 8071,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8061,
            "nodeType": "FunctionDefinition",
            "src": "1002:65:51",
            "nodes": [],
            "functionSelector": "46fbf68e",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "isPauser",
            "nameLocation": "1011:8:51",
            "parameters": {
              "id": 8057,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8056,
                  "mutability": "mutable",
                  "name": "_account",
                  "nameLocation": "1028:8:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 8061,
                  "src": "1020:16:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8055,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1020:7:51",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1019:18:51"
            },
            "returnParameters": {
              "id": 8060,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8059,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8061,
                  "src": "1061:4:51",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8058,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1061:4:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1060:6:51"
            },
            "scope": 8071,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          },
          {
            "id": 8070,
            "nodeType": "FunctionDefinition",
            "src": "1073:96:51",
            "nodes": [],
            "functionSelector": "becee9c3",
            "implemented": false,
            "kind": "function",
            "modifiers": [],
            "name": "load",
            "nameLocation": "1082:4:51",
            "parameters": {
              "id": 8065,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8064,
                  "mutability": "mutable",
                  "name": "_slots",
                  "nameLocation": "1115:6:51",
                  "nodeType": "VariableDeclaration",
                  "scope": 8070,
                  "src": "1096:25:51",
                  "stateVariable": false,
                  "storageLocation": "calldata",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_calldata_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 8062,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1096:7:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 8063,
                    "nodeType": "ArrayTypeName",
                    "src": "1096:9:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1086:41:51"
            },
            "returnParameters": {
              "id": 8069,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8068,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 8070,
                  "src": "1151:16:51",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_bytes32_$dyn_memory_ptr",
                    "typeString": "bytes32[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 8066,
                      "name": "bytes32",
                      "nodeType": "ElementaryTypeName",
                      "src": "1151:7:51",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "id": 8067,
                    "nodeType": "ArrayTypeName",
                    "src": "1151:9:51",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                      "typeString": "bytes32[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1150:18:51"
            },
            "scope": 8071,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "external"
          }
        ],
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 8004,
              "name": "IMultiTokenRead",
              "nameLocations": [
                "200:15:51"
              ],
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 8377,
              "src": "200:15:51"
            },
            "id": 8005,
            "nodeType": "InheritanceSpecifier",
            "src": "200:15:51"
          }
        ],
        "canonicalName": "IHyperdriveRead",
        "contractDependencies": [],
        "contractKind": "interface",
        "fullyImplemented": false,
        "linearizedBaseContracts": [
          8071,
          8377
        ],
        "name": "IHyperdriveRead",
        "nameLocation": "181:15:51",
        "scope": 8072,
        "usedErrors": [],
        "usedEvents": []
      }
    ],
    "license": "Apache-2.0"
  },
  "id": 51
} as const;
